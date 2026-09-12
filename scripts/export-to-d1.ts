import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

const DB_PATH = path.join(process.cwd(), 'data', 'devtools.db');
const EXPORT_DIR = path.join(process.cwd(), 'data', 'exports');

function exportToD1Sql(): string {
  if (!fs.existsSync(DB_PATH)) {
    console.error('Database not found. Run collect.ts first.');
    process.exit(1);
  }

  const db = new Database(DB_PATH, { readonly: true });
  const lines: string[] = [];

  lines.push('-- DevTools Hub D1 Export');
  lines.push('-- Generated: ' + new Date().toISOString());
  lines.push('');

  // Schema
  lines.push(`
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

  // Data
  const tools = db.prepare('SELECT * FROM tools').all() as any[];
  for (const tool of tools) {
    const values = [
      tool.name, tool.slug, tool.description, tool.url, tool.category,
      tool.tags, tool.source, tool.source_id, tool.stars, tool.last_updated,
      tool.featured, tool.affiliate_url, tool.meta_title, tool.meta_description,
    ].map(v => v === null ? 'NULL' : `'${String(v).replace(/'/g, "''")}'`).join(', ');
    lines.push(`INSERT OR REPLACE INTO tools (name, slug, description, url, category, tags, source, source_id, stars, last_updated, featured, affiliate_url, meta_title, meta_description) VALUES (${values});`);
  }

  const categories = db.prepare('SELECT * FROM categories').all() as any[];
  for (const cat of categories) {
    const values = [cat.name, cat.slug, cat.description, cat.tool_count]
      .map(v => `'${String(v).replace(/'/g, "''")}'`).join(', ');
    lines.push(`INSERT OR REPLACE INTO categories (name, slug, description, tool_count) VALUES (${values});`);
  }

  const metrics = db.prepare('SELECT * FROM page_metrics').all() as any[];
  for (const m of metrics) {
    const values = [m.page_path, m.views, m.unique_visitors, m.avg_time_on_page, m.bounce_rate, m.affiliate_clicks]
      .map(v => `'${String(v).replace(/'/g, "''")}'`).join(', ');
    lines.push(`INSERT OR REPLACE INTO page_metrics (page_path, views, unique_visitors, avg_time_on_page, bounce_rate, affiliate_clicks) VALUES (${values});`);
  }

  const config = db.prepare('SELECT * FROM optimization_config').all() as any[];
  for (const c of config) {
    const values = [c.key, c.value].map(v => `'${String(v).replace(/'/g, "''")}'`).join(', ');
    lines.push(`INSERT OR REPLACE INTO optimization_config (key, value) VALUES (${values});`);
  }

  db.close();

  lines.push('');
  lines.push(`-- Total: ${tools.length} tools, ${categories.length} categories`);
  lines.push(`-- Export complete`);

  return lines.join('\n');
}

if (require.main === module) {
  if (!fs.existsSync(EXPORT_DIR)) fs.mkdirSync(EXPORT_DIR, { recursive: true });

  const sql = exportToD1Sql();
  const outputPath = path.join(EXPORT_DIR, 'd1-export.sql');
  fs.writeFileSync(outputPath, sql);

  console.log(`D1 export written to ${outputPath}`);
  console.log(`File size: ${(sql.length / 1024).toFixed(1)} KB`);
  console.log('');
  console.log('To import into D1:');
  console.log('  wrangler d1 execute devtools-db --remote --file=data/exports/d1-export.sql');
}

export { exportToD1Sql };
