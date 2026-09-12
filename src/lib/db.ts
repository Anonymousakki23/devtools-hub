import Database from 'better-sqlite3';
import path from 'path';
import { Tool, Category, AnalyticsEvent, PageMetrics, KeywordPerf, OptimizationConfig } from '../types';

const DB_PATH = path.join(process.cwd(), 'data', 'devtools.db');

let _db: Database.Database | null = null;

export function getDb(): Database.Database {
  if (!_db) {
    const fs = require('fs');
    const dir = path.dirname(DB_PATH);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    _db = new Database(DB_PATH);
    _db.pragma('journal_mode = WAL');
    _db.pragma('foreign_keys = ON');
    initSchema(_db);
  }
  return _db;
}

function initSchema(db: Database.Database) {
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

    CREATE INDEX IF NOT EXISTS idx_tools_category ON tools(category);
    CREATE INDEX IF NOT EXISTS idx_tools_stars ON tools(stars DESC);
    CREATE INDEX IF NOT EXISTS idx_tools_slug ON tools(slug);
    CREATE INDEX IF NOT EXISTS idx_analytics_page ON analytics_events(page_path);
    CREATE INDEX IF NOT EXISTS idx_analytics_timestamp ON analytics_events(timestamp);
    CREATE INDEX IF NOT EXISTS idx_page_metrics_views ON page_metrics(views DESC);
  `);
}

export const toolQueries = {
  upsert: (db: Database.Database) => db.prepare(`
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
      meta_title = excluded.meta_title,
      meta_description = excluded.meta_description,
      updated_at = datetime('now')
  `),

  getAll: (db: Database.Database) => db.prepare('SELECT * FROM tools ORDER BY stars DESC').all() as Tool[],

  getByCategory: (db: Database.Database, category: string) =>
    db.prepare('SELECT * FROM tools WHERE category = ? ORDER BY stars DESC').all(category) as Tool[],

  getBySlug: (db: Database.Database, slug: string) =>
    db.prepare('SELECT * FROM tools WHERE slug = ?').get(slug) as Tool | undefined,

  getFeatured: (db: Database.Database, limit = 10) =>
    db.prepare('SELECT * FROM tools WHERE featured = 1 ORDER BY stars DESC LIMIT ?').all(limit) as Tool[],

  getTopByStars: (db: Database.Database, limit = 20) =>
    db.prepare('SELECT * FROM tools ORDER BY stars DESC LIMIT ?').all(limit) as Tool[],

  search: (db: Database.Database, query: string) =>
    db.prepare(`
      SELECT * FROM tools
      WHERE name LIKE ? OR description LIKE ? OR tags LIKE ?
      ORDER BY stars DESC LIMIT 50
    `).all(`%${query}%`, `%${query}%`, `%${query}%`) as Tool[],

  count: (db: Database.Database) => (db.prepare('SELECT COUNT(*) as count').get() as { count: number }).count,

  deleteOld: (db: Database.Database, source: string, daysOld = 90) =>
    db.prepare(`DELETE FROM tools WHERE source = ? AND last_updated < datetime('now', '-' || ? || ' days')`).run(source, daysOld),
};

export const categoryQueries = {
  upsert: (db: Database.Database) => db.prepare(`
    INSERT INTO categories (name, slug, description, tool_count)
    VALUES (@name, @slug, @description, @tool_count)
    ON CONFLICT(name) DO UPDATE SET
      description = excluded.description,
      tool_count = excluded.tool_count
  `),

  getAll: (db: Database.Database) => db.prepare('SELECT * FROM categories ORDER BY tool_count DESC').all() as Category[],

  getBySlug: (db: Database.Database, slug: string) =>
    db.prepare('SELECT * FROM categories WHERE slug = ?').get(slug) as Category | undefined,

  recalcCounts: (db: Database.Database) => {
    db.exec(`
      UPDATE categories SET tool_count = (
        SELECT COUNT(*) FROM tools WHERE tools.category = categories.name
      )
    `);
  },
};

export const analyticsQueries = {
  recordEvent: (db: Database.Database, event: Omit<AnalyticsEvent, 'id' | 'timestamp'>) =>
    db.prepare(`
      INSERT INTO analytics_events (event_type, page_path, referrer, user_agent, metadata)
      VALUES (@event_type, @page_path, @referrer, @user_agent, @metadata)
    `).run(event),

  getPageViews: (db: Database.Database, days = 30) =>
    db.prepare(`
      SELECT page_path, COUNT(*) as views, COUNT(DISTINCT user_agent) as unique_visitors
      FROM analytics_events
      WHERE event_type = 'page_view' AND timestamp >= datetime('now', '-' || ? || ' days')
      GROUP BY page_path
      ORDER BY views DESC
    `).all(days) as Array<{ page_path: string; views: number; unique_visitors: number }>,

  getAffiliateClicks: (db: Database.Database, days = 30) =>
    db.prepare(`
      SELECT page_path, COUNT(*) as clicks
      FROM analytics_events
      WHERE event_type = 'affiliate_click' AND timestamp >= datetime('now', '-' || ? || ' days')
      GROUP BY page_path
      ORDER BY clicks DESC
    `).all(days) as Array<{ page_path: string; clicks: number }>,

  upsertPageMetrics: (db: Database.Database) => db.prepare(`
    INSERT INTO page_metrics (page_path, views, unique_visitors, affiliate_clicks, last_updated)
    SELECT
      page_path,
      COUNT(*) as views,
      COUNT(DISTINCT user_agent) as unique_visitors,
      0 as affiliate_clicks,
      datetime('now')
    FROM analytics_events
    WHERE event_type = 'page_view' AND timestamp >= datetime('now', '-30 days')
    GROUP BY page_path
    ON CONFLICT(page_path) DO UPDATE SET
      views = (SELECT COUNT(*) FROM analytics_events WHERE page_path = excluded.page_path AND event_type = 'page_view' AND timestamp >= datetime('now', '-30 days')),
      unique_visitors = (SELECT COUNT(DISTINCT user_agent) FROM analytics_events WHERE page_path = excluded.page_path AND event_type = 'page_view' AND timestamp >= datetime('now', '-30 days')),
      last_updated = datetime('now')
  `).run(),

  getTopPages: (db: Database.Database, limit = 50) =>
    db.prepare('SELECT * FROM page_metrics ORDER BY views DESC LIMIT ?').all(limit) as PageMetrics[],

  getLowPerforming: (db: Database.Database, threshold = 5) =>
    db.prepare('SELECT * FROM page_metrics WHERE views < ? ORDER BY views ASC').all(threshold) as PageMetrics[],
};

export const keywordQueries = {
  upsert: (db: Database.Database) => db.prepare(`
    INSERT INTO keyword_perf (keyword, page_path, impressions, clicks, ctr, avg_position, last_updated)
    VALUES (@keyword, @page_path, @impressions, @clicks, @ctr, @avg_position, datetime('now'))
    ON CONFLICT(keyword, page_path) DO UPDATE SET
      impressions = excluded.impressions,
      clicks = excluded.clicks,
      ctr = excluded.ctr,
      avg_position = excluded.avg_position,
      last_updated = datetime('now')
  `),

  getTopKeywords: (db: Database.Database, limit = 100) =>
    db.prepare('SELECT * FROM keyword_perf ORDER BY clicks DESC LIMIT ?').all(limit) as KeywordPerf[],

  getLowCtr: (db: Database.Database, minImpressions = 100, maxCtr = 0.02) =>
    db.prepare('SELECT * FROM keyword_perf WHERE impressions > ? AND ctr < ? ORDER BY ctr ASC')
      .all(minImpressions, maxCtr) as KeywordPerf[],

  getByPage: (db: Database.Database, pagePath: string) =>
    db.prepare('SELECT * FROM keyword_perf WHERE page_path = ?').all(pagePath) as KeywordPerf[],
};

export const configQueries = {
  get: (db: Database.Database, key: string) =>
    db.prepare('SELECT * FROM optimization_config WHERE key = ?').get(key) as OptimizationConfig | undefined,

  set: (db: Database.Database, key: string, value: string) =>
    db.prepare(`
      INSERT INTO optimization_config (key, value, updated_at)
      VALUES (?, ?, datetime('now'))
      ON CONFLICT(key) DO UPDATE SET value = excluded.value, updated_at = datetime('now')
    `).run(key, value),

  getAll: (db: Database.Database) =>
    db.prepare('SELECT * FROM optimization_config').all() as OptimizationConfig[],
};
