import { Metadata } from 'next';
import Link from 'next/link';

const categories = [
  {
    "name": "devops",
    "slug": "devops",
    "description": "Free DevOps tools for CI/CD, containerization, and deployment automation.",
    "tool_count": 52
  },
  {
    "name": "testing",
    "slug": "testing",
    "description": "Free and open source testing frameworks for unit, integration, and e2e testing.",
    "tool_count": 41
  },
  {
    "name": "api-tools",
    "slug": "api-tools",
    "description": "Free API tools for building, testing, and managing REST and GraphQL APIs.",
    "tool_count": 36
  },
  {
    "name": "frontend",
    "slug": "frontend",
    "description": "Free frontend frameworks, UI libraries, and component collections.",
    "tool_count": 35
  },
  {
    "name": "ai-ml",
    "slug": "ai-ml",
    "description": "Free AI and machine learning tools, APIs, and frameworks.",
    "tool_count": 27
  },
  {
    "name": "database",
    "slug": "database",
    "description": "Free database tools, ORMs, and data management utilities.",
    "tool_count": 22
  },
  {
    "name": "productivity",
    "slug": "productivity",
    "description": "Free productivity tools, project management apps, and collaboration platforms.",
    "tool_count": 19
  },
  {
    "name": "monitoring",
    "slug": "monitoring",
    "description": "Free monitoring, logging, and observability tools for applications.",
    "tool_count": 18
  },
  {
    "name": "codegen",
    "slug": "codegen",
    "description": "Free code generation, scaffolding, and boilerplate tools.",
    "tool_count": 17
  },
  {
    "name": "backend",
    "slug": "backend",
    "description": "Free backend frameworks, server tools, and runtime environments.",
    "tool_count": 11
  },
  {
    "name": "cli-tools",
    "slug": "cli-tools",
    "description": "Free command-line tools and terminal utilities for developers.",
    "tool_count": 4
  },
  {
    "name": "security",
    "slug": "security",
    "description": "Free security tools, authentication libraries, and encryption utilities.",
    "tool_count": 1
  }
];

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
              href={`/categories/${cat.slug}/`}
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
