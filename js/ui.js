import {
  categories,
  products,
  featuredProductSlugs,
  getProductBySlug,
  searchProducts
} from "./products.js";

import { cropSolutions } from "./cropSolutions.js";

/* =========================================================
   CONTACT INFORMATION
========================================================= */

const CONTACT = {
  email: "growrichindustries@gmail.com",
  phone: "+91 982 247 0016",
  whatsapp: "919822470016",
  address:
    "F-5, M.I.D.C, Khandala, Tal. Shrirampur, Dist. Ahilyanagar, Maharashtra - 413709, India"
};

/* =========================================================
   CROP SOLUTION STATE
========================================================= */

let selectedCropCategory = "All";
let cropSearchText = "";

/* =========================================================
   MAIN APP SHELL
========================================================= */

export function renderAppShell() {
  const app = document.querySelector("#app");

  if (!app) return;

  app.innerHTML = `
    <div class="site">

      ${renderTopBar()}

      ${renderNavbar()}

      <main id="page-content"></main>

      ${renderFloatingActions()}

      ${renderFooter()}

    </div>
  `;

  bindGlobalEvents();
}

/* =========================================================
   TOP BAR
========================================================= */

function renderTopBar() {
  return `
    <div class="topbar">
      <div class="container topbar-inner">

        <div class="topbar-contact">

          <a
            href="mailto:${CONTACT.email}"
            title="Email GrowRich"
          >
            <i class="fa-solid fa-envelope"></i>
            <span>${CONTACT.email}</span>
          </a>

          <a
            href="tel:${CONTACT.phone.replaceAll(" ", "")}"
            title="Call GrowRich"
          >
            <i class="fa-solid fa-phone"></i>
            <span>${CONTACT.phone}</span>
          </a>

        </div>

        <div
          class="topbar-socials"
          aria-label="Social links"
        >

          <a
            href="#"
            data-placeholder-link
            title="Instagram"
          >
            <i class="fa-brands fa-instagram"></i>
          </a>

          <a
            href="#"
            data-placeholder-link
            title="Facebook"
          >
            <i class="fa-brands fa-facebook-f"></i>
          </a>

          <a
            href="#"
            data-placeholder-link
            title="LinkedIn"
          >
            <i class="fa-brands fa-linkedin-in"></i>
          </a>

          <a
            href="https://wa.me/${CONTACT.whatsapp}"
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
          >
            <i class="fa-brands fa-whatsapp"></i>
          </a>

        </div>

      </div>
    </div>
  `;
}

/* =========================================================
   NAVBAR
========================================================= */

function renderNavbar() {
  return `
    <header
      class="navbar"
      id="navbar"
    >

      <div class="container nav-inner">

        <a
          class="brand"
          href="#/"
          aria-label="GrowRich home"
        >

          <span class="brand-mark">
            <i class="fa-solid fa-droplet"></i>
          </span>

          <span>
            <strong>
              GROW<span>RICH</span>
            </strong>

            <small>
              PRECISION IRRIGATION
            </small>
          </span>

        </a>

        <button
          class="menu-toggle"
          id="menu-toggle"
          type="button"
          aria-label="Open navigation"
          aria-expanded="false"
        >
          <i class="fa-solid fa-bars"></i>
        </button>

        <nav
          class="nav-links"
          id="nav-links"
        >

          <a
            href="#/"
            data-nav-link
          >
            Home
          </a>

          <a
            href="#/products"
            data-nav-link
          >
            Products
          </a>

          <a
            href="#/solutions"
            data-nav-link
          >
            Solutions
          </a>

          <a
            href="#/about"
            data-nav-link
          >
            About
          </a>

          <a
            href="#/contact"
            data-nav-link
          >
            Contact
          </a>

          <a
            class="btn btn-primary btn-small nav-quote"
            href="#/contact"
            data-nav-link
          >
            Get a Quote
            <i class="fa-solid fa-arrow-right"></i>
          </a>

        </nav>

      </div>

    </header>
  `;
}

/* =========================================================
   FLOATING ACTIONS
========================================================= */

function renderFloatingActions() {
  return `
    <div
      class="floating-actions"
      aria-label="Quick contact"
    >

      <a
        class="float-action whatsapp"
        href="https://wa.me/${CONTACT.whatsapp}"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
      >
        <i class="fa-brands fa-whatsapp"></i>
        <span>WhatsApp</span>
      </a>

      <a
        class="float-action call"
        href="tel:${CONTACT.phone.replaceAll(" ", "")}"
        title="Call GrowRich"
      >
        <i class="fa-solid fa-phone"></i>
        <span>Call us</span>
      </a>

    </div>
  `;
}

/* =========================================================
   FOOTER
========================================================= */

function renderFooter() {
  return `
    <footer class="footer">

      <div class="container footer-grid">

        <div class="footer-brand">

          <a
            class="brand brand-light"
            href="#/"
          >

            <span class="brand-mark">
              <i class="fa-solid fa-droplet"></i>
            </span>

            <span>
              <strong>
                GROW<span>RICH</span>
              </strong>

              <small>
                PRECISION IRRIGATION
              </small>
            </span>

          </a>

          <p>
            Grow more with less water through practical,
            precision-focused irrigation solutions.
          </p>

          <div class="footer-socials">

            <a
              href="#"
              data-placeholder-link
              aria-label="Instagram"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>

            <a
              href="#"
              data-placeholder-link
              aria-label="Facebook"
            >
              <i class="fa-brands fa-facebook-f"></i>
            </a>

            <a
              href="#"
              data-placeholder-link
              aria-label="LinkedIn"
            >
              <i class="fa-brands fa-linkedin-in"></i>
            </a>

            <a
              href="https://wa.me/${CONTACT.whatsapp}"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <i class="fa-brands fa-whatsapp"></i>
            </a>

          </div>

        </div>

        <div>

          <h4>Explore</h4>

          <a href="#/products">
            Products
          </a>

          <a href="#/solutions">
            Solutions
          </a>

          <a href="#/about">
            About GrowRich
          </a>

          <a href="#/contact">
            Contact
          </a>

        </div>

        <div>

          <h4>Product groups</h4>

          <a href="#/products?category=drip">
            Drip Irrigation
          </a>

          <a href="#/products?category=spray">
            Spray Irrigation
          </a>

          <a href="#/products?category=mainline">
            Main Line &amp; Pipes
          </a>

          <a href="#/products?category=other">
            Filters &amp; Agriculture Products
          </a>

        </div>

        <div>

          <h4>Contact</h4>

          <p>
            <i class="fa-solid fa-location-dot"></i>
            ${CONTACT.address}
          </p>

          <a
            href="tel:${CONTACT.phone.replaceAll(" ", "")}"
          >
            <i class="fa-solid fa-phone"></i>
            ${CONTACT.phone}
          </a>

          <a
            href="mailto:${CONTACT.email}"
          >
            <i class="fa-solid fa-envelope"></i>
            ${CONTACT.email}
          </a>

        </div>

      </div>

      <div class="container footer-bottom">

        <span>
          © 2026 GrowRich Industries. Demo SPA.
        </span>

        <span>
          Built for demonstration purposes.
        </span>

      </div>

    </footer>
  `;
}

/* =========================================================
   ROUTE RENDERING
========================================================= */

export function renderRoute(route) {
  const content = document.querySelector("#page-content");

  if (!content) return;

  closeMobileMenu();

  if (route.name === "product") {
    content.innerHTML = renderProductDetail(route.slug);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    updateActiveNav(route);
    return;
  }

  const renderers = {
    home: renderHome,
    products: renderProducts,
    solutions: renderSolutions,
    about: renderAbout,
    contact: renderContact
  };

  const renderer =
    renderers[route.name] || renderHome;

  content.innerHTML = renderer();

  bindPageEvents(route);
  updateActiveNav(route);

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

/* =========================================================
   HOME
========================================================= */

function renderHome() {
  const featured = featuredProductSlugs
    .map(getProductBySlug)
    .filter(Boolean);

  return `
    <div data-page="home">

      ${renderHero()}

      ${renderTrustStrip()}

      ${renderWhyGrowRich()}

      ${renderCategorySection()}

      ${renderFeaturedProducts(featured)}

      ${renderCropSolutions()}

      ${renderAutomation()}

      ${renderAboutPreview()}

      ${renderQuoteCTA()}

    </div>
  `;
}

/* =========================================================
   HERO
========================================================= */

function renderHero() {
  return `
    <section class="hero">

      <div class="hero-image"></div>
      <div class="hero-overlay"></div>

      <div class="container hero-content">

        <div class="hero-copy reveal">

          <span class="eyebrow eyebrow-light">
            <i class="fa-solid fa-leaf"></i>
            Precision irrigation for modern farming
          </span>

          <h1>
            Grow more.<br>
            <span>Waste less water.</span>
          </h1>

          <p>
            Complete irrigation solutions built around
            efficient water delivery, reliable components
            and smarter agricultural practices.
          </p>

          <div class="hero-actions">

            <a
              class="btn btn-primary"
              href="#/products"
            >
              Explore Products
              <i class="fa-solid fa-arrow-right"></i>
            </a>

            <a
              class="btn btn-ghost"
              href="#/contact"
            >
              Talk to GrowRich
            </a>

          </div>

        </div>

        <div class="hero-stat-card reveal">

          <div class="stat-icon">
            <i class="fa-solid fa-droplet"></i>
          </div>

          <strong>Precision</strong>

          <span>
            Water where crops need it.
          </span>

        </div>

      </div>

      <a
        class="scroll-cue"
        href="#why-growrich"
        aria-label="Scroll down"
      >
        <i class="fa-solid fa-chevron-down"></i>
      </a>

    </section>
  `;
}

/* =========================================================
   TRUST STRIP
========================================================= */

function renderTrustStrip() {
  return `
    <section class="trust-strip">

      <div class="container trust-grid">

        <div>
          <i class="fa-solid fa-droplet"></i>
          <span>Efficient water delivery</span>
        </div>

        <div>
          <i class="fa-solid fa-gears"></i>
          <span>Complete irrigation range</span>
        </div>

        <div>
          <i class="fa-solid fa-seedling"></i>
          <span>Crop-focused solutions</span>
        </div>

        <div>
          <i class="fa-solid fa-headset"></i>
          <span>On-ground support</span>
        </div>

      </div>

    </section>
  `;
}

/* =========================================================
   WHY GROWRICH
========================================================= */

function renderWhyGrowRich() {
  const items = [
    [
      "fa-bullseye",
      "Precision-focused",
      "Uniform water delivery with components designed around efficient irrigation."
    ],
    [
      "fa-layer-group",
      "Complete range",
      "From drip and spray products to pipes, fittings, filtration and accessories."
    ],
    [
      "fa-microchip",
      "Smart automation",
      "A foundation for multi-zone control, sensors and future connected irrigation."
    ],
    [
      "fa-handshake",
      "Field support",
      "A practical approach to installation, technical help and crop-specific setup."
    ]
  ];

  return `
    <section
      class="section section-light"
      id="why-growrich"
    >

      <div class="container">

        <div class="section-heading split-heading">

          <div>

            <span class="eyebrow">
              Why GrowRich
            </span>

            <h2>
              Designed around the
              <span>real needs of farming.</span>
            </h2>

          </div>

          <p>
            GrowRich combines irrigation hardware,
            system thinking and field support into
            one clear product experience.
          </p>

        </div>

        <div class="feature-grid">

          ${items
            .map(
              ([icon, title, text]) => `
                <article class="feature-card">

                  <div class="icon-box">
                    <i class="fa-solid ${icon}"></i>
                  </div>

                  <h3>${title}</h3>

                  <p>${text}</p>

                </article>
              `
            )
            .join("")}

        </div>

      </div>

    </section>
  `;
}

/* =========================================================
   PRODUCT CATEGORY SECTION
========================================================= */

function renderCategorySection() {
  return `
    <section
      class="section section-tint"
      id="product-categories"
    >

      <div class="container">

        <div class="section-heading centered">

          <span class="eyebrow">
            Product ecosystem
          </span>

          <h2>
            Everything you need to
            <span>move, filter and deliver water.</span>
          </h2>

          <p>
            Explore the irrigation catalogue by system
            category instead of searching through one
            long product list.
          </p>

        </div>

        <div class="category-grid">

          ${categories
            .map(
              (category) => `
                <article
                  class="category-card"
                  data-category-card="${category.id}"
                >

                  <div class="category-number">
                    ${category.eyebrow}
                  </div>

                  <div class="category-icon">
                    <i class="fa-solid ${category.icon}"></i>
                  </div>

                  <h3>${category.name}</h3>

                  <p>${category.description}</p>

                  <a
                    href="#/products?category=${category.id}"
                    class="text-link"
                  >
                    Explore category
                    <i class="fa-solid fa-arrow-right"></i>
                  </a>

                </article>
              `
            )
            .join("")}

        </div>

      </div>

    </section>
  `;
}

/* =========================================================
   FEATURED PRODUCTS
========================================================= */

function renderFeaturedProducts(featured) {
  return `
    <section class="section section-light">

      <div class="container">

        <div class="section-heading split-heading">

          <div>

            <span class="eyebrow">
              Featured catalogue
            </span>

            <h2>
              Start with the
              <span>core products.</span>
            </h2>

          </div>

          <a
            class="btn btn-outline btn-small"
            href="#/products"
          >
            View all products
            <i class="fa-solid fa-arrow-right"></i>
          </a>

        </div>

        <div class="product-grid product-grid-featured">

          ${featured
            .map(renderProductCard)
            .join("")}

        </div>

      </div>

    </section>
  `;
}

/* =========================================================
   PRODUCT CARD
========================================================= */

function renderProductCard(item) {
  if (!item) return "";

  return `
    <article class="product-card">

      <a
        class="product-image-wrap"
        href="#/product/${item.slug}"
        aria-label="View ${escapeHTML(item.name)}"
      >

        <img
          src="${item.image}"
          alt="${escapeHTML(item.name)}"
          loading="lazy"
        />

        <span class="product-category">
          ${escapeHTML(categoryName(item.category))}
        </span>

      </a>

      <div class="product-card-body">

        <span class="product-subcategory">
          ${escapeHTML(item.subcategory)}
        </span>

        <h3>
          ${escapeHTML(item.name)}
        </h3>

        <p>
          ${escapeHTML(item.shortDescription)}
        </p>

        <a
          class="text-link"
          href="#/product/${item.slug}"
        >
          View details
          <i class="fa-solid fa-arrow-right"></i>
        </a>

      </div>

    </article>
  `;
}

/* =========================================================
   HOME CROP SOLUTIONS
========================================================= */

function renderCropSolutions() {
  const homeCrops = cropSolutions.slice(0, 6);

  return `
    <section class="section section-dark">

      <div class="container">

        <div class="section-heading centered">

          <span class="eyebrow eyebrow-light">
            Crop-centric support
          </span>

          <h2>
            Solutions that follow the
            <span>crop.</span>
          </h2>

          <p>
            Explore crop-specific irrigation,
            fertigation and water-management
            solutions designed for different
            farming requirements.
          </p>

        </div>

        <div class="crop-grid">

          ${homeCrops
            .map(
              (crop) => `
                <article class="crop-card">

                  <div class="crop-image-home">

                    <img
                      src="${crop.image}"
                      alt="${escapeHTML(crop.name)} crop"
                      loading="lazy"
                    />

                  </div>

                  <div class="crop-card-content">

                    <span class="crop-home-category">
                      ${escapeHTML(crop.category)}
                    </span>

                    <h3>
                      ${escapeHTML(crop.name)}
                    </h3>

                    <p>
                      ${escapeHTML(crop.shortDescription)}
                    </p>

                    <button
                      type="button"
                      class="text-link crop-home-view"
                      data-home-crop-id="${crop.id}"
                    >
                      View solution
                      <i class="fa-solid fa-arrow-right"></i>
                    </button>

                  </div>

                </article>
              `
            )
            .join("")}

        </div>

        <div
          style="
            margin-top:40px;
            text-align:center;
          "
        >

          <a
            class="btn btn-outline"
            href="#/solutions"
          >
            View All 40 Crop Solutions
            <i class="fa-solid fa-arrow-right"></i>
          </a>

        </div>

      </div>

    </section>
  `;
}

/* =========================================================
   PRODUCTS PAGE
========================================================= */

function renderProducts() {
  return `
    <div data-page="products">

      ${renderPageHero(
        "Products",
        "Explore the irrigation catalogue by category, search term and application.",
        "fa-boxes-stacked"
      )}

      <section class="section section-light products-page">

        <div class="container">

          <div class="catalog-toolbar">

            <div class="search-box">

              <i class="fa-solid fa-magnifying-glass"></i>

              <input
                id="product-search"
                type="search"
                placeholder="Search products, fittings, pipes, filters..."
                autocomplete="off"
              />

            </div>

            <div
              class="category-filter"
              id="category-filter"
            >

              <button
                class="filter-btn active"
                type="button"
                data-filter="all"
              >
                All
              </button>

              ${categories
                .map(
                  (category) => `
                    <button
                      class="filter-btn"
                      type="button"
                      data-filter="${category.id}"
                    >
                      ${escapeHTML(category.name)}
                    </button>
                  `
                )
                .join("")}

            </div>

          </div>

          <div class="catalog-summary">

            <span id="catalog-count">
              ${products.length} products in demo catalogue
            </span>

            <button
              class="clear-filter"
              id="clear-product-filter"
              type="button"
            >
              Reset filters
            </button>

          </div>

          <div
            class="product-grid"
            id="product-results"
          >
            ${products.map(renderProductCard).join("")}
          </div>

          <div
            class="empty-state"
            id="empty-products"
            hidden
          >

            <i class="fa-solid fa-magnifying-glass"></i>

            <h3>
              No products found
            </h3>

            <p>
              Try another search term or reset
              the category filter.
            </p>

          </div>

        </div>

      </section>

    </div>
  `;
}

/* =========================================================
   PRODUCT DETAIL
========================================================= */

function renderProductDetail(slug) {
  const item = getProductBySlug(slug);

  if (!item) {
    return `
      <section class="section section-light not-found">

        <div class="container centered">

          <span class="eyebrow">
            Product not found
          </span>

          <h1>
            We couldn't find that product.
          </h1>

          <a
            class="btn btn-primary"
            href="#/products"
          >
            Back to products
          </a>

        </div>

      </section>
    `;
  }

  const related = products
    .filter(
      (product) =>
        product.category === item.category &&
        product.slug !== item.slug
    )
    .slice(0, 3);

  const whatsappMessage = encodeURIComponent(
    `Hello GrowRich, I am interested in ${item.name}.`
  );

  return `
    <div data-page="product-detail">

      <section class="detail-hero">

        <div class="container">

          <a
            class="back-link"
            href="#/products"
          >
            <i class="fa-solid fa-arrow-left"></i>
            Back to products
          </a>

          <div class="detail-layout">

            <div class="detail-image-card">

              <img
                src="${item.image}"
                alt="${escapeHTML(item.name)}"
              />

              <span>
                ${escapeHTML(categoryName(item.category))}
              </span>

            </div>

            <div class="detail-copy">

              <span class="eyebrow">
                ${escapeHTML(item.subcategory)}
              </span>

              <h1>
                ${escapeHTML(item.name)}
              </h1>

              <p class="lead">
                ${escapeHTML(item.description)}
              </p>

              <div class="detail-actions">

                <a
                  class="btn btn-primary"
                  href="#/contact"
                >
                  Request a Quote
                  <i class="fa-solid fa-arrow-right"></i>
                </a>

                <a
                  class="btn btn-outline"
                  href="https://wa.me/${CONTACT.whatsapp}?text=${whatsappMessage}"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa-brands fa-whatsapp"></i>
                  WhatsApp
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

      <section class="section section-light">

        <div class="container detail-content-grid">

          <div>

            <span class="eyebrow">
              Product features
            </span>

            <h2>
              Built for practical irrigation.
            </h2>

            <div class="check-list detail-list">

              ${
                item.features?.length
                  ? item.features
                      .map(
                        (feature) => `
                          <div>
                            <i class="fa-solid fa-circle-check"></i>
                            <span>${escapeHTML(feature)}</span>
                          </div>
                        `
                      )
                      .join("")
                  : `
                      <div>
                        <i class="fa-solid fa-circle-check"></i>
                        <span>
                          Catalogue-specific features available on request.
                        </span>
                      </div>
                    `
              }

            </div>

          </div>

          <div>

            <span class="eyebrow">
              Applications
            </span>

            <h2>
              Where it fits.
            </h2>

            <div class="application-pills">

              ${
                item.applications?.length
                  ? item.applications
                      .map(
                        (application) =>
                          `<span>${escapeHTML(application)}</span>`
                      )
                      .join("")
                  : "<span>Agricultural irrigation</span>"
              }

            </div>

          </div>

        </div>

      </section>

      ${
        Object.keys(item.specifications || {}).length
          ? `
            <section class="section section-tint">

              <div class="container">

                <div class="section-heading">

                  <span class="eyebrow">
                    Technical information
                  </span>

                  <h2>
                    Product
                    <span>specifications.</span>
                  </h2>

                  <p>
                    Confirm final specifications
                    before production publishing.
                  </p>

                </div>

                <div class="spec-table">

                  ${Object.entries(item.specifications)
                    .map(
                      ([key, value]) => `
                        <div class="spec-row">

                          <strong>
                            ${escapeHTML(key)}
                          </strong>

                          <span>
                            ${escapeHTML(value)}
                          </span>

                        </div>
                      `
                    )
                    .join("")}

                </div>

              </div>

            </section>
          `
          : ""
      }

      ${
        related.length
          ? `
            <section class="section section-light">

              <div class="container">

                <div class="section-heading split-heading">

                  <div>

                    <span class="eyebrow">
                      Related products
                    </span>

                    <h2>
                      More from
                      <span>
                        ${escapeHTML(
                          categoryName(item.category)
                        )}.
                      </span>
                    </h2>

                  </div>

                  <a
                    class="btn btn-outline btn-small"
                    href="#/products"
                  >
                    Browse catalogue
                  </a>

                </div>

                <div class="product-grid">

                  ${related
                    .map(renderProductCard)
                    .join("")}

                </div>

              </div>

            </section>
          `
          : ""
      }

      ${renderQuoteCTA()}

    </div>
  `;
}

/* =========================================================
   SOLUTIONS PAGE
========================================================= */

function renderSolutions() {
  return `
    <div data-page="solutions">

      ${renderPageHero(
        "Crop Solutions",
        "Explore irrigation, fertigation and water-management solutions for different crops.",
        "fa-seedling"
      )}

      <section
        class="section section-light crop-solutions-page"
      >

        <div class="container">

          <div class="section-heading centered">

            <span class="eyebrow">
              GROWRICH CROP SOLUTIONS
            </span>

            <h2>
              Smart Irrigation Solutions
              <span>for Every Crop</span>
            </h2>

            <p>
              Search for your crop and explore
              crop-specific irrigation,
              fertigation and water-management
              information.
            </p>

          </div>

          <div class="crop-search-area">

            <div class="crop-search">

              <i class="fa-solid fa-magnifying-glass"></i>

              <input
                id="cropSearchInput"
                type="search"
                placeholder="Search your crop... e.g. Tomato, Mango, Rice"
                value="${escapeHTML(cropSearchText)}"
                autocomplete="off"
              />

              <button
                id="clearCropSearch"
                type="button"
                aria-label="Clear crop search"
              >
                ×
              </button>

            </div>

          </div>

          <div
            class="crop-category-filters"
            id="cropCategoryFilters"
          >
            ${getCropCategoryButtons()}
          </div>

          <div class="crop-results-header">

            <div>

              <span class="eyebrow">
                Crop catalogue
              </span>

              <h2>
                Available Crop Solutions
              </h2>

            </div>

            <span id="cropCount">
              ${cropSolutions.length} Crops
            </span>

          </div>

          <div
            class="crop-solutions-grid"
            id="cropSolutionsGrid"
          >
            ${getCropCards()}
          </div>

          <div
            class="crop-empty-state"
            id="cropEmptyState"
            style="display:none;"
          >

            <div class="empty-icon">
              🌱
            </div>

            <h3>
              No Crop Found
            </h3>

            <p>
              Try searching with another crop name
              or choose another category.
            </p>

            <button
              type="button"
              id="showAllCrops"
              class="btn btn-primary"
            >
              View All Crops
            </button>

          </div>

        </div>

      </section>

      <section class="section section-dark">

        <div class="container two-column">

          <div>

            <span class="eyebrow eyebrow-light">
              System thinking
            </span>

            <h2>
              From water source to crop root.
            </h2>

            <p>
              GrowRich irrigation solutions connect
              water source, filtration, main line,
              distribution and crop-specific delivery.
            </p>

          </div>

          <div class="solution-flow">

            <span>Source</span>

            <i class="fa-solid fa-arrow-right"></i>

            <span>Filtration</span>

            <i class="fa-solid fa-arrow-right"></i>

            <span>Main line</span>

            <i class="fa-solid fa-arrow-right"></i>

            <span>Distribution</span>

            <i class="fa-solid fa-arrow-right"></i>

            <span>Crop</span>

          </div>

        </div>

      </section>

      ${renderCropDetailModal()}

    </div>
  `;
}

/* =========================================================
   CROP CATEGORY BUTTONS
========================================================= */

function getCropCategoryButtons() {
  const cropCategories = [
    "All",
    "Cereals",
    "Vegetables",
    "Fruits",
    "Commercial Crops",
    "Spices",
    "Oilseeds"
  ];

  return cropCategories
    .map((category) => {
      const active =
        category === selectedCropCategory
          ? "active"
          : "";

      return `
        <button
          type="button"
          class="crop-category-btn ${active}"
          data-crop-category="${escapeHTML(category)}"
        >
          ${escapeHTML(category)}
        </button>
      `;
    })
    .join("");
}

/* =========================================================
   FILTER CROP DATA
========================================================= */

function getFilteredCrops() {
  const search = cropSearchText
    .toLowerCase()
    .trim();

  return cropSolutions.filter((crop) => {
    const categoryMatch =
      selectedCropCategory === "All" ||
      crop.category === selectedCropCategory;

    const searchMatch =
      !search ||
      crop.name.toLowerCase().includes(search) ||
      crop.category.toLowerCase().includes(search) ||
      crop.solution.toLowerCase().includes(search) ||
      crop.shortDescription.toLowerCase().includes(search);

    return categoryMatch && searchMatch;
  });
}

/* =========================================================
   CROP CARDS
========================================================= */

function getCropCards() {
  const filteredCrops = getFilteredCrops();

  if (!filteredCrops.length) {
    return "";
  }

  return filteredCrops
    .map(
      (crop) => `
        <article
          class="crop-solution-card"
          data-crop-id="${crop.id}"
        >

          <div class="crop-card-image">

            <img
              src="${crop.image}"
              alt="${escapeHTML(crop.name)} crop"
              loading="lazy"
            />

            <span class="crop-card-category">
              ${escapeHTML(crop.category)}
            </span>

          </div>

          <div class="crop-card-content">

            <h3>
              ${escapeHTML(crop.name)}
            </h3>

            <p>
              ${escapeHTML(crop.shortDescription)}
            </p>

            <div class="crop-card-solution">

              <strong>
                Recommended Solution
              </strong>

              <span>
                ${escapeHTML(crop.solution)}
              </span>

            </div>

            <button
              type="button"
              class="view-crop-solution"
              data-crop-id="${crop.id}"
            >
              View Full Solution
              <span>→</span>
            </button>

          </div>

        </article>
      `
    )
    .join("");
}

/* =========================================================
   UPDATE CROP RESULTS
========================================================= */

function updateCropResults() {
  const grid = document.getElementById(
    "cropSolutionsGrid"
  );

  const count = document.getElementById(
    "cropCount"
  );

  const empty = document.getElementById(
    "cropEmptyState"
  );

  if (!grid) return;

  const filtered = getFilteredCrops();

  grid.innerHTML = getCropCards();

  if (count) {
    count.textContent =
      `${filtered.length} ${
        filtered.length === 1
          ? "Crop"
          : "Crops"
      }`;
  }

  if (empty) {
    empty.style.display =
      filtered.length === 0
        ? "block"
        : "none";
  }

  attachCropButtons();
}

/* =========================================================
   CROP DETAIL MODAL
========================================================= */

function renderCropDetailModal() {
  return `
    <div
      class="crop-detail-modal"
      id="cropDetailModal"
      aria-hidden="true"
    >

      <div
        class="crop-detail-overlay"
        id="cropDetailOverlay"
      ></div>

      <div
        class="crop-detail-box"
        role="dialog"
        aria-modal="true"
        aria-labelledby="detailCropName"
      >

        <button
          type="button"
          class="crop-detail-close"
          id="cropDetailClose"
          aria-label="Close crop details"
        >
          ×
        </button>

        <div class="crop-detail-image">

          <img
            id="detailCropImage"
            src=""
            alt=""
          />

        </div>

        <div class="crop-detail-content">

          <span
            id="detailCropCategory"
            class="detail-category"
          ></span>

          <h2 id="detailCropName"></h2>

          <p
            id="detailCropDescription"
            class="detail-description"
          ></p>

          <div class="main-solution-box">

            <span>
              GROWRICH RECOMMENDED SOLUTION
            </span>

            <h3 id="detailCropSolution"></h3>

          </div>

          <div class="detail-information-grid">

            <div class="detail-information-card">

              <div class="detail-icon">
                💧
              </div>

              <h4>
                Irrigation
              </h4>

              <p id="detailCropIrrigation"></p>

            </div>

            <div class="detail-information-card">

              <div class="detail-icon">
                🌱
              </div>

              <h4>
                Fertigation
              </h4>

              <p id="detailCropFertigation"></p>

            </div>

            <div class="detail-information-card">

              <div class="detail-icon">
                💦
              </div>

              <h4>
                Water Management
              </h4>

              <p id="detailCropWater"></p>

            </div>

            <div class="detail-information-card">

              <div class="detail-icon">
                🌾
              </div>

              <h4>
                Crop Benefits
              </h4>

              <ul id="detailCropBenefits"></ul>

            </div>

          </div>

          <div class="growth-stage-box">

            <h3>
              Crop Growth Stages
            </h3>

            <p id="detailCropStages"></p>

          </div>

          <div class="crop-detail-actions">

            <button
              type="button"
              class="btn btn-primary"
              id="cropEnquiryButton"
            >
              Get Crop Solution
              <i class="fa-solid fa-arrow-right"></i>
            </button>

          </div>

        </div>

      </div>

    </div>
  `;
}

/* =========================================================
   OPEN CROP DETAIL
========================================================= */

function openCropDetail(cropId) {
  const crop = cropSolutions.find(
    (item) =>
      String(item.id) === String(cropId)
  );

  if (!crop) return;

  const image = document.getElementById(
    "detailCropImage"
  );

  const category = document.getElementById(
    "detailCropCategory"
  );

  const name = document.getElementById(
    "detailCropName"
  );

  const description = document.getElementById(
    "detailCropDescription"
  );

  const solution = document.getElementById(
    "detailCropSolution"
  );

  const irrigation = document.getElementById(
    "detailCropIrrigation"
  );

  const fertigation = document.getElementById(
    "detailCropFertigation"
  );

  const water = document.getElementById(
    "detailCropWater"
  );

  const stages = document.getElementById(
    "detailCropStages"
  );

  const benefits = document.getElementById(
    "detailCropBenefits"
  );

  if (image) {
    image.src = crop.image;
    image.alt = `${crop.name} crop`;
  }

  if (category) {
    category.textContent = crop.category;
  }

  if (name) {
    name.textContent = crop.name;
  }

  if (description) {
    description.textContent =
      crop.shortDescription;
  }

  if (solution) {
    solution.textContent = crop.solution;
  }

  if (irrigation) {
    irrigation.textContent = crop.irrigation;
  }

  if (fertigation) {
    fertigation.textContent = crop.fertigation;
  }

  if (water) {
    water.textContent =
      crop.waterManagement;
  }

  if (stages) {
    stages.textContent =
      crop.growthStages;
  }

  if (benefits) {
    benefits.innerHTML =
      (crop.benefits || [])
        .map(
          (benefit) =>
            `<li>${escapeHTML(benefit)}</li>`
        )
        .join("");
  }

  const modal = document.getElementById(
    "cropDetailModal"
  );

  if (!modal) return;

  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");

  document.body.classList.add(
    "crop-modal-open"
  );
}

/* =========================================================
   CLOSE CROP DETAIL
========================================================= */

function closeCropDetail() {
  const modal = document.getElementById(
    "cropDetailModal"
  );

  if (!modal) return;

  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");

  document.body.classList.remove(
    "crop-modal-open"
  );
}

/* =========================================================
   CROP BUTTON EVENTS
========================================================= */

function attachCropButtons() {
  document
    .querySelectorAll(".view-crop-solution")
    .forEach((button) => {
      button.addEventListener(
        "click",
        () => {
          openCropDetail(
            button.dataset.cropId
          );
        }
      );
    });

  document
    .querySelectorAll(".crop-home-view")
    .forEach((button) => {
      button.addEventListener(
        "click",
        () => {
          openCropDetail(
            button.dataset.homeCropId
          );
        }
      );
    });
}

/* =========================================================
   INITIALIZE SOLUTIONS PAGE
========================================================= */

function initSolutions() {
  const searchInput = document.getElementById(
    "cropSearchInput"
  );

  if (!searchInput) return;

  searchInput.addEventListener(
    "input",
    (event) => {
      cropSearchText =
        event.target.value;

      updateCropResults();
    }
  );

  const clearButton = document.getElementById(
    "clearCropSearch"
  );

  clearButton?.addEventListener(
    "click",
    () => {
      searchInput.value = "";
      cropSearchText = "";

      updateCropResults();
      searchInput.focus();
    }
  );

  document
    .querySelectorAll(".crop-category-btn")
    .forEach((button) => {
      button.addEventListener(
        "click",
        () => {
          selectedCropCategory =
            button.dataset.cropCategory;

          document
            .querySelectorAll(
              ".crop-category-btn"
            )
            .forEach((btn) => {
              btn.classList.toggle(
                "active",
                btn === button
              );
            });

          updateCropResults();
        }
      );
    });

  document
    .getElementById("cropDetailClose")
    ?.addEventListener(
      "click",
      closeCropDetail
    );

  document
    .getElementById("cropDetailOverlay")
    ?.addEventListener(
      "click",
      closeCropDetail
    );

  document
    .getElementById("showAllCrops")
    ?.addEventListener(
      "click",
      () => {
        selectedCropCategory = "All";
        cropSearchText = "";
        searchInput.value = "";

        document
          .querySelectorAll(
            ".crop-category-btn"
          )
          .forEach((btn) => {
            btn.classList.toggle(
              "active",
              btn.dataset.cropCategory === "All"
            );
          });

        updateCropResults();
      }
    );

  document
    .getElementById("cropEnquiryButton")
    ?.addEventListener(
      "click",
      handleCropEnquiry
    );

  attachCropButtons();
}

/* =========================================================
   CROP ENQUIRY
========================================================= */

function handleCropEnquiry() {
  const cropName =
    document.getElementById(
      "detailCropName"
    )?.textContent || "crop";

  closeCropDetail();

  window.location.hash = "#/contact";

  setTimeout(() => {
    const message =
      document.querySelector(
        '#quote-form textarea[name="message"]'
      );

    if (message) {
      message.value =
        `I need an irrigation solution for ${cropName}.`;
    }
  }, 100);
}

/* =========================================================
   HOME CROP MODAL
========================================================= */

function initCropModalOnly() {
  const homeButtons =
    document.querySelectorAll(
      ".crop-home-view"
    );

  if (!homeButtons.length) return;

  if (
    !document.getElementById(
      "cropDetailModal"
    )
  ) {
    document.body.insertAdjacentHTML(
      "beforeend",
      renderCropDetailModal()
    );
  }

  document
    .querySelectorAll(".crop-home-view")
    .forEach((button) => {
      button.addEventListener(
        "click",
        () => {
          openCropDetail(
            button.dataset.homeCropId
          );
        }
      );
    });

  document
    .getElementById("cropDetailClose")
    ?.addEventListener(
      "click",
      closeCropDetail
    );

  document
    .getElementById("cropDetailOverlay")
    ?.addEventListener(
      "click",
      closeCropDetail
    );

  document
    .getElementById("cropEnquiryButton")
    ?.addEventListener(
      "click",
      handleCropEnquiry
    );
}

/* =========================================================
   AUTOMATION
========================================================= */

function renderAutomation() {
  return `
    <section class="section automation-section">

      <div class="container automation-layout">

        <div>

          <span class="eyebrow">
            Smart irrigation
          </span>

          <h2>
            Build from reliable hardware today.
            <span>Automate tomorrow.</span>
          </h2>

          <p>
            GrowRich's existing positioning includes
            automatic control gears, multi-zone
            programming and sensor integration.
          </p>

          <div class="check-list">

            <div>
              <i class="fa-solid fa-circle-check"></i>
              <span>
                Multi-zone irrigation concept
              </span>
            </div>

            <div>
              <i class="fa-solid fa-circle-check"></i>
              <span>
                Sensor-ready architecture
              </span>
            </div>

            <div>
              <i class="fa-solid fa-circle-check"></i>
              <span>
                Scheduled irrigation workflows
              </span>
            </div>

          </div>

          <a
            class="btn btn-primary"
            href="#/contact"
          >
            Discuss an irrigation setup
          </a>

        </div>

        <div class="automation-diagram">

          <div class="diagram-node source">

            <i class="fa-solid fa-faucet-drip"></i>

            <span>
              Water source
            </span>

          </div>

          <div class="diagram-line line-one"></div>

          <div class="diagram-node controller">

            <i class="fa-solid fa-microchip"></i>

            <span>
              Controller
            </span>

          </div>

          <div class="diagram-line line-two"></div>

          <div class="zones">

            <div class="diagram-node">

              <i class="fa-solid fa-droplet"></i>

              <span>
                Zone 01
              </span>

            </div>

            <div class="diagram-node">

              <i class="fa-solid fa-spray-can-sparkles"></i>

              <span>
                Zone 02
              </span>

            </div>

            <div class="diagram-node">

              <i class="fa-solid fa-seedling"></i>

              <span>
                Zone 03
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  `;
}

/* =========================================================
   ABOUT PREVIEW
========================================================= */

function renderAboutPreview() {
  return `
    <section class="section about-preview">

      <div class="container about-layout">

        <div class="about-image">

          <img
            src="assets/images/about/about-placeholder.svg"
            alt="Agricultural irrigation field"
            loading="lazy"
          />

          <div class="image-badge">

            <strong>
              Grow More
            </strong>

            <span>
              With Less Water
            </span>

          </div>

        </div>

        <div class="about-copy">

          <span class="eyebrow">
            About GrowRich
          </span>

          <h2>
            Precision irrigation with an
            <span>Indian farming focus.</span>
          </h2>

          <p>
            GrowRich Industries is positioned around
            precision irrigation for Indian farms,
            with a product range spanning drip,
            sprinkler, fogging, deep irrigation,
            automation and irrigation spares.
          </p>

          <p>
            The revamp turns that story into a
            product-first experience so a visitor
            can understand the company, explore
            products and move naturally toward
            an enquiry.
          </p>

          <a
            class="text-link large-link"
            href="#/about"
          >
            Discover GrowRich
            <i class="fa-solid fa-arrow-right"></i>
          </a>

        </div>

      </div>

    </section>
  `;
}

/* =========================================================
   QUOTE CTA
========================================================= */

function renderQuoteCTA() {
  return `
    <section class="cta-section">

      <div class="container cta-inner">

        <div>

          <span class="eyebrow eyebrow-light">
            Let's plan your irrigation setup
          </span>

          <h2>
            Need the right irrigation solution?
          </h2>

          <p>
            Tell us about your crop, application
            and requirement.
          </p>

        </div>

        <a
          class="btn btn-light"
          href="#/contact"
        >
          Request a Quote
          <i class="fa-solid fa-arrow-right"></i>
        </a>

      </div>

    </section>
  `;
}

/* =========================================================
   ABOUT PAGE
========================================================= */

function renderAbout() {
  const flagshipSolutions = [
    [
      "fa-droplet",
      "Drip irrigation",
      "Surface/subsurface systems, mini-emitters, inline drippers and valves."
    ],
    [
      "fa-spray-can-sparkles",
      "Sprinkler systems",
      "Sprinkler and rain-pipe concepts for medium-to-large fields."
    ],
    [
      "fa-wind",
      "Fogging",
      "Humidity and cooling support for protected cultivation."
    ],
    [
      "fa-tree",
      "Deep irrigation",
      "Solutions positioned for orchards and plantation crops."
    ],
    [
      "fa-microchip",
      "Automatic control",
      "A foundation for scheduled, multi-zone irrigation."
    ],
    [
      "fa-screwdriver-wrench",
      "Spares & accessories",
      "Supporting components to build, expand and maintain systems."
    ]
  ];

  return `
    <div data-page="about">

      ${renderPageHero(
        "About GrowRich",
        "A clearer digital story for a precision-irrigation company focused on Indian agriculture.",
        "fa-building"
      )}

      <section class="section section-light">

        <div class="container about-layout">

          <div class="about-image large">

            <img
              src="assets/images/about/about-placeholder.svg"
              alt="GrowRich agriculture visual"
            />

          </div>

          <div class="about-copy">

            <span class="eyebrow">
              Our positioning
            </span>

            <h2>
              Grow more with
              <span>less water.</span>
            </h2>

            <p>
              GrowRich Industries describes itself
              as a precision-irrigation business
              serving Indian farms with drip,
              sprinkler, fogging, deep irrigation,
              automation and spares.
            </p>

            <p>
              The revamped SPA organizes this
              information around three questions:
              what GrowRich does, what products
              it offers and how a visitor can
              start a conversation.
            </p>

            <div class="mission-grid">

              <div>

                <strong>
                  Vision
                </strong>

                <p>
                  Lead sustainable irrigation through
                  resource-smart, yield-focused farming.
                </p>

              </div>

              <div>

                <strong>
                  Mission
                </strong>

                <p>
                  Enable farmers to adopt complete,
                  water-efficient irrigation systems
                  with confidence.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      <section class="section section-tint">

        <div class="container">

          <div class="section-heading centered">

            <span class="eyebrow">
              Flagship solutions
            </span>

            <h2>
              A portfolio built around
              <span>irrigation outcomes.</span>
            </h2>

          </div>

          <div class="feature-grid">

            ${flagshipSolutions
              .map(
                ([icon, title, text]) => `
                  <article class="feature-card">

                    <div class="icon-box">
                      <i class="fa-solid ${icon}"></i>
                    </div>

                    <h3>
                      ${title}
                    </h3>

                    <p>
                      ${text}
                    </p>

                  </article>
                `
              )
              .join("")}

          </div>

        </div>

      </section>

    </div>
  `;
}

/* =========================================================
   CONTACT PAGE
========================================================= */

function renderContact() {
  return `
    <div data-page="contact">

      ${renderPageHero(
        "Contact",
        "Tell us what you are growing and what you need to irrigate.",
        "fa-comments"
      )}

      <section class="section section-light">

        <div class="container contact-layout">

          <div class="contact-card">

            <span class="eyebrow">
              Talk to GrowRich
            </span>

            <h2>
              Let's plan the next step.
            </h2>

            <p>
              Use the demonstration form or
              contact GrowRich directly.
            </p>

            <div class="contact-list">

              <a
                href="tel:${CONTACT.phone.replaceAll(" ", "")}"
              >

                <i class="fa-solid fa-phone"></i>

                <span>

                  <small>
                    Phone
                  </small>

                  ${CONTACT.phone}

                </span>

              </a>

              <a
                href="mailto:${CONTACT.email}"
              >

                <i class="fa-solid fa-envelope"></i>

                <span>

                  <small>
                    Email
                  </small>

                  ${CONTACT.email}

                </span>

              </a>

              <a
                href="https://wa.me/${CONTACT.whatsapp}"
                target="_blank"
                rel="noopener noreferrer"
              >

                <i class="fa-brands fa-whatsapp"></i>

                <span>

                  <small>
                    WhatsApp
                  </small>

                  Start a chat

                </span>

              </a>

              <div>

                <i class="fa-solid fa-location-dot"></i>

                <span>

                  <small>
                    Address
                  </small>

                  ${CONTACT.address}

                </span>

              </div>

            </div>

          </div>

          <form
            class="contact-form"
            id="quote-form"
          >

            <div class="form-heading">

              <span class="eyebrow">
                Request a quote
              </span>

              <h2>
                Tell us about your requirement.
              </h2>

            </div>

            <div class="form-grid">

              <label>
                Name

                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Your name"
                />

              </label>

              <label>
                Contact

                <input
                  required
                  name="contact"
                  type="tel"
                  placeholder="Phone number"
                />

              </label>

              <label>
                Email

                <input
                  required
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                />

              </label>

              <label>
                Requirement

                <select name="requirement">

                  <option value="Drip irrigation">
                    Drip irrigation
                  </option>

                  <option value="Spray irrigation">
                    Spray irrigation
                  </option>

                  <option value="Main line & pipes">
                    Main line & pipes
                  </option>

                  <option value="Fittings & valves">
                    Fittings & valves
                  </option>

                  <option value="Filters">
                    Filters
                  </option>

                  <option value="Other">
                    Other
                  </option>

                </select>

              </label>

              <label class="full">

                Message

                <textarea
                  required
                  name="message"
                  rows="5"
                  placeholder="Tell us about your crop, field or product requirement"
                ></textarea>

              </label>

            </div>

            <div
              class="enquiry-actions"
              aria-label="Choose how to send your enquiry"
            >

              <button
                class="btn btn-whatsapp"
                type="button"
                id="send-whatsapp"
              >
                <i class="fa-brands fa-whatsapp"></i>
                Send via WhatsApp
              </button>

              <button
                class="btn btn-email"
                type="button"
                id="send-email"
              >
                <i class="fa-solid fa-envelope"></i>
                Send via Email
              </button>

            </div>

            <p class="form-note">
              Choose WhatsApp or Email to send
              the enquiry. No backend is required
              for this demonstration.
            </p>

          </form>

        </div>

      </section>

    </div>
  `;
}

/* =========================================================
   PAGE HERO
========================================================= */

function renderPageHero(title, description, icon) {
  return `
    <section class="page-hero">

      <div class="container page-hero-inner">

        <div>

          <span class="eyebrow eyebrow-light">

            <i class="fa-solid ${icon}"></i>

            GrowRich Industries

          </span>

          <h1>
            ${escapeHTML(title)}
          </h1>

          <p>
            ${escapeHTML(description)}
          </p>

        </div>

        <div class="page-hero-icon">

          <i
            class="fa-solid ${icon}"
          ></i>

        </div>

      </div>

    </section>
  `;
}

/* =========================================================
   GLOBAL EVENTS
========================================================= */

function bindGlobalEvents() {
  const menuToggle =
    document.querySelector("#menu-toggle");

  menuToggle?.addEventListener(
    "click",
    () => {
      const nav =
        document.querySelector("#nav-links");

      const button =
        document.querySelector("#menu-toggle");

      if (!nav || !button) return;

      const isOpen =
        nav.classList.toggle("open");

      button.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      button.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
    }
  );

  document
    .querySelectorAll(
      "[data-placeholder-link]"
    )
    .forEach((link) => {
      link.addEventListener(
        "click",
        (event) => {
          event.preventDefault();

          showToast(
            "Add the approved social-media URL here."
          );
        }
      );
    });

  document.addEventListener(
    "keydown",
    (event) => {
      if (event.key === "Escape") {
        closeCropDetail();
      }
    }
  );
}

/* =========================================================
   PAGE EVENTS
========================================================= */

function bindPageEvents(route) {
  if (route.name === "products") {
    initProductsPage();
  }

  if (route.name === "solutions") {
    initSolutions();
  }

  if (route.name === "home") {
    initCropModalOnly();
  }

  if (route.name === "contact") {
    initContactEvents();
  }
}

/* =========================================================
   PRODUCTS PAGE EVENTS
========================================================= */

function initProductsPage() {
  const search =
    document.querySelector("#product-search");

  const results =
    document.querySelector("#product-results");

  const count =
    document.querySelector("#catalog-count");

  const empty =
    document.querySelector("#empty-products");

  const buttons = [
    ...document.querySelectorAll(
      ".filter-btn"
    )
  ];

  if (!results || !count || !empty) {
    return;
  }

  let activeCategory =
    getQueryCategory();

  buttons.forEach((button) => {
    button.classList.toggle(
      "active",
      button.dataset.filter ===
        activeCategory
    );

    button.addEventListener(
      "click",
      () => {
        activeCategory =
          button.dataset.filter;

        buttons.forEach((item) => {
          item.classList.toggle(
            "active",
            item === button
          );
        });

        updateResults();
      }
    );
  });

  search?.addEventListener(
    "input",
    updateResults
  );

  document
    .querySelector(
      "#clear-product-filter"
    )
    ?.addEventListener(
      "click",
      () => {
        activeCategory = "all";

        if (search) {
          search.value = "";
        }

        buttons.forEach((button) => {
          button.classList.toggle(
            "active",
            button.dataset.filter === "all"
          );
        });

        updateResults();
      }
    );

  function updateResults() {
    const filtered =
      searchProducts(
        search?.value || "",
        activeCategory
      );

    results.innerHTML =
      filtered
        .map(renderProductCard)
        .join("");

    count.textContent =
      `${filtered.length} product${
        filtered.length === 1
          ? ""
          : "s"
      } found`;

    empty.hidden =
      filtered.length !== 0;
  }

  updateResults();
}

/* =========================================================
   CONTACT EVENTS
========================================================= */

function initContactEvents() {
  const form =
    document.querySelector("#quote-form");

  const whatsappButton =
    document.querySelector("#send-whatsapp");

  const emailButton =
    document.querySelector("#send-email");

  if (!form) return;

  const getEnquiry = () => {
    if (!form.checkValidity()) {
      form.reportValidity();
      return null;
    }

    const data =
      new FormData(form);

    return {
      name:
        String(data.get("name") || "").trim(),

      contact:
        String(data.get("contact") || "").trim(),

      email:
        String(data.get("email") || "").trim(),

      requirement:
        String(
          data.get("requirement") || ""
        ),

      message:
        String(
          data.get("message") || ""
        ).trim()
    };
  };

  whatsappButton?.addEventListener(
    "click",
    () => {
      const enquiry = getEnquiry();

      if (!enquiry) return;

      const text = [
        "Hello GrowRich Industries,",
        "",
        "I would like to make an enquiry.",
        `Name: ${enquiry.name}`,
        `Contact: ${enquiry.contact}`,
        `Email: ${enquiry.email}`,
        `Requirement: ${enquiry.requirement}`,
        `Message: ${enquiry.message}`
      ].join("\n");

      const whatsappUrl =
        `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
          text
        )}`;

      window.open(
        whatsappUrl,
        "_blank",
        "noopener,noreferrer"
      );

      showToast(
        "Opening WhatsApp with your enquiry."
      );
    }
  );

  emailButton?.addEventListener(
    "click",
    () => {
      const enquiry = getEnquiry();

      if (!enquiry) return;

      const subject =
        `Product Enquiry - ${enquiry.requirement}`;

      const body = [
        "Hello GrowRich Industries,",
        "",
        "I would like to make an enquiry.",
        `Name: ${enquiry.name}`,
        `Contact: ${enquiry.contact}`,
        `Email: ${enquiry.email}`,
        `Requirement: ${enquiry.requirement}`,
        `Message: ${enquiry.message}`,
        "",
        "Thank you."
      ].join("\n");

      window.location.href =
        `mailto:${CONTACT.email}?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(
          body
        )}`;

      showToast(
        "Opening your email app with the enquiry."
      );
    }
  );
}

/* =========================================================
   QUERY CATEGORY
========================================================= */

function getQueryCategory() {
  const query =
    window.location.hash.split("?")[1] ||
    "";

  const params =
    new URLSearchParams(query);

  const category =
    params.get("category");

  return categories.some(
    (item) => item.id === category
  )
    ? category
    : "all";
}

/* =========================================================
   PRODUCT CATEGORY NAME
========================================================= */

function categoryName(id) {
  return (
    categories.find(
      (category) =>
        category.id === id
    )?.name || "Irrigation"
  );
}

/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

function updateActiveNav(route) {
  const active =
    route.name === "product"
      ? "products"
      : route.name;

  document
    .querySelectorAll(
      "[data-nav-link]"
    )
    .forEach((link) => {
      const href =
        link.getAttribute("href") || "";

      const target =
        href.replace("#/", "") ||
        "home";

      link.classList.toggle(
        "active",
        target === active
      );
    });
}

/* =========================================================
   MOBILE MENU
========================================================= */

function closeMobileMenu() {
  const nav =
    document.querySelector("#nav-links");

  const button =
    document.querySelector("#menu-toggle");

  if (!nav) return;

  nav.classList.remove("open");

  button?.setAttribute(
    "aria-expanded",
    "false"
  );

  if (button) {
    button.innerHTML =
      '<i class="fa-solid fa-bars"></i>';
  }
}

/* =========================================================
   HTML ESCAPE
========================================================= */

function escapeHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

/* =========================================================
   TOAST
========================================================= */

export function showToast(message) {
  const toast =
    document.querySelector("#toast");

  if (!toast) return;

  toast.textContent = message;

  toast.classList.add("show");

  window.clearTimeout(
    window.__growrichToastTimer
  );

  window.__growrichToastTimer =
    window.setTimeout(() => {
      toast.classList.remove("show");
    }, 2800);
}