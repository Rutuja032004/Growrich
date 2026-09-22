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
