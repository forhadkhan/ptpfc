/**
 * nav.js — Shared navigation bar for ProductBay comparison pages.
 * Include this script in any page and call insertNav() or let it auto-init.
 */
(function () {
  const pages = [
    { href: 'index.html',   label: 'Comparison Table', id: 'nav-comparison' },
    { href: 'roadmap.html', label: '📅 Roadmap',        id: 'nav-roadmap'    },
  ];

  function buildNav() {
    const current = location.pathname.split('/').pop() || 'index.html';

    const nav = document.createElement('nav');
    nav.id = 'site-nav';
    nav.innerHTML = `
      <div class="nav-inner">
        <div class="nav-left">
          <span class="nav-brand">ProductBay <span class="nav-star">★</span></span>
          <div class="nav-links" role="navigation">
            ${pages.map(p => `
              <a href="${p.href}" id="${p.id}"
                 class="nav-link${p.href === current ? ' active' : ''}">${p.label}</a>
            `).join('')}
          </div>
        </div>
        <span class="nav-date">Updated March 2025</span>
      </div>
    `;
    return nav;
  }

  const css = `
    #site-nav {
      position: relative;
      background: #ffffff;
      border-bottom: 1px solid #e2e5f0;
      box-shadow: 0 1px 8px rgba(0,0,0,.05);
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
    }
    #site-nav .nav-inner {
      max-width: 1200px; margin: 0 auto;
      padding: 0 40px;
      height: 52px;
      display: flex; align-items: center; justify-content: space-between; gap: 16px;
    }
    #site-nav .nav-left { display: flex; align-items: center; gap: 24px; }
    #site-nav .nav-brand {
      font-weight: 800; font-size: 15px; color: #4154f1;
      letter-spacing: -.02em; white-space: nowrap;
    }
    #site-nav .nav-star { opacity: .8; }
    #site-nav .nav-links { display: flex; gap: 4px; }
    #site-nav .nav-link {
      font-size: 13px; font-weight: 500; color: #6b748f;
      text-decoration: none; padding: 5px 14px; border-radius: 8px;
      border: 1px solid transparent; transition: all .15s; white-space: nowrap;
    }
    #site-nav .nav-link:hover { background: #f0f1f8; color: #16193b; }
    #site-nav .nav-link.active {
      background: #edeffe; border-color: #c7cdfb; color: #4154f1;
    }
    #site-nav .nav-date { font-size: 11px; color: #6b748f; white-space: nowrap; }
    @media (max-width: 600px) {
      #site-nav .nav-inner { padding: 0 16px; }
      #site-nav .nav-date  { display: none; }
    }
  `;

  function init() {
    // Inject styles
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    // Insert nav as first child of body
    document.body.insertBefore(buildNav(), document.body.firstChild);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
