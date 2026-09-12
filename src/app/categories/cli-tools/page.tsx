import { Metadata } from 'next';
import Link from 'next/link';
import ToolCard from '@/components/tools/ToolCard';

const categoryData = {
  name: "cli-tools",
  label: "Cli Tools",
  description: "Free command-line tools and terminal utilities for developers.",
  slug: "cli-tools",
};

const tools = [
  {
    "name": "Claude Code Templates",
    "slug": "davila7-claude-code-templates",
    "description": "CLI tool for configuring and monitoring Claude Code",
    "category": "cli-tools",
    "stars": 30617,
    "tags": [
      "anthropic",
      "anthropic-claude",
      "claude"
    ],
    "url": "https://github.com/davila7/claude-code-templates"
  },
  {
    "name": "Sampler",
    "slug": "sqshq-sampler",
    "description": "Tool for shell commands execution, visualization and alerting. Configured with a simple YAML file.",
    "category": "cli-tools",
    "stars": 14795,
    "tags": [
      "alerting",
      "charts",
      "cmd"
    ],
    "url": "https://github.com/sqshq/sampler"
  },
  {
    "name": "Cli",
    "slug": "qawolf-cli",
    "description": "QA Wolf from anywhere — your terminal, your CI, your AI agent.",
    "category": "cli-tools",
    "stars": 3448,
    "tags": [
      "automation",
      "cli",
      "e2e"
    ],
    "url": "https://github.com/qawolf/cli"
  },
  {
    "name": "Cli",
    "slug": "aurelia-cli",
    "description": "The Aurelia 1 command line tool. Use the CLI to create projects, scaffold components, and bundle your app for release.",
    "category": "cli-tools",
    "stars": 402,
    "tags": [
      "aurelia",
      "cli",
      "css"
    ],
    "url": "https://github.com/aurelia/cli"
  }
];

export const metadata: Metadata = {
  title: `${categoryData.label} - Free Developer Tools | DevTools Hub`,
  description: `Free command-line tools and terminal utilities for developers.. Browse 4 free cli tools tools on DevTools Hub.`,
  openGraph: {
    title: `${categoryData.label} - DevTools Hub`,
    description: `Free command-line tools and terminal utilities for developers.. Browse 4 free tools.`,
    type: 'website',
  },
  alternates: {
    canonical: `https://devtools-hub.pages.dev/categories/${categoryData.slug}/`,
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
