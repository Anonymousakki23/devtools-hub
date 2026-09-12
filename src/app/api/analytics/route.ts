import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { event_type, page_path, referrer, user_agent, metadata } = body;

    if (!event_type || !page_path) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // In production, write to D1 or external analytics service
    // For static export, we log to a lightweight endpoint
    // The actual DB write happens via the pipeline's export step

    console.log(`[Analytics] ${event_type}: ${page_path}`);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: true }); // Never fail on analytics
  }
}

export async function GET() {
  return NextResponse.json({ status: 'ok', service: 'devtools-hub-analytics' });
}
