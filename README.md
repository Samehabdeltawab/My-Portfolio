# QA Automation Engineer — Personal Portfolio

A modern, dark-themed one-page personal portfolio website built for a QA Automation Engineer. Designed with a professional visual identity, smooth animations, and clean layout — ready to be personalized.

---

## ✅ Completed Features

- **Hero Section** — Animated typing effect, status badge, stats (years/test suites/pass rate), embedded code window visual
- **About Me Section** — Bio, highlights, avatar placeholder, location/remote info cards, resume download button
- **Skills Section** — 6 categorized skill grids (Test Automation, API Testing, CI/CD, Languages, Performance, Tools) with proficiency color coding (Expert / Advanced / Intermediate)
- **Projects Section** — 6 featured project cards with metrics, tech stacks, and GitHub/live links
- **Achievements Section** — Certifications list, milestone timeline, animated stats counter bar
- **Contact Section** — Contact info cards (email, LinkedIn, GitHub, location) + working contact form with validation
- **Navigation** — Fixed navbar with scroll effect, active link highlighting, mobile hamburger menu
- **Footer** — Logo, tagline, social links, nav links, dynamic copyright year
- **Back to Top Button** — Appears on scroll, smooth return to top
- **Responsive Design** — Fully mobile-friendly across all screen sizes
- **Animations** — Scroll-triggered reveal, typing effect, counter animation, parallax glow orbs, fade-ins

---

## 📁 Project Structure

```
index.html          — Main one-page HTML with all 5 sections
css/style.css       — Complete dark-theme stylesheet with CSS variables
js/main.js          — All JavaScript: nav, typing, reveal, counters, form
README.md           — Project documentation
```

---

## 🔗 Entry Points

| Path | Description |
|------|-------------|
| `index.html` | Main portfolio page |
| `index.html#about` | About Me section |
| `index.html#skills` | Skills section |
| `index.html#projects` | Projects section |
| `index.html#achievements` | Achievements section |
| `index.html#contact` | Contact section |

---

## ✏️ How to Personalize

Replace the following placeholders throughout `index.html`:

| Placeholder | Replace With |
|-------------|-------------|
| `[Your Name]` | Your full name |
| `[your@email.com]` | Your email address |
| `[your-profile]` | Your LinkedIn username |
| `[your-username]` | Your GitHub username |
| `[your-handle]` | Your Twitter/X handle |
| `[Your Location]` | Your city, country |
| `[Your Photo]` | Replace avatar div with `<img>` tag |

---

## 🎨 Design System

- **Theme:** Dark (near-black backgrounds with layered depth)
- **Primary Accent:** `#00d4ff` (cyan/electric blue)
- **Secondary Accent:** `#7c3aed` (purple)
- **Success:** `#10b981` (green)
- **Fonts:** Inter (body) + JetBrains Mono (code/mono)
- **Icons:** Font Awesome 6.5
- **CSS Variables:** All colors, spacing, transitions defined in `:root`

---

## 🚧 Features Not Yet Implemented

- Real form backend (currently simulates submission — connect to Formspree, EmailJS, or similar)
- Actual resume PDF download link
- Real project GitHub/live URLs
- Light mode toggle
- Blog / Articles section
- Testimonials section

---

## 🚀 Recommended Next Steps

1. **Personalize content** — Replace all `[placeholder]` values with real information
2. **Add your photo** — Replace the avatar placeholder with your actual photo
3. **Connect the contact form** — Integrate with Formspree (`https://formspree.io`) or EmailJS for real email delivery
4. **Add resume PDF** — Upload your CV and update the download button `href`
5. **Update project links** — Replace `#` placeholders in project cards with real GitHub/demo URLs
6. **Deploy** — Go to the **Publish tab** to make the portfolio live with one click

---

## 💡 Technologies Used

- **HTML5** — Semantic structure, accessibility attributes
- **CSS3** — Custom properties, Grid, Flexbox, animations, transitions
- **Vanilla JavaScript** — No frameworks, lightweight and fast
- **Google Fonts** — Inter + JetBrains Mono
- **Font Awesome 6.5** — Icon library via CDN

---

*Built with quality engineering principles — clean, maintainable, and well-tested.*
