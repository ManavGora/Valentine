# 💕 Valentine's Day "Will You Be My Valentine?" Website

A beautiful, interactive, single-page romantic web application to ask that special someone to be your Valentine. Features witty interactions, personalization, smooth animations, and a heartfelt narrative flow.

![Valentine Website Preview](https://img.shields.io/badge/Made%20with-Love-E91E63?style=for-the-badge&logo=heart)

---

## ✨ Features

- **🎨 Beautiful Design**: Soft pink gradient background, elegant typography, and smooth animations
- **💝 6 Interactive Pages**:
  1. **Loader** - "Loading a little love..."
  2. **Landing** - Personalized hero message
  3. **Our Story** - Photo timeline with captions
  4. **Reasons** - Why you want them as your Valentine
  5. **The Ask** - The big question with a witty evading "No" button
  6. **YaY!** - Celebration page with one special photo and witty message
- **🎯 Witty "No" Button**: Starts beside "Yes", then runs away from cursor/touch when you get close, eventually changes to "Fine... Yes?"
- **🎊 Confetti Celebration**: Heart-shaped confetti explosion when they say "Yes!"
- **📱 Fully Responsive**: Works beautifully on mobile, tablet, and desktop
- **♿ Accessible**: Respects reduced motion preferences, proper focus states, keyboard navigation
- **🎭 Easter Eggs**: Konami code support (optional), console messages, and more

---

## 🚀 Quick Start

### 1. **Personalize the Content**

Open [index.html](index.html) and replace the following placeholders:

#### **Names & Handles** (Search and replace these):
- `Sarah` → Her actual name (appears in multiple places)
- `@sarah.insta` → Her actual Instagram handle or nickname
- `WHERE IS MY VALENTINE` → Your witty tagline

#### **Photo Timeline** (Page 2: Our Story):
Add 4 photos to the `assets/` folder:
- `photo1.jpg` - First date/meeting
- `photo2.jpg` - An adventure together
- `photo3.jpg` - A silly/funny moment
- `photo4.jpg` - A recent photo

Update the captions and dates in the HTML:
```html
<h3>First Coffee</h3>
<p>When I realized you were different</p>
<span class="story-date">January 2024</span>
```

#### **Reasons** (Page 3):
Edit the 5 reason cards with your own personal reasons. Keep them genuine and specific to your relationship.

#### **Special Photo** (Page 5 - YaY!):
Add 1 special photo to `assets/`:
- `special.jpg` - Your best/most special photo together (this will be featured prominently!)

#### **Witty Message** (Page 5):
Customize the witty text in the celebration page. Currently says "I knew you couldn't resist me! 😏" - make it your own!

---

### 2. **Add Your Photos**

Place your photos in the `assets/` folder with these exact names:

```
assets/
├── photo1.jpg    (Story: First moment)
├── photo2.jpg    (Story: Adventure)
├── photo3.jpg    (Story: Silly moment)
├── photo4.jpg    (Story: Recent)
└── special.jpg   (YaY celebration page - your best photo!)
```

**Image recommendations**:
- Format: JPG or WebP (WebP is smaller)
- Max width: 1200px
- Aspect ratio: 4:3 or 16:9 works best
- File size: Keep under 500KB each for fast loading

**Don't have photos ready?** You can use placeholder images temporarily:
- [Unsplash](https://unsplash.com/)
- [Pexels](https://www.pexels.com/)

---

### 3. **Test Locally**

Simply open `index.html` in your web browser:

```bash
# Option 1: Double-click index.html

# Option 2: Use a simple server (recommended for testing)
# If you have Python installed:
python3 -m http.server 8000

# Then visit: http://localhost:8000
```

---

### 4. **Deploy (Make it Live!)**

#### **Option A: GitHub Pages** (Recommended - Free & Easy)

1. Create a new GitHub repository
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "💕 Valentine website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/valentine.git
   git push -u origin main
   ```
3. Go to your repo → Settings → Pages
4. Source: Deploy from branch `main`, folder `/ (root)`
5. Your site will be live at: `https://YOUR-USERNAME.github.io/valentine/`

#### **Option B: Netlify** (Drag & Drop)

1. Go to [Netlify Drop](https://app.netlify.com/drop)
2. Drag your entire `Valentine` folder onto the page
3. Done! You'll get a live URL instantly
4. Optional: Customize the domain name in Netlify settings

#### **Option C: Vercel**

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project folder
3. Follow the prompts
4. Done!

---

## 🎨 Customization Guide

### **Change Colors**

All colors are defined as CSS variables in [styles.css](styles.css) at the top:

```css
:root {
    --bg-pink: #FFF5F5;           /* Background color */
    --cta-red: #E91E63;           /* "Yes" button color */
    --accent: #FF4081;            /* Hearts, highlights */
    --text-primary: #2D2D2D;      /* Main text */
    --text-secondary: #6B6B6B;    /* Secondary text */
}
```

Just change these values to match your preferred color scheme!

### **Change Fonts**

Fonts are also in CSS variables. Currently using:
- **Headings**: Playfair Display (elegant serif)
- **Body**: Nunito (friendly sans-serif)

To change:
1. Pick new fonts from [Google Fonts](https://fonts.google.com/)
2. Update the `<link>` in `index.html` (head section)
3. Update CSS variables:
   ```css
   --font-display: 'Your Display Font', serif;
   --font-body: 'Your Body Font', sans-serif;
   ```

### **Adjust "No" Button Behavior**

In [app.js](app.js), you can tweak:

```javascript
maxEscapes: 4,              // How many times it runs away
distance < 100              // How close before it moves (in pixels)
```

### **Enable Konami Code Easter Egg**

In [app.js](app.js), uncomment this line in the `init()` function:

```javascript
// app.setupKonamiCode();  // Remove the //
```

Then try pressing: ↑ ↑ ↓ ↓ ← → ← → B A

---

## 📁 File Structure

```
Valentine/
├── index.html              # Main HTML structure
├── styles.css              # All styling and animations
├── app.js                  # Interactive JavaScript
├── assets/                 # Your photos go here
│   ├── photo1.jpg
│   ├── photo2.jpg
│   ├── photo3.jpg
│   ├── photo4.jpg
│   ├── us1.jpg
│   └── us2.jpg
├── README.md              # This file
└── VALENTINE_APP_SPEC.md  # Detailed technical spec
```

---

## 🎯 Personalization Checklist

Before you deploy, make sure you've customized:

- [ ] Her name in hero title (Page 1)
- [ ] Her name in big question (Page 4)
- [ ] Her Instagram handle or nickname (Page 4)
- [ ] Profile tagline (Page 4)
- [ ] 4 story captions + dates (Page 2)
- [ ] 4 story photos in `assets/` folder (photo1-4.jpg)
- [ ] 5 personal reasons (Page 3)
- [ ] Witty message on celebration page (Page 5)
- [ ] 1 special photo in `assets/` folder (special.jpg)
- [ ] Alt text for images (accessibility)

---

## 🛠️ Technical Details

### **Tech Stack**
- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Flexbox, Grid, Keyframe animations
- **JavaScript (ES6+)**: Vanilla JS, no frameworks
- **External Library**: [canvas-confetti](https://www.npmjs.com/package/canvas-confetti) (CDN)
- **Fonts**: Google Fonts (Playfair Display, Nunito)

### **Browser Support**
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

### **Performance**
- No build step required
- Minimal dependencies (1 CDN library)
- Optimized animations with `requestAnimationFrame`
- Respects `prefers-reduced-motion` for accessibility
- Fast load time with optimized images

---

## 📱 Mobile Optimization

The site is fully responsive and includes:
- Touch events for the evading "No" button
- Optimized tap targets (minimum 44px)
- Smooth scrolling on mobile
- Responsive typography with `clamp()`
- Mobile-first breakpoints (320px, 768px, 1024px)

---

## ♿ Accessibility Features

- Semantic HTML5 structure
- Proper heading hierarchy
- Alt text for all images
- Focus states for keyboard navigation
- `prefers-reduced-motion` support
- Sufficient color contrast (WCAG AA)
- Keyboard navigation (Enter/Space to advance pages)

---

## 🎉 Tips for Success

1. **Personalization is Key**: The more specific and personal, the better. Use inside jokes, real memories, and genuine feelings.

2. **Photo Quality Matters**: Use clear, well-lit photos. Crop them to focus on faces and moments.

3. **Timing**: Send the link at a special time:
   - Morning: "Good morning! I have something for you..."
   - Evening: "Before you sleep, check this out..."
   - Valentine's Day: Perfect timing!

4. **Delivery Ideas**:
   - Text the link with a sweet message
   - Share via Instagram DM
   - QR code printed on a card
   - Email with a romantic subject line

5. **Backup Plan**: Screenshot the final "Yes" page in case you want to print it or save it as a memory!

---

## 🐛 Troubleshooting

### **Images not showing?**
- Check file names match exactly (case-sensitive)
- Ensure images are in the `assets/` folder
- Try using absolute paths if hosting online

### **Confetti not working?**
- Check browser console for errors
- Ensure the CDN link is working
- Try hard refresh (Ctrl+F5 or Cmd+Shift+R)

### **"No" button not moving?**
- Make sure you're on page 4 (the ask page)
- Check browser console for JavaScript errors
- Try on desktop first (easier to test mouse events)

### **Page not advancing?**
- Check that you're clicking the correct buttons
- Look for JavaScript errors in console (F12)
- Ensure `app.js` is properly linked

---

## 💡 Ideas for Enhancement

Want to make it even more special? Try these:

- **Background Music**: Add a subtle love song that plays when she opens it
- **Voice Message**: Record a voice note for the letter section
- **Video**: Replace a photo with a short video montage
- **Countdown**: Add a countdown to Valentine's Day
- **Quiz**: Add a fun "how well do you know me?" quiz before the ask
- **Multiple Languages**: Add her native language if different
- **Dark Mode**: Add a theme toggle for dark mode support

---

## 📄 License

This is a personal project template. Feel free to use, modify, and share it!

Made with ❤️ and lots of CSS

---

## 🙏 Credits

- Fonts: [Google Fonts](https://fonts.google.com/)
- Confetti: [canvas-confetti](https://www.kirilv.com/canvas-confetti/) by Kiril Vatev
- Inspiration: Love, romance, and the desire to create something special

---

## 💌 Final Note

Remember: The website is just a medium. What really matters is the thought, effort, and genuine feelings behind it. Make it personal, make it you, and most importantly — make it from the heart.

Good luck! 💕

---

**Questions or issues?** Check the spec document: [VALENTINE_APP_SPEC.md](VALENTINE_APP_SPEC.md)

**Want to see it in action?** Just open `index.html` in your browser!
