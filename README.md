# Product Table Plugins Feature Comparison (PTPFC)

A comprehensive feature matrix and development roadmap comparing 11 WooCommerce product table plugins across 72+ distinct features. Built to guide the development of **ProductBay ★**.

## Overview

This project serves as a competitive analysis and strategic roadmap for the ProductBay plugin. It visualizes the current landscape of WooCommerce product table solutions, identifying market "table-stakes" (high-adoption features) and unique differentiators.

### Key Components

- **[Comparison Matrix](index.html)**: Interactive table showing side-by-side feature support (Free vs. Pro) across 11 plugins.
- **[Development Roadmap](roadmap.html)**: A vertical, nested timeline showing planned features, grouped by version (v1.1.0, v1.2.0, etc.) and prioritised by competitor adoption rates.
- **[Feature Data](data.js)**: Central repository of feature definitions, categories, and support values.

---

## Project Structure

```text
.
├── index.html      # Main Comparison Matrix page
├── roadmap.html    # Development Roadmap timeline
├── styles.css      # Shared CSS styles
├── data.js         # Feature definitions and plugin support data
├── nav.js          # Shared navigation component (auto-injects at top)
└── README.md       # Project documentation
```

---

## Roadmap & Methodology

The roadmap is derived from a strict gap analysis:
1. **Scoring**: Every missing feature is scored by its **Adoption Rate** (how many of the 10 competitors already offer it).
2. **Prioritisation**:
   - **Critical (v1.1.x)**: Features with ≥ 80% adoption (e.g., Column Sorting, AJAX Pagination).
   - **High/Medium (v1.2.x - v1.3.x)**: Features with 30-70% adoption (e.g., Faceted filtering, Gutenberg blocks).
   - **Power (v2.0.x)**: Advanced B2B, Access Control, and Export functionality.
   - **Future**: Ideas currently under evaluation.

---

## Technical Details

- **Vanilla Stack**: Built with pure HTML, CSS (Inter font), and Vanilla JS for maximum performance and zero dependencies.
- **Data-Driven**: All table rows and roadmap items are generated (or manually synced) from `data.js`.
- **Responsive**: Fully optimized for mobile, tablet, and desktop viewing.
- **Local Assets**: Zero external CDNs used for scripts/styles (GDPR compliant).

---

## Getting Started

Simply open `index.html` in any modern browser. For the best experience (and to ensure `nav.js` works correctly in all environments), serve the directory via a local server:

```bash
# Using Python
python3 -m http.server 8000
```

```bash
# Using Node.js (npx)
npx serve .
```

View at `http://localhost:8000`
