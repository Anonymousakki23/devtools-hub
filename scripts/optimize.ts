import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

const DB_PATH = path.join(process.cwd(), 'data', 'devtools.db');

const CATEGORY_DESCRIPTIONS: Record<string, string[]> = {
  'api-tools': [
    'Free API tools for building, testing, and managing REST and GraphQL APIs.',
    'Open source API development tools and services with generous free tiers.',
    'Best free tools for API monitoring, documentation, and gateway management.',
  ],
  'testing': [
    'Free and open source testing frameworks for unit, integration, and e2e testing.',
    'Top free testing tools for JavaScript, Python, and other languages.',
    'Best free testing automation frameworks for CI/CD pipelines.',
  ],
  'devops': [
    'Free DevOps tools for CI/CD, containerization, and deployment automation.',
    'Open source infrastructure tools with free tiers for small teams.',
    'Best free tools for continuous integration, delivery, and infrastructure management.',
  ],
  'frontend': [
    'Free frontend frameworks, UI libraries, and component collections.',
    'Open source UI tools and design systems for web developers.',
    'Best free React, Vue, Svelte, and other frontend framework resources.',
  ],
  'backend': [
    'Free backend frameworks, server tools, and runtime environments.',
    'Open source backend development tools and libraries.',
    'Best free tools for building APIs, servers, and backend services.',
  ],
  'ai-ml': [
    'Free AI and machine learning tools, APIs, and frameworks.',
    'Open source LLM tools, vector databases, and AI development platforms.',
    'Best free resources for building AI-powered applications.',
  ],
  'cli-tools': [
    'Free command-line tools and terminal utilities for developers.',
    'Open source CLI frameworks and terminal productivity tools.',
    'Best free terminal-based development tools and scripts.',
  ],
  'security': [
    'Free security tools, authentication libraries, and encryption utilities.',
    'Open source security frameworks and vulnerability scanners.',
    'Best free tools for application security and compliance.',
  ],
  'productivity': [
    'Free productivity tools, project management apps, and collaboration platforms.',
    'Open source alternatives to popular SaaS productivity tools.',
    'Best free tools for developer productivity and workflow automation.',
  ],
  'monitoring': [
    'Free monitoring, logging, and observability tools for applications.',
    'Open source analytics and error tracking platforms.',
    'Best free tools for application performance monitoring and alerting.',
  ],
  'database': [
    'Free database tools, ORMs, and data management utilities.',
    'Open source database alternatives with generous free tiers.',
    'Best free SQL and NoSQL database tools for developers.',
  ],
  'codegen': [
    'Free code generation, scaffolding, and boilerplate tools.',
    'Open source tools for automating code creation and project setup.',
    'Best free tools for generating boilerplate and starter code.',
  ],
};

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').substring(0, 100);
}

interface OptimizationResult {
  keywordRotations: number;
  metaUpdates: number;
  categoryRefreshes: number;
  sitemapRegenerated: boolean;
  lowPerfCleanup: number;
}

function optimizeKeywords(db: Database.Database): number {
  console.log('Optimizing keywords based on performance data...');
  let rotations = 0;

  const topPages = db.prepare(`
    SELECT page_path, views, affiliate_clicks
    FROM page_metrics
    WHERE views > 0
    ORDER BY views DESC
    LIMIT 50
  `).all() as Array<{ page_path: string; views: number; affiliate_clicks: number }>;

  for (const page of topPages) {
    const slug = page.page_path.split('/').filter(Boolean).pop();
    if (!slug) continue;

    const tool = db.prepare('SELECT * FROM tools WHERE slug = ?').get(slug) as any;
    if (!tool) continue;

    // Generate keyword variants based on tool performance
    const baseKeywords = JSON.parse(tool.tags || '[]');
    const performanceBoost = page.affiliate_clicks > 5 ? 'high-converting' : '';
    const viewsTier = page.views > 100 ? 'popular' : page.views > 30 ? 'trending' : '';

    const keywords = [...baseKeywords];
    if (performanceBoost) keywords.push(performanceBoost);
    if (viewsTier) keywords.push(viewsTier);

    // Update meta title with high-performing keyword
    const categoryLabel = tool.category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    if (page.views > 50) {
      const bestKeyword = baseKeywords[0] || tool.category;
      const newTitle = `${tool.name} - Top ${bestKeyword} Tool | ${categoryLabel} | DevTools Hub`;

      db.prepare(`
        UPDATE tools SET meta_title = ?, meta_description = ?,
        updated_at = datetime('now') WHERE id = ?
      `).run(
        newTitle.substring(0, 60),
        `${tool.description} Free ${bestKeyword} tool with ${tool.stars} GitHub stars. Compare on DevTools Hub.`.substring(0, 160),
        tool.id
      );
      rotations++;
    }
  }

  console.log(`  - ${rotations} keyword optimizations applied`);
  return rotations;
}

function refreshMetaDescriptions(db: Database.Database): number {
  console.log('Refreshing meta descriptions for low-performing pages...');
  let updates = 0;

  const lowPerformers = db.prepare(`
    SELECT tools.slug, tools.name, tools.description, tools.category, tools.stars,
           page_metrics.views
    FROM tools
    LEFT JOIN page_metrics ON tools.slug = REPLACE(page_metrics.page_path, '/tools/', '')
    WHERE page_metrics.views < 10 OR page_metrics.views IS NULL
    ORDER BY tools.stars DESC
    LIMIT 30
  `).all() as any[];

  for (const tool of lowPerformers) {
    const descriptions = CATEGORY_DESCRIPTIONS[tool.category] || [
      `Free ${tool.category.replace(/-/g, ' ')} tool.`,
    ];
    const baseDesc = tool.description.substring(0, 120);
    const newDesc = `${baseDesc}. ${descriptions[0]} Free and open source. Compare on DevTools Hub.`.substring(0, 160);

    db.prepare(`
      UPDATE tools SET meta_description = ?, updated_at = datetime('now')
      WHERE slug = ? AND (meta_description IS NULL OR meta_description = '')
    `).run(newDesc, tool.slug);
    updates++;
  }

  console.log(`  - ${updates} meta descriptions refreshed`);
  return updates;
}

function refreshCategoryDescriptions(db: Database.Database): number {
  console.log('Refreshing category descriptions...');
  let refreshes = 0;

  const categories = db.prepare('SELECT * FROM categories').all() as any[];

  for (const cat of categories) {
    const descs = CATEGORY_DESCRIPTIONS[cat.name] || [];
    if (descs.length === 0) continue;

    // Rotate through descriptions based on day of month
    const dayOfMonth = new Date().getDate();
    const descIndex = dayOfMonth % descs.length;
    const newDesc = descs[descIndex];

    if (newDesc && newDesc !== cat.description) {
      db.prepare('UPDATE categories SET description = ? WHERE name = ?').run(newDesc, cat.name);
      refreshes++;
    }
  }

  console.log(`  - ${refreshes} category descriptions refreshed`);
  return refreshes;
}

function regenerateSitemap(db: Database.Database): boolean {
  console.log('Regenerating sitemap...');

  try {
    const categories = db.prepare('SELECT * FROM categories ORDER BY tool_count DESC').all() as any[];
    const tools = db.prepare('SELECT * FROM tools ORDER BY stars DESC').all() as any[];

    const urls = [
      `<url><loc>https://devtools-hub.pages.dev/</loc><changefreq>daily</changefreq><priority>1.0</priority></url>`,
      `<url><loc>https://devtools-hub.pages.dev/categories/</loc><changefreq>daily</changefreq><priority>0.9</priority></url>`,
    ];

    for (const cat of categories) {
      urls.push(`<url><loc>https://devtools-hub.pages.dev/categories/${cat.slug}/</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`);
    }

    for (const tool of tools) {
      urls.push(`<url><loc>https://devtools-hub.pages.dev/tools/${tool.slug}/</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>`);
    }

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

    const publicDir = path.join(process.cwd(), 'public');
    if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);

    console.log(`  - Sitemap regenerated with ${urls.length} URLs`);
    return true;
  } catch (err) {
    console.error('  - Sitemap regeneration failed:', err);
    return false;
  }
}

function cleanupLowPerformers(db: Database.Database): number {
  console.log('Cleaning up low-performing tools...');
  let cleaned = 0;

  // Delete tools with 0 stars and old last_updated
  const result = db.prepare(`
    DELETE FROM tools WHERE stars < 5
    AND last_updated < datetime('now', '-90 days')
    AND featured = 0
  `).run();
  cleaned = result.changes;

  // Recalculate category counts
  db.exec(`
    UPDATE categories SET tool_count = (
      SELECT COUNT(*) FROM tools WHERE tools.category = categories.name
    )
  `);

  // Remove empty categories
  db.prepare('DELETE FROM categories WHERE tool_count = 0').run();

  console.log(`  - ${cleaned} low-performing tools cleaned up`);
  return cleaned;
}

function updateOptimizationLog(db: Database.Database, result: OptimizationResult) {
  const logEntry = JSON.stringify({
    ...result,
    timestamp: new Date().toISOString(),
  });

  db.prepare(`
    INSERT INTO optimization_config (key, value, updated_at)
    VALUES ('last_optimization', ?, datetime('now'))
    ON CONFLICT(key) DO UPDATE SET value = excluded.value, updated_at = datetime('now')
  `).run(logEntry);

  // Keep last 30 optimization logs
  db.prepare(`
    DELETE FROM optimization_config WHERE key LIKE 'optimization_log_%'
    AND key NOT IN (
      SELECT key FROM optimization_config
      WHERE key LIKE 'optimization_log_%'
      ORDER BY updated_at DESC LIMIT 30
    )
  `).run();
}

function runOptimization(): OptimizationResult {
  console.log('=== DevTools Hub Optimization Pipeline ===');
  console.log(`Started at: ${new Date().toISOString()}`);

  if (!fs.existsSync(DB_PATH)) {
    console.error('Database not found. Run collect.ts first.');
    return {
      keywordRotations: 0,
      metaUpdates: 0,
      categoryRefreshes: 0,
      sitemapRegenerated: false,
      lowPerfCleanup: 0,
    };
  }

  const db = new Database(DB_PATH);
  db.pragma('journal_mode = WAL');

  try {
    const result: OptimizationResult = {
      keywordRotations: optimizeKeywords(db),
      metaUpdates: refreshMetaDescriptions(db),
      categoryRefreshes: refreshCategoryDescriptions(db),
      sitemapRegenerated: regenerateSitemap(db),
      lowPerfCleanup: cleanupLowPerformers(db),
    };

    updateOptimizationLog(db, result);

    console.log('\n=== Optimization Complete ===');
    console.log(`Keyword rotations: ${result.keywordRotations}`);
    console.log(`Meta updates: ${result.metaUpdates}`);
    console.log(`Category refreshes: ${result.categoryRefreshes}`);
    console.log(`Sitemap regenerated: ${result.sitemapRegenerated}`);
    console.log(`Low-perf cleanup: ${result.lowPerfCleanup}`);

    return result;
  } finally {
    db.close();
  }
}

if (require.main === module) {
  const result = runOptimization();
  process.exit(0);
}

export { runOptimization };
