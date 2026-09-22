# GrowRich Revamp Updated

A cleaned and responsive static/hash-routing GrowRich Industries website built from the supplied project files.

## Run in VS Code

1. Open this folder in VS Code.
2. Install/use **Live Server** if available.
3. Open `index.html` with Live Server.
4. Do not open the HTML using `file://` if your browser blocks ES modules.

## Main files

- `index.html` — application shell and external font/icon resources
- `js/app.js` — application bootstrap
- `js/router.js` — hash routing
- `js/ui.js` — pages, navigation, products, crop solutions, enquiry interactions
- `js/products.js` — supplied product catalogue
- `js/cropSolutions.js` — supplied crop solution catalogue
- `css/style.css` — main design system
- `css/components.css` — reusable components and crop-solution UI
- `css/responsive.css` — tablet/mobile responsive rules
- `assets/` — local image assets used by the current data/UI

## Routes

- `#/` Home
- `#/products` Products
- `#/solutions` Crop Solutions
- `#/about` About
- `#/contact` Contact
- `#/product/<slug>` Product detail

The supplied product and crop data were retained. Local image files are included so the project has working visual assets even when the earlier archive did not contain its referenced asset folders.
Updated SPA prototype for GrowRich Industries using HTML5, CSS3 and vanilla JavaScript ES modules.

## Revamp implemented

- Light-blue + light-green visual theme.
- Supplied GrowRich Industries logo integrated into the header and footer branding.
- Three supplied hero banners displayed as an automatic slider with arrows and dots.
- Home-page order changed to:
  1. Hero
  2. Product Categories
  3. Crop Suggestions
  4. Core Products
  5. Why GrowRich
  6. About GrowRich
  7. Setup / Services
  8. Request a Quote
  9. Existing footer
- Supplied images mapped to all five product categories and five crop cards.
- Crop cards include expandable **View suggestions** controls.
- Setup / Services is available as a dedicated SPA route and in the main navigation.
- Contact form now has one common **Send Message Everywhere** action that opens WhatsApp, SMS, Facebook, LinkedIn and Email actions. Each platform still requires the user to complete the final send/share step because browsers do not allow a website to silently send messages on a user's behalf.
- WhatsApp, Instagram, Facebook, LinkedIn and Call controls are visibly available in the top bar, contact page and floating contact rail. Instagram/Facebook/LinkedIn remain placeholders until approved company URLs are supplied.
- Reduced section padding/card spacing and increased useful content density.
- Fixed product-category query routing so links such as `#/products?category=drip` work correctly.

## Supplied asset mapping

### Brand
- `assets/images/brand/growrich-logo.png`

### Hero
- `assets/images/hero/grow-more-less-water.png`
- `assets/images/hero/precision-irrigation-smarter-farming.png`
- `assets/images/hero/resource-smart-yield-focused-farming.png`

### Product categories
- Drip Irrigation → `assets/images/categories/drip-irrigation.jpg`
- Spray Irrigation → `assets/images/categories/spray-irrigation.webp`
- Main Line & Pipes → `assets/images/categories/main-line-pipes.webp`
- Compression Fittings & PVC Valves → `assets/images/categories/compression-fittings-pvc-valves.webp`
- Other Agriculture Products → `assets/images/categories/other-agriculture-products.png`

### Crop suggestions
- Cereals → `assets/images/crops/cereals.webp`
- Cotton → `assets/images/crops/cotton.jpg`
- Sugarcane → `assets/images/crops/sugarcane.jpg`
- Horticulture → `assets/images/crops/horticulture.jpg`
- Protected Cultivation → `assets/images/crops/protected-cultivation.webp`

## Run locally

Open the folder in VS Code and use Live Server, or run:

```bash
python -m http.server 5500
```

Then open `http://localhost:5500`.

## Git workflow

Work on the assigned feature branch. Review the changes locally, then:

```bash
git status
git add .
git commit -m "Implement GrowRich revamp updates"
git push origin <your-branch-name>
```

Create a Pull Request from the feature branch into `main` after review.


## Phase 1 update (no new image assets added)

- Added independent copy and CTAs for each hero slide while retaining the current supplied images temporarily.
- Shifted large-area sections toward a very light blue/green/white palette and removed heavy dark section backgrounds.
- Added a top-right View All Crops action and richer supporting copy to major home sections.
- Added subtle scroll-reveal/card-hover motion with prefers-reduced-motion support.
- Removed Other Agriculture Products from the visible home Product Categories display without deleting its catalogue data/assets.
- Added image-ready hooks for Why GrowRich and Setup / Services cards; no placeholder/random images were added.
- Marked the existing About images as replaceable image slots for Phase 3.
