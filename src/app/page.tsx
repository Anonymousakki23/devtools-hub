import { Metadata } from 'next';
import Link from 'next/link';
import ToolCard from '@/components/tools/ToolCard';

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
const featuredTools = [
  {
    "name": "React",
    "slug": "react-react",
    "description": "The library for web and native user interfaces.",
    "category": "frontend",
    "stars": 250050,
    "tags": [
      "declarative",
      "frontend",
      "javascript"
    ],
    "url": "https://github.com/react/react"
  },
  {
    "name": "Vue",
    "slug": "vuejs-vue",
    "description": "This is the repo for Vue 2. For Vue 3, go to https://github.com/vuejs/core",
    "category": "frontend",
    "stars": 212465,
    "tags": [
      "framework",
      "frontend",
      "javascript"
    ],
    "url": "https://github.com/vuejs/vue"
  },
  {
    "name": "Dify",
    "slug": "langgenius-dify",
    "description": "Build Agentic workflows, RAG pipelines, with rich AI model and tool support on one collaborative workspace. Deploy on...",
    "category": "ai-ml",
    "stars": 155478,
    "tags": [
      "agent",
      "agentic-ai",
      "agentic-framework"
    ],
    "url": "https://github.com/langgenius/dify"
  },
  {
    "name": "Langflow",
    "slug": "langflow-ai-langflow",
    "description": "Langflow is a powerful tool for building and deploying AI-powered agents and workflows.",
    "category": "frontend",
    "stars": 154612,
    "tags": [
      "agents",
      "chatgpt",
      "generative-ai"
    ],
    "url": "https://github.com/langflow-ai/langflow"
  },
  {
    "name": "Kubernetes",
    "slug": "kubernetes-kubernetes",
    "description": "Production-Grade Container Scheduling and Management",
    "category": "devops",
    "stars": 127355,
    "tags": [
      "cncf",
      "containers",
      "go"
    ],
    "url": "https://github.com/kubernetes/kubernetes"
  },
  {
    "name": "Playwright",
    "slug": "microsoft-playwright",
    "description": "Playwright is a framework for Web Testing and Automation. It allows testing Chromium, Firefox and WebKit with a singl...",
    "category": "testing",
    "stars": 95994,
    "tags": [
      "automation",
      "chrome",
      "chromium"
    ],
    "url": "https://github.com/microsoft/playwright"
  },
  {
    "name": "Puppeteer",
    "slug": "puppeteer-puppeteer",
    "description": "JavaScript API for Chrome and Firefox",
    "category": "testing",
    "stars": 95580,
    "tags": [
      "automation",
      "chrome",
      "chromium"
    ],
    "url": "https://github.com/puppeteer/puppeteer"
  },
  {
    "name": "Uptime Kuma",
    "slug": "louislam-uptime-kuma",
    "description": "A fancy self-hosted monitoring tool",
    "category": "monitoring",
    "stars": 91282,
    "tags": [
      "docker",
      "monitor",
      "monitoring"
    ],
    "url": "https://github.com/louislam/uptime-kuma"
  },
  {
    "name": "Hoppscotch",
    "slug": "hoppscotch-hoppscotch",
    "description": "Open-Source API Development Ecosystem • https://hoppscotch.io • Offline, On-Prem & Cloud • Web, Desktop & CLI • Open-...",
    "category": "api-tools",
    "stars": 80289,
    "tags": [
      "api",
      "api-client",
      "api-rest"
    ],
    "url": "https://github.com/hoppscotch/hoppscotch"
  },
  {
    "name": "Excalidraw",
    "slug": "excalidraw",
    "description": "Virtual whiteboard for sketching hand-drawn like diagrams",
    "category": "productivity",
    "stars": 80000,
    "tags": [
      "drawing",
      "whiteboard",
      "diagrams"
    ],
    "url": "https://excalidraw.com"
  },
  {
    "name": "Grafana",
    "slug": "grafana-grafana",
    "description": "The open and composable observability and data visualization platform. Visualize metrics, logs, and traces from multi...",
    "category": "monitoring",
    "stars": 76703,
    "tags": [
      "alerting",
      "analytics",
      "business-intelligence"
    ],
    "url": "https://github.com/grafana/grafana"
  },
  {
    "name": "Ruflo",
    "slug": "ruvnet-ruflo",
    "description": "🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate autonomous workflows, and build con...",
    "category": "devops",
    "stars": 72170,
    "tags": [
      "agentic-ai",
      "agentic-framework",
      "agentic-workflow"
    ],
    "url": "https://github.com/ruvnet/ruflo"
  },
  {
    "name": "Moby",
    "slug": "moby-moby",
    "description": "The Moby Project - a collaborative project for the container ecosystem to assemble container-based systems",
    "category": "devops",
    "stars": 72085,
    "tags": [
      "containers",
      "docker",
      "go"
    ],
    "url": "https://github.com/moby/moby"
  },
  {
    "name": "Supabase",
    "slug": "supabase",
    "description": "Open source Firebase alternative with Postgres, Auth, Edge Functions, Realtime, and Storage",
    "category": "database",
    "stars": 72000,
    "tags": [
      "database",
      "auth",
      "realtime"
    ],
    "url": "https://supabase.com"
  },
  {
    "name": "Headroom",
    "slug": "headroomlabs-ai-headroom",
    "description": "Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 20% fewer tokens for coding agents, 60-...",
    "category": "backend",
    "stars": 71627,
    "tags": [
      "agent",
      "ai",
      "anthropic"
    ],
    "url": "https://github.com/headroomlabs-ai/headroom"
  },
  {
    "name": "Coolify",
    "slug": "coollabsio-coolify",
    "description": "An open-source, self-hostable PaaS alternative to Vercel, Heroku & Netlify that lets you easily deploy static sites, ...",
    "category": "database",
    "stars": 61692,
    "tags": [
      "coolify",
      "databases",
      "deployment"
    ],
    "url": "https://github.com/coollabsio/coolify"
  },
  {
    "name": "Plane",
    "slug": "makeplane-plane",
    "description": "🔥🔥🔥 Open-source Jira, Linear, Monday, and ClickUp alternative. Plane is a modern project management platform to ma...",
    "category": "productivity",
    "stars": 59249,
    "tags": [
      "boards",
      "bug-tracker",
      "django"
    ],
    "url": "https://github.com/makeplane/plane"
  },
  {
    "name": "Litellm",
    "slug": "berriai-litellm",
    "description": "The fastest, litest AI Gateway. Rust core with Python SDK. Call 100+ LLM APIs in OpenAI (or native) format with cost ...",
    "category": "ai-ml",
    "stars": 58542,
    "tags": [
      "ai-gateway",
      "anthropic",
      "azure-openai"
    ],
    "url": "https://github.com/BerriAI/litellm"
  }
];

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
              href={`/categories/${cat.slug}/`}
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
