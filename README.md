# Portfolio — Gabriela Divišová

## 🎯 Cíl projektu

Vytvořit identickou kopii portfolia **gabrieladivisova.com** — statický web původně postavený na Macaly.com (Next.js). Cílem je **ušetřit ~670 Kč/měsíc** za Macaly hosting a mít web hostovaný u levnějšího (ideálně bezplatného) poskytovatele (Cloudflare Pages, Web4U, Vercel).

Doména `gabrieladivisova.com` zůstává vlastní. Web je plně lokalizovaný: CS (čeština) + EN (angličtina).

---

## 📁 Struktura webu (8 stránek)

```
portfolio-gabriela/
├── index.html                  ← Homepage (CS)
├── assets/
│   ├── css/style.css           ← Design system
│   └── images/case-studies/    ← 14 obrázků (webp)
├── en/
│   └── index.html              ← Homepage (EN)
├── case/
│   ├── edtech-saas/index.html  ← Case Study 01 (CS)
│   ├── vr-ar/index.html        ← Case Study 02 (CS)
│   └── kultura-v-kurzu/index.html  ← Case Study 03 (CS)
└── en/case/
    ├── edtech-saas/index.html  ← Case Study 01 (EN)
    ├── vr-ar/index.html        ← Case Study 02 (EN)
    └── kultura-v-kurzu/index.html  ← Case Study 03 (EN)
```

---

## 🧩 Komponenty

### 1. Navigace
- Fixní lišta nahoře, blur pozadí (backdrop-filter)
- Logo: **GD** (Montserrat 800, 1.25rem)
- Odkazy: Projekty, Kontakt, přepínač EN/CS
- Na mobilu skryté desktop-only odkazy

### 2. Hero sekce
- Fullscreen (100vh) s dot-grid pozadím
- Jméno: **Gabriela** (800) + **Divišová** (300)
- Subtitle: role ve dvou řádcích
- Popis: 2 odstavce (max 28rem)
- CTA tlačítko: "Prohlédnout projekty"

### 3. Case Studies (seznam projektů)
- 3 karty: EdTech SaaS, VR→AR, Kultura v kurzu
- Každá karta má:
  - Číslo (01, 02, 03) — velké, průhledné
  - Barevnou tečku a accent bar (levý okraj)
  - Název + popisek
  - Šipku v kroužku (animace při hoveru)
- **Barvy case studií:** cyan (#0097b2), amber (#e69902), coral (#ef5b5b)

### 4. Stránka case study
- Záhlaví: zpět na projekty, číslo (dekorativní obří), název, meta info
- Citát (kurzíva, border-left)
- Sekce "Co byl problém" / "Jak jsem postupovala"
- Sample grid: 2-sloupcová mřížka obrázků
- Reflection box: šedé pozadí (#f2f2f4), kurzíva
- Paginace: předchozí / další projekt (tmavé pozadí)

### 5. Kontakt / Footer sekce
- Tmavé pozadí (#17191c)
- Nadpis, text, "Co přináším" seznam
- Tlačítka: email (outline) + LinkedIn (light)
- Footer: copyright, "Built with care · Portfolio"

### 6. Dot Grid pozadí
- `radial-gradient(circle, #d4d4d4 1px, transparent 1px)`
- Velikost: 24px 24px

---

## 🎨 Design System

### Barvy

| Role | CSS proměnná | Hodnota |
|------|-------------|---------|
| Pozadí | `--bg` | #fafafa |
| Text | `--fg` | #17191c |
| Muted text | `--muted` | #6e737c |
| Body text | `--body` | #555555 |
| Soft text | `--soft` | #888888 |
| Separátor | `--separator` | #cccccc |
| Card pozadí | `--card-bg` | #ffffff |
| Border | `--border` | #e5e7eb |
| Tlačítko bg | `--btn-bg` | #111111 |
| **Kontakt bg** | `--contact-bg` | #17191c |
| **Kontakt text** | `--contact-text` | #fafafa |
| **CS Cyan** | `--cs-cyan` | #0097b2 |
| **CS Amber** | `--cs-amber` | #e69902 |
| **CS Coral** | `--cs-coral` | #ef5b5b |

### Fonty

- **Display (nadpisy):** `Montserrat` (300, 600, 700, 800) — Google Fonts
- **Body (text):** `DM Sans` (400, 500, 700) — Google Fonts

Fallback: `system-ui, sans-serif`

### Typografie

| Element | Font | Size | Weight |
|---------|------|------|--------|
| H1 — first name | Montserrat | clamp(2.8rem, 5.5vw, 4.5rem) | 800 |
| H1 — last name | Montserrat | clamp(3.2rem, 6.5vw, 5.2rem) | 300 |
| Case study title | Montserrat | clamp(2rem, 4vw, 3.5rem) | 800 |
| Kontakt title | Montserrat | clamp(3rem, 6vw, 5rem) | 800 |
| Section label | Montserrat | 0.75rem | 600 (UPPERCASE, 0.2em) |
| Body text | DM Sans | 1rem | 400 |
| Card title | Montserrat | 1rem | 700 |
| Small text | DM Sans | 0.875rem | 400 |
| Footer text | DM Sans | 0.75rem | 400 |

### Layout

- **Max width:** 72rem (1152px)
- **Nav height:** 61px
- **Grid:** CSS Grid, 1→2 sloupce na desktopu (1024px breakpoint)
- **Breakpointy:** 640px, 768px, 1024px
- **Animace:** fade-up (translateY 20px→0, 0.6s ease-out)

### Tlačítka

- **Primary:** pill (border-radius 9999px), #111111 bg, bílý text, 14px 32px padding
- **Outline (light):** pill, 1px border white 25% opacity, transparent bg
- **Light:** pill, #fafafa bg, #17191c text

---

## 🖼 Obrázky

- 14 obrázků ve formátu **webp**
- Složka: `assets/images/case-studies/`
- Všechny stažené z Macaly CDN

---

## 🌐 Lokalizace

- **CS:** `/` — čeština
- **EN:** `/en/` — angličtina
- Přepínač v navigaci (EN / CS)
- Stránky case studies zrcadlené pod `/en/case/`

---

## ⚡ Nasazení

Statický web — žádný backend, žádná databáze. Stačí nahrát složku na:

- **Cloudflare Pages** (doporučeno — 0 Kč/měs, CDN, HTTPS)
- **Web4U VIZITKA** (0 Kč k doméně)
- **Vercel** (0 Kč/měs)
- Případně: propojit s GitHub repozitářem pro automatický deploy