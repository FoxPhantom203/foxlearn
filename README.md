# FoxLearn 🦊

**A calm little school for learning to code and speak.**

> Prefer the newer edition? **[Switch to Base44 →](https://foxlearn.base44.app)**

---

## 📚 Overview

FoxLearn is a free, open-source learning platform for coding and languages. We believe learning should be accessible, enjoyable, and free from pressure.

**Two implementations. One FoxLearn.**

- **GitHub Edition**: The open-source version you're looking at now. Free to host anywhere, completely self-contained.
- **Base44 Edition**: A hosted version with additional features. [Visit Base44 →](https://foxlearn.base44.app)

Both implementations share the same philosophy and content. Choose whichever works best for you!

---

## ✨ Features

### 🎯 Learning Content

- **21 courses** across **5 learning trails**
- **43 interactive lessons**
- **1 friendly fox mascot** (Rogue) to keep you company

### 📖 Learning Trails

| Trail | Icon | Courses | Description |
|-------|------|---------|-------------|
| **Coding** | 💻 | 13 | Read code, then write it — thirteen languages, no jargon wall |
| **Living & Endangered** | 🌱 | 2 | Languages with speakers who would like a few more of them |
| **Ancient** | 🏛️ | 2 | Scripts that outlived the empires that wrote them |
| **Invented** | 🧙 | 2 | Languages built on purpose — for dragons, and for enchantments |
| **Everyday** | 📱 | 2 | The ones already sitting on your phone keyboard |

### 🎓 Course List

#### Coding (13 courses)
- Python, gently (3 lessons) — *Start here*
- JavaScript, from the browser up (2 lessons) — *Beginner*
- The shape of a page (2 lessons) — *Beginner*
- TypeScript, typed on purpose (2 lessons) — *Beginner*
- SQL, one question at a time (2 lessons) — *Beginner*
- Go, without ceremony (2 lessons) — *Beginner*
- Rust, borrowing carefully (2 lessons) — *Curious*
- Ruby, read out loud (2 lessons) — *Beginner*
- Java, the long-lived one (2 lessons) — *Beginner*
- C, close to the metal (2 lessons) — *Curious*
- PHP, still running the web (2 lessons) — *Beginner*
- The shell, quietly powerful (2 lessons) — *Beginner*
- Swift, in small pieces (2 lessons) — *Beginner*

#### Living & Endangered (2 courses)
- Hawaiian · ʻŌlelo Hawaiʻi (2 lessons) — *Beginner*
- Welsh · Cymraeg (2 lessons) — *Beginner*

#### Ancient (2 courses)
- Latin, the long-lasting one (2 lessons) — *Beginner*
- Church Slavonic (2 lessons) — *Curious*

#### Invented (2 courses)
- The Enchanting Table (2 lessons) — *Puzzle*
- Dovahzul, the dragon tongue (2 lessons) — *Puzzle*

#### Everyday (2 courses)
- Spanish, on your keyboard (2 lessons) — *Beginner*
- Hiragana, five at a time (2 lessons) — *Beginner*

### 💾 Progress Management

- **Save completed lessons** automatically to your browser
- **Export progress** as a `.foxlearn` file
- **Import `.foxlearn` files** to restore or merge progress
- **Validate imported data** with error handling
- **Preserve progress** across browser sessions
- **No mandatory accounts** — everything works locally

### 🎨 Design Philosophy

- **Human-made, playful, minimal, and welcoming**
- **Clear typography** with consistent spacing
- **Readable lessons** with good contrast
- **Responsive layouts** for all devices
- **Subtle interactions** without excessive animations
- **Recognizable FoxLearn identity** with Rogue the fox

### 🚫 What FoxLearn Does NOT Have

- ❌ No advertisements
- ❌ No telemetry or analytics
- ❌ No tracking pixels
- ❌ No hearts, lives, or punitive systems
- ❌ No artificial urgency or pressure
- ❌ No mandatory accounts
- ❌ No guilt trips

---

## 🦊 The FoxLearn Philosophy

### 💖 No Hearts, No Lives

Get it wrong as often as you need. Every lesson can be replayed from the first question, and nothing is taken away from you for failing.

### 📁 Your Progress is a File

Export everything as one `.foxlearn` file whenever you like. Move it to another device, keep it in a drawer, import it after a year away.

### 🚫 Nothing Phones Home

No telemetry, no analytics, no advertising pixel. The only thing FoxLearn stores is the list of lessons you finished — and that stays in your browser.

### 🌱 Comfortable for Everyone

- **Friendly to beginners** — no jargon walls, clear explanations
- **Comfortable for people who take breaks** — your progress waits for you
- **Accessible and responsive** — works on any device

---

## 🚀 Installation

### Option 1: Use Directly

Simply open `index.html` in your web browser. That's it! FoxLearn is a single-page application that works entirely client-side.

### Option 2: Local Server

For the best experience, serve the files using a local web server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

### Option 3: Deploy to GitHub Pages

1. Push this repository to your GitHub account
2. Go to **Settings > Pages**
3. Select the `main` branch and `/ (root)` folder
4. Click **Save**
5. Your site will be live at `https://<username>.github.io/foxlearn/`

### Option 4: Deploy Anywhere

FoxLearn is a static site. You can deploy it to:
- Netlify
- Vercel
- Cloudflare Pages
- Any static hosting service
- Your own web server

---

## 🛠️ Development

### Project Structure

```
foxlearn/
├── index.html          # Main HTML file
├── README.md           # This file
├── LICENSE             # MIT License
├── css/
│   └── styles.css      # All styles
├── js/
│   ├── app.js          # Main application logic
│   ├── courses.js      # Course data and helpers
│   ├── progress.js     # Progress management
│   └── lessons.js      # Lesson content
└── assets/             # Static assets (optional)
```

### Requirements

- Modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools required
- No dependencies
- No installation needed

### Development Workflow

1. **Clone the repository:**
   ```bash
   git clone https://github.com/FoxPhantom203/foxlearn.git
   cd foxlearn
   ```

2. **Make changes:**
   - Edit files in `js/`, `css/`, or `index.html`
   - The app auto-refreshes when you reload the page

3. **Test:**
   - Open `index.html` in your browser
   - Test all features (navigation, lessons, progress, etc.)
   - Verify responsive design on different screen sizes

4. **Commit and push:**
   ```bash
   git add .
   git commit -m "Your commit message"
   git push
   ```

### Adding New Content

#### Adding a New Course

Edit `js/courses.js`:

```javascript
{
  id: "your-course-id",
  trail: "coding", // or "living", "ancient", "invented", "everyday"
  name: "Your Course Name",
  description: "Brief description",
  difficulty: "Beginner", // or "Curious", "Puzzle"
  lessons: [
    { id: "lesson-1", name: "Lesson 1", content: "Description" },
    { id: "lesson-2", name: "Lesson 2", content: "Description" }
  ],
  tagline: "Short tagline"
}
```

#### Adding Lesson Content

Edit `js/lessons.js` and add a new entry to the appropriate lesson generator function.

---

## 📦 Build Instructions

FoxLearn is a **zero-configuration** static site. There's nothing to build!

However, if you want to optimize for production:

### Minification (Optional)

```bash
# Install minifiers
npm install -g uglify-js clean-css

# Minify JavaScript
uglifyjs js/*.js -o js/bundle.min.js -c -m

# Minify CSS
cleancss css/styles.css -o css/styles.min.css
```

Then update `index.html` to use the minified files.

### Using a Bundler (Optional)

If you prefer using a bundler like Vite, Webpack, or Parcel:

1. Install the bundler
2. Configure it to bundle the JS files
3. Update the script tags in `index.html`

---

## 🎯 Architecture

### Technology Stack

- **Frontend:** Vanilla HTML, CSS, JavaScript (ES6+)
- **Storage:** localStorage for progress
- **Build:** None required (static files)
- **Dependencies:** None

### Key Design Decisions

1. **No Frameworks:** Pure JavaScript for maximum compatibility and minimal overhead
2. **No Build Step:** Works directly from source files
3. **No Dependencies:** Zero external libraries
4. **Progressive Enhancement:** Works without JavaScript (basic navigation)
5. **Local-First:** All data stays in your browser
6. **Accessibility:** Keyboard navigation, ARIA labels, semantic HTML

### Data Flow

```
User Action → Event Listener → Update State → Re-render UI
                          ↓
                    localStorage
                          ↓
                  Export/Import
```

### State Management

- **Application State:** Stored in JavaScript variables
- **User Progress:** Stored in localStorage
- **Session State:** Stored in sessionStorage (current lesson)

---

## 📊 Project Statistics

- **Total Courses:** 21
- **Total Lessons:** 43
- **Total Trails:** 5
- **Total Lines of Code:** ~1000 (JavaScript) + ~800 (CSS)
- **Total File Size:** ~500 KB (unminified)
- **Dependencies:** 0

---

## 🎨 Customization

### Changing Colors

Edit the CSS variables in `css/styles.css`:

```css
:root {
  --coding: #58cc02;
  --living: #1cb0f6;
  --ancient: #ce82ff;
  --invented: #ff9600;
  --everyday: #ff4b4b;
  /* ... */
}
```

### Changing the Mascot

Replace the fox emoji (🦊) with your preferred mascot throughout the codebase.

### Adding a Custom Theme

Create a new CSS file with your theme colors and include it after `styles.css`:

```html
<link rel="stylesheet" href="css/styles.css" />
<link rel="stylesheet" href="css/theme-dark.css" />
```

---

## 📜 License

FoxLearn is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2026 FoxPhantom203

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACT OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

You are free to:
- ✅ Use FoxLearn for any purpose
- ✅ Modify the source code
- ✅ Distribute your modifications
- ✅ Use it in commercial projects
- ✅ Host it on your own domain

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### 🐛 Reporting Bugs

1. Check if the bug has already been reported
2. Open a new issue with:
   - Clear description of the bug
   - Steps to reproduce
   - Expected vs. actual behavior
   - Browser and OS information

### 💡 Suggesting Features

1. Check if the feature has already been suggested
2. Open a new issue with:
   - Clear description of the feature
   - Use case or motivation
   - Any relevant examples

### 👨‍💻 Submitting Code

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Test thoroughly
5. Commit your changes (`git commit -m "Add your feature"`)
6. Push to the branch (`git push origin feature/your-feature`)
7. Open a Pull Request

### 📝 Code Style

- Use 2-space indentation
- Use single quotes for strings (except in HTML)
- Use semicolons at the end of statements
- Keep lines under 100 characters
- Add comments for complex logic
- Follow existing patterns and conventions

---

## 🙏 Acknowledgments

- **Rogue** — The friendly fox mascot who keeps you company
- **Base44** — For the inspiration and the hosted version
- **All learners** — For their curiosity and perseverance
- **Open source community** — For making this possible

---

## 📞 Support

### Documentation

This README is the primary documentation. For more details, see:
- The source code (well-commented)
- The [Base44 edition](https://foxlearn.base44.app) for reference

### Community

- GitHub Issues: [https://github.com/FoxPhantom203/foxlearn/issues](https://github.com/FoxPhantom203/foxlearn/issues)
- GitHub Discussions: [https://github.com/FoxPhantom203/foxlearn/discussions](https://github.com/FoxPhantom203/foxlearn/discussions)

---

## 🌟 Final Words

**Two implementations. One FoxLearn.**

Whether you use the GitHub edition or the [Base44 edition](https://foxlearn.base44.app), you're part of the same learning community.

**Free to use. Free of ads. Free of telemetry. Free of guilt.**

Stay curious, and keep learning! 🦊

---

*Last updated: November 2026*

*FoxLearn — A calm little school for everyone*
