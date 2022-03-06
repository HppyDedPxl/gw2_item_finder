import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-ESAUA27I.js";
import {
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-P2FTGPOX.js";

// browser-route-module:Z:\GIT\Repositories\GW2ItemFinder\app\root.tsx?browser
init_react();

// app/root.tsx
init_react();

// app/styles/app.css
var app_default = "/build/_assets/app-TLZ4QIMX.css";

// app/root.tsx
var import_react = __toESM(require_react());
function links() {
  return [{ rel: "stylesheet", href: app_default }];
}
var meta = () => {
  return { title: "Guild Wars 2 Item Finder" };
};
function App() {
  return /* @__PURE__ */ import_react.default.createElement(Document, null, /* @__PURE__ */ import_react.default.createElement(Layout, null, /* @__PURE__ */ import_react.default.createElement(Outlet, null)));
}
function Document({ children }) {
  return /* @__PURE__ */ import_react.default.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ import_react.default.createElement("head", null, /* @__PURE__ */ import_react.default.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ import_react.default.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ import_react.default.createElement(Meta, null), /* @__PURE__ */ import_react.default.createElement(Links, null)), /* @__PURE__ */ import_react.default.createElement("body", null, children, /* @__PURE__ */ import_react.default.createElement(ScrollRestoration, null), /* @__PURE__ */ import_react.default.createElement(Scripts, null), /* @__PURE__ */ import_react.default.createElement(LiveReload, null)));
}
function Layout({ children }) {
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("nav", {
    className: "bg-gray-800"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "relative flex items-center justify-between h-16"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "absolute inset-y-0 left-0 flex items-center sm:hidden"
  }, /* @__PURE__ */ import_react.default.createElement("button", {
    type: "button",
    className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
    "aria-controls": "mobile-menu",
    "aria-expanded": "false"
  }, /* @__PURE__ */ import_react.default.createElement("span", {
    className: "sr-only"
  }, "Open main menu"), /* @__PURE__ */ import_react.default.createElement("svg", {
    className: "block h-6 w-6",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, /* @__PURE__ */ import_react.default.createElement("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M4 6h16M4 12h16M4 18h16"
  })), /* @__PURE__ */ import_react.default.createElement("svg", {
    className: "hidden h-6 w-6",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, /* @__PURE__ */ import_react.default.createElement("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M6 18L18 6M6 6l12 12"
  })))), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "flex-shrink-0 flex items-center"
  }, /* @__PURE__ */ import_react.default.createElement("img", {
    className: "block lg:hidden h-8 w-auto",
    src: "https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg",
    alt: "Workflow"
  }), /* @__PURE__ */ import_react.default.createElement("img", {
    className: "hidden lg:block h-8 w-auto",
    src: "https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg",
    alt: "Workflow"
  })), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "hidden sm:block sm:ml-6"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "flex space-x-4"
  }, /* @__PURE__ */ import_react.default.createElement("a", {
    href: "#",
    className: "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium",
    "aria-current": "page"
  }, "Dashboard"), /* @__PURE__ */ import_react.default.createElement("a", {
    href: "#",
    className: "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
  }, "Team"), /* @__PURE__ */ import_react.default.createElement("a", {
    href: "#",
    className: "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
  }, "Projects"), /* @__PURE__ */ import_react.default.createElement("a", {
    href: "#",
    className: "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
  }, "Calendar")))))), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "sm:hidden",
    id: "mobile-menu"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "px-2 pt-2 pb-3 space-y-1"
  }, /* @__PURE__ */ import_react.default.createElement("a", {
    href: "#",
    className: "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium",
    "aria-current": "page"
  }, "Dashboard"), /* @__PURE__ */ import_react.default.createElement("a", {
    href: "#",
    className: "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
  }, "Team"), /* @__PURE__ */ import_react.default.createElement("a", {
    href: "#",
    className: "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
  }, "Projects"), /* @__PURE__ */ import_react.default.createElement("a", {
    href: "#",
    className: "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
  }, "Calendar")))), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "container"
  }, children));
}
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-F7BQFKFP.js.map
