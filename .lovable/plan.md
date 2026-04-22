
# AQUA BRABUS KG — Website Plan

A professional, multi-page marketing site for a pool/hammam/sauna/fountain construction company based in Kyrgyzstan. Bilingual (Russian + Kyrgyz) with a language switcher.

## Brand & Design System
- **Colors**: Navy `#1A2C6B`, Cyan `#00BCD4`, Teal `#0097A7`, Gold `#FFD600`, Light Gray `#F4F7FA`, White
- **Typography**: Bold uppercase navy headings, clean sans-serif body
- **Logo**: Use uploaded `Aqua_logo.png` (copied to `src/assets/`), white inverted version in footer
- **Decorative**: SVG wave dividers between sections, subtle ripple animation in hero, fade-in on scroll, cyan hover glow on CTAs

## Languages
- **RU (default)** + **KG (Kyrgyz)** toggle in header
- Translations stored in a small i18n dictionary (`src/lib/i18n.ts`), language persisted in localStorage
- All UI text, nav, sections, forms translated

## Route Structure (separate routes for SEO)
- `/` — Home (Hero, Trust Bar, Services preview, Why Us, How We Work, Projects preview, Testimonials, CTA form)
- `/services` — Full services detail (6 cards expanded)
- `/projects` — Full gallery with category filter (Все / Бассейны / Хамам / Сауна / Фонтаны)
- `/about` — About company, experience, team values
- `/contact` — Contact form + phone/WhatsApp/Instagram/address

Each route has its own `head()` with title, description, og:title, og:description, og:image (using uploaded pool photos).

## Shared Layout
- **Header** (sticky, white, shadow on scroll): Logo left, nav center, phone pill `+996 707 148 555` (tel + WhatsApp link) + RU/KG switcher right, hamburger on mobile
- **Footer** (navy): Logo + description + Instagram `@aqua_brabus_kg`, nav column, contacts column, wave SVG top decoration, copyright

## Home Page Sections
1. **Hero** — Full-width pool background (uploaded image), navy→cyan gradient overlay, H1 + sub + 2 CTAs (Получить консультацию / Смотреть проекты), animated wave divider
2. **Trust Bar** — Navy strip: 5+ лет опыта, 100+ объектов, по всему Кыргызстану, гарантия
3. **Services** — 3×2 grid, 6 cards with themed SVG icons, cyan top border, hover lift
4. **Why Us** — Light gray bg, 4 feature blocks with cyan icons
5. **How We Work** — Navy bg, 4-step horizontal timeline with cyan numbered circles + dashed connector
6. **Projects Preview** — 3-col grid using uploaded photos, hover overlays, "Смотреть все" → `/projects`
7. **Testimonials** — 3 cards, gold stars, cyan quote marks
8. **CTA Form Section** — Navy→cyan diagonal gradient, contact form (Имя, Телефон, Тип объекта dropdown, Сообщение) with Zod validation, submits to a server function that logs the lead (no DB needed unless requested)

## Projects Page
- Use the 9 uploaded photos categorized: pools (outdoor/indoor/private), hammam (2), sauna (1), small pool builds
- Tab filter, masonry/3-col grid, hover overlay with project name

## Assets
- Copy uploaded logo + 9 pool/hammam/sauna images to `src/assets/`
- Use them as both gallery content AND `og:image` on relevant routes

## Tech
- TanStack Start file-based routes
- Tailwind v4 with custom theme tokens for brand colors
- Framer Motion for fade-in/scroll animations
- React Hook Form + Zod for the lead form
- Lucide icons + custom inline SVG waves
- Fully responsive, mobile hamburger menu, touch targets ≥ 44px

## Form Handling
Lead form posts to a TanStack server function that validates with Zod and (for now) logs the submission + returns success. Easy to wire to email/DB later.
