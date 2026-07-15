/* ═══════════════════════════════════════════════════════════════════════════════
   AEL Terminal Command Bible — JavaScript
   Author: Ayman Elmasry — AEL Digital Studio
   Version: AEL Vision Framework v2.2
   ═══════════════════════════════════════════════════════════════════════════════ */

// ─── COPY TO CLIPBOARD ────────────────────────────────────────────────────────
function copyCmd(btn, text) {
  navigator.clipboard.writeText(text).then(() => {
    btn.classList.add('copied');
    btn.textContent = '✅ Copied';
    setTimeout(() => { btn.classList.remove('copied'); btn.textContent = '📋 Copy'; }, 1500);
  }).catch(() => {
    // Fallback for older browsers
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    btn.classList.add('copied');
    btn.textContent = '✅ Copied';
    setTimeout(() => { btn.classList.remove('copied'); btn.textContent = '📋 Copy'; }, 1500);
  });
}

// ─── SEARCH ───────────────────────────────────────────────────────────────────
const searchInput = document.getElementById('searchInput');
const searchHint = document.getElementById('searchHint');
const clearBtn = document.getElementById('clearBtn');
const noResults = document.getElementById('noResults');
const allCards = document.querySelectorAll('.cmd-card');
const allSections = document.querySelectorAll('.cat-section');

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  // Press / to focus search
  if (e.key === '/' && document.activeElement !== searchInput) {
    e.preventDefault();
    searchInput.focus();
  }
  // Press Escape to clear and unfocus
  if (e.key === 'Escape') {
    searchInput.blur();
    clearSearch();
  }
});

// Search input focus/blur effects
searchInput.addEventListener('focus', () => {
  searchHint.classList.add('hidden');
  clearBtn.classList.add('visible');
});

searchInput.addEventListener('blur', () => {
  if (!searchInput.value) {
    searchHint.classList.remove('hidden');
    clearBtn.classList.remove('visible');
  }
});

// Live search filtering
searchInput.addEventListener('input', () => {
  const q = searchInput.value.toLowerCase().trim();
  if (!q) {
    clearSearch();
    return;
  }

  let found = 0;

  // Filter cards
  allCards.forEach(card => {
    const searchData = card.getAttribute('data-search') || '';
    if (searchData.includes(q)) {
      card.classList.remove('hidden');
      found++;
    } else {
      card.classList.add('hidden');
    }
  });

  // Show/hide sections based on visible cards
  allSections.forEach(sec => {
    const visCards = sec.querySelectorAll('.cmd-card:not(.hidden)');
    if (visCards.length === 0) {
      sec.classList.add('hidden');
    } else {
      sec.classList.remove('hidden');
    }
  });

  // Show no results message
  noResults.classList.toggle('visible', found === 0);
});

// Clear search
function clearSearch() {
  searchInput.value = '';
  allCards.forEach(c => c.classList.remove('hidden'));
  allSections.forEach(s => s.classList.remove('hidden'));
  noResults.classList.remove('visible');
  clearBtn.classList.remove('visible');
  searchHint.classList.remove('hidden');
}

// ─── BACK TO TOP BUTTON ───────────────────────────────────────────────────────
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
});

// ─── ACTIVE NAV STATE (SCROLL SPY) ───────────────────────────────────────────
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.cat-section');

function updateActiveNav() {
  let current = '';
  const scrollPos = window.scrollY + 200;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollPos >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveNav);
updateActiveNav();
