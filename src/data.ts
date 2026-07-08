/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Experience, SkillDetail, Project, GuestbookEntry } from "./types";

export const EXPERIENCES: Experience[] = [
  {
    role: "Senior Full Stack Developer",
    period: "MAR 2024 - APR 2026",
    company: "American Tech Vision Solutions LLC",
    bullets: [
      "Owned end-to-end development across React.js frontend, ASP.NET Core backend, and Azure deployments.",
      "Designed and implemented REST APIs, authentication, onboarding, KYC, and account management modules.",
      "Built microservices using ASP.NET Core and Ocelot API Gateway.",
      "Integrated external banking APIs and implemented RSA encryption for secure data exchange.",
      "Deployed applications using Azure App Service, Azure SQL, Azure Storage, API Gateway, ACR, ACI, and Docker.",
      "Investigated production issues, participated in code reviews, sprint planning, and mentored junior developers.",
    ],
    color: "cyan",
  },
  {
    role: "Software Developer",
    period: "NOV 2022 - MAR 2024",
    company: "Xyram Software Solutions Pvt. Ltd.",
    bullets: [
      "Developed enterprise procurement platform using React.js, .NET 6, PostgreSQL, and Microservices.",
      "Built Purchase Request, RFQ, Purchase Order, and User Management modules.",
      "Developed reusable React components and REST APIs.",
      "Designed responsive Material UI forms using Formik for enterprise workflows.",
    ],
    color: "yellow",
  },
  {
    role: "Software Engineer",
    period: "MAR 2022 - OCT 2022",
    company: "ZF Wabco",
    bullets: [
      "Developed React.js applications using Redux, Storybook, and JavaScript.",
      "Built reusable UI components and integrated REST APIs.",
      "Implemented Jest unit testing and collaborated in Agile Scrum teams.",
      "Worked closely with QA, backend developers, and business analysts.",
    ],
    color: "green",
  },
];

export const SKILL_DETAILS: SkillDetail[] = [
  {
    name: "React.js",
    level: "4+ Years",
    description:
      "Built enterprise-scale React applications with reusable components, routing, state management, and responsive UI development.",
    icon: "code",
  },
  {
    name: "Redux",
    level: "4+ Years",
    description:
      "Built scalable React applications using Redux for predictable state management, asynchronous actions, and reusable store architecture.",
    icon: "account_tree",
  },
  {
    name: "Material UI",
    level: "Advanced",
    description:
      "Built responsive enterprise user interfaces using Material UI components and custom theming.",
    icon: "palette",
  },
  {
    name: "ASP.NET Core",
    level: "4+ Years",
    description:
      "Developed enterprise REST APIs, authentication modules, middleware, and backend services for banking and healthcare applications.",
    icon: "layers",
  },
  {
    name: ".NET 6 / .NET 8",
    level: "Advanced",
    description:
      "Built scalable Web APIs, migrated services, and developed cloud-ready enterprise applications.",
    icon: "bolt",
  },
  {
    name: "C#",
    level: "4+ Years",
    description:
      "Implemented business logic, object-oriented design, asynchronous programming, LINQ, and backend services.",
    icon: "terminal",
  },
  {
    name: "Microservices",
    level: "Advanced",
    description:
      "Designed modular microservices using ASP.NET Core, Ocelot API Gateway, and Docker.",
    icon: "hub",
  },
  {
    name: "REST APIs",
    level: "Advanced",
    description:
      "Designed secure REST APIs, integrated third-party banking services, and implemented authentication workflows.",
    icon: "api",
  },
  {
    name: "Dapper",
    level: "Intermediate",
    description:
      "Used Dapper for lightweight data access, query execution, and high-performance database operations.",
    icon: "storage",
  },
  {
    name: "SQL Server & PostgreSQL",
    level: "Advanced",
    description:
      "Developed enterprise databases, optimized queries, and integrated applications using Dapper.",
    icon: "database",
  },
  {
    name: "Azure",
    level: "Advanced",
    description:
      "Worked with Azure App Service, Azure SQL, Azure Storage, Azure API Gateway, ACR, and ACI deployments.",
    icon: "cloud",
  },
  {
    name: "Docker",
    level: "Intermediate",
    description:
      "Containerized ASP.NET Core applications and microservices for development and Azure deployments.",
    icon: "inventory",
  },
  {
    name: "Containerization",
    level: "Intermediate",
    description:
      "Containerized ASP.NET Core applications and microservices using Docker for consistent development, testing, and cloud deployments.",
    icon: "inventory",
  },

  {
    name: "GitHub Actions",
    level: "Intermediate",
    description:
      "Worked with CI/CD pipelines to automate application builds and deployments.",
    icon: "rocket_launch",
  },
  {
    name: "Vercel",
    level: "Intermediate",
    description:
      "Deployed and maintained modern React applications on Vercel with environment variables, serverless functions, and production releases.",
    icon: "rocket_launch",
  },
  {
    name: "Resend",
    level: "Intermediate",
    description:
      "Integrated Resend email APIs with React and Vercel serverless functions to build secure contact workflows.",
    icon: "mail",
  },
  {
    name: "AI-Assisted Development",
    level: "Daily User",
    description:
      "Leveraged ChatGPT, Claude, GitHub Copilot, and NotebookLM to accelerate development, debugging, documentation, and productivity.",
    icon: "psychology",
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Bank In A Box",
    category: "Digital Banking Platform",
    description:
      "Enterprise digital banking platform enabling financial institutions to provide secure online banking services.",
    emoji: "🏦",
    tags: [
      "React.js",
      "ASP.NET Core",
      "C#",
      "Microservices",
      "Azure",
      "Docker",
      "RSA Encryption",
      "REST APIs",
    ],
    highlights: [
      "Developed backend APIs for authentication, onboarding, KYC, and account management.",
      "Integrated external banking services using configurable API routing.",
      "Implemented RSA encryption for secure customer data exchange.",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Clinical Administration & Management System (CaMS)",
    category: "Healthcare Management",
    description:
      "Enterprise healthcare platform for patient registration, appointments, billing, and clinical workflows.",
    emoji: "🏥",
    tags: ["React.js", "ASP.NET Core", "Azure", "SQL Server", "Microservices"],
    highlights: [
      "Owned backend development across multiple healthcare modules.",
      "Collaborated on React.js frontend implementation.",
      "Built microservices and deployed applications on Azure.",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Hiring & Applicant Tracking System (HaTS)",
    category: "HRMS Platform",
    description:
      "Enterprise recruitment platform for complete hiring lifecycle management.",
    emoji: "👥",
    tags: [
      "React.js",
      "ASP.NET Core",
      "SQL Server",
      "Email Notifications",
      "Azure",
    ],
    highlights: [
      "Developed React frontend and .NET Web APIs.",
      "Integrated email notification services.",
      "Supported Azure deployments and production releases.",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "XyMACS",
    category: "Procurement Platform",
    description:
      "Enterprise procurement solution for purchase requests, RFQs, purchase orders, and user management.",
    emoji: "📦",
    tags: [
      "React.js",
      ".NET 6",
      "PostgreSQL",
      "Material UI",
      "Formik",
      "REST APIs",
    ],
    highlights: [
      "Developed Purchase Request, RFQ, Purchase Order, and User Management modules.",
      "Built reusable Material UI components and Formik-based forms.",
      "Developed REST APIs supporting procurement workflows.",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Asset Management System",
    category: "Enterprise Asset Tracking",
    description:
      "Internal enterprise platform for tracking and managing organizational assets.",
    emoji: "💻",
    tags: ["ASP.NET Core", "Dapper", "Azure", "IIS", "SQL Server"],
    highlights: [
      "Developed backend services using ASP.NET Core and Dapper.",
      "Supported Azure and IIS deployments.",
      "Maintained enterprise asset tracking workflows.",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Driver Management System",
    category: "Fleet Management",
    description:
      "Enterprise fleet management solution for driver lifecycle and access management.",
    emoji: "🚛",
    tags: [
      "React.js",
      "Redux",
      "Storybook",
      "Material UI",
      "REST APIs",
      "Jest",
    ],
    highlights: [
      "Developed driver registration and profile management modules.",
      "Built reusable UI components using Storybook.",
      "Integrated REST APIs and implemented Jest unit tests.",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
];
