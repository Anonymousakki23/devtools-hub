import { Metadata } from 'next';
import Link from 'next/link';
import ToolCard from '@/components/tools/ToolCard';

const categoryData = {
  name: "productivity",
  label: "Productivity",
  description: "Free productivity tools, project management apps, and collaboration platforms.",
  slug: "productivity",
};

const tools = [
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
    "name": "Plane",
    "slug": "makeplane-plane",
    "description": "🔥🔥🔥 Open-source Jira, Linear, Monday, and ClickUp alternative. Plane is a modern project management platform to manage tasks, sprints, docs, and...",
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
    "name": "Cal.com",
    "slug": "cal-com",
    "description": "Scheduling infrastructure for everyone",
    "category": "productivity",
    "stars": 32000,
    "tags": [
      "scheduling",
      "calendar",
      "open-source"
    ],
    "url": "https://cal.com"
  },
  {
    "name": "Platform",
    "slug": "hcengineering-platform",
    "description": "Huly — All-in-One Project Management Platform (alternative to Linear, Jira, Slack, Notion, Motion)",
    "category": "productivity",
    "stars": 27639,
    "tags": [
      "applicant-tracking-system",
      "chat-application",
      "crm"
    ],
    "url": "https://github.com/hcengineering/platform"
  },
  {
    "name": "Twenty",
    "slug": "twenty",
    "description": "The open source CRM alternative to Salesforce",
    "category": "productivity",
    "stars": 22000,
    "tags": [
      "crm",
      "sales",
      "open-source"
    ],
    "url": "https://twenty.com"
  },
  {
    "name": "Qiankun",
    "slug": "umijs-qiankun",
    "description": "📦 🚀 Blazing fast, simple and complete solution for micro frontends.",
    "category": "productivity",
    "stars": 16687,
    "tags": [
      "framework",
      "javascript",
      "micro-frontend"
    ],
    "url": "https://github.com/umijs/qiankun"
  },
  {
    "name": "Openproject",
    "slug": "opf-openproject",
    "description": "OpenProject is the leading open source project management software for product, project and portfolio management. A powerful Jira alternative with ...",
    "category": "productivity",
    "stars": 16083,
    "tags": [
      "agile-development",
      "angular",
      "bcf"
    ],
    "url": "https://github.com/opf/openproject"
  },
  {
    "name": "Leantime",
    "slug": "leantime-leantime",
    "description": "Leantime is a goals focused project management system for non-project managers. Building with ADHD, Autism, and dyslexia in mind.",
    "category": "productivity",
    "stars": 11565,
    "tags": [
      "agile",
      "asana",
      "calendar"
    ],
    "url": "https://github.com/Leantime/leantime"
  },
  {
    "name": "Kanboard",
    "slug": "kanboard-kanboard",
    "description": "Kanban project management software",
    "category": "productivity",
    "stars": 9860,
    "tags": [
      "agile",
      "kanban",
      "kanboard"
    ],
    "url": "https://github.com/kanboard/kanboard"
  },
  {
    "name": "Kaneo",
    "slug": "usekaneo-kaneo",
    "description": "🎯 All you need. Nothing you don't. Open source project management that works for you, not against you.",
    "category": "productivity",
    "stars": 9053,
    "tags": [
      "hono",
      "issue-management",
      "issue-tracker"
    ],
    "url": "https://github.com/usekaneo/kaneo"
  },
  {
    "name": "Documenso",
    "slug": "documenso",
    "description": "The open source alternative to DocuSign",
    "category": "productivity",
    "stars": 9000,
    "tags": [
      "documents",
      "esignature",
      "open-source"
    ],
    "url": "https://documenso.com"
  },
  {
    "name": "Ccpm",
    "slug": "automazeio-ccpm",
    "description": "Project management skill system for Agents that uses GitHub Issues and Git worktrees for parallel agent execution.",
    "category": "productivity",
    "stars": 8368,
    "tags": [
      "ai-agents",
      "ai-coding",
      "claude"
    ],
    "url": "https://github.com/automazeio/ccpm"
  },
  {
    "name": "Hatch",
    "slug": "pypa-hatch",
    "description": "Modern, extensible Python project management",
    "category": "productivity",
    "stars": 7236,
    "tags": [
      "build",
      "cli",
      "packaging"
    ],
    "url": "https://github.com/pypa/hatch"
  },
  {
    "name": "Backbone.Marionette",
    "slug": "marionettejs-backbone-marionette",
    "description": "The Backbone Framework",
    "category": "productivity",
    "stars": 7033,
    "tags": [
      "backbone",
      "backbone-framework",
      "framework"
    ],
    "url": "https://github.com/marionettejs/backbone.marionette"
  },
  {
    "name": "Midday",
    "slug": "midday",
    "description": "Open source business tool for freelancers",
    "category": "productivity",
    "stars": 5000,
    "tags": [
      "invoicing",
      "finance",
      "freelance"
    ],
    "url": "https://midday.ai"
  },
  {
    "name": "Circle",
    "slug": "ln-dev7-circle",
    "description": "UI - Project management interface inspired by Linear. Built with Next.js and shadcn/ui, this application allows tracking of issues, projects and te...",
    "category": "productivity",
    "stars": 4361,
    "tags": [
      "linear",
      "shadcn-ui",
      "template"
    ],
    "url": "https://github.com/ln-dev7/circle"
  },
  {
    "name": "Freeplane",
    "slug": "freeplane-freeplane",
    "description": "Application for Mind Mapping, Knowledge Management, Project Management. Develop, organize and communicate your ideas and knowledge in the most effe...",
    "category": "productivity",
    "stars": 4344,
    "tags": [
      "groovy-scripts",
      "java",
      "knowledge-management"
    ],
    "url": "https://github.com/freeplane/freeplane"
  },
  {
    "name": "BoostNote App",
    "slug": "boostio-boostnote-app",
    "description": "Boost Note is a document driven project management tool that maximizes remote DevOps team velocity.",
    "category": "productivity",
    "stars": 4049,
    "tags": [
      "agile-development",
      "boostnote",
      "developer-tools"
    ],
    "url": "https://github.com/BoostIO/BoostNote-App"
  },
  {
    "name": "Jitter",
    "slug": "jitter",
    "description": "Motion design tool for developers",
    "category": "productivity",
    "stars": 2500,
    "tags": [
      "animation",
      "design",
      "video"
    ],
    "url": "https://jitter.video"
  }
];

export const metadata: Metadata = {
  title: `${categoryData.label} - Free Developer Tools | DevTools Hub`,
  description: `Free productivity tools, project management apps, and collaboration platforms.. Browse 19 free productivity tools on DevTools Hub.`,
  openGraph: {
    title: `${categoryData.label} - DevTools Hub`,
    description: `Free productivity tools, project management apps, and collaboration platforms.. Browse 19 free tools.`,
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
