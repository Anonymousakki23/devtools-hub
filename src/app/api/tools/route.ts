import { NextRequest, NextResponse } from 'next/server';
import Database from 'better-sqlite3';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'data', 'devtools.db');

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get('category');
    const search = searchParams.get('q');
    const limit = parseInt(searchParams.get('limit') || '50', 10);

    if (!require('fs').existsSync(DB_PATH)) {
      return NextResponse.json({ tools: [], total: 0 });
    }

    const db = new Database(DB_PATH, { readonly: true });

    let tools;
    if (search) {
      tools = db.prepare(`
        SELECT * FROM tools
        WHERE name LIKE ? OR description LIKE ? OR tags LIKE ?
        ORDER BY stars DESC LIMIT ?
      `).all(`%${search}%`, `%${search}%`, `%${search}%`, limit);
    } else if (category) {
      tools = db.prepare('SELECT * FROM tools WHERE category = ? ORDER BY stars DESC LIMIT ?')
        .all(category, limit);
    } else {
      tools = db.prepare('SELECT * FROM tools ORDER BY stars DESC LIMIT ?').all(limit);
    }

    db.close();

    return NextResponse.json({ tools, total: tools.length });
  } catch {
    return NextResponse.json({ tools: [], total: 0, error: 'Database unavailable' });
  }
}
