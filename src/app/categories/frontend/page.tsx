import { Metadata } from 'next';
import Link from 'next/link';
import ToolCard from '@/components/tools/ToolCard';

const categoryData = {
  name: "frontend",
  label: "Frontend",
  description: "Free frontend frameworks, UI libraries, and component collections.",
  slug: "frontend",
};

const tools = [
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
    "name": "Ant Design",
    "slug": "ant-design-ant-design",
    "description": "An enterprise-class UI design language and React UI library",
    "category": "frontend",
    "stars": 99484,
    "tags": [
      "ant-design",
      "antd",
      "design-systems"
    ],
    "url": "https://github.com/ant-design/ant-design"
  },
  {
    "name": "Material Ui",
    "slug": "mui-material-ui",
    "description": "Material UI: Comprehensive React component library that implements Google's Material Design. Free forever.",
    "category": "frontend",
    "stars": 99029,
    "tags": [
      "design-system",
      "material-design",
      "material-ui"
    ],
    "url": "https://github.com/mui/material-ui"
  },
  {
    "name": "Imgui",
    "slug": "ocornut-imgui",
    "description": "Dear ImGui: Bloat-free Graphical User interface for C++ with minimal dependencies",
    "category": "frontend",
    "stars": 76162,
    "tags": [
      "api",
      "cplusplus",
      "framework"
    ],
    "url": "https://github.com/ocornut/imgui"
  },
  {
    "name": "Design Resources For Developers",
    "slug": "bradtraversy-design-resources-for-developers",
    "description": "Curated list of design and UI resources from stock photos, web templates, CSS frameworks, UI libraries, tools and much more",
    "category": "frontend",
    "stars": 66913,
    "tags": [],
    "url": "https://github.com/bradtraversy/design-resources-for-developers"
  },
  {
    "name": "Awesome Android Ui",
    "slug": "wasabeef-awesome-android-ui",
    "description": "A curated list of awesome Android UI/UX libraries",
    "category": "frontend",
    "stars": 57548,
    "tags": [
      "android",
      "awesome",
      "ui"
    ],
    "url": "https://github.com/wasabeef/awesome-android-ui"
  },
  {
    "name": "Ionic Framework",
    "slug": "ionic-team-ionic-framework",
    "description": "A powerful cross-platform UI toolkit for building native-quality iOS, Android, and Progressive Web Apps with HTML, CSS, and JavaScript.",
    "category": "frontend",
    "stars": 52656,
    "tags": [
      "angular",
      "capacitor",
      "framework"
    ],
    "url": "https://github.com/ionic-team/ionic-framework"
  },
  {
    "name": "Expo",
    "slug": "expo-expo",
    "description": "An open-source framework for making universal native apps with React. Expo runs on Android, iOS, and the web.",
    "category": "frontend",
    "stars": 52176,
    "tags": [
      "android",
      "app-framework",
      "expo"
    ],
    "url": "https://github.com/expo/expo"
  },
  {
    "name": "Query",
    "slug": "tanstack-query",
    "description": "🤖 Powerful asynchronous state management, server-state utilities and data fetching for the web. TS/JS, React Query, Solid Query, Svelte Query and ...",
    "category": "frontend",
    "stars": 50280,
    "tags": [
      "async",
      "cache",
      "data"
    ],
    "url": "https://github.com/TanStack/query"
  },
  {
    "name": "Appsmith",
    "slug": "appsmithorg-appsmith",
    "description": "Platform to build admin panels, internal tools, and dashboards. Integrates with 25+ databases and any API.",
    "category": "frontend",
    "stars": 40862,
    "tags": [
      "admin-dashboard",
      "admin-panels",
      "app-builder"
    ],
    "url": "https://github.com/appsmithorg/appsmith"
  },
  {
    "name": "Floating Ui",
    "slug": "floating-ui-floating-ui",
    "description": "A JavaScript library to position floating elements and create interactions for them.",
    "category": "frontend",
    "stars": 32741,
    "tags": [
      "dropdown",
      "hacktoberfest",
      "popover"
    ],
    "url": "https://github.com/floating-ui/floating-ui"
  },
  {
    "name": "Heroui",
    "slug": "heroui-inc-heroui",
    "description": "🚀 Beautiful, fast and modern React UI library. (Previously NextUI)",
    "category": "frontend",
    "stars": 30643,
    "tags": [
      "component-library",
      "components",
      "library"
    ],
    "url": "https://github.com/heroui-inc/heroui"
  },
  {
    "name": "Element Plus",
    "slug": "element-plus-element-plus",
    "description": "🎉 A Vue.js 3 UI Library made by Element team",
    "category": "frontend",
    "stars": 27745,
    "tags": [
      "component-library",
      "element-plus",
      "element-ui"
    ],
    "url": "https://github.com/element-plus/element-plus"
  },
  {
    "name": "Recharts",
    "slug": "recharts-recharts",
    "description": "Redefined chart library built with React and D3",
    "category": "frontend",
    "stars": 27554,
    "tags": [
      "chart",
      "charting-library",
      "components"
    ],
    "url": "https://github.com/recharts/recharts"
  },
  {
    "name": "Weui",
    "slug": "tencent-weui",
    "description": "A UI library by WeChat official design team, includes the most useful widgets/modules in mobile web applications.",
    "category": "frontend",
    "stars": 27416,
    "tags": [
      "mobile-web",
      "style",
      "wechat"
    ],
    "url": "https://github.com/Tencent/weui"
  },
  {
    "name": "React Admin",
    "slug": "marmelab-react-admin",
    "description": "A frontend Framework for single-page applications on top of REST/GraphQL APIs, using TypeScript, React and Material Design",
    "category": "frontend",
    "stars": 26934,
    "tags": [
      "admin",
      "admin-dashboard",
      "admin-on-rest"
    ],
    "url": "https://github.com/marmelab/react-admin"
  },
  {
    "name": "Lvgl",
    "slug": "lvgl-lvgl",
    "description": "LVGL is a free, full-featured embedded UI library for devices from small MCUs to 3D-capable MPUs, enhanced by LVGL Pro, a professional editor and t...",
    "category": "frontend",
    "stars": 24663,
    "tags": [
      "arduino",
      "c",
      "cpp"
    ],
    "url": "https://github.com/lvgl/lvgl"
  },
  {
    "name": "Vant",
    "slug": "youzan-vant",
    "description": "A lightweight, customizable Vue UI library for mobile web apps.",
    "category": "frontend",
    "stars": 24382,
    "tags": [
      "components",
      "mobile",
      "ui-kit"
    ],
    "url": "https://github.com/youzan/vant"
  },
  {
    "name": "Magicui",
    "slug": "magicuidesign-magicui",
    "description": "UI Library for Design Engineers. Animated components and effects you can copy and paste into your apps. Free. Open Source.",
    "category": "frontend",
    "stars": 22260,
    "tags": [
      "components",
      "framer-motion",
      "nextjs"
    ],
    "url": "https://github.com/magicuidesign/magicui"
  },
  {
    "name": "Primitives",
    "slug": "radix-ui-primitives",
    "description": "Radix Primitives is an open-source UI component library for building high-quality, accessible design systems and web apps. Maintained by @workos.",
    "category": "frontend",
    "stars": 19263,
    "tags": [
      "accessibility",
      "colors",
      "component-library"
    ],
    "url": "https://github.com/radix-ui/primitives"
  },
  {
    "name": "Graphql Code Generator",
    "slug": "dotansimha-graphql-code-generator",
    "description": "A tool for generating code based on a GraphQL schema and GraphQL operations (query/mutation/subscription), with flexible support for custom plugins. ",
    "category": "frontend",
    "stars": 11262,
    "tags": [
      "android",
      "angular",
      "code-generator"
    ],
    "url": "https://github.com/dotansimha/graphql-code-generator"
  },
  {
    "name": "Unopim",
    "slug": "unopim-unopim",
    "description": "Open source Product Information Management (PIM) and Digital Asset Management (DAM) platform built on Laravel — manage, enrich, and scale product d...",
    "category": "frontend",
    "stars": 10959,
    "tags": [
      "laravel",
      "open-source",
      "opensource"
    ],
    "url": "https://github.com/unopim/unopim"
  },
  {
    "name": "Material Design For Bootstrap",
    "slug": "mdbootstrap-material-design-for-bootstrap",
    "description": "Important! A new UI Kit version for Bootstrap 5 is available. Access the latest free version via the link below.",
    "category": "frontend",
    "stars": 9249,
    "tags": [
      "bootstrap",
      "bootstrap-4",
      "bootstrap4"
    ],
    "url": "https://github.com/mdbootstrap/material-design-for-bootstrap"
  },
  {
    "name": "Frontend Stuff",
    "slug": "moklick-frontend-stuff",
    "description": "📝 A continuously expanded list of frameworks, libraries and tools I used/want to use for building things on the web. Mostly JavaScript.",
    "category": "frontend",
    "stars": 8939,
    "tags": [
      "frontend",
      "javascript"
    ],
    "url": "https://github.com/moklick/frontend-stuff"
  },
  {
    "name": "Must Watch Javascript",
    "slug": "allthingssmitty-must-watch-javascript",
    "description": "🔥 JavaScript talks you have to see 📺 on functional programming, performance, frameworks, React, debugging, leveling up, and more! ⚡️",
    "category": "frontend",
    "stars": 7139,
    "tags": [
      "awesome-list",
      "conference-talks",
      "frontend"
    ],
    "url": "https://github.com/AllThingsSmitty/must-watch-javascript"
  },
  {
    "name": "Choo",
    "slug": "choojs-choo",
    "description": ":steam_locomotive::train: - sturdy 4kb frontend framework",
    "category": "frontend",
    "stars": 6764,
    "tags": [
      "choo",
      "dom",
      "interface"
    ],
    "url": "https://github.com/choojs/choo"
  },
  {
    "name": "Imba",
    "slug": "imba-imba",
    "description": "🐤 The friendly full-stack language",
    "category": "frontend",
    "stars": 6508,
    "tags": [
      "declarative",
      "dom",
      "framework"
    ],
    "url": "https://github.com/imba/imba"
  },
  {
    "name": "Must Watch Css",
    "slug": "allthingssmitty-must-watch-css",
    "description": "🔥 CSS talks you have to see ⚡️ covering CSS Grid, flexbox, custom variables, performance, frameworks, Sass, tools, and more! 🚀",
    "category": "frontend",
    "stars": 4885,
    "tags": [
      "awesome-lists",
      "conference-talks",
      "css"
    ],
    "url": "https://github.com/AllThingsSmitty/must-watch-css"
  },
  {
    "name": "Nunu",
    "slug": "go-nunu-nunu",
    "description": "A CLI tool for building Go applications.",
    "category": "frontend",
    "stars": 2601,
    "tags": [
      "ddd",
      "gin",
      "go"
    ],
    "url": "https://github.com/go-nunu/nunu"
  },
  {
    "name": "Voltrn Cli",
    "slug": "irontony-voltrn-cli",
    "description": "📱🚀A POWERFUL CLI tool to quickly scaffold React Native and Expo TypeScript projects with best practices",
    "category": "frontend",
    "stars": 482,
    "tags": [
      "cli",
      "expo",
      "i18next"
    ],
    "url": "https://github.com/IronTony/voltrn-cli"
  },
  {
    "name": "Light Sdk",
    "slug": "lightphone-light-sdk",
    "description": "Scaffold for building custom tools for the Light Phone III",
    "category": "frontend",
    "stars": 300,
    "tags": [
      "Kotlin"
    ],
    "url": "https://github.com/lightphone/light-sdk"
  },
  {
    "name": "Scaffolding",
    "slug": "holochain-scaffolding",
    "description": "Scaffolding tool to quickly generate and modify holochain applications",
    "category": "frontend",
    "stars": 236,
    "tags": [
      "codegen",
      "holochain",
      "rad"
    ],
    "url": "https://github.com/holochain/scaffolding"
  },
  {
    "name": "Most 'AI Agents' Are Just If-Statements in a Trench Coat",
    "slug": "devto-4603458-most-ai-agents-are-just-if-statements-in-a-trench-coat",
    "description": "I built an agent last year, and I was proud of it.  It had a planner. It had tools. It had a...",
    "category": "frontend",
    "stars": 85,
    "tags": [
      "ai",
      "softwareengineering",
      "webdev"
    ],
    "url": "https://dev.to/james_anderson_h/most-ai-agents-are-just-if-statements-in-a-trench-coat-3960"
  }
];

export const metadata: Metadata = {
  title: `${categoryData.label} - Free Developer Tools | DevTools Hub`,
  description: `Free frontend frameworks, UI libraries, and component collections.. Browse 35 free frontend tools on DevTools Hub.`,
  openGraph: {
    title: `${categoryData.label} - DevTools Hub`,
    description: `Free frontend frameworks, UI libraries, and component collections.. Browse 35 free tools.`,
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
