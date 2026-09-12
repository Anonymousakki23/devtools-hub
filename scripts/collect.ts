import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';
import { DataCollectionResult } from '../types';

const DB_PATH = path.join(process.cwd(), 'data', 'devtools.db');

const CATEGORIES: Record<string, { keywords: string[]; searchTerms: string[] }> = {
  'api-tools': { keywords: ['api', 'rest', 'graphql', 'grpc'], searchTerms: ['api builder', 'api testing', 'api gateway'] },
  'testing': { keywords: ['test', 'testing', 'jest', 'vitest', 'cypress', 'playwright'], searchTerms: ['testing framework', 'e2e testing'] },
  'devops': { keywords: ['ci', 'cd', 'docker', 'kubernetes', 'deploy', 'devops'], searchTerms: ['ci cd', 'container', 'deployment'] },
  'frontend': { keywords: ['react', 'vue', 'svelte', 'css', 'ui', 'component'], searchTerms: ['frontend framework', 'ui library'] },
  'backend': { keywords: ['server', 'database', 'orm', 'backend', 'node', 'python'], searchTerms: ['backend framework', 'database tool'] },
  'ai-ml': { keywords: ['ai', 'ml', 'machine learning', 'llm', 'gpt', 'neural'], searchTerms: ['ai tool', 'machine learning', 'llm api'] },
  'cli-tools': { keywords: ['cli', 'command line', 'terminal', 'shell', 'bash'], searchTerms: ['command line tool', 'terminal'] },
  'security': { keywords: ['security', 'auth', 'encryption', 'vault', 'ssl'], searchTerms: ['security tool', 'authentication'] },
  'productivity': { keywords: ['productivity', 'notes', 'kanban', 'project', 'planning'], searchTerms: ['productivity tool', 'project management'] },
  'monitoring': { keywords: ['monitor', 'logging', 'observability', 'metrics', 'apm'], searchTerms: ['monitoring tool', 'logging'] },
  'database': { keywords: ['database', 'sqlite', 'postgres', 'redis', 'mongo', 'db'], searchTerms: ['database tool', 'data management'] },
  'codegen': { keywords: ['code generation', 'scaffold', 'boilerplate', 'template', 'starter'], searchTerms: ['code generator', 'scaffold tool'] },
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 100);
}

function inferCategory(name: string, description: string, topics: string[]): string {
  const text = `${name} ${description} ${topics.join(' ')}`.toLowerCase();
  let bestCategory = 'productivity';
  let bestScore = 0;

  for (const [cat, config] of Object.entries(CATEGORIES)) {
    let score = 0;
    for (const kw of config.keywords) {
      if (text.includes(kw)) score += 2;
    }
    for (const term of config.searchTerms) {
      if (text.includes(term)) score += 3;
    }
    if (score > bestScore) {
      bestScore = score;
      bestCategory = cat;
    }
  }
  return bestCategory;
}

function truncate(str: string, len: number): string {
  if (str.length <= len) return str;
  return str.substring(0, len - 3) + '...';
}

async function fetchWithRetry(url: string, retries = 3, delay = 1000): Promise<Response> {
  for (let i = 0; i < retries; i++) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 15000);
      const res = await fetch(url, {
        signal: controller.signal,
        headers: { 'User-Agent': 'DevToolsHub/1.0 (Automated Curation Bot)' },
      });
      clearTimeout(timeout);

      if (res.status === 429) {
        const retryAfter = parseInt(res.headers.get('Retry-After') || '60', 10);
        console.warn(`Rate limited on ${url}, waiting ${retryAfter}s`);
        await sleep(retryAfter * 1000);
        continue;
      }

      if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      return res;
    } catch (err) {
      if (i === retries - 1) throw err;
      console.warn(`Retry ${i + 1}/${retries} for ${url}: ${err}`);
      await sleep(delay * (i + 1));
    }
  }
  throw new Error(`Failed after ${retries} retries: ${url}`);
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  topics: string[];
  updated_at: string;
  language: string | null;
}

async function collectGitHubTrending(): Promise<{ tools: any[]; errors: string[] }> {
  const tools: any[] = [];
  const errors: string[] = [];

  for (const [category, config] of Object.entries(CATEGORIES)) {
    for (const term of config.searchTerms) {
      try {
        const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(term + ' stars:>10 pushed:>2024-01-01')}&sort=stars&order=desc&per_page=15`;
        const res = await fetchWithRetry(url);
        const data = await res.json();

        if (data.items) {
          for (const repo of data.items as GitHubRepo[]) {
            tools.push({
              name: repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
              slug: slugify(repo.full_name),
              description: repo.description || `${repo.name} - A developer tool`,
              url: repo.html_url,
              category: inferCategory(repo.name, repo.description || '', repo.topics || []),
              tags: JSON.stringify([...(repo.topics || []), repo.language].filter(Boolean)),
              source: 'github',
              source_id: String(repo.id),
              stars: repo.stargazers_count,
              last_updated: repo.updated_at,
              affiliate_url: null,
              meta_title: null,
              meta_description: null,
            });
          }
        }
        await sleep(2000); // GitHub rate limit: 10 req/min for unauthenticated
      } catch (err) {
        errors.push(`GitHub search "${term}": ${err}`);
      }
    }
  }

  return { tools, errors };
}

interface DevToArticle {
  id: number;
  title: string;
  description: string;
  url: string;
  tag_list: string[];
  positive_reactions_count: number;
  published_at: string;
  user: { username: string };
}

async function collectDevTo(): Promise<{ tools: any[]; errors: string[] }> {
  const tools: any[] = [];
  const errors: string[] = [];

  try {
    for (const tag of ['webdev', 'programming', 'javascript', 'python', 'devops', 'ai']) {
      try {
        const url = `https://dev.to/api/articles?tag=${tag}&top=30&per_page=10`;
        const res = await fetchWithRetry(url);
        const articles = await res.json() as DevToArticle[];

        for (const article of articles) {
          if (article.title.toLowerCase().includes('tool') ||
              article.title.toLowerCase().includes('resource') ||
              article.title.toLowerCase().includes('library') ||
              article.title.toLowerCase().includes('framework') ||
              article.description.toLowerCase().includes('tool')) {
            tools.push({
              name: truncate(article.title, 80),
              slug: slugify(`devto-${article.id}-${article.title}`),
              description: truncate(article.description, 300),
              url: article.url,
              category: inferCategory(article.title, article.description, article.tag_list),
              tags: JSON.stringify(article.tag_list),
              source: 'devto',
              source_id: String(article.id),
              stars: article.positive_reactions_count,
              last_updated: article.published_at,
              affiliate_url: null,
              meta_title: null,
              meta_description: null,
            });
          }
        }
        await sleep(1000);
      } catch (err) {
        errors.push(`Dev.to tag "${tag}": ${err}`);
      }
    }
  } catch (err) {
    errors.push(`Dev.to collection failed: ${err}`);
  }

  return { tools, errors };
}

const PRODUCT_HUNT_GRAPHQL = `
query {
  posts(order: RANKING, first: 50) {
    edges {
      node {
        id
        name
        tagline
        url
        votesCount
        createdAt
        topics { edges { node { name } } }
      }
    }
  }
}`;

async function collectProductHunt(): Promise<{ tools: any[]; errors: string[] }> {
  const errors: string[] = [];
  // Product Hunt requires OAuth - use their public RSS or alternative endpoint
  // For zero-cost, we'll use a curated seed list instead
  const seedTools = [
    { name: 'Supabase', slug: 'supabase', description: 'Open source Firebase alternative with Postgres, Auth, Edge Functions, Realtime, and Storage', url: 'https://supabase.com', category: 'database', tags: '["database","auth","realtime"]', source: 'seed', source_id: 'supabase', stars: 72000, last_updated: '2024-01-01' },
    { name: 'Vercel', slug: 'vercel', description: 'Develop. Preview. Ship. The platform for frontend developers.', url: 'https://vercel.com', category: 'devops', tags: '["hosting","deployment","frontend"]', source: 'seed', source_id: 'vercel', stars: 13000, last_updated: '2024-01-01' },
    { name: 'Cloudflare Workers', slug: 'cloudflare-workers', description: 'Serverless execution environment that allows you to create new applications', url: 'https://workers.cloudflare.com', category: 'backend', tags: '["serverless","edge","workers"]', source: 'seed', source_id: 'cf-workers', stars: 8000, last_updated: '2024-01-01' },
    { name: 'Railway', slug: 'railway', description: 'Instant deployments, zero config. Deploy your code with Railway.', url: 'https://railway.app', category: 'devops', tags: '["hosting","deployment","backend"]', source: 'seed', source_id: 'railway', stars: 5000, last_updated: '2024-01-01' },
    { name: 'Neon', slug: 'neon', description: 'Serverless Postgres. Branching, autoscaling, and more.', url: 'https://neon.tech', category: 'database', tags: '["database","postgres","serverless"]', source: 'seed', source_id: 'neon', stars: 12000, last_updated: '2024-01-01' },
    { name: 'Turso', slug: 'turso', description: 'SQLite for Production. LibSQL edge database.', url: 'https://turso.tech', category: 'database', tags: '["database","sqlite","edge"]', source: 'seed', source_id: 'turso', stars: 7000, last_updated: '2024-01-01' },
    { name: 'Upstash', slug: 'upstash', description: 'Serverless Redis and Kafka. Pay per request.', url: 'https://upstash.com', category: 'database', tags: '["redis","kafka","serverless"]', source: 'seed', source_id: 'upstash', stars: 4500, last_updated: '2024-01-01' },
    { name: 'Resend', slug: 'resend', description: 'The best API to reach humans instead of spam folders', url: 'https://resend.com', category: 'api-tools', tags: '["email","api","transactional"]', source: 'seed', source_id: 'resend', stars: 9000, last_updated: '2024-01-01' },
    { name: 'Inngest', slug: 'inngest', description: 'The open-source durable execution platform for building reliable workflows', url: 'https://inngest.com', category: 'devops', tags: '["workflow","queues","serverless"]', source: 'seed', source_id: 'inngest', stars: 4000, last_updated: '2024-01-01' },
    { name: 'Svix', slug: 'svix', description: 'The open source webhook sending service', url: 'https://svix.com', category: 'api-tools', tags: '["webhooks","api","infrastructure"]', source: 'seed', source_id: 'svix', stars: 5500, last_updated: '2024-01-01' },
    { name: 'Cal.com', slug: 'cal-com', description: 'Scheduling infrastructure for everyone', url: 'https://cal.com', category: 'productivity', tags: '["scheduling","calendar","open-source"]', source: 'seed', source_id: 'cal-com', stars: 32000, last_updated: '2024-01-01' },
    { name: 'Documenso', slug: 'documenso', description: 'The open source alternative to DocuSign', url: 'https://documenso.com', category: 'productivity', tags: '["documents","esignature","open-source"]', source: 'seed', source_id: 'documenso', stars: 9000, last_updated: '2024-01-01' },
    { name: 'Nocodb', slug: 'nocodb', description: 'The Open Source Airtable Alternative', url: 'https://nocodb.com', category: 'database', tags: '["database","spreadsheet","no-code"]', source: 'seed', source_id: 'nocodb', stars: 46000, last_updated: '2024-01-01' },
    { name: 'Appwrite', slug: 'appwrite', description: 'Open-source Backend-as-a-Service', url: 'https://appwrite.io', category: 'backend', tags: '["backend","auth","database"]', source: 'seed', source_id: 'appwrite', stars: 44000, last_updated: '2024-01-01' },
    { name: 'SurrealDB', slug: 'surrealdb', description: 'A scalable, distributed, collaborative, document-graph database', url: 'https://surrealdb.com', category: 'database', tags: '["database","graph","document"]', source: 'seed', source_id: 'surrealdb', stars: 27000, last_updated: '2024-01-01' },
    { name: 'Meilisearch', slug: 'meilisearch', description: 'A lightning-fast search engine that fits effortlessly into your apps', url: 'https://meilisearch.com', category: 'database', tags: '["search","fulltext","engine"]', source: 'seed', source_id: 'meilisearch', stars: 44000, last_updated: '2024-01-01' },
    { name: 'Excalidraw', slug: 'excalidraw', description: 'Virtual whiteboard for sketching hand-drawn like diagrams', url: 'https://excalidraw.com', category: 'productivity', tags: '["drawing","whiteboard","diagrams"]', source: 'seed', source_id: 'excalidraw', stars: 80000, last_updated: '2024-01-01' },
    { name: 'Umami', slug: 'umami', description: 'A simple, fast, privacy-focused alternative to Google Analytics', url: 'https://umami.is', category: 'monitoring', tags: '["analytics","privacy","open-source"]', source: 'seed', source_id: 'umami', stars: 17000, last_updated: '2024-01-01' },
    { name: 'Plausible', slug: 'plausible', description: 'Simple and privacy-friendly Google Analytics alternative', url: 'https://plausible.io', category: 'monitoring', tags: '["analytics","privacy","saas"]', source: 'seed', source_id: 'plausible', stars: 20000, last_updated: '2024-01-01' },
    { name: 'Hatchet', slug: 'hatchet', description: 'A platform for distributed task execution', url: 'https://hatchet.run', category: 'devops', tags: '["tasks","queues","distributed"]', source: 'seed', source_id: 'hatchet', stars: 4000, last_updated: '2024-01-01' },
    { name: 'Trigger.dev', slug: 'trigger-dev', description: 'The open source background jobs framework', url: 'https://trigger.dev', category: 'devops', tags: '["jobs","queues","serverless"]', source: 'seed', source_id: 'trigger-dev', stars: 8000, last_updated: '2024-01-01' },
    { name: 'Ballpoint', slug: 'ballpoint', description: 'Puppeteer based PDF generation API', url: 'https://ballpoint.dev', category: 'api-tools', tags: '["pdf","api","generation"]', source: 'seed', source_id: 'ballpoint', stars: 500, last_updated: '2024-01-01' },
    { name: 'Twenty', slug: 'twenty', description: 'The open source CRM alternative to Salesforce', url: 'https://twenty.com', category: 'productivity', tags: '["crm","sales","open-source"]', source: 'seed', source_id: 'twenty', stars: 22000, last_updated: '2024-01-01' },
    { name: 'Dub.co', slug: 'dub-co', description: 'Open-source link management infrastructure', url: 'https://dub.co', category: 'api-tools', tags: '["links","analytics","shortener"]', source: 'seed', source_id: 'dub-co', stars: 16000, last_updated: '2024-01-01' },
    { name: 'Cronjob', slug: 'cronjob', description: 'A modern cron job service', url: 'https://cronjob.dev', category: 'devops', tags: '["cron","scheduler","jobs"]', source: 'seed', source_id: 'cronjob', stars: 500, last_updated: '2024-01-01' },
    { name: 'Invincible', slug: 'invincible', description: 'Website monitoring and status pages', url: 'https://invincible.dev', category: 'monitoring', tags: '["monitoring","uptime","status"]', source: 'seed', source_id: 'invincible', stars: 300, last_updated: '2024-01-01' },
    { name: 'Snaplet', slug: 'snaplet', description: 'Generate realistic databases from your production data', url: 'https://snaplet.dev', category: 'database', tags: '["database","seeding","development"]', source: 'seed', source_id: 'snaplet', stars: 3000, last_updated: '2024-01-01' },
    { name: 'Logcat', slug: 'logcat', description: 'Open source logging and monitoring', url: 'https://logcat.dev', category: 'monitoring', tags: '["logging","monitoring","observability"]', source: 'seed', source_id: 'logcat', stars: 800, last_updated: '2024-01-01' },
    { name: 'Jitter', slug: 'jitter', description: 'Motion design tool for developers', url: 'https://jitter.video', category: 'productivity', tags: '["animation","design","video"]', source: 'seed', source_id: 'jitter', stars: 2500, last_updated: '2024-01-01' },
    { name: 'Fine', slug: 'fine', description: 'Open source AI coding assistant', url: 'https://fine.dev', category: 'ai-ml', tags: '["ai","coding","assistant"]', source: 'seed', source_id: 'fine', stars: 6000, last_updated: '2024-01-01' },
    { name: 'Langfuse', slug: 'langfuse', description: 'Open source LLM engineering platform', url: 'https://langfuse.com', category: 'ai-ml', tags: '["llm","observability","tracing"]', source: 'seed', source_id: 'langfuse', stars: 5000, last_updated: '2024-01-01' },
    { name: 'Morphik', slug: 'morphik', description: 'Open source RAG infrastructure', url: 'https://morphik.ai', category: 'ai-ml', tags: '["rag","search","ai"]', source: 'seed', source_id: 'morphik', stars: 2000, last_updated: '2024-01-01' },
    { name: 'Midday', slug: 'midday', description: 'Open source business tool for freelancers', url: 'https://midday.ai', category: 'productivity', tags: '["invoicing","finance","freelance"]', source: 'seed', source_id: 'midday', stars: 5000, last_updated: '2024-01-01' },
  ];

  return { tools: seedTools, errors };
}

async function collectAlternativeTo(): Promise<{ tools: any[]; errors: string[] }> {
  const errors: string[] = [];
  // AlternativeTo's API is limited - use curated approach
  const tools: any[] = [];

  const alternatives = [
    { name: 'LiteLLM', slug: 'litellm', description: 'Open source LLM Proxy. Call 100+ LLMs using the OpenAI format', url: 'https://github.com/BerriAI/litellm', category: 'ai-ml', tags: '["llm","proxy","api"]', source: 'github', source_id: 'litellm', stars: 15000 },
    { name: 'Inbox Zero', slug: 'inbox-zero', description: 'Open source email management tool', url: 'https://github.com/elie222/inbox-zero', category: 'productivity', tags: '["email","productivity","ai"]', source: 'github', source_id: 'inbox-zero', stars: 10000 },
    { name: 'Formbricks', slug: 'formbricks', description: 'Open source survey platform', url: 'https://formbricks.com', category: 'productivity', tags: '["surveys","feedback","forms"]', source: 'seed', source_id: 'formbricks', stars: 6000 },
    { name: 'Chatwoot', slug: 'chatwoot', description: 'Open source customer support platform', url: 'https://chatwoot.com', category: 'productivity', tags: '["support","chat","helpdesk"]', source: 'seed', source_id: 'chatwoot', stars: 20000 },
    { name: 'Novu', slug: 'novu', description: 'Open source notification infrastructure', url: 'https://novu.co', category: 'api-tools', tags: '["notifications","messaging","infra"]', source: 'seed', source_id: 'novu', stars: 34000 },
    { name: 'Listmonk', slug: 'listmonk', description: 'High performance, self-hosted newsletter and mailing list manager', url: 'https://listmonk.app', category: 'backend', tags: '["newsletter","email","marketing"]', source: 'seed', source_id: 'listmonk', stars: 15000 },
    { name: 'Penpot', slug: 'penpot', description: 'Open source design and prototyping platform', url: 'https://penpot.app', category: 'frontend', tags: '["design","ui","prototyping"]', source: 'seed', source_id: 'penpot', stars: 33000 },
    { name: 'Duplicati', slug: 'duplicati', description: 'Free backup software that securely encrypts your data', url: 'https://duplicati.com', category: 'devops', tags: '["backup","storage","encryption"]', source: 'seed', source_id: 'duplicati', stars: 3000 },
  ];

  return { tools: alternatives, errors };
}

async function collectAll(): Promise<DataCollectionResult> {
  console.log('Starting data collection...');
  const allErrors: string[] = [];
  const sources: Record<string, number> = {};

  const fs = require('fs');
  const dir = path.dirname(DB_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const db = new Database(DB_PATH);
  db.pragma('journal_mode = WAL');
  db.pragma('foreign_keys = ON');

  // Initialize schema inline to avoid circular import
  db.exec(`
    CREATE TABLE IF NOT EXISTS tools (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      slug TEXT UNIQUE NOT NULL,
      description TEXT NOT NULL,
      url TEXT NOT NULL,
      category TEXT NOT NULL,
      tags TEXT DEFAULT '[]',
      source TEXT NOT NULL,
      source_id TEXT NOT NULL,
      stars INTEGER DEFAULT 0,
      last_updated TEXT NOT NULL,
      featured INTEGER DEFAULT 0,
      affiliate_url TEXT,
      meta_title TEXT,
      meta_description TEXT,
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now')),
      UNIQUE(source, source_id)
    );
    CREATE TABLE IF NOT EXISTS categories (
      name TEXT PRIMARY KEY,
      slug TEXT UNIQUE NOT NULL,
      description TEXT DEFAULT '',
      tool_count INTEGER DEFAULT 0
    );
    CREATE TABLE IF NOT EXISTS analytics_events (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      event_type TEXT NOT NULL,
      page_path TEXT NOT NULL,
      referrer TEXT,
      user_agent TEXT,
      timestamp TEXT DEFAULT (datetime('now')),
      metadata TEXT
    );
    CREATE TABLE IF NOT EXISTS page_metrics (
      page_path TEXT PRIMARY KEY,
      views INTEGER DEFAULT 0,
      unique_visitors INTEGER DEFAULT 0,
      avg_time_on_page REAL DEFAULT 0,
      bounce_rate REAL DEFAULT 0,
      affiliate_clicks INTEGER DEFAULT 0,
      last_updated TEXT DEFAULT (datetime('now'))
    );
    CREATE TABLE IF NOT EXISTS keyword_perf (
      keyword TEXT NOT NULL,
      page_path TEXT NOT NULL,
      impressions INTEGER DEFAULT 0,
      clicks INTEGER DEFAULT 0,
      ctr REAL DEFAULT 0,
      avg_position REAL DEFAULT 0,
      last_updated TEXT DEFAULT (datetime('now')),
      PRIMARY KEY(keyword, page_path)
    );
    CREATE TABLE IF NOT EXISTS optimization_config (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL,
      updated_at TEXT DEFAULT (datetime('now'))
    );
  `);

  const upsertTool = db.prepare(`
    INSERT INTO tools (name, slug, description, url, category, tags, source, source_id, stars, last_updated, affiliate_url, meta_title, meta_description)
    VALUES (@name, @slug, @description, @url, @category, @tags, @source, @source_id, @stars, @last_updated, @affiliate_url, @meta_title, @meta_description)
    ON CONFLICT(source, source_id) DO UPDATE SET
      name = excluded.name,
      description = excluded.description,
      url = excluded.url,
      category = excluded.category,
      tags = excluded.tags,
      stars = excluded.stars,
      last_updated = excluded.last_updated,
      updated_at = datetime('now')
  `);

  // Collect from all sources in parallel
  const [githubResult, devtoResult, phResult, altResult] = await Promise.all([
    collectGitHubTrending().catch(e => ({ tools: [], errors: [`GitHub: ${e}`] })),
    collectDevTo().catch(e => ({ tools: [], errors: [`Dev.to: ${e}`] })),
    collectProductHunt().catch(e => ({ tools: [], errors: [`ProductHunt: ${e}`] })),
    collectAlternativeTo().catch(e => ({ tools: [], errors: [`AltTo: ${e}`] })),
  ]);

  const allCollections = [githubResult, devtoResult, phResult, altResult];

  for (const result of allCollections) {
    allErrors.push(...result.errors);
  }

  // Upsert all tools
  const insertMany = db.transaction((tools: any[]) => {
    let count = 0;
    for (const tool of tools) {
      try {
        upsertTool.run({
          ...tool,
          meta_title: tool.meta_title || null,
          meta_description: tool.meta_description || null,
          affiliate_url: tool.affiliate_url || null,
        });
        count++;
      } catch (err) {
        allErrors.push(`Insert ${tool.slug}: ${err}`);
      }
    }
    return count;
  });

  for (const result of allCollections) {
    const count = insertMany(result.tools);
    sources[result.tools[0]?.source || 'unknown'] = (sources[result.tools[0]?.source || 'unknown'] || 0) + count;
  }

  // Update categories
  for (const [catName, config] of Object.entries(CATEGORIES)) {
    const slug = slugify(catName);
    db.prepare(`
      INSERT INTO categories (name, slug, description, tool_count)
      VALUES (?, ?, ?, (SELECT COUNT(*) FROM tools WHERE category = ?))
      ON CONFLICT(name) DO UPDATE SET
        tool_count = (SELECT COUNT(*) FROM tools WHERE category = excluded.name)
    `).run(catName, slug, `Curated collection of ${catName} tools and resources`, catName);
  }

  // Auto-feature top tools per category
  db.exec(`
    UPDATE tools SET featured = 0;
    UPDATE tools SET featured = 1 WHERE id IN (
      SELECT id FROM (
        SELECT id, ROW_NUMBER() OVER (PARTITION BY category ORDER BY stars DESC) as rn
        FROM tools
      ) WHERE rn <= 3
    )
  `);

  const totalTools = (db.prepare('SELECT COUNT(*) as count').get() as { count: number }).count;
  console.log(`Collection complete: ${totalTools} total tools in DB`);

  db.close();

  return {
    tools: totalTools,
    errors: allErrors,
    sources,
  };
}

// Run if executed directly
if (require.main === module) {
  collectAll()
    .then(result => {
      console.log('Collection result:', JSON.stringify(result, null, 2));
      if (result.errors.length > 0) {
        console.warn(`${result.errors.length} errors encountered`);
      }
    })
    .catch(err => {
      console.error('Fatal collection error:', err);
      process.exit(1);
    });
}

export { collectAll };
