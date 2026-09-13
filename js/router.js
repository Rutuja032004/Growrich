const ROUTES = {
  home: "#/",
  products: "#/products",
  solutions: "#/solutions",
  about: "#/about",
  contact: "#/contact"
};

export function navigate(path = "/") {
  const hash = path.startsWith("#") ? path : `#${path.startsWith("/") ? path : `/${path}`}`;
  window.location.hash = hash;
}

export function getRoute() {
  const raw = window.location.hash.replace(/^#/, "") || "/";
  const clean = raw.startsWith("/") ? raw : `/${raw}`;

  if (clean.startsWith("/product/")) {
    return {
      name: "product",
      slug: decodeURIComponent(clean.replace("/product/", ""))
    };
  }

  if (clean === "/products") return { name: "products" };
  if (clean === "/solutions") return { name: "solutions" };
  if (clean === "/about") return { name: "about" };
  if (clean === "/contact") return { name: "contact" };

  return { name: "home" };
}

export function initRouter(onRouteChange) {
  window.addEventListener("hashchange", onRouteChange);
  return onRouteChange();
}

export { ROUTES };
