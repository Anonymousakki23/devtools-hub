import { Metadata } from 'next';
import Link from 'next/link';
import ToolCard from '@/components/tools/ToolCard';

const categoryData = {
  name: "backend",
  label: "Backend",
  description: "Free backend frameworks, server tools, and runtime environments.",
  slug: "backend",
};

const tools = [
  {
    "name": "Headroom",
    "slug": "headroomlabs-ai-headroom",
    "description": "Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 20% fewer tokens for coding agents, 60-95% fewer tokens for JSON, sam...",
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
    "name": "Awesome Cheatsheets",
    "slug": "lecoupa-awesome-cheatsheets",
    "description": "👩‍💻👨‍💻 Awesome cheatsheets for popular programming languages, frameworks and development tools. They include everything you should know in one ...",
    "category": "backend",
    "stars": 46453,
    "tags": [
      "backend",
      "bash",
      "cheatsheet"
    ],
    "url": "https://github.com/LeCoupa/awesome-cheatsheets"
  },
  {
    "name": "Appwrite",
    "slug": "appwrite",
    "description": "Open-source Backend-as-a-Service",
    "category": "backend",
    "stars": 44000,
    "tags": [
      "backend",
      "auth",
      "database"
    ],
    "url": "https://appwrite.io"
  },
  {
    "name": "Thingsboard",
    "slug": "thingsboard-thingsboard",
    "description": "Open-source IoT Platform - Device management, data collection, processing and visualization.",
    "category": "backend",
    "stars": 22407,
    "tags": [
      "big-data",
      "cloud",
      "coap-server"
    ],
    "url": "https://github.com/thingsboard/thingsboard"
  },
  {
    "name": "Systeminformer",
    "slug": "winsiderss-systeminformer",
    "description": "A free, powerful, multi-purpose tool that helps you monitor system resources, debug software and detect malware. Brought to you by Winsider Seminar...",
    "category": "backend",
    "stars": 15955,
    "tags": [
      "administrator",
      "benchmarking",
      "debugger"
    ],
    "url": "https://github.com/winsiderss/systeminformer"
  },
  {
    "name": "Nezha",
    "slug": "nezhahq-nezha",
    "description": ":trollface: Self-hosted, lightweight server and website monitoring and O&M tool",
    "category": "backend",
    "stars": 10310,
    "tags": [
      "monitoring",
      "monitoring-tool",
      "system"
    ],
    "url": "https://github.com/nezhahq/nezha"
  },
  {
    "name": "Chatlog",
    "slug": "sjzar-chatlog",
    "description": "chat log tool, easily use your own chat data. 聊天记录工具，轻松使用自己的聊天数据",
    "category": "backend",
    "stars": 9193,
    "tags": [
      "chat",
      "chatlog",
      "database"
    ],
    "url": "https://github.com/sjzar/chatlog"
  },
  {
    "name": "Cloudflare Workers",
    "slug": "cloudflare-workers",
    "description": "Serverless execution environment that allows you to create new applications",
    "category": "backend",
    "stars": 8000,
    "tags": [
      "serverless",
      "edge",
      "workers"
    ],
    "url": "https://workers.cloudflare.com"
  },
  {
    "name": "Laf",
    "slug": "labring-laf",
    "description": "Laf is a vibrant cloud development platform that provides essential tools like cloud functions, databases, and storage solutions. It enables develo...",
    "category": "backend",
    "stars": 7554,
    "tags": [
      "cloudbase",
      "faas",
      "firebase"
    ],
    "url": "https://github.com/labring/laf"
  },
  {
    "name": "Python Qrcode",
    "slug": "lincolnloop-python-qrcode",
    "description": "Python QR Code image generator",
    "category": "backend",
    "stars": 4937,
    "tags": [
      "Python"
    ],
    "url": "https://github.com/lincolnloop/python-qrcode"
  },
  {
    "name": "Buildship",
    "slug": "buildship-ai-buildship",
    "description": "Low-code Visual Backend Builder, powered by AI ✨ Create APIs, scheduled jobs, backend tasks, database CRUD, and integrate with any tool or APIs.",
    "category": "backend",
    "stars": 601,
    "tags": [
      "api",
      "automation",
      "backend"
    ],
    "url": "https://github.com/buildship-ai/buildship"
  }
];

export const metadata: Metadata = {
  title: `${categoryData.label} - Free Developer Tools | DevTools Hub`,
  description: `Free backend frameworks, server tools, and runtime environments.. Browse 11 free backend tools on DevTools Hub.`,
  openGraph: {
    title: `${categoryData.label} - DevTools Hub`,
    description: `Free backend frameworks, server tools, and runtime environments.. Browse 11 free tools.`,
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
