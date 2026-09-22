const ROUTES = {
  home: "#/",
  products: "#/products",
  solutions: "#/solutions",
  about: "#/about",
  contact: "#/contact",
  services: "#/services"
};

export function navigate(path = "/") {
  const hash = path.startsWith("#") ? path : `#${path.startsWith("/") ? path : `/${path}`}`;
  window.location.hash = hash;
}

export function getRoute() {
  const raw = window.location.hash.replace(/^#/, "") || "/";
  const clean = raw.startsWith("/") ? raw : `/${raw}`;
  const routePath = clean.split("?")[0];

  if (routePath.startsWith("/product/")) {
    return {
      name: "product",
      slug: decodeURIComponent(routePath.replace("/product/", ""))
    };
  }

  if (routePath === "/products") return { name: "products" };
  if (routePath === "/solutions") return { name: "solutions" };
  if (routePath === "/about") return { name: "about" };
  if (routePath === "/contact") return { name: "contact" };
  if (routePath === "/services") return { name: "services" };

  return { name: "home" };
}

export function initRouter(onRouteChange) {
  window.addEventListener("hashchange", onRouteChange);
  return onRouteChange();
}

export { ROUTES };
