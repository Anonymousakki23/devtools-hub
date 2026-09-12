import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const toolData = {
  "id": 72,
  "name": "Cypress Real Events",
  "slug": "dmtrkovalenko-cypress-real-events",
  "description": "Fire native system events from Cypress. ",
  "url": "https://github.com/dmtrKovalenko/cypress-real-events",
  "category": "testing",
  "tags": "[\"cdp\",\"cypress\",\"e2e\",\"native-events\",\"pupeteer\",\"testing\",\"HTML\"]",
  "source": "github",
  "source_id": "315086372",
  "stars": 837,
  "last_updated": "2026-09-11T23:30:07Z",
  "featured": 0,
  "affiliate_url": null,
  "meta_title": null,
  "meta_description": null,
  "created_at": "2026-09-12 06:09:15",
  "updated_at": "2026-09-12 06:09:15"
};

export const metadata: Metadata = {
  title: "Cypress Real Events - Free Testing Frameworks & Tools | DevTools Hub",
  description: "Cypress Real Events: Fire native system events from Cypress. . Free and open source. Explore on DevTools Hub.",
  openGraph: {
    title: "Cypress Real Events - Free Testing Frameworks & Tools | DevTools Hub",
    description: "Cypress Real Events: Fire native system events from Cypress. . Free and open source. Explore on DevTools Hub.",
    type: 'website',
    siteName: 'DevTools Hub',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Cypress Real Events - Free Testing Frameworks & Tools | DevTools Hub",
    description: "Cypress Real Events: Fire native system events from Cypress. . Free and open source. Explore on DevTools Hub.",
  },
  alternates: {
    canonical: `https://devtools-hub.pages.dev/tools/${toolData.slug}/`,
  },
};

export default function ToolPage() {
  const tool = toolData;
  const tags: string[] = ["cdp","cypress","e2e","native-events","pupeteer","testing","HTML"];

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-4">
          <Link href="/" className="text-xl font-bold text-brand-600">DevTools Hub</Link>
          <Link href="/categories/" className="text-sm text-gray-600 hover:text-brand-600">Categories</Link>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-sm border p-8">
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Link href={`/categories/${tool.category}/`} className="text-xs font-medium bg-brand-50 text-brand-700 px-3 py-1 rounded-full hover:bg-brand-100">
                  Testing
                </Link>
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                  837
                </span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900">Cypress Real Events</h1>
            </div>
          </div>

          <p className="text-lg text-gray-600 mb-6">Fire native system events from Cypress. </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map((tag: string) => (
              <span key={tag} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">{tag}</span>
            ))}
          </div>

          <div className="border-t pt-6">
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-2 bg-brand-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-brand-700 transition-colors"
            >
              Visit {tool.name}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">About DevTools Hub</h2>
          <p className="text-gray-600">
            DevTools Hub curates the best free and open source developer tools.
            We help developers discover tools that boost productivity without breaking the bank.
          </p>
        </section>
      </article>
    </main>
  );
}
