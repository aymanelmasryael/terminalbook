# AEL Terminal Command Bible — Icon & Design Guide

**Full Design Name:** AEL Terminal Command Bible — Complete Reference  
**Author:** Ayman Elmasry — AEL Digital Studio  
**Version:** AEL Vision Framework v2.2  
**File:** `terminal_book.html`

---

## 🎨 Design System

### Colors

| Variable | Hex | Usage |
|----------|-----|-------|
| `--bg` | `#0B1220` | Main background |
| `--surface` | `#111827` | Card backgrounds |
| `--surface2` | `#1E293B` | Secondary surfaces, flag items |
| `--surface3` | `#1A2332` | Alternate surface |
| `--border` | `#1E3A5F` | Default borders |
| `--border-hover` | `#0074FF` | Hover borders (blue) |
| `--text` | `#E6EEF8` | Primary text |
| `--text-dim` | `#7B8FA8` | Secondary text |
| `--text-muted` | `#4B5C73` | Muted/placeholder text |
| `--blue` | `#0074FF` | AEL Blue — primary accent |
| `--gold` | `#FFD700` | AEL Gold — arguments, tips, stats |
| `--teal` | `#00FFCC` | AEL Teal — copy hover, secondary accent |
| `--purple` | `#6C47FF` | AEL Purple — ZSH tags |
| `--pink` | `#FF4D8D` | AEL Pink — Git, search sections |
| `--green` | `#00FF88` | AEL Green — command text, copied state |
| `--red` | `#FF4444` | AEL Red — warnings, destructive |

### Header Colors

| Element | Color | Value |
|---------|-------|-------|
| "AEL" text | White | `#FFFFFF` |
| "Terminal Command Bible" text | Green | `#00FF88` |
| "AEL Digital Studio — Complete Reference" | White (70% opacity) | `#FFFFFF` @ 0.7 |
| Logo SVG fill (rectangles) | Blue | `#0074FF` |
| Logo SVG fill (letter A) | White | `#FFFFFF` |

### Typography

| Element | Font |
|---------|------|
| Body | `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif` |
| Commands | `'SF Mono', 'Fira Code', 'Cascadia Code', monospace` |
| Flags | `'SF Mono', monospace` |
| Subtitle | Uppercase, 11px, letter-spacing: 1px |

---

## 📐 Layout Structure

```
┌─────────────────────────────────────────────┐
│  HEADER (sticky, glassmorphism)             │
│  [AEL Logo] AEL Terminal Command Bible      │
│  204+ commands · 20 categories · 3 platforms│
├─────────────────────────────────────────────┤
│  NAV BAR (sticky, scrollable)               │
│  📁 Navigation | 🗂 Files | 👁 View | ...   │
├─────────────────────────────────────────────┤
│  SEARCH BAR                                 │
│  🔍 [Search commands...]          Press /   │
├─────────────────────────────────────────────┤
│  CATEGORY SECTIONS                          │
│  ┌──────────────────────────────────────┐   │
│  │ 📁 Navigation                    [6] │   │
│  │ ┌────────────┐ ┌────────────┐        │   │
│  │ │ cmd card   │ │ cmd card   │        │   │
│  │ └────────────┘ └────────────┘        │   │
│  └──────────────────────────────────────┘   │
├─────────────────────────────────────────────┤
│  FOOTER                                     │
│  © 2026 Ayman Elmasry — AEL Digital Studio  │
└─────────────────────────────────────────────┘
```

---

## 🎯 Icons & Emojis Guide

### Category Icons (used in section headers + nav)

| Icon | Category | Color | Description |
|------|----------|-------|-------------|
| 📁 | Navigation | `#00FF88` | File system navigation commands |
| 🗂 | Files & Folders | `#FFD700` | File/folder operations |
| 👁 | View Content | `#A78BFA` | File viewing commands |
| 🔍 | Search & Find | `#00BFFF` | Search and find operations |
| 🔐 | Permissions & Config | `#FF8C42` | Permissions, aliases, env vars |
| ⚙️ | Processes | `#F472B6` | Process management |
| 🌐 | Network | `#00FFCC` | Networking commands |
| 📦 | Archives | `#FFD700` | Compression and archiving |
| 💻 | System | `#94A3B8` | System info and utilities |
| 🐚 | Shell Features | `#6C47FF` | Shell line editing, history |
| 🎯 | Globbing & Expansion | `#FF4D8D` | Wildcards, brace expansion |
| 🔀 | Redirection & Pipes | `#00BFFF` | I/O redirection, pipes |
| 📝 | Text Processing | `#00FF88` | sed, awk, sort, cut |
| ✏️ | Editors | `#A78BFA` | Nano, Vim, VS Code |
| 🌿 | Git | `#FF4D8D` | Git version control |
| ⬢ | JavaScript / Node | `#A78BFA` | Node.js, npm, yarn |
| 🍎 | macOS Specific | `#7DD3FC` | macOS-only commands |
| ⌨️ | Keyboard Shortcuts | `#FFD700` | Terminal keyboard shortcuts |
| 🧩 | Useful Combos | `#FF4D8D` | One-liners, combos |
| 🖥 | Platform Notes | `#94A3B8` | Platform differences |

### UI Icons (used in interactive elements)

| Icon | Location | Function |
|------|----------|----------|
| 🔍 | Search bar (left) | Search indicator |
| ✕ | Search bar (right) | Clear search button |
| 📋 | Command card (right) | Copy to clipboard button |
| ✅ | Command card (right) | Copy confirmation (replaces 📋) |
| 💡 | Command card (bottom) | Tip/warning indicator |

### Logo

| Element | Description |
|---------|-------------|
| `ael-logo.svg` | Full AEL logo — white letter "A" on top + blue (#0074FF) pixel grid below |
| SVG viewBox | `0 0 226.77 226.77` |
| Header size | 48×48px |
| Favicon | Same SVG file |

---

## 🏷 Platform Tags

| Tag | Background | Text Color | Meaning |
|-----|------------|------------|---------|
| `ZSH` | `rgba(108,71,255,0.15)` | `#A78BFA` | Zsh-only command |
| `BASH` | `rgba(0,191,255,0.12)` | `#00BFFF` | Bash-only command |
| `MACOS` | `rgba(255,215,0,0.12)` | `#FFD700` | macOS-specific command |
| `LINUX` | `rgba(255,77,141,0.12)` | `#FF4D8D` | Linux-specific command |

---

## 🃏 Command Card Anatomy

```
┌─────────────────────────────────────────────┐
│  grep -r "pattern" dir/        [MACOS] 📋  │  ← cmd-text (green) + platform tag + copy
│  Search recursively                         │  ← cmd-desc (dim text)
│  -r Recursive  -i Case-insensitive  ...     │  ← flag-items (muted, monospace)
│  Example: grep -rn "TODO" src/              │  ← cmd-example (blue code)
│  💡 Combine: grep -rinl for recursive...    │  ← cmd-tip (gold, left border)
└─────────────────────────────────────────────┘
```

### Card States

| State | Border | Transform | Shadow |
|-------|--------|-----------|--------|
| Default | `#1E3A5F` | none | none |
| Hover | `#0074FF` | translateY(-1px) | 0 4px 20px rgba(0,0,0,0.3) |
| Hidden | none | none | none (display: none) |
| Copy Flash | `#00FF88` | none | none (background flash) |

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `/` | Focus search input |
| `Esc` | Clear search + unfocus |
| `Tab` | Autocomplete (in terminal) |

---

## 📱 Responsive Breakpoints

| Breakpoint | Changes |
|------------|---------|
| `> 768px` | Full grid layout, horizontal nav |
| `≤ 768px` | Stacked header, single-column grid, compact padding |

---

## 📊 Statistics

| Metric | Value |
|--------|-------|
| Total Commands | 204+ |
| Categories | 20 |
| Platforms | 3 (macOS, Linux, Shell) |
| File Size | ~129 KB |
| Total Lines | ~2,819 |
| HTML Sections | 20 category sections |

---

## 📁 File Structure

```
Terminalbook/
├── ael-logo.svg          ← AEL Logo (used as favicon + header)
├── terminal_book.html    ← Main file (self-contained, no external deps)
├── ICON_GUIDE.md         ← This file
├── 00_cover.md           ← Original cover (markdown)
├── 01_maqeda.md          ← Original introduction
├── 02_chapter1.md        ← Original chapter 1
├── ...                   ← More markdown chapters
└── 12_conclusion.md      ← Original conclusion
```

---

## 🔗 Author Links

| Platform | URL |
|----------|-----|
| Website | www.aymanelmasry.me |
 Website | www.aymanelmasry.com |
| Email | ayman@aymanelmasry.me |
| WhatsApp | +20 111 330 0073 |
| GitHub | github.com/aymanelmasryael |
| LinkedIn | linkedin.com/in/aymanelmasryael |
| X (Twitter) | x.com/aymanelmasryael |
| Instagram | instagram.com/aymanelmasryael |
| CodePen | codepen.io/aymanelmasryael |

---

*© 2026 Ayman Elmasry — AEL Digital Studio*  
*AEL Vision Framework v2.2 — AEL Prompt IP System v1.0*
