import {
  categories,
  products,
  featuredProductSlugs,
  cropSolutions,
  getProductBySlug,
  searchProducts
} from "./products.js";
import { navigate } from "./router.js";

const CONTACT = {
  email: "growrichindustries@gmail.com",
  phone: "+91 982 247 0016",
  whatsapp: "919822470016",
  address: "F-5, M.I.D.C, Khandala, Tal. Shrirampur, Dist. Ahilyanagar, Maharashtra - 413709, India"
};

export function renderAppShell() {
  document.querySelector("#app").innerHTML = `
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

function renderTopBar() {
  return `
    <div class="topbar">
      <div class="container topbar-inner">
        <div class="topbar-contact">
          <a href="mailto:${CONTACT.email}" title="Email GrowRich">
            <i class="fa-solid fa-envelope"></i>
            <span>${CONTACT.email}</span>
          </a>
          <a href="tel:${CONTACT.phone.replaceAll(" ", "")}" title="Call GrowRich">
            <i class="fa-solid fa-phone"></i>
            <span>${CONTACT.phone}</span>
          </a>
        </div>

        <div class="topbar-socials" aria-label="Social links">
          <a href="#" data-placeholder-link title="Instagram"><i class="fa-brands fa-instagram"></i></a>
          <a href="#" data-placeholder-link title="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#" data-placeholder-link title="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
          <a href="https://wa.me/${CONTACT.whatsapp}" target="_blank" rel="noopener" title="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
        </div>
      </div>
    </div>
  `;
}

function renderNavbar() {
  return `
    <header class="navbar" id="navbar">
      <div class="container nav-inner">
        <a class="brand" href="#/" aria-label="GrowRich home">
          <span class="brand-mark"><i class="fa-solid fa-droplet"></i></span>
          <span>
            <strong>GROW<span>RICH</span></strong>
            <small>PRECISION IRRIGATION</small>
          </span>
        </a>

        <button class="menu-toggle" id="menu-toggle" aria-label="Open navigation" aria-expanded="false">
          <i class="fa-solid fa-bars"></i>
        </button>

        <nav class="nav-links" id="nav-links">
          <a href="#/" data-nav-link>Home</a>
          <a href="#/products" data-nav-link>Products</a>
          <a href="#/solutions" data-nav-link>Solutions</a>
          <a href="#/about" data-nav-link>About</a>
          <a href="#/contact" data-nav-link>Contact</a>
          <a class="btn btn-primary btn-small nav-quote" href="#/contact" data-nav-link>Get a Quote <i class="fa-solid fa-arrow-right"></i></a>
        </nav>
      </div>
    </header>
  `;
}

function renderFloatingActions() {
  return `
    <div class="floating-actions" aria-label="Quick contact">
      <a class="float-action whatsapp" href="https://wa.me/${CONTACT.whatsapp}" target="_blank" rel="noopener" title="Chat on WhatsApp">
        <i class="fa-brands fa-whatsapp"></i>
        <span>WhatsApp</span>
      </a>
      <a class="float-action call" href="tel:${CONTACT.phone.replaceAll(" ", "")}" title="Call GrowRich">
        <i class="fa-solid fa-phone"></i>
        <span>Call us</span>
      </a>
    </div>
  `;
}

function renderFooter() {
  return `
    <footer class="footer">
      <div class="container footer-grid">
        <div class="footer-brand">
          <a class="brand brand-light" href="#/">
            <span class="brand-mark"><i class="fa-solid fa-droplet"></i></span>
            <span><strong>GROW<span>RICH</span></strong><small>PRECISION IRRIGATION</small></span>
          </a>
          <p>Grow more with less water through practical, precision-focused irrigation solutions.</p>
          <div class="footer-socials">
            <a href="#" data-placeholder-link aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
            <a href="#" data-placeholder-link aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#" data-placeholder-link aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="https://wa.me/${CONTACT.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
          </div>
        </div>

        <div>
          <h4>Explore</h4>
          <a href="#/products">Products</a>
          <a href="#/solutions">Solutions</a>
          <a href="#/about">About GrowRich</a>
          <a href="#/contact">Contact</a>
        </div>

        <div>
          <h4>Product groups</h4>
          <a href="#/products?category=drip">Drip Irrigation</a>
          <a href="#/products?category=spray">Spray Irrigation</a>
          <a href="#/products?category=mainline">Main Line & Pipes</a>
          <a href="#/products?category=other">Filters & Agriculture Products</a>
        </div>

        <div>
          <h4>Contact</h4>
          <p><i class="fa-solid fa-location-dot"></i> ${CONTACT.address}</p>
          <a href="tel:${CONTACT.phone.replaceAll(" ", "")}"><i class="fa-solid fa-phone"></i> ${CONTACT.phone}</a>
          <a href="mailto:${CONTACT.email}"><i class="fa-solid fa-envelope"></i> ${CONTACT.email}</a>
        </div>
      </div>

      <div class="container footer-bottom">
        <span>© 2026 GrowRich Industries. Demo SPA.</span>
        <span>Built for demonstration purposes.</span>
      </div>
    </footer>
  `;
}

export function renderRoute(route) {
  const content = document.querySelector("#page-content");
  if (!content) return;

  closeMobileMenu();

  if (route.name === "product") {
    content.innerHTML = renderProductDetail(route.slug);
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const renderers = {
    home: renderHome,
    products: renderProducts,
    solutions: renderSolutions,
    about: renderAbout,
    contact: renderContact
  };

  content.innerHTML = (renderers[route.name] || renderHome)();
  bindPageEvents(route);

  const section = document.querySelector("[data-page]");
  if (section && route.name !== "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  updateActiveNav(route);
}

function renderHome() {
  const featured = featuredProductSlugs.map(getProductBySlug).filter(Boolean);

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

function renderHero() {
  return `
    <section class="hero">
      <div class="hero-image"></div>
      <div class="hero-overlay"></div>
      <div class="container hero-content">
        <div class="hero-copy reveal">
          <span class="eyebrow eyebrow-light"><i class="fa-solid fa-leaf"></i> Precision irrigation for modern farming</span>
          <h1>Grow more.<br><span>Waste less water.</span></h1>
          <p>Complete irrigation solutions built around efficient water delivery, reliable components and smarter agricultural practices.</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="#/products">Explore Products <i class="fa-solid fa-arrow-right"></i></a>
            <a class="btn btn-ghost" href="#/contact">Talk to GrowRich</a>
          </div>
        </div>

        <div class="hero-stat-card reveal">
          <div class="stat-icon"><i class="fa-solid fa-droplet"></i></div>
          <strong>Precision</strong>
          <span>Water where crops need it.</span>
        </div>
      </div>
      <a class="scroll-cue" href="#why-growrich" aria-label="Scroll down"><i class="fa-solid fa-chevron-down"></i></a>
    </section>
  `;
}

function renderTrustStrip() {
  return `
    <section class="trust-strip">
      <div class="container trust-grid">
        <div><i class="fa-solid fa-droplet"></i><span>Efficient water delivery</span></div>
        <div><i class="fa-solid fa-gears"></i><span>Complete irrigation range</span></div>
        <div><i class="fa-solid fa-seedling"></i><span>Crop-focused solutions</span></div>
        <div><i class="fa-solid fa-headset"></i><span>On-ground support</span></div>
      </div>
    </section>
  `;
}

function renderWhyGrowRich() {
  const items = [
    ["fa-bullseye", "Precision-focused", "Uniform water delivery with components designed around efficient irrigation."],
    ["fa-layer-group", "Complete range", "From drip and spray products to pipes, fittings, filtration and accessories."],
    ["fa-microchip", "Smart automation", "A foundation for multi-zone control, sensors and future connected irrigation."],
    ["fa-handshake", "Field support", "A practical approach to installation, technical help and crop-specific setup."]
  ];

  return `
    <section class="section section-light" id="why-growrich">
      <div class="container">
        <div class="section-heading split-heading">
          <div>
            <span class="eyebrow">Why GrowRich</span>
            <h2>Designed around the <span>real needs of farming.</span></h2>
          </div>
          <p>GrowRich combines irrigation hardware, system thinking and field support into one clear product experience.</p>
        </div>

        <div class="feature-grid">
          ${items.map(([icon, title, text]) => `
            <article class="feature-card">
              <div class="icon-box"><i class="fa-solid ${icon}"></i></div>
              <h3>${title}</h3>
              <p>${text}</p>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderCategorySection() {
  return `
    <section class="section section-tint" id="product-categories">
      <div class="container">
        <div class="section-heading centered">
          <span class="eyebrow">Product ecosystem</span>
          <h2>Everything you need to <span>move, filter and deliver water.</span></h2>
          <p>Explore the irrigation catalogue by system category instead of searching through one long product list.</p>
        </div>

        <div class="category-grid">
          ${categories.map((category) => `
            <article class="category-card" data-category-card="${category.id}">
              <div class="category-number">${category.eyebrow}</div>
              <div class="category-icon"><i class="fa-solid ${category.icon}"></i></div>
              <h3>${category.name}</h3>
              <p>${category.description}</p>
              <a href="#/products?category=${category.id}" class="text-link">Explore category <i class="fa-solid fa-arrow-right"></i></a>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderFeaturedProducts(featured) {
  return `
    <section class="section section-light">
      <div class="container">
        <div class="section-heading split-heading">
          <div>
            <span class="eyebrow">Featured catalogue</span>
            <h2>Start with the <span>core products.</span></h2>
          </div>
          <a class="btn btn-outline btn-small" href="#/products">View all products <i class="fa-solid fa-arrow-right"></i></a>
        </div>

        <div class="product-grid product-grid-featured">
          ${featured.map(renderProductCard).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderProductCard(item) {
  return `
    <article class="product-card">
      <a class="product-image-wrap" href="#/product/${item.slug}" aria-label="View ${item.name}">
        <img src="${item.image}" alt="${item.name}" loading="lazy" />
        <span class="product-category">${categoryName(item.category)}</span>
      </a>
      <div class="product-card-body">
        <span class="product-subcategory">${item.subcategory}</span>
        <h3>${item.name}</h3>
        <p>${item.shortDescription}</p>
        <a class="text-link" href="#/product/${item.slug}">View details <i class="fa-solid fa-arrow-right"></i></a>
      </div>
    </article>
  `;
}

function renderCropSolutions() {
  return `
    <section class="section section-dark">
      <div class="container">
        <div class="section-heading centered">
          <span class="eyebrow eyebrow-light">Crop-centric support</span>
          <h2>Solutions that follow the <span>crop.</span></h2>
          <p>Explore the irrigation categories that can support different agricultural environments.</p>
        </div>

        <div class="crop-grid">
          ${cropSolutions.map((crop) => `
            <article class="crop-card">
              <div class="crop-icon"><i class="fa-solid ${crop.icon}"></i></div>
              <h3>${crop.name}</h3>
              <p>${crop.description}</p>
              <div class="tag-list">${crop.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderAutomation() {
  return `
    <section class="section automation-section">
      <div class="container automation-layout">
        <div>
          <span class="eyebrow">Smart irrigation</span>
          <h2>Build from reliable hardware today. <span>Automate tomorrow.</span></h2>
          <p>GrowRich's existing positioning includes automatic control gears, multi-zone programming and sensor integration. The demo therefore keeps automation visible as a future-ready layer rather than pretending that a live controller is connected.</p>
          <div class="check-list">
            <div><i class="fa-solid fa-circle-check"></i><span>Multi-zone irrigation concept</span></div>
            <div><i class="fa-solid fa-circle-check"></i><span>Sensor-ready architecture</span></div>
            <div><i class="fa-solid fa-circle-check"></i><span>Scheduled irrigation workflows</span></div>
          </div>
          <a class="btn btn-primary" href="#/contact">Discuss an irrigation setup</a>
        </div>

        <div class="automation-diagram">
          <div class="diagram-node source"><i class="fa-solid fa-faucet-drip"></i><span>Water source</span></div>
          <div class="diagram-line line-one"></div>
          <div class="diagram-node controller"><i class="fa-solid fa-microchip"></i><span>Controller</span></div>
          <div class="diagram-line line-two"></div>
          <div class="zones">
            <div class="diagram-node"><i class="fa-solid fa-droplet"></i><span>Zone 01</span></div>
            <div class="diagram-node"><i class="fa-solid fa-spray-can-sparkles"></i><span>Zone 02</span></div>
            <div class="diagram-node"><i class="fa-solid fa-seedling"></i><span>Zone 03</span></div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderAboutPreview() {
  return `
    <section class="section about-preview">
      <div class="container about-layout">
        <div class="about-image">
          <img src="assets/images/about/about-placeholder.svg" alt="Agricultural irrigation field" loading="lazy" />
          <div class="image-badge"><strong>Grow More</strong><span>With Less Water</span></div>
        </div>
        <div class="about-copy">
          <span class="eyebrow">About GrowRich</span>
          <h2>Precision irrigation with an <span>Indian farming focus.</span></h2>
          <p>GrowRich Industries is positioned around precision irrigation for Indian farms, with a product range spanning drip, sprinkler, fogging, deep irrigation, automation and irrigation spares.</p>
          <p>The revamp turns that story into a product-first experience so a visitor can understand the company, explore products and move naturally toward an enquiry.</p>
          <a class="text-link large-link" href="#/about">Discover GrowRich <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
    </section>
  `;
}

function renderQuoteCTA() {
  return `
    <section class="cta-section">
      <div class="container cta-inner">
        <div>
          <span class="eyebrow eyebrow-light">Let's plan your irrigation setup</span>
          <h2>Need the right irrigation solution?</h2>
          <p>Tell us about your crop, application and requirement.</p>
        </div>
        <a class="btn btn-light" href="#/contact">Request a Quote <i class="fa-solid fa-arrow-right"></i></a>
      </div>
    </section>
  `;
}

function renderProducts() {
  return `
    <div data-page="products">
      ${renderPageHero("Products", "Explore the irrigation catalogue by category, search term and application.", "fa-boxes-stacked")}
      <section class="section section-light products-page">
        <div class="container">
          <div class="catalog-toolbar">
            <div class="search-box">
              <i class="fa-solid fa-magnifying-glass"></i>
              <input id="product-search" type="search" placeholder="Search products, fittings, pipes, filters..." autocomplete="off" />
            </div>
            <div class="category-filter" id="category-filter">
              <button class="filter-btn active" data-filter="all">All</button>
              ${categories.map((category) => `<button class="filter-btn" data-filter="${category.id}">${category.name}</button>`).join("")}
            </div>
          </div>

          <div class="catalog-summary">
            <span id="catalog-count">${products.length} products in demo catalogue</span>
            <button class="clear-filter" id="clear-product-filter" type="button">Reset filters</button>
          </div>

          <div class="product-grid" id="product-results">
            ${products.map(renderProductCard).join("")}
          </div>

          <div class="empty-state" id="empty-products" hidden>
            <i class="fa-solid fa-magnifying-glass"></i>
            <h3>No products found</h3>
            <p>Try another search term or reset the category filter.</p>
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderProductDetail(slug) {
  const item = getProductBySlug(slug);

  if (!item) {
    return `
      <section class="section section-light not-found">
        <div class="container centered">
          <span class="eyebrow">Product not found</span>
          <h1>We couldn't find that product.</h1>
          <a class="btn btn-primary" href="#/products">Back to products</a>
        </div>
      </section>
    `;
  }

  const related = products
    .filter((p) => p.category === item.category && p.slug !== item.slug)
    .slice(0, 3);

  return `
    <div data-page="product-detail">
      <section class="detail-hero">
        <div class="container">
          <a class="back-link" href="#/products"><i class="fa-solid fa-arrow-left"></i> Back to products</a>
          <div class="detail-layout">
            <div class="detail-image-card">
              <img src="${item.image}" alt="${item.name}" />
              <span>${categoryName(item.category)}</span>
            </div>

            <div class="detail-copy">
              <span class="eyebrow">${item.subcategory}</span>
              <h1>${item.name}</h1>
              <p class="lead">${item.description}</p>

              <div class="detail-actions">
                <a class="btn btn-primary" href="#/contact">Request a Quote <i class="fa-solid fa-arrow-right"></i></a>
                <a class="btn btn-outline" href="https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(`Hello GrowRich, I am interested in ${item.name}.`)}" target="_blank" rel="noopener">
                  <i class="fa-brands fa-whatsapp"></i> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section section-light">
        <div class="container detail-content-grid">
          <div>
            <span class="eyebrow">Product features</span>
            <h2>Built for practical irrigation.</h2>
            <div class="check-list detail-list">
              ${(item.features.length ? item.features : ["Catalogue-specific features available on request."]).map((feature) => `
                <div><i class="fa-solid fa-circle-check"></i><span>${feature}</span></div>
              `).join("")}
            </div>
          </div>

          <div>
            <span class="eyebrow">Applications</span>
            <h2>Where it fits.</h2>
            <div class="application-pills">
              ${(item.applications.length ? item.applications : ["Agricultural irrigation"]).map((app) => `<span>${app}</span>`).join("")}
            </div>
          </div>
        </div>
      </section>

      ${Object.keys(item.specifications).length ? `
        <section class="section section-tint">
          <div class="container">
            <div class="section-heading">
              <span class="eyebrow">Technical information</span>
              <h2>Product <span>specifications.</span></h2>
              <p>Demo values below are based on the supplied catalogue reference. Confirm final specifications before production publishing.</p>
            </div>
            <div class="spec-table">
              ${Object.entries(item.specifications).map(([key, value]) => `
                <div class="spec-row"><strong>${key}</strong><span>${value}</span></div>
              `).join("")}
            </div>
          </div>
        </section>
      ` : ""}

      ${related.length ? `
        <section class="section section-light">
          <div class="container">
            <div class="section-heading split-heading">
              <div>
                <span class="eyebrow">Related products</span>
                <h2>More from <span>${categoryName(item.category)}.</span></h2>
              </div>
              <a class="btn btn-outline btn-small" href="#/products">Browse catalogue</a>
            </div>
            <div class="product-grid">${related.map(renderProductCard).join("")}</div>
          </div>
        </section>
      ` : ""}

      ${renderQuoteCTA()}
    </div>
  `;
}

function renderSolutions() {
  return `
    <div data-page="solutions">
      ${renderPageHero("Solutions", "Connect irrigation products to the crop and environment they serve.", "fa-seedling")}
      <section class="section section-light">
        <div class="container">
          <div class="section-heading centered">
            <span class="eyebrow">Crop solutions</span>
            <h2>Start with the <span>application.</span></h2>
            <p>These solution cards are intentionally high-level for the demonstration SPA. The final website can later connect each crop to approved agronomy recommendations.</p>
          </div>

          <div class="solution-list">
            ${cropSolutions.map((crop, index) => `
              <article class="solution-row">
                <div class="solution-number">0${index + 1}</div>
                <div class="solution-icon"><i class="fa-solid ${crop.icon}"></i></div>
                <div class="solution-copy">
                  <h3>${crop.name}</h3>
                  <p>${crop.description}</p>
                  <div class="tag-list">${crop.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
                </div>
              </article>
            `).join("")}
          </div>
        </div>
      </section>

      <section class="section section-dark">
        <div class="container two-column">
          <div>
            <span class="eyebrow eyebrow-light">System thinking</span>
            <h2>From water source to crop root.</h2>
            <p>A future production version can turn this into an interactive irrigation-system planner where a visitor selects the crop, source, field size and irrigation method.</p>
          </div>
          <div class="solution-flow">
            <span>Source</span><i class="fa-solid fa-arrow-right"></i>
            <span>Filtration</span><i class="fa-solid fa-arrow-right"></i>
            <span>Main line</span><i class="fa-solid fa-arrow-right"></i>
            <span>Distribution</span><i class="fa-solid fa-arrow-right"></i>
            <span>Crop</span>
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderAbout() {
  return `
    <div data-page="about">
      ${renderPageHero("About GrowRich", "A clearer digital story for a precision-irrigation company focused on Indian agriculture.", "fa-building")}
      <section class="section section-light">
        <div class="container about-layout">
          <div class="about-image large">
            <img src="assets/images/about/about-placeholder.svg" alt="GrowRich agriculture visual" />
          </div>
          <div class="about-copy">
            <span class="eyebrow">Our positioning</span>
            <h2>Grow more with <span>less water.</span></h2>
            <p>GrowRich Industries describes itself as a precision-irrigation business serving Indian farms with drip, sprinkler, fogging, deep irrigation, automation and spares.</p>
            <p>The revamped SPA organizes this information around three questions: what GrowRich does, what products it offers and how a visitor can start a conversation.</p>
            <div class="mission-grid">
              <div><strong>Vision</strong><p>Lead sustainable irrigation through resource-smart, yield-focused farming.</p></div>
              <div><strong>Mission</strong><p>Enable farmers to adopt complete, water-efficient irrigation systems with confidence.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section class="section section-tint">
        <div class="container">
          <div class="section-heading centered">
            <span class="eyebrow">Flagship solutions</span>
            <h2>A portfolio built around <span>irrigation outcomes.</span></h2>
          </div>
          <div class="feature-grid">
            ${[
              ["fa-droplet", "Drip irrigation", "Surface/subsurface systems, mini-emitters, inline drippers and valves."],
              ["fa-spray-can-sparkles", "Sprinkler systems", "Sprinkler and rain-pipe concepts for medium-to-large fields."],
              ["fa-wind", "Fogging", "Humidity and cooling support for protected cultivation."],
              ["fa-tree", "Deep irrigation", "Solutions positioned for orchards and plantation crops."],
              ["fa-microchip", "Automatic control", "A foundation for scheduled, multi-zone irrigation."],
              ["fa-screwdriver-wrench", "Spares & accessories", "Supporting components to build, expand and maintain systems."]
            ].map(([icon, title, text]) => `
              <article class="feature-card">
                <div class="icon-box"><i class="fa-solid ${icon}"></i></div>
                <h3>${title}</h3>
                <p>${text}</p>
              </article>
            `).join("")}
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderContact() {
  return `
    <div data-page="contact">
      ${renderPageHero("Contact", "Tell us what you are growing and what you need to irrigate.", "fa-comments")}
      <section class="section section-light">
        <div class="container contact-layout">
          <div class="contact-card">
            <span class="eyebrow">Talk to GrowRich</span>
            <h2>Let's plan the next step.</h2>
            <p>Use the demonstration form or contact GrowRich directly.</p>

            <div class="contact-list">
              <a href="tel:${CONTACT.phone.replaceAll(" ", "")}"><i class="fa-solid fa-phone"></i><span><small>Phone</small>${CONTACT.phone}</span></a>
              <a href="mailto:${CONTACT.email}"><i class="fa-solid fa-envelope"></i><span><small>Email</small>${CONTACT.email}</span></a>
              <a href="https://wa.me/${CONTACT.whatsapp}" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i><span><small>WhatsApp</small>Start a chat</span></a>
              <div><i class="fa-solid fa-location-dot"></i><span><small>Address</small>${CONTACT.address}</span></div>
            </div>
          </div>

          <form class="contact-form" id="quote-form">
            <div class="form-heading">
              <span class="eyebrow">Request a quote</span>
              <h2>Tell us about your requirement.</h2>
            </div>
            <div class="form-grid">
              <label>Name<input required name="name" type="text" placeholder="Your name" /></label>
              <label>Contact<input required name="contact" type="tel" placeholder="Phone number" /></label>
              <label>Email<input required name="email" type="email" placeholder="you@example.com" /></label>
              <label>Requirement
                <select name="requirement">
                  <option value="Drip irrigation">Drip irrigation</option>
                  <option value="Spray irrigation">Spray irrigation</option>
                  <option value="Main line & pipes">Main line & pipes</option>
                  <option value="Fittings & valves">Fittings & valves</option>
                  <option value="Filters">Filters</option>
                  <option value="Other">Other</option>
                </select>
              </label>
              <label class="full">Message<textarea required name="message" rows="5" placeholder="Tell us about your crop, field or product requirement"></textarea></label>
            </div>
            <div class="enquiry-actions" aria-label="Choose how to send your enquiry">
              <button class="btn btn-whatsapp" type="button" id="send-whatsapp">
                <i class="fa-brands fa-whatsapp"></i> Send via WhatsApp
              </button>
              <button class="btn btn-email" type="button" id="send-email">
                <i class="fa-solid fa-envelope"></i> Send via Email
              </button>
            </div>
            <p class="form-note">Choose WhatsApp or Email to send the enquiry. No backend is required for this demonstration.</p>
          </form>
        </div>
      </section>
    </div>
  `;
}

function renderPageHero(title, description, icon) {
  return `
    <section class="page-hero">
      <div class="container page-hero-inner">
        <div>
          <span class="eyebrow eyebrow-light"><i class="fa-solid ${icon}"></i> GrowRich Industries</span>
          <h1>${title}</h1>
          <p>${description}</p>
        </div>
        <div class="page-hero-icon"><i class="fa-solid ${icon}"></i></div>
      </div>
    </section>
  `;
}

function bindGlobalEvents() {
  document.querySelector("#menu-toggle")?.addEventListener("click", () => {
    const nav = document.querySelector("#nav-links");
    const button = document.querySelector("#menu-toggle");
    nav.classList.toggle("open");
    button.setAttribute("aria-expanded", String(nav.classList.contains("open")));
    button.innerHTML = nav.classList.contains("open")
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
  });

  document.querySelectorAll("[data-placeholder-link]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      showToast("Add the approved social-media URL here.");
    });
  });
}

function bindPageEvents(route) {
  if (route.name === "products") {
    const search = document.querySelector("#product-search");
    const results = document.querySelector("#product-results");
    const count = document.querySelector("#catalog-count");
    const empty = document.querySelector("#empty-products");
    const buttons = [...document.querySelectorAll(".filter-btn")];
    let activeCategory = getQueryCategory();

    buttons.forEach((button) => {
      button.classList.toggle("active", button.dataset.filter === activeCategory);
      button.addEventListener("click", () => {
        activeCategory = button.dataset.filter;
        buttons.forEach((b) => b.classList.toggle("active", b === button));
        updateResults();
      });
    });

    search?.addEventListener("input", updateResults);
    document.querySelector("#clear-product-filter")?.addEventListener("click", () => {
      activeCategory = "all";
      search.value = "";
      buttons.forEach((b) => b.classList.toggle("active", b.dataset.filter === "all"));
      updateResults();
    });

    function updateResults() {
      const filtered = searchProducts(search.value, activeCategory);
      results.innerHTML = filtered.map(renderProductCard).join("");
      count.textContent = `${filtered.length} product${filtered.length === 1 ? "" : "s"} found`;
      empty.hidden = filtered.length !== 0;
    }

    updateResults();
  }

  if (route.name === "contact") {
    const form = document.querySelector("#quote-form");
    const whatsappButton = document.querySelector("#send-whatsapp");
    const emailButton = document.querySelector("#send-email");

    const getEnquiry = () => {
      if (!form.checkValidity()) {
        form.reportValidity();
        return null;
      }

      const data = new FormData(form);
      return {
        name: data.get("name")?.trim() || "",
        contact: data.get("contact")?.trim() || "",
        email: data.get("email")?.trim() || "",
        requirement: data.get("requirement") || "",
        message: data.get("message")?.trim() || ""
      };
    };

    whatsappButton?.addEventListener("click", () => {
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

      window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
      showToast("Opening WhatsApp with your enquiry.");
    });

    emailButton?.addEventListener("click", () => {
      const enquiry = getEnquiry();
      if (!enquiry) return;

      const subject = `Product Enquiry - ${enquiry.requirement}`;
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

      window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      showToast("Opening your email app with the enquiry.");
    });
  }
}

function getQueryCategory() {
  const query = window.location.hash.split("?")[1] || "";
  const params = new URLSearchParams(query);
  return categories.some((category) => category.id === params.get("category"))
    ? params.get("category")
    : "all";
}

function categoryName(id) {
  return categories.find((category) => category.id === id)?.name || "Irrigation";
}

function updateActiveNav(route) {
  const active = route.name === "product" ? "products" : route.name;
  document.querySelectorAll("[data-nav-link]").forEach((link) => {
    const href = link.getAttribute("href") || "";
    const target = href.replace("#/", "") || "home";
    link.classList.toggle("active", target === active);
  });
}

function closeMobileMenu() {
  const nav = document.querySelector("#nav-links");
  const button = document.querySelector("#menu-toggle");
  if (!nav) return;
  nav.classList.remove("open");
  button?.setAttribute("aria-expanded", "false");
  if (button) button.innerHTML = '<i class="fa-solid fa-bars"></i>';
}

export function showToast(message) {
  const toast = document.querySelector("#toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(window.__growrichToastTimer);
  window.__growrichToastTimer = window.setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}
