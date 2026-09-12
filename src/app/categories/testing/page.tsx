import { Metadata } from 'next';
import Link from 'next/link';
import ToolCard from '@/components/tools/ToolCard';

const categoryData = {
  name: "testing",
  label: "Testing",
  description: "Free and open source testing frameworks for unit, integration, and e2e testing.",
  slug: "testing",
};

const tools = [
  {
    "name": "Playwright",
    "slug": "microsoft-playwright",
    "description": "Playwright is a framework for Web Testing and Automation. It allows testing Chromium, Firefox and WebKit with a single API. ",
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
    "name": "Posthog",
    "slug": "posthog-posthog",
    "description": ":hedgehog: PostHog is the leading platform for building self-driving products. Our developer tools – AI observability, analytics, session replay, f...",
    "category": "testing",
    "stars": 39755,
    "tags": [
      "ab-testing",
      "ai-analytics",
      "analytics"
    ],
    "url": "https://github.com/PostHog/posthog"
  },
  {
    "name": "Googletest",
    "slug": "google-googletest",
    "description": "GoogleTest - Google Testing and Mocking Framework",
    "category": "testing",
    "stars": 39515,
    "tags": [
      "C++"
    ],
    "url": "https://github.com/google/googletest"
  },
  {
    "name": "Sqlmap",
    "slug": "sqlmapproject-sqlmap",
    "description": "Automatic SQL injection and database takeover tool",
    "category": "testing",
    "stars": 38420,
    "tags": [
      "api-security",
      "appsec",
      "database"
    ],
    "url": "https://github.com/sqlmapproject/sqlmap"
  },
  {
    "name": "OpenCLI",
    "slug": "jackwener-opencli",
    "description": "Make Any Website into CLI & Use your logged-in browser by AI agent. ",
    "category": "testing",
    "stars": 29212,
    "tags": [
      "ai-agent",
      "ai-agents",
      "ai-tools"
    ],
    "url": "https://github.com/jackwener/OpenCLI"
  },
  {
    "name": "Javascript Testing Best Practices",
    "slug": "goldbergyoni-javascript-testing-best-practices",
    "description": "📗🌐 🚢 Comprehensive and exhaustive JavaScript & Node.js testing best practices (August 2025)",
    "category": "testing",
    "stars": 24621,
    "tags": [
      "angular",
      "chai",
      "ci"
    ],
    "url": "https://github.com/goldbergyoni/javascript-testing-best-practices"
  },
  {
    "name": "API Security Checklist",
    "slug": "shieldfy-api-security-checklist",
    "description": "Checklist of the most important security countermeasures when designing, testing, and releasing your API",
    "category": "testing",
    "stars": 23316,
    "tags": [
      "api",
      "jwt",
      "oauth2"
    ],
    "url": "https://github.com/shieldfy/API-Security-Checklist"
  },
  {
    "name": "Mocha",
    "slug": "mochajs-mocha",
    "description": "☕️ Classic, reliable, trusted test framework for Node.js and the browser",
    "category": "testing",
    "stars": 22897,
    "tags": [
      "bdd",
      "browser",
      "javascript"
    ],
    "url": "https://github.com/mochajs/mocha"
  },
  {
    "name": "Catch2",
    "slug": "catchorg-catch2",
    "description": "A modern, C++-native, test framework for unit-tests, TDD and BDD - using C++14, C++17 and later (C++11 support is in v2.x branch, and C++03 on the ...",
    "category": "testing",
    "stars": 21469,
    "tags": [
      "bdd",
      "cpp",
      "cpp14"
    ],
    "url": "https://github.com/catchorg/Catch2"
  },
  {
    "name": "Phpunit",
    "slug": "sebastianbergmann-phpunit",
    "description": "The PHP Unit Testing framework.",
    "category": "testing",
    "stars": 20053,
    "tags": [
      "php",
      "phpunit",
      "testing-tools"
    ],
    "url": "https://github.com/sebastianbergmann/phpunit"
  },
  {
    "name": "Core",
    "slug": "adonisjs-core",
    "description": "AdonisJS is a TypeScript-first web framework for building web apps and API servers. It comes with support for testing, modern tooling, an ecosystem...",
    "category": "testing",
    "stars": 19119,
    "tags": [
      "core",
      "framework",
      "mvc-framework"
    ],
    "url": "https://github.com/adonisjs/core"
  },
  {
    "name": "Keploy",
    "slug": "keploy-keploy",
    "description": "Open-source platform for creating safe, isolated production sandboxes for API, integration, and E2E testing.",
    "category": "testing",
    "stars": 18455,
    "tags": [
      "agentic-ai",
      "ai-testing-tool",
      "api-testing"
    ],
    "url": "https://github.com/keploy/keploy"
  },
  {
    "name": "Vitest",
    "slug": "vitest-dev-vitest",
    "description": "Next generation testing framework powered by Vite.",
    "category": "testing",
    "stars": 17093,
    "tags": [
      "test",
      "testing-tools",
      "vite"
    ],
    "url": "https://github.com/vitest-dev/vitest"
  },
  {
    "name": "RagaAI Catalyst",
    "slug": "raga-ai-hub-ragaai-catalyst",
    "description": "Python SDK for Agent AI Observability, Monitoring and Evaluation Framework. Includes features like agent, llm and tools tracing, debugging multi-ag...",
    "category": "testing",
    "stars": 16159,
    "tags": [
      "agentic-ai",
      "agentic-ai-development",
      "agentneo"
    ],
    "url": "https://github.com/raga-ai-hub/RagaAI-Catalyst"
  },
  {
    "name": "MailHog",
    "slug": "mailhog-mailhog",
    "description": "Web and API based SMTP testing",
    "category": "testing",
    "stars": 16148,
    "tags": [
      "Go"
    ],
    "url": "https://github.com/mailhog/MailHog"
  },
  {
    "name": "Jasmine",
    "slug": "jasmine-jasmine",
    "description": "Simple JavaScript testing framework for browsers and node.js",
    "category": "testing",
    "stars": 15818,
    "tags": [
      "jasmine",
      "javascript",
      "tdd"
    ],
    "url": "https://github.com/jasmine/jasmine"
  },
  {
    "name": "Mockito",
    "slug": "mockito-mockito",
    "description": "Most popular Mocking framework for unit tests written in Java",
    "category": "testing",
    "stars": 15456,
    "tags": [
      "java",
      "java-library",
      "mock"
    ],
    "url": "https://github.com/mockito/mockito"
  },
  {
    "name": "PentestGPT",
    "slug": "greydgl-pentestgpt",
    "description": "Automated Penetration Testing Agentic Framework Powered by Large Language Models",
    "category": "testing",
    "stars": 15437,
    "tags": [
      "large-language-models",
      "llm",
      "penetration-testing"
    ],
    "url": "https://github.com/GreyDGL/PentestGPT"
  },
  {
    "name": "Midscene",
    "slug": "web-infra-dev-midscene",
    "description": "GUI Agent for E2E Testing",
    "category": "testing",
    "stars": 14856,
    "tags": [
      "browser-use",
      "computer-use",
      "e2e-testing"
    ],
    "url": "https://github.com/web-infra-dev/midscene"
  },
  {
    "name": "Pytest",
    "slug": "pytest-dev-pytest",
    "description": "The pytest framework makes it easy to write small tests, yet scales to support complex functional testing",
    "category": "testing",
    "stars": 14499,
    "tags": [
      "hacktoberfest",
      "python",
      "test"
    ],
    "url": "https://github.com/pytest-dev/pytest"
  },
  {
    "name": "Supertest",
    "slug": "forwardemail-supertest",
    "description": "🕷 Super-agent driven library for testing node.js HTTP servers using a fluent API.   Maintained for @forwardemail, @ladjs, @spamscanner, @breejs, @...",
    "category": "testing",
    "stars": 14398,
    "tags": [
      "assertions",
      "node",
      "superagent"
    ],
    "url": "https://github.com/forwardemail/supertest"
  },
  {
    "name": "Httpbin",
    "slug": "postmanlabs-httpbin",
    "description": "HTTP Request & Response Service, written in Python + Flask.",
    "category": "testing",
    "stars": 13618,
    "tags": [
      "api",
      "http",
      "http-server"
    ],
    "url": "https://github.com/postmanlabs/httpbin"
  },
  {
    "name": "SeleniumBase",
    "slug": "seleniumbase-seleniumbase",
    "description": "APIs for browser automation, testing, and bypassing bot-detection. Includes CDP Mode: A stealthy configuration for chromium that passes every bot d...",
    "category": "testing",
    "stars": 13007,
    "tags": [
      "anti-detection",
      "bot-detection",
      "chromedriver"
    ],
    "url": "https://github.com/seleniumbase/SeleniumBase"
  },
  {
    "name": "LangGPT",
    "slug": "langgptai-langgpt",
    "description": "LangGPT: Empowering everyone to become a prompt expert! 🚀  📌 结构化提示词（Structured Prompt）提出者 📌 元提示词（Meta-Prompt）发起者   📌 最流行的提示词落地范式 | Language of ...",
    "category": "testing",
    "stars": 12521,
    "tags": [
      "chatgpt",
      "claude",
      "deeplearning"
    ],
    "url": "https://github.com/langgptai/LangGPT"
  },
  {
    "name": "Fsociety",
    "slug": "manisso-fsociety",
    "description": "fsociety Hacking Tools Pack – A Penetration Testing Framework",
    "category": "testing",
    "stars": 12307,
    "tags": [
      "brute-force-attacks",
      "desktop",
      "exploitation"
    ],
    "url": "https://github.com/Manisso/fsociety"
  },
  {
    "name": "Detox",
    "slug": "wix-detox",
    "description": "Gray box end-to-end testing and automation framework for mobile apps",
    "category": "testing",
    "stars": 12026,
    "tags": [
      "android",
      "automation",
      "e2e-tests"
    ],
    "url": "https://github.com/wix/Detox"
  },
  {
    "name": "Nightwatch",
    "slug": "nightwatchjs-nightwatch",
    "description": "Integrated end-to-end testing framework written in Node.js and using W3C Webdriver API. Developed at @browserstack",
    "category": "testing",
    "stars": 11954,
    "tags": [
      "automated-testing",
      "chromedriver",
      "end-to-end-testing"
    ],
    "url": "https://github.com/nightwatchjs/nightwatch"
  },
  {
    "name": "Jira_clone",
    "slug": "oldboyxx-jira-clone",
    "description": "A simplified Jira clone built with React/Babel (Client), and Node/TypeScript (API). Auto formatted with Prettier, tested with Cypress.",
    "category": "testing",
    "stars": 11057,
    "tags": [
      "JavaScript"
    ],
    "url": "https://github.com/oldboyxx/jira_clone"
  },
  {
    "name": "Mockery",
    "slug": "mockery-mockery",
    "description": "Mockery is a simple yet flexible PHP mock object framework for use in unit testing with PHPUnit, PHPSpec or any other testing framework. Its core g...",
    "category": "testing",
    "stars": 10725,
    "tags": [
      "mock",
      "mockery",
      "mocking"
    ],
    "url": "https://github.com/mockery/mockery"
  },
  {
    "name": "Testcafe",
    "slug": "devexpress-testcafe",
    "description": "A Node.js tool to automate end-to-end web testing.",
    "category": "testing",
    "stars": 9904,
    "tags": [
      "browser",
      "e2e",
      "end-to-end-testing"
    ],
    "url": "https://github.com/DevExpress/testcafe"
  },
  {
    "name": "Mockery",
    "slug": "vektra-mockery",
    "description": "A mock code autogenerator for Go",
    "category": "testing",
    "stars": 7160,
    "tags": [
      "generation",
      "generator",
      "go"
    ],
    "url": "https://github.com/vektra/mockery"
  },
  {
    "name": "K8tools",
    "slug": "k8gege-k8tools",
    "description": "K8工具合集(内网渗透/提权工具/远程溢出/漏洞利用/扫描工具/密码破解/免杀工具/Exploit/APT/0day/Shellcode/Payload/priviledge/BypassUAC/OverFlow/WebShell/PenTest) Web GetShell Exploit(S...",
    "category": "testing",
    "stars": 6213,
    "tags": [
      "0day",
      "brute-force",
      "bypass"
    ],
    "url": "https://github.com/k8gege/K8tools"
  },
  {
    "name": "Flashlight",
    "slug": "bamlab-flashlight",
    "description": "📱⚡️ Lighthouse for Mobile - audits your app and gives a performance score to your Android apps (native, React Native, Flutter..). Measure performa...",
    "category": "testing",
    "stars": 1602,
    "tags": [
      "android",
      "apm",
      "audit"
    ],
    "url": "https://github.com/bamlab/flashlight"
  },
  {
    "name": "Pgmock",
    "slug": "hexclave-pgmock",
    "description": "In-memory Postgres for unit/E2E tests",
    "category": "testing",
    "stars": 1231,
    "tags": [
      "JavaScript"
    ],
    "url": "https://github.com/hexclave/pgmock"
  },
  {
    "name": "Poku",
    "slug": "wellwelwel-poku",
    "description": "🐷 Poku makes testing easy for Node.js, Bun, Deno, and you at the same time.",
    "category": "testing",
    "stars": 1180,
    "tags": [
      "assert",
      "assertion",
      "bdd"
    ],
    "url": "https://github.com/wellwelwel/poku"
  },
  {
    "name": "Synpress",
    "slug": "synpress-synpress",
    "description": "Synpress is e2e testing framework based on Cypress.io and playwright with support for metamask.",
    "category": "testing",
    "stars": 889,
    "tags": [
      "blockchain",
      "cypress",
      "docker"
    ],
    "url": "https://github.com/synpress/synpress"
  },
  {
    "name": "Cypress Real Events",
    "slug": "dmtrkovalenko-cypress-real-events",
    "description": "Fire native system events from Cypress. ",
    "category": "testing",
    "stars": 837,
    "tags": [
      "cdp",
      "cypress",
      "e2e"
    ],
    "url": "https://github.com/dmtrKovalenko/cypress-real-events"
  },
  {
    "name": "Examples Next Prisma Starter",
    "slug": "trpc-examples-next-prisma-starter",
    "description": "🚀 tRPC starter repo with E2E-testing",
    "category": "testing",
    "stars": 789,
    "tags": [
      "nextjs",
      "starter",
      "trpc"
    ],
    "url": "https://github.com/trpc/examples-next-prisma-starter"
  },
  {
    "name": "Mobly",
    "slug": "google-mobly",
    "description": "E2E test framework for tests with complex environment requirements.",
    "category": "testing",
    "stars": 753,
    "tags": [
      "android",
      "android-app",
      "android-development"
    ],
    "url": "https://github.com/google/mobly"
  },
  {
    "name": "Playwright Typescript Playwright Test",
    "slug": "akshayp7-playwright-typescript-playwright-test",
    "description": " This is a boilerplate/template for a Playwright-Typescript framework for web UI, API, mobile emulation, DB, and visual testing. Docker image, Sona...",
    "category": "testing",
    "stars": 731,
    "tags": [
      "allure",
      "allure-report",
      "apitesting"
    ],
    "url": "https://github.com/akshayp7/playwright-typescript-playwright-test"
  }
];

export const metadata: Metadata = {
  title: `${categoryData.label} - Free Developer Tools | DevTools Hub`,
  description: `Free and open source testing frameworks for unit, integration, and e2e testing.. Browse 41 free testing tools on DevTools Hub.`,
  openGraph: {
    title: `${categoryData.label} - DevTools Hub`,
    description: `Free and open source testing frameworks for unit, integration, and e2e testing.. Browse 41 free tools.`,
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
