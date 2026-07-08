# 🎨 Sirisha Boya Portfolio

A modern interactive portfolio built with React.js, TypeScript, and Vite featuring a scrapbook-inspired UI. The portfolio showcases enterprise projects, technical expertise, and includes a real-time guestbook powered by Supabase along with a working contact form using Resend.

## 🔗 Live Demo

https://portfolio-next-link.vercel.app/

---

## ✨ Features

- 🎨 Hand-drawn scrapbook UI
- 📱 Fully responsive design
- ⚡ Fast Vite + React application
- 📂 Interactive project showcase
- 💡 Skill doodles with detailed descriptions
- 📧 Working contact form powered by Resend
- 📝 Real-time Guestbook using Supabase
- 📄 Resume download
- 🚀 Hosted on Vercel
- ✨ Smooth animations using Motion

---

## 🛠 Tech Stack

### Frontend
- React.js
- TypeScript
- Vite
- Tailwind CSS
- Motion (Framer Motion)

### Backend & Services
- Vercel Serverless Functions
- Resend Email API
- Supabase
- PostgreSQL

### Deployment
- Vercel

---

## 📂 Project Structure

```text
.
├── api/
│   └── contact.ts
├── public/
│   └── resume/
├── src/
│   ├── assets/
│   ├── components/
│   ├── lib/
│   │   ├── resend.ts
│   │   └── supabase.ts
│   ├── services/
│   ├── data.ts
│   ├── types.ts
│   └── App.tsx
├── package.json
├── vite.config.ts
└── README.md
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/sirisha-boya/portfolio.git
```

Install dependencies

```bash
npm install
```

Run locally

```bash
npm run dev
```

For local API development

```bash
vercel dev
```

---

## 🔐 Environment Variables

Create a `.env` file in the project root.

```env
RESEND_API_KEY=your_resend_api_key

VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

## 📧 Contact Form

The contact form uses:

- Vercel Serverless Functions
- Resend Email API

When visitors submit the form:

```
Portfolio
      ↓
Vercel Function
      ↓
Resend
      ↓
Your Email
```

---

## 📝 Guestbook

The Guestbook is powered by Supabase.

Features:

- Real-time note storage
- Public read access
- Public note creation
- Row Level Security enabled

---

## 🚀 Deployment

Deploy using Vercel.

```bash
vercel
```

Add these environment variables inside Vercel:

- RESEND_API_KEY
- VITE_SUPABASE_URL
- VITE_SUPABASE_ANON_KEY

---

## 👩‍💻 About Me

I'm a React.js & .NET Full Stack Developer with 4+ years of experience building enterprise applications in:

- Banking
- Healthcare
- Procurement
- HRMS
- Asset Management

Experienced in:

- React.js
- Redux
- ASP.NET Core
- C#
- Microservices
- Azure
- SQL Server
- PostgreSQL
- Docker
- AI-assisted development

---

## 📫 Connect With Me

**Email**

sirishab9196@gmail.com

**LinkedIn**

https://linkedin.com/in/sirisha-b-334505257


---

⭐ If you like this project, feel free to star the repository.
