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
var app_default = "/build/_assets/app-HTFRP62V.css";

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
    className: "bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800"
  }, "Testing anything", /* @__PURE__ */ import_react.default.createElement("div", {
    className: "container flex flex-wrap justify-between items-center mx-auto"
  }, /* @__PURE__ */ import_react.default.createElement("a", {
    href: "#",
    className: "flex items-center"
  }, /* @__PURE__ */ import_react.default.createElement("img", {
    src: "/docs/images/logo.svg",
    className: "mr-3 h-6 sm:h-10",
    alt: "Flowbite Logo"
  }), /* @__PURE__ */ import_react.default.createElement("span", {
    className: "self-center text-xl font-semibold whitespace-nowrap dark:text-white"
  }, "Flowbite")))));
}
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-AWSBI6TZ.js.map
