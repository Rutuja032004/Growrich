import {
  categories,
  products,
  featuredProductSlugs,
  cropSolutions,
  getProductBySlug,
  searchProducts
} from "./products.js";
import { navigate } from "./router.js";
import { setupSystems, getSetupSystem } from "./setupData.js";

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
          <a href="tel:${CONTACT.phone.replaceAll(" ", "")}" title="Call GrowRich"><i class="fa-solid fa-phone"></i></a>
        </div>
      </div>
    </div>
  `;
}

function renderNavbar() {
  return `
    <header class="navbar" id="navbar">
      <div class="container nav-inner">
        <a class="brand brand-logo" href="#/" aria-label="GrowRich Industries home">
          <img src="assets/images/brand/growrich-logo.png" alt="GrowRich Industries" />
        </a>

        <button class="menu-toggle" id="menu-toggle" aria-label="Open navigation" aria-expanded="false">
          <i class="fa-solid fa-bars"></i>
        </button>

        <nav class="nav-links" id="nav-links">
          <a href="#/" data-nav-link>Home</a>
          <a href="#/products" data-nav-link>Products</a>
          <a href="#/solutions" data-nav-link>Solutions</a>
          <a href="#/services" data-nav-link>Setup / Services</a>
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
    <div class="floating-actions" aria-label="Quick contact and social links">
      <a class="float-action whatsapp" href="https://wa.me/${CONTACT.whatsapp}" target="_blank" rel="noopener" title="Chat on WhatsApp">
        <i class="fa-brands fa-whatsapp"></i><span>WhatsApp</span>
      </a>
      <a class="float-action instagram" href="#" data-placeholder-link title="Instagram">
        <i class="fa-brands fa-instagram"></i><span>Instagram</span>
      </a>
      <a class="float-action facebook" href="#" data-placeholder-link title="Facebook">
        <i class="fa-brands fa-facebook-f"></i><span>Facebook</span>
      </a>
      <a class="float-action linkedin" href="#" data-placeholder-link title="LinkedIn">
        <i class="fa-brands fa-linkedin-in"></i><span>LinkedIn</span>
      </a>
      <a class="float-action call" href="tel:${CONTACT.phone.replaceAll(" ", "")}" title="Call GrowRich">
        <i class="fa-solid fa-phone"></i><span>Call us</span>
      </a>
    </div>
  `;
}

function renderFooter() {
  return `
    <footer class="footer">
      <div class="container footer-grid">
        <div class="footer-brand">
          <a class="brand brand-light brand-logo footer-logo" href="#/">
            <img src="assets/images/brand/growrich-logo.png" alt="GrowRich Industries" />
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
          <a href="#/services">Setup / Services</a>
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
    services: renderServicesPage,
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
      ${renderCategorySection()}
      ${renderCropSolutions()}
      ${renderFeaturedProducts(featured)}
      ${renderWhyGrowRich()}
      ${renderAboutPreview()}
      ${renderServices()}
      ${renderQuoteCTA()}
    </div>
  `;
}

function renderHero() {
  const slides = [
    {
      image: "assets/images/hero/hero-slide-1.webp",
      alt: "Farmer checking a crop in a corn field",
      eyebrow: "Water-efficient agriculture",
      heading: "Grow More with <span>Less Water.</span>",
      description: "Make better irrigation decisions with practical water-delivery solutions planned around your crop, field conditions and everyday farming needs.",
      primaryLabel: "Explore Products",
      primaryHref: "#/products",
      secondaryLabel: "Request a Quote",
      secondaryHref: "#/contact"
    },
    {
      image: "assets/images/hero/hero-slide-2.webp",
      alt: "Farmer inspecting drip irrigation in a field",
      eyebrow: "Precision irrigation",
      heading: "Precision Irrigation for <span>Smarter Farming.</span>",
      description: "Build dependable field irrigation with the right drip lines, pipes, fittings and distribution components for more controlled water application.",
      primaryLabel: "Explore Solutions",
      primaryHref: "#/solutions",
      secondaryLabel: "Plan My System",
      secondaryHref: "#/contact"
    },
    {
      image: "assets/images/hero/hero-slide-3.jpeg",
      alt: "Farmer standing in a green agricultural field",
      eyebrow: "Resource-smart farming",
      heading: "Resource-Smart, <span>Yield-Focused Farming.</span>",
      description: "Choose irrigation products and field support with a focus on efficient water use, practical installation and reliable long-term farm performance.",
      primaryLabel: "Discover GrowRich",
      primaryHref: "#/about",
      secondaryLabel: "Talk to GrowRich",
      secondaryHref: "#/contact"
    }
  ];

  return `
    <section class="hero hero-slider" aria-label="GrowRich highlights">
      <div class="hero-slides" id="hero-slides">
        ${slides.map((slide, index) => `
          <div class="hero-slide ${index === 0 ? "active" : ""}" data-hero-slide="${index}">
            <img src="${slide.image}" alt="${slide.alt}" />
            <div class="hero-gradient"></div>
            <div class="container hero-slide-content">
              <div class="hero-message">
                <span class="eyebrow eyebrow-light"><i class="fa-solid fa-leaf"></i> ${slide.eyebrow}</span>
                <h1>${slide.heading}</h1>
                <p>${slide.description}</p>
                <div class="hero-actions">
                  <a class="btn btn-primary" href="${slide.primaryHref}">${slide.primaryLabel} <i class="fa-solid fa-arrow-right"></i></a>
                  <a class="btn btn-ghost" href="${slide.secondaryHref}">${slide.secondaryLabel}</a>
                </div>
              </div>
            </div>
          </div>
        `).join("")}
      </div>
      <div class="hero-controls" aria-label="Hero slides">
        <button type="button" class="hero-arrow" id="hero-prev" aria-label="Previous slide"><i class="fa-solid fa-chevron-left"></i></button>
        <div class="hero-dots">
          ${slides.map((slide, index) => `<button type="button" class="hero-dot ${index === 0 ? "active" : ""}" data-hero-dot="${index}" aria-label="Show ${slide.eyebrow}"></button>`).join("")}
        </div>
        <button type="button" class="hero-arrow" id="hero-next" aria-label="Next slide"><i class="fa-solid fa-chevron-right"></i></button>
      </div>
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
    ["fa-bullseye", "Precision-focused", "Uniform water delivery with components selected around efficient irrigation and practical crop needs.", "why-precision-focused", "assets/images/why/precision-focused.webp"],
    ["fa-layer-group", "Complete range", "From drip and spray products to pipes, fittings, filtration and accessories for a connected system.", "why-complete-range", "assets/images/why/complete-range.png"],
    ["fa-microchip", "Smart automation", "A future-ready foundation for multi-zone control, sensors and scheduled irrigation workflows.", "why-smart-automation", "assets/images/why/smart-automation.png"],
    ["fa-handshake", "Field support", "Practical guidance for installation, technical help and crop-specific irrigation setup.", "why-field-support", "assets/images/why/field-support.png"]
  ];

  return `
    <section class="section section-light" id="why-growrich">
      <div class="container">
        <div class="section-heading split-heading reveal-on-scroll">
          <div>
            <span class="eyebrow">04 / Why GrowRich</span>
            <h2>Designed around the <span>real needs of farming.</span></h2>
          </div>
          <p>GrowRich brings product selection, irrigation planning and field support together in one practical experience. The focus is on dependable water delivery, compatible components and solutions that can grow with the farm.</p>
        </div>

        <div class="feature-grid">
          ${items.map(([icon, title, text, slot, image]) => `
            <article class="feature-card why-card reveal-on-scroll">
              <div class="card-media why-card-media">
                <img src="${image}" alt="${title}" loading="lazy" />
              </div>
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
        <div class="section-heading split-heading reveal-on-scroll">
          <div>
            <span class="eyebrow">01 / Product categories</span>
            <h2>Choose the right <span>irrigation category.</span></h2>
            <p>Explore GrowRich's core irrigation categories for controlled water delivery, dependable field distribution and practical system connections. Start with the category that best matches your crop and irrigation layout.</p>
          </div>
          <a class="btn btn-outline btn-small" href="#/products">View All Categories <i class="fa-solid fa-arrow-right"></i></a>
        </div>

        <div class="category-grid category-image-grid">
          ${categories.filter((category) => ["drip", "spray", "mainline", "compression"].includes(category.id)).map((category) => `
            <article class="category-card category-image-card reveal-on-scroll" data-category-card="${category.id}">
              <div class="category-image-wrap">
                <img src="${category.image}" alt="${category.name}" loading="lazy" />
                <span class="category-number">${category.eyebrow}</span>
              </div>
              <div class="category-card-body">
                <div class="category-icon"><i class="fa-solid ${category.icon}"></i></div>
                <h3>${category.name}</h3>
                <p>${category.description}</p>
                <a href="#/products?category=${category.id}" class="text-link">Explore category <i class="fa-solid fa-arrow-right"></i></a>
              </div>
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
        <div class="section-heading split-heading reveal-on-scroll">
          <div>
            <span class="eyebrow">03 / Core products</span>
            <h2>Explore our <span>core products.</span></h2>
            <p>Browse representative irrigation products across water delivery, piping, fittings and system control. Each product can be opened for its application, features and available specifications.</p>
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
    <article class="product-card reveal-on-scroll">
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
    <section class="section crop-section" id="crop-suggestions">
      <div class="container">
        <div class="section-heading split-heading reveal-on-scroll">
          <div>
            <span class="eyebrow">02 / Crop suggestions</span>
            <h2>Start with your <span>crop.</span></h2>
            <p>Different crops need different water-delivery approaches. Use these quick suggestions as a starting point, then explore the full crop-solution catalogue for more detail.</p>
          </div>
          <a class="btn btn-outline btn-small" href="#/solutions">View All Crops <i class="fa-solid fa-arrow-right"></i></a>
        </div>

        <div class="crop-grid crop-image-grid">
          ${cropSolutions.map((crop) => `
            <article class="crop-card crop-image-card reveal-on-scroll" data-crop-card="${crop.id}">
              <div class="crop-image-wrap">
                <img src="${crop.image}" alt="${crop.name}" loading="lazy" />
              </div>
              <div class="crop-card-body">
                <div class="crop-icon"><i class="fa-solid ${crop.icon}"></i></div>
                <h3>${crop.name}</h3>
                <p>${crop.description}</p>
                <div class="tag-list">${crop.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
                <button class="btn btn-outline btn-small crop-suggestion-btn" type="button" data-crop-toggle="${crop.id}" aria-expanded="false">View suggestions <i class="fa-solid fa-chevron-down"></i></button>
                <div class="crop-suggestion" data-crop-suggestion="${crop.id}" hidden>
                  <strong>Suggested approach</strong>
                  <p>${crop.description} Consider matching the irrigation method, filtration and main-line capacity to the crop layout and field conditions.</p>
                </div>
              </div>
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
      <div class="container automation-layout reveal-on-scroll">
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

function renderServices() {
  const services = [
    ["fa-ruler-combined", "Site assessment", "Understand crop layout, water source, field conditions and irrigation requirements.", "assets/images/services/site-assessment.jpg"],
    ["fa-diagram-project", "System planning", "Plan the flow from source and filtration through main line, distribution and crop zones.", "assets/images/services/system-planning.jpg"],
    ["fa-screwdriver-wrench", "Installation support", "Support the practical setup of irrigation components, fittings, valves and accessories.", "assets/images/services/installation-support.webp"],
    ["fa-headset", "After-sales support", "Keep the system running with guidance, troubleshooting and product support.", "assets/images/services/after-sales-support.jpg"]
  ];

  return `
    <section class="section services-section" id="services">
      <div class="container">
        <div class="section-heading split-heading reveal-on-scroll">
          <div>
            <span class="eyebrow">06 / Setup & Services</span>
            <h2>From product selection to <span>field setup.</span></h2>
          </div>
          <p>GrowRich can support the complete irrigation journey — from understanding the crop and water source to planning, installation and after-sales guidance. The aim is to make every stage easier to understand and execute.</p>
        </div>
        <div class="feature-grid services-grid">
          ${services.map(([icon, title, text, image]) => `
            <article class="feature-card service-card reveal-on-scroll">
              <div class="card-media service-card-media">
                <img src="${image}" alt="${title}" loading="lazy" />
              </div>
              <div class="icon-box"><i class="fa-solid ${icon}"></i></div>
              <h3>${title}</h3>
              <p>${text}</p>
            </article>
          `).join("")}
        </div>
        <div class="service-cta">
          <div><strong>Need help planning your irrigation setup?</strong><span>Tell us about your crop, field and water source.</span></div>
          <a class="btn btn-primary" href="#/contact">Talk to GrowRich <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
    </section>
  `;
}

function renderAboutPreview() {
  return `
    <section class="section about-preview">
      <div class="container about-layout">
        <div class="about-image reveal-on-scroll">
          <img data-image-slot="about-preview-primary" src="assets/images/about/about-growrich.jpg" alt="GrowRich farmer in an agricultural field" loading="lazy" />
          <div class="image-badge"><strong>Grow More</strong><span>With Less Water</span></div>
        </div>
        <div class="about-copy reveal-on-scroll">
          <span class="eyebrow">05 / About GrowRich</span>
          <h2>Precision irrigation with an <span>Indian farming focus.</span></h2>
          <p>GrowRich Industries is positioned around precision irrigation for Indian farms, with a product range spanning drip, sprinkler, fogging, deep irrigation, automation and irrigation spares.</p>
          <p>The website brings that story together around practical farm needs: choosing the right products, understanding irrigation options and moving naturally toward technical guidance or an enquiry.</p>
          <a class="text-link large-link" href="#/about">Discover GrowRich <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
    </section>
  `;
}

function renderQuoteCTA() {
  return `
    <section class="cta-section">
      <div class="container cta-inner reveal-on-scroll">
        <div>
          <span class="eyebrow">07 / Request a quote</span>
          <h2>Need the right irrigation solution?</h2>
          <p>Tell us about your crop, field size, water source and product requirement. GrowRich can help you move from a requirement to a practical irrigation conversation.</p>
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
              ${categories.filter((category) => category.visible !== false).map((category) => `<button class="filter-btn" data-filter="${category.id}">${category.name}</button>`).join("")}
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
              <article class="solution-row reveal-on-scroll">
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
          <div class="about-image large reveal-on-scroll">
            <img data-image-slot="about-page-primary" src="assets/images/about/about-growrich.jpg" alt="GrowRich farmer in an agricultural field" />
          </div>
          <div class="about-copy reveal-on-scroll">
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
              <article class="feature-card reveal-on-scroll">
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

function renderServicesPage() {
  const selectedSlug = getSetupQuerySlug();
  const selected = getSetupSystem(selectedSlug);

  return `
    <div data-page="services" class="setup-services-page">
      <section class="setup-hero">
        <div class="setup-hero-backdrop"></div>
        <div class="container setup-hero-inner reveal-on-scroll">
          <div class="setup-hero-copy">
            <span class="eyebrow">Setup & Services</span>
            <h1>Plan your irrigation system <span>with confidence.</span></h1>
            <p>Choose an irrigation solution, understand the setup, see the components involved and learn how GrowRich can support the journey from planning to installation and after-sales guidance.</p>
            <div class="setup-hero-actions">
              <a class="btn btn-primary" href="#setup-solutions">Choose an irrigation solution <i class="fa-solid fa-arrow-down"></i></a>
              <a class="btn btn-outline setup-outline-btn" href="#/contact">Request a site assessment <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
          <div class="setup-hero-panel">
            <div class="setup-hero-panel-image">
              <img src="${selected.image}" alt="${selected.name}" />
            </div>
            <div class="setup-hero-panel-copy">
              <span>Selected solution</span>
              <strong>${selected.name}</strong>
              <a href="#setup-detail">Explore setup <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </section>

      <section class="setup-section setup-selection" id="setup-solutions">
        <div class="container">
          <div class="setup-section-heading reveal-on-scroll">
            <div>
              <span class="eyebrow">01 / Choose your solution</span>
              <h2>Start with the irrigation system <span>you need.</span></h2>
            </div>
            <p>Select a solution below. The setup information changes with your selection, so you can review the relevant applications, components, planning considerations and installation journey.</p>
          </div>

          <div class="setup-product-grid">
            ${setupSystems.map((system, index) => `
              <a class="setup-product-card ${system.slug === selected.slug ? "is-selected" : ""} reveal-on-scroll" href="#/services?system=${system.slug}" aria-label="Explore ${system.name} setup">
                <div class="setup-product-image-wrap">
                  <img src="${system.image}" alt="${system.name}" loading="lazy" />
                  <span class="setup-product-number">0${index + 1}</span>
                </div>
                <div class="setup-product-card-body">
                  <span class="setup-product-kicker">${system.suitableFor.slice(0, 2).join(" · ")}</span>
                  <h3>${system.name}</h3>
                  <p>${system.shortDescription}</p>
                  <span class="setup-product-link">View setup <i class="fa-solid fa-arrow-right"></i></span>
                </div>
              </a>
            `).join("")}
          </div>
        </div>
      </section>

      ${renderSelectedSetup(selected)}

      <section class="setup-section setup-process-band">
        <div class="container">
          <div class="setup-section-heading setup-section-heading-light reveal-on-scroll">
            <div>
              <span class="eyebrow eyebrow-light">04 / The GrowRich process</span>
              <h2>From selection to <span>field support.</span></h2>
            </div>
            <p>Every setup starts with the farm requirement and is shaped around the selected irrigation solution, site conditions and required components.</p>
          </div>
          <div class="setup-process-strip">
            ${[
              ["01", "Select", "Choose the irrigation solution."],
              ["02", "Assess", "Review the farm and water source."],
              ["03", "Plan", "Build the system and component plan."],
              ["04", "Install", "Connect and set up the system."],
              ["05", "Support", "Guide the customer after setup."]
            ].map(([number, title, text]) => `
              <div class="setup-process-item reveal-on-scroll">
                <span>${number}</span>
                <div><strong>${title}</strong><p>${text}</p></div>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      <section class="setup-section setup-final-cta">
        <div class="container setup-final-cta-inner reveal-on-scroll">
          <div>
            <span class="eyebrow">05 / Next step</span>
            <h2>Ready to plan your irrigation system?</h2>
            <p>Share your crop, farm area and water-source details with GrowRich for a setup discussion. Final pricing and installation requirements are confirmed after understanding the site.</p>
          </div>
          <div class="setup-final-actions">
            <a class="btn btn-primary" href="#/contact">Get a Setup Enquiry <i class="fa-solid fa-arrow-right"></i></a>
            <a class="setup-whatsapp-link" href="https://wa.me/${CONTACT.whatsapp}" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> Talk on WhatsApp</a>
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderSelectedSetup(system) {
  return `
    <section class="setup-section setup-detail" id="setup-detail">
      <div class="container">
        <div class="setup-detail-hero reveal-on-scroll">
          <div class="setup-detail-image">
            <img src="${system.image}" alt="${system.name}" />
          </div>
          <div class="setup-detail-intro">
            <span class="eyebrow">02 / Selected irrigation solution</span>
            <h2>${system.name} <span>Setup</span></h2>
            <p>${system.overview}</p>
            <div class="setup-stat-row">
              <div><small>Estimated cost</small><strong>${system.costLabel}</strong></div>
              <div><small>Best for</small><strong>${system.suitableFor.slice(0, 2).join(" & ")}</strong></div>
            </div>
          </div>
        </div>

        <div class="setup-info-grid">
          <article class="setup-info-panel setup-info-panel-wide reveal-on-scroll">
            <span class="setup-panel-index">01</span>
            <div>
              <h3>How it works</h3>
              <p>${system.howItWorks}</p>
              <div class="setup-benefit-list">
                ${system.benefits.map((item) => `<span><i class="fa-solid fa-check"></i>${item}</span>`).join("")}
              </div>
            </div>
          </article>

          <article class="setup-info-panel setup-cost-panel reveal-on-scroll">
            <span class="setup-panel-index">02</span>
            <div>
              <h3>Estimated setup cost</h3>
              <strong class="setup-cost-value">${system.costLabel}</strong>
              <p>${system.costNote}</p>
              <div class="setup-cost-note"><i class="fa-solid fa-circle-info"></i><span>Final quotation will be provided after the site and system requirements are understood.</span></div>
            </div>
          </article>

          <article class="setup-info-panel reveal-on-scroll">
            <span class="setup-panel-index">03</span>
            <div>
              <h3>Suitable for</h3>
              <div class="setup-chip-list">${system.suitableFor.map((item) => `<span>${item}</span>`).join("")}</div>
            </div>
          </article>

          <article class="setup-info-panel reveal-on-scroll">
            <span class="setup-panel-index">04</span>
            <div>
              <h3>Main components</h3>
              <ul class="setup-check-list">${system.components.map((item) => `<li><i class="fa-solid fa-check"></i>${item}</li>`).join("")}</ul>
            </div>
          </article>

          <article class="setup-info-panel setup-info-panel-wide reveal-on-scroll">
            <span class="setup-panel-index">05</span>
            <div>
              <h3>Important considerations</h3>
              <p>${system.considerations}</p>
            </div>
          </article>
        </div>

        <div class="setup-two-column-section">
          <div class="setup-subsection reveal-on-scroll">
            <span class="eyebrow">03 / GrowRich provides</span>
            <h2>What GrowRich <span>provides.</span></h2>
            <p class="setup-subsection-intro">The following support stages are presented as the practical setup journey for the selected irrigation solution.</p>
            <div class="setup-provides-grid">
              ${system.companyProvides.map(([title, text], index) => `
                <article class="setup-provide-card">
                  <span>0${index + 1}</span>
                  <div><h3>${title}</h3><p>${text}</p></div>
                </article>
              `).join("")}
            </div>
          </div>

          <aside class="setup-customer-card reveal-on-scroll">
            <span class="eyebrow">Customer input</span>
            <h2>What we need <span>from you.</span></h2>
            <p>A few practical details help the setup discussion stay focused.</p>
            <ul>${system.customerRequirements.map((item) => `<li><i class="fa-solid fa-check"></i>${item}</li>`).join("")}</ul>
          </aside>
        </div>

        <div class="setup-installation-section reveal-on-scroll">
          <div class="setup-section-heading">
            <div>
              <span class="eyebrow">Installation process</span>
              <h2>How your irrigation system <span>is installed.</span></h2>
            </div>
            <p>Installation requirements can vary by farm and system. This timeline shows the typical stages that need to be discussed and checked for the selected setup.</p>
          </div>
          <div class="setup-timeline">
            ${system.installationSteps.map(([title, text], index) => `
              <article class="setup-timeline-item">
                <div class="setup-timeline-marker">${String(index + 1).padStart(2, "0")}</div>
                <div class="setup-timeline-content"><h3>${title}</h3><p>${text}</p></div>
              </article>
            `).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function getSetupQuerySlug() {
  const query = window.location.hash.split("?")[1] || "";
  const params = new URLSearchParams(query);
  const requested = params.get("system");
  return setupSystems.some((system) => system.slug === requested) ? requested : setupSystems[0].slug;
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
              <a href="#" data-placeholder-link><i class="fa-brands fa-instagram"></i><span><small>Instagram</small>Visit Instagram</span></a>
              <a href="#" data-placeholder-link><i class="fa-brands fa-facebook-f"></i><span><small>Facebook</small>Visit Facebook</span></a>
              <a href="#" data-placeholder-link><i class="fa-brands fa-linkedin-in"></i><span><small>LinkedIn</small>Visit LinkedIn</span></a>
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
            <div class="enquiry-actions enquiry-actions-single" aria-label="Send your enquiry">
              <button class="btn btn-primary btn-send-everywhere" type="button" id="send-everywhere">
                <i class="fa-solid fa-paper-plane"></i> Send Message Everywhere
              </button>
            </div>
            <p class="form-note">The button opens the available WhatsApp, SMS, Facebook, LinkedIn and Email sharing/sending actions. Instagram does not provide a browser-based prefilled message action.</p>
          </form>
        </div>
      </section>
    </div>
  `;
}

function renderPageHero(title, description, icon) {
  return `
    <section class="page-hero reveal-on-scroll">
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
  const navbar = document.querySelector("#navbar");
  const syncNavbarState = () => {
    navbar?.classList.toggle("scrolled", window.scrollY > 8);
  };
  syncNavbarState();
  window.addEventListener("scroll", syncNavbarState, { passive: true });

  document.querySelector("#menu-toggle")?.addEventListener("click", () => {
    const nav = document.querySelector("#nav-links");
    const button = document.querySelector("#menu-toggle");
    nav.classList.toggle("open");
    button.setAttribute("aria-expanded", String(nav.classList.contains("open")));
    button.innerHTML = nav.classList.contains("open")
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
  });

  bindPlaceholderLinks();
}

function bindPlaceholderLinks() {
  document.querySelectorAll("[data-placeholder-link]:not([data-placeholder-bound])").forEach((link) => {
    link.dataset.placeholderBound = "true";
    link.addEventListener("click", (event) => {
      event.preventDefault();
      showToast("Add the approved social-media URL here.");
    });
  });
}

function bindPageEvents(route) {
  bindPlaceholderLinks();

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
    const sendButton = document.querySelector("#send-everywhere");

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

    sendButton?.addEventListener("click", () => {
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

      const encodedText = encodeURIComponent(text);
      const subject = encodeURIComponent(`Product Enquiry - ${enquiry.requirement}`);
      const body = encodeURIComponent(`${text}\n\nThank you.`);
      const siteUrl = encodeURIComponent(window.location.href);
      const actions = [
        { label: "WhatsApp", url: `https://wa.me/${CONTACT.whatsapp}?text=${encodedText}` },
        { label: "SMS", url: `sms:${CONTACT.phone.replaceAll(" ", "")}?body=${encodedText}` },
        { label: "Facebook", url: `https://www.facebook.com/sharer/sharer.php?u=${siteUrl}&quote=${encodedText}` },
        { label: "LinkedIn", url: `https://www.linkedin.com/sharing/share-offsite/?url=${siteUrl}` },
        { label: "Email", url: `mailto:${CONTACT.email}?subject=${subject}&body=${body}` }
      ];

      actions.forEach((action) => {
        const opened = window.open(action.url, "_blank", "noopener,noreferrer");
        if (!opened && (action.label === "Email" || action.label === "SMS")) {
          window.location.href = action.url;
        }
      });

      showToast("Opening the available WhatsApp, SMS, Facebook, LinkedIn and Email actions. Complete each send/share in its app.");
    });
  }

  document.querySelectorAll("[data-crop-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.cropToggle;
      const panel = document.querySelector(`[data-crop-suggestion="${id}"]`);
      if (!panel) return;
      const isHidden = panel.hidden;
      panel.hidden = !isHidden;
      button.setAttribute("aria-expanded", String(isHidden));
      button.innerHTML = isHidden
        ? 'Hide suggestions <i class="fa-solid fa-chevron-up"></i>'
        : 'View suggestions <i class="fa-solid fa-chevron-down"></i>';
    });
  });

  initScrollReveals();

  if (route.name === "home") {
    initHeroSlider();
  }

}

function initHeroSlider() {
  const slides = [...document.querySelectorAll("[data-hero-slide]")];
  const dots = [...document.querySelectorAll("[data-hero-dot]")];
  const prev = document.querySelector("#hero-prev");
  const next = document.querySelector("#hero-next");
  if (slides.length < 2) return;

  let current = 0;
  let timer;

  const show = (index) => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle("active", i === current));
    dots.forEach((dot, i) => dot.classList.toggle("active", i === current));
  };

  const restart = () => {
    window.clearInterval(timer);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    timer = window.setInterval(() => show(current + 1), 5600);
  };

  prev?.addEventListener("click", () => { show(current - 1); restart(); });
  next?.addEventListener("click", () => { show(current + 1); restart(); });
  dots.forEach((dot, i) => dot.addEventListener("click", () => { show(i); restart(); }));
  restart();
}

function initScrollReveals() {
  const elements = [...document.querySelectorAll(".reveal-on-scroll")];
  if (!elements.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  elements.forEach((element, index) => {
    element.style.setProperty("--reveal-delay", `${Math.min(index % 5, 4) * 70}ms`);
    observer.observe(element);
  });
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
