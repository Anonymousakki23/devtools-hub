import { Metadata } from 'next';
import Link from 'next/link';
import ToolCard from '@/components/tools/ToolCard';

const categoryData = {
  name: "api-tools",
  label: "Api Tools",
  description: "Free API tools for building, testing, and managing REST and GraphQL APIs.",
  slug: "api-tools",
};

const tools = [
  {
    "name": "Hoppscotch",
    "slug": "hoppscotch-hoppscotch",
    "description": "Open-Source API Development Ecosystem • https://hoppscotch.io • Offline, On-Prem & Cloud • Web, Desktop & CLI • Open-Source Alternative to Postman,...",
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
    "name": "Bruno",
    "slug": "usebruno-bruno",
    "description": "Opensource IDE For Exploring and Testing API's (lightweight alternative to Postman/Insomnia)",
    "category": "api-tools",
    "stars": 46901,
    "tags": [
      "api-client",
      "api-testing",
      "automation"
    ],
    "url": "https://github.com/usebruno/bruno"
  },
  {
    "name": "Changedetection.Io",
    "slug": "dgtlmoon-changedetection-io",
    "description": "Best and simplest tool for website change detection, web page monitoring, and website change alerts. Perfect for tracking content changes, price dr...",
    "category": "api-tools",
    "stars": 33828,
    "tags": [
      "back-in-stock",
      "change-alert",
      "change-detection"
    ],
    "url": "https://github.com/dgtlmoon/changedetection.io"
  },
  {
    "name": "Mobile Security Framework MobSF",
    "slug": "mobsf-mobile-security-framework-mobsf",
    "description": "Mobile Security Framework (MobSF) is an automated, all-in-one mobile application (Android/iOS/Windows) pen-testing, malware analysis and security a...",
    "category": "api-tools",
    "stars": 21752,
    "tags": [
      "android-security",
      "api-testing",
      "apk"
    ],
    "url": "https://github.com/MobSF/Mobile-Security-Framework-MobSF"
  },
  {
    "name": "Kubo",
    "slug": "ipfs-kubo",
    "description": "IPFS implementation in Go: a daemon that stores and serves content-addressed data, with a CLI, HTTP Gateway, and RPC API",
    "category": "api-tools",
    "stars": 17130,
    "tags": [
      "ipfs",
      "Go"
    ],
    "url": "https://github.com/ipfs/kubo"
  },
  {
    "name": "Dub.co",
    "slug": "dub-co",
    "description": "Open-source link management infrastructure",
    "category": "api-tools",
    "stars": 16000,
    "tags": [
      "links",
      "analytics",
      "shortener"
    ],
    "url": "https://dub.co"
  },
  {
    "name": "DNSHE FreeDomains",
    "slug": "dnshe-dnshe-freedomains",
    "description": "🌐 DNSHE Official - Stable & Free Subdomains for Developers. Support 180-day renewal window, Anycast DNS, and REST API. (us.ci, cc.cd, de5.net, ccw...",
    "category": "api-tools",
    "stars": 14690,
    "tags": [],
    "url": "https://github.com/dnshe/DNSHE-FreeDomains"
  },
  {
    "name": "OpenWA",
    "slug": "rmyndharis-openwa",
    "description": "Free, Open Source, Self-Hosted WhatsApp API Gateway",
    "category": "api-tools",
    "stars": 14058,
    "tags": [
      "api",
      "bot",
      "gateway"
    ],
    "url": "https://github.com/rmyndharis/OpenWA"
  },
  {
    "name": "Tyk",
    "slug": "tyktechnologies-tyk",
    "description": "Tyk Open Source API Gateway written in Go, supporting REST, GraphQL, TCP and gRPC protocols",
    "category": "api-tools",
    "stars": 10822,
    "tags": [
      "api",
      "api-gateway",
      "api-management"
    ],
    "url": "https://github.com/TykTechnologies/tyk"
  },
  {
    "name": "Higress",
    "slug": "higress-group-higress",
    "description": "🤖 AI Gateway | AI Native API Gateway",
    "category": "api-tools",
    "stars": 9365,
    "tags": [
      "ai-gateway",
      "ai-native",
      "api-gateway"
    ],
    "url": "https://github.com/higress-group/higress"
  },
  {
    "name": "Resend",
    "slug": "resend",
    "description": "The best API to reach humans instead of spam folders",
    "category": "api-tools",
    "stars": 9000,
    "tags": [
      "email",
      "api",
      "transactional"
    ],
    "url": "https://resend.com"
  },
  {
    "name": "Shenyu",
    "slug": "apache-shenyu",
    "description": "Apache ShenYu is a Java native API Gateway for service proxy, protocol conversion and API governance.",
    "category": "api-tools",
    "stars": 8835,
    "tags": [
      "api-gateway",
      "dubbo-proxy",
      "grpc-proxy"
    ],
    "url": "https://github.com/apache/shenyu"
  },
  {
    "name": "Ocelot",
    "slug": "threemammals-ocelot",
    "description": ".NET API Gateway",
    "category": "api-tools",
    "stars": 8714,
    "tags": [
      "api-gateway",
      "aspnetcore",
      "dotnet"
    ],
    "url": "https://github.com/ThreeMammals/Ocelot"
  },
  {
    "name": "Grok2api",
    "slug": "chenyme-grok2api",
    "description": "Multi-account API gateway for Grok Build, Grok Web, and Grok Console",
    "category": "api-tools",
    "stars": 7639,
    "tags": [
      "grok",
      "grok-build",
      "grok-console"
    ],
    "url": "https://github.com/chenyme/grok2api"
  },
  {
    "name": "Refly",
    "slug": "refly-ai-refly",
    "description": "The first open-source agent skills builder. Define skills by vibe workflow, run on Claude Code, Cursor, Codex & more. Build Clawdbot 🦞· APIs for L...",
    "category": "api-tools",
    "stars": 7513,
    "tags": [
      "agent",
      "agent-skills",
      "automation"
    ],
    "url": "https://github.com/refly-ai/refly"
  },
  {
    "name": "Lura",
    "slug": "luraproject-lura",
    "description": "Ultra performant API Gateway with middlewares. A project hosted at The Linux Foundation",
    "category": "api-tools",
    "stars": 6796,
    "tags": [
      "api-gateway",
      "apis",
      "backend-services"
    ],
    "url": "https://github.com/luraproject/lura"
  },
  {
    "name": "Cloudquery",
    "slug": "cloudquery-cloudquery",
    "description": "Data pipelines for cloud config and security data. Build cloud asset inventory, CSPM, FinOps, and vulnerability management solutions. Extract from ...",
    "category": "api-tools",
    "stars": 6517,
    "tags": [
      "airbyte",
      "attack-surface-management",
      "aws"
    ],
    "url": "https://github.com/cloudquery/cloudquery"
  },
  {
    "name": "Svix",
    "slug": "svix",
    "description": "The open source webhook sending service",
    "category": "api-tools",
    "stars": 5500,
    "tags": [
      "webhooks",
      "api",
      "infrastructure"
    ],
    "url": "https://svix.com"
  },
  {
    "name": "Autorest",
    "slug": "azure-autorest",
    "description": "OpenAPI (f.k.a Swagger) Specification code generator. Supports C#, PowerShell, Go, Java, Node.js, TypeScript, Python",
    "category": "api-tools",
    "stars": 4800,
    "tags": [
      "azure",
      "code-generator",
      "csharp"
    ],
    "url": "https://github.com/Azure/autorest"
  },
  {
    "name": "Laravel Query Builder",
    "slug": "spatie-laravel-query-builder",
    "description": "Easily build Eloquent queries from API requests",
    "category": "api-tools",
    "stars": 4469,
    "tags": [
      "api",
      "hacktoberfest",
      "laravel"
    ],
    "url": "https://github.com/spatie/laravel-query-builder"
  },
  {
    "name": "Datamodel Code Generator",
    "slug": "datamodel-code-generator-datamodel-code-generator",
    "description": "Generate Pydantic v2 models, dataclasses, TypedDict, and msgspec.Struct from OpenAPI, JSON Schema, GraphQL, Avro, Protobuf, and raw JSON/YAML/CSV.",
    "category": "api-tools",
    "stars": 4014,
    "tags": [
      "code-generator",
      "csv",
      "dataclass"
    ],
    "url": "https://github.com/datamodel-code-generator/datamodel-code-generator"
  },
  {
    "name": "DataSphereStudio",
    "slug": "webankfintech-dataspherestudio",
    "description": "DataSphereStudio is a one stop data application development& management portal, covering scenarios including data exchange, desensitization/cleansi...",
    "category": "api-tools",
    "stars": 3266,
    "tags": [
      "airflow",
      "atlas",
      "azkaban"
    ],
    "url": "https://github.com/WeBankFinTech/DataSphereStudio"
  },
  {
    "name": "Testing Nestjs",
    "slug": "jmcdo29-testing-nestjs",
    "description": "A repository to show off to the community methods of testing NestJS including Unit Tests, Integration Tests, E2E Tests, pipes, filters, interceptor...",
    "category": "api-tools",
    "stars": 3014,
    "tags": [
      "cqrs",
      "examples",
      "graphql"
    ],
    "url": "https://github.com/jmcdo29/testing-nestjs"
  },
  {
    "name": "Fusio",
    "slug": "apioo-fusio",
    "description": "Self-Hosted API Management for Builders",
    "category": "api-tools",
    "stars": 2113,
    "tags": [
      "ai",
      "ai-agents",
      "api"
    ],
    "url": "https://github.com/apioo/fusio"
  },
  {
    "name": "Sqli",
    "slug": "x-ream-sqli",
    "description": "orm sql query builder,  API: QB, QB.X, QrB",
    "category": "api-tools",
    "stars": 1713,
    "tags": [
      "clickhouse",
      "impala",
      "jdbc"
    ],
    "url": "https://github.com/x-ream/sqli"
  },
  {
    "name": "Data Api Builder",
    "slug": "azure-data-api-builder",
    "description": "Data API builder provides modern REST, GraphQL endpoints and MCP tools to your Azure Databases and on-prem stores.",
    "category": "api-tools",
    "stars": 1512,
    "tags": [
      "api",
      "azure",
      "database"
    ],
    "url": "https://github.com/Azure/data-api-builder"
  },
  {
    "name": "Up Fetch",
    "slug": "l-blondy-up-fetch",
    "description": "Advanced fetch client builder",
    "category": "api-tools",
    "stars": 1406,
    "tags": [
      "api",
      "fetch",
      "fetch-client"
    ],
    "url": "https://github.com/L-Blondy/up-fetch"
  },
  {
    "name": "Badaso",
    "slug": "uasoft-indonesia-badaso",
    "description": "Laravel Vue headless CMS / admin panel / dashboard / builder / API CRUD generator, anything !",
    "category": "api-tools",
    "stars": 1253,
    "tags": [
      "api",
      "cms",
      "crud"
    ],
    "url": "https://github.com/uasoft-indonesia/badaso"
  },
  {
    "name": "Flutter_animate",
    "slug": "gskinner-flutter-animate",
    "description": "Add beautiful animated effects & builders in Flutter, via an easy, highly customizable unified API.",
    "category": "api-tools",
    "stars": 1112,
    "tags": [
      "Dart"
    ],
    "url": "https://github.com/gskinner/flutter_animate"
  },
  {
    "name": "Picnic",
    "slug": "jakewharton-picnic",
    "description": "A Kotlin DSL and Java/Kotlin builder API for constructing HTML-like tables which can be rendered to text",
    "category": "api-tools",
    "stars": 975,
    "tags": [
      "Kotlin"
    ],
    "url": "https://github.com/JakeWharton/picnic"
  },
  {
    "name": "Laravel Api Response Builder",
    "slug": "marcinorlowski-laravel-api-response-builder",
    "description": "Builds nice, normalized and easy to consume REST JSON responses for Laravel powered APIs.",
    "category": "api-tools",
    "stars": 853,
    "tags": [
      "api",
      "api-helper",
      "chained-apis"
    ],
    "url": "https://github.com/MarcinOrlowski/laravel-api-response-builder"
  },
  {
    "name": "Apitest",
    "slug": "steinfletcher-apitest",
    "description": "A simple and extensible behavioural testing library for Go. You can use api test to simplify REST API, HTTP handler and e2e tests.",
    "category": "api-tools",
    "stars": 847,
    "tags": [
      "api-testing",
      "behavioural-tests",
      "blackbox-testing"
    ],
    "url": "https://github.com/steinfletcher/apitest"
  },
  {
    "name": "Apiserver Builder Alpha",
    "slug": "kubernetes-sigs-apiserver-builder-alpha",
    "description": "apiserver-builder-alpha implements libraries and tools to quickly and easily build Kubernetes apiservers/controllers to support custom resource typ...",
    "category": "api-tools",
    "stars": 823,
    "tags": [
      "apiserver-aggregation",
      "k8s-sig-api-machinery",
      "kubernetes"
    ],
    "url": "https://github.com/kubernetes-sigs/apiserver-builder-alpha"
  },
  {
    "name": "DapperQueryBuilder",
    "slug": "drizin-dapperquerybuilder",
    "description": "Dapper Query Builder using String Interpolation and Fluent API",
    "category": "api-tools",
    "stars": 541,
    "tags": [
      "dapper",
      "dapper-query-builder",
      "interpolated-strings"
    ],
    "url": "https://github.com/Drizin/DapperQueryBuilder"
  },
  {
    "name": "Ballpoint",
    "slug": "ballpoint",
    "description": "Puppeteer based PDF generation API",
    "category": "api-tools",
    "stars": 500,
    "tags": [
      "pdf",
      "api",
      "generation"
    ],
    "url": "https://ballpoint.dev"
  },
  {
    "name": "Doca",
    "slug": "cloudflare-doca",
    "description": "A CLI tool that scaffolds API documentation based on JSON HyperSchemas.",
    "category": "api-tools",
    "stars": 227,
    "tags": [
      "JavaScript"
    ],
    "url": "https://github.com/cloudflare/doca"
  }
];

export const metadata: Metadata = {
  title: `${categoryData.label} - Free Developer Tools | DevTools Hub`,
  description: `Free API tools for building, testing, and managing REST and GraphQL APIs.. Browse 36 free api tools tools on DevTools Hub.`,
  openGraph: {
    title: `${categoryData.label} - DevTools Hub`,
    description: `Free API tools for building, testing, and managing REST and GraphQL APIs.. Browse 36 free tools.`,
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
