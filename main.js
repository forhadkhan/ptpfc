/**
 * main.js — Table rendering, filter, and sort logic
 * Depends on: data.js (C, X, FREE_COLS, PRO_COLS, features)
 */

// ── Helpers ──────────────────────────────────────────────────────────────────

/** Returns the CSS class to apply to a check cell based on its column index. */
function colClass(i) {
  if (i === 16) return 'our-cell';
  return FREE_COLS.includes(i) ? 'col-free' : 'col-pro';
}

/** Computes support ratio stats for one feature row. */
function computeRatio(vals) {
  const allCount  = [...FREE_COLS, ...PRO_COLS].reduce((n, i) => n + (vals[i] === C ? 1 : 0), 0);
  const freeCount = FREE_COLS.reduce((n, i) => n + (vals[i] === C ? 1 : 0), 0);
  const proCount  = PRO_COLS.reduce((n, i)  => n + (vals[i] === C ? 1 : 0), 0);
  return {
    allPct:   Math.round(allCount  / 17 * 100),
    freePct:  Math.round(freeCount / FREE_COLS.length * 100),
    proPct:   Math.round(proCount  / PRO_COLS.length  * 100),
    allCount, freeCount, proCount,
    allTotal: 17,
    freeTotal: FREE_COLS.length,
    proTotal:  PRO_COLS.length,
  };
}

/** Builds the ratio <td> element for one feature row. */
function buildRatioTd(vals) {
  const r = computeRatio(vals);
  const td = document.createElement('td');
  td.className = 'ratio-td';

  const wrap = document.createElement('div');
  wrap.className = 'ratio-wrap';

  [
    { type: 'all',  pct: r.allPct,  count: r.allCount,  total: r.allTotal  },
    { type: 'free', pct: r.freePct, count: r.freeCount, total: r.freeTotal },
    { type: 'pro',  pct: r.proPct,  count: r.proCount,  total: r.proTotal  },
  ].forEach(b => {
    const row = document.createElement('div');
    row.className = 'ratio-row';
    row.innerHTML = `
      <span class="ratio-lbl ${b.type}">${b.type[0].toUpperCase() + b.type.slice(1)}</span>
      <div class="ratio-track">
        <div class="ratio-fill ${b.type}" style="width:${b.pct}%"></div>
      </div>
      <span class="ratio-num ${b.type}">${b.pct}%</span>
      <span class="ratio-count">${b.count}/${b.total}</span>
    `;
    wrap.appendChild(row);
  });

  td.appendChild(wrap);
  return td;
}


// ── Build tbody ───────────────────────────────────────────────────────────────

const tbody = document.getElementById('tbody');
let lastCat = '';

features.forEach((f, origIdx) => {

  // Category separator row
  if (f.cat !== lastCat) {
    const ctr = document.createElement('tr');
    ctr.className = 'category-row';

    let html = `<td class="col-feat">${f.cat}</td>`;
    f.vals.forEach((_, i) => {
      html += `<td class="check-cell ${colClass(i)}"></td>`;
    });
    ctr.innerHTML = html;

    const rtd = document.createElement('td');
    rtd.className = 'ratio-td';
    ctr.appendChild(rtd);
    tbody.appendChild(ctr);
    lastCat = f.cat;
  }

  // Feature row
  const tr = document.createElement('tr');
  tr.className = 'feature-row';
  tr.dataset.cat     = f.cat;
  tr.dataset.name    = f.name.toLowerCase();
  tr.dataset.origIdx = origIdx;

  let html = `
    <td class="col-feat">
      <div class="feat-name">${f.name}</div>
      <div class="feat-desc">${f.desc}</div>
    </td>`;

  f.vals.forEach((v, i) => {
    html += `
      <td class="check-cell ${colClass(i)}" data-ci="${i}" data-val="${v === C ? 1 : 0}">
        <span class="${v === C ? 'check' : 'dash'}">${v}</span>
      </td>`;
  });

  tr.innerHTML = html;
  tr.appendChild(buildRatioTd(f.vals));
  tbody.appendChild(tr);
});


// ── Animate ratio bars on load ────────────────────────────────────────────────

requestAnimationFrame(() => {
  document.querySelectorAll('.ratio-fill').forEach(fill => {
    const target = fill.style.width;
    fill.style.width = '0%';
    setTimeout(() => { fill.style.width = target; }, 120);
  });
});


// ── Category filter ───────────────────────────────────────────────────────────

let activeFilter = 'all';
let searchTerm   = '';

function applyFilters() {
  document.querySelectorAll('.feature-row').forEach(row => {
    const catMatch    = activeFilter === 'all' || row.dataset.cat === activeFilter;
    const searchMatch = !searchTerm || row.dataset.name.includes(searchTerm);
    row.classList.toggle('hidden', !(catMatch && searchMatch));
  });

  // Hide category header rows when all their children are hidden
  document.querySelectorAll('.category-row').forEach(cr => {
    const cat = cr.querySelector('.col-feat').textContent;
    const hasVisible = Array.from(
      document.querySelectorAll(`.feature-row[data-cat="${cat}"]`)
    ).some(r => !r.classList.contains('hidden'));
    cr.style.display = hasVisible ? '' : 'none';
  });
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    applyFilters();
  });
});

document.getElementById('featureSearch').addEventListener('input', e => {
  searchTerm = e.target.value.toLowerCase().trim();
  applyFilters();
});


// ── Sort by plugin column ─────────────────────────────────────────────────────
// Clicking a tier label cycles: none → ✔ first (asc) → ✔ last (desc) → none

let sortState = { ci: null, dir: null };

function sortByCol(ci) {
  // Cycle sort direction
  if (sortState.ci === ci) {
    if      (sortState.dir === 'asc')  sortState.dir = 'desc';
    else if (sortState.dir === 'desc') { sortState.ci = null; sortState.dir = null; }
  } else {
    sortState.ci  = ci;
    sortState.dir = 'asc';
  }

  // Update sort icons
  document.querySelectorAll('.tier-cell[data-sort-ci]').forEach(tc => {
    tc.classList.remove('sort-asc', 'sort-desc');
    const icon = tc.querySelector('.sort-icon');
    if (parseInt(tc.dataset.sortCi) === sortState.ci) {
      tc.classList.add(sortState.dir === 'asc' ? 'sort-asc' : 'sort-desc');
      icon.textContent = sortState.dir === 'asc' ? '↑' : '↓';
    } else {
      icon.textContent = '⇅';
    }
  });

  // Re-sort rows within each category group
  document.querySelectorAll('tr.category-row').forEach(catRow => {
    const cat  = catRow.querySelector('.col-feat').textContent;
    const rows = Array.from(document.querySelectorAll(`.feature-row[data-cat="${cat}"]`));

    if (sortState.ci === null) {
      // Restore original insertion order
      rows.sort((a, b) => parseInt(a.dataset.origIdx) - parseInt(b.dataset.origIdx));
    } else {
      rows.sort((a, b) => {
        const av = parseInt(a.querySelector(`[data-ci="${sortState.ci}"]`).dataset.val);
        const bv = parseInt(b.querySelector(`[data-ci="${sortState.ci}"]`).dataset.val);
        return sortState.dir === 'asc' ? bv - av : av - bv;
      });
    }

    // Re-insert rows in sorted order directly after the category row
    let anchor = catRow;
    rows.forEach(row => { anchor.after(row); anchor = row; });
  });
}

document.querySelectorAll('.tier-cell[data-sort-ci]').forEach(tc => {
  tc.addEventListener('click', () => sortByCol(parseInt(tc.dataset.sortCi)));
});
