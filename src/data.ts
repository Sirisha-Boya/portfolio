/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Experience, SkillDetail, Project, GuestbookEntry } from './types';

export const EXPERIENCES: Experience[] = [
  {
    role: "Senior Full Stack Developer",
    period: "MAR 2024 - NOW",
    company: "American Tech Vision Solutions LLC",
    bullets: [
      "End-to-end development across frontend, backend and cloud deployments.",
      "Designed REST APIs, secure authentication, user onboarding, and KYC workflows.",
      "Built resilient microservices using ASP.NET Core, Ocelot Gateway, and Docker containers."
    ],
    color: 'cyan'
  },
  {
    role: "Software Developer",
    period: "2022 - 2024",
    company: "Xyram Software Solutions Pvt. Ltd.",
    bullets: [
      "Developed XyMACS procurement platform using React.js and .NET 6.",
      "Successfully built Purchase Request, RFQ, Purchase Orders, and User Management modules."
    ],
    color: 'yellow'
  }
];

export const SKILL_DETAILS: SkillDetail[] = [
  {
    name: "React.js",
    level: "5+ Years",
    description: "Expert in hooks, context state management, component composition, and building highly interactive web apps with styled utility layers.",
    icon: "code"
  },
  {
    name: "ASP.NET Core",
    level: "5.7 Years",
    description: "Deep expertise in Web API design, dependency injection pipelines, secure middleware auth, and structuring modular API layers.",
    icon: "layers"
  },
  {
    name: ".NET 8",
    level: "Expert",
    description: "Proficient in modern .NET runtimes, C# features, performance optimization, and migrating legacy services to cloud-ready .NET 8.",
    icon: "bolt"
  },
  {
    name: "C#",
    level: "5.7 Years",
    description: "Strong object-oriented design patterns, LINQ queries, asynchronous programming, multi-threaded task management, and entity modeling.",
    icon: "terminal"
  },
  {
    name: "Azure SQL",
    level: "Intermediate",
    description: "Handling SQL databases hosted in Azure Cloud, performance tuning, query optimization, and schema migrations.",
    icon: "database"
  },
  {
    name: "Docker",
    level: "Intermediate",
    description: "Containerizing ASP.NET Web APIs and microservices for reliable orchestration, local environments, and CI/CD pipelines.",
    icon: "cloud"
  },
  {
    name: "Microservices",
    level: "Advanced",
    description: "Architecting backend software with Ocelot API Gateway, message brokering, asynchronous request-reply, and isolated service persistence.",
    icon: "hub"
  },
  {
    name: "GitHub Copilot",
    level: "Daily User",
    description: "Utilizing modern AI workflows to boost code development speed, write robust test coverage, and prototype faster.",
    icon: "psychology"
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Bank In A Box",
    category: "Digital Banking Suite",
    description: "Secure fintech core for modern banks. Handled state-of-the-art authentication and digital vault transactions.",
    emoji: "🏦",
    tags: ["Microservices", "ASP.NET Core", "C#", "Docker", "JWT Auth", "D3.js", "Azure"],
    highlights: [
      "Designed real-time transaction processing using event-driven microservices.",
      "Implemented bank-grade OAuth2 and multi-factor authentication modules.",
      "Visual dashboard utilizing D3/Recharts for balance and transaction analytics."
    ],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "CaMS",
    category: "Healthcare OS",
    description: "An intuitive patient management, billing, and clinical workflow system used in multi-department hospitals.",
    emoji: "🏥",
    tags: ["React.js", "ASP.NET Core", "PostgreSQL", "REST API", "HIPAA Safeguards", "Docker"],
    highlights: [
      "Designed patient registration, interactive flowsheets, and secure appointment booking.",
      "Connected React.js frontend to ASP.NET Core backend for real-time triage updates.",
      "Adhered to HIPAA compliance data-security protocols."
    ],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "HaTS",
    category: "ATS Platform",
    description: "Full lifecycle applicant tracking and hiring platform for high-velocity recruiting departments.",
    emoji: "👥",
    tags: ["React.js", "C#", "SQL Server", "Kanban Engine", "Cognitive AI Parser"],
    highlights: [
      "Engineered kanban boards for candidate stages with elegant drag-and-drop mechanics.",
      "Custom interview scheduler integrating automated calendar notifications.",
      "Built a cognitive resume parsing pipeline with AI classification insights."
    ],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "XyMACS",
    category: "Procurement Portal",
    description: "Comprehensive procurement, Purchase Request (PR), RFQ, and purchase order tracking system for enterprises.",
    emoji: "📦",
    tags: ["React.js", ".NET 6", "Purchase Orders", "CSV Engine", "PDF Generator", "SQL Server"],
    highlights: [
      "Streamlined multi-level approval workflows for high-budget PO validations.",
      "Interactive data grids supporting advanced filtering, CSV exports, and vendor bidding.",
      "Built automated PDF invoice generators and secure vendor file managers."
    ],
    liveUrl: "#",
    githubUrl: "#"
  }
];

export const INITIAL_GUESTBOOK: GuestbookEntry[] = [
  {
    id: "1",
    name: "Indra Kumar",
    message: "This portfolio is so original! The doodle aesthetic is incredible. Truly stands out among developer websites! ✨",
    color: "yellow",
    timestamp: "July 5, 2026"
  },
  {
    id: "2",
    name: "Maya",
    message: "Super neat full-stack work. Love the .NET + React combination! Hit me up for a collaboration sometime.",
    color: "cyan",
    timestamp: "July 4, 2026"
  },
  {
    id: "3",
    name: "Devon R.",
    message: "Let's build something awesome together! Hire Sirisha ASAP! 🚀",
    color: "pink",
    timestamp: "July 5, 2026"
  }
];
