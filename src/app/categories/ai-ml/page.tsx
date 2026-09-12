import { Metadata } from 'next';
import Link from 'next/link';
import ToolCard from '@/components/tools/ToolCard';

const categoryData = {
  name: "ai-ml",
  label: "Ai Ml",
  description: "Free AI and machine learning tools, APIs, and frameworks.",
  slug: "ai-ml",
};

const tools = [
  {
    "name": "Dify",
    "slug": "langgenius-dify",
    "description": "Build Agentic workflows, RAG pipelines, with rich AI model and tool support on one collaborative workspace. Deploy on cloud, VPC, or self-hosted, s...",
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
    "name": "Litellm",
    "slug": "berriai-litellm",
    "description": "The fastest, litest AI Gateway. Rust core with Python SDK. Call 100+ LLM APIs in OpenAI (or native) format with cost tracking, guardrails, load bal...",
    "category": "ai-ml",
    "stars": 58542,
    "tags": [
      "ai-gateway",
      "anthropic",
      "azure-openai"
    ],
    "url": "https://github.com/BerriAI/litellm"
  },
  {
    "name": "Made With ML",
    "slug": "gokumohandas-made-with-ml",
    "description": "Learn how to develop, deploy and iterate on production-grade ML applications.",
    "category": "ai-ml",
    "stars": 49459,
    "tags": [
      "data-engineering",
      "data-quality",
      "data-science"
    ],
    "url": "https://github.com/GokuMohandas/Made-With-ML"
  },
  {
    "name": "New Api",
    "slug": "quantumnous-new-api",
    "description": "A unified AI model hub for aggregation & distribution. It supports cross-converting various LLMs into OpenAI-compatible, Claude-compatible, or Gemi...",
    "category": "ai-ml",
    "stars": 47943,
    "tags": [
      "ai-gateway",
      "claude",
      "deepseek"
    ],
    "url": "https://github.com/QuantumNous/new-api"
  },
  {
    "name": "Quivr",
    "slug": "the-vibe-company-quivr",
    "description": "Opiniated RAG for integrating GenAI in your apps 🧠   Focus on your product rather than the RAG. Easy integration in existing products with customi...",
    "category": "ai-ml",
    "stars": 39509,
    "tags": [
      "ai",
      "api",
      "chatbot"
    ],
    "url": "https://github.com/The-Vibe-Company/quivr"
  },
  {
    "name": "AgentGPT",
    "slug": "reworkd-agentgpt",
    "description": "🤖 Assemble, configure, and deploy autonomous AI Agents in your browser.",
    "category": "ai-ml",
    "stars": 36298,
    "tags": [
      "agent",
      "agentgpt",
      "agents"
    ],
    "url": "https://github.com/reworkd/AgentGPT"
  },
  {
    "name": "QwenPaw",
    "slug": "agentscope-ai-qwenpaw",
    "description": "Your Personal AI Assistant; easy to install, deploy on your own machine or on the cloud; supports multiple chat apps with easily extensible capabil...",
    "category": "ai-ml",
    "stars": 34821,
    "tags": [
      "agent",
      "agent-harness",
      "agentscope"
    ],
    "url": "https://github.com/agentscope-ai/QwenPaw"
  },
  {
    "name": "Zeroclaw",
    "slug": "zeroclaw-labs-zeroclaw",
    "description": "Fast, small, and fully autonomous AI personal assistant infrastructure, any OS, any platform — deploy anywhere, swap anything 🦀",
    "category": "ai-ml",
    "stars": 32768,
    "tags": [
      "agent",
      "agentic",
      "ai"
    ],
    "url": "https://github.com/zeroclaw-labs/zeroclaw"
  },
  {
    "name": "FastGPT",
    "slug": "labring-fastgpt",
    "description": "FastGPT is a knowledge-based platform built on the LLMs, offers a comprehensive suite of out-of-the-box capabilities such as data processing, RAG r...",
    "category": "ai-ml",
    "stars": 29632,
    "tags": [
      "agent",
      "claude",
      "deepseek"
    ],
    "url": "https://github.com/labring/FastGPT"
  },
  {
    "name": "Linkedin Skill Assessments Quizzes",
    "slug": "ebazhanov-linkedin-skill-assessments-quizzes",
    "description": "Full reference of LinkedIn answers 2024 for skill assessments (aws-lambda, rest-api, javascript, react, git, html, jquery, mongodb, java, Go, pytho...",
    "category": "ai-ml",
    "stars": 28833,
    "tags": [
      "answers",
      "assessment",
      "english"
    ],
    "url": "https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes"
  },
  {
    "name": "Promptfoo",
    "slug": "promptfoo-promptfoo",
    "description": "Test your prompts, agents, and RAGs. Red teaming/pentesting/vulnerability scanning for AI. Compare performance of GPT, Claude, Gemini, DeepSeek, an...",
    "category": "ai-ml",
    "stars": 25039,
    "tags": [
      "ci",
      "ci-cd",
      "cicd"
    ],
    "url": "https://github.com/promptfoo/promptfoo"
  },
  {
    "name": "DocsGPT",
    "slug": "arc53-docsgpt",
    "description": "Private AI platform for agents, assistants and enterprise search. Built-in Agent Builder, Deep research, Document analysis, Multi-model support, an...",
    "category": "ai-ml",
    "stars": 18256,
    "tags": [
      "agent-builder",
      "agents",
      "ai"
    ],
    "url": "https://github.com/arc53/DocsGPT"
  },
  {
    "name": "Cockpit Tools",
    "slug": "jlcodes99-cockpit-tools",
    "description": " 🚀 通用 AI IDE 账号管理工具：支持 Antigravity / Codex / GitHub Copilot / Windsurf / Kiro / Cursor / Gemini-cli / CodeBuddy，多账号切换、配额监控、自动唤醒与多开实例管理。 🚀 Univers...",
    "category": "ai-ml",
    "stars": 17512,
    "tags": [
      "account-manager",
      "ai",
      "antigravity"
    ],
    "url": "https://github.com/jlcodes99/cockpit-tools"
  },
  {
    "name": "Gateway",
    "slug": "portkey-ai-gateway",
    "description": "A blazing fast AI Gateway with integrated guardrails. Route to 1,600+ LLMs, 50+ AI Guardrails with 1 fast & friendly API.",
    "category": "ai-ml",
    "stars": 12968,
    "tags": [
      "ai-gateway",
      "gateway",
      "generative-ai"
    ],
    "url": "https://github.com/Portkey-AI/gateway"
  },
  {
    "name": "Visdom",
    "slug": "fossasia-visdom",
    "description": "Tool for real-time visualization, monitoring and collaborative analysis of AI/ML experiments and live data. Supports Python, PyTorch/Torch, NumPy, ...",
    "category": "ai-ml",
    "stars": 10296,
    "tags": [
      "Python"
    ],
    "url": "https://github.com/fossasia/visdom"
  },
  {
    "name": "Coai",
    "slug": "coaidev-coai",
    "description": "🚀 Next Gen Multi-tenant AI One-Stop Solution. Builtin Admin & Billing System. Enterprise-Grade Unified LLM Gateway Support for 200+ Models And 35+...",
    "category": "ai-ml",
    "stars": 9312,
    "tags": [
      "ai-gateway",
      "api",
      "chat"
    ],
    "url": "https://github.com/coaidev/coai"
  },
  {
    "name": "Backlog.Md",
    "slug": "mrlesk-backlog-md",
    "description": "Backlog.md - A tool for managing project collaboration between humans and AI Agents in a git ecosystem",
    "category": "ai-ml",
    "stars": 6709,
    "tags": [
      "agent",
      "agentic-ai",
      "management"
    ],
    "url": "https://github.com/MrLesk/Backlog.md"
  },
  {
    "name": "Gpt Load",
    "slug": "tbphp-gpt-load",
    "description": "Self-hosted AI gateway for multi-channel, multi-credential setups — API keys and subscription accounts, scheduling, failover, request logs and usag...",
    "category": "ai-ml",
    "stars": 6634,
    "tags": [
      "ai-gateway",
      "anthropic",
      "api-gateway"
    ],
    "url": "https://github.com/tbphp/gpt-load"
  },
  {
    "name": "Agent Starter Pack",
    "slug": "googlecloudplatform-agent-starter-pack",
    "description": "Ship AI Agents to Google Cloud in minutes, not months. Production-ready templates with built-in CI/CD, evaluation, and observability.",
    "category": "ai-ml",
    "stars": 6556,
    "tags": [
      "agents",
      "gcp",
      "gemini"
    ],
    "url": "https://github.com/GoogleCloudPlatform/agent-starter-pack"
  },
  {
    "name": "Fine",
    "slug": "fine",
    "description": "Open source AI coding assistant",
    "category": "ai-ml",
    "stars": 6000,
    "tags": [
      "ai",
      "coding",
      "assistant"
    ],
    "url": "https://fine.dev"
  },
  {
    "name": "Codex Ppt Skill",
    "slug": "ningzimu-codex-ppt-skill",
    "description": "GPT-Image-2 PPT Generator Skill for Creating Image-Based PowerPoint Presentations in Codex and Other Skill-Compatible Agents",
    "category": "ai-ml",
    "stars": 5804,
    "tags": [
      "agent-skills",
      "ai-ppt",
      "claude-code"
    ],
    "url": "https://github.com/ningzimu/codex-ppt-skill"
  },
  {
    "name": "Front End Web Development Resources",
    "slug": "ritikpatni-front-end-web-development-resources",
    "description": "This repository contains content which will be helpful in your journey as a front-end Web Developer",
    "category": "ai-ml",
    "stars": 5151,
    "tags": [
      "animation-frameworks",
      "color-scheme",
      "css"
    ],
    "url": "https://github.com/RitikPatni/Front-End-Web-Development-Resources"
  },
  {
    "name": "Kiln",
    "slug": "kiln-ai-kiln",
    "description": "Build, Evaluate, and Optimize AI Systems. Includes evals, RAG, agents, fine-tuning, synthetic data generation, dataset management, MCP, and more.",
    "category": "ai-ml",
    "stars": 5058,
    "tags": [
      "ai",
      "chain-of-thought",
      "collaboration"
    ],
    "url": "https://github.com/Kiln-AI/Kiln"
  },
  {
    "name": "Langfuse",
    "slug": "langfuse",
    "description": "Open source LLM engineering platform",
    "category": "ai-ml",
    "stars": 5000,
    "tags": [
      "llm",
      "observability",
      "tracing"
    ],
    "url": "https://langfuse.com"
  },
  {
    "name": "Morphik",
    "slug": "morphik",
    "description": "Open source RAG infrastructure",
    "category": "ai-ml",
    "stars": 2000,
    "tags": [
      "rag",
      "search",
      "ai"
    ],
    "url": "https://morphik.ai"
  },
  {
    "name": "REINVENT4",
    "slug": "molecularai-reinvent4",
    "description": "AI molecular design tool for de novo design, scaffold hopping, R-group replacement, linker design and molecule optimization.",
    "category": "ai-ml",
    "stars": 856,
    "tags": [
      "ai",
      "astrazeneca",
      "cheminformatics"
    ],
    "url": "https://github.com/MolecularAI/REINVENT4"
  },
  {
    "name": "Create Llm",
    "slug": "theaniketgiri-create-llm",
    "description": "The fastest way to build and start training your own LLM. CLI tool that scaffolds production-ready PyTorch training projects in seconds. Like creat...",
    "category": "ai-ml",
    "stars": 362,
    "tags": [
      "ai",
      "cli",
      "deep-learning"
    ],
    "url": "https://github.com/theaniketgiri/create-llm"
  }
];

export const metadata: Metadata = {
  title: `${categoryData.label} - Free Developer Tools | DevTools Hub`,
  description: `Free AI and machine learning tools, APIs, and frameworks.. Browse 27 free ai ml tools on DevTools Hub.`,
  openGraph: {
    title: `${categoryData.label} - DevTools Hub`,
    description: `Free AI and machine learning tools, APIs, and frameworks.. Browse 27 free tools.`,
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
