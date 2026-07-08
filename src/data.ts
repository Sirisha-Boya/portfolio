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
      "Built enterprise-scale React applications using Hooks, reusable components, routing, state management, API integration, and responsive UI development.",
    icon: "code",
  },
  {
    name: "Redux",
    level: "4+ Years",
    description:
      "Implemented scalable state management using Redux to manage complex application state, asynchronous actions, and shared data across enterprise applications.",
    icon: "account_tree",
  },
  {
    name: "Material UI",
    level: "4+ Years",
    description:
      "Developed responsive enterprise user interfaces using Material UI components, custom themes, DataGrid, dialogs, forms, and reusable design systems.",
    icon: "palette",
  },
  {
    name: "JavaScript",
    level: "4+ Years",
    description:
      "Built interactive web applications using modern JavaScript (ES6+), asynchronous programming, DOM manipulation, and REST API integration.",
    icon: "javascript",
  },
  {
    name: "HTML5",
    level: "4+ Years",
    description:
      "Developed semantic, accessible, and SEO-friendly web pages following modern HTML5 standards and best practices.",
    icon: "html",
  },
  {
    name: "CSS3",
    level: "4+ Years",
    description:
      "Designed responsive layouts using Flexbox, CSS Grid, animations, transitions, and mobile-first styling techniques.",
    icon: "css",
  },
  {
    name: "Formik",
    level: "Advanced",
    description:
      "Built complex enterprise forms with Formik, handling validation, dynamic fields, reusable form components, and improved user experience.",
    icon: "fact_check",
  },
  {
    name: "Responsive Design",
    level: "Advanced",
    description:
      "Created responsive, mobile-friendly user interfaces that provide a consistent experience across desktop, tablet, and mobile devices.",
    icon: "devices",
  },
  {
    name: "REST API Integration",
    level: "4+ Years",
    description:
      "Integrated frontend applications with secure REST APIs, handling authentication, pagination, validation, file uploads, and error management.",
    icon: "sync_alt",
  },
  {
    name: "Vite",
    level: "Intermediate",
    description:
      "Built modern React applications using Vite for fast development, optimized production builds, and improved developer experience.",
    icon: "bolt",
  },
  {
    name: "ASP.NET Core",
    level: "4+ Years",
    description:
      "Developed enterprise-grade REST APIs, middleware, dependency injection, authentication, authorization, and backend services for banking, healthcare, procurement, and HR applications.",
    icon: "layers",
  },
  {
    name: ".NET 6 / .NET 8",
    level: "Advanced",
    description:
      "Built scalable Web APIs and modernized enterprise applications using .NET 6 and .NET 8 with a focus on performance, maintainability, and cloud readiness.",
    icon: "bolt",
  },
  {
    name: "C#",
    level: "4+ Years",
    description:
      "Developed robust backend solutions using object-oriented programming, LINQ, asynchronous programming, exception handling, and business logic implementation.",
    icon: "terminal",
  },
  {
    name: "REST APIs",
    level: "4+ Years",
    description:
      "Designed, developed, documented, and consumed secure RESTful APIs for enterprise systems with validation, pagination, versioning, and third-party integrations.",
    icon: "api",
  },
  {
    name: "Microservices",
    level: "Advanced",
    description:
      "Designed and developed loosely coupled microservices using ASP.NET Core, enabling scalable, maintainable, and independently deployable enterprise applications.",
    icon: "hub",
  },
  {
    name: "Ocelot API Gateway",
    level: "Intermediate",
    description:
      "Implemented Ocelot API Gateway for routing, service aggregation, authentication, authorization, and centralized request handling in microservice architectures.",
    icon: "route",
  },
  {
    name: "Dapper",
    level: "Intermediate",
    description:
      "Used Dapper for lightweight, high-performance data access, stored procedure execution, and efficient database interactions in ASP.NET Core applications.",
    icon: "storage",
  },
  {
    name: "RSA Encryption",
    level: "Advanced",
    description:
      "Implemented RSA encryption to securely exchange sensitive banking data, protecting customer information and ensuring secure communication between systems.",
    icon: "encrypted",
  },
  {
    name: "JWT Authentication",
    level: "Advanced",
    description:
      "Implemented JWT-based authentication to secure REST APIs, validate user sessions, and protect enterprise applications from unauthorized access.",
    icon: "verified_user",
  },
  {
    name: "Authentication",
    level: "Advanced",
    description:
      "Designed secure authentication workflows including user login, registration, password management, and identity verification across enterprise applications.",
    icon: "login",
  },
  {
    name: "Authorization",
    level: "Advanced",
    description:
      "Implemented authorization mechanisms to control feature and resource access based on user permissions and business rules.",
    icon: "admin_panel_settings",
  },
  {
    name: "Role-Based Access Control (RBAC)",
    level: "Advanced",
    description:
      "Designed and implemented role-based access control for Admin, Customer, Dealer, and User roles, ensuring secure access to application resources.",
    icon: "shield_person",
  },
  {
    name: "API Security",
    level: "Advanced",
    description:
      "Secured REST APIs using authentication, authorization, encryption, request validation, and best practices to protect enterprise applications.",
    icon: "shield_lock",
  },
  {
    name: "Secure REST APIs",
    level: "Advanced",
    description:
      "Developed secure REST APIs with JWT authentication, encrypted communication, validation, exception handling, and role-based access control.",
    icon: "lock",
  },
  {
    name: "KYC & User Onboarding",
    level: "Advanced",
    description:
      "Developed secure customer onboarding and KYC workflows, ensuring proper identity verification and compliance for digital banking applications.",
    icon: "badge",
  },
  {
    name: "External API Integration",
    level: "Advanced",
    description:
      "Integrated secure third-party APIs for banking, authentication, email services, and enterprise workflows while ensuring secure communication and reliable data exchange.",
    icon: "link",
  },
  {
    name: "SQL Server",
    level: "4+ Years",
    description:
      "Designed and managed SQL Server databases, developed stored procedures, optimized queries, created indexes, and maintained enterprise data for high-performance applications.",
    icon: "database",
  },
  {
    name: "PostgreSQL",
    level: "Intermediate",
    description:
      "Worked with PostgreSQL for enterprise and cloud applications, designing schemas, writing optimized queries, and integrating with ASP.NET Core applications.",
    icon: "database",
  },
  {
    name: "Azure SQL",
    level: "Intermediate",
    description:
      "Managed Azure SQL databases for cloud-hosted applications, including deployment, connectivity, query optimization, and secure database access.",
    icon: "cloud",
  },
  {
    name: "Database Design",
    level: "Advanced",
    description:
      "Designed normalized relational database schemas, established entity relationships, and structured databases for scalable enterprise applications.",
    icon: "schema",
  },
  {
    name: "Query Optimization",
    level: "Advanced",
    description:
      "Optimized SQL queries using indexing, execution plan analysis, joins, and efficient query design to improve application performance.",
    icon: "speed",
  },
  {
    name: "Stored Procedures",
    level: "Advanced",
    description:
      "Developed and optimized stored procedures for complex business operations, reporting, and efficient database transactions.",
    icon: "database",
  },
  {
    name: "Microsoft Azure",
    level: "Advanced",
    description:
      "Deployed and managed enterprise applications on Microsoft Azure using App Services, Azure SQL, Storage, API Gateway, and container-based cloud infrastructure.",
    icon: "cloud",
  },
  {
    name: "Azure App Service",
    level: "Advanced",
    description:
      "Hosted and maintained production-grade ASP.NET Core and React applications using Azure App Service with environment configuration and deployment management.",
    icon: "cloud_upload",
  },
  {
    name: "Azure Storage",
    level: "Intermediate",
    description:
      "Integrated Azure Storage services for secure file storage, document management, and application data handling.",
    icon: "folder",
  },
  {
    name: "Azure API Gateway",
    level: "Intermediate",
    description:
      "Configured Azure API Gateway to securely expose, route, and manage backend APIs across enterprise applications.",
    icon: "device_hub",
  },
  {
    name: "Azure Container Registry",
    level: "Intermediate",
    description:
      "Managed Docker container images using Azure Container Registry and integrated them into deployment workflows.",
    icon: "inventory_2",
  },
  {
    name: "Azure Container Instances",
    level: "Intermediate",
    description:
      "Deployed containerized applications using Azure Container Instances for lightweight, cloud-native hosting.",
    icon: "deployed_code",
  },
  {
    name: "Docker",
    level: "Intermediate",
    description:
      "Created Docker images, managed containers, and containerized ASP.NET Core applications and microservices for consistent development and deployment.",
    icon: "inventory",
  },
  {
    name: "Containerization",
    level: "Intermediate",
    description:
      "Packaged enterprise applications into isolated containers, ensuring portability, scalability, and consistent execution across environments.",
    icon: "widgets",
  },
  {
    name: "GitHub Actions",
    level: "Intermediate",
    description:
      "Implemented CI/CD workflows using GitHub Actions to automate builds, testing, and deployment pipelines.",
    icon: "rocket_launch",
  },
  {
    name: "Vercel",
    level: "Intermediate",
    description:
      "Deployed and maintained React applications on Vercel, configured environment variables, serverless functions, and production releases.",
    icon: "public",
  },
  {
    name: "Resend",
    level: "Intermediate",
    description:
      "Integrated Resend Email API with React and Vercel Serverless Functions to implement secure contact form workflows and transactional email delivery.",
    icon: "mail",
  },
  {
    name: "ChatGPT",
    level: "Daily User",
    description:
      "Leverage ChatGPT daily for solution design, debugging, code reviews, architecture discussions, documentation, interview preparation, and accelerating software development.",
    icon: "psychology",
  },
  {
    name: "Claude",
    level: "Daily User",
    description:
      "Use Claude for system design, large-scale code generation, refactoring, technical documentation, and brainstorming complex software solutions.",
    icon: "auto_awesome",
  },
  {
    name: "GitHub Copilot",
    level: "Daily User",
    description:
      "Accelerate development using GitHub Copilot for intelligent code completion, boilerplate generation, refactoring, unit tests, and productivity improvements.",
    icon: "smart_toy",
  },
  {
    name: "NotebookLM",
    level: "Daily User",
    description:
      "Use NotebookLM to organize technical knowledge, summarize documentation, analyze project requirements, and quickly understand large codebases.",
    icon: "menu_book",
  },
  {
    name: "JuliusAI",
    level: "Intermediate",
    description:
      "Utilize Julius AI for data analysis, visualization, and extracting meaningful insights from structured datasets to support technical decision-making.",
    icon: "analytics",
  },
  {
    name: "Google Stitch",
    level: "Intermediate",
    description:
      "Use Google Stitch to rapidly generate UI concepts, design ideas, and frontend layouts that accelerate application prototyping.",
    icon: "design_services",
  },
  {
    name: "Google AI Studio",
    level: "Intermediate",
    description:
      "Experiment with Gemini models using Google AI Studio for prompt engineering, AI integrations, and rapid application prototyping.",
    icon: "neurology",
  },
  {
    name: "Comet",
    level: "Intermediate",
    description:
      "Use Comet AI to research technical topics, explore implementation approaches, and improve development productivity through AI-assisted workflows.",
    icon: "travel_explore",
  },
  {
    name: "AI-Assisted Development",
    level: "Daily User",
    description:
      "Integrate multiple AI tools into the software development lifecycle to accelerate coding, debugging, testing, documentation, UI design, and solution architecture while maintaining engineering best practices.",
    icon: "psychology",
  },
];

export const PRIMARY_SKILLS: SkillDetail[] = [
  {
    name: "React.js",
    level: "4+ Years",
    description:
      "Built enterprise-scale React applications using Hooks, reusable components, routing, state management, API integration, and responsive UI development.",
    icon: "code",
  },
  {
    name: ".NET 6 / .NET 8",
    level: "Advanced",
    description:
      "Built scalable Web APIs and modernized enterprise applications using .NET 6 and .NET 8 with a focus on performance, maintainability, and cloud readiness.",
    icon: "bolt",
  },
  {
    name: "SQL Server",
    level: "4+ Years",
    description:
      "Designed and managed SQL Server databases, developed stored procedures, optimized queries, created indexes, and maintained enterprise data for high-performance applications.",
    icon: "database",
  },
  {
    name: "Microsoft Azure",
    level: "Advanced",
    description:
      "Deployed and managed enterprise applications on Microsoft Azure using App Services, Azure SQL, Storage, API Gateway, and container-based cloud infrastructure.",
    icon: "cloud",
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
