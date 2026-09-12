import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

const DB_PATH = path.join(process.cwd(), 'data', 'devtools.db');
const OUTPUT_DIR = path.join(process.cwd(), 'src', 'app', 'generated');

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').substring(0, 100);
}

function escapeHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function generateMetaTitle(name: string, category: string): string {
  const categoryLabels: Record<string, string> = {
    'api-tools': 'API Tools & Services',
    'testing': 'Testing Frameworks & Tools',
    'devops': 'DevOps & CI/CD Tools',
    'frontend': 'Frontend Frameworks & Libraries',
    'backend': 'Backend Frameworks & Tools',
    'ai-ml': 'AI & Machine Learning Tools',
    'cli-tools': 'CLI & Terminal Tools',
    'security': 'Security Tools & Libraries',
    'productivity': 'Productivity Tools & Apps',
    'monitoring': 'Monitoring & Observability Tools',
    'database': 'Database Tools & Services',
    'codegen': 'Code Generation & Scaffolding Tools',
  };
  return `${name} - Free ${categoryLabels[category] || category} | DevTools Hub`;
}

function generateMetaDescription(name: string, description: string): string {
  const base = description.length > 140 ? description.substring(0, 137) + '...' : description;
  return `${name}: ${base}. Free and open source. Explore on DevTools Hub.`;
}

function generateToolPage(tool: any): string {
  const metaTitle = tool.meta_title || generateMetaTitle(tool.name, tool.category);
  const metaDesc = tool.meta_description || generateMetaDescription(tool.name, tool.description);
  const tags: string[] = JSON.parse(tool.tags || '[]');
  const stars = tool.stars >= 1000 ? `${(tool.stars / 1000).toFixed(1)}k` : String(tool.stars);
  const categoryLabel = tool.category.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase());

  return `import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const toolData = ${JSON.stringify(tool, null, 2)};

export const metadata: Metadata = {
  title: ${JSON.stringify(metaTitle)},
  description: ${JSON.stringify(metaDesc)},
  openGraph: {
    title: ${JSON.stringify(metaTitle)},
    description: ${JSON.stringify(metaDesc)},
    type: 'website',
    siteName: 'DevTools Hub',
  },
  twitter: {
    card: 'summary_large_image',
    title: ${JSON.stringify(metaTitle)},
    description: ${JSON.stringify(metaDesc)},
  },
  alternates: {
    canonical: \`https://devtools-hub.pages.dev/tools/\${toolData.slug}/\`,
  },
};

export default function ToolPage() {
  const tool = toolData;
  const tags: string[] = ${JSON.stringify(tags)};

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
                <Link href={\`/categories/\${tool.category}/\`} className="text-xs font-medium bg-brand-50 text-brand-700 px-3 py-1 rounded-full hover:bg-brand-100">
                  ${categoryLabel}
                </Link>
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                  ${stars}
                </span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900">${escapeHtml(tool.name)}</h1>
            </div>
          </div>

          <p className="text-lg text-gray-600 mb-6">${escapeHtml(tool.description)}</p>

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
`;
}

function generateCategoryPage(category: string, slug: string, description: string, tools: any[]): string {
  const categoryLabel = category.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase());

  const toolsData = tools.map(t => ({
    name: t.name,
    slug: t.slug,
    description: t.description.length > 150 ? t.description.substring(0, 147) + '...' : t.description,
    category: t.category,
    stars: t.stars,
    tags: JSON.parse(t.tags || '[]').slice(0, 3),
    url: t.url,
  }));

  return `import { Metadata } from 'next';
import Link from 'next/link';
import ToolCard from '@/components/tools/ToolCard';

const categoryData = {
  name: ${JSON.stringify(category)},
  label: ${JSON.stringify(categoryLabel)},
  description: ${JSON.stringify(description)},
  slug: ${JSON.stringify(slug)},
};

const tools = ${JSON.stringify(toolsData, null, 2)};

export const metadata: Metadata = {
  title: \`\${categoryData.label} - Free Developer Tools | DevTools Hub\`,
  description: \`${escapeHtml(description)}. Browse ${tools.length} free ${categoryLabel.toLowerCase()} tools on DevTools Hub.\`,
  openGraph: {
    title: \`\${categoryData.label} - DevTools Hub\`,
    description: \`${escapeHtml(description)}. Browse ${tools.length} free tools.\`,
    type: 'website',
  },
  alternates: {
    canonical: \`https://devtools-hub.pages.dev/categories/\${categoryData.slug}/\`,
  },
};

export default function CategoryPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-4">
          <Link href="/" className="text-xl font-bold text-brand-600">DevTools Hub</Link>
          <Link href="/categories/" className="text-sm text-gray-600 hover:text-brand-600">Categories</Link>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{categoryData.label}</h1>
          <p className="text-lg text-gray-600">{categoryData.description}</p>
          <p className="text-sm text-gray-500 mt-2">{tools.length} tools listed</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>

        {tools.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No tools found in this category yet. Check back soon!
          </div>
        )}
      </div>
    </main>
  );
}
`;
}

function generateIndexPage(categories: any[], featuredTools: any[]): string {
  const catData = categories.map(c => ({
    name: c.name,
    slug: c.slug,
    description: c.description,
    tool_count: c.tool_count,
  }));

  const featured = featuredTools.map(t => ({
    name: t.name,
    slug: t.slug,
    description: t.description.length > 120 ? t.description.substring(0, 117) + '...' : t.description,
    category: t.category,
    stars: t.stars,
    tags: JSON.parse(t.tags || '[]').slice(0, 3),
    url: t.url,
  }));

  return `import { Metadata } from 'next';
import Link from 'next/link';
import ToolCard from '@/components/tools/ToolCard';

const categories = ${JSON.stringify(catData, null, 2)};
const featuredTools = ${JSON.stringify(featured, null, 2)};

export const metadata: Metadata = {
  title: 'DevTools Hub - Discover Free Developer Tools & APIs',
  description: 'Curated collection of free and open source developer tools, APIs, and resources. Boost your productivity without breaking the bank.',
  openGraph: {
    title: 'DevTools Hub - Free Developer Tools',
    description: 'Discover the best free developer tools, APIs, and open source resources.',
    type: 'website',
    siteName: 'DevTools Hub',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevTools Hub - Free Developer Tools',
    description: 'Discover the best free developer tools, APIs, and open source resources.',
  },
  alternates: {
    canonical: 'https://devtools-hub.pages.dev/',
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-4">
          <Link href="/" className="text-xl font-bold text-brand-600">DevTools Hub</Link>
          <Link href="/categories/" className="text-sm text-gray-600 hover:text-brand-600">All Categories</Link>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-brand-600 to-brand-800 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Free Developer Tools
          </h1>
          <p className="text-lg text-brand-100 max-w-2xl mx-auto">
            Discover curated free and open source tools, APIs, and resources.
            Boost your productivity without spending a dime.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} featured />
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={\`/categories/\${cat.slug}/\`}
              className="bg-white rounded-lg border p-4 hover:border-brand-300 hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-gray-900 capitalize">{cat.name.replace(/-/g, ' ')}</h3>
              <p className="text-sm text-gray-500 mt-1">{cat.tool_count} tools</p>
            </Link>
          ))}
        </div>
      </section>

      <footer className="bg-white border-t py-8 mt-12">
        <div className="max-w-5xl mx-auto px-4 text-center text-sm text-gray-500">
          <p>DevTools Hub - Curated free developer tools and resources</p>
          <p className="mt-1">Updated daily by automated curation pipeline</p>
        </div>
      </footer>
    </main>
  );
}
`;
}

function generateCategoriesIndex(categories: any[]): string {
  return `import { Metadata } from 'next';
import Link from 'next/link';

const categories = ${JSON.stringify(categories.map(c => ({
    name: c.name,
    slug: c.slug,
    description: c.description,
    tool_count: c.tool_count,
  })), null, 2)};

export const metadata: Metadata = {
  title: 'All Categories - DevTools Hub',
  description: 'Browse all categories of free developer tools on DevTools Hub.',
  alternates: { canonical: 'https://devtools-hub.pages.dev/categories/' },
};

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-4">
          <Link href="/" className="text-xl font-bold text-brand-600">DevTools Hub</Link>
          <Link href="/categories/" className="text-sm text-gray-600 hover:text-brand-600">All Categories</Link>
        </div>
      </nav>
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">All Categories</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={\`/categories/\${cat.slug}/\`}
              className="bg-white rounded-lg border p-6 hover:border-brand-300 hover:shadow-md transition-all"
            >
              <h2 className="text-lg font-semibold text-gray-900 capitalize mb-2">{cat.name.replace(/-/g, ' ')}</h2>
              <p className="text-sm text-gray-600 mb-3">{cat.description}</p>
              <p className="text-xs text-brand-600 font-medium">{cat.tool_count} tools →</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
`;
}

function generateSitemapXml(categories: any[], tools: any[]): string {
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

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;
}

function generateRobotsTxt(): string {
  return `User-agent: *
Allow: /

Sitemap: https://devtools-hub.pages.dev/sitemap.xml

# DevTools Hub - Automated Curation
# Updated daily via GitHub Actions
`;
}

function generateAllPages(): { generated: number; errors: string[] } {
  console.log('Starting page generation...');
  const errors: string[] = [];
  let generated = 0;

  if (!fs.existsSync(DB_PATH)) {
    console.error('Database not found. Run collect.ts first.');
    return { generated: 0, errors: ['Database not found'] };
  }

  const db = new Database(DB_PATH);
  db.pragma('journal_mode = READONLY');

  // Ensure output dirs exist
  const dirs = [
    OUTPUT_DIR,
    path.join(OUTPUT_DIR, '..', 'tools', '[slug]'),
    path.join(OUTPUT_DIR, '..', 'categories', '[category]'),
  ];
  for (const dir of dirs) {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  }

  const tools = db.prepare('SELECT * FROM tools ORDER BY stars DESC').all() as any[];
  const categories = db.prepare('SELECT * FROM categories ORDER BY tool_count DESC').all() as any[];
  const featuredTools = db.prepare('SELECT * FROM tools WHERE featured = 1 ORDER BY stars DESC LIMIT 18').all() as any[];

  // Generate index page
  try {
    fs.writeFileSync(path.join(OUTPUT_DIR, '..', 'page.tsx'), generateIndexPage(categories, featuredTools));
    generated++;
  } catch (err) {
    errors.push(`Index page: ${err}`);
  }

  // Generate categories index
  try {
    fs.writeFileSync(path.join(OUTPUT_DIR, '..', 'categories', 'page.tsx'), generateCategoriesIndex(categories));
    generated++;
  } catch (err) {
    errors.push(`Categories index: ${err}`);
  }

  // Generate category pages
  for (const cat of categories) {
    try {
      const catTools = tools.filter(t => t.category === cat.name);
      const dir = path.join(OUTPUT_DIR, '..', 'categories', cat.slug);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, 'page.tsx'), generateCategoryPage(cat.name, cat.slug, cat.description, catTools));
      generated++;
    } catch (err) {
      errors.push(`Category ${cat.slug}: ${err}`);
    }
  }

  // Generate tool pages
  for (const tool of tools) {
    try {
      const dir = path.join(OUTPUT_DIR, '..', 'tools', tool.slug);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, 'page.tsx'), generateToolPage(tool));
      generated++;
    } catch (err) {
      errors.push(`Tool ${tool.slug}: ${err}`);
    }
  }

  // Generate sitemap
  try {
    fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), generateSitemapXml(categories, tools));
    generated++;
  } catch (err) {
    errors.push(`Sitemap: ${err}`);
  }

  // Generate robots.txt
  try {
    fs.writeFileSync(path.join(process.cwd(), 'public', 'robots.txt'), generateRobotsTxt());
    generated++;
  } catch (err) {
    errors.push(`Robots.txt: ${err}`);
  }

  db.close();
  console.log(`Generated ${generated} pages (${tools.length} tool pages, ${categories.length} category pages)`);
  return { generated, errors };
}

if (require.main === module) {
  const result = generateAllPages();
  console.log('Generation result:', JSON.stringify(result, null, 2));
  if (result.errors.length > 0) process.exit(1);
}

export { generateAllPages };
