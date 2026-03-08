/**
 * data.js — Feature definitions and column index map
 *
 * Column index map (17 plugin tier columns):
 *   0  Barn2 Pro
 *   1  WBW Free       2  WBW Pro
 *   3  WCPT Free      4  WCPT Pro
 *   5  WebFix Free    6  WebFix Pro
 *   7  JustTables Free  8  JustTables Pro
 *   9  WooT Free      10 WooT Pro
 *   11 Acowebs Free (only)
 *   12 Codup Pro (only)
 *   13 WPExperts Pro (only)
 *   14 WPClever Free  15 WPClever Pro
 *   16 ProductBay Free ★
 */

const C = "✔";
const X = "—";

const FREE_COLS = [1, 3, 5, 7, 9, 11, 14, 16]; // 8 free tiers
const PRO_COLS  = [0, 2, 4, 6, 8, 10, 12, 13, 15]; // 9 pro tiers

const features = [

  // ── DISPLAY & LAYOUT ──────────────────────────────────────────────────────
  { cat: "Display & Layout", name: "Multiple Table Instances",
    desc: "Create unlimited independent product tables, each with its own settings.",
    vals: [C, C,C, C,C, C,C, C,C, C,C, C, C, C, C,C, C] },

  { cat: "Display & Layout", name: "Pre-built Templates / Styles",
    desc: "Ready-made table designs or themes to start from without custom styling.",
    vals: [C, X,C, C,C, X,X, X,C, X,X, X, X, X, X,C, X] },

  { cat: "Display & Layout", name: "Shortcode Support",
    desc: "Embed product tables anywhere on your site using simple shortcodes.",
    vals: [C, C,C, C,C, C,C, C,C, C,C, C, C, C, C,C, C] },

  { cat: "Display & Layout", name: "Gutenberg Block",
    desc: "Insert a product table directly via the WordPress block editor.",
    vals: [C, X,C, X,C, X,X, X,X, X,X, X, X, X, X,X, X] },

  { cat: "Display & Layout", name: "Shop / Category Page Override",
    desc: "Replace the default WooCommerce shop or category grid with a table layout.",
    vals: [C, X,C, C,C, X,X, X,X, X,X, X, X, X, X,X, X] },

  { cat: "Display & Layout", name: "List View Layout",
    desc: "Alternative card/list view option alongside the traditional table layout.",
    vals: [X, X,X, C,C, X,X, X,X, X,X, X, X, X, X,X, X] },

  { cat: "Display & Layout", name: "Grid / Table View Switcher",
    desc: "Let users toggle between grid view and table view on the frontend.",
    vals: [X, X,X, X,C, X,X, X,X, X,X, X, X, X, X,X, X] },

  { cat: "Display & Layout", name: "Responsive / Mobile-Ready",
    desc: "Table adapts and remains fully functional on phones and tablets.",
    vals: [C, C,C, C,C, C,C, C,C, C,C, C, C, C, C,C, C] },

  { cat: "Display & Layout", name: "Page Builder Compatible",
    desc: "Works with Elementor, Divi, Beaver Builder, and other page builders.",
    vals: [C, C,C, C,C, X,X, C,C, C,C, C, X, C, X,X, X] },

  { cat: "Display & Layout", name: "Sticky / Floating Header",
    desc: "Header row stays visible while users scroll through long product lists.",
    vals: [X, X,X, X,X, C,C, X,X, X,X, X, X, X, X,X, X] },


  // ── COLUMNS ───────────────────────────────────────────────────────────────
  { cat: "Columns", name: "Customizable Column Selection",
    desc: "Choose which columns to show or hide — name, price, image, stock, and more.",
    vals: [C, C,C, C,C, C,C, C,C, C,C, C, C, C, C,C, C] },

  { cat: "Columns", name: "Drag & Drop Column Reorder",
    desc: "Visually rearrange table columns by dragging and dropping.",
    vals: [X, X,X, X,C, X,X, C,C, C,C, X, X, C, C,C, C] },

  { cat: "Columns", name: "Custom Field / Meta Columns",
    desc: "Display values from ACF or any custom meta field as a table column.",
    vals: [C, X,C, X,C, X,X, C,C, C,C, C, X, X, X,X, X] },

  { cat: "Columns", name: "Custom Taxonomy Columns",
    desc: "Show custom taxonomy terms (e.g. brands, certifications) as a column.",
    vals: [C, X,C, X,C, X,X, C,C, C,C, C, X, X, X,X, X] },

  { cat: "Columns", name: "Merge / Combined Columns",
    desc: "Combine multiple data fields into one cell — e.g. name + description.",
    vals: [C, X,C, X,C, X,X, X,X, X,X, X, X, X, X,X, X] },

  { cat: "Columns", name: "Column Visibility by Device",
    desc: "Show or hide individual columns per device size: mobile, tablet, or desktop.",
    vals: [C, X,X, X,X, X,X, X,X, X,X, C, X, X, X,X, C] },

  { cat: "Columns", name: "Login-only Columns",
    desc: "Restrict columns so only logged-in users can see specific data.",
    vals: [X, X,X, X,X, X,X, X,X, C,C, X, X, C, X,X, X] },

  { cat: "Columns", name: "SKU Column",
    desc: "Display the product's SKU code as a dedicated table column.",
    vals: [C, X,C, X,C, X,C, C,C, C,C, C, C, C, C,C, C] },

  { cat: "Columns", name: "Stock Status Column",
    desc: "Show in-stock / out-of-stock status or stock quantity in the table.",
    vals: [C, X,C, X,C, X,C, C,C, C,C, C, C, C, C,C, C] },

  { cat: "Columns", name: "Rating / Reviews Column",
    desc: "Display the product star rating or review count as a column.",
    vals: [C, X,C, X,C, X,C, X,C, X,X, X, X, X, C,C, X] },

  { cat: "Columns", name: "Include / Exclude by Product ID",
    desc: "Manually specify product IDs to include or exclude from the table.",
    vals: [C, X,C, C,C, X,X, C,C, C,C, C, C, C, C,C, C] },

  { cat: "Columns", name: "Include / Exclude by Category",
    desc: "Limit the table to specific categories, or exclude certain ones.",
    vals: [C, C,C, C,C, X,C, C,C, C,C, C, C, C, C,C, C] },

  { cat: "Columns", name: "Filter by Custom Field Value",
    desc: "Show only products matching a specific ACF/meta field value.",
    vals: [C, X,C, X,C, X,X, X,X, X,X, X, X, X, X,X, X] },

  { cat: "Columns", name: "Section / Group by Category",
    desc: "Display products grouped under visible category section headers.",
    vals: [X, X,X, X,C, X,C, X,X, X,X, X, X, X, X,X, X] },

  { cat: "Columns", name: "Filter by Sale Status (source)",
    desc: "Show only products currently on sale as a product source filter.",
    vals: [X, X,X, X,X, X,X, X,X, X,X, X, X, X, X,X, C] },

  { cat: "Columns", name: "Previously Ordered Products",
    desc: "Show a list of products the current user has purchased before.",
    vals: [C, X,X, X,X, X,X, X,X, X,X, X, X, X, X,X, X] },


  // ── SEARCH & FILTER ───────────────────────────────────────────────────────
  { cat: "Search & Filter", name: "Instant / AJAX Search",
    desc: "Real-time keyword search filters the table without a page reload.",
    vals: [C, C,C, X,C, X,C, C,C, C,C, C, C, C, C,C, C] },

  { cat: "Search & Filter", name: "SKU Search",
    desc: "Search for products specifically by their SKU code.",
    vals: [C, X,C, X,C, X,C, X,X, X,X, X, X, C, C,C, X] },

  { cat: "Search & Filter", name: "Filter by Category",
    desc: "Let users filter the table to display a specific product category.",
    vals: [C, C,C, C,C, X,C, C,C, C,C, C, C, C, C,C, C] },

  { cat: "Search & Filter", name: "Filter by Price Range",
    desc: "Price slider or min/max input to filter products within a budget.",
    vals: [C, X,C, C,C, C,C, X,C, X,X, C, C, C, X,X, C] },

  { cat: "Search & Filter", name: "Filter by Stock Status",
    desc: "Show only in-stock or only out-of-stock products in the table.",
    vals: [C, X,C, X,X, X,X, X,C, X,X, X, X, X, X,X, C] },

  { cat: "Search & Filter", name: "Filter by Attribute / Tag",
    desc: "Filter products by color, size, or any WooCommerce attribute or tag.",
    vals: [C, C,C, X,C, X,X, X,C, X,X, C, C, C, X,X, X] },

  { cat: "Search & Filter", name: "Faceted / Multi-filter",
    desc: "Combine multiple active filters simultaneously for precise results.",
    vals: [C, X,C, X,C, X,X, X,C, X,X, C, C, C, X,X, X] },

  { cat: "Search & Filter", name: "Column Sorting (click headers)",
    desc: "Sort the table ascending/descending by clicking any column header.",
    vals: [C, C,C, C,C, C,C, C,C, C,C, C, C, C, C,C, X] },

  { cat: "Search & Filter", name: "Default Sort Order Setting",
    desc: "Set a default sort order — e.g. price ascending or newest first.",
    vals: [C, C,C, C,C, C,C, C,C, C,C, C, C, C, C,C, X] },

  { cat: "Search & Filter", name: "AJAX Pagination",
    desc: "Navigate between pages of products without a full page reload.",
    vals: [C, C,C, C,C, X,X, C,C, C,C, C, C, C, C,C, X] },

  { cat: "Search & Filter", name: "Products Per Page Control",
    desc: "Configure how many product rows are shown per table page.",
    vals: [C, C,C, C,C, C,C, C,C, C,C, C, C, C, C,C, X] },

  { cat: "Search & Filter", name: "Lazy Load / Load More Button",
    desc: "Load additional products progressively via AJAX or a 'Load More' button.",
    vals: [C, X,C, X,C, X,X, X,X, C,C, C, X, X, X,X, X] },


  // ── CART ──────────────────────────────────────────────────────────────────
  { cat: "Cart", name: "Per-row Add to Cart Button",
    desc: "Individual 'Add to Cart' button on each product row.",
    vals: [C, C,C, C,C, X,C, C,C, C,C, C, C, C, C,C, C] },

  { cat: "Cart", name: "Multi-select Checkboxes",
    desc: "Checkboxes per row to select multiple products at once.",
    vals: [C, C,C, C,C, C,C, C,C, C,C, C, C, C, C,C, C] },

  { cat: "Cart", name: "Quantity Selector in Table",
    desc: "Numeric quantity input or stepper directly inside each product row.",
    vals: [C, C,C, C,C, C,C, C,C, C,C, C, C, C, C,C, X] },

  { cat: "Cart", name: "AJAX Add to Cart",
    desc: "Products are added to the cart without reloading the entire page.",
    vals: [C, C,C, C,C, C,C, C,C, C,C, C, C, C, C,C, C] },

  { cat: "Cart", name: "Bulk 'Add Selected to Cart'",
    desc: "Single button to add all checkbox-selected products to the cart at once.",
    vals: [C, C,C, C,C, C,C, C,C, C,C, C, C, C, C,C, C] },

  { cat: "Cart", name: "Mini / Floating Cart Widget",
    desc: "Floating cart icon or sidebar showing cart contents on the table page.",
    vals: [X, X,C, X,C, X,C, X,X, C,C, X, X, C, X,X, X] },

  { cat: "Cart", name: "One-Page / Direct Checkout",
    desc: "Customers complete their purchase without leaving the product table page.",
    vals: [X, X,X, X,X, X,C, X,X, X,X, X, X, C, X,X, X] },

  { cat: "Cart", name: "Sticky Total Price Row",
    desc: "A sticky row showing a running total of selected product prices.",
    vals: [X, X,X, X,X, C,C, X,X, X,X, X, X, X, X,X, X] },


  // ── VARIATIONS ────────────────────────────────────────────────────────────
  { cat: "Variations", name: "Variable Product Support",
    desc: "The table can display WooCommerce variable products (products with options).",
    vals: [C, C,C, C,C, C,C, C,C, C,C, C, C, C, C,C, C] },

  { cat: "Variations", name: "Variation Dropdowns in Table Row",
    desc: "Attribute dropdowns (color, size, etc.) displayed within the table row.",
    vals: [C, C,C, C,C, C,C, X,C, C,C, C, C, C, C,C, C] },

  { cat: "Variations", name: "Each Variation as Separate Row",
    desc: "Option to expand each product variation into its own dedicated table row.",
    vals: [C, X,X, X,C, X,X, X,C, X,X, X, C, C, X,X, X] },

  { cat: "Variations", name: "Grouped Products Support",
    desc: "Handles WooCommerce grouped product type correctly within the table.",
    vals: [X, X,X, X,X, X,C, X,X, X,X, X, X, X, X,X, C] },

  { cat: "Variations", name: "External / Affiliate Products",
    desc: "Displays WooCommerce External/Affiliate product type in the table.",
    vals: [X, X,X, X,X, X,X, X,X, X,X, X, X, X, X,X, C] },

  { cat: "Variations", name: "Subscription Products Support",
    desc: "Compatible with WooCommerce Subscriptions product type.",
    vals: [X, X,X, X,X, X,C, X,X, X,X, X, X, X, X,X, X] },


  // ── DESIGN ────────────────────────────────────────────────────────────────
  { cat: "Design", name: "Live / Visual Style Editor",
    desc: "A real-time visual editor to customize table colors, fonts, and spacing.",
    vals: [X, X,C, X,C, X,X, X,C, X,X, X, X, X, X,X, C] },

  { cat: "Design", name: "Color & Font Customization",
    desc: "Configure accent colors, borders, row backgrounds, and font sizes.",
    vals: [C, X,C, X,C, X,X, X,C, X,C, C, X, C, X,C, C] },

  { cat: "Design", name: "Custom CSS Support",
    desc: "Write your own CSS rules for fully custom table styling.",
    vals: [C, X,C, C,C, C,C, X,X, X,X, C, X, X, X,X, X] },

  { cat: "Design", name: "Dark / Preset Color Themes",
    desc: "Built-in dark, light, neutral and other pre-designed color themes.",
    vals: [C, X,C, X,C, X,X, X,X, X,X, X, X, X, X,C, X] },

  { cat: "Design", name: "Instance-Scoped CSS (no conflicts)",
    desc: "Each table's styles are isolated so multiple tables on a page don't conflict.",
    vals: [X, X,X, X,X, X,X, X,X, X,X, X, X, X, X,X, C] },

  { cat: "Design", name: "Lightbox for Product Images",
    desc: "Clicking a product image opens a full-size lightbox popup.",
    vals: [X, X,X, X,C, X,X, X,X, X,X, C, X, X, X,X, X] },


  // ── INTEGRATION ───────────────────────────────────────────────────────────
  { cat: "Integration", name: "WPML / Multilingual Support",
    desc: "Compatible with WPML, Polylang, or other translation plugins.",
    vals: [C, X,C, C,C, C,C, X,X, X,X, C, X, X, C,C, C] },

  { cat: "Integration", name: "Translation Ready (i18n)",
    desc: "All strings wrapped in localization functions; .pot file provided.",
    vals: [C, X,C, C,C, C,C, X,X, C,C, C, X, X, C,C, C] },

  { cat: "Integration", name: "WooCommerce Product Add-Ons",
    desc: "Integrates with official WooCommerce Product Add-Ons plugin.",
    vals: [C, X,C, X,C, X,X, X,X, X,X, X, X, X, X,X, X] },

  { cat: "Integration", name: "Quick View Popup",
    desc: "A quick view button in the table opens a product details modal.",
    vals: [X, X,C, X,C, X,X, X,X, X,X, X, C, C, C,C, X] },

  { cat: "Integration", name: "Wholesale / B2B Pricing Support",
    desc: "Works with wholesale pricing plugins; restricts table visibility by user role.",
    vals: [C, X,C, X,C, X,X, X,X, X,X, X, C, C, X,X, X] },

  { cat: "Integration", name: "Multisite Compatible",
    desc: "Works correctly on WordPress multisite / network installations.",
    vals: [X, X,X, C,C, X,X, X,X, X,X, X, X, X, X,X, X] },

  { cat: "Integration", name: "No External CDN (Local Assets)",
    desc: "All JS/CSS bundled locally; no external scripts or data sent to third parties.",
    vals: [X, X,X, X,X, X,X, X,X, X,X, X, X, X, X,X, C] },

  { cat: "Integration", name: "Performance Query Caching",
    desc: "Product queries are cached to reduce database load on busy stores.",
    vals: [X, X,X, X,X, X,X, X,X, X,X, X, X, X, X,X, C] },


  // ── ACCESS ────────────────────────────────────────────────────────────────
  { cat: "Access", name: "User Role Restrictions",
    desc: "Show or hide the table / columns based on user role or login status.",
    vals: [X, X,X, X,X, X,X, X,X, X,C, X, X, C, X,X, X] },

  { cat: "Access", name: "Import / Export Table Settings",
    desc: "Export table configuration as a file and import it on another site.",
    vals: [X, X,X, X,X, X,C, X,X, X,X, X, X, X, X,X, X] },

  { cat: "Access", name: "Product Export (CSV / Print)",
    desc: "Export the displayed product list as CSV or a printer-friendly view.",
    vals: [X, X,X, X,X, X,X, X,C, X,X, X, X, X, X,X, X] },

  { cat: "Access", name: "Drag & Drop Table Builder UI",
    desc: "Build and configure the entire table with a visual drag-and-drop interface.",
    vals: [X, X,X, X,C, X,X, X,X, X,X, X, X, C, X,X, C] },

  { cat: "Access", name: "5-Step Guided Creation Wizard",
    desc: "Step-by-step wizard guiding admins through setup, columns, and design.",
    vals: [X, X,X, X,X, X,X, X,X, X,X, X, X, X, X,X, C] },

  { cat: "Access", name: "Table Dashboard with Search & Filter",
    desc: "Centralized admin dashboard to search, filter, and manage all tables.",
    vals: [X, X,X, X,X, X,X, X,X, X,X, X, X, X, X,X, C] },

  { cat: "Access", name: "Bulk Delete Tables",
    desc: "Batch-delete multiple product tables at once from the admin dashboard.",
    vals: [X, X,X, X,X, X,X, X,X, X,X, X, X, X, X,X, C] },
];
