# Valentine's Day "Will You Be My Valentine?" — Detailed Build Spec

A single-page, multi-section romantic web app with witty interactions, personalization, and a clear narrative flow. Use this doc as the full prompt/spec for implementation.

---

## 1. Tech Stack

| Layer | Choice | Why |
|-------|--------|-----|
| **Structure** | HTML5 (semantic: `<header>`, `<main>`, `<section>`, `<footer>`) | Clean, accessible, good for SEO if you ever share the link. |
| **Styling** | CSS3 (custom properties for theme, Flexbox/Grid, keyframe animations) | No framework needed; keeps it light and fully controllable. |
| **Behavior** | Vanilla JavaScript (ES6+) — no React/Vue unless you prefer | Single page, no build step required; easy to host on GitHub Pages/Netlify. |
| **Optional** | [GSAP](https://greensock.com/gsap/) or CSS only for scroll/entrance animations | Nicer transitions between sections; not required. |
| **Hosting** | GitHub Pages or Netlify (static export) | Free, HTTPS, shareable link. |
| **Assets** | Images: WebP + JPG fallback, max ~1200px width; optional subtle background music (MP3) | Fast load, works on mobile. |

**Deliverable:** One `index.html`, one `styles.css`, one `app.js`, plus an `assets/` folder (images, optional audio). No backend; everything client-side.

---

## 2. Theme & Colors

- **Primary palette (romantic, soft):**
  - **Background:** `#FFF5F5` or `#FFE4EC` (very light pink).
  - **Cards / content panels:** `#FFFFFF` with `box-shadow: 0 4px 20px rgba(255, 105, 135, 0.15)`.
  - **Primary CTA (Yes button):** `#E91E63` or `#E63946` (bold pink/red); hover: slightly darker e.g. `#C2185B`.
  - **Text primary:** `#2D2D2D` or `#1A1A1A`.
  - **Text secondary / captions:** `#6B6B6B`.
  - **Accent (highlights, hearts, links):** `#FF4081` or `#F50057`.
- **Typography:**
  - Headings: one elegant font (e.g. **Playfair Display**, **Cormorant Garamond**, or **Dancing Script** from Google Fonts).
  - Body: clean sans (e.g. **Nunito**, **Poppins**, or **Lato**).
- **Witty touches:**
  - Subtle floating heart or sparkle CSS animations in the background (low opacity).
  - Soft gradient overlays on hero/photo sections (e.g. `linear-gradient(180deg, transparent 0%, rgba(255,228,236,0.6) 100%)`).

Define these as CSS custom properties at `:root` so you can tweak later:

```css
:root {
  --bg-pink: #FFF5F5;
  --card-bg: #FFFFFF;
  --cta-red: #E91E63;
  --text-primary: #2D2D2D;
  --text-secondary: #6B6B6B;
  --accent: #FF4081;
  --font-display: 'Playfair Display', serif;
  --font-body: 'Nunito', sans-serif;
}
```

---

## 3. Site Structure: Single Page, Multiple “Pages” (Sections)

The site is **one HTML file** with multiple full-viewport (or near full-viewport) **sections**. Navigation between them can be:
- **Option A:** Scroll (smooth scroll, sections stacked vertically).
- **Option B:** Step-by-step (Next/Back buttons, sections shown one at a time like slides).

**Recommended:** Step-by-step (buttons) for a more “story” feel and so the user doesn’t accidentally scroll past the big question.

---

## 4. Page-by-Page Breakdown (Detailed)

---

### **PAGE 0: Loader / Teaser (Optional)**

- **Purpose:** Build anticipation; hide the rest until “ready.”
- **Content:**
  - Short line: “Something special for you…” or “Loading a little love…”
  - Minimal animation (e.g. heart pulse or progress bar).
- **Behavior:** After 1.5–2 seconds (or when assets loaded), fade out and reveal **Page 1**.
- **Layout:** Centered, full viewport, light pink background.

---

### **PAGE 1: Landing / Hero**

- **Purpose:** First impression; personalized and romantic.
- **Content:**
  - **Headline:** “[Her Name], you’re one in a million.” (or similar — one short, personal line.)
  - **Subtext:** “Swipe or click to begin.” or “Tap to continue.”
- **Visual:** Optional soft gradient or blurred photo background; no buttons yet except “Continue” / down arrow.
- **Behavior:** One clear CTA (e.g. “Open” or “Begin”) or auto-advance after 2s. Click/tap → go to **Page 2**.
- **Witty note:** Keep copy short so it feels like a love note, not a paragraph.

---

### **PAGE 2: “Our Story” (Photo + Timeline or Captions)**

- **Purpose:** Nostalgia; show your journey with photos and short text.
- **Content:**
  - Section title: “Our story” or “Us.”
  - **2–4 photos** in a row or grid (first date, trip, silly moment, recent).
  - Under each (or in a small timeline): short caption + optional date (e.g. “First coffee together – Jan 2024”).
- **Layout:** Card(s) on pink background; photos with rounded corners and light shadow.
- **Behavior:** “Next” button at bottom → **Page 3**. Optional: subtle fade-in of photos on load.
- **Witty idea:** One caption can be an inside joke only she’ll get.

---

### **PAGE 3: Reasons / “Why You”**

- **Purpose:** Make her smile; show you pay attention.
- **Content:**
  - Title: “A few reasons I want you as my Valentine” (or “Why you?”).
  - **3–5 bullet points or cards**, e.g.:
    - “You laugh at my dumb jokes.”
    - “You’re the first person I want to tell everything to.”
    - “You make ordinary days feel special.”
  - Keep tone light and genuine; one can be playful.
- **Layout:** List or card stack; optional small icons (heart, star) per reason.
- **Behavior:** “Next” → **Page 4** (the main ask).

---

### **PAGE 4: The Big Ask — “Will You Be My Valentine?”**

- **Purpose:** The climax; clear question + witty “No” + obvious “Yes.”
- **Content:**
  - **Personalization block (top of card):**
    - Small Instagram-style avatar or icon (optional).
    - Line 1: “@[HerInstagramHandle]” (or nickname).
    - Line 2: Witty tagline, e.g. “WHERE IS MY VALENTINE” or “Future Valentine.”
  - **Main question (large, centered):** “[Her Name], will you be my Valentine?”
  - **Buttons:**
    - **Yes:** Big, prominent, same red/pink as theme (`--cta-red`). Fixed position. Copy: “Yes!”
    - **No:** Small text or small button. **Witty behavior:** When cursor (or finger) gets close (e.g. within 80–120px), move the “No” to a random new position on the screen so it’s hard to tap. Optionally after 3–4 “escapes,” have “No” change to “Maybe… Yes?” or “Fine, Yes” and stop moving.
- **Layout:** One white card, centered; plenty of padding; mobile-friendly (touch targets big for “Yes”).
- **Behavior:**
  - **Click Yes:** Trigger confetti or heart burst (CSS/JS or small library), short celebration, then after 1.5s navigate to **Page 5**.
  - **Click No (if she ever catches it):** Optional easter egg: show a fake “Error 404: ‘No’ not found. Try Yes?” or “This option is under maintenance.” Then highlight “Yes” again. Still allow going to Page 5 after a second click on “Yes” if you want.

---

### **PAGE 5: Thank You / “She Said Yes”**

- **Purpose:** Closure and warmth; feel like a real “yes” moment.
- **Content:**
  - Big heading: “Thank you!” or “Best yes ever!”
  - Short line: “Can’t wait to be your Valentine.” or “Feb 14 is ours.”
  - **1–2 photos** of you two (or a future “date idea” image).
  - Optional: “Open when you said yes” — expandable section with a short letter or a single sentence from you.
- **Layout:** Same card style; photos below text; optional subtle heart animation in background.
- **Behavior:** No more steps; optional “Share” or “Send this to me” (e.g. copy link or share to WhatsApp) so she can save it.

---

### **PAGE 6 (Optional): “Open When You Said Yes”**

- **Purpose:** Extra personal touch; feels like a real note.
- **Content:**
  - Can be part of Page 5: a button “Open your letter” that expands to show 2–3 sentences (or a voice note player if you add audio).
  - Letter tone: sweet, short, maybe one inside joke or promise for Valentine’s Day.
- **Behavior:** Expand/collapse on click; no navigation.

---

## 5. Witty Interaction Summary (Implementation Hints)

| Element | Witty behavior |
|--------|-----------------|
| **No button** | On `mousemove` / `touchmove`, compute distance from “No” to cursor. If &lt; threshold, set new random `left`/`top` within safe bounds (padding from edges). Use `requestAnimationFrame` for smooth move; optionally add “Maybe… Yes?” after N escapes. |
| **Yes click** | Run confetti/hearts (e.g. [canvas-confetti](https://www.npmjs.com/package/canvas-confetti) or CSS keyframes), then `setTimeout` → show Page 5. |
| **Fake “No” click** | If she clicks “No,” show a small modal or inline message: “Error 404: ‘No’ not found” or “This option is under maintenance. Try Yes!” then focus back to “Yes.” |
| **Loader** | “Loading a little love…” with heart pulse. |
| **Captions** | One inside-joke caption in “Our story” or in “Reasons.” |

---

## 6. Responsive & Accessibility

- **Breakpoints:** At least 320px (small phone), 768px (tablet), 1024px (desktop). Card max-width ~600px on large screens, full width on mobile with side padding.
- **Touch:** “No” should also escape on touch (use `touchmove` and distance to touch point). Ensure “Yes” is at least 44px tap target.
- **Reduced motion:** Respect `prefers-reduced-motion` for confetti and floating hearts (e.g. disable or simplify).
- **Focus:** Visible focus styles on “Yes” and “Next”/“Back” for keyboard users.

---

## 7. File & Section Mapping (Quick Reference)

| Section name in HTML/CSS | Page # | Content summary |
|--------------------------|--------|-----------------|
| `section.loader`         | 0      | “Something special for you…” |
| `section.landing`       | 1      | “[Name], you’re one in a million” + Begin |
| `section.our-story`     | 2      | Photos + captions / timeline |
| `section.reasons`       | 3      | “Why I want you as my Valentine” list |
| `section.ask`           | 4      | “Will you be my Valentine?” + Yes + evading No |
| `section.thank-you`     | 5      | “Thank you!” + photos + optional letter |
| `section.open-when`     | 6 (opt)| “Open when you said yes” letter |

---

## 8. Copy Checklist (Personalize Before Build)

- [ ] Her name in hero and in main question.
- [ ] Her Instagram handle or nickname in ask card.
- [ ] Tagline (“WHERE IS MY VALENTINE” or similar).
- [ ] 2–4 “our story” captions + dates.
- [ ] 3–5 “reasons” bullets.
- [ ] Thank-you line and optional “open when” letter.
- [ ] Alt text for all images (for accessibility and if images fail to load).

---

Use this spec as the single source of truth for tech stack, theme, and exactly where and which “page” (section) appears and what it contains. Implement sections in order (loader → landing → story → reasons → ask → thank you → optional letter), and keep the tone warm and slightly witty throughout.
