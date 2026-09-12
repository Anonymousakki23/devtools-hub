import { Metadata } from 'next';
import Link from 'next/link';
import ToolCard from '@/components/tools/ToolCard';

const categoryData = {
  name: "monitoring",
  label: "Monitoring",
  description: "Free monitoring, logging, and observability tools for applications.",
  slug: "monitoring",
};

const tools = [
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
    "name": "Grafana",
    "slug": "grafana-grafana",
    "description": "The open and composable observability and data visualization platform. Visualize metrics, logs, and traces from multiple sources like Prometheus, L...",
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
    "name": "Signoz",
    "slug": "signoz-signoz",
    "description": "SigNoz is an open-source, OpenTelemetry-native observability platform for your team and their AI agents. Get logs, metrics, and traces in one tool ...",
    "category": "monitoring",
    "stars": 32083,
    "tags": [
      "apm",
      "application-monitoring",
      "distributed-tracing"
    ],
    "url": "https://github.com/SigNoz/signoz"
  },
  {
    "name": "Spdlog",
    "slug": "gabime-spdlog",
    "description": "Fast C++ logging library.",
    "category": "monitoring",
    "stars": 29591,
    "tags": [
      "cpp",
      "cpp11",
      "header-only"
    ],
    "url": "https://github.com/gabime/spdlog"
  },
  {
    "name": "Loki",
    "slug": "grafana-loki",
    "description": "Like Prometheus, but for logs.",
    "category": "monitoring",
    "stars": 28873,
    "tags": [
      "cloudnative",
      "grafana",
      "hacktoberfest"
    ],
    "url": "https://github.com/grafana/loki"
  },
  {
    "name": "Logrus",
    "slug": "sirupsen-logrus",
    "description": "Structured, pluggable logging for Go.",
    "category": "monitoring",
    "stars": 25746,
    "tags": [
      "go",
      "logging",
      "logrus"
    ],
    "url": "https://github.com/sirupsen/logrus"
  },
  {
    "name": "Skywalking",
    "slug": "apache-skywalking",
    "description": "APM, Application Performance Monitoring System",
    "category": "monitoring",
    "stars": 24949,
    "tags": [
      "apm",
      "dapper",
      "distributed-tracing"
    ],
    "url": "https://github.com/apache/skywalking"
  },
  {
    "name": "Zap",
    "slug": "uber-go-zap",
    "description": "Blazing fast, structured, leveled logging in Go.",
    "category": "monitoring",
    "stars": 24656,
    "tags": [
      "golang",
      "logging",
      "structured-logging"
    ],
    "url": "https://github.com/uber-go/zap"
  },
  {
    "name": "Loguru",
    "slug": "delgan-loguru",
    "description": "Python logging made (stupidly) simple",
    "category": "monitoring",
    "stars": 24102,
    "tags": [
      "log",
      "logger",
      "logging"
    ],
    "url": "https://github.com/Delgan/loguru"
  },
  {
    "name": "Bcc",
    "slug": "iovisor-bcc",
    "description": "BCC - Tools for BPF-based Linux IO analysis, networking, monitoring, and more",
    "category": "monitoring",
    "stars": 22657,
    "tags": [
      "C"
    ],
    "url": "https://github.com/iovisor/bcc"
  },
  {
    "name": "Openobserve",
    "slug": "openobserve-openobserve",
    "description": "Open source observability platform for logs, metrics, traces, RUM, Session replay, pipelines, SLO and LLM observability. A sophisticated, simple an...",
    "category": "monitoring",
    "stars": 21752,
    "tags": [
      "analytics",
      "apm",
      "datadog"
    ],
    "url": "https://github.com/openobserve/openobserve"
  },
  {
    "name": "Monolog",
    "slug": "seldaek-monolog",
    "description": "Sends your logs to files, sockets, inboxes, databases and various web services",
    "category": "monitoring",
    "stars": 21403,
    "tags": [
      "hacktoberfest",
      "logger",
      "logging"
    ],
    "url": "https://github.com/Seldaek/monolog"
  },
  {
    "name": "Gofr",
    "slug": "gofr-dev-gofr",
    "description": "An opinionated GoLang framework for accelerated microservice development. Built in support for databases and observability.",
    "category": "monitoring",
    "stars": 20929,
    "tags": [
      "framework",
      "go",
      "go-framework"
    ],
    "url": "https://github.com/gofr-dev/gofr"
  },
  {
    "name": "Plausible",
    "slug": "plausible",
    "description": "Simple and privacy-friendly Google Analytics alternative",
    "category": "monitoring",
    "stars": 20000,
    "tags": [
      "analytics",
      "privacy",
      "saas"
    ],
    "url": "https://plausible.io"
  },
  {
    "name": "Umami",
    "slug": "umami",
    "description": "A simple, fast, privacy-focused alternative to Google Analytics",
    "category": "monitoring",
    "stars": 17000,
    "tags": [
      "analytics",
      "privacy",
      "open-source"
    ],
    "url": "https://umami.is"
  },
  {
    "name": "Pinpoint",
    "slug": "pinpoint-apm-pinpoint",
    "description": "APM, (Application Performance Management) tool for large-scale distributed systems. ",
    "category": "monitoring",
    "stars": 13866,
    "tags": [
      "agent",
      "apm",
      "distributed-tracing"
    ],
    "url": "https://github.com/pinpoint-apm/pinpoint"
  },
  {
    "name": "Logcat",
    "slug": "logcat",
    "description": "Open source logging and monitoring",
    "category": "monitoring",
    "stars": 800,
    "tags": [
      "logging",
      "monitoring",
      "observability"
    ],
    "url": "https://logcat.dev"
  },
  {
    "name": "Invincible",
    "slug": "invincible",
    "description": "Website monitoring and status pages",
    "category": "monitoring",
    "stars": 300,
    "tags": [
      "monitoring",
      "uptime",
      "status"
    ],
    "url": "https://invincible.dev"
  }
];

export const metadata: Metadata = {
  title: `${categoryData.label} - Free Developer Tools | DevTools Hub`,
  description: `Free monitoring, logging, and observability tools for applications.. Browse 18 free monitoring tools on DevTools Hub.`,
  openGraph: {
    title: `${categoryData.label} - DevTools Hub`,
    description: `Free monitoring, logging, and observability tools for applications.. Browse 18 free tools.`,
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
