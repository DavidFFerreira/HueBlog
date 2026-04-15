/* ===================================
   MEU BLOG — JavaScript Principal
   =================================== */

document.addEventListener('DOMContentLoaded', function () {

  // ==================
  // TEMA ESCURO / CLARO
  // ==================
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }

  // ==================
  // MENU MOBILE
  // ==================
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mainNav = document.getElementById('mainNav');

  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', function () {
      mainNav.classList.toggle('open');
      const spans = mobileMenuBtn.querySelectorAll('span');
      if (mainNav.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(4px, 4px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(4px, -4px)';
      } else {
        spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      }
    });
  }

  // ==================
  // PESQUISA
  // ==================
  const searchToggle = document.getElementById('searchToggle');
  const searchBar = document.getElementById('searchBar');
  const searchClose = document.getElementById('searchClose');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');

  if (searchToggle && searchBar) {
    searchToggle.addEventListener('click', function () {
      searchBar.classList.toggle('open');
      if (searchBar.classList.contains('open') && searchInput) {
        searchInput.focus();
      }
    });
  }
  if (searchClose) {
    searchClose.addEventListener('click', function () {
      searchBar.classList.remove('open');
      if (searchResults) searchResults.innerHTML = '';
    });
  }

  // Carrega o índice de pesquisa
  let searchIndex = null;

  function loadSearchIndex() {
    if (searchIndex) return Promise.resolve(searchIndex);
    return fetch('/search.json')
      .then(r => r.json())
      .then(data => { searchIndex = data; return data; })
      .catch(() => []);
  }

  function performSearch(query, resultsEl) {
    if (!query || query.length < 2) { resultsEl.innerHTML = ''; return; }
    loadSearchIndex().then(function (posts) {
      const q = query.toLowerCase();
      const matches = posts.filter(function (p) {
        return (p.title && p.title.toLowerCase().includes(q)) ||
               (p.excerpt && p.excerpt.toLowerCase().includes(q)) ||
               (p.categoria && p.categoria.toLowerCase().includes(q));
      }).slice(0, 8);
      if (matches.length === 0) {
        resultsEl.innerHTML = '<a class="search-result-item"><strong>Nenhum resultado encontrado.</strong></a>';
        return;
      }
      resultsEl.innerHTML = matches.map(function (p) {
        return '<a href="' + p.url + '" class="search-result-item"><strong>' + escapeHtml(p.title) + '</strong><small>' + (p.date || '') + ' • ' + (p.categoria || '') + '</small></a>';
      }).join('');
    });
  }

  if (searchInput && searchResults) {
    searchInput.addEventListener('input', function () {
      performSearch(this.value.trim(), searchResults);
    });
  }

  // Sidebar search
  const sidebarSearch = document.getElementById('sidebarSearch');
  const sidebarSearchBtn = document.getElementById('sidebarSearchBtn');
  if (sidebarSearchBtn && sidebarSearch) {
    sidebarSearchBtn.addEventListener('click', function () {
      const q = sidebarSearch.value.trim();
      if (q) window.location.href = '/?search=' + encodeURIComponent(q);
    });
    sidebarSearch.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') sidebarSearchBtn.click();
    });
  }

  function escapeHtml(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // ==================
  // HEADER SCROLL
  // ==================
  const header = document.getElementById('site-header');
  let lastScroll = 0;
  window.addEventListener('scroll', function () {
    const current = window.scrollY;
    if (header) {
      if (current > 80) {
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
      } else {
        header.style.boxShadow = '';
      }
    }
    lastScroll = current;
  });

});
