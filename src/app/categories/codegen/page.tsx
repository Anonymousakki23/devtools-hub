import { Metadata } from 'next';
import Link from 'next/link';
import ToolCard from '@/components/tools/ToolCard';

const categoryData = {
  name: "codegen",
  label: "Codegen",
  description: "Free code generation, scaffolding, and boilerplate tools.",
  slug: "codegen",
};

const tools = [
  {
    "name": "OrcaSlicer",
    "slug": "orcaslicer-orcaslicer",
    "description": "G-code generator for 3D printers (Bambu, Prusa, Voron, VzBot, RatRig, Creality, etc.)",
    "category": "codegen",
    "stars": 15672,
    "tags": [
      "3d-printer",
      "3d-printing",
      "makers"
    ],
    "url": "https://github.com/OrcaSlicer/OrcaSlicer"
  },
  {
    "name": "Auto",
    "slug": "google-auto",
    "description": "A collection of source code generators for Java.",
    "category": "codegen",
    "stars": 10556,
    "tags": [
      "Java"
    ],
    "url": "https://github.com/google/auto"
  },
  {
    "name": "SwiftGen",
    "slug": "swiftgen-swiftgen",
    "description": "The Swift code generator for your assets, storyboards, Localizable.strings, … — Get rid of all String-based APIs!",
    "category": "codegen",
    "stars": 9548,
    "tags": [
      "code-generator",
      "ios",
      "localization"
    ],
    "url": "https://github.com/SwiftGen/SwiftGen"
  },
  {
    "name": "PrusaSlicer",
    "slug": "prusa3d-prusaslicer",
    "description": "G-code generator for 3D printers (RepRap, Makerbot, Ultimaker etc.)",
    "category": "codegen",
    "stars": 9326,
    "tags": [
      "C++"
    ],
    "url": "https://github.com/prusa3d/PrusaSlicer"
  },
  {
    "name": "Node Qrcode",
    "slug": "soldair-node-qrcode",
    "description": "qr code generator",
    "category": "codegen",
    "stars": 8171,
    "tags": [
      "JavaScript"
    ],
    "url": "https://github.com/soldair/node-qrcode"
  },
  {
    "name": "Qrbtf",
    "slug": "latentcat-qrbtf",
    "description": "AI & parametric QR code generator. AI & 参数化二维码生成器。https://qrbtf.com",
    "category": "codegen",
    "stars": 7011,
    "tags": [
      "art-qr",
      "art-qr-code",
      "art-qrcode"
    ],
    "url": "https://github.com/latentcat/qrbtf"
  },
  {
    "name": "QR Code Generator",
    "slug": "nayuki-qr-code-generator",
    "description": "High-quality QR Code generator library in Java, TypeScript/JavaScript, Python, Rust, C++, C.",
    "category": "codegen",
    "stars": 6758,
    "tags": [
      "c",
      "c-plus-plus",
      "java"
    ],
    "url": "https://github.com/nayuki/QR-Code-generator"
  },
  {
    "name": "Hygen",
    "slug": "jondot-hygen",
    "description": "The simple, fast, and scalable code generator that lives in your project.",
    "category": "codegen",
    "stars": 5931,
    "tags": [
      "cli",
      "generator",
      "nodejs"
    ],
    "url": "https://github.com/jondot/hygen"
  },
  {
    "name": "ModernCppStarter",
    "slug": "thelartians-moderncppstarter",
    "description": "🚀 Kick-start your C++! A template for modern C++ projects using CMake, CI, code coverage, clang-format, reproducible dependency management and muc...",
    "category": "codegen",
    "stars": 5401,
    "tags": [
      "bootstrap",
      "c",
      "ccache"
    ],
    "url": "https://github.com/TheLartians/ModernCppStarter"
  },
  {
    "name": "Generator",
    "slug": "mybatis-generator",
    "description": "A code generator for MyBatis.",
    "category": "codegen",
    "stars": 5310,
    "tags": [
      "code-generator",
      "java-8",
      "kotlin"
    ],
    "url": "https://github.com/mybatis/generator"
  },
  {
    "name": "Caz",
    "slug": "zce-caz",
    "description": "A simple yet powerful template-based Scaffolding tools.",
    "category": "codegen",
    "stars": 2487,
    "tags": [
      "boilerplate",
      "caz",
      "generator"
    ],
    "url": "https://github.com/zce/caz"
  },
  {
    "name": "Drupal Console",
    "slug": "hechoendrupal-drupal-console",
    "description": "The Drupal CLI. A tool to generate boilerplate code, interact with and debug Drupal.",
    "category": "codegen",
    "stars": 929,
    "tags": [
      "cli",
      "code-generation",
      "console"
    ],
    "url": "https://github.com/hechoendrupal/drupal-console"
  },
  {
    "name": "Scaffdog",
    "slug": "scaffdog-scaffdog",
    "description": ":dog: scaffdog is Markdown driven scaffolding tool.",
    "category": "codegen",
    "stars": 773,
    "tags": [
      "cli",
      "generator",
      "markdown"
    ],
    "url": "https://github.com/scaffdog/scaffdog"
  },
  {
    "name": "Fastify Cli",
    "slug": "fastify-fastify-cli",
    "description": "Run a Fastify application with one command!fixed ",
    "category": "codegen",
    "stars": 733,
    "tags": [
      "cli",
      "fastify",
      "fastify-library"
    ],
    "url": "https://github.com/fastify/fastify-cli"
  },
  {
    "name": "Summoner",
    "slug": "kowainik-summoner",
    "description": "🔮 🔧 Tool for scaffolding batteries-included production-level Haskell projects",
    "category": "codegen",
    "stars": 711,
    "tags": [
      "cli",
      "hacktoberfest",
      "haskell"
    ],
    "url": "https://github.com/kowainik/summoner"
  },
  {
    "name": "Bati",
    "slug": "vikejs-bati",
    "description": "🔨 Next-gen scaffolder. Get started with fully-functional apps, and choose any tool you want.",
    "category": "codegen",
    "stars": 485,
    "tags": [
      "TypeScript"
    ],
    "url": "https://github.com/vikejs/bati"
  },
  {
    "name": "SALSA",
    "slug": "marbl-salsa",
    "description": "SALSA: A tool to scaffold long read assemblies with Hi-C data",
    "category": "codegen",
    "stars": 189,
    "tags": [
      "assembly",
      "hic",
      "long-read"
    ],
    "url": "https://github.com/marbl/SALSA"
  }
];

export const metadata: Metadata = {
  title: `${categoryData.label} - Free Developer Tools | DevTools Hub`,
  description: `Free code generation, scaffolding, and boilerplate tools.. Browse 17 free codegen tools on DevTools Hub.`,
  openGraph: {
    title: `${categoryData.label} - DevTools Hub`,
    description: `Free code generation, scaffolding, and boilerplate tools.. Browse 17 free tools.`,
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
