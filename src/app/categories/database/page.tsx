import { Metadata } from 'next';
import Link from 'next/link';
import ToolCard from '@/components/tools/ToolCard';

const categoryData = {
  name: "database",
  label: "Database",
  description: "Free database tools, ORMs, and data management utilities.",
  slug: "database",
};

const tools = [
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
    "name": "Coolify",
    "slug": "coollabsio-coolify",
    "description": "An open-source, self-hostable PaaS alternative to Vercel, Heroku & Netlify that lets you easily deploy static sites, databases, full-stack applicat...",
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
    "name": "Dbeaver",
    "slug": "dbeaver-dbeaver",
    "description": "Free universal database tool and SQL client",
    "category": "database",
    "stars": 51735,
    "tags": [
      "ai",
      "database",
      "databricks"
    ],
    "url": "https://github.com/dbeaver/dbeaver"
  },
  {
    "name": "Metabase",
    "slug": "metabase-metabase",
    "description": "The easy-to-use open source Business Intelligence and Embedded Analytics tool that lets everyone work with data :bar_chart:",
    "category": "database",
    "stars": 49208,
    "tags": [
      "analytics",
      "bi",
      "business-intelligence"
    ],
    "url": "https://github.com/metabase/metabase"
  },
  {
    "name": "Nocodb",
    "slug": "nocodb",
    "description": "The Open Source Airtable Alternative",
    "category": "database",
    "stars": 46000,
    "tags": [
      "database",
      "spreadsheet",
      "no-code"
    ],
    "url": "https://nocodb.com"
  },
  {
    "name": "Meilisearch",
    "slug": "meilisearch",
    "description": "A lightning-fast search engine that fits effortlessly into your apps",
    "category": "database",
    "stars": 44000,
    "tags": [
      "search",
      "fulltext",
      "engine"
    ],
    "url": "https://meilisearch.com"
  },
  {
    "name": "SurrealDB",
    "slug": "surrealdb",
    "description": "A scalable, distributed, collaborative, document-graph database",
    "category": "database",
    "stars": 27000,
    "tags": [
      "database",
      "graph",
      "document"
    ],
    "url": "https://surrealdb.com"
  },
  {
    "name": "Ip2region",
    "slug": "lionsoul2014-ip2region",
    "description": "Ip2region is an offline IP-to-Region localization library and IP data management framework with both IPv4 and IPv6 supports, 10-microsecond level q...",
    "category": "database",
    "stars": 19526,
    "tags": [
      "ip-address",
      "ip-address-database",
      "ip-address-location"
    ],
    "url": "https://github.com/lionsoul2014/ip2region"
  },
  {
    "name": "Mcp Toolbox",
    "slug": "googleapis-mcp-toolbox",
    "description": "MCP Toolbox for Databases is an open source MCP server for databases.",
    "category": "database",
    "stars": 16371,
    "tags": [
      "agent",
      "agents",
      "ai"
    ],
    "url": "https://github.com/googleapis/mcp-toolbox"
  },
  {
    "name": "Illa Builder",
    "slug": "illacloud-illa-builder",
    "description": "Low-code platform allows you to build business apps, enables you to quickly create internal tools such as dashboard, crud app, admin panel, crm, cm...",
    "category": "database",
    "stars": 12316,
    "tags": [
      "aiagent",
      "app-builder",
      "crud-application"
    ],
    "url": "https://github.com/illacloud/illa-builder"
  },
  {
    "name": "Awesome Postgres",
    "slug": "dhamaniasad-awesome-postgres",
    "description": "A curated list of awesome PostgreSQL software, libraries, tools and resources, inspired by awesome-mysql",
    "category": "database",
    "stars": 12083,
    "tags": [
      "database",
      "postgres",
      "postgresql"
    ],
    "url": "https://github.com/dhamaniasad/awesome-postgres"
  },
  {
    "name": "Neon",
    "slug": "neon",
    "description": "Serverless Postgres. Branching, autoscaling, and more.",
    "category": "database",
    "stars": 12000,
    "tags": [
      "database",
      "postgres",
      "serverless"
    ],
    "url": "https://neon.tech"
  },
  {
    "name": "Goose",
    "slug": "pressly-goose",
    "description": "A database migration tool. Supports SQL migrations and Go functions. ",
    "category": "database",
    "stars": 11452,
    "tags": [
      "database",
      "database-migrations",
      "go"
    ],
    "url": "https://github.com/pressly/goose"
  },
  {
    "name": "Databasus",
    "slug": "databasus-databasus",
    "description": "PostgreSQL backup tool with Point-In-Time-Recovery and restore verification",
    "category": "database",
    "stars": 8517,
    "tags": [
      "backup",
      "backups",
      "database"
    ],
    "url": "https://github.com/databasus/databasus"
  },
  {
    "name": "Azuredatastudio",
    "slug": "microsoft-azuredatastudio",
    "description": "Azure Data Studio is a data management and development tool with connectivity to popular cloud and on-premises databases. Azure Data Studio support...",
    "category": "database",
    "stars": 7681,
    "tags": [
      "azure",
      "azure-data-studio",
      "electron"
    ],
    "url": "https://github.com/microsoft/azuredatastudio"
  },
  {
    "name": "Dbmate",
    "slug": "amacneil-dbmate",
    "description": "🚀 A lightweight, framework-agnostic database migration tool.",
    "category": "database",
    "stars": 7375,
    "tags": [
      "clickhouse",
      "cpp",
      "database"
    ],
    "url": "https://github.com/amacneil/dbmate"
  },
  {
    "name": "Turso",
    "slug": "turso",
    "description": "SQLite for Production. LibSQL edge database.",
    "category": "database",
    "stars": 7000,
    "tags": [
      "database",
      "sqlite",
      "edge"
    ],
    "url": "https://turso.tech"
  },
  {
    "name": "Rainfrog",
    "slug": "achristmascarl-rainfrog",
    "description": "🐸 a database tool for the terminal",
    "category": "database",
    "stars": 5325,
    "tags": [
      "database-management",
      "mysql",
      "postgresql"
    ],
    "url": "https://github.com/achristmascarl/rainfrog"
  },
  {
    "name": "Ckan",
    "slug": "ckan-ckan",
    "description": "CKAN is an open-source DMS (data management system) for powering data hubs and data portals. CKAN makes it easy to publish, share and use data. It ...",
    "category": "database",
    "stars": 5112,
    "tags": [
      "api",
      "catalog",
      "ckan"
    ],
    "url": "https://github.com/ckan/ckan"
  },
  {
    "name": "Upstash",
    "slug": "upstash",
    "description": "Serverless Redis and Kafka. Pay per request.",
    "category": "database",
    "stars": 4500,
    "tags": [
      "redis",
      "kafka",
      "serverless"
    ],
    "url": "https://upstash.com"
  },
  {
    "name": "Velox",
    "slug": "facebookincubator-velox",
    "description": "A composable and fully extensible C++ execution engine library for data management systems.",
    "category": "database",
    "stars": 4209,
    "tags": [
      "data-management",
      "query-processing",
      "C++"
    ],
    "url": "https://github.com/facebookincubator/velox"
  },
  {
    "name": "Snaplet",
    "slug": "snaplet",
    "description": "Generate realistic databases from your production data",
    "category": "database",
    "stars": 3000,
    "tags": [
      "database",
      "seeding",
      "development"
    ],
    "url": "https://snaplet.dev"
  }
];

export const metadata: Metadata = {
  title: `${categoryData.label} - Free Developer Tools | DevTools Hub`,
  description: `Free database tools, ORMs, and data management utilities.. Browse 22 free database tools on DevTools Hub.`,
  openGraph: {
    title: `${categoryData.label} - DevTools Hub`,
    description: `Free database tools, ORMs, and data management utilities.. Browse 22 free tools.`,
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
