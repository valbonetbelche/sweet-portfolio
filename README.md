# 🚀 Sweet Portfolio – Launch Your Developer Portfolio and CV in Minutes

This is a sleek, responsive portfolio template built with **Next.js**, **TailwindCSS**, **ShadCN**, **TypeScript**, and deployed on **Vercel**.

It is free to clone into your own repo, and deploy for free with Vercel! ❤️

### 🖥 Demo
👉 [valbonetbelche.com](https://valbonetbelche.com)

---

## ✨ Features

- Clean and modern UI
- Mobile-optimized
- Light and dark theme toggle
- Animated profile card with contact form
- Project and job showcase with badges and hover details
- Easy configuration via data files
- Fast and free deployment on Vercel

---

## ⚙️ Getting Started

### 1. Clone this repo

```bash
git clone https://github.com/valbonetbelche/sweet-portfolio.git your-name-portfolio
cd YOUR-REPO-NAME
```

---

## 🧩 Customize Your Info

Modify the files in `/src/lib/data/`:

- `profile.ts` → Your name, avatar, socials, email
- `projects.ts` → Jobs, Freelance work, Personal Projects
- `metadata.ts` → SEO metadata like title, description, OG image

### 🖼 Add Images

- Your profile picture → `/public/profile.jpg`
- Logos for projects/jobs:
  - `/public/logos/light/your-logo.png`
  - `/public/logos/dark/your-logo.png`
  - ⚠️ Both versions are required
  - ✅ File names and extensions must match and be reflected in the data files
  - ✅ You can use `.png`, `.jpg`, `.webp`, or any supported format

---

## 💻 Run Locally

```bash
npm install
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

You can also lint and format your code:

```bash
npm run lint     # Check for issues
npm run format   # Auto-format with prettier
```

---

## 🚀 Deploy Your Portfolio

### 1. Create a New GitHub Repo

- Go to [GitHub](https://github.com/new)
- Leave it empty (no README, license, or .gitignore)

### 2. Connect Your Local Repo

```bash
git remote remove origin
git remote add origin https://github.com/YOUR-USERNAME/YOUR-NEW-REPO.git
git add .
git commit -m "initial commit"
git push --force origin main
```

### 3. Set Up Contact Form with Formspree

- Go to [formspree.io](https://formspree.io)
- Create a free account
- Add a new project, then a new form
- Copy the form URL

### 4. Deploy on Vercel

- Go to [vercel.com](https://vercel.com)
- Sign in with GitHub
- Create a new project
- Import your newly pushed GitHub repo
- Set an environment variable:
  - `NEXT_PUBLIC_FORMSPREE_URL=https://formspree.io/f/your-form-id`
- Deploy 🎉

---

## 🌐 Optional: Add a Custom Domain

In Vercel dashboard → Select project → **Settings > Domains** → Add your domain.

---

## 💙 Credits

Created by [Valentin Bonetbelche](https://valbonetbelche.com)

Feel free to clone, modify, and deploy your own! If you found this useful, consider giving it a ⭐️ on GitHub.