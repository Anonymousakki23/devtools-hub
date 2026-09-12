import { Metadata } from 'next';
import Link from 'next/link';
import ToolCard from '@/components/tools/ToolCard';

const categoryData = {
  name: "devops",
  label: "Devops",
  description: "Free DevOps tools for CI/CD, containerization, and deployment automation.",
  slug: "devops",
};

const tools = [
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
    "name": "Ruflo",
    "slug": "ruvnet-ruflo",
    "description": "🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate autonomous workflows, and build conversational AI systems. Featur...",
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
    "name": "Ansible",
    "slug": "ansible-ansible",
    "description": "Ansible is a radically simple IT automation platform that makes your applications and systems easier to deploy and maintain. Automate everything fr...",
    "category": "devops",
    "stars": 70661,
    "tags": [
      "ansible",
      "python",
      "Python"
    ],
    "url": "https://github.com/ansible/ansible"
  },
  {
    "name": "Nocode",
    "slug": "kelseyhightower-nocode",
    "description": "The best way to write secure and reliable applications. Write nothing; deploy nowhere.",
    "category": "devops",
    "stars": 65721,
    "tags": [
      "Dockerfile"
    ],
    "url": "https://github.com/kelseyhightower/nocode"
  },
  {
    "name": "Gitea",
    "slug": "go-gitea-gitea",
    "description": "Git with a cup of tea! Painless self-hosted all-in-one software development service, including Git hosting, code review, team collaboration, packag...",
    "category": "devops",
    "stars": 57955,
    "tags": [
      "bitbucket",
      "cicd",
      "devops"
    ],
    "url": "https://github.com/go-gitea/gitea"
  },
  {
    "name": "Windows",
    "slug": "dockur-windows",
    "description": "Windows inside a Docker container.",
    "category": "devops",
    "stars": 53237,
    "tags": [
      "docker",
      "docker-container",
      "virtualization"
    ],
    "url": "https://github.com/dockur/windows"
  },
  {
    "name": "Docker OSX",
    "slug": "sickcodes-docker-osx",
    "description": "Run macOS VM in a Docker! Run near native OSX-KVM in Docker! X11 Forwarding! CI/CD for OS X Security Research! Docker mac Containers.",
    "category": "devops",
    "stars": 52923,
    "tags": [
      "container",
      "docker",
      "docker-osx"
    ],
    "url": "https://github.com/sickcodes/Docker-OSX"
  },
  {
    "name": "Container",
    "slug": "apple-container",
    "description": "A tool for creating and running Linux containers using lightweight virtual machines on a Mac. It is written in Swift, and optimized for Apple silic...",
    "category": "devops",
    "stars": 49867,
    "tags": [
      "Swift"
    ],
    "url": "https://github.com/apple/container"
  },
  {
    "name": "Airi",
    "slug": "moeru-ai-airi",
    "description": "💖🧸 Self hosted, you-owned Grok Companion, a container of souls of waifu, cyber livings to bring them into our worlds, wishing to achieve Neuro-sa...",
    "category": "devops",
    "stars": 49056,
    "tags": [
      "ai-companion",
      "ai-vtuber",
      "airi"
    ],
    "url": "https://github.com/moeru-ai/airi"
  },
  {
    "name": "Summer2027 Internships",
    "slug": "simplifyjobs-summer2027-internships",
    "description": "Summer 2027 software engineering, data science, AI, quant, product management, and hardware internship postings. Updated daily by Simplify and Pitt...",
    "category": "devops",
    "stars": 47352,
    "tags": [
      "data-science",
      "fall-2026",
      "github"
    ],
    "url": "https://github.com/SimplifyJobs/Summer2027-Internships"
  },
  {
    "name": "Kong",
    "slug": "kong-kong",
    "description": "🦍 The API and AI Gateway",
    "category": "devops",
    "stars": 44125,
    "tags": [
      "ai",
      "ai-gateway",
      "api-gateway"
    ],
    "url": "https://github.com/Kong/kong"
  },
  {
    "name": "Ray",
    "slug": "ray-project-ray",
    "description": "Ray is an AI compute engine. Ray consists of a core distributed runtime and a set of AI Libraries for accelerating ML workloads.",
    "category": "devops",
    "stars": 43785,
    "tags": [
      "data-science",
      "deep-learning",
      "deployment"
    ],
    "url": "https://github.com/ray-project/ray"
  },
  {
    "name": "Fastlane",
    "slug": "fastlane-fastlane",
    "description": "🚀 The easiest way to automate building and releasing your iOS and Android apps",
    "category": "devops",
    "stars": 42104,
    "tags": [
      "android",
      "apps",
      "automation"
    ],
    "url": "https://github.com/fastlane/fastlane"
  },
  {
    "name": "Harness",
    "slug": "harness-harness",
    "description": "Harness Open Source is an end-to-end developer platform with Source Control Management, CI/CD Pipelines, Hosted Developer Environments, and Artifac...",
    "category": "devops",
    "stars": 38325,
    "tags": [
      "build-automation",
      "build-pipelines",
      "ci"
    ],
    "url": "https://github.com/harness/harness"
  },
  {
    "name": "Compose",
    "slug": "docker-compose",
    "description": "Define and run multi-container applications with Docker",
    "category": "devops",
    "stars": 38137,
    "tags": [
      "docker",
      "docker-compose",
      "go"
    ],
    "url": "https://github.com/docker/compose"
  },
  {
    "name": "Trivy",
    "slug": "aquasecurity-trivy",
    "description": "Find vulnerabilities, misconfigurations, secrets, SBOM in containers, Kubernetes, code repositories, clouds and more",
    "category": "devops",
    "stars": 37873,
    "tags": [
      "containers",
      "devsecops",
      "docker"
    ],
    "url": "https://github.com/aquasecurity/trivy"
  },
  {
    "name": "Dokploy",
    "slug": "dokploy-dokploy",
    "description": "Open Source Alternative to Vercel, Netlify and Heroku.",
    "category": "devops",
    "stars": 37243,
    "tags": [
      "agents",
      "ai",
      "backend"
    ],
    "url": "https://github.com/Dokploy/dokploy"
  },
  {
    "name": "Awesome Docker",
    "slug": "veggiemonk-awesome-docker",
    "description": ":whale: A curated list of Docker resources and projects",
    "category": "devops",
    "stars": 36808,
    "tags": [
      "awesome",
      "awesome-list",
      "container"
    ],
    "url": "https://github.com/veggiemonk/awesome-docker"
  },
  {
    "name": "Nginx Proxy Manager",
    "slug": "nginxproxymanager-nginx-proxy-manager",
    "description": "Docker container for managing Nginx proxy hosts with a simple, powerful interface",
    "category": "devops",
    "stars": 34123,
    "tags": [
      "nginx",
      "nginx-proxy",
      "TypeScript"
    ],
    "url": "https://github.com/NginxProxyManager/nginx-proxy-manager"
  },
  {
    "name": "Podman",
    "slug": "podman-container-tools-podman",
    "description": "Podman: A tool for managing OCI containers and pods.",
    "category": "devops",
    "stars": 32845,
    "tags": [
      "containers",
      "docker",
      "kubernetes"
    ],
    "url": "https://github.com/podman-container-tools/podman"
  },
  {
    "name": "Colima",
    "slug": "abiosoft-colima",
    "description": "Container runtimes on macOS (and Linux) with minimal setup",
    "category": "devops",
    "stars": 30773,
    "tags": [
      "containerd",
      "containerd-compose",
      "containers"
    ],
    "url": "https://github.com/abiosoft/colima"
  },
  {
    "name": "Nanoclaw",
    "slug": "nanocoai-nanoclaw",
    "description": "A lightweight alternative to OpenClaw that runs in containers for security. Connects to WhatsApp, Telegram, Slack, Discord, Gmail and other messagi...",
    "category": "devops",
    "stars": 30745,
    "tags": [
      "ai-agents",
      "ai-assistant",
      "claude-code"
    ],
    "url": "https://github.com/nanocoai/nanoclaw"
  },
  {
    "name": "Picoclaw",
    "slug": "sipeed-picoclaw",
    "description": "Tiny, Fast, and Deployable anywhere — automate the mundane, unleash your creativity",
    "category": "devops",
    "stars": 29962,
    "tags": [
      "Go"
    ],
    "url": "https://github.com/sipeed/picoclaw"
  },
  {
    "name": "ProxmoxVE",
    "slug": "community-scripts-proxmoxve",
    "description": "Proxmox VE Helper-Scripts (Community Edition) ",
    "category": "devops",
    "stars": 29553,
    "tags": [
      "alpine",
      "authentification",
      "container"
    ],
    "url": "https://github.com/community-scripts/ProxmoxVE"
  },
  {
    "name": "Harbor",
    "slug": "goharbor-harbor",
    "description": "An open source trusted cloud native registry project that stores, signs, and scans content.",
    "category": "devops",
    "stars": 29353,
    "tags": [
      "cloud-native",
      "cncf",
      "cncf-project"
    ],
    "url": "https://github.com/goharbor/harbor"
  },
  {
    "name": "Apisix",
    "slug": "apache-apisix",
    "description": "The Cloud-Native API Gateway and AI Gateway",
    "category": "devops",
    "stars": 17110,
    "tags": [
      "ai-gateway",
      "api",
      "api-gateway"
    ],
    "url": "https://github.com/apache/apisix"
  },
  {
    "name": "Vercel",
    "slug": "vercel",
    "description": "Develop. Preview. Ship. The platform for frontend developers.",
    "category": "devops",
    "stars": 13000,
    "tags": [
      "hosting",
      "deployment",
      "frontend"
    ],
    "url": "https://vercel.com"
  },
  {
    "name": "Infracost",
    "slug": "infracost-infracost",
    "description": "Cloud cost intelligence for engineers, AI coding agents, and CI/CD 💰📉 Shift FinOps Left!",
    "category": "devops",
    "stars": 12516,
    "tags": [
      "aws",
      "azure",
      "cdk"
    ],
    "url": "https://github.com/infracost/infracost"
  },
  {
    "name": "Kubescape",
    "slug": "kubescape-kubescape",
    "description": "Kubescape is an open-source Kubernetes security platform for your IDE, CI/CD pipelines, and clusters. It includes risk analysis, security, complian...",
    "category": "devops",
    "stars": 11725,
    "tags": [
      "best-practice",
      "devops",
      "kubernetes"
    ],
    "url": "https://github.com/kubescape/kubescape"
  },
  {
    "name": "Checkmate",
    "slug": "bluewave-labs-checkmate",
    "description": "Checkmate is an open-source, self-hosted tool designed to track and monitor server hardware, uptime, response times, and incidents in real-time wit...",
    "category": "devops",
    "stars": 10805,
    "tags": [
      "good-first-contribution",
      "good-first-issue",
      "good-first-project"
    ],
    "url": "https://github.com/bluewave-labs/Checkmate"
  },
  {
    "name": "Certimate",
    "slug": "certimate-go-certimate",
    "description": "An open-source and free self-hosted SSL certificates ACME tool, automates the full-cycle of issuance, deployment, renewal, and monitoring visually....",
    "category": "devops",
    "stars": 9293,
    "tags": [
      "acme",
      "acme-client",
      "automation"
    ],
    "url": "https://github.com/certimate-go/certimate"
  },
  {
    "name": "DevOps Bash Tools",
    "slug": "harisekhon-devops-bash-tools",
    "description": "1200+ DevOps Bash Scripts - AWS, GCP, Kubernetes, Docker, CI/CD, APIs, SQL, PostgreSQL, MySQL, Hive, Impala, Kafka, Hadoop, Jenkins, GitHub, GitLab...",
    "category": "devops",
    "stars": 8409,
    "tags": [
      "api",
      "aws",
      "bash"
    ],
    "url": "https://github.com/HariSekhon/DevOps-Bash-tools"
  },
  {
    "name": "Trigger.dev",
    "slug": "trigger-dev",
    "description": "The open source background jobs framework",
    "category": "devops",
    "stars": 8000,
    "tags": [
      "jobs",
      "queues",
      "serverless"
    ],
    "url": "https://trigger.dev"
  },
  {
    "name": "Concourse",
    "slug": "concourse-concourse",
    "description": "Concourse is a container-based automation system written in Go. It's mostly used for CI/CD.",
    "category": "devops",
    "stars": 7899,
    "tags": [
      "ci",
      "ci-cd",
      "concourse"
    ],
    "url": "https://github.com/concourse/concourse"
  },
  {
    "name": "Woodpecker",
    "slug": "woodpecker-ci-woodpecker",
    "description": "Woodpecker is a simple, yet powerful CI/CD engine with great extensibility.",
    "category": "devops",
    "stars": 7859,
    "tags": [
      "automation",
      "ci",
      "cicd"
    ],
    "url": "https://github.com/woodpecker-ci/woodpecker"
  },
  {
    "name": "Gocd",
    "slug": "gocd-gocd",
    "description": "GoCD - Continuous Delivery server main repository",
    "category": "devops",
    "stars": 7434,
    "tags": [
      "cd",
      "ci",
      "ci-cd"
    ],
    "url": "https://github.com/gocd/gocd"
  },
  {
    "name": "Clearml",
    "slug": "clearml-clearml",
    "description": "ClearML - Auto-Magical CI/CD to streamline your AI workload. Experiment Management, Data Management, Pipeline, Orchestration, Scheduling & Serving ...",
    "category": "devops",
    "stars": 6863,
    "tags": [
      "ai",
      "clearml",
      "control"
    ],
    "url": "https://github.com/clearml/clearml"
  },
  {
    "name": "Flagsmith",
    "slug": "flagsmith-flagsmith",
    "description": "Flagsmith is an open-source feature flag platform with remote config, experimentation, and self-hosted or cloud deployment options.",
    "category": "devops",
    "stars": 6548,
    "tags": [
      "cd",
      "ci",
      "continuous-integration"
    ],
    "url": "https://github.com/Flagsmith/flagsmith"
  },
  {
    "name": "Glpi",
    "slug": "glpi-project-glpi",
    "description": "GLPI is a Free Asset and IT Management Software package, Data center management, ITIL Service Desk, licenses tracking and software auditing.",
    "category": "devops",
    "stars": 6335,
    "tags": [
      "asset-manager",
      "assets-management",
      "cmdb"
    ],
    "url": "https://github.com/glpi-project/glpi"
  },
  {
    "name": "K8s_PaaS",
    "slug": "ben1234560-k8s-paas",
    "description": "如何基于K8s(Kubernetes)部署成PaaS/DevOps(一套完整的软件研发和部署平台)--教程/学习(实战代码/架构设计/大量注释/操作配图)，你将习得部署如：K8S(Kubernetes)、Dashboard、Harbor、Jenkins、本地Gitlab、Apollo框架、Pr...",
    "category": "devops",
    "stars": 5458,
    "tags": [
      "apollo",
      "cd",
      "ci"
    ],
    "url": "https://github.com/ben1234560/k8s_PaaS"
  },
  {
    "name": "Kruise",
    "slug": "openkruise-kruise",
    "description": "Automated management of large-scale applications on Kubernetes (incubating project under CNCF)",
    "category": "devops",
    "stars": 5339,
    "tags": [
      "cloud-native",
      "cloudnative",
      "cncf"
    ],
    "url": "https://github.com/openkruise/kruise"
  },
  {
    "name": "Railway",
    "slug": "railway",
    "description": "Instant deployments, zero config. Deploy your code with Railway.",
    "category": "devops",
    "stars": 5000,
    "tags": [
      "hosting",
      "deployment",
      "backend"
    ],
    "url": "https://railway.app"
  },
  {
    "name": "GreaterWMS",
    "slug": "greaterwms-greaterwms",
    "description": "This Inventory management system is the currently Ford Asia Pacific after-sales logistics warehousing supply chain process . After I leave Ford , I...",
    "category": "devops",
    "stars": 4374,
    "tags": [
      "inventory",
      "inventory-management",
      "inventory-management-system"
    ],
    "url": "https://github.com/GreaterWMS/GreaterWMS"
  },
  {
    "name": "Personal Management System",
    "slug": "volmarg-personal-management-system",
    "description": "Your web application for managing personal data.",
    "category": "devops",
    "stars": 4155,
    "tags": [
      "content-management",
      "crm",
      "dashboard"
    ],
    "url": "https://github.com/Volmarg/personal-management-system"
  },
  {
    "name": "Inngest",
    "slug": "inngest",
    "description": "The open-source durable execution platform for building reliable workflows",
    "category": "devops",
    "stars": 4000,
    "tags": [
      "workflow",
      "queues",
      "serverless"
    ],
    "url": "https://inngest.com"
  },
  {
    "name": "Hatchet",
    "slug": "hatchet",
    "description": "A platform for distributed task execution",
    "category": "devops",
    "stars": 4000,
    "tags": [
      "tasks",
      "queues",
      "distributed"
    ],
    "url": "https://hatchet.run"
  },
  {
    "name": "Pimcore",
    "slug": "pimcore-pimcore",
    "description": "Core Framework for the Open Core Data & Experience Management Platform (PIM, MDM, CDP, DAM, DXP/CMS & Digital Commerce)",
    "category": "devops",
    "stars": 3847,
    "tags": [
      "cdp",
      "cms",
      "cms-framework"
    ],
    "url": "https://github.com/pimcore/pimcore"
  },
  {
    "name": "Cronjob",
    "slug": "cronjob",
    "description": "A modern cron job service",
    "category": "devops",
    "stars": 500,
    "tags": [
      "cron",
      "scheduler",
      "jobs"
    ],
    "url": "https://cronjob.dev"
  },
  {
    "name": "I Built a Version Bump Tool in Rust That Is 10,000x Faster Than Its Python Co...",
    "slug": "devto-4585846-i-built-a-version-bump-tool-in-rust-that-is-10-000x-faster-than-its-python-counterpart",
    "description": "Hello, fellow version-bumping enthusiasts, sleep-deprived Rustaceans, and accidental software...",
    "category": "devops",
    "stars": 113,
    "tags": [
      "rust",
      "python",
      "tutorial"
    ],
    "url": "https://dev.to/wiseai/i-built-a-version-bump-tool-in-rust-that-is-10000x-faster-than-its-python-counterparts-i6b"
  },
  {
    "name": "Four Debian 13 Boxes, One Brief: 1,923 Packages on Metal, 328 in the Cloud",
    "slug": "devto-4617706-four-debian-13-boxes-one-brief-1-923-packages-on-metal-328-in-the-cloud",
    "description": "The same Debian 13 on a laptop and on AWS, GCE and Azure. The cloud images ship 328-350 packages against 1,923 on metal, no firmware package at all...",
    "category": "devops",
    "stars": 9,
    "tags": [
      "debian",
      "linux",
      "claudecode"
    ],
    "url": "https://dev.to/gde/four-debian-13-boxes-one-brief-1923-packages-on-metal-328-in-the-cloud-and-the-backup-gpt-cc2"
  },
  {
    "name": "Three small design decisions in a \"toggle effects via CSS class\" library, and...",
    "slug": "devto-4504690-three-small-design-decisions-in-a-toggle-effects-via-css-class-library-and-the-tradeof",
    "description": "Three small design decisions in a \"toggle effects via CSS class\" library, and the tradeoffs...",
    "category": "devops",
    "stars": 2,
    "tags": [
      "css",
      "frontend",
      "javascript"
    ],
    "url": "https://dev.to/iurii_rogulia/three-small-design-decisions-in-a-toggle-effects-via-css-class-library-and-the-tradeoffs-behind-36c1"
  }
];

export const metadata: Metadata = {
  title: `${categoryData.label} - Free Developer Tools | DevTools Hub`,
  description: `Free DevOps tools for CI/CD, containerization, and deployment automation.. Browse 52 free devops tools on DevTools Hub.`,
  openGraph: {
    title: `${categoryData.label} - DevTools Hub`,
    description: `Free DevOps tools for CI/CD, containerization, and deployment automation.. Browse 52 free tools.`,
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
