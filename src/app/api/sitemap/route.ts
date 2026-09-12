import { NextResponse } from 'next/server';
import Database from 'better-sqlite3';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'data', 'devtools.db');

export async function GET() {
  try {
    if (!require('fs').existsSync(DB_PATH)) {
      return new NextResponse('<?xml version="1.0"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>', {
        headers: { 'Content-Type': 'application/xml' },
      });
    }

    const db = new Database(DB_PATH, { readonly: true });
    const categories = db.prepare('SELECT * FROM categories').all() as any[];
    const tools = db.prepare('SELECT * FROM tools ORDER BY stars DESC').all() as any[];
    db.close();

    const urls = [
      `<url><loc>https://devtools-hub.pages.dev/</loc><changefreq>daily</changefreq><priority>1.0</priority></url>`,
      `<url><loc>https://devtools-hub.pages.dev/categories/</loc><changefreq>daily</changefreq><priority>0.9</priority></url>`,
      ...categories.map(c =>
        `<url><loc>https://devtools-hub.pages.dev/categories/${c.slug}/</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`
      ),
      ...tools.map(t =>
        `<url><loc>https://devtools-hub.pages.dev/tools/${t.slug}/</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>`
      ),
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

    return new NextResponse(xml, {
      headers: { 'Content-Type': 'application/xml' },
    });
  } catch {
    return new NextResponse('<?xml version="1.0"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>', {
      headers: { 'Content-Type': 'application/xml' },
    });
  }
}
