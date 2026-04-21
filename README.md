# Tharun N V — Developer Portfolio

> **AI/ML Engineer · Backend Engineer · Full Stack Developer**  
> B.Tech Computer & Communication Engineering — Amrita Vishwa Vidyapeetham (CGPA: 8.87)  
> Open to internships and entry-level roles

[![Live Site](https://img.shields.io/badge/Live-Portfolio-7c3aed?style=for-the-badge&logo=vercel)](https://tharunnv.dev)
[![GitHub](https://img.shields.io/badge/GitHub-TharunvenkateshN-181717?style=for-the-badge&logo=github)](https://github.com/TharunvenkateshN)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-tharun--n--v-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/tharun-n-v)

---

## What's Inside

A production-grade recruiter-focused portfolio built for **maximum shortlisting rate** — designed for AI/ML, Backend, and Full Stack roles at tech startups and product-based companies.

**Design goals:**
- Recruiter can scan the full profile in **30–60 seconds**
- Every project shows **Problem → Solution → Impact** (not just tech)
- Quantified results front-and-center: `8.5× speedup`, `<300ms latency`, `20% efficiency gain`

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Email Backend | Nodemailer + Gmail SMTP |
| Deployment | Vercel |

---

## Features

- **Animated Terminal Hero** — live boot sequence showing real project metrics
- **Interactive Particle Network** — WebCanvas neural network that responds to mouse
- **Custom Cursor** — spring-physics cursor with ambient glow on hover
- **Typewriter Role Switcher** — cycles through AI/ML Engineer, Backend Engineer, etc.
- **Working Contact Form** — sends email directly to Gmail via Nodemailer API route
- **Resume Download** — direct PDF download button
- **Real Project Cards** — SLA-Guard AI, Lexinel, RyzenShield, PolicyGuard AI with GitHub links
- **Skills with Animated Progress Bars** — ML, Backend, Frontend, Languages, Tools
- **Experience Timeline** — ShadowFox internship + Intel IoT Club Product Lead
- **Certifications** — IBM (8 certs), IETE PyTorch, Google Cloud GenAI/LLM

---

## Running Locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Contact Form Setup (Gmail)

The contact form sends real emails via Gmail SMTP. To activate:

1. Create a `.env.local` file in the root:

```env
GMAIL_USER=tharunnv98@gmail.com
GMAIL_PASS=your_16_char_app_password
```

2. Get your Gmail App Password:  
   Google Account → Security → 2-Step Verification → **App Passwords**  
   Generate one for "Mail" — paste the 16-char code as `GMAIL_PASS`

> `.env.local` is gitignored. Never commit real credentials.

---

## Resume

Place your resume PDF at `public/resume.pdf` — the "Resume" button in the hero will download it automatically.

---

## Deploying to Vercel

1. Import `TharunvenkateshN/Portfolio` at [vercel.com/new](https://vercel.com/new)
2. Add environment variables: `GMAIL_USER` and `GMAIL_PASS`
3. Deploy — Vercel auto-detects Next.js, no config needed

---

## Project Structure

```
app/
├── api/
│   └── contact/route.ts      # Gmail SMTP email handler
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx               # Terminal animation + particle network
│   ├── About.tsx
│   ├── Projects.tsx           # Problem→Solution→Impact cards
│   ├── Skills.tsx             # Animated progress bars
│   ├── Experience.tsx         # ShadowFox + Intel IoT Club
│   ├── Achievements.tsx       # Hackfest + IBM + Google certs
│   ├── Contact.tsx            # Working form → Gmail
│   ├── Footer.tsx
│   ├── ParticleNetwork.tsx    # WebCanvas neural network bg
│   ├── CustomCursor.tsx       # Spring-physics custom cursor
│   └── Icons.tsx              # GitHub + LinkedIn SVG icons
├── globals.css                # Design tokens + Tailwind v4
├── layout.tsx
└── page.tsx
```

---

*Built to get shortlisted — not just to look good.*
