# GrowRich Revamp — Single Page Demonstration

A frontend-only single-page application (SPA) demonstration for the GrowRich Industries website revamp.

## Stack

- HTML5
- CSS3
- Vanilla JavaScript (ES modules)
- Font Awesome 6.6.0 CDN
- Google Fonts
- Hash-based client-side routing

## Project structure

```text
growrich-revamp/
├── index.html
├── css/
│   ├── style.css
│   ├── responsive.css
│   └── components.css
├── js/
│   ├── app.js
│   ├── products.js
│   ├── router.js
│   └── ui.js
├── assets/
│   ├── images/
│   │   ├── hero/
│   │   │   └── growrich-hero.jpg
│   │   ├── products/
│   │   │   ├── drip-tape-flat-emitter-inline.png
│   │   │   ├── pressure-compensating-drip-tape.jpg
│   │   │   ├── swing-arm-sprinkler.jpg
│   │   │   ├── pe-layflat-hose.jpg
│   │   │   ├── pp-compression-ball-valve.jpg
│   │   │   └── automatic-self-cleaning-filter.webp
│   │   ├── crops/
│   │   └── about/
│   └── icons/
└── README.md
```

## Included demo features

- Responsive top contact/social bar
- Sticky navigation and mobile menu
- Hero section using the supplied GrowRich hero background image
- Product categories and searchable catalogue
- Product detail routes
- Supplied product images mapped to the matching catalogue products
- Crop/application solution section
- Smart-irrigation concept section
- About section
- Floating WhatsApp and Call actions
- Enquiry form with **Send via WhatsApp** and **Send via Email** actions
- No backend required for enquiry demonstration

## Supplied product-image mapping

| Product | Asset |
|---|---|
| Drip Tape with Flat Emitter In-Line | `assets/images/products/drip-tape-flat-emitter-inline.png` |
| Pressure Compensating Drip Tape | `assets/images/products/pressure-compensating-drip-tape.jpg` |
| Swing Arm Sprinkler | `assets/images/products/swing-arm-sprinkler.jpg` |
| PE Layflat Hose / Pre-Punched Flat Hose | `assets/images/products/pe-layflat-hose.jpg` |
| PP Compression Ball Valve | `assets/images/products/pp-compression-ball-valve.jpg` |
| Automatic Self-Cleaning Filter System | `assets/images/products/automatic-self-cleaning-filter.webp` |

## Run locally

Open the folder in VS Code and use Live Server, or run a simple local server:

```bash
python -m http.server 5500
```

Then open `http://localhost:5500`.

## Important demo note

This is intentionally a frontend demonstration. Product content should be verified against the final GrowRich-approved catalogue before production deployment. Replace placeholder imagery for products that do not yet have approved images.

Social links for Instagram, Facebook and LinkedIn are left as placeholders until the approved URLs are supplied.
