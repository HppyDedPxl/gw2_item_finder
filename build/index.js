var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:Z:\GIT\Repositories\gw2_item_finder\gw2_item_finder\app\root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta,
  useParentData: () => useParentData
});
init_react();
var import_remix2 = __toESM(require_remix());
var import_react = require("react");

// app/styles/app.css
var app_default = "/build/_assets/app-HFOLW7C3.css";

// route:Z:\GIT\Repositories\gw2_item_finder\gw2_item_finder\app\root.tsx
var import_react2 = __toESM(require("react"));
var import_react3 = require("@headlessui/react");
var import_outline = require("@heroicons/react/outline");

// app/components/Footer.tsx
init_react();
var import_react_router_dom = require("react-router-dom");
var Footer = (props) => /* @__PURE__ */ React.createElement("footer", {
  className: "bg-primary text-white h-12 sm:h-8 border-t-4 border-secondary font-serif shadow-footer"
}, /* @__PURE__ */ React.createElement("div", {
  className: "grid grid-cols-2 w-full h-full"
}, /* @__PURE__ */ React.createElement("div", null), /* @__PURE__ */ React.createElement("div", {
  className: "flex flex-row items-center justify-end px-4 space-x-2"
}, /* @__PURE__ */ React.createElement("p", {
  className: "flex text-xs text-white"
}, "\xA9 2022 FindMySkritt"), /* @__PURE__ */ React.createElement("div", {
  className: "flex dot"
}), /* @__PURE__ */ React.createElement("p", {
  className: "flex text-xs text-link hover:text-white transition-all hover:transition-all"
}, /* @__PURE__ */ React.createElement(import_react_router_dom.NavLink, {
  key: "about",
  to: "about"
}, "About / Contact")), /* @__PURE__ */ React.createElement("div", {
  className: "flex dot"
}), /* @__PURE__ */ React.createElement("p", {
  className: "flex text-xs text-link hover:text-white transition-all hover:transition-all"
}, /* @__PURE__ */ React.createElement(import_react_router_dom.NavLink, {
  key: "legal",
  to: "legal"
}, "Legal Disclaimers")))));
var Footer_default = Footer;

// route:Z:\GIT\Repositories\gw2_item_finder\gw2_item_finder\app\root.tsx
function links() {
  return [{ rel: "stylesheet", href: app_default }];
}
var meta = () => {
  return { title: "Find My Skritt!" };
};
function App() {
  return /* @__PURE__ */ import_react2.default.createElement(Document, null, /* @__PURE__ */ import_react2.default.createElement(Layout, null, /* @__PURE__ */ import_react2.default.createElement(ParametrizedOutlet, null)));
}
var context = (0, import_react.createContext)(null);
function useParentData() {
  let parentData = (0, import_react.useContext)(context);
  return parentData;
}
function ParametrizedOutlet({ data }) {
  return /* @__PURE__ */ import_react2.default.createElement(context.Provider, {
    value: data
  }, /* @__PURE__ */ import_react2.default.createElement(import_remix2.Outlet, null));
}
function Document({ children }) {
  return /* @__PURE__ */ import_react2.default.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ import_react2.default.createElement("head", null, /* @__PURE__ */ import_react2.default.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ import_react2.default.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ import_react2.default.createElement("link", {
    rel: "preconnect",
    href: "https://fonts.googleapis.com"
  }), /* @__PURE__ */ import_react2.default.createElement("link", {
    rel: "preconnect",
    href: "https://fonts.gstatic.com"
  }), /* @__PURE__ */ import_react2.default.createElement("link", {
    href: "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap",
    rel: "stylesheet"
  }), /* @__PURE__ */ import_react2.default.createElement("script", {
    async: true,
    src: "https://www.googletagmanager.com/gtag/js?id=G-L56MX11YFR"
  }), /* @__PURE__ */ import_react2.default.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-L56MX11YFR');
        `
    }
  }), /* @__PURE__ */ import_react2.default.createElement(import_remix2.Meta, null), /* @__PURE__ */ import_react2.default.createElement(import_remix2.Links, null)), /* @__PURE__ */ import_react2.default.createElement("body", {
    className: "mainBody w-full"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "h-full w-full"
  }, children, /* @__PURE__ */ import_react2.default.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ import_react2.default.createElement(import_remix2.Scripts, null), /* @__PURE__ */ import_react2.default.createElement(import_remix2.LiveReload, null)), /* @__PURE__ */ import_react2.default.createElement(Footer_default, null)));
}
var navigation = [
  { name: "Home", href: "/", current: true },
  { name: "How To", href: "/howto", current: false },
  { name: "Quick Search", href: "/ItemLists", current: false },
  { name: "Changelog", href: "/changelog", current: false }
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
var activeStyle = " text-black bg-topnavactive ";
var inactiveStyle = "text-gray-300 bg-topnavbutton hover:bg-topnavhover hover:text-white ";
var generalStyle = "px-3 py-2 rounded-md text-sm font-medium  ";
function Layout({ children }) {
  return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement(import_react3.Disclosure, {
    as: "nav",
    className: "bg-primary border-b-4 border-secondary shadow-nav"
  }, ({ open: open2 }) => /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "relative flex items-center justify-between h-16"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "absolute inset-y-0 left-0 flex items-center sm:hidden"
  }, /* @__PURE__ */ import_react2.default.createElement(import_react3.Disclosure.Button, {
    className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-tertiary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
  }, /* @__PURE__ */ import_react2.default.createElement("span", {
    className: "sr-only"
  }, "Open main menu"), open2 ? /* @__PURE__ */ import_react2.default.createElement(import_outline.XIcon, {
    className: "block h-6 w-6",
    "aria-hidden": "true"
  }) : /* @__PURE__ */ import_react2.default.createElement(import_outline.MenuIcon, {
    className: "block h-6 w-6",
    "aria-hidden": "true"
  }))), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "flex-shrink-0 flex items-center align-center pr-8"
  }, /* @__PURE__ */ import_react2.default.createElement("img", {
    className: "flex lg:hidden h-16 w-auto",
    src: "logo-skritt.png",
    alt: "Workflow"
  }), /* @__PURE__ */ import_react2.default.createElement("img", {
    className: "hidden lg:block h-16 w-auto",
    src: "logo-skritt.png",
    alt: "Workflow"
  }), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "fancyHeader text-white pl-2 titleFont text-xl"
  }, "Find My Skritt!")), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "hidden sm:flex sm:ml-6 align-center items-center"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "flex space-x-4"
  }, navigation.map((item) => /* @__PURE__ */ import_react2.default.createElement(import_remix2.NavLink, {
    key: item.name,
    to: item.href,
    className: ({ isActive }) => generalStyle + (isActive ? activeStyle : inactiveStyle)
  }, item.name))))))), /* @__PURE__ */ import_react2.default.createElement(import_react3.Disclosure.Panel, {
    className: "sm:hidden"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "px-2 pt-2 pb-3 space-y-1"
  }, navigation.map((item) => /* @__PURE__ */ import_react2.default.createElement(import_react3.Disclosure.Button, {
    key: item.name,
    as: "a",
    href: item.href,
    className: classNames(item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "block px-3 py-2 rounded-md text-base font-medium"),
    "aria-current": item.current ? "page" : void 0
  }, item.name)))))), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "container mx-auto h-full-8 px-6 my-10 content-center"
  }, children));
}

// route:Z:\GIT\Repositories\gw2_item_finder\gw2_item_finder\app\routes\ItemReport.tsx
var ItemReport_exports = {};
__export(ItemReport_exports, {
  default: () => Index
});
init_react();
function Index() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "bg-gray-800 border-solid rounded-2xl px-5 py-5"
  }));
}

// route:Z:\GIT\Repositories\gw2_item_finder\gw2_item_finder\app\routes\changelog.tsx
var changelog_exports = {};
__export(changelog_exports, {
  default: () => Changelog
});
init_react();
function Changelog() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "bg-primary outline rounded-2xl outline-2 outline-secondary overflow-hidden shadow-sp"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "h-auto w-full bg-secondary p-3 text-white text-md outline-secondary outline outline-5"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-md"
  }, "Changelog")), /* @__PURE__ */ React.createElement("div", {
    className: "p-4 text-xs text-white"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row h-full"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "flex font-bold text-md"
  }, "v.1.0 "), /* @__PURE__ */ React.createElement("p", {
    className: "flex italic text-[10px] pb-2 pl-2"
  }, "(3/13/2022)")), /* @__PURE__ */ React.createElement("ul", {
    className: "changelog-list pl-4"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "list-inside"
  }, "Initial Release"))))));
}

// route:Z:\GIT\Repositories\gw2_item_finder\gw2_item_finder\app\routes\ItemLists.tsx
var ItemLists_exports = {};
__export(ItemLists_exports, {
  default: () => ItemLists
});
init_react();

// app/components/ItemListCategory.tsx
init_react();
var import_outline2 = require("@heroicons/react/outline");
var import_react5 = require("react");

// app/components/ItemListGroup.tsx
init_react();
var import_ChevronDownIcon = __toESM(require("@heroicons/react/outline/ChevronDownIcon"));
var import_ChevronRightIcon = __toESM(require("@heroicons/react/outline/ChevronRightIcon"));
var import_react4 = require("react");

// app/components/ItemListItemEntry.tsx
init_react();
var ItemListItemEntry = (props) => {
  function callback() {
    props.onClick(props.item, props.parentGroup);
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("button", {
    className: "flex flex-row h-full h-7 py-[2px] w-full bg-secondary hover:bg-secondaryHL outline outline-primary outline-1 pl-10",
    onClick: callback
  }, /* @__PURE__ */ React.createElement("div", {
    className: "pl-8 flex h-full flex-row items-center align-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex h-full w-auto"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "rounded-md",
    src: props.item.Icon !== null ? props.item.Icon : props.parentGroup.Icon
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, props.item.Name))));
};
var ItemListItemEntry_default = ItemListItemEntry;

// app/components/ItemListGroup.tsx
var ItemListGroup = (props) => {
  const [bExpanded, setExpanded] = (0, import_react4.useState)(false);
  function clickSearchAllCallback() {
    props.onClickSearchAll(props.itemGroup);
  }
  function OnExpandClicked() {
    setExpanded(!bExpanded);
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "flex pl-4 h-8 py-1 w-full bg-secondary items-center content-center hover:bg-secondaryHL transition-all hover:transition-all outline outline-primary outline-1",
    onClick: OnExpandClicked
  }, bExpanded ? /* @__PURE__ */ React.createElement(import_ChevronDownIcon.default, {
    className: "h-full py-1 pl-2"
  }) : /* @__PURE__ */ React.createElement(import_ChevronRightIcon.default, {
    className: "h-full py-1 pl-2"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex h-full w-auto px-2"
  }, /* @__PURE__ */ React.createElement("img", {
    src: props.itemGroup.Icon,
    className: "rounded-md"
  })), /* @__PURE__ */ React.createElement("p", {
    className: "font-bold text-md text-gray-300"
  }, props.itemGroup.Name))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-column"
  }, /* @__PURE__ */ React.createElement(React.Fragment, null, bExpanded ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col w-full outline outline-primary outline-1"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "flex h-full h-8 w-full bg-secondary items-center content-center hover:bg-secondaryHL transition-all hover:transition-all",
    onClick: clickSearchAllCallback
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full text-center text-xs font-bold text-white"
  }, "Search All")), props.itemGroup.Items.map((i) => /* @__PURE__ */ React.createElement(ItemListItemEntry_default, {
    key: i.Name,
    item: i,
    parentGroup: props.itemGroup,
    onClick: props.onClickIndividual
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex h-2"
  }))) : /* @__PURE__ */ React.createElement(React.Fragment, null))));
};
var ItemListGroup_default = ItemListGroup;

// app/components/ItemListCategory.tsx
var ItemListCategory = (props) => {
  const [bExpanded, setExpanded] = (0, import_react5.useState)(false);
  function OnExpandClicked() {
    setExpanded(!bExpanded);
  }
  function clickSearchAllCallback() {
    props.onClickSearchCategory(props.category);
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-sp border-x-2 border-y-0 border border-tertiary rounded-t-md m-1 my-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "flex h-6 w-full bg-secondary items-center content-center hover:bg-secondaryHL transition-all hover:transition-all rounded-t-md",
    onClick: OnExpandClicked
  }, bExpanded ? /* @__PURE__ */ React.createElement(import_outline2.ChevronDownIcon, {
    className: "h-full py-1 pl-2"
  }) : /* @__PURE__ */ React.createElement(import_outline2.ChevronRightIcon, {
    className: "h-full py-1 pl-2"
  }), /* @__PURE__ */ React.createElement("p", {
    className: "px-2 font-bold text-md text-gray-300"
  }, props.category.Name))), /* @__PURE__ */ React.createElement("div", {
    className: "bg-secondary shadow-sp "
  }, /* @__PURE__ */ React.createElement(React.Fragment, null, bExpanded ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("button", {
    className: "flex h-8 w-full bg-secondary items-center content-center hover:bg-secondaryHL transition-all hover:transition-all",
    onClick: clickSearchAllCallback
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full text-center text-xs font-bold text-white"
  }, "Search All")), /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, props.category.Groups.map((group) => /* @__PURE__ */ React.createElement(ItemListGroup_default, {
    key: group.Name,
    onClickIndividual: props.onClickIndividual,
    onClickSearchAll: props.onClickSearchAll,
    itemGroup: group
  })))) : /* @__PURE__ */ React.createElement(React.Fragment, null)))));
};
var ItemListCategory_default = ItemListCategory;

// route:Z:\GIT\Repositories\gw2_item_finder\gw2_item_finder\app\routes\ItemLists.tsx
var import_remix3 = __toESM(require_remix());

// app/utility/ItemList_Infusions.ts
init_react();
var IL_Infusions = [
  {
    Name: "Raid Infusions",
    Groups: [
      {
        Name: "Ghostly Infusion",
        Icon: "https://render.guildwars2.com/file/297E4B766AFB54E8FBA14A1970A495EAA558F630/1302736.png",
        Items: [
          { Name: "Ghostly Infusion (Concentration)", ItemID: 85945, Icon: null },
          { Name: "Ghostly Infusion (Expertise)", ItemID: 85644, Icon: null },
          { Name: "Ghostly Infusion (Toughness)", ItemID: 77394, Icon: null },
          { Name: "Ghostly Infusion (Condition Damage)", ItemID: 77366, Icon: null },
          { Name: "Ghostly Infusion (Precision)", ItemID: 77316, Icon: null },
          { Name: "Ghostly Infusion (Power)", ItemID: 77310, Icon: null },
          { Name: "Ghostly Infusion (Vitality)", ItemID: 77303, Icon: null },
          { Name: "Ghostly Infusion (Healing Power)", ItemID: 77274, Icon: null }
        ]
      },
      {
        "Name": "Peerless Infusion",
        "Icon": "https://render.guildwars2.com/file/07D06928ED0B241D5111B7A8607EFF9BB0329405/2155911.png",
        "Items": [
          { Name: "Peerless Infusion (Toughness)", ItemID: 91140, Icon: "https://render.guildwars2.com/file/07D06928ED0B241D5111B7A8607EFF9BB0329405/2155911.png" },
          { Name: "Peerless Infusion (ConditionDamage)", ItemID: 91152, Icon: "https://render.guildwars2.com/file/07D06928ED0B241D5111B7A8607EFF9BB0329405/2155911.png" },
          { Name: "Peerless Infusion (Vitality)", ItemID: 91154, Icon: "https://render.guildwars2.com/file/07D06928ED0B241D5111B7A8607EFF9BB0329405/2155911.png" },
          { Name: "Peerless Infusion (Precision)", ItemID: 91180, Icon: "https://render.guildwars2.com/file/07D06928ED0B241D5111B7A8607EFF9BB0329405/2155911.png" },
          { Name: "Peerless Infusion (Power)", ItemID: 91202, Icon: "https://render.guildwars2.com/file/07D06928ED0B241D5111B7A8607EFF9BB0329405/2155911.png" },
          { Name: "Peerless Infusion (Healing)", ItemID: 91210, Icon: "https://render.guildwars2.com/file/07D06928ED0B241D5111B7A8607EFF9BB0329405/2155911.png" },
          { Name: "Peerless Infusion (Concentration)", ItemID: 91221, Icon: "https://render.guildwars2.com/file/07D06928ED0B241D5111B7A8607EFF9BB0329405/2155911.png" },
          { Name: "Peerless Infusion (Expertise)", ItemID: 91236, Icon: "https://render.guildwars2.com/file/07D06928ED0B241D5111B7A8607EFF9BB0329405/2155911.png" }
        ]
      }
    ]
  },
  {
    Name: "Event Infusions",
    Groups: [
      {
        Name: "Chak Infusion",
        Icon: "https://render.guildwars2.com/file/FE73F012119252F1935797B2EC2C94482AB5A308/831485.png",
        Items: [
          { Name: "Chak Infusion (Precision)", ItemID: 81616, Icon: "https://render.guildwars2.com/file/FE73F012119252F1935797B2EC2C94482AB5A308/831485.png" },
          { Name: "Chak Infusion (Healing)", ItemID: 81677, Icon: "https://render.guildwars2.com/file/FE73F012119252F1935797B2EC2C94482AB5A308/831485.png" },
          { Name: "Chak Infusion (Condition Damage)", ItemID: 81807, Icon: "https://render.guildwars2.com/file/FE73F012119252F1935797B2EC2C94482AB5A308/831485.png" },
          { Name: "Chak Infusion (Power)", ItemID: 81825, Icon: "https://render.guildwars2.com/file/FE73F012119252F1935797B2EC2C94482AB5A308/831485.png" },
          { Name: "Chak Infusion (Toughness)", ItemID: 81840, Icon: "https://render.guildwars2.com/file/FE73F012119252F1935797B2EC2C94482AB5A308/831485.png" },
          { Name: "Chak Infusion (Vitality)", ItemID: 82044, Icon: "https://render.guildwars2.com/file/FE73F012119252F1935797B2EC2C94482AB5A308/831485.png" },
          { Name: "Chak Infusion (Expertise)", ItemID: 85668, Icon: "https://render.guildwars2.com/file/FE73F012119252F1935797B2EC2C94482AB5A308/831485.png" },
          { Name: "Chak Infusion (Concentration)", ItemID: 86251, Icon: "https://render.guildwars2.com/file/FE73F012119252F1935797B2EC2C94482AB5A308/831485.png" }
        ]
      },
      { Name: "Liquid Aurillium Infusion", Icon: "https://render.guildwars2.com/file/A66CEF1B9C032C240EDB9077FCD53493CD5AC6B9/1203050.png", Items: [
        { Name: "Liquid Aurillium Infusion (Power)", ItemID: 81715, Icon: "https://render.guildwars2.com/file/A66CEF1B9C032C240EDB9077FCD53493CD5AC6B9/1203050.png" },
        { Name: "Liquid Aurillium Infusion (Precision)", ItemID: 81875, Icon: "https://render.guildwars2.com/file/A66CEF1B9C032C240EDB9077FCD53493CD5AC6B9/1203050.png" },
        { Name: "Liquid Aurillium Infusion (Healing)", ItemID: 81889, Icon: "https://render.guildwars2.com/file/A66CEF1B9C032C240EDB9077FCD53493CD5AC6B9/1203050.png" },
        { Name: "Liquid Aurillium Infusion (Toughness)", ItemID: 81918, Icon: "https://render.guildwars2.com/file/A66CEF1B9C032C240EDB9077FCD53493CD5AC6B9/1203050.png" },
        { Name: "Liquid Aurillium Infusion (Vitality)", ItemID: 81975, Icon: "https://render.guildwars2.com/file/A66CEF1B9C032C240EDB9077FCD53493CD5AC6B9/1203050.png" },
        { Name: "Liquid Aurillium Infusion (Condition Damage)", ItemID: 82006, Icon: "https://render.guildwars2.com/file/A66CEF1B9C032C240EDB9077FCD53493CD5AC6B9/1203050.png" },
        { Name: "Liquid Aurillium Infusion (Concentration)", ItemID: 86275, Icon: "https://render.guildwars2.com/file/A66CEF1B9C032C240EDB9077FCD53493CD5AC6B9/1203050.png" },
        { Name: "Liquid Aurillium Infusion (Expertise)", ItemID: 86291, Icon: "https://render.guildwars2.com/file/A66CEF1B9C032C240EDB9077FCD53493CD5AC6B9/1203050.png" }
      ] },
      { Name: "Preserved Queen Bee", Icon: "https://render.guildwars2.com/file/01C5A7B5B0B01C3605090750B44B760F70C07A05/831489.png", Items: [
        { Name: "Queen Bee Infusion (Precision)", ItemID: 81638, Icon: "https://render.guildwars2.com/file/01C5A7B5B0B01C3605090750B44B760F70C07A05/831489.png" },
        { Name: "Queen Bee Infusion (Power)", ItemID: 81663, Icon: "https://render.guildwars2.com/file/01C5A7B5B0B01C3605090750B44B760F70C07A05/831489.png" },
        { Name: "Queen Bee Infusion (Healing)", ItemID: 81679, Icon: "https://render.guildwars2.com/file/01C5A7B5B0B01C3605090750B44B760F70C07A05/831489.png" },
        { Name: "Queen Bee Infusion (Condition Damage)", ItemID: 81701, Icon: "https://render.guildwars2.com/file/01C5A7B5B0B01C3605090750B44B760F70C07A05/831489.png" },
        { Name: "Queen Bee Infusion (Toughness)", ItemID: 81818, Icon: "https://render.guildwars2.com/file/01C5A7B5B0B01C3605090750B44B760F70C07A05/831489.png" },
        { Name: "Queen Bee Infusion (Concentration)", ItemID: 86055, Icon: "https://render.guildwars2.com/file/01C5A7B5B0B01C3605090750B44B760F70C07A05/831489.png" },
        { Name: "Queen Bee Infusion (Vitality)", ItemID: 81897, Icon: "https://render.guildwars2.com/file/01C5A7B5B0B01C3605090750B44B760F70C07A05/831489.png" },
        { Name: "Queen Bee Infusion (Expertise)", ItemID: 86303, Icon: "https://render.guildwars2.com/file/01C5A7B5B0B01C3605090750B44B760F70C07A05/831489.png" }
      ] },
      { Name: "Festive Confetti Infusion", Icon: "https://render.guildwars2.com/file/00ED7EC9BB0A01045205ED6144FB24E9189B25C2/1822094.png", Items: [
        { Name: "Festive Confetti Infusion (Power)", ItemID: 84882, Icon: "https://render.guildwars2.com/file/00ED7EC9BB0A01045205ED6144FB24E9189B25C2/1822094.png" },
        { Name: "Festive Confetti Infusion (Precision)", ItemID: 84937, Icon: "https://render.guildwars2.com/file/00ED7EC9BB0A01045205ED6144FB24E9189B25C2/1822094.png" },
        { Name: "Festive Confetti Infusion (Toughness)", ItemID: 84959, Icon: "https://render.guildwars2.com/file/00ED7EC9BB0A01045205ED6144FB24E9189B25C2/1822094.png" },
        { Name: "Festive Confetti Infusion (Vitality)", ItemID: 84970, Icon: "https://render.guildwars2.com/file/00ED7EC9BB0A01045205ED6144FB24E9189B25C2/1822094.png" },
        { Name: "Festive Confetti Infusion (Healing)", ItemID: 85033, Icon: "https://render.guildwars2.com/file/00ED7EC9BB0A01045205ED6144FB24E9189B25C2/1822094.png" },
        { Name: "Festive Confetti Infusion (Concentration)", ItemID: 85996, Icon: "https://render.guildwars2.com/file/00ED7EC9BB0A01045205ED6144FB24E9189B25C2/1822094.png" },
        { Name: "Festive Confetti Infusion (Expertise)", ItemID: 85900, Icon: "https://render.guildwars2.com/file/00ED7EC9BB0A01045205ED6144FB24E9189B25C2/1822094.png" },
        { Name: "Festive Confetti Infusion (Condition Damage)", ItemID: 84871, Icon: "https://render.guildwars2.com/file/00ED7EC9BB0A01045205ED6144FB24E9189B25C2/1822094.png" }
      ] },
      { Name: "Crystal Infusion of Vitality", Icon: "https://render.guildwars2.com/file/A23305DCB835FFA4A42FB3963CE9C6D37D02419E/2038602.png", Items: [
        { Name: "Crystal Infusion of Vitality (Vitality)", ItemID: 88522, Icon: "https://render.guildwars2.com/file/A23305DCB835FFA4A42FB3963CE9C6D37D02419E/2038602.png" },
        { Name: "Crystal Infusion of Healing (Healing)", ItemID: 88603, Icon: "https://render.guildwars2.com/file/A23305DCB835FFA4A42FB3963CE9C6D37D02419E/2038602.png" },
        { Name: "Crystal Infusion of Toughness (Toughness)", ItemID: 88683, Icon: "https://render.guildwars2.com/file/A23305DCB835FFA4A42FB3963CE9C6D37D02419E/2038602.png" },
        { Name: "Crystal Infusion of Condition Damage (ConditionDamage)", ItemID: 88732, Icon: "https://render.guildwars2.com/file/A23305DCB835FFA4A42FB3963CE9C6D37D02419E/2038602.png" },
        { Name: "Crystal Infusion of Boon Duration (Concentration)", ItemID: 88770, Icon: "https://render.guildwars2.com/file/A23305DCB835FFA4A42FB3963CE9C6D37D02419E/2038602.png" },
        { Name: "Crystal Infusion of Power (Power)", ItemID: 88771, Icon: "https://render.guildwars2.com/file/A23305DCB835FFA4A42FB3963CE9C6D37D02419E/2038602.png" },
        { Name: "Crystal Infusion of Precision (Precision)", ItemID: 88871, Icon: "https://render.guildwars2.com/file/A23305DCB835FFA4A42FB3963CE9C6D37D02419E/2038602.png" },
        { Name: "Crystal Infusion of Condition Duration (Expertise)", ItemID: 88876, Icon: "https://render.guildwars2.com/file/A23305DCB835FFA4A42FB3963CE9C6D37D02419E/2038602.png" }
      ] },
      { Name: "Heart of the Khan-Ur", Icon: "https://render.guildwars2.com/file/02F3397EAE11AB1B48FD4A9A4ECA6B480AA1FF5B/2199305.png", Items: [
        { Name: "Heart of the Khan-Ur (Vitality)", ItemID: 91897, Icon: "https://render.guildwars2.com/file/02F3397EAE11AB1B48FD4A9A4ECA6B480AA1FF5B/2199305.png" },
        { Name: "Heart of the Khan-Ur (Precision)", ItemID: 91923, Icon: "https://render.guildwars2.com/file/02F3397EAE11AB1B48FD4A9A4ECA6B480AA1FF5B/2199305.png" },
        { Name: "Heart of the Khan-Ur (Power)", ItemID: 91930, Icon: "https://render.guildwars2.com/file/02F3397EAE11AB1B48FD4A9A4ECA6B480AA1FF5B/2199305.png" },
        { Name: "Heart of the Khan-Ur (Expertise)", ItemID: 91996, Icon: "https://render.guildwars2.com/file/02F3397EAE11AB1B48FD4A9A4ECA6B480AA1FF5B/2199305.png" },
        { Name: "Heart of the Khan-Ur (Healing)", ItemID: 92018, Icon: "https://render.guildwars2.com/file/02F3397EAE11AB1B48FD4A9A4ECA6B480AA1FF5B/2199305.png" },
        { Name: "Heart of the Khan-Ur (Toughness)", ItemID: 92023, Icon: "https://render.guildwars2.com/file/02F3397EAE11AB1B48FD4A9A4ECA6B480AA1FF5B/2199305.png" },
        { Name: "Heart of the Khan-Ur (ConditionDamage)", ItemID: 92073, Icon: "https://render.guildwars2.com/file/02F3397EAE11AB1B48FD4A9A4ECA6B480AA1FF5B/2199305.png" },
        { Name: "Heart of the Khan-Ur (Concentration)", ItemID: 92075, Icon: "https://render.guildwars2.com/file/02F3397EAE11AB1B48FD4A9A4ECA6B480AA1FF5B/2199305.png" }
      ] },
      { Name: "Deldrimor Stoneskin Infusion", Icon: "https://render.guildwars2.com/file/0817BB3CE7CA34E2C9C0A759007D57F634D30F9D/2388250.png", Items: [
        { Name: "Deldrimor Stoneskin Infusion (Precision)", ItemID: 94481, Icon: "https://render.guildwars2.com/file/0817BB3CE7CA34E2C9C0A759007D57F634D30F9D/2388250.png" },
        { Name: "Deldrimor Stoneskin Infusion (Healing)", ItemID: 94484, Icon: "https://render.guildwars2.com/file/0817BB3CE7CA34E2C9C0A759007D57F634D30F9D/2388250.png" },
        { Name: "Deldrimor Stoneskin Infusion (Expertise)", ItemID: 94487, Icon: "https://render.guildwars2.com/file/0817BB3CE7CA34E2C9C0A759007D57F634D30F9D/2388250.png" },
        { Name: "Deldrimor Stoneskin Infusion (Power)", ItemID: 94543, Icon: "https://render.guildwars2.com/file/0817BB3CE7CA34E2C9C0A759007D57F634D30F9D/2388250.png" },
        { Name: "Deldrimor Stoneskin Infusion (ConditionDamage)", ItemID: 94572, Icon: "https://render.guildwars2.com/file/0817BB3CE7CA34E2C9C0A759007D57F634D30F9D/2388250.png" },
        { Name: "Deldrimor Stoneskin Infusion (Vitality)", ItemID: 94583, Icon: "https://render.guildwars2.com/file/0817BB3CE7CA34E2C9C0A759007D57F634D30F9D/2388250.png" },
        { Name: "Deldrimor Stoneskin Infusion (Concentration)", ItemID: 94584, Icon: "https://render.guildwars2.com/file/0817BB3CE7CA34E2C9C0A759007D57F634D30F9D/2388250.png" },
        { Name: "Deldrimor Stoneskin Infusion (Toughness)", ItemID: 94609, Icon: "https://render.guildwars2.com/file/0817BB3CE7CA34E2C9C0A759007D57F634D30F9D/2388250.png" }
      ] }
    ]
  },
  {
    Name: "Achievement Infusions",
    Groups: [
      { Name: "Koda's Warmth Enrichment", Icon: "https://render.guildwars2.com/file/5D697C4321A3426930CF50192318564908A10BD6/1601467.png", Items: [
        { Name: "Koda's Warmth Enrichment", ItemID: 79926, Icon: "https://render.guildwars2.com/file/5D697C4321A3426930CF50192318564908A10BD6/1601467.png" }
      ] },
      { Name: "Otter's Blessing Enrichment", Icon: "https://render.guildwars2.com/file/919D017EA52BD7D0E6777208C2CE0EA3C19FA8CE/2314414.png", Items: [
        { Name: "Otter's Blessing Enrichment", ItemID: 93798, Icon: "https://render.guildwars2.com/file/919D017EA52BD7D0E6777208C2CE0EA3C19FA8CE/2314414.png" }
      ] },
      { Name: "Celebratory Birthday Enrichment", Icon: "https://render.guildwars2.com/file/77E54B90EFFEAD576125E8917EF8032CFC26604B/2323869.png", Items: [
        { Name: "Celebratory Birthday Enrichment", ItemID: 93953, Icon: "https://render.guildwars2.com/file/77E54B90EFFEAD576125E8917EF8032CFC26604B/2323869.png" }
      ] },
      { Name: "Frost Legion Infusion", Icon: "https://render.guildwars2.com/file/3A7D117EDAF805376A78340134062A7170319548/2314088.png", Items: [
        { Name: "Frost Legion Infusion (ConditionDamage)", ItemID: 93720, Icon: "https://render.guildwars2.com/file/3A7D117EDAF805376A78340134062A7170319548/2314088.png" },
        { Name: "Frost Legion Infusion (Healing)", ItemID: 93758, Icon: "https://render.guildwars2.com/file/3A7D117EDAF805376A78340134062A7170319548/2314088.png" },
        { Name: "Frost Legion Infusion (Toughness)", ItemID: 93773, Icon: "https://render.guildwars2.com/file/3A7D117EDAF805376A78340134062A7170319548/2314088.png" },
        { Name: "Frost Legion Infusion (Concentration)", ItemID: 93775, Icon: "https://render.guildwars2.com/file/3A7D117EDAF805376A78340134062A7170319548/2314088.png" },
        { Name: "Frost Legion Infusion (Power)", ItemID: 93829, Icon: "https://render.guildwars2.com/file/3A7D117EDAF805376A78340134062A7170319548/2314088.png" },
        { Name: "Frost Legion Infusion (Expertise)", ItemID: 93858, Icon: "https://render.guildwars2.com/file/3A7D117EDAF805376A78340134062A7170319548/2314088.png" },
        { Name: "Frost Legion Infusion (Precision)", ItemID: 93906, Icon: "https://render.guildwars2.com/file/3A7D117EDAF805376A78340134062A7170319548/2314088.png" },
        { Name: "Frost Legion Infusion (Vitality)", ItemID: 93920, Icon: "https://render.guildwars2.com/file/3A7D117EDAF805376A78340134062A7170319548/2314088.png" }
      ] },
      { Name: "Jormag Left Eye Infusion", Icon: "https://render.guildwars2.com/file/E6C14E380D0227433290C80B2DEA0B7F71A2B266/2433076.png", Items: [
        { Name: "Jormag Left Eye Infusion (Power)", ItemID: 94929, Icon: "https://render.guildwars2.com/file/E6C14E380D0227433290C80B2DEA0B7F71A2B266/2433076.png" },
        { Name: "Jormag Left Eye Infusion (Concentration)", ItemID: 94937, Icon: "https://render.guildwars2.com/file/E6C14E380D0227433290C80B2DEA0B7F71A2B266/2433076.png" },
        { Name: "Jormag Left Eye Infusion (Vitality)", ItemID: 94944, Icon: "https://render.guildwars2.com/file/E6C14E380D0227433290C80B2DEA0B7F71A2B266/2433076.png" },
        { Name: "Jormag Left Eye Infusion (Healing)", ItemID: 94949, Icon: "https://render.guildwars2.com/file/E6C14E380D0227433290C80B2DEA0B7F71A2B266/2433076.png" },
        { Name: "Jormag Left Eye Infusion (ConditionDamage)", ItemID: 94954, Icon: "https://render.guildwars2.com/file/E6C14E380D0227433290C80B2DEA0B7F71A2B266/2433076.png" },
        { Name: "Jormag Left Eye Infusion (Toughness)", ItemID: 94963, Icon: "https://render.guildwars2.com/file/E6C14E380D0227433290C80B2DEA0B7F71A2B266/2433076.png" },
        { Name: "Jormag Left Eye Infusion (Expertise)", ItemID: 94969, Icon: "https://render.guildwars2.com/file/E6C14E380D0227433290C80B2DEA0B7F71A2B266/2433076.png" },
        { Name: "Jormag Left Eye Infusion (Precision)", ItemID: 94980, Icon: "https://render.guildwars2.com/file/E6C14E380D0227433290C80B2DEA0B7F71A2B266/2433076.png" }
      ] },
      { Name: "Jormag Right Eye Infusion", Icon: "https://render.guildwars2.com/file/3A07E9A22A7BC340A7CD0BAB2C435EDE42F0614D/2433077.png", Items: [
        { Name: "Jormag Right Eye Infusion (Healing)", ItemID: 94934, Icon: "https://render.guildwars2.com/file/3A07E9A22A7BC340A7CD0BAB2C435EDE42F0614D/2433077.png" },
        { Name: "Jormag Right Eye Infusion (Vitality)", ItemID: 94938, Icon: "https://render.guildwars2.com/file/3A07E9A22A7BC340A7CD0BAB2C435EDE42F0614D/2433077.png" },
        { Name: "Jormag Right Eye Infusion (Power)", ItemID: 94946, Icon: "https://render.guildwars2.com/file/3A07E9A22A7BC340A7CD0BAB2C435EDE42F0614D/2433077.png" },
        { Name: "Jormag Right Eye Infusion (Concentration)", ItemID: 94948, Icon: "https://render.guildwars2.com/file/3A07E9A22A7BC340A7CD0BAB2C435EDE42F0614D/2433077.png" },
        { Name: "Jormag Right Eye Infusion (ConditionDamage)", ItemID: 94958, Icon: "https://render.guildwars2.com/file/3A07E9A22A7BC340A7CD0BAB2C435EDE42F0614D/2433077.png" },
        { Name: "Jormag Right Eye Infusion (Toughness)", ItemID: 94962, Icon: "https://render.guildwars2.com/file/3A07E9A22A7BC340A7CD0BAB2C435EDE42F0614D/2433077.png" },
        { Name: "Jormag Right Eye Infusion (Expertise)", ItemID: 94972, Icon: "https://render.guildwars2.com/file/3A07E9A22A7BC340A7CD0BAB2C435EDE42F0614D/2433077.png" },
        { Name: "Jormag Right Eye Infusion (Precision)", ItemID: 94979, Icon: "https://render.guildwars2.com/file/3A07E9A22A7BC340A7CD0BAB2C435EDE42F0614D/2433077.png" }
      ] },
      { Name: "Primordus Left Eye Infusion", Icon: "https://render.guildwars2.com/file/497107FC62B268BB1453DE39C0D9CC781CE8A80A/2433078.png", Items: [
        { Name: "Primordus Left Eye Infusion (Precision)", ItemID: 94935, Icon: "https://render.guildwars2.com/file/497107FC62B268BB1453DE39C0D9CC781CE8A80A/2433078.png" },
        { Name: "Primordus Left Eye Infusion (Healing)", ItemID: 94943, Icon: "https://render.guildwars2.com/file/497107FC62B268BB1453DE39C0D9CC781CE8A80A/2433078.png" },
        { Name: "Primordus Left Eye Infusion (Expertise)", ItemID: 94951, Icon: "https://render.guildwars2.com/file/497107FC62B268BB1453DE39C0D9CC781CE8A80A/2433078.png" },
        { Name: "Primordus Left Eye Infusion (Toughness)", ItemID: 94957, Icon: "https://render.guildwars2.com/file/497107FC62B268BB1453DE39C0D9CC781CE8A80A/2433078.png" },
        { Name: "Primordus Left Eye Infusion (ConditionDamage)", ItemID: 94964, Icon: "https://render.guildwars2.com/file/497107FC62B268BB1453DE39C0D9CC781CE8A80A/2433078.png" },
        { Name: "Primordus Left Eye Infusion (Concentration)", ItemID: 94965, Icon: "https://render.guildwars2.com/file/497107FC62B268BB1453DE39C0D9CC781CE8A80A/2433078.png" },
        { Name: "Primordus Left Eye Infusion (Vitality)", ItemID: 94970, Icon: "https://render.guildwars2.com/file/497107FC62B268BB1453DE39C0D9CC781CE8A80A/2433078.png" },
        { Name: "Primordus Left Eye Infusion (Power)", ItemID: 94978, Icon: "https://render.guildwars2.com/file/497107FC62B268BB1453DE39C0D9CC781CE8A80A/2433078.png" }
      ] },
      { Name: "Primordus Right Eye Infusion", Icon: "https://render.guildwars2.com/file/F86B9BD3A92D2D31211274F908F0CC91B0DCD055/2433079.png", Items: [
        { Name: "Primordus Right Eye Infusion (Concentration)", ItemID: 94928, Icon: "https://render.guildwars2.com/file/F86B9BD3A92D2D31211274F908F0CC91B0DCD055/2433079.png" },
        { Name: "Primordus Right Eye Infusion (Healing)", ItemID: 94930, Icon: "https://render.guildwars2.com/file/F86B9BD3A92D2D31211274F908F0CC91B0DCD055/2433079.png" },
        { Name: "Primordus Right Eye Infusion (Expertise)", ItemID: 94939, Icon: "https://render.guildwars2.com/file/F86B9BD3A92D2D31211274F908F0CC91B0DCD055/2433079.png" },
        { Name: "Primordus Right Eye Infusion (ConditionDamage)", ItemID: 94941, Icon: "https://render.guildwars2.com/file/F86B9BD3A92D2D31211274F908F0CC91B0DCD055/2433079.png" },
        { Name: "Primordus Right Eye Infusion (Vitality)", ItemID: 94952, Icon: "https://render.guildwars2.com/file/F86B9BD3A92D2D31211274F908F0CC91B0DCD055/2433079.png" },
        { Name: "Primordus Right Eye Infusion (Power)", ItemID: 94955, Icon: "https://render.guildwars2.com/file/F86B9BD3A92D2D31211274F908F0CC91B0DCD055/2433079.png" },
        { Name: "Primordus Right Eye Infusion (Precision)", ItemID: 94971, Icon: "https://render.guildwars2.com/file/F86B9BD3A92D2D31211274F908F0CC91B0DCD055/2433079.png" },
        { Name: "Primordus Right Eye Infusion (Toughness)", ItemID: 94977, Icon: "https://render.guildwars2.com/file/F86B9BD3A92D2D31211274F908F0CC91B0DCD055/2433079.png" }
      ] }
    ]
  },
  {
    Name: "Fractals of the Mists Infusions",
    Groups: [
      { Name: "Celestial Infusion (Blue)", Icon: "https://render.guildwars2.com/file/CDC035E50BDB51A2D14B0840792160620E0FE468/1729286.png", Items: [
        { Name: "Celestial Infusion (Blue) (Precision)", ItemID: 81761, Icon: "https://render.guildwars2.com/file/CDC035E50BDB51A2D14B0840792160620E0FE468/1729286.png" },
        { Name: "Celestial Infusion (Blue) (Toughness)", ItemID: 81779, Icon: "https://render.guildwars2.com/file/CDC035E50BDB51A2D14B0840792160620E0FE468/1729286.png" },
        { Name: "Celestial Infusion (Blue) (Healing)", ItemID: 81811, Icon: "https://render.guildwars2.com/file/CDC035E50BDB51A2D14B0840792160620E0FE468/1729286.png" },
        { Name: "Celestial Infusion (Blue) (Vitality)", ItemID: 81878, Icon: "https://render.guildwars2.com/file/CDC035E50BDB51A2D14B0840792160620E0FE468/1729286.png" },
        { Name: "Celestial Infusion (Blue) (Power)", ItemID: 81919, Icon: "https://render.guildwars2.com/file/CDC035E50BDB51A2D14B0840792160620E0FE468/1729286.png" },
        { Name: "Celestial Infusion (Blue) (ConditionDamage)", ItemID: 81991, Icon: "https://render.guildwars2.com/file/CDC035E50BDB51A2D14B0840792160620E0FE468/1729286.png" },
        { Name: "Celestial Infusion (Blue) (Expertise)", ItemID: 85989, Icon: "https://render.guildwars2.com/file/CDC035E50BDB51A2D14B0840792160620E0FE468/1729286.png" },
        { Name: "Celestial Infusion (Blue) (Concentration)", ItemID: 86347, Icon: "https://render.guildwars2.com/file/CDC035E50BDB51A2D14B0840792160620E0FE468/1729286.png" }
      ] },
      { Name: "Celestial Infusion (Red)", Icon: "https://render.guildwars2.com/file/E05108050955E3D4A50E9196C8A5CDFFB4D7C891/1729287.png", Items: [
        { Name: "Celestial Infusion (Red) (Power)", ItemID: 81783, Icon: "https://render.guildwars2.com/file/E05108050955E3D4A50E9196C8A5CDFFB4D7C891/1729287.png" },
        { Name: "Celestial Infusion (Red) (Precision)", ItemID: 81792, Icon: "https://render.guildwars2.com/file/E05108050955E3D4A50E9196C8A5CDFFB4D7C891/1729287.png" },
        { Name: "Celestial Infusion (Red) (Healing)", ItemID: 81814, Icon: "https://render.guildwars2.com/file/E05108050955E3D4A50E9196C8A5CDFFB4D7C891/1729287.png" },
        { Name: "Celestial Infusion (Red) (ConditionDamage)", ItemID: 81927, Icon: "https://render.guildwars2.com/file/E05108050955E3D4A50E9196C8A5CDFFB4D7C891/1729287.png" },
        { Name: "Celestial Infusion (Red) (Vitality)", ItemID: 82062, Icon: "https://render.guildwars2.com/file/E05108050955E3D4A50E9196C8A5CDFFB4D7C891/1729287.png" },
        { Name: "Celestial Infusion (Red) (Toughness)", ItemID: 82070, Icon: "https://render.guildwars2.com/file/E05108050955E3D4A50E9196C8A5CDFFB4D7C891/1729287.png" },
        { Name: "Celestial Infusion (Red) (Expertise)", ItemID: 85646, Icon: "https://render.guildwars2.com/file/E05108050955E3D4A50E9196C8A5CDFFB4D7C891/1729287.png" },
        { Name: "Celestial Infusion (Red) (Concentration)", ItemID: 85833, Icon: "https://render.guildwars2.com/file/E05108050955E3D4A50E9196C8A5CDFFB4D7C891/1729287.png" }
      ] },
      { Name: "Abyssal Infusion", Icon: "https://render.guildwars2.com/file/F43E6BBFD2FCA496616055ECFD489B6F29F2B30A/2332364.png", Items: [
        { Name: "Abyssal Infusion (Expertise)", ItemID: 94010, Icon: "https://render.guildwars2.com/file/F43E6BBFD2FCA496616055ECFD489B6F29F2B30A/2332364.png" },
        { Name: "Abyssal Infusion (Concentration)", ItemID: 94024, Icon: "https://render.guildwars2.com/file/F43E6BBFD2FCA496616055ECFD489B6F29F2B30A/2332364.png" },
        { Name: "Abyssal Infusion (Healing)", ItemID: 94028, Icon: "https://render.guildwars2.com/file/F43E6BBFD2FCA496616055ECFD489B6F29F2B30A/2332364.png" },
        { Name: "Abyssal Infusion (ConditionDamage)", ItemID: 94039, Icon: "https://render.guildwars2.com/file/F43E6BBFD2FCA496616055ECFD489B6F29F2B30A/2332364.png" },
        { Name: "Abyssal Infusion (Power)", ItemID: 94078, Icon: "https://render.guildwars2.com/file/F43E6BBFD2FCA496616055ECFD489B6F29F2B30A/2332364.png" },
        { Name: "Abyssal Infusion (Toughness)", ItemID: 94079, Icon: "https://render.guildwars2.com/file/F43E6BBFD2FCA496616055ECFD489B6F29F2B30A/2332364.png" },
        { Name: "Abyssal Infusion (Vitality)", ItemID: 94090, Icon: "https://render.guildwars2.com/file/F43E6BBFD2FCA496616055ECFD489B6F29F2B30A/2332364.png" },
        { Name: "Abyssal Infusion (Precision)", ItemID: 94091, Icon: "https://render.guildwars2.com/file/F43E6BBFD2FCA496616055ECFD489B6F29F2B30A/2332364.png" }
      ] }
    ]
  },
  {
    Name: "Halloween Infusions",
    Groups: [
      { Name: "Phospholuminescent Infusion", Icon: "https://render.guildwars2.com/file/0461C37EFE7D1C507174A226BA34AF160BE5C693/1508108.png", Items: [
        { Name: "Phospholuminescent Infusion (Precision)", ItemID: 79639, Icon: "https://render.guildwars2.com/file/0461C37EFE7D1C507174A226BA34AF160BE5C693/1508108.png" },
        { Name: "Phospholuminescent Infusion (Vitality)", ItemID: 79653, Icon: "https://render.guildwars2.com/file/0461C37EFE7D1C507174A226BA34AF160BE5C693/1508108.png" },
        { Name: "Phospholuminescent Infusion (Toughness)", ItemID: 79661, Icon: "https://render.guildwars2.com/file/0461C37EFE7D1C507174A226BA34AF160BE5C693/1508108.png" },
        { Name: "Phospholuminescent Infusion (Power)", ItemID: 79665, Icon: "https://render.guildwars2.com/file/0461C37EFE7D1C507174A226BA34AF160BE5C693/1508108.png" },
        { Name: "Phospholuminescent Infusion (Healing)", ItemID: 79669, Icon: "https://render.guildwars2.com/file/0461C37EFE7D1C507174A226BA34AF160BE5C693/1508108.png" },
        { Name: "Phospholuminescent Infusion (ConditionDamage)", ItemID: 79674, Icon: "https://render.guildwars2.com/file/0461C37EFE7D1C507174A226BA34AF160BE5C693/1508108.png" },
        { Name: "Phospholuminescent Infusion (Concentration)", ItemID: 85863, Icon: "https://render.guildwars2.com/file/0461C37EFE7D1C507174A226BA34AF160BE5C693/1508108.png" },
        { Name: "Phospholuminescent Infusion (Expertise)", ItemID: 85885, Icon: "https://render.guildwars2.com/file/0461C37EFE7D1C507174A226BA34AF160BE5C693/1508108.png" }
      ] },
      { Name: "Polyluminescent Undulating Infusion (Black)", Icon: "https://render.guildwars2.com/file/B4C6490CAE379BBD90EF68C00A2604477321B468/888378.png", Items: [
        { Name: "Polyluminescent Undulating Infusion (Black) (Toughness)", ItemID: 81624, Icon: "https://render.guildwars2.com/file/B4C6490CAE379BBD90EF68C00A2604477321B468/888378.png" },
        { Name: "Polyluminescent Undulating Infusion (Black) (Precision)", ItemID: 81709, Icon: "https://render.guildwars2.com/file/B4C6490CAE379BBD90EF68C00A2604477321B468/888378.png" },
        { Name: "Polyluminescent Undulating Infusion (Black) (Vitality)", ItemID: 81810, Icon: "https://render.guildwars2.com/file/B4C6490CAE379BBD90EF68C00A2604477321B468/888378.png" },
        { Name: "Polyluminescent Undulating Infusion (Black) (ConditionDamage)", ItemID: 81877, Icon: "https://render.guildwars2.com/file/B4C6490CAE379BBD90EF68C00A2604477321B468/888378.png" },
        { Name: "Polyluminescent Undulating Infusion (Black) (Power)", ItemID: 82013, Icon: "https://render.guildwars2.com/file/B4C6490CAE379BBD90EF68C00A2604477321B468/888378.png" },
        { Name: "Polyluminescent Undulating Infusion (Black) (Healing)", ItemID: 82039, Icon: "https://render.guildwars2.com/file/B4C6490CAE379BBD90EF68C00A2604477321B468/888378.png" },
        { Name: "Polyluminescent Undulating Infusion (Black) (Expertise)", ItemID: 85974, Icon: "https://render.guildwars2.com/file/B4C6490CAE379BBD90EF68C00A2604477321B468/888378.png" },
        { Name: "Polyluminescent Undulating Infusion (Black) (Concentration)", ItemID: 86248, Icon: "https://render.guildwars2.com/file/B4C6490CAE379BBD90EF68C00A2604477321B468/888378.png" }
      ] },
      { Name: "Polyluminescent Undulating Infusion (Green)", Icon: "https://render.guildwars2.com/file/97EDAF65FCECF802544DD54B36DC3A09323B254A/888374.png", Items: [
        { Name: "Polyluminescent Undulating Infusion (Green) (Vitality)", ItemID: 81612, Icon: "https://render.guildwars2.com/file/97EDAF65FCECF802544DD54B36DC3A09323B254A/888374.png" },
        { Name: "Polyluminescent Undulating Infusion (Green) (Power)", ItemID: 81678, Icon: "https://render.guildwars2.com/file/97EDAF65FCECF802544DD54B36DC3A09323B254A/888374.png" },
        { Name: "Polyluminescent Undulating Infusion (Green) (Healing)", ItemID: 81727, Icon: "https://render.guildwars2.com/file/97EDAF65FCECF802544DD54B36DC3A09323B254A/888374.png" },
        { Name: "Polyluminescent Undulating Infusion (Green) (Precision)", ItemID: 81948, Icon: "https://render.guildwars2.com/file/97EDAF65FCECF802544DD54B36DC3A09323B254A/888374.png" },
        { Name: "Polyluminescent Undulating Infusion (Green) (Toughness)", ItemID: 81988, Icon: "https://render.guildwars2.com/file/97EDAF65FCECF802544DD54B36DC3A09323B254A/888374.png" },
        { Name: "Polyluminescent Undulating Infusion (Green) (ConditionDamage)", ItemID: 82055, Icon: "https://render.guildwars2.com/file/97EDAF65FCECF802544DD54B36DC3A09323B254A/888374.png" },
        { Name: "Polyluminescent Undulating Infusion (Green) (Concentration)", ItemID: 85682, Icon: "https://render.guildwars2.com/file/97EDAF65FCECF802544DD54B36DC3A09323B254A/888374.png" },
        { Name: "Polyluminescent Undulating Infusion (Green) (Expertise)", ItemID: 86183, Icon: "https://render.guildwars2.com/file/97EDAF65FCECF802544DD54B36DC3A09323B254A/888374.png" }
      ] },
      { Name: "Polyluminescent Undulating Infusion (Orange)", Icon: "https://render.guildwars2.com/file/04050CC5764DC198D8126812E66305C676954F0C/888376.png", Items: [
        { Name: "Polyluminescent Undulating Infusion (Orange) (Precision)", ItemID: 81809, Icon: "https://render.guildwars2.com/file/04050CC5764DC198D8126812E66305C676954F0C/888376.png" },
        { Name: "Polyluminescent Undulating Infusion (Orange) (ConditionDamage)", ItemID: 81847, Icon: "https://render.guildwars2.com/file/04050CC5764DC198D8126812E66305C676954F0C/888376.png" },
        { Name: "Polyluminescent Undulating Infusion (Orange) (Power)", ItemID: 81864, Icon: "https://render.guildwars2.com/file/04050CC5764DC198D8126812E66305C676954F0C/888376.png" },
        { Name: "Polyluminescent Undulating Infusion (Orange) (Toughness)", ItemID: 81881, Icon: "https://render.guildwars2.com/file/04050CC5764DC198D8126812E66305C676954F0C/888376.png" },
        { Name: "Polyluminescent Undulating Infusion (Orange) (Vitality)", ItemID: 81911, Icon: "https://render.guildwars2.com/file/04050CC5764DC198D8126812E66305C676954F0C/888376.png" },
        { Name: "Polyluminescent Undulating Infusion (Orange) (Healing)", ItemID: 81930, Icon: "https://render.guildwars2.com/file/04050CC5764DC198D8126812E66305C676954F0C/888376.png" },
        { Name: "Polyluminescent Undulating Infusion (Orange) (Expertise)", ItemID: 85694, Icon: "https://render.guildwars2.com/file/04050CC5764DC198D8126812E66305C676954F0C/888376.png" },
        { Name: "Polyluminescent Undulating Infusion (Orange) (Concentration)", ItemID: 86310, Icon: "https://render.guildwars2.com/file/04050CC5764DC198D8126812E66305C676954F0C/888376.png" }
      ] },
      { Name: "Polyluminescent Undulating Infusion (Teal)", Icon: "https://render.guildwars2.com/file/7BB3BF57E1060C0A2919290FE03E04BA6B1EE950/1729284.png", Items: [
        { Name: "Polyluminescent Undulating Infusion (Teal) (Vitality)", ItemID: 81641, Icon: "https://render.guildwars2.com/file/7BB3BF57E1060C0A2919290FE03E04BA6B1EE950/1729284.png" },
        { Name: "Polyluminescent Undulating Infusion (Teal) (Power)", ItemID: 81653, Icon: "https://render.guildwars2.com/file/7BB3BF57E1060C0A2919290FE03E04BA6B1EE950/1729284.png" },
        { Name: "Polyluminescent Undulating Infusion (Teal) (Precision)", ItemID: 81655, Icon: "https://render.guildwars2.com/file/7BB3BF57E1060C0A2919290FE03E04BA6B1EE950/1729284.png" },
        { Name: "Polyluminescent Undulating Infusion (Teal) (ConditionDamage)", ItemID: 81777, Icon: "https://render.guildwars2.com/file/7BB3BF57E1060C0A2919290FE03E04BA6B1EE950/1729284.png" },
        { Name: "Polyluminescent Undulating Infusion (Teal) (Toughness)", ItemID: 81858, Icon: "https://render.guildwars2.com/file/7BB3BF57E1060C0A2919290FE03E04BA6B1EE950/1729284.png" },
        { Name: "Polyluminescent Undulating Infusion (Teal) (Healing)", ItemID: 81959, Icon: "https://render.guildwars2.com/file/7BB3BF57E1060C0A2919290FE03E04BA6B1EE950/1729284.png" },
        { Name: "Polyluminescent Undulating Infusion (Teal) (Concentration)", ItemID: 86068, Icon: "https://render.guildwars2.com/file/7BB3BF57E1060C0A2919290FE03E04BA6B1EE950/1729284.png" },
        { Name: "Polyluminescent Undulating Infusion (Teal) (Expertise)", ItemID: 86312, Icon: "https://render.guildwars2.com/file/7BB3BF57E1060C0A2919290FE03E04BA6B1EE950/1729284.png" }
      ] },
      { Name: "Polysaturating Reverberating Infusion (Gray)", Icon: "https://render.guildwars2.com/file/7CC8F41D1F3F320FD75F04CDE12E135B9E0F0DBC/2056191.png", Items: [
        { Name: "Polysaturating Reverberating Infusion (Gray) (ConditionDamage)", ItemID: 89007, Icon: "https://render.guildwars2.com/file/7CC8F41D1F3F320FD75F04CDE12E135B9E0F0DBC/2056191.png" },
        { Name: "Polysaturating Reverberating Infusion (Gray) (Expertise)", ItemID: 89012, Icon: "https://render.guildwars2.com/file/7CC8F41D1F3F320FD75F04CDE12E135B9E0F0DBC/2056191.png" },
        { Name: "Polysaturating Reverberating Infusion (Gray) (Precision)", ItemID: 89013, Icon: "https://render.guildwars2.com/file/7CC8F41D1F3F320FD75F04CDE12E135B9E0F0DBC/2056191.png" },
        { Name: "Polysaturating Reverberating Infusion (Gray) (Toughness)", ItemID: 89016, Icon: "https://render.guildwars2.com/file/7CC8F41D1F3F320FD75F04CDE12E135B9E0F0DBC/2056191.png" },
        { Name: "Polysaturating Reverberating Infusion (Gray) (Power)", ItemID: 89020, Icon: "https://render.guildwars2.com/file/7CC8F41D1F3F320FD75F04CDE12E135B9E0F0DBC/2056191.png" },
        { Name: "Polysaturating Reverberating Infusion (Gray) (Vitality)", ItemID: 89054, Icon: "https://render.guildwars2.com/file/7CC8F41D1F3F320FD75F04CDE12E135B9E0F0DBC/2056191.png" },
        { Name: "Polysaturating Reverberating Infusion (Gray) (Healing)", ItemID: 89074, Icon: "https://render.guildwars2.com/file/7CC8F41D1F3F320FD75F04CDE12E135B9E0F0DBC/2056191.png" },
        { Name: "Polysaturating Reverberating Infusion (Gray) (Concentration)", ItemID: 89078, Icon: "https://render.guildwars2.com/file/7CC8F41D1F3F320FD75F04CDE12E135B9E0F0DBC/2056191.png" }
      ] },
      { Name: "Polysaturating Reverberating Infusion (Red)", Icon: "https://render.guildwars2.com/file/F31FD3154C9E41EDB6D124EFEFA2B3F4EA455069/2056193.png", Items: [
        { Name: "Polysaturating Reverberating Infusion (Red) (Healing)", ItemID: 89026, Icon: "https://render.guildwars2.com/file/F31FD3154C9E41EDB6D124EFEFA2B3F4EA455069/2056193.png" },
        { Name: "Polysaturating Reverberating Infusion (Red) (Precision)", ItemID: 89028, Icon: "https://render.guildwars2.com/file/F31FD3154C9E41EDB6D124EFEFA2B3F4EA455069/2056193.png" },
        { Name: "Polysaturating Reverberating Infusion (Red) (Concentration)", ItemID: 89032, Icon: "https://render.guildwars2.com/file/F31FD3154C9E41EDB6D124EFEFA2B3F4EA455069/2056193.png" },
        { Name: "Polysaturating Reverberating Infusion (Red) (Vitality)", ItemID: 89034, Icon: "https://render.guildwars2.com/file/F31FD3154C9E41EDB6D124EFEFA2B3F4EA455069/2056193.png" },
        { Name: "Polysaturating Reverberating Infusion (Red) (Expertise)", ItemID: 89052, Icon: "https://render.guildwars2.com/file/F31FD3154C9E41EDB6D124EFEFA2B3F4EA455069/2056193.png" },
        { Name: "Polysaturating Reverberating Infusion (Red) (Power)", ItemID: 89059, Icon: "https://render.guildwars2.com/file/F31FD3154C9E41EDB6D124EFEFA2B3F4EA455069/2056193.png" },
        { Name: "Polysaturating Reverberating Infusion (Red) (ConditionDamage)", ItemID: 89071, Icon: "https://render.guildwars2.com/file/F31FD3154C9E41EDB6D124EFEFA2B3F4EA455069/2056193.png" },
        { Name: "Polysaturating Reverberating Infusion (Red) (Toughness)", ItemID: 89075, Icon: "https://render.guildwars2.com/file/F31FD3154C9E41EDB6D124EFEFA2B3F4EA455069/2056193.png" }
      ] },
      { Name: "Polysaturating Reverberating Infusion (Purple)", Icon: "https://render.guildwars2.com/file/6F6759D3E6D043A3DAC3D6F13AE1DA2F7F227C1A/2056192.png", Items: [
        { Name: "Polysaturating Reverberating Infusion (Purple) (Toughness)", ItemID: 89005, Icon: "https://render.guildwars2.com/file/6F6759D3E6D043A3DAC3D6F13AE1DA2F7F227C1A/2056192.png" },
        { Name: "Polysaturating Reverberating Infusion (Purple) (Precision)", ItemID: 89017, Icon: "https://render.guildwars2.com/file/6F6759D3E6D043A3DAC3D6F13AE1DA2F7F227C1A/2056192.png" },
        { Name: "Polysaturating Reverberating Infusion (Purple) (Vitality)", ItemID: 89037, Icon: "https://render.guildwars2.com/file/6F6759D3E6D043A3DAC3D6F13AE1DA2F7F227C1A/2056192.png" },
        { Name: "Polysaturating Reverberating Infusion (Purple) (Healing)", ItemID: 89039, Icon: "https://render.guildwars2.com/file/6F6759D3E6D043A3DAC3D6F13AE1DA2F7F227C1A/2056192.png" },
        { Name: "Polysaturating Reverberating Infusion (Purple) (Expertise)", ItemID: 89042, Icon: "https://render.guildwars2.com/file/6F6759D3E6D043A3DAC3D6F13AE1DA2F7F227C1A/2056192.png" },
        { Name: "Polysaturating Reverberating Infusion (Purple) (Concentration)", ItemID: 89049, Icon: "https://render.guildwars2.com/file/6F6759D3E6D043A3DAC3D6F13AE1DA2F7F227C1A/2056192.png" },
        { Name: "Polysaturating Reverberating Infusion (Purple) (Power)", ItemID: 89063, Icon: "https://render.guildwars2.com/file/6F6759D3E6D043A3DAC3D6F13AE1DA2F7F227C1A/2056192.png" },
        { Name: "Polysaturating Reverberating Infusion (Purple) (ConditionDamage)", ItemID: 89070, Icon: "https://render.guildwars2.com/file/6F6759D3E6D043A3DAC3D6F13AE1DA2F7F227C1A/2056192.png" }
      ] },
      { Name: "Ember Infusion", Icon: "https://render.guildwars2.com/file/23E1D56F0BD61D0958DC60BA770B1DB0AC02270E/2056190.png", Items: [
        { Name: "Ember Infusion (Healing)", ItemID: 89010, Icon: "https://render.guildwars2.com/file/23E1D56F0BD61D0958DC60BA770B1DB0AC02270E/2056190.png" },
        { Name: "Ember Infusion (Vitality)", ItemID: 89015, Icon: "https://render.guildwars2.com/file/23E1D56F0BD61D0958DC60BA770B1DB0AC02270E/2056190.png" },
        { Name: "Ember Infusion (Precision)", ItemID: 89038, Icon: "https://render.guildwars2.com/file/23E1D56F0BD61D0958DC60BA770B1DB0AC02270E/2056190.png" },
        { Name: "Ember Infusion (Expertise)", ItemID: 89021, Icon: "https://render.guildwars2.com/file/23E1D56F0BD61D0958DC60BA770B1DB0AC02270E/2056190.png" },
        { Name: "Ember Infusion (Concentration)", ItemID: 89040, Icon: "https://render.guildwars2.com/file/23E1D56F0BD61D0958DC60BA770B1DB0AC02270E/2056190.png" },
        { Name: "Ember Infusion (Toughness)", ItemID: 89046, Icon: "https://render.guildwars2.com/file/23E1D56F0BD61D0958DC60BA770B1DB0AC02270E/2056190.png" },
        { Name: "Ember Infusion (ConditionDamage)", ItemID: 89065, Icon: "https://render.guildwars2.com/file/23E1D56F0BD61D0958DC60BA770B1DB0AC02270E/2056190.png" },
        { Name: "Ember Infusion (Power)", ItemID: 89060, Icon: "https://render.guildwars2.com/file/23E1D56F0BD61D0958DC60BA770B1DB0AC02270E/2056190.png" }
      ] }
    ]
  },
  {
    Name: "Super Adventure Box Infusions",
    Groups: [
      { Name: "Moto's Unstable Bauble Infusion: Blue", Icon: "https://render.guildwars2.com/file/AE5AE77B1B291BA6A418B9F80B43CF3D437D0806/561983.png", Items: [
        { Name: "Moto's Unstable Bauble Infusion: Blue (ConditionDamage)", ItemID: 78012, Icon: "https://render.guildwars2.com/file/AE5AE77B1B291BA6A418B9F80B43CF3D437D0806/561983.png" },
        { Name: "Moto's Unstable Bauble Infusion: Blue (Power)", ItemID: 78052, Icon: "https://render.guildwars2.com/file/AE5AE77B1B291BA6A418B9F80B43CF3D437D0806/561983.png" },
        { Name: "Moto's Unstable Bauble Infusion: Blue (Precision)", ItemID: 78054, Icon: "https://render.guildwars2.com/file/AE5AE77B1B291BA6A418B9F80B43CF3D437D0806/561983.png" },
        { Name: "Moto's Unstable Bauble Infusion: Blue (Healing)", ItemID: 78079, Icon: "https://render.guildwars2.com/file/AE5AE77B1B291BA6A418B9F80B43CF3D437D0806/561983.png" },
        { Name: "Moto's Unstable Bauble Infusion: Blue (Toughness)", ItemID: 78086, Icon: "https://render.guildwars2.com/file/AE5AE77B1B291BA6A418B9F80B43CF3D437D0806/561983.png" },
        { Name: "Moto's Unstable Bauble Infusion: Blue (Vitality)", ItemID: 78090, Icon: "https://render.guildwars2.com/file/AE5AE77B1B291BA6A418B9F80B43CF3D437D0806/561983.png" },
        { Name: "Moto's Unstable Bauble Infusion: Blue (Concentration)", ItemID: 86552, Icon: "https://render.guildwars2.com/file/AE5AE77B1B291BA6A418B9F80B43CF3D437D0806/561983.png" },
        { Name: "Moto's Unstable Bauble Infusion: Blue (Expertise)", ItemID: 86571, Icon: "https://render.guildwars2.com/file/AE5AE77B1B291BA6A418B9F80B43CF3D437D0806/561983.png" }
      ] },
      { Name: "Moto's Unstable Bauble Infusion: Red", Icon: "https://render.guildwars2.com/file/AE5AE77B1B291BA6A418B9F80B43CF3D437D0806/561983.png", Items: [
        { Name: "Moto's Unstable Bauble Infusion: Red (Healing)", ItemID: 78016, Icon: "https://render.guildwars2.com/file/AE5AE77B1B291BA6A418B9F80B43CF3D437D0806/561983.png" },
        { Name: "Moto's Unstable Bauble Infusion: Red (Power)", ItemID: 78028, Icon: "https://render.guildwars2.com/file/AE5AE77B1B291BA6A418B9F80B43CF3D437D0806/561983.png" },
        { Name: "Moto's Unstable Bauble Infusion: Red (Toughness)", ItemID: 78030, Icon: "https://render.guildwars2.com/file/AE5AE77B1B291BA6A418B9F80B43CF3D437D0806/561983.png" },
        { Name: "Moto's Unstable Bauble Infusion: Red (Precision)", ItemID: 78031, Icon: "https://render.guildwars2.com/file/AE5AE77B1B291BA6A418B9F80B43CF3D437D0806/561983.png" },
        { Name: "Moto's Unstable Bauble Infusion: Red (ConditionDamage)", ItemID: 78057, Icon: "https://render.guildwars2.com/file/AE5AE77B1B291BA6A418B9F80B43CF3D437D0806/561983.png" },
        { Name: "Moto's Unstable Bauble Infusion: Red (Vitality)", ItemID: 78097, Icon: "https://render.guildwars2.com/file/AE5AE77B1B291BA6A418B9F80B43CF3D437D0806/561983.png" },
        { Name: "Moto's Unstable Bauble Infusion: Red (Concentration)", ItemID: 86446, Icon: "https://render.guildwars2.com/file/AE5AE77B1B291BA6A418B9F80B43CF3D437D0806/561983.png" },
        { Name: "Moto's Unstable Bauble Infusion: Red (Expertise)", ItemID: 86453, Icon: "https://render.guildwars2.com/file/AE5AE77B1B291BA6A418B9F80B43CF3D437D0806/561983.png" }
      ] }
    ]
  },
  {
    Name: "Wintersday Infusions",
    Groups: [
      { Name: "Winter's Heart Infusion", Icon: "https://render.guildwars2.com/file/EE68160F571F59549B02CA246ED9742CEDCC9AB6/1614397.png", Items: [
        { Name: "Winter's Heart Infusion (Vitality)", ItemID: 79943, Icon: "https://render.guildwars2.com/file/EE68160F571F59549B02CA246ED9742CEDCC9AB6/1614397.png" },
        { Name: "Winter's Heart Infusion (Precision)", ItemID: 79957, Icon: "https://render.guildwars2.com/file/EE68160F571F59549B02CA246ED9742CEDCC9AB6/1614397.png" },
        { Name: "Winter's Heart Infusion (Power)", ItemID: 79959, Icon: "https://render.guildwars2.com/file/EE68160F571F59549B02CA246ED9742CEDCC9AB6/1614397.png" },
        { Name: "Winter's Heart Infusion (Healing)", ItemID: 79978, Icon: "https://render.guildwars2.com/file/EE68160F571F59549B02CA246ED9742CEDCC9AB6/1614397.png" },
        { Name: "Winter's Heart Infusion (ConditionDamage)", ItemID: 79994, Icon: "https://render.guildwars2.com/file/EE68160F571F59549B02CA246ED9742CEDCC9AB6/1614397.png" },
        { Name: "Winter's Heart Infusion (Toughness)", ItemID: 80063, Icon: "https://render.guildwars2.com/file/EE68160F571F59549B02CA246ED9742CEDCC9AB6/1614397.png" },
        { Name: "Winter's Heart Infusion (Concentration)", ItemID: 85718, Icon: "https://render.guildwars2.com/file/EE68160F571F59549B02CA246ED9742CEDCC9AB6/1614397.png" },
        { Name: "Winter's Heart Infusion (Expertise)", ItemID: 85734, Icon: "https://render.guildwars2.com/file/EE68160F571F59549B02CA246ED9742CEDCC9AB6/1614397.png" }
      ] },
      { Name: "Snow Diamond Infusion", Icon: "https://render.guildwars2.com/file/E36E4F18FBF1A3ACEC095F75FAEC1DD937DCFF03/1914822.png", Items: [
        { Name: "Snow Diamond Infusion (Power)", ItemID: 86401, Icon: "https://render.guildwars2.com/file/E36E4F18FBF1A3ACEC095F75FAEC1DD937DCFF03/1914822.png" },
        { Name: "Snow Diamond Infusion (Healing)", ItemID: 86405, Icon: "https://render.guildwars2.com/file/E36E4F18FBF1A3ACEC095F75FAEC1DD937DCFF03/1914822.png" },
        { Name: "Snow Diamond Infusion (Precision)", ItemID: 86407, Icon: "https://render.guildwars2.com/file/E36E4F18FBF1A3ACEC095F75FAEC1DD937DCFF03/1914822.png" },
        { Name: "Snow Diamond Infusion (ConditionDamage)", ItemID: 86537, Icon: "https://render.guildwars2.com/file/E36E4F18FBF1A3ACEC095F75FAEC1DD937DCFF03/1914822.png" },
        { Name: "Snow Diamond Infusion (Vitality)", ItemID: 86597, Icon: "https://render.guildwars2.com/file/E36E4F18FBF1A3ACEC095F75FAEC1DD937DCFF03/1914822.png" },
        { Name: "Snow Diamond Infusion (Expertise)", ItemID: 86665, Icon: "https://render.guildwars2.com/file/E36E4F18FBF1A3ACEC095F75FAEC1DD937DCFF03/1914822.png" },
        { Name: "Snow Diamond Infusion (Concentration)", ItemID: 86666, Icon: "https://render.guildwars2.com/file/E36E4F18FBF1A3ACEC095F75FAEC1DD937DCFF03/1914822.png" },
        { Name: "Snow Diamond Infusion (Toughness)", ItemID: 86704, Icon: "https://render.guildwars2.com/file/E36E4F18FBF1A3ACEC095F75FAEC1DD937DCFF03/1914822.png" }
      ] },
      { Name: "Toy-Shell Infusion", Icon: "https://render.guildwars2.com/file/EA2CD818C94A04C3C8E5C9979176FEF421020116/2075492.png", Items: [
        { Name: "Toy-Shell Infusion (Precision)", ItemID: 89382, Icon: "https://render.guildwars2.com/file/EA2CD818C94A04C3C8E5C9979176FEF421020116/2075492.png" },
        { Name: "Toy-Shell Infusion (Concentration)", ItemID: 89391, Icon: "https://render.guildwars2.com/file/EA2CD818C94A04C3C8E5C9979176FEF421020116/2075492.png" },
        { Name: "Toy-Shell Infusion (ConditionDamage)", ItemID: 89411, Icon: "https://render.guildwars2.com/file/EA2CD818C94A04C3C8E5C9979176FEF421020116/2075492.png" },
        { Name: "Toy-Shell Infusion (Power)", ItemID: 89401, Icon: "https://render.guildwars2.com/file/EA2CD818C94A04C3C8E5C9979176FEF421020116/2075492.png" },
        { Name: "Toy-Shell Infusion (Expertise)", ItemID: 89413, Icon: "https://render.guildwars2.com/file/EA2CD818C94A04C3C8E5C9979176FEF421020116/2075492.png" },
        { Name: "Toy-Shell Infusion (Vitality)", ItemID: 89415, Icon: "https://render.guildwars2.com/file/EA2CD818C94A04C3C8E5C9979176FEF421020116/2075492.png" },
        { Name: "Toy-Shell Infusion (Healing)", ItemID: 89426, Icon: "https://render.guildwars2.com/file/EA2CD818C94A04C3C8E5C9979176FEF421020116/2075492.png" },
        { Name: "Toy-Shell Infusion (Toughness)", ItemID: 89427, Icon: "https://render.guildwars2.com/file/EA2CD818C94A04C3C8E5C9979176FEF421020116/2075492.png" }
      ] }
    ]
  },
  {
    Name: "Mystic Forge Infusions",
    Groups: [
      { Name: "Mystic Infusion", Icon: "https://render.guildwars2.com/file/DD1E30FED53C992C0679B3A5030FC1B92FE56423/1766870.png", Items: [
        { Name: "Mystic Infusion (Vitality)", ItemID: 90966, Icon: "https://render.guildwars2.com/file/DD1E30FED53C992C0679B3A5030FC1B92FE56423/1766870.png" },
        { Name: "Mystic Infusion (Concentration)", ItemID: 90977, Icon: "https://render.guildwars2.com/file/DD1E30FED53C992C0679B3A5030FC1B92FE56423/1766870.png" },
        { Name: "Mystic Infusion (ConditionDamage)", ItemID: 90982, Icon: "https://render.guildwars2.com/file/DD1E30FED53C992C0679B3A5030FC1B92FE56423/1766870.png" },
        { Name: "Mystic Infusion (Precision)", ItemID: 91050, Icon: "https://render.guildwars2.com/file/DD1E30FED53C992C0679B3A5030FC1B92FE56423/1766870.png" },
        { Name: "Mystic Infusion (Toughness)", ItemID: 91054, Icon: "https://render.guildwars2.com/file/DD1E30FED53C992C0679B3A5030FC1B92FE56423/1766870.png" },
        { Name: "Mystic Infusion (Healing)", ItemID: 91086, Icon: "https://render.guildwars2.com/file/DD1E30FED53C992C0679B3A5030FC1B92FE56423/1766870.png" },
        { Name: "Mystic Infusion (Expertise)", ItemID: 91099, Icon: "https://render.guildwars2.com/file/DD1E30FED53C992C0679B3A5030FC1B92FE56423/1766870.png" },
        { Name: "Mystic Infusion (Power)", ItemID: 91111, Icon: "https://render.guildwars2.com/file/DD1E30FED53C992C0679B3A5030FC1B92FE56423/1766870.png" }
      ] }
    ]
  }
];

// app/utility/ItemList_GatheringTools.ts
init_react();
var IL_GatheringTools = [
  {
    Name: "Infinite Gathering Tools",
    Groups: [
      { Name: "Choya Set", Icon: "https://render.guildwars2.com/file/20F90FEC2198F1EEBC1B115DA339281903756F3E/2022146.png", Items: [
        { Name: "Choya Mining Tool", ItemID: 88355, Icon: "https://render.guildwars2.com/file/20F90FEC2198F1EEBC1B115DA339281903756F3E/2022146.png" },
        { Name: "Choya Logging Tool", ItemID: 87530, Icon: "https://render.guildwars2.com/file/B69890563D53955807B6FAC858E27DEEC1A4EAAB/1983457.png" },
        { Name: "Choya Harvesting Tool", ItemID: 87554, Icon: "https://render.guildwars2.com/file/0767CAF49CEED34D651C3BB729B9A19E1DDBA566/1986105.png" }
      ] },
      { Name: "Cosmic Set", Icon: "https://render.guildwars2.com/file/B5BDBEDE1C9ECE63B33E75BA0B1CB8403BCFB401/1431721.png", Items: [
        { Name: "Cosmic Mining Tool", ItemID: 78731, Icon: "https://render.guildwars2.com/file/B5BDBEDE1C9ECE63B33E75BA0B1CB8403BCFB401/1431721.png" },
        { Name: "Cosmic Logging Tool", ItemID: 79472, Icon: "https://render.guildwars2.com/file/09D72038D9BAF1BE2F4FCE0527F427D4F76B6F0C/1493270.png" },
        { Name: "Cosmic Harvesting Tool", ItemID: 79721, Icon: "https://render.guildwars2.com/file/091C6309D2CC3E1463E3BC04557EB5096DE959FE/1601496.png" }
      ] },
      { Name: "Flute Set", Icon: "https://render.guildwars2.com/file/026480F0514F957C1D3B065B252D4D6BD703B21B/1024022.png", Items: [
        { Name: "Firefly Mining Flute", ItemID: 69958, Icon: "https://render.guildwars2.com/file/026480F0514F957C1D3B065B252D4D6BD703B21B/1024022.png" },
        { Name: "Swarm Logging Flute", ItemID: 69921, Icon: "https://render.guildwars2.com/file/7C0BE17165A07ABB24E19D0CB10F4F9DF9ACF63E/1024008.png" },
        { Name: "Butterfly Harvesting Flute", ItemID: 70044, Icon: "https://render.guildwars2.com/file/6F514438514404E95ABCD63D3A09AA48E73534AC/1024037.png" }
      ] },
      { Name: "Gadgeteer's Set", Icon: "https://render.guildwars2.com/file/9FE07606DC0F7329DDBE0497293AA7629391040D/711980.png", Items: [
        { Name: "Watchwork Mining Pick", ItemID: 87422, Icon: "https://render.guildwars2.com/file/9FE07606DC0F7329DDBE0497293AA7629391040D/711980.png" },
        { Name: "Watchwork Mining Pick", ItemID: 47897, Icon: "https://render.guildwars2.com/file/9FE07606DC0F7329DDBE0497293AA7629391040D/711980.png" },
        { Name: "Chop-It-All Logging Axe", ItemID: 42931, Icon: "https://render.guildwars2.com/file/15CF97BA7DC573E2BCA852FF1364721B98531470/598608.png" },
        { Name: "Chop-It-All Logging Axe", ItemID: 48931, Icon: "https://render.guildwars2.com/file/15CF97BA7DC573E2BCA852FF1364721B98531470/598608.png" },
        { Name: "Thresher-Sickle 5000", ItemID: 49308, Icon: "https://render.guildwars2.com/file/F1C5657FB4F6F269E4763FA754055C9A4D127311/740325.png" }
      ] },
      { Name: "Glacial Set", Icon: "https://render.guildwars2.com/file/0923D9CC6D0BB7A2A0417F3B1C09A5BD426D6705/2261381.png", Items: [
        { Name: "Glacial Mining Tool", ItemID: 92892, Icon: "https://render.guildwars2.com/file/0923D9CC6D0BB7A2A0417F3B1C09A5BD426D6705/2261381.png" },
        { Name: "Glacial Logging Tool", ItemID: 92634, Icon: "https://render.guildwars2.com/file/71DFA909066D5AE204D0F3DCA098EDF105CA067B/2242668.png" },
        { Name: "Glacial Harvesting Tool", ItemID: 92822, Icon: "https://render.guildwars2.com/file/FA0D27B5451B70C9CD01F82CEB4D93341FB6C40D/2256421.png" }
      ] },
      { Name: "Mad Scientist's Set", Icon: "https://render.guildwars2.com/file/796209E4012FE25C53D0A04C1DDB0FA5D87079F6/960280.png", Items: [
        { Name: "Mad Scientist's Mining Tool", ItemID: 68905, Icon: "https://render.guildwars2.com/file/796209E4012FE25C53D0A04C1DDB0FA5D87079F6/960280.png" },
        { Name: "Mad Scientist's Logging Tool", ItemID: 68799, Icon: "https://render.guildwars2.com/file/AFDEBDF46AE851390BE57EC2CEDAF41703B43C36/983558.png" },
        { Name: "Mad Scientist's Harvesting Tool", ItemID: 69478, Icon: "https://render.guildwars2.com/file/BBC7E4B707C3624DEFB22C62FC2C9390741F090D/978010.png" }
      ] },
      { Name: "Minion Set", Icon: "https://render.guildwars2.com/file/9827C507181C6B305EA026C2F1EB7448AA390CD5/638367.png", Items: [
        { Name: "Bone Pick", ItemID: 43527, Icon: "https://render.guildwars2.com/file/9827C507181C6B305EA026C2F1EB7448AA390CD5/638367.png" },
        { Name: "Bone Pick", ItemID: 48932, Icon: "https://render.guildwars2.com/file/9827C507181C6B305EA026C2F1EB7448AA390CD5/638367.png" },
        { Name: "Tireless Logging Minion", ItemID: 67029, Icon: "https://render.guildwars2.com/file/20A17F9B7356EE37FEB1003B66D46DBF755B4D91/882250.png" },
        { Name: "Tireless Harvesting Minion", ItemID: 67063, Icon: "https://render.guildwars2.com/file/66A0544916B86F1E00F173ABB9555FC6FDCECBE0/882264.png" }
      ] },
      { Name: "Molten Set", Icon: "https://render.guildwars2.com/file/ACF90CA6BCD9CEEFD4D0DCEF2AA87C97B50BDC56/561815.png", Items: [
        { Name: "Molten Alliance Mining Pick", ItemID: 41807, Icon: "https://render.guildwars2.com/file/ACF90CA6BCD9CEEFD4D0DCEF2AA87C97B50BDC56/561815.png" },
        { Name: "Molten Alliance Mining Pick", ItemID: 48933, Icon: "https://render.guildwars2.com/file/ACF90CA6BCD9CEEFD4D0DCEF2AA87C97B50BDC56/561815.png" },
        { Name: "Fused Molten Logging Axe", ItemID: 67030, Icon: "https://render.guildwars2.com/file/E31818DD403BE127B29E214C7956BFA301F680DA/866829.png" },
        { Name: "Fused Molten Sickle", ItemID: 67032, Icon: "https://render.guildwars2.com/file/51782971EFC6B80F4B5BD0FB080D0CFFA37B1576/866830.png" }
      ] },
      { Name: "Natural Disaster Set", Icon: "https://render.guildwars2.com/file/BAA6B00B1460D73241DEB9AEA54BFC9390C2805D/2106852.png", Items: [
        { Name: "Earthshaker Mining Tool", ItemID: 89084, Icon: "https://render.guildwars2.com/file/BAA6B00B1460D73241DEB9AEA54BFC9390C2805D/2106852.png" },
        { Name: "Firestorm Logging Tool", ItemID: 89086, Icon: "https://render.guildwars2.com/file/1EC4D82D071AD146D143C83261DA4D693D5F4809/2059788.png" },
        { Name: "Thunderstrike Harvesting Tool", ItemID: 89370, Icon: "https://render.guildwars2.com/file/BEE1EAB7190774BB65EC50B0C892B646B3014ADA/2069354.png" }
      ] },
      { Name: "R-Tron Set", Icon: "https://render.guildwars2.com/file/64060B1871FBB9472A181BB1F296B9C4D831B728/904685.png", Items: [
        { Name: "Mine-r-Tron", ItemID: 67396, Icon: "https://render.guildwars2.com/file/64060B1871FBB9472A181BB1F296B9C4D831B728/904685.png" },
        { Name: "Log-r-Tron", ItemID: 67394, Icon: "https://render.guildwars2.com/file/6462A139065B20E25D3626413D080EAC4046B4EE/904683.png" },
        { Name: "Reap-r-Tron", ItemID: 67395, Icon: "https://render.guildwars2.com/file/AB92677C955A7ED5A5D25662C6F21C68F26245A1/904684.png" }
      ] },
      { Name: "Skyscale Hatchling Set", Icon: "https://render.guildwars2.com/file/69F4753906E9AAF3FEE8383A6805FD9A73A9530E/2155922.png", Items: [
        { Name: "Skyscale Hatchling Mining Tool", ItemID: 91145, Icon: "https://render.guildwars2.com/file/69F4753906E9AAF3FEE8383A6805FD9A73A9530E/2155922.png" },
        { Name: "Skyscale Hatchling Logging Tool", ItemID: 91379, Icon: "https://render.guildwars2.com/file/156F1147CBF694EB5401C492419570E4D52B4AFD/2175023.png" },
        { Name: "Skyscale Hatchling Harvesting Tool", ItemID: 90288, Icon: "https://render.guildwars2.com/file/71801F60CF5194507226B5A4CB9F522039B6BC90/2140572.png" }
      ] },
      { Name: "Spirits of the Wild Set", Icon: "https://render.guildwars2.com/file/DB324FFD037D7307B7A27CB85FEDD50E942440BE/2375069.png", Items: [
        { Name: "Spirit of Bear Mining Tool", ItemID: 94373, Icon: "https://render.guildwars2.com/file/DB324FFD037D7307B7A27CB85FEDD50E942440BE/2375069.png" },
        { Name: "Spirit of Wolf Logging Tool", ItemID: 94363, Icon: "https://render.guildwars2.com/file/25AB2ADF4C5C617077C028B5AD2C1D389F7E7C5B/2375071.png" },
        { Name: "Spirit of Raven Harvesting Tool", ItemID: 94366, Icon: "https://render.guildwars2.com/file/3CC69241B0DA6CD8C2B1AE56212525E70DCADEBA/2375070.png" }
      ] },
      { Name: "Unbound Magic Set", Icon: "https://render.guildwars2.com/file/677ECFD8C4423EDDC834A769A20874A5F5B3CD5C/1691904.png", Items: [
        { Name: "Unbound Magic Mining Beam", ItemID: 80977, Icon: "https://render.guildwars2.com/file/677ECFD8C4423EDDC834A769A20874A5F5B3CD5C/1691904.png" },
        { Name: "Unbound Magic Logging Pulse", ItemID: 80979, Icon: "https://render.guildwars2.com/file/942BE316A340DCBB115D03C6A3C0646ADAF4B44A/1691903.png" },
        { Name: "Unbound Magic Harvesting Blast", ItemID: 80987, Icon: "https://render.guildwars2.com/file/0C30D8E5A4BAAE123BCE06BE406C932A38FE672E/1691902.png" }
      ] },
      { Name: "Unbreakable Set", Icon: "https://render.guildwars2.com/file/54AA220FF90EC9C005D69A1091D47639E99EB590/1459295.png", Items: [
        { Name: "Unbreakable Mining Pick", ItemID: 78812, Icon: "https://render.guildwars2.com/file/54AA220FF90EC9C005D69A1091D47639E99EB590/1459295.png" },
        { Name: "Unbreakable Logging Axe", ItemID: 78806, Icon: "https://render.guildwars2.com/file/E80A16DD259FD93E0E0F5B2AE09C60F60E07F8C4/1459294.png" },
        { Name: "Unbreakable Harvesting Sickle", ItemID: 78996, Icon: "https://render.guildwars2.com/file/DC910B7920BDA702A5F7FEAE4A4BAE32EF0CC0A5/1459298.png" }
      ] },
      { Name: "Volatile Magic Set", Icon: "https://render.guildwars2.com/file/D77E93F0DFC66BC9050C7C57EBBA62E9C32D0CD1/1998935.png", Items: [
        { Name: "Volatile Magic Mining Tool", ItemID: 87841, Icon: "https://render.guildwars2.com/file/D77E93F0DFC66BC9050C7C57EBBA62E9C32D0CD1/1998935.png" },
        { Name: "Volatile Magic Logging Tool", ItemID: 87954, Icon: "https://render.guildwars2.com/file/5811404EE49FA35A940244E9D55C2CF8B00D7D63/1998934.png" },
        { Name: "Volatile Magic Harvesting Tool", ItemID: 87701, Icon: "https://render.guildwars2.com/file/A329CF6D582CB8D4A3B5250B9CC2F67335F77AB0/1998933.png" }
      ] },
      { Name: "Other", Icon: "https://render.guildwars2.com/file/5963CE1647B509515DF7EDBBBFFD726E28B03652/1624021.png", Items: [
        { Name: "Celestial Rooster Harvesting Tool", ItemID: 80067, Icon: "https://render.guildwars2.com/file/5963CE1647B509515DF7EDBBBFFD726E28B03652/1624021.png" },
        { Name: "Consortium Harvesting Sickle", ItemID: 42594, Icon: "https://render.guildwars2.com/file/17EED9D8F570EF1EF00045533F65CD791EA4D0FB/582347.png" },
        { Name: "Consortium Harvesting Sickle", ItemID: 48930, Icon: "https://render.guildwars2.com/file/17EED9D8F570EF1EF00045533F65CD791EA4D0FB/582347.png" },
        { Name: "Dreamcleaver Logging Axe", ItemID: 48955, Icon: "https://render.guildwars2.com/file/0334AF66EB5E182C4C0FB2576A31B8A25292E951/665808.png" },
        { Name: "Focused Solar Logging Tool", ItemID: 78724, Icon: "https://render.guildwars2.com/file/A9B11E2AEA0E142F48D753DCC6D8037203CE0C9C/1459293.png" },
        { Name: "Frost Wasp Logging Tool", ItemID: 48825, Icon: "https://render.guildwars2.com/file/0227CB6C96D2AC7FC20B6D465478E9BBF3ED09D9/771066.png" },
        { Name: "Glitter Bomb Harvesting Tool", ItemID: 78909, Icon: "https://render.guildwars2.com/file/951AAA70E645A0D2D7F9B53924DC4D1FC3BF3C20/1451181.png" },
        { Name: "Jack-in-the-Box Scythe", ItemID: 44876, Icon: "https://render.guildwars2.com/file/B8FAB3CF449D4BF50BD29AEA7B1A753F7E5CE792/643281.png" },
        { Name: "Jack-in-the-Box Scythe", ItemID: 48934, Icon: "https://render.guildwars2.com/file/B8FAB3CF449D4BF50BD29AEA7B1A753F7E5CE792/643281.png" },
        { Name: "Lucky Dog Harvesting Tool", ItemID: 86943, Icon: "https://render.guildwars2.com/file/3C707A22CA60ABB4034B14C14FEF7A6A0B53DCE5/1938455.png" },
        { Name: "Lucky Dog Harvesting Tool", ItemID: 87397, Icon: "https://render.guildwars2.com/file/3C707A22CA60ABB4034B14C14FEF7A6A0B53DCE5/1938455.png" },
        { Name: "Shifting Sands Mining Pick", ItemID: 87425, Icon: "https://render.guildwars2.com/file/A95E0B9F11D0983BAD026DFEAD0F7B97214C5D24/1972407.png" },
        { Name: "Super Adventure Logging Bear", ItemID: 80966, Icon: "https://render.guildwars2.com/file/CEA5CF31D2959618F621367F24F20DCBDA7AF942/1663897.png" }
      ] }
    ]
  }
];

// route:Z:\GIT\Repositories\gw2_item_finder\gw2_item_finder\app\routes\ItemLists.tsx
function ItemLists() {
  let navigate = (0, import_remix3.useNavigate)();
  function OnSearchAllFromCategory(category) {
    let items = [];
    for (let i = 0; i < category.Groups.length; i++) {
      const group = category.Groups[i];
      for (let j = 0; j < group.Items.length; j++) {
        const item = group.Items[j];
        items.push({ icon: item.Icon !== null ? item.Icon : group.Icon, value: item.ItemID.toString(), label: item.Name });
      }
    }
    navigate("/", { replace: true, state: { bShouldFetchOnLoad: true, ItemsToFetch: items } });
  }
  function OnSearchAllFromGroup(group) {
    let items = [];
    for (let i = 0; i < group.Items.length; i++) {
      const item = group.Items[i];
      items.push({ icon: item.Icon !== null ? item.Icon : group.Icon, value: item.ItemID.toString(), label: item.Name });
    }
    navigate("/", { replace: true, state: { bShouldFetchOnLoad: true, ItemsToFetch: items } });
  }
  function OnSearchIndividual(item, parentGroup) {
    let items = [];
    items.push({ value: item.ItemID.toString(), label: item.Name, icon: item.Icon !== null ? item.Icon : parentGroup.Icon });
    navigate("/", { replace: true, state: { bShouldFetchOnLoad: true, ItemsToFetch: items } });
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "bg-primary outline rounded-2xl outline-2 outline-secondary overflow-hidden shadow-sp"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "h-auto w-full bg-secondary p-3 text-white text-md outline-secondary outline outline-5"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-md"
  }, "Quick Search")), /* @__PURE__ */ React.createElement("div", {
    className: "p-4 text-xs text-white"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-lg font-bold pb-2"
  }, "Usage Note"), /* @__PURE__ */ React.createElement("p", {
    className: "italic pl-4"
  }, " The following drop down menues provide a quick way to batch search for specific items that I found could get lost easily across Alt-Characters. Simply click on any of the items to search for it on your account."), /* @__PURE__ */ React.createElement("p", {
    className: "font-bold pl-4 pb-2"
  }, "Before using this section please set your account on the home page!"), /* @__PURE__ */ React.createElement("p", {
    className: "text-lg font-bold pt-2"
  }, "Infusions"), IL_Infusions.map((Category) => /* @__PURE__ */ React.createElement(ItemListCategory_default, {
    key: Category.Name,
    category: Category,
    onClickIndividual: OnSearchIndividual,
    onClickSearchAll: OnSearchAllFromGroup,
    onClickSearchCategory: OnSearchAllFromCategory
  })), /* @__PURE__ */ React.createElement("p", {
    className: "text-lg font-bold pt-2"
  }, "Infinite Gathering Tools"), IL_GatheringTools.map((Category) => /* @__PURE__ */ React.createElement(ItemListCategory_default, {
    key: Category.Name,
    category: Category,
    onClickIndividual: OnSearchIndividual,
    onClickSearchAll: OnSearchAllFromGroup,
    onClickSearchCategory: OnSearchAllFromCategory
  })))));
}

// route:Z:\GIT\Repositories\gw2_item_finder\gw2_item_finder\app\routes\FindItem.tsx
var FindItem_exports = {};
__export(FindItem_exports, {
  loader: () => loader
});
init_react();

// app/Gw2ItemDb.server.tsx
init_react();
var import_sqlite = require("sqlite");
var import_sqlite3 = __toESM(require("sqlite3"));
var getDb = async () => {
  const db = await (0, import_sqlite.open)({
    filename: "./app/data/items.db",
    driver: import_sqlite3.default.Database
  });
  return db;
};

// route:Z:\GIT\Repositories\gw2_item_finder\gw2_item_finder\app\routes\FindItem.tsx
function mysql_real_escape_string(str) {
  return str.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, function(char) {
    switch (char) {
      case "\0":
        return "\\0";
      case "\b":
        return "\\b";
      case "	":
        return "\\t";
      case "":
        return "\\z";
      case "\n":
        return "\\n";
      case "\r":
        return "\\r";
      case '"':
      case "'":
      case "\\":
      case "%":
        return "\\" + char;
      default:
        return char;
    }
  });
}
async function loader({
  request
}) {
  const url = new URL(request.url);
  const db = await getDb();
  let search_input = url.searchParams.get("q");
  search_input = mysql_real_escape_string(search_input);
  const query = 'SELECT * FROM items WHERE name LIKE "%' + search_input + '%"';
  const res = await db.all(query);
  return res;
}

// route:Z:\GIT\Repositories\gw2_item_finder\gw2_item_finder\app\routes\about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => About
});
init_react();
var import_outline3 = require("@heroicons/react/outline");
var import_react_social_icons = require("react-social-icons");
function About() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "bg-primary outline rounded-2xl outline-2 outline-secondary overflow-hidden shadow-sp"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "h-auto w-full bg-secondary p-3 text-white text-md outline-secondary outline outline-5"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-md"
  }, "About")), /* @__PURE__ */ React.createElement("div", {
    className: "p-4 text-xs text-white"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row h-5 w-full pt-1"
  }, /* @__PURE__ */ React.createElement("p", null, "Created by Alexander Konrad (HppyDedPxl.7508)")), /* @__PURE__ */ React.createElement("div", {
    className: "pl-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row h-5 w-full pt-1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "align-middle"
  }, /* @__PURE__ */ React.createElement(import_react_social_icons.SocialIcon, {
    network: "twitter",
    style: { height: "14px", width: "14px" },
    color: "white"
  })), /* @__PURE__ */ React.createElement("p", {
    className: "flex pl-1"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "text-link hover:text-white hover:transition-all transition-all",
    href: "https://twitter.com/HppyPxl",
    target: "_blank"
  }, "@HppyPxl"))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row h-5 w-full pt-1"
  }, /* @__PURE__ */ React.createElement(import_outline3.CodeIcon, {
    className: "flex pr-1",
    color: "white",
    fontSize: 2
  }), /* @__PURE__ */ React.createElement("p", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "text-link hover:text-white hover:transition-all transition-all",
    href: "https://github.com/HppyDedPxl/gw2_item_finder",
    target: "_blank"
  }, "Find the Source on Github"))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row h-5 w-full pt-1"
  }, /* @__PURE__ */ React.createElement(import_outline3.MailIcon, {
    className: "flex pr-1",
    color: "white",
    fontSize: 2
  }), /* @__PURE__ */ React.createElement("p", {
    className: "flex"
  }, "alexander@thelazydev.net")))), /* @__PURE__ */ React.createElement("div", {
    className: "pt-2"
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Special Thanks:"), /* @__PURE__ */ React.createElement("div", {
    className: "pb-1"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "pl-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row h-5 w-full pt-1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "align-middle"
  }, /* @__PURE__ */ React.createElement(import_react_social_icons.SocialIcon, {
    network: "twitter",
    style: { height: "14px", width: "14px" },
    color: "white"
  })), /* @__PURE__ */ React.createElement("p", {
    className: "flex pl-1"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "text-link hover:text-white hover:transition-all transition-all",
    href: "https://twitter.com/Rolilichan",
    target: "_blank"
  }, "@Rolilichan (Logo Design)"), " ")))), /* @__PURE__ */ React.createElement("div", {
    className: "pt-6"
  }), /* @__PURE__ */ React.createElement("p", null, "Something not working as expected?"), /* @__PURE__ */ React.createElement("div", {
    className: "pb-1"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row w-full pt-1"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "transition-all hover:transition-all duration-300 ease-in-out h-6 w-full bg-info  text-black hover:text-gray rounded-3xl hover:rounded-md mx-1",
    onClick: (e) => {
      e.preventDefault();
      window.open("https://status.gw2efficiency.com/", "_blank");
    }
  }, "Check the API Status!"), /* @__PURE__ */ React.createElement("button", {
    className: "transition-all hover:transition-all duration-300 ease-in-out h-6 w-full bg-negative  text-black hover:text-gray rounded-3xl hover:rounded-md mx-1",
    onClick: (e) => {
      e.preventDefault();
      window.open("https://github.com/HppyDedPxl/gw2_item_finder/issues", "_blank");
    }
  }, "Create a bug report!")))));
}

// route:Z:\GIT\Repositories\gw2_item_finder\gw2_item_finder\app\routes\howto.tsx
var howto_exports = {};
__export(howto_exports, {
  default: () => Howto
});
init_react();
function Howto() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "bg-primary outline rounded-2xl outline-2 outline-secondary overflow-hidden shadow-sp"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "h-auto w-full bg-secondary p-3 text-white text-md outline-secondary outline outline-5"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-md"
  }, "Setting up your Account")), /* @__PURE__ */ React.createElement("ol", {
    className: "list-disc text-white test-sx text-xs px-5 py-5",
    type: "1"
  }, /* @__PURE__ */ React.createElement("li", {
    type: "1",
    className: "list-inside"
  }, "Head over to the ", /* @__PURE__ */ React.createElement("a", {
    className: "text-link hover:text-white hover:transition-all transition-all",
    href: "https://account.arena.net/applications",
    target: "_blank"
  }, "Guild Wars 2 API Key Management"), "."), /* @__PURE__ */ React.createElement("li", {
    type: "1",
    className: "list-inside"
  }, 'Click on the "New Key" button.'), /* @__PURE__ */ React.createElement("li", {
    type: "1",
    className: "list-inside"
  }, "Enter a name of your choice and check at least the following permissions.", /* @__PURE__ */ React.createElement("div", {
    style: { width: "35%", marginLeft: "auto", marginRight: "auto", paddingTop: "8px", paddingBottom: "8px" }
  }, /* @__PURE__ */ React.createElement("a", {
    href: "tuto_permissions.png",
    target: "_blank"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "border-solid border-gray-500 rounded-md border-2 p-1",
    src: "tuto_permissions.png"
  })))), /* @__PURE__ */ React.createElement("li", {
    type: "1",
    className: "list-inside"
  }, "Copy your new API key."), /* @__PURE__ */ React.createElement("li", {
    type: "1",
    className: "list-inside"
  }, "Paste it into the API-Key Input field."), /* @__PURE__ */ React.createElement("li", {
    type: "1",
    className: "list-inside"
  }, 'Click the "Set Account" button and wait.'))));
}

// route:Z:\GIT\Repositories\gw2_item_finder\gw2_item_finder\app\routes\index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index2
});
init_react();
var import_outline5 = require("@heroicons/react/outline");
var import_react10 = __toESM(require("react"));
var import_react_router_dom2 = require("react-router-dom");

// app/components/ItemCard.tsx
init_react();
var import_react6 = __toESM(require("react"));
var import_react7 = require("react");

// app/GW2Api/GW2ItemFindProcess.ts
init_react();

// app/GW2Api/GW2Item.ts
init_react();

// app/GW2Api/GW2API_Call.ts
init_react();
var GW2APIEndpoint = "https://api.guildwars2.com/v2/";
var GW2API_Call = class {
  constructor(apiKey) {
    this.ApiKey = apiKey;
    this.URI = "";
    this.Response = "test";
    this.IsDone = false;
  }
  async call() {
    return new Promise((resolve, error) => {
      let context2 = this;
      let endpoint = this.URI + "?access_token=" + this.ApiKey;
      return fetch(endpoint, {
        method: "GET",
        redirect: "follow"
      }).then((response) => {
        context2.IsDone = true;
        response.text().then((res) => {
          context2.Response = res;
          resolve(res);
        });
      }).catch((err) => error("Error: " + err));
    });
  }
  async callNoAuth() {
    return new Promise((resolve, error) => {
      let context2 = this;
      let endpoint = this.URI;
      return fetch(endpoint, {
        method: "GET",
        redirect: "follow"
      }).then((response) => {
        context2.IsDone = true;
        response.text().then((res) => {
          context2.Response = res;
          resolve(res);
        });
      }).catch((err) => error("Error: " + err));
    });
  }
  GetCharacterList() {
    return new Promise((res, err) => {
      this.URI = GW2APIEndpoint + "characters";
      this.call().then((resolve) => {
        let jsonRes = JSON.parse(this.Response);
        if (jsonRes.text !== void 0 && jsonRes.text === "Invalid access token") {
          err("Invalid API Key");
          return;
        }
        res(jsonRes);
      }).catch(() => {
        err("Error");
      });
    });
  }
  GetEquipmentTemplates(characterName) {
    return new Promise((resolve, error) => {
      this.URI = GW2APIEndpoint + "characters/" + characterName + "/equipmenttabs";
      this.call().then((res) => {
        const result = { CharacterName: characterName, TemplateList: JSON.parse(res) };
        resolve(result);
      }).catch((err) => error(err));
    });
  }
  GetEquipmentFromTemplate(characterName, templateId) {
    return new Promise((resolve, error) => {
      this.URI = GW2APIEndpoint + "characters/" + characterName + "/equipmenttabs/" + templateId;
      this.call().then((res) => {
        const result = { CharacterName: characterName, EqTemplateId: templateId, Equipment: JSON.parse(res) };
        resolve(result);
      }).catch((err) => error(err));
    });
  }
  GetCharacterData(characterName) {
    return new Promise((resolve, error) => {
      this.URI = GW2APIEndpoint + "characters/" + characterName;
      this.call().then((res) => {
        let jsonRes = JSON.parse(res);
        const result = { CharacterName: characterName, CharacterProfession: jsonRes.profession, CharacterBags: jsonRes.bags, CharacterPvESpecs: jsonRes.specializations.pve };
        resolve(result);
      }).catch((err) => error(err));
    });
  }
  GetItemData(itemId) {
    return new Promise((resolve, error) => {
      if (!itemId || isNaN(itemId)) {
        error("Item ID does not exist!");
        return;
      }
      this.URI = GW2APIEndpoint + "items/" + itemId;
      this.callNoAuth().then((res) => {
        let jsonRes = JSON.parse(res);
        if (jsonRes.text !== void 0 && jsonRes.text === "no such id") {
          error("Item ID does not exist!");
          return;
        }
        const result = { ID: itemId, Name: jsonRes.name, IconUrl: jsonRes.icon, Type: jsonRes.type, Details: jsonRes.details };
        resolve(result);
      }).catch((err) => {
        error(err);
      });
    });
  }
  GetAccountData() {
    return new Promise((resolve, error) => {
      this.URI = GW2APIEndpoint + "account";
      this.call().then((res) => {
        let jsonRes = JSON.parse(this.Response);
        if (jsonRes.text !== void 0 && jsonRes.text === "Invalid access token") {
          error("Invalid API Key");
          return;
        }
        const result = { Name: jsonRes.name, Access: jsonRes.access };
        resolve(result);
      }).catch((err) => {
        error(err);
      });
    });
  }
  GetDefaultEquipmentData(characterName) {
    return new Promise((resolve, error) => {
      this.URI = GW2APIEndpoint + "characters/" + characterName + "/equipment";
      this.call().then((res) => {
        let result = { Equipment: JSON.parse(res).equipment };
        resolve(result);
      }).catch((err) => {
        error(err);
      });
    });
  }
  GetSharedInventoryData() {
    return new Promise((resolve, error) => {
      this.URI = GW2APIEndpoint + "account/inventory";
      this.call().then((res) => {
        let result = { Items: JSON.parse(res) };
        resolve(result);
      }).catch((err) => {
        error(err);
      });
    });
  }
  GetBankData() {
    return new Promise((resolve, error) => {
      this.URI = GW2APIEndpoint + "account/bank";
      this.call().then((res) => {
        let result = { Items: JSON.parse(res) };
        resolve(result);
      }).catch((err) => {
        error(err);
      });
    });
  }
  GetMaterialStorageData() {
    console.log("getMatstorageData");
    return new Promise((resolve, error) => {
      this.URI = GW2APIEndpoint + "account/materials";
      this.call().then((res) => {
        let result = { Items: JSON.parse(res) };
        resolve(result);
      }).catch((err) => {
        error(err);
      });
    });
  }
};

// app/GW2Api/GW2Item.ts
var GW2Item = class {
  constructor() {
    this.ItemID = 0;
    this.Name = "";
    this.IconUrl = "";
    this.Slot = "";
    this.Upgrades = [];
    this.Infusions = [];
    this.Skin = 0;
    this.Stats = {};
    this.Binding = "";
    this.Dyes = [];
    this.Count = 0;
  }
  static fromJSON(itemData) {
    let item = new GW2Item();
    item.ItemID = itemData.id;
    item.Slot = itemData.slot;
    item.Upgrades = itemData.upgrades;
    item.Infusions = itemData.infusions;
    item.Skin = itemData.skin;
    item.Stats = itemData.stats;
    item.Binding = itemData.binding;
    item.Dyes = itemData.dyes;
    item.Count = itemData.count;
    return item;
  }
  hasItemIdAsUpgradeOrInfusion(id) {
    if (this.Infusions !== void 0) {
      for (let i = 0; i < this.Infusions.length; i++) {
        if (this.Infusions[i] === id)
          return true;
      }
    }
    if (this.Upgrades !== void 0) {
      for (let i = 0; i < this.Upgrades.length; i++) {
        if (this.Upgrades[i] === id)
          return true;
      }
    }
    return false;
  }
  populateFromAPI() {
    return new Promise((resolve, error) => {
      let call = new GW2API_Call("NoAuth");
      return call.GetItemData(this.ItemID).then((result) => {
        this.Name = result.Name;
        this.IconUrl = result.IconUrl;
        this.Details = result.Details;
        console.log("Resolved");
        resolve(this);
      }).catch((err) => {
        error(err);
      });
    });
  }
};

// app/GW2Api/GW2ItemFindProcess.ts
var GW2ItemFinder = class {
  constructor(account, itemID) {
    this.account = account;
    this.itemID = itemID;
  }
  ConsolidateSearch(hits) {
    let totalFound = 0;
    let Counters = [];
    hits.forEach((hit) => {
      if (hit != null) {
        let FindLocation = "";
        if (hit.Character != null)
          FindLocation = hit.Character.CharacterName;
        else
          FindLocation = "___" + hit.Location;
        if (Counters[FindLocation] !== void 0) {
          if (Counters[FindLocation][hit.EquipmentTabNr] !== void 0) {
            Counters[FindLocation][hit.EquipmentTabNr] = Counters[FindLocation][hit.EquipmentTabNr] + hit.Count;
          } else {
            Counters[FindLocation][hit.EquipmentTabNr] = hit.Count;
          }
        } else {
          let arr = [];
          arr[hit.EquipmentTabNr] = hit.Count;
          Counters[FindLocation] = arr;
          Counters[FindLocation]["CharacterData"] = hit.Character;
        }
      }
    });
    let Aggregates = [];
    let iterator = Object.keys(Counters);
    iterator.forEach((loc) => {
      if (loc.startsWith("___")) {
        Aggregates[loc.slice(3)] = [];
        Aggregates[loc.slice(3)]["Amount"] = Counters[loc][0];
        totalFound = totalFound + Counters[loc][0];
      } else {
        const subIterator = Object.keys(Counters[loc]);
        let maxArr = [];
        let foundOnLocation = 0;
        subIterator.forEach((tab) => {
          if (tab === "CharacterData")
            return;
          if (tab == 0) {
            console.log("Found this here");
            totalFound += Counters[loc][tab];
            foundOnLocation += Counters[loc][tab];
          } else {
            maxArr.push(Counters[loc][tab]);
          }
        });
        if (maxArr.length > 0) {
          let max = Math.max(...maxArr);
          totalFound += max;
          foundOnLocation += max;
        }
        Aggregates[loc] = [];
        Aggregates[loc]["Amount"] = foundOnLocation;
        Aggregates[loc]["CharacterData"] = Counters[loc]["CharacterData"];
      }
    });
    let finalAggregates = [];
    finalAggregates.push({ "Name": "Full Account", "Data": { "Amount": totalFound } });
    let finalIterator = Object.keys(Aggregates);
    finalIterator.forEach((it) => {
      finalAggregates.push({ "Name": it, "Data": Aggregates[it] });
    });
    return finalAggregates;
  }
  SearchOnAccount(itemId) {
    let search;
    let results = this.account.FindItemInAccount(parseInt(itemId));
    let aggregated_results = this.ConsolidateSearch(results);
    search = { aggregates: aggregated_results, hits: results };
    console.log(search);
    return search;
  }
};

// app/GW2Api/GW2AccountInfo.ts
init_react();

// app/GW2Api/GW2Character.ts
init_react();

// app/GW2Api/GW2Bag.ts
init_react();
var GW2Bag = class {
  constructor() {
    this.ItemID = 0;
    this.Inventory = [];
    this.Size = 0;
  }
  ReassignPrototypes() {
    for (let i = 0; i < this.Inventory.length; i++) {
      if (this.Inventory[i] !== null) {
        this.Inventory[i] = Object.assign(new GW2Item(), this.Inventory[i]);
      }
    }
  }
};

// app/GW2Api/GW2EquipmentTab.ts
init_react();

// app/GW2Api/GW2EquipmentItem.ts
init_react();
var GW2EquipmentItem = class {
  constructor() {
    this.id = 0;
    this.slot = "None";
    this.upgrades = [];
    this.infusions = [];
  }
};

// app/GW2Api/GW2EquipmentTab.ts
var GW2EquipmentTab = class {
  constructor() {
    this.id = -1;
    this.name = "";
    this.equipment = [];
  }
  populateFromJsonObject(jsonObject) {
    this.id = jsonObject.tab;
    this.name = jsonObject.name;
    this.equipment = [];
    if (jsonObject.equipment !== null && jsonObject.equipment !== void 0 && Array.isArray(jsonObject.equipment)) {
      for (let i = 0; i < jsonObject.equipment.length; i++) {
        const eq = jsonObject.equipment[i];
        this.equipment.push({ id: eq.id, slot: eq.slot, upgrades: eq.upgrades, infusions: eq.infusions });
      }
    }
    return this;
  }
  populateFromApi(apiKey, characterName, tabId) {
    return new Promise((resolve, error) => {
      new GW2API_Call(apiKey).GetEquipmentFromTemplate(characterName, tabId).then((res) => {
        this.populateFromJsonObject(res.Equipment);
        resolve(this);
      }).catch((err) => {
        error(err);
      });
    });
  }
  ReassignPrototypes() {
    for (let i = 0; i < this.equipment.length; i++) {
      this.equipment[i] = Object.assign(new GW2EquipmentItem(), this.equipment[i]);
    }
  }
};

// app/GW2Api/GW2Character.ts
var EliteSpecLookupTable = {
  5: "Druid",
  7: "Daredevil",
  18: "Berserker",
  27: "Dragonhunter",
  34: "Reaper",
  40: "Chronomancer",
  43: "Scrapper",
  48: "Tempest",
  52: "Herald",
  55: "Soulbeast",
  56: "Weaver",
  57: "Holosmith",
  58: "Deadeye",
  59: "Mirage",
  60: "Scourge",
  61: "Spellbreaker",
  62: "Firebrand",
  63: "Renegade",
  64: "Harbinger",
  65: "Willbender",
  66: "Virtuoso",
  67: "Catalyst",
  68: "BladeSworn",
  69: "Vindicator",
  70: "Mechanist",
  71: "Specter",
  72: "Untamed"
};
var GW2Character = class {
  constructor() {
    this.CharacterName = "";
    this.EquipmentTabs = [];
    this.Profession = "";
    this.EliteSpec = "No";
    this.Bags = [];
    this.BaseEquipment = [];
  }
  populateFromApi(apiKey, characterName) {
    return new Promise((resolve, error) => {
      new GW2API_Call(apiKey).GetCharacterData(characterName).then((res) => {
        this.CharacterName = res.CharacterName;
        this.Profession = res.CharacterProfession;
        this.SetActivePvESpecializations(res.CharacterPvESpecs);
        this.Bags = [];
        for (let i = 0; i < res.CharacterBags.length; i++) {
          if (res.CharacterBags[i] !== null) {
            let bag = new GW2Bag();
            bag.ItemID = res.CharacterBags[i].id;
            bag.Inventory = [];
            for (let j = 0; j < res.CharacterBags[i].inventory.length; j++) {
              const element = res.CharacterBags[i].inventory[j];
              bag.Inventory.push(element == null ? null : GW2Item.fromJSON(element));
            }
            bag.Size = res.CharacterBags[i].size;
            this.Bags.push(bag);
          } else {
            this.Bags.push(null);
          }
        }
        let parallelLookups = [];
        parallelLookups.push(new GW2API_Call(apiKey).GetDefaultEquipmentData(characterName).then((res2) => {
          this.BaseEquipment = [];
          for (let i = 0; i < res2.Equipment.length; i++) {
            this.BaseEquipment.push(res2.Equipment[i] !== null ? GW2Item.fromJSON(res2.Equipment[i]) : null);
          }
        }));
        parallelLookups.push(new GW2API_Call(apiKey).GetEquipmentTemplates(characterName).then((res2) => {
          let equipmentTabPromises = [];
          for (let i = 0; i < res2.TemplateList.length; i++) {
            const tabId = res2.TemplateList[i];
            let newEquipmentTab = new GW2EquipmentTab();
            equipmentTabPromises.push(newEquipmentTab.populateFromApi(apiKey, characterName, tabId));
            this.EquipmentTabs.push(newEquipmentTab);
          }
          return Promise.all(equipmentTabPromises).then((res3) => {
          }).catch((err) => {
            error(err);
          });
        }).catch((err) => {
          error(err);
        }));
        Promise.all(parallelLookups).then((res2) => {
          resolve(this);
        }).catch((err) => {
          error(err);
        });
      }).catch((err) => {
        error(err);
      });
    });
  }
  ResolveSpecIdToEliteSpec(id) {
    if (EliteSpecLookupTable[id] !== void 0) {
      return EliteSpecLookupTable[id];
    }
    return "No";
  }
  SetActivePvESpecializations(pveSpecs) {
    if (pveSpecs.length == 3) {
      let thirdSpec = pveSpecs[2];
      this.EliteSpec = this.ResolveSpecIdToEliteSpec(thirdSpec.id);
    }
  }
  GetCharacterClass() {
    if (this.EliteSpec !== "No")
      return this.EliteSpec;
    return this.Profession;
  }
  ReassignPrototypes() {
    var _a;
    for (let i = 0; i < this.EquipmentTabs.length; i++) {
      this.EquipmentTabs[i] = Object.assign(new GW2EquipmentTab(), this.EquipmentTabs[i]);
      this.EquipmentTabs[i].ReassignPrototypes();
    }
    for (let i = 0; i < this.Bags.length; i++) {
      if (this.Bags[i] !== null) {
        this.Bags[i] = Object.assign(new GW2Bag(), this.Bags[i]);
        (_a = this.Bags[i]) == null ? void 0 : _a.ReassignPrototypes();
      }
    }
    for (let i = 0; i < this.BaseEquipment.length; i++) {
      if (this.BaseEquipment[i] !== null) {
        this.BaseEquipment[i] = Object.assign(new GW2Item(), this.BaseEquipment[i]);
      }
    }
  }
  GetDefaultEquipmentSlot(slotName) {
    var _a;
    if (this.BaseEquipment === null || this.BaseEquipment === void 0)
      return null;
    for (let i = 0; i < this.BaseEquipment.length; i++) {
      if (((_a = this.BaseEquipment[i]) == null ? void 0 : _a.Slot) === slotName) {
        return this.BaseEquipment[i];
      }
    }
    return null;
  }
};

// app/GW2Api/GW2AccountInfo.ts
function GenerateUID() {
  return Math.random().toString(36).substr(2, 32);
}
var GW2AccountInfo = class {
  constructor() {
    this.AccountName = "";
    this.Access = [];
    this.Characters = [];
    this.SharedInventory = [];
    this.ApiKey = "";
    this.LastUpdate = 0;
    this.BankInventory = [];
    this.MaterialStorage = [];
  }
  populateFromApiKey(apiKey) {
    this.ApiKey = apiKey;
    return new Promise((resolve, error) => {
      new GW2API_Call(apiKey).GetAccountData().then((res) => {
        this.AccountName = res.Name;
        this.Access = res.Access;
        let parallelRequests = [];
        parallelRequests.push(new GW2API_Call(apiKey).GetSharedInventoryData().then((res2) => {
          this.SharedInventory = [];
          for (let i = 0; i < res2.Items.length; i++) {
            this.SharedInventory.push(res2.Items[i] !== null ? GW2Item.fromJSON(res2.Items[i]) : null);
          }
        }).catch((err) => {
          error(err);
        }));
        parallelRequests.push(new GW2API_Call(apiKey).GetBankData().then((res2) => {
          this.BankInventory = [];
          for (let i = 0; i < res2.Items.length; i++) {
            this.BankInventory.push(res2.Items[i] !== null ? GW2Item.fromJSON(res2.Items[i]) : null);
          }
        }).catch((err) => {
          error(err);
        }));
        parallelRequests.push(new GW2API_Call(apiKey).GetCharacterList().then((res2) => {
          let characterPromises = [];
          for (let i = 0; i < res2.length; i++) {
            const charName = res2[i];
            let newCharacter = new GW2Character();
            this.Characters.push(newCharacter);
            characterPromises.push(newCharacter.populateFromApi(apiKey, charName));
          }
          return Promise.all(characterPromises).then((res3) => {
          }).catch((err) => {
            error(err);
          });
        }).catch((err) => {
          error(err);
        }));
        parallelRequests.push(new GW2API_Call(apiKey).GetMaterialStorageData().then((res2) => {
          this.MaterialStorage = [];
          for (let i = 0; i < res2.Items.length; i++) {
            this.MaterialStorage.push(res2.Items[i] !== null ? GW2Item.fromJSON(res2.Items[i]) : null);
          }
        }).catch((err) => {
          error(err);
        }));
        Promise.all(parallelRequests).then((res2) => {
          this.LastUpdate = Date.now();
          console.log("------ ACCOUNT SUCESSFULLY INDEXED --------");
          console.log(this);
          resolve(this);
        }).catch((err) => {
          error(err);
        });
      }).catch((err) => {
        error(err);
      });
    });
  }
  getTimeSinceLastUpdated() {
    return Date.now() - this.LastUpdate;
  }
  populateWithData(data) {
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      if (this.Characters.some((e) => e.CharacterName === element.CharacterName)) {
        for (let j = 0; j < this.Characters.length; j++) {
          if (this.Characters[j].CharacterName == element.CharacterName) {
            this.Characters[j].EquipmentTabs.push(new GW2EquipmentTab().populateFromJsonObject(element.Equipment));
          }
        }
      } else {
        let newChar = new GW2Character();
        newChar.CharacterName = element.CharacterName;
        newChar.EquipmentTabs = [];
        newChar.EquipmentTabs.push(new GW2EquipmentTab().populateFromJsonObject(element.Equipment));
        this.Characters.push(newChar);
      }
    }
  }
  resolveCharactersFromAPI(apiKey) {
    return new Promise((resolve, error) => {
      let pendingRequests = [];
      for (let i = 0; i < this.Characters.length; i++) {
        const character = this.Characters[i];
        pendingRequests.push(new GW2API_Call(apiKey).GetCharacterData(this.Characters[i].CharacterName));
      }
      Promise.all(pendingRequests).then((results) => {
        results.forEach((result) => {
          for (let i = 0; i < this.Characters.length; i++) {
            if (this.Characters[i].CharacterName === result.CharacterName) {
              this.Characters[i].Profession = result.CharacterProfession;
              this.Characters[i].SetActivePvESpecializations(result.CharacterPvESpecs);
              this.Characters[i].Bags = result.CharacterBags;
            }
          }
        });
        resolve(this);
      });
    });
  }
  FindItemInAccount(searchId) {
    var _a, _b, _c, _d, _e, _f;
    let hits = [];
    for (let i = 0; i < this.SharedInventory.length; i++) {
      if (this.SharedInventory[i] !== null) {
        if (((_a = this.SharedInventory[i]) == null ? void 0 : _a.ItemID) === searchId || ((_b = this.SharedInventory[i]) == null ? void 0 : _b.hasItemIdAsUpgradeOrInfusion(searchId))) {
          hits.push({ uuid: GenerateUID(), Character: null, EquipmentTabNr: 0, EquipmentTabName: "Shared Account Inventory", Slot: String(i + 1), Location: "Shared Inventory", Count: this.SharedInventory[i].Count });
        }
      }
    }
    for (let i = 0; i < this.BankInventory.length; i++) {
      if (this.BankInventory[i] !== null) {
        console.log(this.BankInventory[i]);
        if (((_c = this.BankInventory[i]) == null ? void 0 : _c.ItemID) === searchId || ((_d = this.BankInventory[i]) == null ? void 0 : _d.hasItemIdAsUpgradeOrInfusion(searchId))) {
          let bankTab = Math.floor(i / 30);
          let slot = i - bankTab * 30;
          hits.push({ uuid: GenerateUID(), Character: null, EquipmentTabNr: 0, EquipmentTabName: "Account Bank", Slot: "Tab: " + (bankTab + 1) + " Slot:" + (slot + 1), Location: "Account Bank", Count: this.BankInventory[i].Count });
        }
      }
    }
    console.log(this.MaterialStorage);
    for (let i = 0; i < this.MaterialStorage.length; i++) {
      if (this.MaterialStorage[i] !== null) {
        console.log(this.MaterialStorage[i]);
        if (((_e = this.MaterialStorage[i]) == null ? void 0 : _e.ItemID) === searchId || ((_f = this.MaterialStorage[i]) == null ? void 0 : _f.hasItemIdAsUpgradeOrInfusion(searchId))) {
          hits.push({ uuid: GenerateUID(), Character: null, EquipmentTabNr: 0, EquipmentTabName: "Material Storage", Slot: "-", Location: "Material Storage", Count: this.MaterialStorage[i].Count });
        }
      }
    }
    this.Characters.forEach((character) => {
      let slotsToCheck = ["Sickle", "Axe", "Pick", "FishingRod", "FishingBait", "FishingLure", "PowerCore", "SensoryArray", "ServiceChip", "Relic"];
      for (let i = 0; i < slotsToCheck.length; i++) {
        let element = character.GetDefaultEquipmentSlot(slotsToCheck[i]);
        if (element !== null && element.ItemID === searchId) {
          hits.push({ uuid: GenerateUID(), Character: character, EquipmentTabNr: 0, EquipmentTabName: "Default Equipment", Slot: slotsToCheck[i], Location: "Equipment", Count: 1 });
        }
      }
      for (let i = 0; i < character.Bags.length; i++) {
        const bag = character.Bags[i];
        if (bag == null)
          continue;
        for (let j = 0; j < bag.Inventory.length; j++) {
          const item = bag.Inventory[j];
          if (item !== null && item.ItemID === searchId || (item == null ? void 0 : item.hasItemIdAsUpgradeOrInfusion(searchId))) {
            hits.push({ uuid: GenerateUID(), Character: character, EquipmentTabNr: 0, EquipmentTabName: "Inventory", Slot: "Bag: " + (i + 1) + " Slot: " + (j + 1), Location: "Inventory", Count: item.Count });
          }
        }
      }
      character.EquipmentTabs.forEach((equipmentTab) => {
        equipmentTab.equipment.forEach((item) => {
          if (item.id === searchId)
            hits.push({ uuid: GenerateUID(), Character: character, EquipmentTabNr: equipmentTab.id, EquipmentTabName: equipmentTab.name, Slot: item.slot, Location: "Equipment Tab", Count: 1 });
          if (item.infusions !== void 0) {
            item.infusions.forEach((infusion) => {
              if (infusion === searchId) {
                hits.push({ uuid: GenerateUID(), Character: character, EquipmentTabNr: equipmentTab.id, EquipmentTabName: equipmentTab.name, Slot: item.slot, Location: "Equipment Tab", Count: 1 });
              }
            });
          }
          if (item.upgrades !== void 0) {
            item.upgrades.forEach((upgrade) => {
              if (upgrade === searchId) {
                hits.push({ uuid: GenerateUID(), Character: character, EquipmentTabNr: equipmentTab.id, EquipmentTabName: equipmentTab.name, Slot: item.slot, Location: "Equipment Tab", Count: 1 });
              }
            });
          }
        });
      });
    });
    return hits;
  }
  Serialize() {
    return JSON.stringify(this);
  }
};
function DeserializeGW2AccountInfo(data) {
  let dataObj = JSON.parse(data);
  dataObj = Object.assign(new GW2AccountInfo(), dataObj);
  for (let i = 0; i < dataObj.SharedInventory.length; i++) {
    if (dataObj.SharedInventory[i] !== null) {
      dataObj.SharedInventory[i] = Object.assign(new GW2Item(), dataObj.SharedInventory[i]);
    }
  }
  for (let i = 0; i < dataObj.BankInventory.length; i++) {
    if (dataObj.BankInventory[i] !== null) {
      dataObj.BankInventory[i] = Object.assign(new GW2Item(), dataObj.BankInventory[i]);
    }
  }
  for (let i = 0; i < dataObj.MaterialStorage.length; i++) {
    if (dataObj.MaterialStorage[i] !== null) {
      dataObj.MaterialStorage[i] = Object.assign(new GW2Item(), dataObj.MaterialStorage[i]);
    }
  }
  for (let i = 0; i < dataObj.Characters.length; i++) {
    dataObj.Characters[i] = Object.assign(new GW2Character(), dataObj.Characters[i]);
    dataObj.Characters[i].ReassignPrototypes();
  }
  return dataObj;
}

// app/components/ItemCard.tsx
var import_PacmanLoader = __toESM(require("react-spinners/PacmanLoader"));
var import_outline4 = require("@heroicons/react/outline");
var ItemCard = class {
  constructor() {
    this.uid = "";
    this.account = new GW2AccountInfo();
    this.itemID = "";
    this.itemIcon = "";
    this.itemName = "";
    this.results = 0;
    this.onRemoveClickedCallback = null;
    this.onNewResultLength = (n) => {
      this.results = n;
    };
  }
};
var useAPIData = (account, itemid) => {
  const [apiData, setApiData] = (0, import_react7.useState)([]);
  const [isLoading, setLoading] = (0, import_react7.useState)(true);
  const [isError, setIsError] = (0, import_react7.useState)(false);
  const [Error2, setError] = (0, import_react7.useState)("");
  const [result, setResult] = (0, import_react7.useState)([]);
  const [aggregateResults, setAggregateResult] = (0, import_react7.useState)([]);
  const [expanded, setExpanded] = (0, import_react7.useState)();
  (0, import_react7.useEffect)(() => {
    let finder = new GW2ItemFinder(account, itemid);
    let r = finder.SearchOnAccount(itemid);
    setResult(r.hits);
    setAggregateResult(r.aggregates);
    setLoading(false);
  }, []);
  return { apiData, isLoading, result, aggregateResults, expanded, isError, Error: Error2, setExpanded };
};
function randuid() {
  return Math.random() * 9999999999;
}
var ItemSearch = (props) => {
  const { apiData, isLoading, result, aggregateResults, expanded, isError, Error: Error2, setExpanded } = useAPIData(props.account, props.itemID);
  function toggleExpand() {
    setExpanded(!expanded);
  }
  let onRemoveClicked = () => {
    if (props.onRemoveClickedCallback !== null)
      props == null ? void 0 : props.onRemoveClickedCallback(props.uid);
  };
  props.onNewResultLength(result.length);
  return isError ? /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "bg-primary border-solid border-red-800 border-4 rounded-md overflow-hidden shadow-sp"
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "grid flex-col"
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "flex items-center justify-center text-white  pt-3"
  }, "Oh no! Something went wrong!"), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "flex items-center justify-center text-white  pt-1 pb-3"
  }, Error2)))) : /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "bg-primary outline outline-6 outline-secondary pb-1 rounded-md shadow-sp"
  }, isLoading ? /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "grid flex-col"
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "flex items-center justify-center text-white px-20 py-16"
  }, /* @__PURE__ */ import_react6.default.createElement(import_PacmanLoader.default, {
    color: "white"
  }))) : /* @__PURE__ */ import_react6.default.createElement("div", null, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "bg-secondary h-8 flex flex-row"
  }, /* @__PURE__ */ import_react6.default.createElement("img", {
    src: props.itemIcon,
    className: "h-full rounded-md "
  }), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "flex w-full items-center justify-center text-white text-sm"
  }, props.itemName, " [", props.itemID, "]"), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "flex w-7 h-7 my-auto items-center justify-center mr-1"
  }, /* @__PURE__ */ import_react6.default.createElement("button", {
    className: "transition-all hover:transition-all bg-negative h-7 w-7 rounded-2xl hover:rounded-md items-center justify-center text-black p-1",
    onClick: onRemoveClicked
  }, /* @__PURE__ */ import_react6.default.createElement(import_outline4.XIcon, {
    style: { alignSelf: "center" }
  })))), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "my-2 px-4"
  }, result.length > 0 ? /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, aggregateResults.map((r) => /* @__PURE__ */ import_react6.default.createElement("div", {
    key: randuid()
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "bg-quaternary my-1 mx-1 my-1 py-1 px-4 h-auto flex flex-row border-solid border-secondary rounded-xl text-xs"
  }, r.Data["CharacterData"] === void 0 ? /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "flex items-center justify-center text-white"
  }, r.Name)) : /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "resultGridCol col-span-2 md:col-span-1"
  }, /* @__PURE__ */ import_react6.default.createElement("img", {
    src: "icons/" + r.Data["CharacterData"].GetCharacterClass() + ".png",
    className: "h-6 pr-2"
  }), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "flex items-center justify-center text-white wrap-anywhere"
  }, r.Data["CharacterData"].CharacterName, " "))), /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "resultGridCol"
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "flex items-center justify-center text-white pl-4 text-gra-300"
  }, " Amount Found: "), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "flex items-center justify-center text-white pl-1 text-positive"
  }, r.Data["Amount"], " ")))))), expanded ? /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, /* @__PURE__ */ import_react6.default.createElement("button", {
    onClick: toggleExpand,
    className: "flex w-full transition-all hover:transition-all pl-2 pr-2 rounded-2xl hover:rounded-md bg-positive h-auto content-center items-center align-center expand-button"
  }, "Hide Detailed Location Info"), result.map((r) => /* @__PURE__ */ import_react6.default.createElement("div", {
    key: r.uuid
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "bg-quaternary my-1 mx-1 my-1 py-1 px-4 h-auto flex flex-row border-solid border-secondary rounded-xl text-xs"
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "grid grid-cols-2 md:grid-cols-3 w-full"
  }, r.Character === null ? /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "resultGridCol col-span-2 md:col-span-1"
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "flex items-center justify-center text-white"
  }, "No Character"))) : /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "resultGridCol col-span-2 md:col-span-1"
  }, /* @__PURE__ */ import_react6.default.createElement("img", {
    src: "icons/" + r.Character.GetCharacterClass() + ".png",
    className: "h-6 pr-2"
  }), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "flex items-center justify-center text-white wrap-anywhere"
  }, r.Character.CharacterName, " "))), r.EquipmentTabNr !== 0 ? /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "resultGridCol"
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "flex items-center justify-center text-white pl-4 text-gra-300"
  }, " Equipment Tab: "), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "flex items-center justify-center text-white pl-1 text-positive"
  }, r.EquipmentTabNr, " "))) : /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "resultGridCol"
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "flex items-center justify-center text-white pl-4 text-gray-300"
  }, " ", r.Location, " "))), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "resultGridCol col-span-1"
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "flex items-center justify-center text-white pl-4"
  }, "Slot: "), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "flex items-center justify-center text-white pl-1 text-positive wrap-anywhere"
  }, r.Slot)))))), " ") : /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, /* @__PURE__ */ import_react6.default.createElement("button", {
    onClick: toggleExpand,
    className: "flex w-full transition-all hover:transition-all pl-2 pr-2 rounded-2xl hover:rounded-md bg-positive h-auto content-center items-center align-center expand-button"
  }, "View Detailed Location Info"))) : /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "bg-quaternary my-1 mx-1 my-1 py-1 px-4 h-auto flex flex-row border-solid border-secondary rounded-xl text-xs"
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "flex items-center justify-center text-white text-xs mx-auto "
  }, "Item not found on this Account. Skritt are very sorry :(")))));
};
var ItemCard_default = ItemSearch;

// route:Z:\GIT\Repositories\gw2_item_finder\gw2_item_finder\app\routes\index.tsx
var import_react_spinners = require("react-spinners");

// app/components/ItemSelect.tsx
init_react();
var import_react8 = __toESM(require("react"));
var import_react9 = require("react");
var import_react_select = require("react-select");
var import_async = __toESM(require("react-select/async"));
var import_axios = __toESM(require("axios"));
var ItemSelect = class extends import_react9.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      inputBackup: ""
    };
    this.promiseItemOptions = (inputValue) => {
      return new Promise((resolve) => {
        import_axios.default.get("./FindItem?q=" + inputValue).then((res) => {
          let options = [];
          for (let i = 0; i < res.data.length && i < 100; i++) {
            const element = res.data[i];
            options.push({ value: element.id, label: element.name, icon: element.icon });
          }
          resolve(options);
        });
      });
    };
    this.onInputChange = (query, { action }) => {
      if (action !== "set-value") {
        this.setState({ inputValue: query });
        this.setState({ inputBackup: query });
        return query;
      } else {
        this.setState({ inputValue: this.state.inputBackup });
        return this.state.inputBackup;
      }
    };
    this.onOptionSelected = (data, action) => {
      this.props.onChange(data, action);
    };
    this.singleOption = (props) => /* @__PURE__ */ import_react8.default.createElement("div", {
      className: "flex border-solid border-gray border-b-2 py-2 xs:py-0 h-12 sm:h-9 md:h-7"
    }, /* @__PURE__ */ import_react8.default.createElement(import_react_select.components.Option, __spreadValues({}, props), /* @__PURE__ */ import_react8.default.createElement("div", {
      className: "flex flex-row-full h-full items-center align-center pr-2"
    }, props.data.icon ? /* @__PURE__ */ import_react8.default.createElement("img", {
      className: "flex h-full w-0 rounded-md border-2 border-solid border-gray-300 invisible xs:w-auto xs:visible",
      src: props.data.icon
    }) : null, /* @__PURE__ */ import_react8.default.createElement("div", {
      className: "flex pl-4 text-xs md:text-sm"
    }, props.label), /* @__PURE__ */ import_react8.default.createElement("sup", null, props.data.value))));
    this.multiValue = (props) => /* @__PURE__ */ import_react8.default.createElement(import_react_select.components.MultiValue, __spreadValues({}, props), /* @__PURE__ */ import_react8.default.createElement("div", {
      className: "flex flex-row-full items-center align-center"
    }, /* @__PURE__ */ import_react8.default.createElement("div", {
      className: "flex text-xs md:text-sm"
    }, props.data.label), /* @__PURE__ */ import_react8.default.createElement("sup", null, props.data.value)));
    this.selectBaseStyle = {
      control: (base) => __spreadProps(__spreadValues({}, base), {
        minHeight: 34
      }),
      dropdownIndicator: (styles) => __spreadProps(__spreadValues({}, styles), {
        paddingTop: 2,
        paddingBottom: 2
      }),
      clearIndicator: (styles) => __spreadProps(__spreadValues({}, styles), {
        paddingTop: 2,
        paddingBottom: 2
      }),
      option: (provided, state) => __spreadProps(__spreadValues({}, provided), {
        padding: 0,
        paddingLeft: "4px",
        margin: 0
      })
    };
    this.selector = import_react8.default.createRef();
  }
  filterOptions(options, filter, values) {
    if (!options)
      options = [];
    return options;
  }
  render() {
    return /* @__PURE__ */ import_react8.default.createElement(import_react8.default.Fragment, null, /* @__PURE__ */ import_react8.default.createElement("div", {
      className: "flex-auto"
    }, /* @__PURE__ */ import_react8.default.createElement(import_async.default, {
      ref: this.selector,
      onChange: this.onOptionSelected,
      inputValue: this.state.inputValue,
      onInputChange: this.onInputChange,
      isMulti: true,
      cacheOptions: true,
      defaultOptions: false,
      closeMenuOnSelect: false,
      blurInputOnSelect: false,
      styles: this.selectBaseStyle,
      components: {
        Option: this.singleOption,
        SingleValue: this.singleValue,
        MultiValue: this.multiValue
      },
      loadOptions: this.promiseItemOptions
    })));
  }
};

// app/routes/howto.tsx
init_react();
function Howto2() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "bg-primary outline rounded-2xl outline-2 outline-secondary overflow-hidden shadow-sp"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "h-auto w-full bg-secondary p-3 text-white text-md outline-secondary outline outline-5"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-md"
  }, "Setting up your Account")), /* @__PURE__ */ React.createElement("ol", {
    className: "list-disc text-white test-sx text-xs px-5 py-5",
    type: "1"
  }, /* @__PURE__ */ React.createElement("li", {
    type: "1",
    className: "list-inside"
  }, "Head over to the ", /* @__PURE__ */ React.createElement("a", {
    className: "text-link hover:text-white hover:transition-all transition-all",
    href: "https://account.arena.net/applications",
    target: "_blank"
  }, "Guild Wars 2 API Key Management"), "."), /* @__PURE__ */ React.createElement("li", {
    type: "1",
    className: "list-inside"
  }, 'Click on the "New Key" button.'), /* @__PURE__ */ React.createElement("li", {
    type: "1",
    className: "list-inside"
  }, "Enter a name of your choice and check at least the following permissions.", /* @__PURE__ */ React.createElement("div", {
    style: { width: "35%", marginLeft: "auto", marginRight: "auto", paddingTop: "8px", paddingBottom: "8px" }
  }, /* @__PURE__ */ React.createElement("a", {
    href: "tuto_permissions.png",
    target: "_blank"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "border-solid border-gray-500 rounded-md border-2 p-1",
    src: "tuto_permissions.png"
  })))), /* @__PURE__ */ React.createElement("li", {
    type: "1",
    className: "list-inside"
  }, "Copy your new API key."), /* @__PURE__ */ React.createElement("li", {
    type: "1",
    className: "list-inside"
  }, "Paste it into the API-Key Input field."), /* @__PURE__ */ React.createElement("li", {
    type: "1",
    className: "list-inside"
  }, 'Click the "Set Account" button and wait.'))));
}

// route:Z:\GIT\Repositories\gw2_item_finder\gw2_item_finder\app\routes\index.tsx
function ConvertTimespanToTimeString(span) {
  span = span / 1e3;
  var d = Math.floor(span / (3600 * 24));
  var h = Math.floor(span % (3600 * 24) / 3600);
  var m = Math.floor(span % 3600 / 60);
  var s = Math.floor(span % 60);
  s = Math.max(s, 1);
  var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
}
function GenerateUID2() {
  return Math.random().toString(36).substr(2, 32);
}
function Index2() {
  const [itemCards, setItemCards] = (0, import_react10.useState)([]);
  const [itemAmount, setItemAmount] = (0, import_react10.useState)(0);
  const [input_apiKey, setinput_apiKey] = (0, import_react10.useState)("");
  const [input_itemID, setinput_itemID] = (0, import_react10.useState)("");
  const [input_itemSelection, setinput_itemSelection] = (0, import_react10.useState)([]);
  const [fetchingAccount, setFetchingAccount] = (0, import_react10.useState)(false);
  const [accountInfo, setAccountInfo] = (0, import_react10.useState)();
  const [shouldPrefetchItems, setShouldPrefetchItems] = (0, import_react10.useState)(false);
  const [itemsToPrefetch, setItemsToPrefetch] = (0, import_react10.useState)([]);
  function removeAllEmptyCards() {
    let ic_copy = itemCards;
    for (let i = 0; i < ic_copy.length; i++) {
      const element = ic_copy[i];
      if (element.results === 0) {
        ic_copy.splice(i, 1);
        i--;
      }
    }
    setItemCards(ic_copy);
    setItemAmount(itemCards.length);
  }
  function removeCardFromCards(uid) {
    let ic_copy = itemCards;
    for (let i = 0; i < ic_copy.length; i++) {
      const element = ic_copy[i];
      if (element.uid === uid) {
        ic_copy.splice(i, 1);
      }
    }
    setItemCards(ic_copy);
    setItemAmount(itemCards.length);
  }
  function SetApiKey() {
    let newAccount = new GW2AccountInfo();
    setFetchingAccount(true);
    newAccount.populateFromApiKey(input_apiKey).then((res) => {
      setAccountInfo(res);
      localStorage.setItem("gw2AccountInfo", JSON.stringify(res));
      setFetchingAccount(false);
    }).catch((err) => {
      console.log(err);
      setFetchingAccount(false);
    });
  }
  function RefreshAccount() {
    setFetchingAccount(true);
    if (accountInfo !== void 0 && accountInfo !== null) {
      let account = new GW2AccountInfo();
      account.populateFromApiKey(accountInfo.ApiKey).then((res) => {
        setAccountInfo(res);
        localStorage.setItem("gw2AccountInfo", JSON.stringify(res));
        setFetchingAccount(false);
      }).catch((err) => {
        setFetchingAccount(false);
      });
    }
  }
  function RemoveAccount() {
    setAccountInfo(void 0);
    localStorage.setItem("gw2AccountInfo", "undefined");
  }
  function HasValidAccount() {
    return !((accountInfo == null ? void 0 : accountInfo.AccountName) === "" || (accountInfo == null ? void 0 : accountInfo.AccountName) === void 0 || accountInfo.AccountName === null || fetchingAccount);
  }
  function FindItem(item) {
    let ic_copy = itemCards;
    if (accountInfo !== void 0) {
      let itemSearchCard = new ItemCard();
      itemSearchCard.uid = GenerateUID2();
      itemSearchCard.account = accountInfo;
      itemSearchCard.itemID = item.value;
      itemSearchCard.itemIcon = item.icon;
      itemSearchCard.itemName = item.label;
      itemSearchCard.onRemoveClickedCallback = removeCardFromCards;
      ic_copy.unshift(itemSearchCard);
      setItemCards(ic_copy);
      setItemAmount(itemCards.length);
    }
  }
  function FindItems() {
    FindItemsParams(input_itemSelection);
  }
  function FindItemsParams(items) {
    for (let i = 0; i < items.length; i++) {
      FindItem(items[i]);
    }
  }
  function OnMultiSelectChanged(selectedItems) {
    setinput_itemSelection(selectedItems);
  }
  let state = (0, import_react_router_dom2.useLocation)().state;
  (0, import_react10.useEffect)(() => {
    let data = null;
    data = localStorage.getItem("gw2AccountInfo");
    if (data !== null && data !== void 0 && data !== "undefined") {
      let account = DeserializeGW2AccountInfo(data);
      setAccountInfo(account);
      if (state !== null && state.bShouldFetchOnLoad && account !== void 0 && account !== null) {
        setShouldPrefetchItems(true);
        setItemsToPrefetch(state.ItemsToFetch);
      }
    }
  }, []);
  if (shouldPrefetchItems) {
    FindItemsParams(itemsToPrefetch);
    setShouldPrefetchItems(false);
    setItemsToPrefetch([]);
    window.history.replaceState({}, document.title);
  }
  return /* @__PURE__ */ import_react10.default.createElement(import_react10.default.Fragment, null, /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "bg-primary outline rounded-md outline-2 outline-secondary shadow-sp"
  }, /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "h-auto w-full bg-secondary p-1 pl-4 rounded-t-md text-white text-md"
  }, /* @__PURE__ */ import_react10.default.createElement("h2", {
    className: "text-md"
  }, "Account")), /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "px-4 py-4"
  }, /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "flex flex-row place-items-center justify-items-auto w-full"
  }, HasValidAccount() ? /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "flex text-xs text-gray-400"
  }, "Last Refreshed: ", accountInfo ? ConvertTimespanToTimeString(accountInfo == null ? void 0 : accountInfo.getTimeSinceLastUpdated()) : "invalid", " ago") : /* @__PURE__ */ import_react10.default.createElement(import_react10.default.Fragment, null)), /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "flex flex-row place-items-center justify-items-auto h-7"
  }, !HasValidAccount() ? /* @__PURE__ */ import_react10.default.createElement(import_react10.default.Fragment, null, fetchingAccount ? /* @__PURE__ */ import_react10.default.createElement(import_react10.default.Fragment, null, /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "block w-full h-full px-1"
  }, /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "inline-block text-xs text-gray-300"
  }, "Brave Skritt are making a map of your account! This can take a while but will make finding shinies faster later!..."), /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "inline-block grid"
  }, /* @__PURE__ */ import_react10.default.createElement(import_react_spinners.BarLoader, {
    width: "100%",
    color: "white"
  })))) : /* @__PURE__ */ import_react10.default.createElement(import_react10.default.Fragment, null, /* @__PURE__ */ import_react10.default.createElement("input", {
    type: "password",
    name: "api-key",
    id: "api-key",
    className: "flex focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 pr-2 py-1 sm:text-sm border-gray-300 rounded-md h-full",
    placeholder: "API Key",
    onChange: (e) => setinput_apiKey(e.target.value)
  }), /* @__PURE__ */ import_react10.default.createElement("button", {
    name: "confirm-button",
    id: "confirm-button",
    className: "flex flex-row pl-2 pr-2 py-1 sm:text-sm border-gray-300 rounded-md bg-green-300 ml-2 h-full w-3/12 place-items-center justify-items-auto hover:bg-green-700 hover:text-white",
    onClick: SetApiKey
  }, " ", /* @__PURE__ */ import_react10.default.createElement("p", {
    className: "text-center w-full text-xs md:text-md"
  }, "Set Account"), " "))) : /* @__PURE__ */ import_react10.default.createElement(import_react10.default.Fragment, null, /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "flex flex-row place-items-center justify-items-auto w-full"
  }, /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "flex flex-row place-items-center justify-items-auto w-full bg-white pl-2 rounded-md border-1 border-solid border-secondary"
  }, /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "flex w-full"
  }, accountInfo == null ? void 0 : accountInfo.AccountName)), /* @__PURE__ */ import_react10.default.createElement("button", {
    className: "flex  transition-all hover:transition-all h-auto w-7 ml-1 text-white hover:text-gray-400 bg-info rounded-2xl hover:rounded-md hover:text-white p-1",
    name: "remove-account-button",
    id: "remove-account-button",
    onClick: RefreshAccount
  }, /* @__PURE__ */ import_react10.default.createElement(import_outline5.RefreshIcon, {
    color: "black",
    style: { alignSelf: "center" }
  })), /* @__PURE__ */ import_react10.default.createElement("button", {
    className: "flex transition-all hover:transition-all h-auto w-7 ml-1 text-white hover:text-gray-400 bg-negative rounded-2xl hover:rounded-md border-solid hover:text-white p-1",
    name: "remove-account-button",
    id: "remove-account-button",
    onClick: RemoveAccount
  }, /* @__PURE__ */ import_react10.default.createElement(import_outline5.XIcon, {
    color: "black",
    style: { alignSelf: "center" }
  }))))), /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "py-1"
  }), HasValidAccount() ? /* @__PURE__ */ import_react10.default.createElement(import_react10.default.Fragment, null, /* @__PURE__ */ import_react10.default.createElement("div", null, /* @__PURE__ */ import_react10.default.createElement("label", {
    className: "block text-sm font-medium text-white px-1"
  }, "Items")), /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "pt-1"
  }), /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "flex flex-row lace-items-center justify-items-auto"
  }, /* @__PURE__ */ import_react10.default.createElement(ItemSelect, {
    onChange: OnMultiSelectChanged
  }), /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "px-1"
  }), /* @__PURE__ */ import_react10.default.createElement("button", {
    name: "confirm-button",
    id: "confirm-button",
    className: "flex transition-all hover:transition-all pl-2 pr-2 rounded-2xl hover:rounded-md bg-positive h-auto",
    onClick: FindItems
  }, /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "m-auto w-10 p-2"
  }, /* @__PURE__ */ import_react10.default.createElement(import_outline5.SearchIcon, {
    color: "black"
  })))), /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "pt-2"
  }, /* @__PURE__ */ import_react10.default.createElement("button", {
    name: "remove-emtpy-button",
    id: "remove-empty-button",
    className: "flex w-full transition-all hover:transition-all pl-2 pr-2 rounded-2xl hover:rounded-md bg-negative h-auto content-center items-center align-center",
    onClick: removeAllEmptyCards
  }, /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "flex m-auto align-center"
  }, "Purge")))) : /* @__PURE__ */ import_react10.default.createElement(import_react10.default.Fragment, null))), HasValidAccount() ? /* @__PURE__ */ import_react10.default.createElement(import_react10.default.Fragment, null) : /* @__PURE__ */ import_react10.default.createElement(import_react10.default.Fragment, null, /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "py-2"
  }), Howto2()), /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "resultsContainerMobile lg:resultsContainer "
  }, itemCards.map((item) => /* @__PURE__ */ import_react10.default.createElement("div", {
    key: item.uid,
    className: "py-2 px-2"
  }, /* @__PURE__ */ import_react10.default.createElement(ItemCard_default, {
    onRemoveClickedCallback: removeCardFromCards,
    uid: item.uid,
    account: item.account,
    itemID: item.itemID,
    itemIcon: item.itemIcon,
    itemName: item.itemName,
    onNewResultLength: item.onNewResultLength
  })))));
}

// route:Z:\GIT\Repositories\gw2_item_finder\gw2_item_finder\app\routes\legal.tsx
var legal_exports = {};
__export(legal_exports, {
  default: () => Legal
});
init_react();
function Legal() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "bg-primary outline rounded-2xl outline-2 outline-secondary overflow-hidden shadow-sp"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "h-auto w-full bg-secondary p-3 text-white text-md outline-secondary outline outline-5"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-md"
  }, "Legal Disclaimers")), /* @__PURE__ */ React.createElement("div", {
    className: "p-4 text-white text-xs"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "font-bold py-3"
  }, "NCSOFT, the interlocking NC logo, ArenaNet, Guild Wars, Guild Wars Factions, Guild Wars Nightfall, Guild Wars: Eye of the North, Guild Wars 2, and all associated logos and designs are trademarks or registered trademarks of NCSOFT Corporation. All other trademarks are the property of their respective owners."), /* @__PURE__ */ React.createElement("p", {
    className: "py-1"
  }, "If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at alexander@konrads.io. Our Disclaimer was generated with the help of the ", /* @__PURE__ */ React.createElement("a", {
    href: "https://www.termsfeed.com/disclaimer-generator/"
  }, "Disclaimer Generator"), "."), /* @__PURE__ */ React.createElement("h2", {
    className: "font-bold py-1 pt-3"
  }, "TL;DR"), /* @__PURE__ */ React.createElement("p", {
    className: "py-1"
  }, "We do not save any of your account information to our servers. We save a copy of your account data to your local browser to allow you to search it quickly. We use Google Analytics to gauge traffic. We are not liable for content found on websites that might be linked from this website. We only provide links in good faith and try to quickly detect links that have gone bad."), /* @__PURE__ */ React.createElement("h2", {
    className: "font-bold py-1 pt-3"
  }, "Disclaimers for FindMySkritt.com"), /* @__PURE__ */ React.createElement("p", {
    className: "py-1"
  }, "All the information on this website - FindMySkritt.com - is published in good faith and for general information purpose only. FindMySkritt.com does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (FindMySkritt.com), is strictly at your own risk. FindMySkritt.com will not be liable for any losses and/or damages in connection with the use of our website."), /* @__PURE__ */ React.createElement("p", {
    className: "py-1"
  }, "FindMySkritt.com uses cookies in order to store some of your provided information locally on your device to improve operational quality and reduce server load. The saved data consist of a mirror of the items on your account and your api key but no data that would allow authentication on other websites or allow access to your account directly."), /* @__PURE__ */ React.createElement("p", {
    className: "py-1"
  }, "FindMySkritt.com does not store any of your data on it's own servers and does not provide any other services with access to any data entered on this website."), /* @__PURE__ */ React.createElement("p", {
    className: "py-1"
  }, "From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone 'bad'."), /* @__PURE__ */ React.createElement("p", {
    className: "py-1"
  }, 'Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their "Terms of Service" before engaging in any business or uploading any information.'), /* @__PURE__ */ React.createElement("h2", {
    className: "font-bold py-1"
  }, "Consent"), /* @__PURE__ */ React.createElement("p", {
    className: "py-1"
  }, "By using our website, you hereby consent to our disclaimer and agree to its terms."), /* @__PURE__ */ React.createElement("h2", {
    className: "font-bold py-1"
  }, "Google Analytics"), /* @__PURE__ */ React.createElement("p", {
    className: "py-1"
  }, "This website uses Google Analytics, a web analytics service provided by Google, Inc. (\u201CGoogle\u201D). Google Analytics uses \u201Ccookies\u201D, which are text files placed on your computer, to help the website analyze how users use the site. The information generated by the cookie about your use of the website (including your IP address) will be transmitted to and stored by Google on servers in the United States. In case of activation of the IP anonymization, Google will truncate/anonymize the last octet of the IP address for Member States of the European Union as well as for other parties to the Agreement on the European Economic Area. Only in exceptional cases, the full IP address is sent to and shortened by Google servers in the USA. On behalf of the website provider Google will use this information for the purpose of evaluating your use of the website, compiling reports on website activity for website operators and providing other services relating to website activity and internet usage to the website provider. Google will not associate your IP address with any other data held by Google. You may refuse the use of cookies by selecting the appropriate settings on your browser. However, please note that if you do this, you may not be able to use the full functionality of this website. Furthermore you can prevent Google\u2019s collection and use of data (cookies and IP address) by downloading and installing the browser plug-in available under https://tools.google.com/dlpage/gaoptout?hl=en-GB."), /* @__PURE__ */ React.createElement("h2", {
    className: "font-bold py-1"
  }, "Update"), /* @__PURE__ */ React.createElement("p", {
    className: "py-1"
  }, "Should we update, amend or make any changes to this document, those changes will be prominently posted here."))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "1357fc2c", "entry": { "module": "/build/entry.client-6DEGQZDI.js", "imports": ["/build/_shared/chunk-YJZK26PK.js", "/build/_shared/chunk-WKO3C5EK.js", "/build/_shared/chunk-OULA6MFW.js", "/build/_shared/chunk-325D37MS.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-W3MUD5NU.js", "imports": ["/build/_shared/chunk-SNEDYBUF.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/FindItem": { "id": "routes/FindItem", "parentId": "root", "path": "FindItem", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/FindItem-BFAK3FBN.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/ItemLists": { "id": "routes/ItemLists", "parentId": "root", "path": "ItemLists", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/ItemLists-22S7NEA4.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/ItemReport": { "id": "routes/ItemReport", "parentId": "root", "path": "ItemReport", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/ItemReport-LBPWCHS7.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/about-7KFAV2IG.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/changelog": { "id": "routes/changelog", "parentId": "root", "path": "changelog", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/changelog-3LLXOGPZ.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/howto": { "id": "routes/howto", "parentId": "root", "path": "howto", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/howto-NNAKMG4Y.js", "imports": ["/build/_shared/chunk-72JUVZF7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-U3DANQEF.js", "imports": ["/build/_shared/chunk-72JUVZF7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/legal": { "id": "routes/legal", "parentId": "root", "path": "legal", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/legal-IVDYYDQO.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-1357FC2C.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/ItemReport": {
    id: "routes/ItemReport",
    parentId: "root",
    path: "ItemReport",
    index: void 0,
    caseSensitive: void 0,
    module: ItemReport_exports
  },
  "routes/changelog": {
    id: "routes/changelog",
    parentId: "root",
    path: "changelog",
    index: void 0,
    caseSensitive: void 0,
    module: changelog_exports
  },
  "routes/ItemLists": {
    id: "routes/ItemLists",
    parentId: "root",
    path: "ItemLists",
    index: void 0,
    caseSensitive: void 0,
    module: ItemLists_exports
  },
  "routes/FindItem": {
    id: "routes/FindItem",
    parentId: "root",
    path: "FindItem",
    index: void 0,
    caseSensitive: void 0,
    module: FindItem_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/howto": {
    id: "routes/howto",
    parentId: "root",
    path: "howto",
    index: void 0,
    caseSensitive: void 0,
    module: howto_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/legal": {
    id: "routes/legal",
    parentId: "root",
    path: "legal",
    index: void 0,
    caseSensitive: void 0,
    module: legal_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOlo6XFxHSVRcXFJlcG9zaXRvcmllc1xcZ3cyX2l0ZW1fZmluZGVyXFxndzJfaXRlbV9maW5kZXJcXGFwcFxccm9vdC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvRm9vdGVyLnRzeCIsICJyb3V0ZTpaOlxcR0lUXFxSZXBvc2l0b3JpZXNcXGd3Ml9pdGVtX2ZpbmRlclxcZ3cyX2l0ZW1fZmluZGVyXFxhcHBcXHJvdXRlc1xcSXRlbVJlcG9ydC50c3giLCAicm91dGU6WjpcXEdJVFxcUmVwb3NpdG9yaWVzXFxndzJfaXRlbV9maW5kZXJcXGd3Ml9pdGVtX2ZpbmRlclxcYXBwXFxyb3V0ZXNcXGNoYW5nZWxvZy50c3giLCAicm91dGU6WjpcXEdJVFxcUmVwb3NpdG9yaWVzXFxndzJfaXRlbV9maW5kZXJcXGd3Ml9pdGVtX2ZpbmRlclxcYXBwXFxyb3V0ZXNcXEl0ZW1MaXN0cy50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSXRlbUxpc3RDYXRlZ29yeS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSXRlbUxpc3RHcm91cC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSXRlbUxpc3RJdGVtRW50cnkudHN4IiwgIi4uL2FwcC91dGlsaXR5L0l0ZW1MaXN0X0luZnVzaW9ucy50cyIsICIuLi9hcHAvdXRpbGl0eS9JdGVtTGlzdF9HYXRoZXJpbmdUb29scy50cyIsICJyb3V0ZTpaOlxcR0lUXFxSZXBvc2l0b3JpZXNcXGd3Ml9pdGVtX2ZpbmRlclxcZ3cyX2l0ZW1fZmluZGVyXFxhcHBcXHJvdXRlc1xcRmluZEl0ZW0udHN4IiwgIi4uL2FwcC9HdzJJdGVtRGIuc2VydmVyLnRzeCIsICJyb3V0ZTpaOlxcR0lUXFxSZXBvc2l0b3JpZXNcXGd3Ml9pdGVtX2ZpbmRlclxcZ3cyX2l0ZW1fZmluZGVyXFxhcHBcXHJvdXRlc1xcYWJvdXQudHN4IiwgInJvdXRlOlo6XFxHSVRcXFJlcG9zaXRvcmllc1xcZ3cyX2l0ZW1fZmluZGVyXFxndzJfaXRlbV9maW5kZXJcXGFwcFxccm91dGVzXFxob3d0by50c3giLCAicm91dGU6WjpcXEdJVFxcUmVwb3NpdG9yaWVzXFxndzJfaXRlbV9maW5kZXJcXGd3Ml9pdGVtX2ZpbmRlclxcYXBwXFxyb3V0ZXNcXGluZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JdGVtQ2FyZC50c3giLCAiLi4vYXBwL0dXMkFwaS9HVzJJdGVtRmluZFByb2Nlc3MudHMiLCAiLi4vYXBwL0dXMkFwaS9HVzJJdGVtLnRzIiwgIi4uL2FwcC9HVzJBcGkvR1cyQVBJX0NhbGwudHMiLCAiLi4vYXBwL0dXMkFwaS9HVzJBY2NvdW50SW5mby50cyIsICIuLi9hcHAvR1cyQXBpL0dXMkNoYXJhY3Rlci50cyIsICIuLi9hcHAvR1cyQXBpL0dXMkJhZy50cyIsICIuLi9hcHAvR1cyQXBpL0dXMkVxdWlwbWVudFRhYi50cyIsICIuLi9hcHAvR1cyQXBpL0dXMkVxdWlwbWVudEl0ZW0udHMiLCAiLi4vYXBwL2NvbXBvbmVudHMvSXRlbVNlbGVjdC50c3giLCAiLi4vYXBwL3JvdXRlcy9ob3d0by50c3giLCAicm91dGU6WjpcXEdJVFxcUmVwb3NpdG9yaWVzXFxndzJfaXRlbV9maW5kZXJcXGd3Ml9pdGVtX2ZpbmRlclxcYXBwXFxyb3V0ZXNcXGxlZ2FsLnRzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJleHBvcnQgKiBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7IiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIlo6XFxcXEdJVFxcXFxSZXBvc2l0b3JpZXNcXFxcZ3cyX2l0ZW1fZmluZGVyXFxcXGd3Ml9pdGVtX2ZpbmRlclxcXFxhcHBcXFxcZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCJaOlxcXFxHSVRcXFxcUmVwb3NpdG9yaWVzXFxcXGd3Ml9pdGVtX2ZpbmRlclxcXFxndzJfaXRlbV9maW5kZXJcXFxcYXBwXFxcXHJvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIlo6XFxcXEdJVFxcXFxSZXBvc2l0b3JpZXNcXFxcZ3cyX2l0ZW1fZmluZGVyXFxcXGd3Ml9pdGVtX2ZpbmRlclxcXFxhcHBcXFxccm91dGVzXFxcXEl0ZW1SZXBvcnQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIlo6XFxcXEdJVFxcXFxSZXBvc2l0b3JpZXNcXFxcZ3cyX2l0ZW1fZmluZGVyXFxcXGd3Ml9pdGVtX2ZpbmRlclxcXFxhcHBcXFxccm91dGVzXFxcXGNoYW5nZWxvZy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiWjpcXFxcR0lUXFxcXFJlcG9zaXRvcmllc1xcXFxndzJfaXRlbV9maW5kZXJcXFxcZ3cyX2l0ZW1fZmluZGVyXFxcXGFwcFxcXFxyb3V0ZXNcXFxcSXRlbUxpc3RzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCJaOlxcXFxHSVRcXFxcUmVwb3NpdG9yaWVzXFxcXGd3Ml9pdGVtX2ZpbmRlclxcXFxndzJfaXRlbV9maW5kZXJcXFxcYXBwXFxcXHJvdXRlc1xcXFxGaW5kSXRlbS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiWjpcXFxcR0lUXFxcXFJlcG9zaXRvcmllc1xcXFxndzJfaXRlbV9maW5kZXJcXFxcZ3cyX2l0ZW1fZmluZGVyXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYWJvdXQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIlo6XFxcXEdJVFxcXFxSZXBvc2l0b3JpZXNcXFxcZ3cyX2l0ZW1fZmluZGVyXFxcXGd3Ml9pdGVtX2ZpbmRlclxcXFxhcHBcXFxccm91dGVzXFxcXGhvd3RvLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU3IGZyb20gXCJaOlxcXFxHSVRcXFxcUmVwb3NpdG9yaWVzXFxcXGd3Ml9pdGVtX2ZpbmRlclxcXFxndzJfaXRlbV9maW5kZXJcXFxcYXBwXFxcXHJvdXRlc1xcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOCBmcm9tIFwiWjpcXFxcR0lUXFxcXFJlcG9zaXRvcmllc1xcXFxndzJfaXRlbV9maW5kZXJcXFxcZ3cyX2l0ZW1fZmluZGVyXFxcXGFwcFxcXFxyb3V0ZXNcXFxcbGVnYWwudHN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9JdGVtUmVwb3J0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9JdGVtUmVwb3J0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcIkl0ZW1SZXBvcnRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL2NoYW5nZWxvZ1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvY2hhbmdlbG9nXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImNoYW5nZWxvZ1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvSXRlbUxpc3RzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9JdGVtTGlzdHNcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiSXRlbUxpc3RzXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy9GaW5kSXRlbVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvRmluZEl0ZW1cIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiRmluZEl0ZW1cIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH0sXG4gIFwicm91dGVzL2Fib3V0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hYm91dFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhYm91dFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU1XG4gICAgfSxcbiAgXCJyb3V0ZXMvaG93dG9cIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2hvd3RvXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImhvd3RvXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTZcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTdcbiAgICB9LFxuICBcInJvdXRlcy9sZWdhbFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbGVnYWxcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibGVnYWxcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOFxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE5hdkxpbmssXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG59IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzL2FwcC5jc3NcIlxuXG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IERpc2Nsb3N1cmUsIE1lbnUsIFRyYW5zaXRpb24gfSBmcm9tICdAaGVhZGxlc3N1aS9yZWFjdCdcbmltcG9ydCB7IEJlbGxJY29uLCBNZW51SWNvbiwgWEljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L291dGxpbmUnXG5pbXBvcnQgeyBHVzJPZmZsaW5lSXRlbUNhY2hlIH0gZnJvbSBcIi4vR1cyQXBpL0dXMk9mZmxpbmVJdGVtQ2FjaGVcIjtcbmltcG9ydCB7IGdldERiIH0gZnJvbSBcIi4vR3cySXRlbURiLnNlcnZlclwiXG5pbXBvcnQgIEZvb3RlciBmcm9tIFwiLi9jb21wb25lbnRzL0Zvb3RlclwiO1xuaW1wb3J0IHsgdXNlRmV0Y2hlciB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnXG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpe1xuICByZXR1cm4gW3tyZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBzdHlsZXN9XTtcbn1cblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHsgdGl0bGU6IFwiRmluZCBNeSBTa3JpdHQhXCIgfTtcbn07XG5cbmZ1bmN0aW9uIEZpbmRJdGVtc0luRGIocGFydGlhbE5hbWUgOiBzdHJpbmcpe1xuXG4gIGNvbnNvbGUubG9nKHBhcnRpYWxOYW1lKVxuICByZXR1cm4gcGFydGlhbE5hbWVcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPERvY3VtZW50PlxuICAgICAgPExheW91dD5cbiAgICAgICA8UGFyYW1ldHJpemVkT3V0bGV0Lz5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvRG9jdW1lbnQ+XG4gICk7XG59XG5cblxubGV0IGNvbnRleHQgPSBjcmVhdGVDb250ZXh0PHVua25vd24+KG51bGwpO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUGFyZW50RGF0YTxQYXJlbnREYXRhPigpe1xuXG4gIGxldCBwYXJlbnREYXRhID0gdXNlQ29udGV4dChjb250ZXh0KSBhcyBQYXJlbnREYXRhIHwgbnVsbDtcblxuICByZXR1cm4gcGFyZW50RGF0YTtcbn1cblxudHlwZSBQYXJhbWV0cml6ZWRPdXRsZXRQcm9wczxUPiA9IHtkYXRhPyA6IFR9O1xuZnVuY3Rpb24gUGFyYW1ldHJpemVkT3V0bGV0PFQgPSB1bmtub3duPih7ZGF0YX06IFBhcmFtZXRyaXplZE91dGxldFByb3BzPFQ+KXtcbiAgcmV0dXJuKFxuICAgIDxjb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtkYXRhfT5cbiAgICAgIDxPdXRsZXQvPlxuICAgIDwvY29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5mdW5jdGlvbiBEb2N1bWVudCh7Y2hpbGRyZW59KSA6IEpTWC5FbGVtZW50IHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICA8aGVhZD5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb21cIj48L2xpbms+XG4gICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIj48L2xpbms+XG4gICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDYwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxuICAgICAgPHNjcmlwdCBhc3luYyBzcmM9XCJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPUctTDU2TVgxMVlGUlwiPjwvc2NyaXB0PlxuICAgICAgPHNjcmlwdCBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICBfX2h0bWw6YFxuICAgICAgICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcbiAgICAgICAgZnVuY3Rpb24gZ3RhZygpe2RhdGFMYXllci5wdXNoKGFyZ3VtZW50cyk7fVxuICAgICAgICBndGFnKCdqcycsIG5ldyBEYXRlKCkpO1xuXG4gICAgICAgIGd0YWcoJ2NvbmZpZycsICdHLUw1Nk1YMTFZRlInKTtcbiAgICAgICAgYFxuICAgICAgfX0+XG4gICAgICAgIFxuICAgICAgPC9zY3JpcHQ+XG4gICAgICA8TWV0YSAvPlxuICAgICAgPExpbmtzIC8+XG4gICAgPC9oZWFkPlxuICAgIDxib2R5IGNsYXNzTmFtZT1cIm1haW5Cb2R5IHctZnVsbFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsXCI+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgIDxTY3JpcHRzIC8+XG4gICAgICA8TGl2ZVJlbG9hZCAvPlxuICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICAgIDxGb290ZXIvPlxuICAgIDwvYm9keT5cbiAgPC9odG1sPlxuICApO1xuXG59XG5cbmNvbnN0IG5hdmlnYXRpb24gPSBbXG4gIHsgbmFtZTogJ0hvbWUnLCBocmVmOiAnLycsIGN1cnJlbnQ6IHRydWUgfSxcbiAgeyBuYW1lOiAnSG93IFRvJywgaHJlZjogJy9ob3d0bycsIGN1cnJlbnQ6IGZhbHNlfSxcbiAgeyBuYW1lOiAnUXVpY2sgU2VhcmNoJywgaHJlZjogJy9JdGVtTGlzdHMnLCBjdXJyZW50OiBmYWxzZX0sXG4gIHsgbmFtZTonQ2hhbmdlbG9nJywgaHJlZjpcIi9jaGFuZ2Vsb2dcIiwgY3VycmVudDogZmFsc2V9XG5dXG5cbmZ1bmN0aW9uIGNsYXNzTmFtZXMoLi4uY2xhc3Nlcykge1xuICByZXR1cm4gY2xhc3Nlcy5maWx0ZXIoQm9vbGVhbikuam9pbignICcpXG59XG5cbmxldCBhY3RpdmVTdHlsZSA9ICcgdGV4dC1ibGFjayBiZy10b3BuYXZhY3RpdmUgJztcbmxldCBpbmFjdGl2ZVN0eWxlID0gJ3RleHQtZ3JheS0zMDAgYmctdG9wbmF2YnV0dG9uIGhvdmVyOmJnLXRvcG5hdmhvdmVyIGhvdmVyOnRleHQtd2hpdGUgJztcbmxldCBnZW5lcmFsU3R5bGUgPSAncHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC1zbSBmb250LW1lZGl1bSAgJztcblxuXG5mdW5jdGlvbiBMYXlvdXQoe2NoaWxkcmVufSkgOiBKU1guRWxlbWVudCB7XG4gIHJldHVybiAoXG4gIDw+XG4gPERpc2Nsb3N1cmUgYXM9XCJuYXZcIiBjbGFzc05hbWU9XCJiZy1wcmltYXJ5IGJvcmRlci1iLTQgYm9yZGVyLXNlY29uZGFyeSBzaGFkb3ctbmF2XCI+XG4gICAgICB7KHsgb3BlbiB9KSA9PiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBweC0yIHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gaC0xNlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LXktMCBsZWZ0LTAgZmxleCBpdGVtcy1jZW50ZXIgc206aGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgey8qIE1vYmlsZSBtZW51IGJ1dHRvbiovfVxuICAgICAgICAgICAgICAgIDxEaXNjbG9zdXJlLkJ1dHRvbiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC0yIHJvdW5kZWQtbWQgdGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOmJnLXRlcnRpYXJ5IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbnNldCBmb2N1czpyaW5nLXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+T3BlbiBtYWluIG1lbnU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICB7b3BlbiA/IChcbiAgICAgICAgICAgICAgICAgICAgPFhJY29uIGNsYXNzTmFtZT1cImJsb2NrIGgtNiB3LTZcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJY29uIGNsYXNzTmFtZT1cImJsb2NrIGgtNiB3LTZcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L0Rpc2Nsb3N1cmUuQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc206aXRlbXMtc3RyZXRjaCBzbTpqdXN0aWZ5LXN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wIGZsZXggaXRlbXMtY2VudGVyIGFsaWduLWNlbnRlciBwci04XCI+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggbGc6aGlkZGVuIGgtMTYgdy1hdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwibG9nby1za3JpdHQucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiV29ya2Zsb3dcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmJsb2NrIGgtMTYgdy1hdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwibG9nby1za3JpdHQucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiV29ya2Zsb3dcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmFuY3lIZWFkZXIgdGV4dC13aGl0ZSBwbC0yIHRpdGxlRm9udCB0ZXh0LXhsXCI+RmluZCBNeSBTa3JpdHQhPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gc206ZmxleCBzbTptbC02IGFsaWduLWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTRcIj5cbiAgICAgICAgICAgICAgICAgICAge25hdmlnYXRpb24ubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgdG89e2l0ZW0uaHJlZn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17KHsgaXNBY3RpdmUgfSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmFsU3R5bGUgKyAoaXNBY3RpdmUgPyBhY3RpdmVTdHlsZSA6IGluYWN0aXZlU3R5bGUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgPntpdGVtLm5hbWV9PC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPERpc2Nsb3N1cmUuUGFuZWwgY2xhc3NOYW1lPVwic206aGlkZGVuXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTIgcHQtMiBwYi0zIHNwYWNlLXktMVwiPlxuICAgICAgICAgICAgICB7bmF2aWdhdGlvbi5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICA8RGlzY2xvc3VyZS5CdXR0b25cbiAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgYXM9XCJhXCJcbiAgICAgICAgICAgICAgICAgIGhyZWY9e2l0ZW0uaHJlZn1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jdXJyZW50ID8gJ2JnLWdyYXktOTAwIHRleHQtd2hpdGUnIDogJ3RleHQtZ3JheS0zMDAgaG92ZXI6YmctZ3JheS03MDAgaG92ZXI6dGV4dC13aGl0ZScsXG4gICAgICAgICAgICAgICAgICAgICdibG9jayBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LWJhc2UgZm9udC1tZWRpdW0nXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgYXJpYS1jdXJyZW50PXtpdGVtLmN1cnJlbnQgPyAncGFnZScgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICA8L0Rpc2Nsb3N1cmUuQnV0dG9uPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvRGlzY2xvc3VyZS5QYW5lbD5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvRGlzY2xvc3VyZT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIGgtZnVsbC04IHB4LTYgbXktMTAgY29udGVudC1jZW50ZXJcIj5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cblxuICA8Lz5cbiAgKTtcbn0iLCAiaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5leHBvcnQgdHlwZSBGb290ZXJQcm9wcyA9IHtcclxuXHJcbn1cclxuXHJcbmNvbnN0IEZvb3RlciA9IChwcm9wczogRm9vdGVyUHJvcHMpID0+IChcclxuICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiYmctcHJpbWFyeSB0ZXh0LXdoaXRlIGgtMTIgc206aC04IGJvcmRlci10LTQgYm9yZGVyLXNlY29uZGFyeSBmb250LXNlcmlmIHNoYWRvdy1mb290ZXJcIj5cclxuIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiB3LWZ1bGwgaC1mdWxsXCI+XHJcbiAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZCBweC00IHNwYWNlLXgtMlwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4IHRleHQteHMgdGV4dC13aGl0ZVwiPiZjb3B5OyAyMDIyIEZpbmRNeVNrcml0dDwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBkb3RcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXggdGV4dC14cyB0ZXh0LWxpbmsgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uLWFsbCBob3Zlcjp0cmFuc2l0aW9uLWFsbFwiPjxOYXZMaW5rIGtleT1cImFib3V0XCIgdG89XCJhYm91dFwiPkFib3V0IC8gQ29udGFjdDwvTmF2TGluaz48L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZG90XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4IHRleHQteHMgdGV4dC1saW5rIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbi1hbGwgaG92ZXI6dHJhbnNpdGlvbi1hbGxcIj48TmF2TGluayBrZXk9XCJsZWdhbFwiIHRvPVwibGVnYWxcIj5MZWdhbCBEaXNjbGFpbWVyczwvTmF2TGluaz48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9mb290ZXI+XHJcbiAgKTtcclxuICBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTgwMCBib3JkZXItc29saWQgcm91bmRlZC0yeGwgcHgtNSBweS01XCI+PC9kaXY+XHJcbiAgICBcclxuICAgIFxyXG4gICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxuICAiLCAiXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYW5nZWxvZygpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1wcmltYXJ5IG91dGxpbmUgcm91bmRlZC0yeGwgb3V0bGluZS0yIG91dGxpbmUtc2Vjb25kYXJ5IG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctc3BcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWF1dG8gdy1mdWxsIGJnLXNlY29uZGFyeSBwLTMgdGV4dC13aGl0ZSB0ZXh0LW1kIG91dGxpbmUtc2Vjb25kYXJ5IG91dGxpbmUgb3V0bGluZS01XCI+PGgyIGNsYXNzTmFtZT1cInRleHQtbWRcIj5DaGFuZ2Vsb2c8L2gyPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCB0ZXh0LXhzIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgIHsvKiAxLjAgTm90ZXMgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBoLWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleCBmb250LWJvbGQgdGV4dC1tZFwiPnYuMS4wIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleCBpdGFsaWMgdGV4dC1bMTBweF0gcGItMiBwbC0yXCI+KDMvMTMvMjAyMik8L3A+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2hhbmdlbG9nLWxpc3QgcGwtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1pbnNpZGVcIj5Jbml0aWFsIFJlbGVhc2U8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiBOb3RlcyBFbmQgKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59IiwgImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExpbmssIExvYWRlckZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCBJdGVtTGlzdENhdGVnb3J5IGZyb20gXCJ+L2NvbXBvbmVudHMvSXRlbUxpc3RDYXRlZ29yeVwiO1xyXG5pbXBvcnQgSXRlbUxpc3RHcm91cCBmcm9tIFwifi9jb21wb25lbnRzL0l0ZW1MaXN0R3JvdXBcIjtcclxuaW1wb3J0IHsgSXRlbU9wdGlvbiB9IGZyb20gXCJ+L2NvbXBvbmVudHMvSXRlbVNlbGVjdFwiO1xyXG5pbXBvcnQgeyBHVzJPZmZsaW5lSXRlbUNhY2hlIH0gZnJvbSBcIn4vR1cyQXBpL0dXMk9mZmxpbmVJdGVtQ2FjaGVcIjtcclxuaW1wb3J0IHsgU2VhcmNoUGFnZVN0YXRlIH0gZnJvbSBcIi5cIjtcclxuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgTmF2aWdhdGVPcHRpb25zIH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xyXG5pbXBvcnQgeyBJTF9JbmZ1c2lvbnMgfSBmcm9tIFwifi91dGlsaXR5L0l0ZW1MaXN0X0luZnVzaW9uc1wiO1xyXG5pbXBvcnQgeyBJTF9HYXRoZXJpbmdUb29scyB9IGZyb20gXCJ+L3V0aWxpdHkvSXRlbUxpc3RfR2F0aGVyaW5nVG9vbHNcIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEl0ZW1DYXRlZ29yeSB7XHJcbiAgTmFtZTogc3RyaW5nO1xyXG4gIEdyb3VwczogSXRlbUdyb3VwW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSXRlbUdyb3VwIHtcclxuICBOYW1lOiBzdHJpbmc7XHJcbiAgSWNvbjogc3RyaW5nO1xyXG4gIEl0ZW1zOiBJdGVtR3JvdXBFbnRyeVtdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEl0ZW1Hcm91cEVudHJ5e1xyXG4gIE5hbWUgOiBzdHJpbmc7XHJcbiAgSXRlbUlEOiBudW1iZXI7XHJcbiAgSWNvbjogc3RyaW5nIHwgbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gRW50cnlUb0l0ZW1PcHRpb24ocGFyZW50R3JvdXAgOiBJdGVtR3JvdXAsIGl0ZW0gOiBJdGVtR3JvdXBFbnRyeSkgOiBJdGVtT3B0aW9uIHtcclxuICByZXR1cm4ge3ZhbHVlOml0ZW0uSXRlbUlELnRvU3RyaW5nKCksaWNvbjpwYXJlbnRHcm91cC5JY29uLGxhYmVsOml0ZW0uTmFtZX1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEl0ZW1MaXN0cygpIHtcclxuXHJcbiAgbGV0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuXHJcblxyXG4gIGZ1bmN0aW9uIE9uU2VhcmNoQWxsRnJvbUNhdGVnb3J5KGNhdGVnb3J5OiBJdGVtQ2F0ZWdvcnkpe1xyXG4gICAgbGV0IGl0ZW1zIDogSXRlbU9wdGlvbltdID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhdGVnb3J5Lkdyb3Vwcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBncm91cCA9IGNhdGVnb3J5Lkdyb3Vwc1tpXTtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBncm91cC5JdGVtcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBncm91cC5JdGVtc1tqXTtcclxuICAgICAgICBpdGVtcy5wdXNoKHtpY29uOiBpdGVtLkljb24gIT09IG51bGwgPyBpdGVtLkljb24gOiBncm91cC5JY29uLHZhbHVlOml0ZW0uSXRlbUlELnRvU3RyaW5nKCksbGFiZWw6aXRlbS5OYW1lfSk7ICBcclxuICAgICAgfSAgICBcclxuICAgIH1cclxuICAgIG5hdmlnYXRlKFwiL1wiLHsgcmVwbGFjZTogdHJ1ZSxzdGF0ZToge2JTaG91bGRGZXRjaE9uTG9hZDogdHJ1ZSwgSXRlbXNUb0ZldGNoOiBpdGVtc319KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIE9uU2VhcmNoQWxsRnJvbUdyb3VwKGdyb3VwIDogSXRlbUdyb3VwKXtcclxuICAgIGxldCBpdGVtcyA6IEl0ZW1PcHRpb25bXSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncm91cC5JdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBpdGVtID0gZ3JvdXAuSXRlbXNbaV07XHJcbiAgICAgIGl0ZW1zLnB1c2goe2ljb246IGl0ZW0uSWNvbiAhPT0gbnVsbCA/IGl0ZW0uSWNvbiA6IGdyb3VwLkljb24sdmFsdWU6aXRlbS5JdGVtSUQudG9TdHJpbmcoKSxsYWJlbDppdGVtLk5hbWV9KTsgIFxyXG4gICAgfVxyXG4gICAgbmF2aWdhdGUoXCIvXCIseyByZXBsYWNlOiB0cnVlLHN0YXRlOiB7YlNob3VsZEZldGNoT25Mb2FkOiB0cnVlLCBJdGVtc1RvRmV0Y2g6IGl0ZW1zfX0pO1xyXG4gIFxyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiBPblNlYXJjaEluZGl2aWR1YWwoaXRlbTogSXRlbUdyb3VwRW50cnksIHBhcmVudEdyb3VwOiBJdGVtR3JvdXApe1xyXG4gICAgbGV0IGl0ZW1zIDogSXRlbU9wdGlvbltdID0gW107XHJcbiAgICBpdGVtcy5wdXNoKHt2YWx1ZTppdGVtLkl0ZW1JRC50b1N0cmluZygpLGxhYmVsOml0ZW0uTmFtZSxpY29uOiBpdGVtLkljb24gIT09IG51bGwgPyBpdGVtLkljb24gOiBwYXJlbnRHcm91cC5JY29ufSk7XHJcbiAgICBuYXZpZ2F0ZShcIi9cIix7IHJlcGxhY2U6IHRydWUsc3RhdGU6IHtiU2hvdWxkRmV0Y2hPbkxvYWQ6IHRydWUsIEl0ZW1zVG9GZXRjaDogaXRlbXN9fSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcHJpbWFyeSBvdXRsaW5lIHJvdW5kZWQtMnhsIG91dGxpbmUtMiBvdXRsaW5lLXNlY29uZGFyeSBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LXNwXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtYXV0byB3LWZ1bGwgYmctc2Vjb25kYXJ5IHAtMyB0ZXh0LXdoaXRlIHRleHQtbWQgb3V0bGluZS1zZWNvbmRhcnkgb3V0bGluZSBvdXRsaW5lLTVcIj48aDIgY2xhc3NOYW1lPVwidGV4dC1tZFwiPlF1aWNrIFNlYXJjaDwvaDI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCB0ZXh0LXhzIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkIHBiLTJcIj5Vc2FnZSBOb3RlPC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaXRhbGljIHBsLTRcIj4gVGhlIGZvbGxvd2luZyBkcm9wIGRvd24gbWVudWVzIHByb3ZpZGUgYSBxdWljayB3YXkgdG8gYmF0Y2ggc2VhcmNoIGZvciBzcGVjaWZpYyBpdGVtcyB0aGF0IEkgZm91bmQgY291bGQgZ2V0IGxvc3QgZWFzaWx5IGFjcm9zcyBBbHQtQ2hhcmFjdGVycy4gU2ltcGx5IGNsaWNrIG9uIGFueSBvZiB0aGUgaXRlbXMgdG8gc2VhcmNoIGZvciBpdCBvbiB5b3VyIGFjY291bnQuPC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHBsLTQgcGItMlwiPkJlZm9yZSB1c2luZyB0aGlzIHNlY3Rpb24gcGxlYXNlIHNldCB5b3VyIGFjY291bnQgb24gdGhlIGhvbWUgcGFnZSE8L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCBwdC0yXCI+SW5mdXNpb25zPC9wPlxyXG4gICAgICAgICAge0lMX0luZnVzaW9ucy5tYXAoQ2F0ZWdvcnk9PlxyXG4gICAgICAgICAgICA8SXRlbUxpc3RDYXRlZ29yeSBrZXk9e0NhdGVnb3J5Lk5hbWV9IGNhdGVnb3J5PXtDYXRlZ29yeX0gb25DbGlja0luZGl2aWR1YWw9e09uU2VhcmNoSW5kaXZpZHVhbH0gb25DbGlja1NlYXJjaEFsbD17T25TZWFyY2hBbGxGcm9tR3JvdXB9IG9uQ2xpY2tTZWFyY2hDYXRlZ29yeT17T25TZWFyY2hBbGxGcm9tQ2F0ZWdvcnl9PjwvSXRlbUxpc3RDYXRlZ29yeT5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCBwdC0yXCI+SW5maW5pdGUgR2F0aGVyaW5nIFRvb2xzPC9wPlxyXG4gICAgICAgICAge0lMX0dhdGhlcmluZ1Rvb2xzLm1hcChDYXRlZ29yeT0+XHJcbiAgICAgICAgICAgIDxJdGVtTGlzdENhdGVnb3J5IGtleT17Q2F0ZWdvcnkuTmFtZX0gY2F0ZWdvcnk9e0NhdGVnb3J5fSBvbkNsaWNrSW5kaXZpZHVhbD17T25TZWFyY2hJbmRpdmlkdWFsfSBvbkNsaWNrU2VhcmNoQWxsPXtPblNlYXJjaEFsbEZyb21Hcm91cH0gb25DbGlja1NlYXJjaENhdGVnb3J5PXtPblNlYXJjaEFsbEZyb21DYXRlZ29yeX0+PC9JdGVtTGlzdENhdGVnb3J5PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Lz5cclxuICApO1xyXG59XHJcbiAgIiwgImltcG9ydCB7IENoZXZyb25Eb3duSWNvbiwgQ2hldnJvblJpZ2h0SWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSXRlbUNhdGVnb3J5LCBJdGVtR3JvdXAsIEl0ZW1Hcm91cEVudHJ5IH0gZnJvbSBcIn4vcm91dGVzL0l0ZW1MaXN0c1wiO1xyXG5pbXBvcnQgSXRlbUxpc3RHcm91cCBmcm9tIFwiLi9JdGVtTGlzdEdyb3VwXCI7XHJcbmltcG9ydCBJdGVtTGlzdEl0ZW1FbnRyeSBmcm9tIFwiLi9JdGVtTGlzdEl0ZW1FbnRyeVwiO1xyXG5cclxuXHJcbmludGVyZmFjZSBJdGVtTGlzdENhdGVnb3J5UHJvcHN7XHJcbiAgICBjYXRlZ29yeSA6IEl0ZW1DYXRlZ29yeTtcclxuICAgIG9uQ2xpY2tTZWFyY2hDYXRlZ29yeTogKGNhdGVnb3J5OiBJdGVtQ2F0ZWdvcnkpID0+IHZvaWRcclxuICAgIG9uQ2xpY2tTZWFyY2hBbGw6IChncm91cCA6IEl0ZW1Hcm91cCkgPT4gdm9pZDtcclxuICAgIG9uQ2xpY2tJbmRpdmlkdWFsOiAoaXRlbSA6IEl0ZW1Hcm91cEVudHJ5LCBncm91cCA6IEl0ZW1Hcm91cCApID0+IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgSXRlbUxpc3RDYXRlZ29yeSA9IChwcm9wcyA6IEl0ZW1MaXN0Q2F0ZWdvcnlQcm9wcykgID0+IHtcclxuXHJcbiAgICBjb25zdCBbYkV4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gT25FeHBhbmRDbGlja2VkKCl7XHJcbiAgICAgICAgc2V0RXhwYW5kZWQoIWJFeHBhbmRlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xpY2tTZWFyY2hBbGxDYWxsYmFjaygpe1xyXG4gICAgICAgIHByb3BzLm9uQ2xpY2tTZWFyY2hDYXRlZ29yeShwcm9wcy5jYXRlZ29yeSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICg8PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3ctc3AgYm9yZGVyLXgtMiBib3JkZXIteS0wIGJvcmRlciBib3JkZXItdGVydGlhcnkgcm91bmRlZC10LW1kIG0tMSBteS00XCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJmbGV4IGgtNiB3LWZ1bGwgYmctc2Vjb25kYXJ5IGl0ZW1zLWNlbnRlciBjb250ZW50LWNlbnRlciBob3ZlcjpiZy1zZWNvbmRhcnlITCB0cmFuc2l0aW9uLWFsbCBob3Zlcjp0cmFuc2l0aW9uLWFsbCByb3VuZGVkLXQtbWRcIn0gb25DbGljaz17T25FeHBhbmRDbGlja2VkfT4gXHJcbiAgICAgICAgICAgIHtiRXhwYW5kZWQgPyAoPENoZXZyb25Eb3duSWNvbiBjbGFzc05hbWU9XCJoLWZ1bGwgcHktMSBwbC0yXCI+PC9DaGV2cm9uRG93bkljb24+KSA6ICg8Q2hldnJvblJpZ2h0SWNvbiBjbGFzc05hbWU9XCJoLWZ1bGwgcHktMSBwbC0yXCI+PC9DaGV2cm9uUmlnaHRJY29uPikgfSAgXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInB4LTIgZm9udC1ib2xkIHRleHQtbWQgdGV4dC1ncmF5LTMwMFwiPntwcm9wcy5jYXRlZ29yeS5OYW1lfTwvcD5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1zZWNvbmRhcnkgc2hhZG93LXNwIFwiPlxyXG4gICAgICAgIDw+XHJcbiAgICAgICAge2JFeHBhbmRlZCA/IFxyXG4gICAgICAgIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmbGV4IGgtOCB3LWZ1bGwgYmctc2Vjb25kYXJ5IGl0ZW1zLWNlbnRlciBjb250ZW50LWNlbnRlciBob3ZlcjpiZy1zZWNvbmRhcnlITCB0cmFuc2l0aW9uLWFsbCBob3Zlcjp0cmFuc2l0aW9uLWFsbFwiIG9uQ2xpY2s9e2NsaWNrU2VhcmNoQWxsQ2FsbGJhY2t9PjxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtY2VudGVyIHRleHQteHMgZm9udC1ib2xkIHRleHQtd2hpdGVcIj5TZWFyY2ggQWxsPC9kaXY+PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuY2F0ZWdvcnkuR3JvdXBzLm1hcChncm91cD0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEl0ZW1MaXN0R3JvdXAga2V5PXtncm91cC5OYW1lfSBvbkNsaWNrSW5kaXZpZHVhbD17cHJvcHMub25DbGlja0luZGl2aWR1YWx9IG9uQ2xpY2tTZWFyY2hBbGw9e3Byb3BzLm9uQ2xpY2tTZWFyY2hBbGx9IGl0ZW1Hcm91cD17Z3JvdXB9ID48L0l0ZW1MaXN0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKSA6IFxyXG4gICAgICAgICg8PjwvPil9XHJcbiAgICAgICAgPC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG5cclxuICAgIDwvPilcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSXRlbUxpc3RDYXRlZ29yeTsiLCAiaW1wb3J0IENoZXZyb25Eb3duSWNvbiBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lL0NoZXZyb25Eb3duSWNvblwiO1xyXG5pbXBvcnQgQ2hldnJvblJpZ2h0SWNvbiBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lL0NoZXZyb25SaWdodEljb25cIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSXRlbUdyb3VwLCBJdGVtR3JvdXBFbnRyeSB9IGZyb20gXCJ+L3JvdXRlcy9JdGVtTGlzdHNcIjtcclxuaW1wb3J0IEl0ZW1MaXN0SXRlbUVudHJ5IGZyb20gXCIuL0l0ZW1MaXN0SXRlbUVudHJ5XCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJdGVtTGlzdEdyb3VwUHJvcHN7XHJcbiAgICBpdGVtR3JvdXAgOiBJdGVtR3JvdXA7XHJcbiAgICBvbkNsaWNrU2VhcmNoQWxsOiAoZ3JvdXAgOiBJdGVtR3JvdXApID0+IHZvaWQ7XHJcbiAgICBvbkNsaWNrSW5kaXZpZHVhbDogKGl0ZW0gOiBJdGVtR3JvdXBFbnRyeSwgZ3JvdXAgOiBJdGVtR3JvdXAgKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBJdGVtTGlzdEdyb3VwID0gKHByb3BzIDogSXRlbUxpc3RHcm91cFByb3BzKSAgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtiRXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBmdW5jdGlvbiBjbGlja1NlYXJjaEFsbENhbGxiYWNrKCl7XHJcbiAgICAgICAgcHJvcHMub25DbGlja1NlYXJjaEFsbChwcm9wcy5pdGVtR3JvdXApXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gT25FeHBhbmRDbGlja2VkKCl7XHJcbiAgICAgICAgc2V0RXhwYW5kZWQoIWJFeHBhbmRlZCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKDw+XHJcblxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmxleCBwbC00IGgtOCBweS0xIHctZnVsbCBiZy1zZWNvbmRhcnkgaXRlbXMtY2VudGVyIGNvbnRlbnQtY2VudGVyIGhvdmVyOmJnLXNlY29uZGFyeUhMIHRyYW5zaXRpb24tYWxsIGhvdmVyOnRyYW5zaXRpb24tYWxsIG91dGxpbmUgb3V0bGluZS1wcmltYXJ5IG91dGxpbmUtMVwiIG9uQ2xpY2s9e09uRXhwYW5kQ2xpY2tlZH0+IFxyXG4gICAgICAgICAgICB7YkV4cGFuZGVkID8gKDxDaGV2cm9uRG93bkljb24gY2xhc3NOYW1lPVwiaC1mdWxsIHB5LTEgcGwtMlwiPjwvQ2hldnJvbkRvd25JY29uPikgOiAoPENoZXZyb25SaWdodEljb24gY2xhc3NOYW1lPVwiaC1mdWxsIHB5LTEgcGwtMlwiPjwvQ2hldnJvblJpZ2h0SWNvbj4pIH0gIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaC1mdWxsIHctYXV0byBweC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvcHMuaXRlbUdyb3VwLkljb259IGNsYXNzTmFtZT1cInJvdW5kZWQtbWRcIj48L2ltZz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LW1kIHRleHQtZ3JheS0zMDBcIj57cHJvcHMuaXRlbUdyb3VwLk5hbWV9PC9wPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2x1bW5cIj5cclxuICAgICAgICA8PlxyXG4gICAgICAgIHtiRXhwYW5kZWQgPyBcclxuICAgICAgICAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGwgb3V0bGluZSBvdXRsaW5lLXByaW1hcnkgb3V0bGluZS0xXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZsZXggaC1mdWxsIGgtOCB3LWZ1bGwgYmctc2Vjb25kYXJ5IGl0ZW1zLWNlbnRlciBjb250ZW50LWNlbnRlciBob3ZlcjpiZy1zZWNvbmRhcnlITCB0cmFuc2l0aW9uLWFsbCBob3Zlcjp0cmFuc2l0aW9uLWFsbFwiIG9uQ2xpY2s9e2NsaWNrU2VhcmNoQWxsQ2FsbGJhY2t9PjxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtY2VudGVyIHRleHQteHMgZm9udC1ib2xkIHRleHQtd2hpdGVcIj5TZWFyY2ggQWxsPC9kaXY+PC9idXR0b24+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAge3Byb3BzLml0ZW1Hcm91cC5JdGVtcy5tYXAoaT0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEl0ZW1MaXN0SXRlbUVudHJ5IGtleT17aS5OYW1lfSBpdGVtPXtpfSBwYXJlbnRHcm91cD17cHJvcHMuaXRlbUdyb3VwfSBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrSW5kaXZpZHVhbH0gPjwvSXRlbUxpc3RJdGVtRW50cnk+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtMlwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICkgOiBcclxuICAgICAgICAoPD48Lz4pfVxyXG4gICAgICAgIDwvPlxyXG4gICAgPC9kaXY+XHJcblxyXG5cclxuICAgIDwvPilcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSXRlbUxpc3RHcm91cDsiLCAiaW1wb3J0IHsgSXRlbUdyb3VwLCBJdGVtR3JvdXBFbnRyeSB9IGZyb20gXCJ+L3JvdXRlcy9JdGVtTGlzdHNcIjtcclxuXHJcbmludGVyZmFjZSBJdGVtTGlzdEl0ZW1FbnRyeVByb3Bze1xyXG4gICAgaXRlbSA6IEl0ZW1Hcm91cEVudHJ5O1xyXG4gICAgcGFyZW50R3JvdXA6IEl0ZW1Hcm91cDtcclxuICAgIG9uQ2xpY2s6IChpdGVtIDogSXRlbUdyb3VwRW50cnksIGdyb3VwIDogSXRlbUdyb3VwICkgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgSXRlbUxpc3RJdGVtRW50cnkgPSAocHJvcHMgOiBJdGVtTGlzdEl0ZW1FbnRyeVByb3BzKSA6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gY2FsbGJhY2soKXtcclxuICAgICAgICBwcm9wcy5vbkNsaWNrKHByb3BzLml0ZW0scHJvcHMucGFyZW50R3JvdXApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICg8PlxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGgtZnVsbCBoLTcgcHktWzJweF0gdy1mdWxsIGJnLXNlY29uZGFyeSBob3ZlcjpiZy1zZWNvbmRhcnlITCBvdXRsaW5lIG91dGxpbmUtcHJpbWFyeSBvdXRsaW5lLTEgcGwtMTBcIiBvbkNsaWNrPXtjYWxsYmFja30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC04IGZsZXggaC1mdWxsIGZsZXgtcm93IGl0ZW1zLWNlbnRlciBhbGlnbi1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtZnVsbCB3LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicm91bmRlZC1tZFwiIHNyYz17cHJvcHMuaXRlbS5JY29uICE9PSBudWxsID8gcHJvcHMuaXRlbS5JY29uIDogcHJvcHMucGFyZW50R3JvdXAuSWNvbn0+PC9pbWc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5pdGVtLk5hbWV9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8Lz4pXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSXRlbUxpc3RJdGVtRW50cnk7IiwgImltcG9ydCB7IEl0ZW1DYXRlZ29yeSB9IGZyb20gXCJ+L3JvdXRlcy9JdGVtTGlzdHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBJTF9JbmZ1c2lvbnMgOiBJdGVtQ2F0ZWdvcnlbXSA9IFxyXG5bXHJcbiAge1xyXG4gICAgTmFtZTogXCJSYWlkIEluZnVzaW9uc1wiLFxyXG4gICAgR3JvdXBzOiBcclxuICAgIFtcclxuICAgICAge1xyXG4gICAgICAgIE5hbWU6XCJHaG9zdGx5IEluZnVzaW9uXCIsXHJcbiAgICAgICAgSWNvbjpcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvMjk3RTRCNzY2QUZCNTRFOEZCQTE0QTE5NzBBNDk1RUFBNTU4RjYzMC8xMzAyNzM2LnBuZ1wiLFxyXG4gICAgICAgIEl0ZW1zOltcclxuICAgICAgICAgIHtOYW1lOiBcIkdob3N0bHkgSW5mdXNpb24gKENvbmNlbnRyYXRpb24pXCIsIEl0ZW1JRDo4NTk0NSwgSWNvbjpudWxsfSxcclxuICAgICAgICAgIHtOYW1lOiBcIkdob3N0bHkgSW5mdXNpb24gKEV4cGVydGlzZSlcIiwgSXRlbUlEOjg1NjQ0LCBJY29uOm51bGx9LFxyXG4gICAgICAgICAge05hbWU6IFwiR2hvc3RseSBJbmZ1c2lvbiAoVG91Z2huZXNzKVwiLCBJdGVtSUQ6NzczOTQsIEljb246bnVsbH0sXHJcbiAgICAgICAgICB7TmFtZTogXCJHaG9zdGx5IEluZnVzaW9uIChDb25kaXRpb24gRGFtYWdlKVwiLCBJdGVtSUQ6NzczNjYsIEljb246bnVsbH0sXHJcbiAgICAgICAgICB7TmFtZTogXCJHaG9zdGx5IEluZnVzaW9uIChQcmVjaXNpb24pXCIsIEl0ZW1JRDo3NzMxNiwgSWNvbjpudWxsfSxcclxuICAgICAgICAgIHtOYW1lOiBcIkdob3N0bHkgSW5mdXNpb24gKFBvd2VyKVwiLCBJdGVtSUQ6NzczMTAsIEljb246bnVsbH0sXHJcbiAgICAgICAgICB7TmFtZTogXCJHaG9zdGx5IEluZnVzaW9uIChWaXRhbGl0eSlcIiwgSXRlbUlEOjc3MzAzLCBJY29uOm51bGx9LFxyXG4gICAgICAgICAge05hbWU6IFwiR2hvc3RseSBJbmZ1c2lvbiAoSGVhbGluZyBQb3dlcilcIiwgSXRlbUlEOjc3Mjc0LCBJY29uOm51bGx9LFxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICBcIk5hbWVcIjogXCJQZWVybGVzcyBJbmZ1c2lvblwiLFxyXG4gICAgICBcIkljb25cIjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzA3RDA2OTI4RUQwQjI0MUQ1MTExQjdBODYwN0VGRjlCQjAzMjk0MDUvMjE1NTkxMS5wbmdcIixcclxuICAgICAgXCJJdGVtc1wiOiBbXHJcbiAgICAgICAgICB7TmFtZTogXCJQZWVybGVzcyBJbmZ1c2lvbiAoVG91Z2huZXNzKVwiLEl0ZW1JRDogOTExNDAsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzA3RDA2OTI4RUQwQjI0MUQ1MTExQjdBODYwN0VGRjlCQjAzMjk0MDUvMjE1NTkxMS5wbmdcIn0sXHJcbiAgICAgICAgICB7TmFtZTogXCJQZWVybGVzcyBJbmZ1c2lvbiAoQ29uZGl0aW9uRGFtYWdlKVwiLEl0ZW1JRDogOTExNTIsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzA3RDA2OTI4RUQwQjI0MUQ1MTExQjdBODYwN0VGRjlCQjAzMjk0MDUvMjE1NTkxMS5wbmdcIn0sXHJcbiAgICAgICAgICB7TmFtZTogXCJQZWVybGVzcyBJbmZ1c2lvbiAoVml0YWxpdHkpXCIsSXRlbUlEOiA5MTE1NCxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvMDdEMDY5MjhFRDBCMjQxRDUxMTFCN0E4NjA3RUZGOUJCMDMyOTQwNS8yMTU1OTExLnBuZ1wifSxcclxuICAgICAgICAgIHtOYW1lOiBcIlBlZXJsZXNzIEluZnVzaW9uIChQcmVjaXNpb24pXCIsSXRlbUlEOiA5MTE4MCxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvMDdEMDY5MjhFRDBCMjQxRDUxMTFCN0E4NjA3RUZGOUJCMDMyOTQwNS8yMTU1OTExLnBuZ1wifSxcclxuICAgICAgICAgIHtOYW1lOiBcIlBlZXJsZXNzIEluZnVzaW9uIChQb3dlcilcIixJdGVtSUQ6IDkxMjAyLEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS8wN0QwNjkyOEVEMEIyNDFENTExMUI3QTg2MDdFRkY5QkIwMzI5NDA1LzIxNTU5MTEucG5nXCJ9LFxyXG4gICAgICAgICAge05hbWU6IFwiUGVlcmxlc3MgSW5mdXNpb24gKEhlYWxpbmcpXCIsSXRlbUlEOiA5MTIxMCxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvMDdEMDY5MjhFRDBCMjQxRDUxMTFCN0E4NjA3RUZGOUJCMDMyOTQwNS8yMTU1OTExLnBuZ1wifSxcclxuICAgICAgICAgIHtOYW1lOiBcIlBlZXJsZXNzIEluZnVzaW9uIChDb25jZW50cmF0aW9uKVwiLEl0ZW1JRDogOTEyMjEsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzA3RDA2OTI4RUQwQjI0MUQ1MTExQjdBODYwN0VGRjlCQjAzMjk0MDUvMjE1NTkxMS5wbmdcIn0sXHJcbiAgICAgICAgICB7TmFtZTogXCJQZWVybGVzcyBJbmZ1c2lvbiAoRXhwZXJ0aXNlKVwiLEl0ZW1JRDogOTEyMzYsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzA3RDA2OTI4RUQwQjI0MUQ1MTExQjdBODYwN0VGRjlCQjAzMjk0MDUvMjE1NTkxMS5wbmdcIn1cclxuICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgTmFtZTpcIkV2ZW50IEluZnVzaW9uc1wiLFxyXG4gICAgR3JvdXBzOltcclxuICAgICAge1xyXG4gICAgICAgIE5hbWU6IFwiQ2hhayBJbmZ1c2lvblwiLFxyXG4gICAgICAgIEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9GRTczRjAxMjExOTI1MkYxOTM1Nzk3QjJFQzJDOTQ0ODJBQjVBMzA4LzgzMTQ4NS5wbmdcIixcclxuICAgICAgICBJdGVtczogW1xyXG4gICAgICAgICAgICB7IE5hbWU6IFwiQ2hhayBJbmZ1c2lvbiAoUHJlY2lzaW9uKVwiLCBJdGVtSUQ6IDgxNjE2LCBJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvRkU3M0YwMTIxMTkyNTJGMTkzNTc5N0IyRUMyQzk0NDgyQUI1QTMwOC84MzE0ODUucG5nXCIgfSxcclxuICAgICAgICAgICAgeyBOYW1lOiBcIkNoYWsgSW5mdXNpb24gKEhlYWxpbmcpXCIsIEl0ZW1JRDogODE2NzcsIEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9GRTczRjAxMjExOTI1MkYxOTM1Nzk3QjJFQzJDOTQ0ODJBQjVBMzA4LzgzMTQ4NS5wbmdcIn0sXHJcbiAgICAgICAgICAgIHtOYW1lOiBcIkNoYWsgSW5mdXNpb24gKENvbmRpdGlvbiBEYW1hZ2UpXCIsSXRlbUlEOiA4MTgwNyxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvRkU3M0YwMTIxMTkyNTJGMTkzNTc5N0IyRUMyQzk0NDgyQUI1QTMwOC84MzE0ODUucG5nXCJ9LFxyXG4gICAgICAgICAgICB7TmFtZTogXCJDaGFrIEluZnVzaW9uIChQb3dlcilcIixJdGVtSUQ6IDgxODI1LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9GRTczRjAxMjExOTI1MkYxOTM1Nzk3QjJFQzJDOTQ0ODJBQjVBMzA4LzgzMTQ4NS5wbmdcIn0sXHJcbiAgICAgICAgICAgIHtOYW1lOiBcIkNoYWsgSW5mdXNpb24gKFRvdWdobmVzcylcIixJdGVtSUQ6IDgxODQwLEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9GRTczRjAxMjExOTI1MkYxOTM1Nzk3QjJFQzJDOTQ0ODJBQjVBMzA4LzgzMTQ4NS5wbmdcIn0sXHJcbiAgICAgICAgICAgIHtOYW1lOiBcIkNoYWsgSW5mdXNpb24gKFZpdGFsaXR5KVwiLEl0ZW1JRDogODIwNDQsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlL0ZFNzNGMDEyMTE5MjUyRjE5MzU3OTdCMkVDMkM5NDQ4MkFCNUEzMDgvODMxNDg1LnBuZ1wifSxcclxuICAgICAgICAgICAge05hbWU6IFwiQ2hhayBJbmZ1c2lvbiAoRXhwZXJ0aXNlKVwiLEl0ZW1JRDogODU2NjgsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlL0ZFNzNGMDEyMTE5MjUyRjE5MzU3OTdCMkVDMkM5NDQ4MkFCNUEzMDgvODMxNDg1LnBuZ1wifSxcclxuICAgICAgICAgICAge05hbWU6IFwiQ2hhayBJbmZ1c2lvbiAoQ29uY2VudHJhdGlvbilcIixJdGVtSUQ6IDg2MjUxLEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9GRTczRjAxMjExOTI1MkYxOTM1Nzk3QjJFQzJDOTQ0ODJBQjVBMzA4LzgzMTQ4NS5wbmdcIn1cclxuICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IE5hbWU6XCJMaXF1aWQgQXVyaWxsaXVtIEluZnVzaW9uXCIsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlL0E2NkNFRjFCOUMwMzJDMjQwRURCOTA3N0ZDRDUzNDkzQ0Q1QUM2QjkvMTIwMzA1MC5wbmdcIixJdGVtczogW1xyXG4gICAgICAgICAge05hbWU6IFwiTGlxdWlkIEF1cmlsbGl1bSBJbmZ1c2lvbiAoUG93ZXIpXCIsSXRlbUlEOiA4MTcxNSxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvQTY2Q0VGMUI5QzAzMkMyNDBFREI5MDc3RkNENTM0OTNDRDVBQzZCOS8xMjAzMDUwLnBuZ1wifSxcclxuICAgICAgICAgIHtOYW1lOiBcIkxpcXVpZCBBdXJpbGxpdW0gSW5mdXNpb24gKFByZWNpc2lvbilcIixJdGVtSUQ6IDgxODc1LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9BNjZDRUYxQjlDMDMyQzI0MEVEQjkwNzdGQ0Q1MzQ5M0NENUFDNkI5LzEyMDMwNTAucG5nXCJ9LFxyXG4gICAgICAgICAge05hbWU6IFwiTGlxdWlkIEF1cmlsbGl1bSBJbmZ1c2lvbiAoSGVhbGluZylcIixJdGVtSUQ6IDgxODg5LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9BNjZDRUYxQjlDMDMyQzI0MEVEQjkwNzdGQ0Q1MzQ5M0NENUFDNkI5LzEyMDMwNTAucG5nXCJ9LFxyXG4gICAgICAgICAge05hbWU6IFwiTGlxdWlkIEF1cmlsbGl1bSBJbmZ1c2lvbiAoVG91Z2huZXNzKVwiLEl0ZW1JRDogODE5MTgsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlL0E2NkNFRjFCOUMwMzJDMjQwRURCOTA3N0ZDRDUzNDkzQ0Q1QUM2QjkvMTIwMzA1MC5wbmdcIn0sXHJcbiAgICAgICAgICB7TmFtZTogXCJMaXF1aWQgQXVyaWxsaXVtIEluZnVzaW9uIChWaXRhbGl0eSlcIixJdGVtSUQ6IDgxOTc1LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9BNjZDRUYxQjlDMDMyQzI0MEVEQjkwNzdGQ0Q1MzQ5M0NENUFDNkI5LzEyMDMwNTAucG5nXCJ9LFxyXG4gICAgICAgICAge05hbWU6IFwiTGlxdWlkIEF1cmlsbGl1bSBJbmZ1c2lvbiAoQ29uZGl0aW9uIERhbWFnZSlcIixJdGVtSUQ6IDgyMDA2LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9BNjZDRUYxQjlDMDMyQzI0MEVEQjkwNzdGQ0Q1MzQ5M0NENUFDNkI5LzEyMDMwNTAucG5nXCJ9LFxyXG4gICAgICAgICAge05hbWU6IFwiTGlxdWlkIEF1cmlsbGl1bSBJbmZ1c2lvbiAoQ29uY2VudHJhdGlvbilcIixJdGVtSUQ6IDg2Mjc1LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9BNjZDRUYxQjlDMDMyQzI0MEVEQjkwNzdGQ0Q1MzQ5M0NENUFDNkI5LzEyMDMwNTAucG5nXCJ9LFxyXG4gICAgICAgICAge05hbWU6IFwiTGlxdWlkIEF1cmlsbGl1bSBJbmZ1c2lvbiAoRXhwZXJ0aXNlKVwiLEl0ZW1JRDogODYyOTEsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlL0E2NkNFRjFCOUMwMzJDMjQwRURCOTA3N0ZDRDUzNDkzQ0Q1QUM2QjkvMTIwMzA1MC5wbmdcIn1cclxuICAgICAgXX0sXHJcbiAgICAgIHtOYW1lOiBcIlByZXNlcnZlZCBRdWVlbiBCZWVcIixJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvMDFDNUE3QjVCMEIwMUMzNjA1MDkwNzUwQjQ0Qjc2MEY3MEMwN0EwNS84MzE0ODkucG5nXCIsSXRlbXM6IFtcclxuICAgICAgICB7TmFtZTogXCJRdWVlbiBCZWUgSW5mdXNpb24gKFByZWNpc2lvbilcIixJdGVtSUQ6IDgxNjM4LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS8wMUM1QTdCNUIwQjAxQzM2MDUwOTA3NTBCNDRCNzYwRjcwQzA3QTA1LzgzMTQ4OS5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiUXVlZW4gQmVlIEluZnVzaW9uIChQb3dlcilcIixJdGVtSUQ6IDgxNjYzLEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS8wMUM1QTdCNUIwQjAxQzM2MDUwOTA3NTBCNDRCNzYwRjcwQzA3QTA1LzgzMTQ4OS5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiUXVlZW4gQmVlIEluZnVzaW9uIChIZWFsaW5nKVwiLEl0ZW1JRDogODE2NzksSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzAxQzVBN0I1QjBCMDFDMzYwNTA5MDc1MEI0NEI3NjBGNzBDMDdBMDUvODMxNDg5LnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJRdWVlbiBCZWUgSW5mdXNpb24gKENvbmRpdGlvbiBEYW1hZ2UpXCIsSXRlbUlEOiA4MTcwMSxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvMDFDNUE3QjVCMEIwMUMzNjA1MDkwNzUwQjQ0Qjc2MEY3MEMwN0EwNS84MzE0ODkucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIlF1ZWVuIEJlZSBJbmZ1c2lvbiAoVG91Z2huZXNzKVwiLEl0ZW1JRDogODE4MTgsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzAxQzVBN0I1QjBCMDFDMzYwNTA5MDc1MEI0NEI3NjBGNzBDMDdBMDUvODMxNDg5LnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJRdWVlbiBCZWUgSW5mdXNpb24gKENvbmNlbnRyYXRpb24pXCIsSXRlbUlEOiA4NjA1NSxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvMDFDNUE3QjVCMEIwMUMzNjA1MDkwNzUwQjQ0Qjc2MEY3MEMwN0EwNS84MzE0ODkucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIlF1ZWVuIEJlZSBJbmZ1c2lvbiAoVml0YWxpdHkpXCIsSXRlbUlEOiA4MTg5NyxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvMDFDNUE3QjVCMEIwMUMzNjA1MDkwNzUwQjQ0Qjc2MEY3MEMwN0EwNS84MzE0ODkucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIlF1ZWVuIEJlZSBJbmZ1c2lvbiAoRXhwZXJ0aXNlKVwiLEl0ZW1JRDogODYzMDMsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzAxQzVBN0I1QjBCMDFDMzYwNTA5MDc1MEI0NEI3NjBGNzBDMDdBMDUvODMxNDg5LnBuZ1wifVxyXG4gICAgXX0sXHJcbiAgICAgIHtOYW1lOiBcIkZlc3RpdmUgQ29uZmV0dGkgSW5mdXNpb25cIixJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvMDBFRDdFQzlCQjBBMDEwNDUyMDVFRDYxNDRGQjI0RTkxODlCMjVDMi8xODIyMDk0LnBuZ1wiLEl0ZW1zOiBbXHJcbiAgICAgICAge05hbWU6IFwiRmVzdGl2ZSBDb25mZXR0aSBJbmZ1c2lvbiAoUG93ZXIpXCIsSXRlbUlEOiA4NDg4MixJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvMDBFRDdFQzlCQjBBMDEwNDUyMDVFRDYxNDRGQjI0RTkxODlCMjVDMi8xODIyMDk0LnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJGZXN0aXZlIENvbmZldHRpIEluZnVzaW9uIChQcmVjaXNpb24pXCIsSXRlbUlEOiA4NDkzNyxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvMDBFRDdFQzlCQjBBMDEwNDUyMDVFRDYxNDRGQjI0RTkxODlCMjVDMi8xODIyMDk0LnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJGZXN0aXZlIENvbmZldHRpIEluZnVzaW9uIChUb3VnaG5lc3MpXCIsSXRlbUlEOiA4NDk1OSxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvMDBFRDdFQzlCQjBBMDEwNDUyMDVFRDYxNDRGQjI0RTkxODlCMjVDMi8xODIyMDk0LnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJGZXN0aXZlIENvbmZldHRpIEluZnVzaW9uIChWaXRhbGl0eSlcIixJdGVtSUQ6IDg0OTcwLEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS8wMEVEN0VDOUJCMEEwMTA0NTIwNUVENjE0NEZCMjRFOTE4OUIyNUMyLzE4MjIwOTQucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIkZlc3RpdmUgQ29uZmV0dGkgSW5mdXNpb24gKEhlYWxpbmcpXCIsSXRlbUlEOiA4NTAzMyxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvMDBFRDdFQzlCQjBBMDEwNDUyMDVFRDYxNDRGQjI0RTkxODlCMjVDMi8xODIyMDk0LnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJGZXN0aXZlIENvbmZldHRpIEluZnVzaW9uIChDb25jZW50cmF0aW9uKVwiLEl0ZW1JRDogODU5OTYsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzAwRUQ3RUM5QkIwQTAxMDQ1MjA1RUQ2MTQ0RkIyNEU5MTg5QjI1QzIvMTgyMjA5NC5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiRmVzdGl2ZSBDb25mZXR0aSBJbmZ1c2lvbiAoRXhwZXJ0aXNlKVwiLEl0ZW1JRDogODU5MDAsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzAwRUQ3RUM5QkIwQTAxMDQ1MjA1RUQ2MTQ0RkIyNEU5MTg5QjI1QzIvMTgyMjA5NC5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiRmVzdGl2ZSBDb25mZXR0aSBJbmZ1c2lvbiAoQ29uZGl0aW9uIERhbWFnZSlcIixJdGVtSUQ6IDg0ODcxLEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS8wMEVEN0VDOUJCMEEwMTA0NTIwNUVENjE0NEZCMjRFOTE4OUIyNUMyLzE4MjIwOTQucG5nXCJ9XHJcbiAgICBdfSxcclxuICAgIHtOYW1lOiBcIkNyeXN0YWwgSW5mdXNpb24gb2YgVml0YWxpdHlcIixJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvQTIzMzA1RENCODM1RkZBNEE0MkZCMzk2M0NFOUM2RDM3RDAyNDE5RS8yMDM4NjAyLnBuZ1wiLEl0ZW1zOiBbXHJcbiAgICAgICAge05hbWU6IFwiQ3J5c3RhbCBJbmZ1c2lvbiBvZiBWaXRhbGl0eSAoVml0YWxpdHkpXCIsSXRlbUlEOiA4ODUyMixJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvQTIzMzA1RENCODM1RkZBNEE0MkZCMzk2M0NFOUM2RDM3RDAyNDE5RS8yMDM4NjAyLnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJDcnlzdGFsIEluZnVzaW9uIG9mIEhlYWxpbmcgKEhlYWxpbmcpXCIsSXRlbUlEOiA4ODYwMyxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvQTIzMzA1RENCODM1RkZBNEE0MkZCMzk2M0NFOUM2RDM3RDAyNDE5RS8yMDM4NjAyLnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJDcnlzdGFsIEluZnVzaW9uIG9mIFRvdWdobmVzcyAoVG91Z2huZXNzKVwiLEl0ZW1JRDogODg2ODMsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlL0EyMzMwNURDQjgzNUZGQTRBNDJGQjM5NjNDRTlDNkQzN0QwMjQxOUUvMjAzODYwMi5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiQ3J5c3RhbCBJbmZ1c2lvbiBvZiBDb25kaXRpb24gRGFtYWdlIChDb25kaXRpb25EYW1hZ2UpXCIsSXRlbUlEOiA4ODczMixJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvQTIzMzA1RENCODM1RkZBNEE0MkZCMzk2M0NFOUM2RDM3RDAyNDE5RS8yMDM4NjAyLnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJDcnlzdGFsIEluZnVzaW9uIG9mIEJvb24gRHVyYXRpb24gKENvbmNlbnRyYXRpb24pXCIsSXRlbUlEOiA4ODc3MCxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvQTIzMzA1RENCODM1RkZBNEE0MkZCMzk2M0NFOUM2RDM3RDAyNDE5RS8yMDM4NjAyLnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJDcnlzdGFsIEluZnVzaW9uIG9mIFBvd2VyIChQb3dlcilcIixJdGVtSUQ6IDg4NzcxLEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9BMjMzMDVEQ0I4MzVGRkE0QTQyRkIzOTYzQ0U5QzZEMzdEMDI0MTlFLzIwMzg2MDIucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIkNyeXN0YWwgSW5mdXNpb24gb2YgUHJlY2lzaW9uIChQcmVjaXNpb24pXCIsSXRlbUlEOiA4ODg3MSxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvQTIzMzA1RENCODM1RkZBNEE0MkZCMzk2M0NFOUM2RDM3RDAyNDE5RS8yMDM4NjAyLnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJDcnlzdGFsIEluZnVzaW9uIG9mIENvbmRpdGlvbiBEdXJhdGlvbiAoRXhwZXJ0aXNlKVwiLEl0ZW1JRDogODg4NzYsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlL0EyMzMwNURDQjgzNUZGQTRBNDJGQjM5NjNDRTlDNkQzN0QwMjQxOUUvMjAzODYwMi5wbmdcIn1cclxuICAgIF19LFxyXG4gICAge05hbWU6IFwiSGVhcnQgb2YgdGhlIEtoYW4tVXJcIixJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvMDJGMzM5N0VBRTExQUIxQjQ4RkQ0QTlBNEVDQTZCNDgwQUExRkY1Qi8yMTk5MzA1LnBuZ1wiLEl0ZW1zOiBbXHJcbiAgICAgICAge05hbWU6IFwiSGVhcnQgb2YgdGhlIEtoYW4tVXIgKFZpdGFsaXR5KVwiLEl0ZW1JRDogOTE4OTcsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzAyRjMzOTdFQUUxMUFCMUI0OEZENEE5QTRFQ0E2QjQ4MEFBMUZGNUIvMjE5OTMwNS5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiSGVhcnQgb2YgdGhlIEtoYW4tVXIgKFByZWNpc2lvbilcIixJdGVtSUQ6IDkxOTIzLEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS8wMkYzMzk3RUFFMTFBQjFCNDhGRDRBOUE0RUNBNkI0ODBBQTFGRjVCLzIxOTkzMDUucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIkhlYXJ0IG9mIHRoZSBLaGFuLVVyIChQb3dlcilcIixJdGVtSUQ6IDkxOTMwLEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS8wMkYzMzk3RUFFMTFBQjFCNDhGRDRBOUE0RUNBNkI0ODBBQTFGRjVCLzIxOTkzMDUucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIkhlYXJ0IG9mIHRoZSBLaGFuLVVyIChFeHBlcnRpc2UpXCIsSXRlbUlEOiA5MTk5NixJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvMDJGMzM5N0VBRTExQUIxQjQ4RkQ0QTlBNEVDQTZCNDgwQUExRkY1Qi8yMTk5MzA1LnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJIZWFydCBvZiB0aGUgS2hhbi1VciAoSGVhbGluZylcIixJdGVtSUQ6IDkyMDE4LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS8wMkYzMzk3RUFFMTFBQjFCNDhGRDRBOUE0RUNBNkI0ODBBQTFGRjVCLzIxOTkzMDUucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIkhlYXJ0IG9mIHRoZSBLaGFuLVVyIChUb3VnaG5lc3MpXCIsSXRlbUlEOiA5MjAyMyxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvMDJGMzM5N0VBRTExQUIxQjQ4RkQ0QTlBNEVDQTZCNDgwQUExRkY1Qi8yMTk5MzA1LnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJIZWFydCBvZiB0aGUgS2hhbi1VciAoQ29uZGl0aW9uRGFtYWdlKVwiLEl0ZW1JRDogOTIwNzMsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzAyRjMzOTdFQUUxMUFCMUI0OEZENEE5QTRFQ0E2QjQ4MEFBMUZGNUIvMjE5OTMwNS5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiSGVhcnQgb2YgdGhlIEtoYW4tVXIgKENvbmNlbnRyYXRpb24pXCIsSXRlbUlEOiA5MjA3NSxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvMDJGMzM5N0VBRTExQUIxQjQ4RkQ0QTlBNEVDQTZCNDgwQUExRkY1Qi8yMTk5MzA1LnBuZ1wifVxyXG4gICAgXX0sXHJcbiAgICB7TmFtZTogXCJEZWxkcmltb3IgU3RvbmVza2luIEluZnVzaW9uXCIsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzA4MTdCQjNDRTdDQTM0RTJDOUMwQTc1OTAwN0Q1N0Y2MzREMzBGOUQvMjM4ODI1MC5wbmdcIixJdGVtczogW1xyXG4gICAgICAgIHtOYW1lOiBcIkRlbGRyaW1vciBTdG9uZXNraW4gSW5mdXNpb24gKFByZWNpc2lvbilcIixJdGVtSUQ6IDk0NDgxLEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS8wODE3QkIzQ0U3Q0EzNEUyQzlDMEE3NTkwMDdENTdGNjM0RDMwRjlELzIzODgyNTAucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIkRlbGRyaW1vciBTdG9uZXNraW4gSW5mdXNpb24gKEhlYWxpbmcpXCIsSXRlbUlEOiA5NDQ4NCxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvMDgxN0JCM0NFN0NBMzRFMkM5QzBBNzU5MDA3RDU3RjYzNEQzMEY5RC8yMzg4MjUwLnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJEZWxkcmltb3IgU3RvbmVza2luIEluZnVzaW9uIChFeHBlcnRpc2UpXCIsSXRlbUlEOiA5NDQ4NyxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvMDgxN0JCM0NFN0NBMzRFMkM5QzBBNzU5MDA3RDU3RjYzNEQzMEY5RC8yMzg4MjUwLnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJEZWxkcmltb3IgU3RvbmVza2luIEluZnVzaW9uIChQb3dlcilcIixJdGVtSUQ6IDk0NTQzLEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS8wODE3QkIzQ0U3Q0EzNEUyQzlDMEE3NTkwMDdENTdGNjM0RDMwRjlELzIzODgyNTAucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIkRlbGRyaW1vciBTdG9uZXNraW4gSW5mdXNpb24gKENvbmRpdGlvbkRhbWFnZSlcIixJdGVtSUQ6IDk0NTcyLEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS8wODE3QkIzQ0U3Q0EzNEUyQzlDMEE3NTkwMDdENTdGNjM0RDMwRjlELzIzODgyNTAucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIkRlbGRyaW1vciBTdG9uZXNraW4gSW5mdXNpb24gKFZpdGFsaXR5KVwiLEl0ZW1JRDogOTQ1ODMsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzA4MTdCQjNDRTdDQTM0RTJDOUMwQTc1OTAwN0Q1N0Y2MzREMzBGOUQvMjM4ODI1MC5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiRGVsZHJpbW9yIFN0b25lc2tpbiBJbmZ1c2lvbiAoQ29uY2VudHJhdGlvbilcIixJdGVtSUQ6IDk0NTg0LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS8wODE3QkIzQ0U3Q0EzNEUyQzlDMEE3NTkwMDdENTdGNjM0RDMwRjlELzIzODgyNTAucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIkRlbGRyaW1vciBTdG9uZXNraW4gSW5mdXNpb24gKFRvdWdobmVzcylcIixJdGVtSUQ6IDk0NjA5LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS8wODE3QkIzQ0U3Q0EzNEUyQzlDMEE3NTkwMDdENTdGNjM0RDMwRjlELzIzODgyNTAucG5nXCJ9XHJcbiAgICBdfVxyXG4gICAgXVxyXG4gIH0sIFxyXG4gIHtcclxuICAgIE5hbWU6XCJBY2hpZXZlbWVudCBJbmZ1c2lvbnNcIixcclxuICAgIEdyb3VwczpbXHJcbiAgICAgIHtOYW1lOiBcIktvZGEncyBXYXJtdGggRW5yaWNobWVudFwiLEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS81RDY5N0M0MzIxQTM0MjY5MzBDRjUwMTkyMzE4NTY0OTA4QTEwQkQ2LzE2MDE0NjcucG5nXCIsSXRlbXM6IFtcclxuICAgICAgICB7TmFtZTogXCJLb2RhJ3MgV2FybXRoIEVucmljaG1lbnRcIixJdGVtSUQ6IDc5OTI2LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS81RDY5N0M0MzIxQTM0MjY5MzBDRjUwMTkyMzE4NTY0OTA4QTEwQkQ2LzE2MDE0NjcucG5nXCJ9LFxyXG4gICAgICBdfSxcclxuICAgICAge05hbWU6IFwiT3R0ZXIncyBCbGVzc2luZyBFbnJpY2htZW50XCIsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzkxOUQwMTdFQTUyQkQ3RDBFNjc3NzIwOEMyQ0UwRUEzQzE5RkE4Q0UvMjMxNDQxNC5wbmdcIixJdGVtczogW1xyXG4gICAgICAgIHtOYW1lOiBcIk90dGVyJ3MgQmxlc3NpbmcgRW5yaWNobWVudFwiLEl0ZW1JRDogOTM3OTgsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzkxOUQwMTdFQTUyQkQ3RDBFNjc3NzIwOEMyQ0UwRUEzQzE5RkE4Q0UvMjMxNDQxNC5wbmdcIn0sXHJcbiAgICAgIF19LFxyXG4gICAgICB7TmFtZTogXCJDZWxlYnJhdG9yeSBCaXJ0aGRheSBFbnJpY2htZW50XCIsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzc3RTU0QjkwRUZGRUFENTc2MTI1RTg5MTdFRjgwMzJDRkMyNjYwNEIvMjMyMzg2OS5wbmdcIixJdGVtczogW1xyXG4gICAgICAgIHtOYW1lOiBcIkNlbGVicmF0b3J5IEJpcnRoZGF5IEVucmljaG1lbnRcIixJdGVtSUQ6IDkzOTUzLEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS83N0U1NEI5MEVGRkVBRDU3NjEyNUU4OTE3RUY4MDMyQ0ZDMjY2MDRCLzIzMjM4NjkucG5nXCJ9LFxyXG4gICAgICBdfSxcclxuICAgICAge05hbWU6IFwiRnJvc3QgTGVnaW9uIEluZnVzaW9uXCIsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzNBN0QxMTdFREFGODA1Mzc2QTc4MzQwMTM0MDYyQTcxNzAzMTk1NDgvMjMxNDA4OC5wbmdcIixJdGVtczogW1xyXG4gICAgICAgIHtOYW1lOiBcIkZyb3N0IExlZ2lvbiBJbmZ1c2lvbiAoQ29uZGl0aW9uRGFtYWdlKVwiLEl0ZW1JRDogOTM3MjAsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzNBN0QxMTdFREFGODA1Mzc2QTc4MzQwMTM0MDYyQTcxNzAzMTk1NDgvMjMxNDA4OC5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiRnJvc3QgTGVnaW9uIEluZnVzaW9uIChIZWFsaW5nKVwiLEl0ZW1JRDogOTM3NTgsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzNBN0QxMTdFREFGODA1Mzc2QTc4MzQwMTM0MDYyQTcxNzAzMTk1NDgvMjMxNDA4OC5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiRnJvc3QgTGVnaW9uIEluZnVzaW9uIChUb3VnaG5lc3MpXCIsSXRlbUlEOiA5Mzc3MyxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvM0E3RDExN0VEQUY4MDUzNzZBNzgzNDAxMzQwNjJBNzE3MDMxOTU0OC8yMzE0MDg4LnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJGcm9zdCBMZWdpb24gSW5mdXNpb24gKENvbmNlbnRyYXRpb24pXCIsSXRlbUlEOiA5Mzc3NSxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvM0E3RDExN0VEQUY4MDUzNzZBNzgzNDAxMzQwNjJBNzE3MDMxOTU0OC8yMzE0MDg4LnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJGcm9zdCBMZWdpb24gSW5mdXNpb24gKFBvd2VyKVwiLEl0ZW1JRDogOTM4MjksSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzNBN0QxMTdFREFGODA1Mzc2QTc4MzQwMTM0MDYyQTcxNzAzMTk1NDgvMjMxNDA4OC5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiRnJvc3QgTGVnaW9uIEluZnVzaW9uIChFeHBlcnRpc2UpXCIsSXRlbUlEOiA5Mzg1OCxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvM0E3RDExN0VEQUY4MDUzNzZBNzgzNDAxMzQwNjJBNzE3MDMxOTU0OC8yMzE0MDg4LnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJGcm9zdCBMZWdpb24gSW5mdXNpb24gKFByZWNpc2lvbilcIixJdGVtSUQ6IDkzOTA2LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS8zQTdEMTE3RURBRjgwNTM3NkE3ODM0MDEzNDA2MkE3MTcwMzE5NTQ4LzIzMTQwODgucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIkZyb3N0IExlZ2lvbiBJbmZ1c2lvbiAoVml0YWxpdHkpXCIsSXRlbUlEOiA5MzkyMCxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvM0E3RDExN0VEQUY4MDUzNzZBNzgzNDAxMzQwNjJBNzE3MDMxOTU0OC8yMzE0MDg4LnBuZ1wifVxyXG4gICAgXX0sXHJcbiAgICB7TmFtZTogXCJKb3JtYWcgTGVmdCBFeWUgSW5mdXNpb25cIixJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvRTZDMTRFMzgwRDAyMjc0MzMyOTBDODBCMkRFQTBCN0Y3MUEyQjI2Ni8yNDMzMDc2LnBuZ1wiLEl0ZW1zOiBbXHJcbiAgICAgICAge05hbWU6IFwiSm9ybWFnIExlZnQgRXllIEluZnVzaW9uIChQb3dlcilcIixJdGVtSUQ6IDk0OTI5LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9FNkMxNEUzODBEMDIyNzQzMzI5MEM4MEIyREVBMEI3RjcxQTJCMjY2LzI0MzMwNzYucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIkpvcm1hZyBMZWZ0IEV5ZSBJbmZ1c2lvbiAoQ29uY2VudHJhdGlvbilcIixJdGVtSUQ6IDk0OTM3LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9FNkMxNEUzODBEMDIyNzQzMzI5MEM4MEIyREVBMEI3RjcxQTJCMjY2LzI0MzMwNzYucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIkpvcm1hZyBMZWZ0IEV5ZSBJbmZ1c2lvbiAoVml0YWxpdHkpXCIsSXRlbUlEOiA5NDk0NCxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvRTZDMTRFMzgwRDAyMjc0MzMyOTBDODBCMkRFQTBCN0Y3MUEyQjI2Ni8yNDMzMDc2LnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJKb3JtYWcgTGVmdCBFeWUgSW5mdXNpb24gKEhlYWxpbmcpXCIsSXRlbUlEOiA5NDk0OSxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvRTZDMTRFMzgwRDAyMjc0MzMyOTBDODBCMkRFQTBCN0Y3MUEyQjI2Ni8yNDMzMDc2LnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJKb3JtYWcgTGVmdCBFeWUgSW5mdXNpb24gKENvbmRpdGlvbkRhbWFnZSlcIixJdGVtSUQ6IDk0OTU0LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9FNkMxNEUzODBEMDIyNzQzMzI5MEM4MEIyREVBMEI3RjcxQTJCMjY2LzI0MzMwNzYucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIkpvcm1hZyBMZWZ0IEV5ZSBJbmZ1c2lvbiAoVG91Z2huZXNzKVwiLEl0ZW1JRDogOTQ5NjMsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlL0U2QzE0RTM4MEQwMjI3NDMzMjkwQzgwQjJERUEwQjdGNzFBMkIyNjYvMjQzMzA3Ni5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiSm9ybWFnIExlZnQgRXllIEluZnVzaW9uIChFeHBlcnRpc2UpXCIsSXRlbUlEOiA5NDk2OSxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvRTZDMTRFMzgwRDAyMjc0MzMyOTBDODBCMkRFQTBCN0Y3MUEyQjI2Ni8yNDMzMDc2LnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJKb3JtYWcgTGVmdCBFeWUgSW5mdXNpb24gKFByZWNpc2lvbilcIixJdGVtSUQ6IDk0OTgwLEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9FNkMxNEUzODBEMDIyNzQzMzI5MEM4MEIyREVBMEI3RjcxQTJCMjY2LzI0MzMwNzYucG5nXCJ9XHJcbiAgICBdfSxcclxuICAgIHtOYW1lOiBcIkpvcm1hZyBSaWdodCBFeWUgSW5mdXNpb25cIixJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvM0EwN0U5QTIyQTdCQzM0MEE3Q0QwQkFCMkM0MzVFREU0MkYwNjE0RC8yNDMzMDc3LnBuZ1wiLEl0ZW1zOiBbXHJcbiAgICAgICAge05hbWU6IFwiSm9ybWFnIFJpZ2h0IEV5ZSBJbmZ1c2lvbiAoSGVhbGluZylcIixJdGVtSUQ6IDk0OTM0LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS8zQTA3RTlBMjJBN0JDMzQwQTdDRDBCQUIyQzQzNUVERTQyRjA2MTRELzI0MzMwNzcucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIkpvcm1hZyBSaWdodCBFeWUgSW5mdXNpb24gKFZpdGFsaXR5KVwiLEl0ZW1JRDogOTQ5MzgsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzNBMDdFOUEyMkE3QkMzNDBBN0NEMEJBQjJDNDM1RURFNDJGMDYxNEQvMjQzMzA3Ny5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiSm9ybWFnIFJpZ2h0IEV5ZSBJbmZ1c2lvbiAoUG93ZXIpXCIsSXRlbUlEOiA5NDk0NixJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvM0EwN0U5QTIyQTdCQzM0MEE3Q0QwQkFCMkM0MzVFREU0MkYwNjE0RC8yNDMzMDc3LnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJKb3JtYWcgUmlnaHQgRXllIEluZnVzaW9uIChDb25jZW50cmF0aW9uKVwiLEl0ZW1JRDogOTQ5NDgsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzNBMDdFOUEyMkE3QkMzNDBBN0NEMEJBQjJDNDM1RURFNDJGMDYxNEQvMjQzMzA3Ny5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiSm9ybWFnIFJpZ2h0IEV5ZSBJbmZ1c2lvbiAoQ29uZGl0aW9uRGFtYWdlKVwiLEl0ZW1JRDogOTQ5NTgsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzNBMDdFOUEyMkE3QkMzNDBBN0NEMEJBQjJDNDM1RURFNDJGMDYxNEQvMjQzMzA3Ny5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiSm9ybWFnIFJpZ2h0IEV5ZSBJbmZ1c2lvbiAoVG91Z2huZXNzKVwiLEl0ZW1JRDogOTQ5NjIsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzNBMDdFOUEyMkE3QkMzNDBBN0NEMEJBQjJDNDM1RURFNDJGMDYxNEQvMjQzMzA3Ny5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiSm9ybWFnIFJpZ2h0IEV5ZSBJbmZ1c2lvbiAoRXhwZXJ0aXNlKVwiLEl0ZW1JRDogOTQ5NzIsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzNBMDdFOUEyMkE3QkMzNDBBN0NEMEJBQjJDNDM1RURFNDJGMDYxNEQvMjQzMzA3Ny5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiSm9ybWFnIFJpZ2h0IEV5ZSBJbmZ1c2lvbiAoUHJlY2lzaW9uKVwiLEl0ZW1JRDogOTQ5NzksSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzNBMDdFOUEyMkE3QkMzNDBBN0NEMEJBQjJDNDM1RURFNDJGMDYxNEQvMjQzMzA3Ny5wbmdcIn1cclxuICAgIF19LFxyXG4gICAge05hbWU6IFwiUHJpbW9yZHVzIExlZnQgRXllIEluZnVzaW9uXCIsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzQ5NzEwN0ZDNjJCMjY4QkIxNDUzREUzOUMwRDlDQzc4MUNFOEE4MEEvMjQzMzA3OC5wbmdcIixJdGVtczogW1xyXG4gICAgICAgIHtOYW1lOiBcIlByaW1vcmR1cyBMZWZ0IEV5ZSBJbmZ1c2lvbiAoUHJlY2lzaW9uKVwiLEl0ZW1JRDogOTQ5MzUsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzQ5NzEwN0ZDNjJCMjY4QkIxNDUzREUzOUMwRDlDQzc4MUNFOEE4MEEvMjQzMzA3OC5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiUHJpbW9yZHVzIExlZnQgRXllIEluZnVzaW9uIChIZWFsaW5nKVwiLEl0ZW1JRDogOTQ5NDMsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzQ5NzEwN0ZDNjJCMjY4QkIxNDUzREUzOUMwRDlDQzc4MUNFOEE4MEEvMjQzMzA3OC5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiUHJpbW9yZHVzIExlZnQgRXllIEluZnVzaW9uIChFeHBlcnRpc2UpXCIsSXRlbUlEOiA5NDk1MSxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvNDk3MTA3RkM2MkIyNjhCQjE0NTNERTM5QzBEOUNDNzgxQ0U4QTgwQS8yNDMzMDc4LnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJQcmltb3JkdXMgTGVmdCBFeWUgSW5mdXNpb24gKFRvdWdobmVzcylcIixJdGVtSUQ6IDk0OTU3LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS80OTcxMDdGQzYyQjI2OEJCMTQ1M0RFMzlDMEQ5Q0M3ODFDRThBODBBLzI0MzMwNzgucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIlByaW1vcmR1cyBMZWZ0IEV5ZSBJbmZ1c2lvbiAoQ29uZGl0aW9uRGFtYWdlKVwiLEl0ZW1JRDogOTQ5NjQsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzQ5NzEwN0ZDNjJCMjY4QkIxNDUzREUzOUMwRDlDQzc4MUNFOEE4MEEvMjQzMzA3OC5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiUHJpbW9yZHVzIExlZnQgRXllIEluZnVzaW9uIChDb25jZW50cmF0aW9uKVwiLEl0ZW1JRDogOTQ5NjUsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzQ5NzEwN0ZDNjJCMjY4QkIxNDUzREUzOUMwRDlDQzc4MUNFOEE4MEEvMjQzMzA3OC5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiUHJpbW9yZHVzIExlZnQgRXllIEluZnVzaW9uIChWaXRhbGl0eSlcIixJdGVtSUQ6IDk0OTcwLEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS80OTcxMDdGQzYyQjI2OEJCMTQ1M0RFMzlDMEQ5Q0M3ODFDRThBODBBLzI0MzMwNzgucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIlByaW1vcmR1cyBMZWZ0IEV5ZSBJbmZ1c2lvbiAoUG93ZXIpXCIsSXRlbUlEOiA5NDk3OCxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvNDk3MTA3RkM2MkIyNjhCQjE0NTNERTM5QzBEOUNDNzgxQ0U4QTgwQS8yNDMzMDc4LnBuZ1wifVxyXG4gICAgXX0sXHJcbiAgICB7TmFtZTogXCJQcmltb3JkdXMgUmlnaHQgRXllIEluZnVzaW9uXCIsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlL0Y4NkI5QkQzQTkyRDJEMzEyMTEyNzRGOTA4RjBDQzkxQjBEQ0QwNTUvMjQzMzA3OS5wbmdcIixJdGVtczogW1xyXG4gICAgICAgIHtOYW1lOiBcIlByaW1vcmR1cyBSaWdodCBFeWUgSW5mdXNpb24gKENvbmNlbnRyYXRpb24pXCIsSXRlbUlEOiA5NDkyOCxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvRjg2QjlCRDNBOTJEMkQzMTIxMTI3NEY5MDhGMENDOTFCMERDRDA1NS8yNDMzMDc5LnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJQcmltb3JkdXMgUmlnaHQgRXllIEluZnVzaW9uIChIZWFsaW5nKVwiLEl0ZW1JRDogOTQ5MzAsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlL0Y4NkI5QkQzQTkyRDJEMzEyMTEyNzRGOTA4RjBDQzkxQjBEQ0QwNTUvMjQzMzA3OS5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiUHJpbW9yZHVzIFJpZ2h0IEV5ZSBJbmZ1c2lvbiAoRXhwZXJ0aXNlKVwiLEl0ZW1JRDogOTQ5MzksSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlL0Y4NkI5QkQzQTkyRDJEMzEyMTEyNzRGOTA4RjBDQzkxQjBEQ0QwNTUvMjQzMzA3OS5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiUHJpbW9yZHVzIFJpZ2h0IEV5ZSBJbmZ1c2lvbiAoQ29uZGl0aW9uRGFtYWdlKVwiLEl0ZW1JRDogOTQ5NDEsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlL0Y4NkI5QkQzQTkyRDJEMzEyMTEyNzRGOTA4RjBDQzkxQjBEQ0QwNTUvMjQzMzA3OS5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiUHJpbW9yZHVzIFJpZ2h0IEV5ZSBJbmZ1c2lvbiAoVml0YWxpdHkpXCIsSXRlbUlEOiA5NDk1MixJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvRjg2QjlCRDNBOTJEMkQzMTIxMTI3NEY5MDhGMENDOTFCMERDRDA1NS8yNDMzMDc5LnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJQcmltb3JkdXMgUmlnaHQgRXllIEluZnVzaW9uIChQb3dlcilcIixJdGVtSUQ6IDk0OTU1LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9GODZCOUJEM0E5MkQyRDMxMjExMjc0RjkwOEYwQ0M5MUIwRENEMDU1LzI0MzMwNzkucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIlByaW1vcmR1cyBSaWdodCBFeWUgSW5mdXNpb24gKFByZWNpc2lvbilcIixJdGVtSUQ6IDk0OTcxLEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9GODZCOUJEM0E5MkQyRDMxMjExMjc0RjkwOEYwQ0M5MUIwRENEMDU1LzI0MzMwNzkucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIlByaW1vcmR1cyBSaWdodCBFeWUgSW5mdXNpb24gKFRvdWdobmVzcylcIixJdGVtSUQ6IDk0OTc3LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9GODZCOUJEM0E5MkQyRDMxMjExMjc0RjkwOEYwQ0M5MUIwRENEMDU1LzI0MzMwNzkucG5nXCJ9XHJcbiAgICBdfVxyXG4gICAgXSAgICBcclxuICB9LFxyXG4gIHtcclxuICAgIE5hbWU6XCJGcmFjdGFscyBvZiB0aGUgTWlzdHMgSW5mdXNpb25zXCIsXHJcbiAgICBHcm91cHM6W1xyXG4gICAgICB7TmFtZTogXCJDZWxlc3RpYWwgSW5mdXNpb24gKEJsdWUpXCIsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlL0NEQzAzNUU1MEJEQjUxQTJEMTRCMDg0MDc5MjE2MDYyMEUwRkU0NjgvMTcyOTI4Ni5wbmdcIixJdGVtczogW1xyXG4gICAgICAgIHtOYW1lOiBcIkNlbGVzdGlhbCBJbmZ1c2lvbiAoQmx1ZSkgKFByZWNpc2lvbilcIixJdGVtSUQ6IDgxNzYxLEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9DREMwMzVFNTBCREI1MUEyRDE0QjA4NDA3OTIxNjA2MjBFMEZFNDY4LzE3MjkyODYucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIkNlbGVzdGlhbCBJbmZ1c2lvbiAoQmx1ZSkgKFRvdWdobmVzcylcIixJdGVtSUQ6IDgxNzc5LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9DREMwMzVFNTBCREI1MUEyRDE0QjA4NDA3OTIxNjA2MjBFMEZFNDY4LzE3MjkyODYucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIkNlbGVzdGlhbCBJbmZ1c2lvbiAoQmx1ZSkgKEhlYWxpbmcpXCIsSXRlbUlEOiA4MTgxMSxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvQ0RDMDM1RTUwQkRCNTFBMkQxNEIwODQwNzkyMTYwNjIwRTBGRTQ2OC8xNzI5Mjg2LnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJDZWxlc3RpYWwgSW5mdXNpb24gKEJsdWUpIChWaXRhbGl0eSlcIixJdGVtSUQ6IDgxODc4LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9DREMwMzVFNTBCREI1MUEyRDE0QjA4NDA3OTIxNjA2MjBFMEZFNDY4LzE3MjkyODYucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIkNlbGVzdGlhbCBJbmZ1c2lvbiAoQmx1ZSkgKFBvd2VyKVwiLEl0ZW1JRDogODE5MTksSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlL0NEQzAzNUU1MEJEQjUxQTJEMTRCMDg0MDc5MjE2MDYyMEUwRkU0NjgvMTcyOTI4Ni5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiQ2VsZXN0aWFsIEluZnVzaW9uIChCbHVlKSAoQ29uZGl0aW9uRGFtYWdlKVwiLEl0ZW1JRDogODE5OTEsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlL0NEQzAzNUU1MEJEQjUxQTJEMTRCMDg0MDc5MjE2MDYyMEUwRkU0NjgvMTcyOTI4Ni5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiQ2VsZXN0aWFsIEluZnVzaW9uIChCbHVlKSAoRXhwZXJ0aXNlKVwiLEl0ZW1JRDogODU5ODksSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlL0NEQzAzNUU1MEJEQjUxQTJEMTRCMDg0MDc5MjE2MDYyMEUwRkU0NjgvMTcyOTI4Ni5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiQ2VsZXN0aWFsIEluZnVzaW9uIChCbHVlKSAoQ29uY2VudHJhdGlvbilcIixJdGVtSUQ6IDg2MzQ3LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9DREMwMzVFNTBCREI1MUEyRDE0QjA4NDA3OTIxNjA2MjBFMEZFNDY4LzE3MjkyODYucG5nXCJ9XHJcbiAgICBdfSxcclxuICAgIHtOYW1lOiBcIkNlbGVzdGlhbCBJbmZ1c2lvbiAoUmVkKVwiLEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9FMDUxMDgwNTA5NTVFM0Q0QTUwRTkxOTZDOEE1Q0RGRkI0RDdDODkxLzE3MjkyODcucG5nXCIsSXRlbXM6IFtcclxuICAgICAgICB7TmFtZTogXCJDZWxlc3RpYWwgSW5mdXNpb24gKFJlZCkgKFBvd2VyKVwiLEl0ZW1JRDogODE3ODMsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlL0UwNTEwODA1MDk1NUUzRDRBNTBFOTE5NkM4QTVDREZGQjREN0M4OTEvMTcyOTI4Ny5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiQ2VsZXN0aWFsIEluZnVzaW9uIChSZWQpIChQcmVjaXNpb24pXCIsSXRlbUlEOiA4MTc5MixJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvRTA1MTA4MDUwOTU1RTNENEE1MEU5MTk2QzhBNUNERkZCNEQ3Qzg5MS8xNzI5Mjg3LnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJDZWxlc3RpYWwgSW5mdXNpb24gKFJlZCkgKEhlYWxpbmcpXCIsSXRlbUlEOiA4MTgxNCxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvRTA1MTA4MDUwOTU1RTNENEE1MEU5MTk2QzhBNUNERkZCNEQ3Qzg5MS8xNzI5Mjg3LnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJDZWxlc3RpYWwgSW5mdXNpb24gKFJlZCkgKENvbmRpdGlvbkRhbWFnZSlcIixJdGVtSUQ6IDgxOTI3LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9FMDUxMDgwNTA5NTVFM0Q0QTUwRTkxOTZDOEE1Q0RGRkI0RDdDODkxLzE3MjkyODcucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIkNlbGVzdGlhbCBJbmZ1c2lvbiAoUmVkKSAoVml0YWxpdHkpXCIsSXRlbUlEOiA4MjA2MixJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvRTA1MTA4MDUwOTU1RTNENEE1MEU5MTk2QzhBNUNERkZCNEQ3Qzg5MS8xNzI5Mjg3LnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJDZWxlc3RpYWwgSW5mdXNpb24gKFJlZCkgKFRvdWdobmVzcylcIixJdGVtSUQ6IDgyMDcwLEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9FMDUxMDgwNTA5NTVFM0Q0QTUwRTkxOTZDOEE1Q0RGRkI0RDdDODkxLzE3MjkyODcucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIkNlbGVzdGlhbCBJbmZ1c2lvbiAoUmVkKSAoRXhwZXJ0aXNlKVwiLEl0ZW1JRDogODU2NDYsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlL0UwNTEwODA1MDk1NUUzRDRBNTBFOTE5NkM4QTVDREZGQjREN0M4OTEvMTcyOTI4Ny5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiQ2VsZXN0aWFsIEluZnVzaW9uIChSZWQpIChDb25jZW50cmF0aW9uKVwiLEl0ZW1JRDogODU4MzMsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlL0UwNTEwODA1MDk1NUUzRDRBNTBFOTE5NkM4QTVDREZGQjREN0M4OTEvMTcyOTI4Ny5wbmdcIn1cclxuICAgIF19LFxyXG4gICAge05hbWU6IFwiQWJ5c3NhbCBJbmZ1c2lvblwiLEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9GNDNFNkJCRkQyRkNBNDk2NjE2MDU1RUNGRDQ4OUI2RjI5RjJCMzBBLzIzMzIzNjQucG5nXCIsSXRlbXM6IFtcclxuICAgICAgICB7TmFtZTogXCJBYnlzc2FsIEluZnVzaW9uIChFeHBlcnRpc2UpXCIsSXRlbUlEOiA5NDAxMCxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvRjQzRTZCQkZEMkZDQTQ5NjYxNjA1NUVDRkQ0ODlCNkYyOUYyQjMwQS8yMzMyMzY0LnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJBYnlzc2FsIEluZnVzaW9uIChDb25jZW50cmF0aW9uKVwiLEl0ZW1JRDogOTQwMjQsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlL0Y0M0U2QkJGRDJGQ0E0OTY2MTYwNTVFQ0ZENDg5QjZGMjlGMkIzMEEvMjMzMjM2NC5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiQWJ5c3NhbCBJbmZ1c2lvbiAoSGVhbGluZylcIixJdGVtSUQ6IDk0MDI4LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9GNDNFNkJCRkQyRkNBNDk2NjE2MDU1RUNGRDQ4OUI2RjI5RjJCMzBBLzIzMzIzNjQucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIkFieXNzYWwgSW5mdXNpb24gKENvbmRpdGlvbkRhbWFnZSlcIixJdGVtSUQ6IDk0MDM5LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9GNDNFNkJCRkQyRkNBNDk2NjE2MDU1RUNGRDQ4OUI2RjI5RjJCMzBBLzIzMzIzNjQucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIkFieXNzYWwgSW5mdXNpb24gKFBvd2VyKVwiLEl0ZW1JRDogOTQwNzgsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlL0Y0M0U2QkJGRDJGQ0E0OTY2MTYwNTVFQ0ZENDg5QjZGMjlGMkIzMEEvMjMzMjM2NC5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiQWJ5c3NhbCBJbmZ1c2lvbiAoVG91Z2huZXNzKVwiLEl0ZW1JRDogOTQwNzksSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlL0Y0M0U2QkJGRDJGQ0E0OTY2MTYwNTVFQ0ZENDg5QjZGMjlGMkIzMEEvMjMzMjM2NC5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiQWJ5c3NhbCBJbmZ1c2lvbiAoVml0YWxpdHkpXCIsSXRlbUlEOiA5NDA5MCxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvRjQzRTZCQkZEMkZDQTQ5NjYxNjA1NUVDRkQ0ODlCNkYyOUYyQjMwQS8yMzMyMzY0LnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJBYnlzc2FsIEluZnVzaW9uIChQcmVjaXNpb24pXCIsSXRlbUlEOiA5NDA5MSxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvRjQzRTZCQkZEMkZDQTQ5NjYxNjA1NUVDRkQ0ODlCNkYyOUYyQjMwQS8yMzMyMzY0LnBuZ1wifVxyXG4gICAgXX1cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIE5hbWU6XCJIYWxsb3dlZW4gSW5mdXNpb25zXCIsXHJcbiAgICBHcm91cHM6W1xyXG4gICAgICB7TmFtZTogXCJQaG9zcGhvbHVtaW5lc2NlbnQgSW5mdXNpb25cIixJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvMDQ2MUMzN0VGRTdEMUM1MDcxNzRBMjI2QkEzNEFGMTYwQkU1QzY5My8xNTA4MTA4LnBuZ1wiLEl0ZW1zOiBbXHJcbiAgICAgICAge05hbWU6IFwiUGhvc3Bob2x1bWluZXNjZW50IEluZnVzaW9uIChQcmVjaXNpb24pXCIsSXRlbUlEOiA3OTYzOSxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvMDQ2MUMzN0VGRTdEMUM1MDcxNzRBMjI2QkEzNEFGMTYwQkU1QzY5My8xNTA4MTA4LnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJQaG9zcGhvbHVtaW5lc2NlbnQgSW5mdXNpb24gKFZpdGFsaXR5KVwiLEl0ZW1JRDogNzk2NTMsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzA0NjFDMzdFRkU3RDFDNTA3MTc0QTIyNkJBMzRBRjE2MEJFNUM2OTMvMTUwODEwOC5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiUGhvc3Bob2x1bWluZXNjZW50IEluZnVzaW9uIChUb3VnaG5lc3MpXCIsSXRlbUlEOiA3OTY2MSxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvMDQ2MUMzN0VGRTdEMUM1MDcxNzRBMjI2QkEzNEFGMTYwQkU1QzY5My8xNTA4MTA4LnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJQaG9zcGhvbHVtaW5lc2NlbnQgSW5mdXNpb24gKFBvd2VyKVwiLEl0ZW1JRDogNzk2NjUsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzA0NjFDMzdFRkU3RDFDNTA3MTc0QTIyNkJBMzRBRjE2MEJFNUM2OTMvMTUwODEwOC5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiUGhvc3Bob2x1bWluZXNjZW50IEluZnVzaW9uIChIZWFsaW5nKVwiLEl0ZW1JRDogNzk2NjksSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzA0NjFDMzdFRkU3RDFDNTA3MTc0QTIyNkJBMzRBRjE2MEJFNUM2OTMvMTUwODEwOC5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiUGhvc3Bob2x1bWluZXNjZW50IEluZnVzaW9uIChDb25kaXRpb25EYW1hZ2UpXCIsSXRlbUlEOiA3OTY3NCxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvMDQ2MUMzN0VGRTdEMUM1MDcxNzRBMjI2QkEzNEFGMTYwQkU1QzY5My8xNTA4MTA4LnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJQaG9zcGhvbHVtaW5lc2NlbnQgSW5mdXNpb24gKENvbmNlbnRyYXRpb24pXCIsSXRlbUlEOiA4NTg2MyxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvMDQ2MUMzN0VGRTdEMUM1MDcxNzRBMjI2QkEzNEFGMTYwQkU1QzY5My8xNTA4MTA4LnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJQaG9zcGhvbHVtaW5lc2NlbnQgSW5mdXNpb24gKEV4cGVydGlzZSlcIixJdGVtSUQ6IDg1ODg1LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS8wNDYxQzM3RUZFN0QxQzUwNzE3NEEyMjZCQTM0QUYxNjBCRTVDNjkzLzE1MDgxMDgucG5nXCJ9XHJcbiAgICBdfSxcclxuICAgIHtOYW1lOiBcIlBvbHlsdW1pbmVzY2VudCBVbmR1bGF0aW5nIEluZnVzaW9uIChCbGFjaylcIixJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvQjRDNjQ5MENBRTM3OUJCRDkwRUY2OEMwMEEyNjA0NDc3MzIxQjQ2OC84ODgzNzgucG5nXCIsSXRlbXM6IFtcclxuICAgICAgICB7TmFtZTogXCJQb2x5bHVtaW5lc2NlbnQgVW5kdWxhdGluZyBJbmZ1c2lvbiAoQmxhY2spIChUb3VnaG5lc3MpXCIsSXRlbUlEOiA4MTYyNCxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvQjRDNjQ5MENBRTM3OUJCRDkwRUY2OEMwMEEyNjA0NDc3MzIxQjQ2OC84ODgzNzgucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIlBvbHlsdW1pbmVzY2VudCBVbmR1bGF0aW5nIEluZnVzaW9uIChCbGFjaykgKFByZWNpc2lvbilcIixJdGVtSUQ6IDgxNzA5LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9CNEM2NDkwQ0FFMzc5QkJEOTBFRjY4QzAwQTI2MDQ0NzczMjFCNDY4Lzg4ODM3OC5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiUG9seWx1bWluZXNjZW50IFVuZHVsYXRpbmcgSW5mdXNpb24gKEJsYWNrKSAoVml0YWxpdHkpXCIsSXRlbUlEOiA4MTgxMCxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvQjRDNjQ5MENBRTM3OUJCRDkwRUY2OEMwMEEyNjA0NDc3MzIxQjQ2OC84ODgzNzgucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIlBvbHlsdW1pbmVzY2VudCBVbmR1bGF0aW5nIEluZnVzaW9uIChCbGFjaykgKENvbmRpdGlvbkRhbWFnZSlcIixJdGVtSUQ6IDgxODc3LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9CNEM2NDkwQ0FFMzc5QkJEOTBFRjY4QzAwQTI2MDQ0NzczMjFCNDY4Lzg4ODM3OC5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiUG9seWx1bWluZXNjZW50IFVuZHVsYXRpbmcgSW5mdXNpb24gKEJsYWNrKSAoUG93ZXIpXCIsSXRlbUlEOiA4MjAxMyxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvQjRDNjQ5MENBRTM3OUJCRDkwRUY2OEMwMEEyNjA0NDc3MzIxQjQ2OC84ODgzNzgucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIlBvbHlsdW1pbmVzY2VudCBVbmR1bGF0aW5nIEluZnVzaW9uIChCbGFjaykgKEhlYWxpbmcpXCIsSXRlbUlEOiA4MjAzOSxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvQjRDNjQ5MENBRTM3OUJCRDkwRUY2OEMwMEEyNjA0NDc3MzIxQjQ2OC84ODgzNzgucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIlBvbHlsdW1pbmVzY2VudCBVbmR1bGF0aW5nIEluZnVzaW9uIChCbGFjaykgKEV4cGVydGlzZSlcIixJdGVtSUQ6IDg1OTc0LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9CNEM2NDkwQ0FFMzc5QkJEOTBFRjY4QzAwQTI2MDQ0NzczMjFCNDY4Lzg4ODM3OC5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiUG9seWx1bWluZXNjZW50IFVuZHVsYXRpbmcgSW5mdXNpb24gKEJsYWNrKSAoQ29uY2VudHJhdGlvbilcIixJdGVtSUQ6IDg2MjQ4LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9CNEM2NDkwQ0FFMzc5QkJEOTBFRjY4QzAwQTI2MDQ0NzczMjFCNDY4Lzg4ODM3OC5wbmdcIn1cclxuICAgIF19LFxyXG4gICAge05hbWU6IFwiUG9seWx1bWluZXNjZW50IFVuZHVsYXRpbmcgSW5mdXNpb24gKEdyZWVuKVwiLEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS85N0VEQUY2NUZDRUNGODAyNTQ0REQ1NEIzNkRDM0EwOTMyM0IyNTRBLzg4ODM3NC5wbmdcIixJdGVtczogW1xyXG4gICAgICAgIHtOYW1lOiBcIlBvbHlsdW1pbmVzY2VudCBVbmR1bGF0aW5nIEluZnVzaW9uIChHcmVlbikgKFZpdGFsaXR5KVwiLEl0ZW1JRDogODE2MTIsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzk3RURBRjY1RkNFQ0Y4MDI1NDRERDU0QjM2REMzQTA5MzIzQjI1NEEvODg4Mzc0LnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJQb2x5bHVtaW5lc2NlbnQgVW5kdWxhdGluZyBJbmZ1c2lvbiAoR3JlZW4pIChQb3dlcilcIixJdGVtSUQ6IDgxNjc4LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS85N0VEQUY2NUZDRUNGODAyNTQ0REQ1NEIzNkRDM0EwOTMyM0IyNTRBLzg4ODM3NC5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiUG9seWx1bWluZXNjZW50IFVuZHVsYXRpbmcgSW5mdXNpb24gKEdyZWVuKSAoSGVhbGluZylcIixJdGVtSUQ6IDgxNzI3LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS85N0VEQUY2NUZDRUNGODAyNTQ0REQ1NEIzNkRDM0EwOTMyM0IyNTRBLzg4ODM3NC5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiUG9seWx1bWluZXNjZW50IFVuZHVsYXRpbmcgSW5mdXNpb24gKEdyZWVuKSAoUHJlY2lzaW9uKVwiLEl0ZW1JRDogODE5NDgsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzk3RURBRjY1RkNFQ0Y4MDI1NDRERDU0QjM2REMzQTA5MzIzQjI1NEEvODg4Mzc0LnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJQb2x5bHVtaW5lc2NlbnQgVW5kdWxhdGluZyBJbmZ1c2lvbiAoR3JlZW4pIChUb3VnaG5lc3MpXCIsSXRlbUlEOiA4MTk4OCxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvOTdFREFGNjVGQ0VDRjgwMjU0NERENTRCMzZEQzNBMDkzMjNCMjU0QS84ODgzNzQucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIlBvbHlsdW1pbmVzY2VudCBVbmR1bGF0aW5nIEluZnVzaW9uIChHcmVlbikgKENvbmRpdGlvbkRhbWFnZSlcIixJdGVtSUQ6IDgyMDU1LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS85N0VEQUY2NUZDRUNGODAyNTQ0REQ1NEIzNkRDM0EwOTMyM0IyNTRBLzg4ODM3NC5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiUG9seWx1bWluZXNjZW50IFVuZHVsYXRpbmcgSW5mdXNpb24gKEdyZWVuKSAoQ29uY2VudHJhdGlvbilcIixJdGVtSUQ6IDg1NjgyLEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS85N0VEQUY2NUZDRUNGODAyNTQ0REQ1NEIzNkRDM0EwOTMyM0IyNTRBLzg4ODM3NC5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiUG9seWx1bWluZXNjZW50IFVuZHVsYXRpbmcgSW5mdXNpb24gKEdyZWVuKSAoRXhwZXJ0aXNlKVwiLEl0ZW1JRDogODYxODMsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzk3RURBRjY1RkNFQ0Y4MDI1NDRERDU0QjM2REMzQTA5MzIzQjI1NEEvODg4Mzc0LnBuZ1wifVxyXG4gICAgXX0sXHJcbiAgICB7TmFtZTogXCJQb2x5bHVtaW5lc2NlbnQgVW5kdWxhdGluZyBJbmZ1c2lvbiAoT3JhbmdlKVwiLEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS8wNDA1MENDNTc2NERDMTk4RDgxMjY4MTJFNjYzMDVDNjc2OTU0RjBDLzg4ODM3Ni5wbmdcIixJdGVtczogW1xyXG4gICAgICAgIHtOYW1lOiBcIlBvbHlsdW1pbmVzY2VudCBVbmR1bGF0aW5nIEluZnVzaW9uIChPcmFuZ2UpIChQcmVjaXNpb24pXCIsSXRlbUlEOiA4MTgwOSxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvMDQwNTBDQzU3NjREQzE5OEQ4MTI2ODEyRTY2MzA1QzY3Njk1NEYwQy84ODgzNzYucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIlBvbHlsdW1pbmVzY2VudCBVbmR1bGF0aW5nIEluZnVzaW9uIChPcmFuZ2UpIChDb25kaXRpb25EYW1hZ2UpXCIsSXRlbUlEOiA4MTg0NyxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvMDQwNTBDQzU3NjREQzE5OEQ4MTI2ODEyRTY2MzA1QzY3Njk1NEYwQy84ODgzNzYucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIlBvbHlsdW1pbmVzY2VudCBVbmR1bGF0aW5nIEluZnVzaW9uIChPcmFuZ2UpIChQb3dlcilcIixJdGVtSUQ6IDgxODY0LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS8wNDA1MENDNTc2NERDMTk4RDgxMjY4MTJFNjYzMDVDNjc2OTU0RjBDLzg4ODM3Ni5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiUG9seWx1bWluZXNjZW50IFVuZHVsYXRpbmcgSW5mdXNpb24gKE9yYW5nZSkgKFRvdWdobmVzcylcIixJdGVtSUQ6IDgxODgxLEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS8wNDA1MENDNTc2NERDMTk4RDgxMjY4MTJFNjYzMDVDNjc2OTU0RjBDLzg4ODM3Ni5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiUG9seWx1bWluZXNjZW50IFVuZHVsYXRpbmcgSW5mdXNpb24gKE9yYW5nZSkgKFZpdGFsaXR5KVwiLEl0ZW1JRDogODE5MTEsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzA0MDUwQ0M1NzY0REMxOThEODEyNjgxMkU2NjMwNUM2NzY5NTRGMEMvODg4Mzc2LnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJQb2x5bHVtaW5lc2NlbnQgVW5kdWxhdGluZyBJbmZ1c2lvbiAoT3JhbmdlKSAoSGVhbGluZylcIixJdGVtSUQ6IDgxOTMwLEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS8wNDA1MENDNTc2NERDMTk4RDgxMjY4MTJFNjYzMDVDNjc2OTU0RjBDLzg4ODM3Ni5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiUG9seWx1bWluZXNjZW50IFVuZHVsYXRpbmcgSW5mdXNpb24gKE9yYW5nZSkgKEV4cGVydGlzZSlcIixJdGVtSUQ6IDg1Njk0LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS8wNDA1MENDNTc2NERDMTk4RDgxMjY4MTJFNjYzMDVDNjc2OTU0RjBDLzg4ODM3Ni5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiUG9seWx1bWluZXNjZW50IFVuZHVsYXRpbmcgSW5mdXNpb24gKE9yYW5nZSkgKENvbmNlbnRyYXRpb24pXCIsSXRlbUlEOiA4NjMxMCxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvMDQwNTBDQzU3NjREQzE5OEQ4MTI2ODEyRTY2MzA1QzY3Njk1NEYwQy84ODgzNzYucG5nXCJ9XHJcbiAgICBdfSxcclxuICAgIHtOYW1lOiBcIlBvbHlsdW1pbmVzY2VudCBVbmR1bGF0aW5nIEluZnVzaW9uIChUZWFsKVwiLEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS83QkIzQkY1N0UxMDYwQzBBMjkxOTI5MEZFMDNFMDRCQTZCMUVFOTUwLzE3MjkyODQucG5nXCIsSXRlbXM6IFtcclxuICAgICAgICB7TmFtZTogXCJQb2x5bHVtaW5lc2NlbnQgVW5kdWxhdGluZyBJbmZ1c2lvbiAoVGVhbCkgKFZpdGFsaXR5KVwiLEl0ZW1JRDogODE2NDEsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzdCQjNCRjU3RTEwNjBDMEEyOTE5MjkwRkUwM0UwNEJBNkIxRUU5NTAvMTcyOTI4NC5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiUG9seWx1bWluZXNjZW50IFVuZHVsYXRpbmcgSW5mdXNpb24gKFRlYWwpIChQb3dlcilcIixJdGVtSUQ6IDgxNjUzLEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS83QkIzQkY1N0UxMDYwQzBBMjkxOTI5MEZFMDNFMDRCQTZCMUVFOTUwLzE3MjkyODQucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIlBvbHlsdW1pbmVzY2VudCBVbmR1bGF0aW5nIEluZnVzaW9uIChUZWFsKSAoUHJlY2lzaW9uKVwiLEl0ZW1JRDogODE2NTUsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzdCQjNCRjU3RTEwNjBDMEEyOTE5MjkwRkUwM0UwNEJBNkIxRUU5NTAvMTcyOTI4NC5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiUG9seWx1bWluZXNjZW50IFVuZHVsYXRpbmcgSW5mdXNpb24gKFRlYWwpIChDb25kaXRpb25EYW1hZ2UpXCIsSXRlbUlEOiA4MTc3NyxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvN0JCM0JGNTdFMTA2MEMwQTI5MTkyOTBGRTAzRTA0QkE2QjFFRTk1MC8xNzI5Mjg0LnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJQb2x5bHVtaW5lc2NlbnQgVW5kdWxhdGluZyBJbmZ1c2lvbiAoVGVhbCkgKFRvdWdobmVzcylcIixJdGVtSUQ6IDgxODU4LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS83QkIzQkY1N0UxMDYwQzBBMjkxOTI5MEZFMDNFMDRCQTZCMUVFOTUwLzE3MjkyODQucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIlBvbHlsdW1pbmVzY2VudCBVbmR1bGF0aW5nIEluZnVzaW9uIChUZWFsKSAoSGVhbGluZylcIixJdGVtSUQ6IDgxOTU5LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS83QkIzQkY1N0UxMDYwQzBBMjkxOTI5MEZFMDNFMDRCQTZCMUVFOTUwLzE3MjkyODQucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIlBvbHlsdW1pbmVzY2VudCBVbmR1bGF0aW5nIEluZnVzaW9uIChUZWFsKSAoQ29uY2VudHJhdGlvbilcIixJdGVtSUQ6IDg2MDY4LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS83QkIzQkY1N0UxMDYwQzBBMjkxOTI5MEZFMDNFMDRCQTZCMUVFOTUwLzE3MjkyODQucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIlBvbHlsdW1pbmVzY2VudCBVbmR1bGF0aW5nIEluZnVzaW9uIChUZWFsKSAoRXhwZXJ0aXNlKVwiLEl0ZW1JRDogODYzMTIsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzdCQjNCRjU3RTEwNjBDMEEyOTE5MjkwRkUwM0UwNEJBNkIxRUU5NTAvMTcyOTI4NC5wbmdcIn1cclxuICAgIF19LFxyXG4gICAge05hbWU6IFwiUG9seXNhdHVyYXRpbmcgUmV2ZXJiZXJhdGluZyBJbmZ1c2lvbiAoR3JheSlcIixJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvN0NDOEY0MUQxRjNGMzIwRkQ3NUYwNENERTEyRTEzNUI5RTBGMERCQy8yMDU2MTkxLnBuZ1wiLEl0ZW1zOiBbXHJcbiAgICAgICAge05hbWU6IFwiUG9seXNhdHVyYXRpbmcgUmV2ZXJiZXJhdGluZyBJbmZ1c2lvbiAoR3JheSkgKENvbmRpdGlvbkRhbWFnZSlcIixJdGVtSUQ6IDg5MDA3LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS83Q0M4RjQxRDFGM0YzMjBGRDc1RjA0Q0RFMTJFMTM1QjlFMEYwREJDLzIwNTYxOTEucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIlBvbHlzYXR1cmF0aW5nIFJldmVyYmVyYXRpbmcgSW5mdXNpb24gKEdyYXkpIChFeHBlcnRpc2UpXCIsSXRlbUlEOiA4OTAxMixJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvN0NDOEY0MUQxRjNGMzIwRkQ3NUYwNENERTEyRTEzNUI5RTBGMERCQy8yMDU2MTkxLnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJQb2x5c2F0dXJhdGluZyBSZXZlcmJlcmF0aW5nIEluZnVzaW9uIChHcmF5KSAoUHJlY2lzaW9uKVwiLEl0ZW1JRDogODkwMTMsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzdDQzhGNDFEMUYzRjMyMEZENzVGMDRDREUxMkUxMzVCOUUwRjBEQkMvMjA1NjE5MS5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiUG9seXNhdHVyYXRpbmcgUmV2ZXJiZXJhdGluZyBJbmZ1c2lvbiAoR3JheSkgKFRvdWdobmVzcylcIixJdGVtSUQ6IDg5MDE2LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS83Q0M4RjQxRDFGM0YzMjBGRDc1RjA0Q0RFMTJFMTM1QjlFMEYwREJDLzIwNTYxOTEucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIlBvbHlzYXR1cmF0aW5nIFJldmVyYmVyYXRpbmcgSW5mdXNpb24gKEdyYXkpIChQb3dlcilcIixJdGVtSUQ6IDg5MDIwLEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS83Q0M4RjQxRDFGM0YzMjBGRDc1RjA0Q0RFMTJFMTM1QjlFMEYwREJDLzIwNTYxOTEucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIlBvbHlzYXR1cmF0aW5nIFJldmVyYmVyYXRpbmcgSW5mdXNpb24gKEdyYXkpIChWaXRhbGl0eSlcIixJdGVtSUQ6IDg5MDU0LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS83Q0M4RjQxRDFGM0YzMjBGRDc1RjA0Q0RFMTJFMTM1QjlFMEYwREJDLzIwNTYxOTEucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIlBvbHlzYXR1cmF0aW5nIFJldmVyYmVyYXRpbmcgSW5mdXNpb24gKEdyYXkpIChIZWFsaW5nKVwiLEl0ZW1JRDogODkwNzQsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzdDQzhGNDFEMUYzRjMyMEZENzVGMDRDREUxMkUxMzVCOUUwRjBEQkMvMjA1NjE5MS5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiUG9seXNhdHVyYXRpbmcgUmV2ZXJiZXJhdGluZyBJbmZ1c2lvbiAoR3JheSkgKENvbmNlbnRyYXRpb24pXCIsSXRlbUlEOiA4OTA3OCxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvN0NDOEY0MUQxRjNGMzIwRkQ3NUYwNENERTEyRTEzNUI5RTBGMERCQy8yMDU2MTkxLnBuZ1wifVxyXG4gICAgXX0sXHJcbiAgICB7TmFtZTogXCJQb2x5c2F0dXJhdGluZyBSZXZlcmJlcmF0aW5nIEluZnVzaW9uIChSZWQpXCIsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlL0YzMUZEMzE1NEM5RTQxRURCNkQxMjRFRkVGQTJCM0Y0RUE0NTUwNjkvMjA1NjE5My5wbmdcIixJdGVtczogW1xyXG4gICAgICAgIHtOYW1lOiBcIlBvbHlzYXR1cmF0aW5nIFJldmVyYmVyYXRpbmcgSW5mdXNpb24gKFJlZCkgKEhlYWxpbmcpXCIsSXRlbUlEOiA4OTAyNixJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvRjMxRkQzMTU0QzlFNDFFREI2RDEyNEVGRUZBMkIzRjRFQTQ1NTA2OS8yMDU2MTkzLnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJQb2x5c2F0dXJhdGluZyBSZXZlcmJlcmF0aW5nIEluZnVzaW9uIChSZWQpIChQcmVjaXNpb24pXCIsSXRlbUlEOiA4OTAyOCxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvRjMxRkQzMTU0QzlFNDFFREI2RDEyNEVGRUZBMkIzRjRFQTQ1NTA2OS8yMDU2MTkzLnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJQb2x5c2F0dXJhdGluZyBSZXZlcmJlcmF0aW5nIEluZnVzaW9uIChSZWQpIChDb25jZW50cmF0aW9uKVwiLEl0ZW1JRDogODkwMzIsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlL0YzMUZEMzE1NEM5RTQxRURCNkQxMjRFRkVGQTJCM0Y0RUE0NTUwNjkvMjA1NjE5My5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiUG9seXNhdHVyYXRpbmcgUmV2ZXJiZXJhdGluZyBJbmZ1c2lvbiAoUmVkKSAoVml0YWxpdHkpXCIsSXRlbUlEOiA4OTAzNCxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvRjMxRkQzMTU0QzlFNDFFREI2RDEyNEVGRUZBMkIzRjRFQTQ1NTA2OS8yMDU2MTkzLnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJQb2x5c2F0dXJhdGluZyBSZXZlcmJlcmF0aW5nIEluZnVzaW9uIChSZWQpIChFeHBlcnRpc2UpXCIsSXRlbUlEOiA4OTA1MixJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvRjMxRkQzMTU0QzlFNDFFREI2RDEyNEVGRUZBMkIzRjRFQTQ1NTA2OS8yMDU2MTkzLnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJQb2x5c2F0dXJhdGluZyBSZXZlcmJlcmF0aW5nIEluZnVzaW9uIChSZWQpIChQb3dlcilcIixJdGVtSUQ6IDg5MDU5LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9GMzFGRDMxNTRDOUU0MUVEQjZEMTI0RUZFRkEyQjNGNEVBNDU1MDY5LzIwNTYxOTMucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIlBvbHlzYXR1cmF0aW5nIFJldmVyYmVyYXRpbmcgSW5mdXNpb24gKFJlZCkgKENvbmRpdGlvbkRhbWFnZSlcIixJdGVtSUQ6IDg5MDcxLEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9GMzFGRDMxNTRDOUU0MUVEQjZEMTI0RUZFRkEyQjNGNEVBNDU1MDY5LzIwNTYxOTMucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIlBvbHlzYXR1cmF0aW5nIFJldmVyYmVyYXRpbmcgSW5mdXNpb24gKFJlZCkgKFRvdWdobmVzcylcIixJdGVtSUQ6IDg5MDc1LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9GMzFGRDMxNTRDOUU0MUVEQjZEMTI0RUZFRkEyQjNGNEVBNDU1MDY5LzIwNTYxOTMucG5nXCJ9XHJcbiAgICBdfSxcclxuICAgIHtOYW1lOiBcIlBvbHlzYXR1cmF0aW5nIFJldmVyYmVyYXRpbmcgSW5mdXNpb24gKFB1cnBsZSlcIixJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvNkY2NzU5RDNFNkQwNDNBM0RBQzNENkYxM0FFMURBMkY3RjIyN0MxQS8yMDU2MTkyLnBuZ1wiLEl0ZW1zOiBbXHJcbiAgICAgICAge05hbWU6IFwiUG9seXNhdHVyYXRpbmcgUmV2ZXJiZXJhdGluZyBJbmZ1c2lvbiAoUHVycGxlKSAoVG91Z2huZXNzKVwiLEl0ZW1JRDogODkwMDUsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzZGNjc1OUQzRTZEMDQzQTNEQUMzRDZGMTNBRTFEQTJGN0YyMjdDMUEvMjA1NjE5Mi5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiUG9seXNhdHVyYXRpbmcgUmV2ZXJiZXJhdGluZyBJbmZ1c2lvbiAoUHVycGxlKSAoUHJlY2lzaW9uKVwiLEl0ZW1JRDogODkwMTcsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzZGNjc1OUQzRTZEMDQzQTNEQUMzRDZGMTNBRTFEQTJGN0YyMjdDMUEvMjA1NjE5Mi5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiUG9seXNhdHVyYXRpbmcgUmV2ZXJiZXJhdGluZyBJbmZ1c2lvbiAoUHVycGxlKSAoVml0YWxpdHkpXCIsSXRlbUlEOiA4OTAzNyxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvNkY2NzU5RDNFNkQwNDNBM0RBQzNENkYxM0FFMURBMkY3RjIyN0MxQS8yMDU2MTkyLnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJQb2x5c2F0dXJhdGluZyBSZXZlcmJlcmF0aW5nIEluZnVzaW9uIChQdXJwbGUpIChIZWFsaW5nKVwiLEl0ZW1JRDogODkwMzksSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzZGNjc1OUQzRTZEMDQzQTNEQUMzRDZGMTNBRTFEQTJGN0YyMjdDMUEvMjA1NjE5Mi5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiUG9seXNhdHVyYXRpbmcgUmV2ZXJiZXJhdGluZyBJbmZ1c2lvbiAoUHVycGxlKSAoRXhwZXJ0aXNlKVwiLEl0ZW1JRDogODkwNDIsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzZGNjc1OUQzRTZEMDQzQTNEQUMzRDZGMTNBRTFEQTJGN0YyMjdDMUEvMjA1NjE5Mi5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiUG9seXNhdHVyYXRpbmcgUmV2ZXJiZXJhdGluZyBJbmZ1c2lvbiAoUHVycGxlKSAoQ29uY2VudHJhdGlvbilcIixJdGVtSUQ6IDg5MDQ5LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS82RjY3NTlEM0U2RDA0M0EzREFDM0Q2RjEzQUUxREEyRjdGMjI3QzFBLzIwNTYxOTIucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIlBvbHlzYXR1cmF0aW5nIFJldmVyYmVyYXRpbmcgSW5mdXNpb24gKFB1cnBsZSkgKFBvd2VyKVwiLEl0ZW1JRDogODkwNjMsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzZGNjc1OUQzRTZEMDQzQTNEQUMzRDZGMTNBRTFEQTJGN0YyMjdDMUEvMjA1NjE5Mi5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiUG9seXNhdHVyYXRpbmcgUmV2ZXJiZXJhdGluZyBJbmZ1c2lvbiAoUHVycGxlKSAoQ29uZGl0aW9uRGFtYWdlKVwiLEl0ZW1JRDogODkwNzAsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzZGNjc1OUQzRTZEMDQzQTNEQUMzRDZGMTNBRTFEQTJGN0YyMjdDMUEvMjA1NjE5Mi5wbmdcIn1cclxuICAgIF19LFxyXG4gICAge05hbWU6IFwiRW1iZXIgSW5mdXNpb25cIixJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvMjNFMUQ1NkYwQkQ2MUQwOTU4REM2MEJBNzcwQjFEQjBBQzAyMjcwRS8yMDU2MTkwLnBuZ1wiLEl0ZW1zOiBbXHJcbiAgICAgIHtOYW1lOiBcIkVtYmVyIEluZnVzaW9uIChIZWFsaW5nKVwiLEl0ZW1JRDogODkwMTAsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzIzRTFENTZGMEJENjFEMDk1OERDNjBCQTc3MEIxREIwQUMwMjI3MEUvMjA1NjE5MC5wbmdcIn0sXHJcbiAgICAgIHtOYW1lOiBcIkVtYmVyIEluZnVzaW9uIChWaXRhbGl0eSlcIixJdGVtSUQ6IDg5MDE1LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS8yM0UxRDU2RjBCRDYxRDA5NThEQzYwQkE3NzBCMURCMEFDMDIyNzBFLzIwNTYxOTAucG5nXCJ9LFxyXG4gICAgICB7TmFtZTogXCJFbWJlciBJbmZ1c2lvbiAoUHJlY2lzaW9uKVwiLEl0ZW1JRDogODkwMzgsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzIzRTFENTZGMEJENjFEMDk1OERDNjBCQTc3MEIxREIwQUMwMjI3MEUvMjA1NjE5MC5wbmdcIn0sXHJcbiAgICAgIHtOYW1lOiBcIkVtYmVyIEluZnVzaW9uIChFeHBlcnRpc2UpXCIsSXRlbUlEOiA4OTAyMSxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvMjNFMUQ1NkYwQkQ2MUQwOTU4REM2MEJBNzcwQjFEQjBBQzAyMjcwRS8yMDU2MTkwLnBuZ1wifSxcclxuICAgICAge05hbWU6IFwiRW1iZXIgSW5mdXNpb24gKENvbmNlbnRyYXRpb24pXCIsSXRlbUlEOiA4OTA0MCxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvMjNFMUQ1NkYwQkQ2MUQwOTU4REM2MEJBNzcwQjFEQjBBQzAyMjcwRS8yMDU2MTkwLnBuZ1wifSxcclxuICAgICAge05hbWU6IFwiRW1iZXIgSW5mdXNpb24gKFRvdWdobmVzcylcIixJdGVtSUQ6IDg5MDQ2LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS8yM0UxRDU2RjBCRDYxRDA5NThEQzYwQkE3NzBCMURCMEFDMDIyNzBFLzIwNTYxOTAucG5nXCJ9LFxyXG4gICAgICB7TmFtZTogXCJFbWJlciBJbmZ1c2lvbiAoQ29uZGl0aW9uRGFtYWdlKVwiLEl0ZW1JRDogODkwNjUsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzIzRTFENTZGMEJENjFEMDk1OERDNjBCQTc3MEIxREIwQUMwMjI3MEUvMjA1NjE5MC5wbmdcIn0sXHJcbiAgICAgIHtOYW1lOiBcIkVtYmVyIEluZnVzaW9uIChQb3dlcilcIixJdGVtSUQ6IDg5MDYwLEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS8yM0UxRDU2RjBCRDYxRDA5NThEQzYwQkE3NzBCMURCMEFDMDIyNzBFLzIwNTYxOTAucG5nXCJ9XHJcbiAgXX1cclxuICBdfSxcclxuICB7XHJcbiAgICBOYW1lOlwiU3VwZXIgQWR2ZW50dXJlIEJveCBJbmZ1c2lvbnNcIixcclxuICAgIEdyb3VwczpbXHJcbiAgICAgIHtOYW1lOiBcIk1vdG8ncyBVbnN0YWJsZSBCYXVibGUgSW5mdXNpb246IEJsdWVcIixJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvQUU1QUU3N0IxQjI5MUJBNkE0MThCOUY4MEI0M0NGM0Q0MzdEMDgwNi81NjE5ODMucG5nXCIsSXRlbXM6IFtcclxuICAgICAgICB7TmFtZTogXCJNb3RvJ3MgVW5zdGFibGUgQmF1YmxlIEluZnVzaW9uOiBCbHVlIChDb25kaXRpb25EYW1hZ2UpXCIsSXRlbUlEOiA3ODAxMixJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvQUU1QUU3N0IxQjI5MUJBNkE0MThCOUY4MEI0M0NGM0Q0MzdEMDgwNi81NjE5ODMucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIk1vdG8ncyBVbnN0YWJsZSBCYXVibGUgSW5mdXNpb246IEJsdWUgKFBvd2VyKVwiLEl0ZW1JRDogNzgwNTIsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlL0FFNUFFNzdCMUIyOTFCQTZBNDE4QjlGODBCNDNDRjNENDM3RDA4MDYvNTYxOTgzLnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJNb3RvJ3MgVW5zdGFibGUgQmF1YmxlIEluZnVzaW9uOiBCbHVlIChQcmVjaXNpb24pXCIsSXRlbUlEOiA3ODA1NCxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvQUU1QUU3N0IxQjI5MUJBNkE0MThCOUY4MEI0M0NGM0Q0MzdEMDgwNi81NjE5ODMucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIk1vdG8ncyBVbnN0YWJsZSBCYXVibGUgSW5mdXNpb246IEJsdWUgKEhlYWxpbmcpXCIsSXRlbUlEOiA3ODA3OSxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvQUU1QUU3N0IxQjI5MUJBNkE0MThCOUY4MEI0M0NGM0Q0MzdEMDgwNi81NjE5ODMucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIk1vdG8ncyBVbnN0YWJsZSBCYXVibGUgSW5mdXNpb246IEJsdWUgKFRvdWdobmVzcylcIixJdGVtSUQ6IDc4MDg2LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9BRTVBRTc3QjFCMjkxQkE2QTQxOEI5RjgwQjQzQ0YzRDQzN0QwODA2LzU2MTk4My5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiTW90bydzIFVuc3RhYmxlIEJhdWJsZSBJbmZ1c2lvbjogQmx1ZSAoVml0YWxpdHkpXCIsSXRlbUlEOiA3ODA5MCxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvQUU1QUU3N0IxQjI5MUJBNkE0MThCOUY4MEI0M0NGM0Q0MzdEMDgwNi81NjE5ODMucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIk1vdG8ncyBVbnN0YWJsZSBCYXVibGUgSW5mdXNpb246IEJsdWUgKENvbmNlbnRyYXRpb24pXCIsSXRlbUlEOiA4NjU1MixJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvQUU1QUU3N0IxQjI5MUJBNkE0MThCOUY4MEI0M0NGM0Q0MzdEMDgwNi81NjE5ODMucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIk1vdG8ncyBVbnN0YWJsZSBCYXVibGUgSW5mdXNpb246IEJsdWUgKEV4cGVydGlzZSlcIixJdGVtSUQ6IDg2NTcxLEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9BRTVBRTc3QjFCMjkxQkE2QTQxOEI5RjgwQjQzQ0YzRDQzN0QwODA2LzU2MTk4My5wbmdcIn1cclxuICAgIF19LFxyXG4gICAge05hbWU6IFwiTW90bydzIFVuc3RhYmxlIEJhdWJsZSBJbmZ1c2lvbjogUmVkXCIsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlL0FFNUFFNzdCMUIyOTFCQTZBNDE4QjlGODBCNDNDRjNENDM3RDA4MDYvNTYxOTgzLnBuZ1wiLEl0ZW1zOiBbXHJcbiAgICAgICAge05hbWU6IFwiTW90bydzIFVuc3RhYmxlIEJhdWJsZSBJbmZ1c2lvbjogUmVkIChIZWFsaW5nKVwiLEl0ZW1JRDogNzgwMTYsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlL0FFNUFFNzdCMUIyOTFCQTZBNDE4QjlGODBCNDNDRjNENDM3RDA4MDYvNTYxOTgzLnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJNb3RvJ3MgVW5zdGFibGUgQmF1YmxlIEluZnVzaW9uOiBSZWQgKFBvd2VyKVwiLEl0ZW1JRDogNzgwMjgsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlL0FFNUFFNzdCMUIyOTFCQTZBNDE4QjlGODBCNDNDRjNENDM3RDA4MDYvNTYxOTgzLnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJNb3RvJ3MgVW5zdGFibGUgQmF1YmxlIEluZnVzaW9uOiBSZWQgKFRvdWdobmVzcylcIixJdGVtSUQ6IDc4MDMwLEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9BRTVBRTc3QjFCMjkxQkE2QTQxOEI5RjgwQjQzQ0YzRDQzN0QwODA2LzU2MTk4My5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiTW90bydzIFVuc3RhYmxlIEJhdWJsZSBJbmZ1c2lvbjogUmVkIChQcmVjaXNpb24pXCIsSXRlbUlEOiA3ODAzMSxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvQUU1QUU3N0IxQjI5MUJBNkE0MThCOUY4MEI0M0NGM0Q0MzdEMDgwNi81NjE5ODMucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIk1vdG8ncyBVbnN0YWJsZSBCYXVibGUgSW5mdXNpb246IFJlZCAoQ29uZGl0aW9uRGFtYWdlKVwiLEl0ZW1JRDogNzgwNTcsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlL0FFNUFFNzdCMUIyOTFCQTZBNDE4QjlGODBCNDNDRjNENDM3RDA4MDYvNTYxOTgzLnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJNb3RvJ3MgVW5zdGFibGUgQmF1YmxlIEluZnVzaW9uOiBSZWQgKFZpdGFsaXR5KVwiLEl0ZW1JRDogNzgwOTcsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlL0FFNUFFNzdCMUIyOTFCQTZBNDE4QjlGODBCNDNDRjNENDM3RDA4MDYvNTYxOTgzLnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJNb3RvJ3MgVW5zdGFibGUgQmF1YmxlIEluZnVzaW9uOiBSZWQgKENvbmNlbnRyYXRpb24pXCIsSXRlbUlEOiA4NjQ0NixJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvQUU1QUU3N0IxQjI5MUJBNkE0MThCOUY4MEI0M0NGM0Q0MzdEMDgwNi81NjE5ODMucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIk1vdG8ncyBVbnN0YWJsZSBCYXVibGUgSW5mdXNpb246IFJlZCAoRXhwZXJ0aXNlKVwiLEl0ZW1JRDogODY0NTMsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlL0FFNUFFNzdCMUIyOTFCQTZBNDE4QjlGODBCNDNDRjNENDM3RDA4MDYvNTYxOTgzLnBuZ1wifVxyXG4gICAgXX1cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIE5hbWU6XCJXaW50ZXJzZGF5IEluZnVzaW9uc1wiLFxyXG4gICAgR3JvdXBzOltcclxuICAgICAge05hbWU6IFwiV2ludGVyJ3MgSGVhcnQgSW5mdXNpb25cIixJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvRUU2ODE2MEY1NzFGNTk1NDlCMDJDQTI0NkVEOTc0MkNFRENDOUFCNi8xNjE0Mzk3LnBuZ1wiLEl0ZW1zOiBbXHJcbiAgICAgICAge05hbWU6IFwiV2ludGVyJ3MgSGVhcnQgSW5mdXNpb24gKFZpdGFsaXR5KVwiLEl0ZW1JRDogNzk5NDMsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlL0VFNjgxNjBGNTcxRjU5NTQ5QjAyQ0EyNDZFRDk3NDJDRURDQzlBQjYvMTYxNDM5Ny5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiV2ludGVyJ3MgSGVhcnQgSW5mdXNpb24gKFByZWNpc2lvbilcIixJdGVtSUQ6IDc5OTU3LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9FRTY4MTYwRjU3MUY1OTU0OUIwMkNBMjQ2RUQ5NzQyQ0VEQ0M5QUI2LzE2MTQzOTcucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIldpbnRlcidzIEhlYXJ0IEluZnVzaW9uIChQb3dlcilcIixJdGVtSUQ6IDc5OTU5LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9FRTY4MTYwRjU3MUY1OTU0OUIwMkNBMjQ2RUQ5NzQyQ0VEQ0M5QUI2LzE2MTQzOTcucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIldpbnRlcidzIEhlYXJ0IEluZnVzaW9uIChIZWFsaW5nKVwiLEl0ZW1JRDogNzk5NzgsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlL0VFNjgxNjBGNTcxRjU5NTQ5QjAyQ0EyNDZFRDk3NDJDRURDQzlBQjYvMTYxNDM5Ny5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiV2ludGVyJ3MgSGVhcnQgSW5mdXNpb24gKENvbmRpdGlvbkRhbWFnZSlcIixJdGVtSUQ6IDc5OTk0LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9FRTY4MTYwRjU3MUY1OTU0OUIwMkNBMjQ2RUQ5NzQyQ0VEQ0M5QUI2LzE2MTQzOTcucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIldpbnRlcidzIEhlYXJ0IEluZnVzaW9uIChUb3VnaG5lc3MpXCIsSXRlbUlEOiA4MDA2MyxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvRUU2ODE2MEY1NzFGNTk1NDlCMDJDQTI0NkVEOTc0MkNFRENDOUFCNi8xNjE0Mzk3LnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJXaW50ZXIncyBIZWFydCBJbmZ1c2lvbiAoQ29uY2VudHJhdGlvbilcIixJdGVtSUQ6IDg1NzE4LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9FRTY4MTYwRjU3MUY1OTU0OUIwMkNBMjQ2RUQ5NzQyQ0VEQ0M5QUI2LzE2MTQzOTcucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIldpbnRlcidzIEhlYXJ0IEluZnVzaW9uIChFeHBlcnRpc2UpXCIsSXRlbUlEOiA4NTczNCxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvRUU2ODE2MEY1NzFGNTk1NDlCMDJDQTI0NkVEOTc0MkNFRENDOUFCNi8xNjE0Mzk3LnBuZ1wifVxyXG4gICAgXX0sXHJcbiAgICB7TmFtZTogXCJTbm93IERpYW1vbmQgSW5mdXNpb25cIixJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvRTM2RTRGMThGQkYxQTNBQ0VDMDk1Rjc1RkFFQzFERDkzN0RDRkYwMy8xOTE0ODIyLnBuZ1wiLEl0ZW1zOiBbXHJcbiAgICAgICAge05hbWU6IFwiU25vdyBEaWFtb25kIEluZnVzaW9uIChQb3dlcilcIixJdGVtSUQ6IDg2NDAxLEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9FMzZFNEYxOEZCRjFBM0FDRUMwOTVGNzVGQUVDMUREOTM3RENGRjAzLzE5MTQ4MjIucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIlNub3cgRGlhbW9uZCBJbmZ1c2lvbiAoSGVhbGluZylcIixJdGVtSUQ6IDg2NDA1LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9FMzZFNEYxOEZCRjFBM0FDRUMwOTVGNzVGQUVDMUREOTM3RENGRjAzLzE5MTQ4MjIucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIlNub3cgRGlhbW9uZCBJbmZ1c2lvbiAoUHJlY2lzaW9uKVwiLEl0ZW1JRDogODY0MDcsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlL0UzNkU0RjE4RkJGMUEzQUNFQzA5NUY3NUZBRUMxREQ5MzdEQ0ZGMDMvMTkxNDgyMi5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiU25vdyBEaWFtb25kIEluZnVzaW9uIChDb25kaXRpb25EYW1hZ2UpXCIsSXRlbUlEOiA4NjUzNyxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvRTM2RTRGMThGQkYxQTNBQ0VDMDk1Rjc1RkFFQzFERDkzN0RDRkYwMy8xOTE0ODIyLnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJTbm93IERpYW1vbmQgSW5mdXNpb24gKFZpdGFsaXR5KVwiLEl0ZW1JRDogODY1OTcsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlL0UzNkU0RjE4RkJGMUEzQUNFQzA5NUY3NUZBRUMxREQ5MzdEQ0ZGMDMvMTkxNDgyMi5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiU25vdyBEaWFtb25kIEluZnVzaW9uIChFeHBlcnRpc2UpXCIsSXRlbUlEOiA4NjY2NSxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvRTM2RTRGMThGQkYxQTNBQ0VDMDk1Rjc1RkFFQzFERDkzN0RDRkYwMy8xOTE0ODIyLnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJTbm93IERpYW1vbmQgSW5mdXNpb24gKENvbmNlbnRyYXRpb24pXCIsSXRlbUlEOiA4NjY2NixJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvRTM2RTRGMThGQkYxQTNBQ0VDMDk1Rjc1RkFFQzFERDkzN0RDRkYwMy8xOTE0ODIyLnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJTbm93IERpYW1vbmQgSW5mdXNpb24gKFRvdWdobmVzcylcIixJdGVtSUQ6IDg2NzA0LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9FMzZFNEYxOEZCRjFBM0FDRUMwOTVGNzVGQUVDMUREOTM3RENGRjAzLzE5MTQ4MjIucG5nXCJ9XHJcbiAgICBdfSxcclxuICAgIHtOYW1lOiBcIlRveS1TaGVsbCBJbmZ1c2lvblwiLEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9FQTJDRDgxOEM5NEEwNEMzQzhFNUM5OTc5MTc2RkVGNDIxMDIwMTE2LzIwNzU0OTIucG5nXCIsSXRlbXM6IFtcclxuICAgICAgICB7TmFtZTogXCJUb3ktU2hlbGwgSW5mdXNpb24gKFByZWNpc2lvbilcIixJdGVtSUQ6IDg5MzgyLEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9FQTJDRDgxOEM5NEEwNEMzQzhFNUM5OTc5MTc2RkVGNDIxMDIwMTE2LzIwNzU0OTIucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIlRveS1TaGVsbCBJbmZ1c2lvbiAoQ29uY2VudHJhdGlvbilcIixJdGVtSUQ6IDg5MzkxLEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9FQTJDRDgxOEM5NEEwNEMzQzhFNUM5OTc5MTc2RkVGNDIxMDIwMTE2LzIwNzU0OTIucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIlRveS1TaGVsbCBJbmZ1c2lvbiAoQ29uZGl0aW9uRGFtYWdlKVwiLEl0ZW1JRDogODk0MTEsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlL0VBMkNEODE4Qzk0QTA0QzNDOEU1Qzk5NzkxNzZGRUY0MjEwMjAxMTYvMjA3NTQ5Mi5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiVG95LVNoZWxsIEluZnVzaW9uIChQb3dlcilcIixJdGVtSUQ6IDg5NDAxLEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9FQTJDRDgxOEM5NEEwNEMzQzhFNUM5OTc5MTc2RkVGNDIxMDIwMTE2LzIwNzU0OTIucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIlRveS1TaGVsbCBJbmZ1c2lvbiAoRXhwZXJ0aXNlKVwiLEl0ZW1JRDogODk0MTMsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlL0VBMkNEODE4Qzk0QTA0QzNDOEU1Qzk5NzkxNzZGRUY0MjEwMjAxMTYvMjA3NTQ5Mi5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiVG95LVNoZWxsIEluZnVzaW9uIChWaXRhbGl0eSlcIixJdGVtSUQ6IDg5NDE1LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9FQTJDRDgxOEM5NEEwNEMzQzhFNUM5OTc5MTc2RkVGNDIxMDIwMTE2LzIwNzU0OTIucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIlRveS1TaGVsbCBJbmZ1c2lvbiAoSGVhbGluZylcIixJdGVtSUQ6IDg5NDI2LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9FQTJDRDgxOEM5NEEwNEMzQzhFNUM5OTc5MTc2RkVGNDIxMDIwMTE2LzIwNzU0OTIucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIlRveS1TaGVsbCBJbmZ1c2lvbiAoVG91Z2huZXNzKVwiLEl0ZW1JRDogODk0MjcsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlL0VBMkNEODE4Qzk0QTA0QzNDOEU1Qzk5NzkxNzZGRUY0MjEwMjAxMTYvMjA3NTQ5Mi5wbmdcIn1cclxuICAgIF19XHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICBOYW1lOiBcIk15c3RpYyBGb3JnZSBJbmZ1c2lvbnNcIixcclxuICAgIEdyb3VwczpbXHJcbiAgICAgIHtOYW1lOiBcIk15c3RpYyBJbmZ1c2lvblwiLEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9ERDFFMzBGRUQ1M0M5OTJDMDY3OUIzQTUwMzBGQzFCOTJGRTU2NDIzLzE3NjY4NzAucG5nXCIsSXRlbXM6IFtcclxuICAgICAgICB7TmFtZTogXCJNeXN0aWMgSW5mdXNpb24gKFZpdGFsaXR5KVwiLEl0ZW1JRDogOTA5NjYsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlL0REMUUzMEZFRDUzQzk5MkMwNjc5QjNBNTAzMEZDMUI5MkZFNTY0MjMvMTc2Njg3MC5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiTXlzdGljIEluZnVzaW9uIChDb25jZW50cmF0aW9uKVwiLEl0ZW1JRDogOTA5NzcsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlL0REMUUzMEZFRDUzQzk5MkMwNjc5QjNBNTAzMEZDMUI5MkZFNTY0MjMvMTc2Njg3MC5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiTXlzdGljIEluZnVzaW9uIChDb25kaXRpb25EYW1hZ2UpXCIsSXRlbUlEOiA5MDk4MixJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvREQxRTMwRkVENTNDOTkyQzA2NzlCM0E1MDMwRkMxQjkyRkU1NjQyMy8xNzY2ODcwLnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJNeXN0aWMgSW5mdXNpb24gKFByZWNpc2lvbilcIixJdGVtSUQ6IDkxMDUwLEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9ERDFFMzBGRUQ1M0M5OTJDMDY3OUIzQTUwMzBGQzFCOTJGRTU2NDIzLzE3NjY4NzAucG5nXCJ9LFxyXG4gICAgICAgIHtOYW1lOiBcIk15c3RpYyBJbmZ1c2lvbiAoVG91Z2huZXNzKVwiLEl0ZW1JRDogOTEwNTQsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlL0REMUUzMEZFRDUzQzk5MkMwNjc5QjNBNTAzMEZDMUI5MkZFNTY0MjMvMTc2Njg3MC5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiTXlzdGljIEluZnVzaW9uIChIZWFsaW5nKVwiLEl0ZW1JRDogOTEwODYsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlL0REMUUzMEZFRDUzQzk5MkMwNjc5QjNBNTAzMEZDMUI5MkZFNTY0MjMvMTc2Njg3MC5wbmdcIn0sXHJcbiAgICAgICAge05hbWU6IFwiTXlzdGljIEluZnVzaW9uIChFeHBlcnRpc2UpXCIsSXRlbUlEOiA5MTA5OSxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvREQxRTMwRkVENTNDOTkyQzA2NzlCM0E1MDMwRkMxQjkyRkU1NjQyMy8xNzY2ODcwLnBuZ1wifSxcclxuICAgICAgICB7TmFtZTogXCJNeXN0aWMgSW5mdXNpb24gKFBvd2VyKVwiLEl0ZW1JRDogOTExMTEsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlL0REMUUzMEZFRDUzQzk5MkMwNjc5QjNBNTAzMEZDMUI5MkZFNTY0MjMvMTc2Njg3MC5wbmdcIn1cclxuICAgIF19XHJcbiAgICBdXHJcbiAgfVxyXG5dIiwgImltcG9ydCB7IEl0ZW1DYXRlZ29yeSB9IGZyb20gXCJ+L3JvdXRlcy9JdGVtTGlzdHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBJTF9HYXRoZXJpbmdUb29scyA6IEl0ZW1DYXRlZ29yeVtdID0gXHJcbltcclxuICAgIHtcclxuICAgICAgICBOYW1lOlwiSW5maW5pdGUgR2F0aGVyaW5nIFRvb2xzXCIsXHJcbiAgICAgICAgR3JvdXBzOlsgICAgICAgICAgICBcclxuICAgICAgICAgICAge05hbWU6IFwiQ2hveWEgU2V0XCIsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzIwRjkwRkVDMjE5OEYxRUVCQzFCMTE1REEzMzkyODE5MDM3NTZGM0UvMjAyMjE0Ni5wbmdcIixJdGVtczogW1xyXG4gICAgICAgICAgICAgICAge05hbWU6IFwiQ2hveWEgTWluaW5nIFRvb2xcIixJdGVtSUQ6IDg4MzU1LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS8yMEY5MEZFQzIxOThGMUVFQkMxQjExNURBMzM5MjgxOTAzNzU2RjNFLzIwMjIxNDYucG5nXCJ9LFxyXG4gICAgICAgICAgICAgICAge05hbWU6IFwiQ2hveWEgTG9nZ2luZyBUb29sXCIsSXRlbUlEOiA4NzUzMCxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvQjY5ODkwNTYzRDUzOTU1ODA3QjZGQUM4NThFMjdERUVDMUE0RUFBQi8xOTgzNDU3LnBuZ1wifSxcclxuICAgICAgICAgICAgICAgIHtOYW1lOiBcIkNob3lhIEhhcnZlc3RpbmcgVG9vbFwiLEl0ZW1JRDogODc1NTQsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzA3NjdDQUY0OUNFRUQzNEQ2NTFDM0JCNzI5QjlBMTlFMUREQkE1NjYvMTk4NjEwNS5wbmdcIn1cclxuICAgICAgICAgICAgXX0sXHJcbiAgICAgICAgICAgIHtOYW1lOiBcIkNvc21pYyBTZXRcIixJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvQjVCREJFREUxQzlFQ0U2M0IzM0U3NUJBMEIxQ0I4NDAzQkNGQjQwMS8xNDMxNzIxLnBuZ1wiLEl0ZW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7TmFtZTogXCJDb3NtaWMgTWluaW5nIFRvb2xcIixJdGVtSUQ6IDc4NzMxLEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9CNUJEQkVERTFDOUVDRTYzQjMzRTc1QkEwQjFDQjg0MDNCQ0ZCNDAxLzE0MzE3MjEucG5nXCJ9LFxyXG4gICAgICAgICAgICAgICAge05hbWU6IFwiQ29zbWljIExvZ2dpbmcgVG9vbFwiLEl0ZW1JRDogNzk0NzIsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzA5RDcyMDM4RDlCQUYxQkUyRjRGQ0UwNTI3RjQyN0Q0Rjc2QjZGMEMvMTQ5MzI3MC5wbmdcIn0sXHJcbiAgICAgICAgICAgICAgICB7TmFtZTogXCJDb3NtaWMgSGFydmVzdGluZyBUb29sXCIsSXRlbUlEOiA3OTcyMSxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvMDkxQzYzMDlEMkNDM0UxNDYzRTNCQzA0NTU3RUI1MDk2REU5NTlGRS8xNjAxNDk2LnBuZ1wifVxyXG4gICAgICAgICAgICBdfSxcclxuICAgICAgICAgICAge05hbWU6IFwiRmx1dGUgU2V0XCIsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzAyNjQ4MEYwNTE0Rjk1N0MxRDNCMDY1QjI1MkQ0RDZCRDcwM0IyMUIvMTAyNDAyMi5wbmdcIixJdGVtczogW1xyXG4gICAgICAgICAgICAgICAge05hbWU6IFwiRmlyZWZseSBNaW5pbmcgRmx1dGVcIixJdGVtSUQ6IDY5OTU4LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS8wMjY0ODBGMDUxNEY5NTdDMUQzQjA2NUIyNTJENEQ2QkQ3MDNCMjFCLzEwMjQwMjIucG5nXCJ9LFxyXG4gICAgICAgICAgICAgICAge05hbWU6IFwiU3dhcm0gTG9nZ2luZyBGbHV0ZVwiLEl0ZW1JRDogNjk5MjEsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzdDMEJFMTcxNjVBMDdBQkIyNEUxOUQwQ0IxMEY0RjlERjlBQ0Y2M0UvMTAyNDAwOC5wbmdcIn0sXHJcbiAgICAgICAgICAgICAgICB7TmFtZTogXCJCdXR0ZXJmbHkgSGFydmVzdGluZyBGbHV0ZVwiLEl0ZW1JRDogNzAwNDQsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzZGNTE0NDM4NTE0NDA0RTk1QUJDRDYzRDNBMDlBQTQ4RTczNTM0QUMvMTAyNDAzNy5wbmdcIn1cclxuICAgICAgICAgICAgXX0sXHJcbiAgICAgICAgICAgIHtOYW1lOiBcIkdhZGdldGVlcidzIFNldFwiLEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS85RkUwNzYwNkRDMEY3MzI5RERCRTA0OTcyOTNBQTc2MjkzOTEwNDBELzcxMTk4MC5wbmdcIixJdGVtczogW1xyXG4gICAgICAgICAgICAgICAge05hbWU6IFwiV2F0Y2h3b3JrIE1pbmluZyBQaWNrXCIsSXRlbUlEOiA4NzQyMixJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvOUZFMDc2MDZEQzBGNzMyOUREQkUwNDk3MjkzQUE3NjI5MzkxMDQwRC83MTE5ODAucG5nXCJ9LFxyXG4gICAgICAgICAgICAgICAge05hbWU6IFwiV2F0Y2h3b3JrIE1pbmluZyBQaWNrXCIsSXRlbUlEOiA0Nzg5NyxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvOUZFMDc2MDZEQzBGNzMyOUREQkUwNDk3MjkzQUE3NjI5MzkxMDQwRC83MTE5ODAucG5nXCJ9LFxyXG4gICAgICAgICAgICAgICAge05hbWU6IFwiQ2hvcC1JdC1BbGwgTG9nZ2luZyBBeGVcIixJdGVtSUQ6IDQyOTMxLEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS8xNUNGOTdCQTdEQzU3M0UyQkNBODUyRkYxMzY0NzIxQjk4NTMxNDcwLzU5ODYwOC5wbmdcIn0sXHJcbiAgICAgICAgICAgICAgICB7TmFtZTogXCJDaG9wLUl0LUFsbCBMb2dnaW5nIEF4ZVwiLEl0ZW1JRDogNDg5MzEsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzE1Q0Y5N0JBN0RDNTczRTJCQ0E4NTJGRjEzNjQ3MjFCOTg1MzE0NzAvNTk4NjA4LnBuZ1wifSxcclxuICAgICAgICAgICAgICAgIHtOYW1lOiBcIlRocmVzaGVyLVNpY2tsZSA1MDAwXCIsSXRlbUlEOiA0OTMwOCxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvRjFDNTY1N0ZCNEY2RjI2OUU0NzYzRkE3NTQwNTVDOUE0RDEyNzMxMS83NDAzMjUucG5nXCJ9XHJcbiAgICAgICAgICAgIF19LFxyXG4gICAgICAgICAgICB7TmFtZTogXCJHbGFjaWFsIFNldFwiLEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS8wOTIzRDlDQzZEMEJCN0EyQTA0MTdGM0IxQzA5QTVCRDQyNkQ2NzA1LzIyNjEzODEucG5nXCIsSXRlbXM6IFtcclxuICAgICAgICAgICAgICAgIHtOYW1lOiBcIkdsYWNpYWwgTWluaW5nIFRvb2xcIixJdGVtSUQ6IDkyODkyLEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS8wOTIzRDlDQzZEMEJCN0EyQTA0MTdGM0IxQzA5QTVCRDQyNkQ2NzA1LzIyNjEzODEucG5nXCJ9LFxyXG4gICAgICAgICAgICAgICAge05hbWU6IFwiR2xhY2lhbCBMb2dnaW5nIFRvb2xcIixJdGVtSUQ6IDkyNjM0LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS83MURGQTkwOTA2NkQ1QUUyMDREMEYzRENBMDk4RURGMTA1Q0EwNjdCLzIyNDI2NjgucG5nXCJ9LFxyXG4gICAgICAgICAgICAgICAge05hbWU6IFwiR2xhY2lhbCBIYXJ2ZXN0aW5nIFRvb2xcIixJdGVtSUQ6IDkyODIyLEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9GQTBEMjdCNTQ1MUI3MEM5Q0QwMUY4MkNFQjREOTMzNDFGQjZDNDBELzIyNTY0MjEucG5nXCJ9XHJcbiAgICAgICAgICAgIF19LFxyXG4gICAgICAgICAgICB7TmFtZTogXCJNYWQgU2NpZW50aXN0J3MgU2V0XCIsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzc5NjIwOUU0MDEyRkUyNUM1M0QwQTA0QzFEREIwRkE1RDg3MDc5RjYvOTYwMjgwLnBuZ1wiLEl0ZW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7TmFtZTogXCJNYWQgU2NpZW50aXN0J3MgTWluaW5nIFRvb2xcIixJdGVtSUQ6IDY4OTA1LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS83OTYyMDlFNDAxMkZFMjVDNTNEMEEwNEMxRERCMEZBNUQ4NzA3OUY2Lzk2MDI4MC5wbmdcIn0sXHJcbiAgICAgICAgICAgICAgICB7TmFtZTogXCJNYWQgU2NpZW50aXN0J3MgTG9nZ2luZyBUb29sXCIsSXRlbUlEOiA2ODc5OSxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvQUZERUJERjQ2QUU4NTEzOTBCRTU3RUMyQ0VEQUY0MTcwM0I0M0MzNi85ODM1NTgucG5nXCJ9LFxyXG4gICAgICAgICAgICAgICAge05hbWU6IFwiTWFkIFNjaWVudGlzdCdzIEhhcnZlc3RpbmcgVG9vbFwiLEl0ZW1JRDogNjk0NzgsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlL0JCQzdFNEI3MDdDMzYyNERFRkIyMkM2MkZDMkM5MzkwNzQxRjA5MEQvOTc4MDEwLnBuZ1wifVxyXG4gICAgICAgICAgICBdfSxcclxuICAgICAgICAgICAge05hbWU6IFwiTWluaW9uIFNldFwiLEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS85ODI3QzUwNzE4MUM2QjMwNUVBMDI2QzJGMUVCNzQ0OEFBMzkwQ0Q1LzYzODM2Ny5wbmdcIixJdGVtczogW1xyXG4gICAgICAgICAgICAgICAge05hbWU6IFwiQm9uZSBQaWNrXCIsSXRlbUlEOiA0MzUyNyxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvOTgyN0M1MDcxODFDNkIzMDVFQTAyNkMyRjFFQjc0NDhBQTM5MENENS82MzgzNjcucG5nXCJ9LFxyXG4gICAgICAgICAgICAgICAge05hbWU6IFwiQm9uZSBQaWNrXCIsSXRlbUlEOiA0ODkzMixJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvOTgyN0M1MDcxODFDNkIzMDVFQTAyNkMyRjFFQjc0NDhBQTM5MENENS82MzgzNjcucG5nXCJ9LFxyXG4gICAgICAgICAgICAgICAge05hbWU6IFwiVGlyZWxlc3MgTG9nZ2luZyBNaW5pb25cIixJdGVtSUQ6IDY3MDI5LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS8yMEExN0Y5QjczNTZFRTM3RkVCMTAwM0I2NkQ0NkRCRjc1NUI0RDkxLzg4MjI1MC5wbmdcIn0sXHJcbiAgICAgICAgICAgICAgICB7TmFtZTogXCJUaXJlbGVzcyBIYXJ2ZXN0aW5nIE1pbmlvblwiLEl0ZW1JRDogNjcwNjMsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzY2QTA1NDQ5MTZCODZGMUUwMEYxNzNBQkI5NTU1RkM2RkRDRUNCRTAvODgyMjY0LnBuZ1wifVxyXG4gICAgICAgICAgICBdfSxcclxuICAgICAgICAgICAge05hbWU6IFwiTW9sdGVuIFNldFwiLEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9BQ0Y5MENBNkJDRDlDRUVGRDREMERDRUYyQUE4N0M5N0I1MEJEQzU2LzU2MTgxNS5wbmdcIixJdGVtczogW1xyXG4gICAgICAgICAgICAgICAge05hbWU6IFwiTW9sdGVuIEFsbGlhbmNlIE1pbmluZyBQaWNrXCIsSXRlbUlEOiA0MTgwNyxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvQUNGOTBDQTZCQ0Q5Q0VFRkQ0RDBEQ0VGMkFBODdDOTdCNTBCREM1Ni81NjE4MTUucG5nXCJ9LFxyXG4gICAgICAgICAgICAgICAge05hbWU6IFwiTW9sdGVuIEFsbGlhbmNlIE1pbmluZyBQaWNrXCIsSXRlbUlEOiA0ODkzMyxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvQUNGOTBDQTZCQ0Q5Q0VFRkQ0RDBEQ0VGMkFBODdDOTdCNTBCREM1Ni81NjE4MTUucG5nXCJ9LFxyXG4gICAgICAgICAgICAgICAge05hbWU6IFwiRnVzZWQgTW9sdGVuIExvZ2dpbmcgQXhlXCIsSXRlbUlEOiA2NzAzMCxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvRTMxODE4REQ0MDNCRTEyN0IyOUUyMTRDNzk1NkJGQTMwMUY2ODBEQS84NjY4MjkucG5nXCJ9LFxyXG4gICAgICAgICAgICAgICAge05hbWU6IFwiRnVzZWQgTW9sdGVuIFNpY2tsZVwiLEl0ZW1JRDogNjcwMzIsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzUxNzgyOTcxRUZDNkI4MEY0QjVCRDBGQjA4MEQwQ0ZGQTM3QjE1NzYvODY2ODMwLnBuZ1wifVxyXG4gICAgICAgICAgICBdfSxcclxuICAgICAgICAgICAge05hbWU6IFwiTmF0dXJhbCBEaXNhc3RlciBTZXRcIixJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvQkFBNkIwMEIxNDYwRDczMjQxREVCOUFFQTU0QkZDOTM5MEMyODA1RC8yMTA2ODUyLnBuZ1wiLEl0ZW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7TmFtZTogXCJFYXJ0aHNoYWtlciBNaW5pbmcgVG9vbFwiLEl0ZW1JRDogODkwODQsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlL0JBQTZCMDBCMTQ2MEQ3MzI0MURFQjlBRUE1NEJGQzkzOTBDMjgwNUQvMjEwNjg1Mi5wbmdcIn0sXHJcbiAgICAgICAgICAgICAgICB7TmFtZTogXCJGaXJlc3Rvcm0gTG9nZ2luZyBUb29sXCIsSXRlbUlEOiA4OTA4NixJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvMUVDNEQ4MkQwNzFBRDE0NkQxNDNDODMyNjFEQTRENjkzRDVGNDgwOS8yMDU5Nzg4LnBuZ1wifSxcclxuICAgICAgICAgICAgICAgIHtOYW1lOiBcIlRodW5kZXJzdHJpa2UgSGFydmVzdGluZyBUb29sXCIsSXRlbUlEOiA4OTM3MCxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvQkVFMUVBQjcxOTA3NzRCQjY1RUM1MEIwQzg5MkI2NDZCMzAxNEFEQS8yMDY5MzU0LnBuZ1wifVxyXG4gICAgICAgICAgICBdfSxcclxuICAgICAgICAgICAge05hbWU6IFwiUi1Ucm9uIFNldFwiLEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS82NDA2MEIxODcxRkJCOTQ3MkExODFCQjFGMjk2QjlDNEQ4MzFCNzI4LzkwNDY4NS5wbmdcIixJdGVtczogW1xyXG4gICAgICAgICAgICAgICAge05hbWU6IFwiTWluZS1yLVRyb25cIixJdGVtSUQ6IDY3Mzk2LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS82NDA2MEIxODcxRkJCOTQ3MkExODFCQjFGMjk2QjlDNEQ4MzFCNzI4LzkwNDY4NS5wbmdcIn0sXHJcbiAgICAgICAgICAgICAgICB7TmFtZTogXCJMb2ctci1Ucm9uXCIsSXRlbUlEOiA2NzM5NCxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvNjQ2MkExMzkwNjVCMjBFMjVEMzYyNjQxM0QwODBFQUM0MDQ2QjRFRS85MDQ2ODMucG5nXCJ9LFxyXG4gICAgICAgICAgICAgICAge05hbWU6IFwiUmVhcC1yLVRyb25cIixJdGVtSUQ6IDY3Mzk1LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9BQjkyNjc3Qzk1NUE3RUQ1QTVEMjU2NjJDNkYyMUM2OEYyNjI0NUExLzkwNDY4NC5wbmdcIn1cclxuICAgICAgICAgICAgXX0sXHJcbiAgICAgICAgICAgIHtOYW1lOiBcIlNreXNjYWxlIEhhdGNobGluZyBTZXRcIixJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvNjlGNDc1MzkwNkU5QUFGM0ZFRTgzODNBNjgwNUZEOUE3M0E5NTMwRS8yMTU1OTIyLnBuZ1wiLEl0ZW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7TmFtZTogXCJTa3lzY2FsZSBIYXRjaGxpbmcgTWluaW5nIFRvb2xcIixJdGVtSUQ6IDkxMTQ1LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS82OUY0NzUzOTA2RTlBQUYzRkVFODM4M0E2ODA1RkQ5QTczQTk1MzBFLzIxNTU5MjIucG5nXCJ9LFxyXG4gICAgICAgICAgICAgICAge05hbWU6IFwiU2t5c2NhbGUgSGF0Y2hsaW5nIExvZ2dpbmcgVG9vbFwiLEl0ZW1JRDogOTEzNzksSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzE1NkYxMTQ3Q0JGNjk0RUI1NDAxQzQ5MjQxOTU3MEU0RDUyQjRBRkQvMjE3NTAyMy5wbmdcIn0sXHJcbiAgICAgICAgICAgICAgICB7TmFtZTogXCJTa3lzY2FsZSBIYXRjaGxpbmcgSGFydmVzdGluZyBUb29sXCIsSXRlbUlEOiA5MDI4OCxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvNzE4MDFGNjBDRjUxOTQ1MDcyMjZCNUE0Q0I5RjUyMjAzOUI2QkM5MC8yMTQwNTcyLnBuZ1wifVxyXG4gICAgICAgICAgICBdfSxcclxuICAgICAgICAgICAge05hbWU6IFwiU3Bpcml0cyBvZiB0aGUgV2lsZCBTZXRcIixJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvREIzMjRGRkQwMzdENzMwN0I3QTI3Q0I4NUZFREQ1MEU5NDI0NDBCRS8yMzc1MDY5LnBuZ1wiLEl0ZW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7TmFtZTogXCJTcGlyaXQgb2YgQmVhciBNaW5pbmcgVG9vbFwiLEl0ZW1JRDogOTQzNzMsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlL0RCMzI0RkZEMDM3RDczMDdCN0EyN0NCODVGRURENTBFOTQyNDQwQkUvMjM3NTA2OS5wbmdcIn0sXHJcbiAgICAgICAgICAgICAgICB7TmFtZTogXCJTcGlyaXQgb2YgV29sZiBMb2dnaW5nIFRvb2xcIixJdGVtSUQ6IDk0MzYzLEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS8yNUFCMkFERjRDNUM2MTcwNzdDMDI4QjVBRDJDMUQzODlGN0U3QzVCLzIzNzUwNzEucG5nXCJ9LFxyXG4gICAgICAgICAgICAgICAge05hbWU6IFwiU3Bpcml0IG9mIFJhdmVuIEhhcnZlc3RpbmcgVG9vbFwiLEl0ZW1JRDogOTQzNjYsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzNDQzY5MjQxQjBEQTZDRDhDMkIxQUU1NjIxMjUyNUU3MERDQURFQkEvMjM3NTA3MC5wbmdcIn1cclxuICAgICAgICAgICAgXX0sXHJcbiAgICAgICAgICAgIHtOYW1lOiBcIlVuYm91bmQgTWFnaWMgU2V0XCIsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzY3N0VDRkQ4QzQ0MjNFRERDODM0QTc2OUEyMDg3NEE1RjVCM0NENUMvMTY5MTkwNC5wbmdcIixJdGVtczogW1xyXG4gICAgICAgICAgICAgICAge05hbWU6IFwiVW5ib3VuZCBNYWdpYyBNaW5pbmcgQmVhbVwiLEl0ZW1JRDogODA5NzcsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzY3N0VDRkQ4QzQ0MjNFRERDODM0QTc2OUEyMDg3NEE1RjVCM0NENUMvMTY5MTkwNC5wbmdcIn0sXHJcbiAgICAgICAgICAgICAgICB7TmFtZTogXCJVbmJvdW5kIE1hZ2ljIExvZ2dpbmcgUHVsc2VcIixJdGVtSUQ6IDgwOTc5LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS85NDJCRTMxNkEzNDBEQ0JCMTE1RDAzQzZBM0MwNjQ2QURBRjRCNDRBLzE2OTE5MDMucG5nXCJ9LFxyXG4gICAgICAgICAgICAgICAge05hbWU6IFwiVW5ib3VuZCBNYWdpYyBIYXJ2ZXN0aW5nIEJsYXN0XCIsSXRlbUlEOiA4MDk4NyxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvMEMzMEQ4RTVBNEJBQUUxMjNCQ0UwNkJFNDA2QzkzMkEzOEZFNjcyRS8xNjkxOTAyLnBuZ1wifVxyXG4gICAgICAgICAgICBdfSxcclxuICAgICAgICAgICAge05hbWU6IFwiVW5icmVha2FibGUgU2V0XCIsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzU0QUEyMjBGRjkwRUM5QzAwNUQ2OUExMDkxRDQ3NjM5RTk5RUI1OTAvMTQ1OTI5NS5wbmdcIixJdGVtczogW1xyXG4gICAgICAgICAgICAgICAge05hbWU6IFwiVW5icmVha2FibGUgTWluaW5nIFBpY2tcIixJdGVtSUQ6IDc4ODEyLEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS81NEFBMjIwRkY5MEVDOUMwMDVENjlBMTA5MUQ0NzYzOUU5OUVCNTkwLzE0NTkyOTUucG5nXCJ9LFxyXG4gICAgICAgICAgICAgICAge05hbWU6IFwiVW5icmVha2FibGUgTG9nZ2luZyBBeGVcIixJdGVtSUQ6IDc4ODA2LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9FODBBMTZERDI1OUZEOTNFMEUwRjVCMkFFMDlDNjBGNjBFMDdGOEM0LzE0NTkyOTQucG5nXCJ9LFxyXG4gICAgICAgICAgICAgICAge05hbWU6IFwiVW5icmVha2FibGUgSGFydmVzdGluZyBTaWNrbGVcIixJdGVtSUQ6IDc4OTk2LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9EQzkxMEI3OTIwQkRBNzAyQTVGN0ZFQUU0QTRCQUUzMkVGMENDMEE1LzE0NTkyOTgucG5nXCJ9XHJcbiAgICAgICAgICAgIF19LFxyXG4gICAgICAgICAgICB7TmFtZTogXCJWb2xhdGlsZSBNYWdpYyBTZXRcIixJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvRDc3RTkzRjBERkM2NkJDOTA1MEM3QzU3RUJCQTYyRTlDMzJEMENEMS8xOTk4OTM1LnBuZ1wiLEl0ZW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7TmFtZTogXCJWb2xhdGlsZSBNYWdpYyBNaW5pbmcgVG9vbFwiLEl0ZW1JRDogODc4NDEsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlL0Q3N0U5M0YwREZDNjZCQzkwNTBDN0M1N0VCQkE2MkU5QzMyRDBDRDEvMTk5ODkzNS5wbmdcIn0sXHJcbiAgICAgICAgICAgICAgICB7TmFtZTogXCJWb2xhdGlsZSBNYWdpYyBMb2dnaW5nIFRvb2xcIixJdGVtSUQ6IDg3OTU0LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS81ODExNDA0RUU0OUZBMzVBOTQwMjQ0RTlENTVDMkNGOEIwMEQ3RDYzLzE5OTg5MzQucG5nXCJ9LFxyXG4gICAgICAgICAgICAgICAge05hbWU6IFwiVm9sYXRpbGUgTWFnaWMgSGFydmVzdGluZyBUb29sXCIsSXRlbUlEOiA4NzcwMSxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvQTMyOUNGNkQ1ODJDQjhENEEzQjUyNTBCOUNDMkY2NzMzNUY3N0FCMC8xOTk4OTMzLnBuZ1wifVxyXG4gICAgICAgICAgICBdfSxcclxuICAgICAgICAgICAge05hbWU6IFwiT3RoZXJcIixJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvNTk2M0NFMTY0N0I1MDk1MTVERjdFREJCQkZGRDcyNkUyOEIwMzY1Mi8xNjI0MDIxLnBuZ1wiLEl0ZW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7TmFtZTogXCJDZWxlc3RpYWwgUm9vc3RlciBIYXJ2ZXN0aW5nIFRvb2xcIixJdGVtSUQ6IDgwMDY3LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS81OTYzQ0UxNjQ3QjUwOTUxNURGN0VEQkJCRkZENzI2RTI4QjAzNjUyLzE2MjQwMjEucG5nXCJ9LFxyXG4gICAgICAgICAgICAgICAge05hbWU6IFwiQ29uc29ydGl1bSBIYXJ2ZXN0aW5nIFNpY2tsZVwiLEl0ZW1JRDogNDI1OTQsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzE3RUVEOUQ4RjU3MEVGMUVGMDAwNDU1MzNGNjVDRDc5MUVBNEQwRkIvNTgyMzQ3LnBuZ1wifSxcclxuICAgICAgICAgICAgICAgIHtOYW1lOiBcIkNvbnNvcnRpdW0gSGFydmVzdGluZyBTaWNrbGVcIixJdGVtSUQ6IDQ4OTMwLEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS8xN0VFRDlEOEY1NzBFRjFFRjAwMDQ1NTMzRjY1Q0Q3OTFFQTREMEZCLzU4MjM0Ny5wbmdcIn0sXHJcbiAgICAgICAgICAgICAgICB7TmFtZTogXCJEcmVhbWNsZWF2ZXIgTG9nZ2luZyBBeGVcIixJdGVtSUQ6IDQ4OTU1LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS8wMzM0QUY2NkVCNUUxODJDNEMwRkIyNTc2QTMxQjhBMjUyOTJFOTUxLzY2NTgwOC5wbmdcIn0sXHJcbiAgICAgICAgICAgICAgICB7TmFtZTogXCJGb2N1c2VkIFNvbGFyIExvZ2dpbmcgVG9vbFwiLEl0ZW1JRDogNzg3MjQsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlL0E5QjExRTJBRUEwRTE0MkY0OEQ3NTNEQ0M2RDgwMzcyMDNDRTBDOUMvMTQ1OTI5My5wbmdcIn0sXHJcbiAgICAgICAgICAgICAgICB7TmFtZTogXCJGcm9zdCBXYXNwIExvZ2dpbmcgVG9vbFwiLEl0ZW1JRDogNDg4MjUsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlLzAyMjdDQjZDOTZEMkFDN0ZDMjBCNkQ0NjU0NzhFOUJCRjNFRDA5RDkvNzcxMDY2LnBuZ1wifSxcclxuICAgICAgICAgICAgICAgIHtOYW1lOiBcIkdsaXR0ZXIgQm9tYiBIYXJ2ZXN0aW5nIFRvb2xcIixJdGVtSUQ6IDc4OTA5LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS85NTFBQUE3MEU2NDVBMEQyRDdGOUI1MzkyNERDNEQxRkMzQkYzQzIwLzE0NTExODEucG5nXCJ9LFxyXG4gICAgICAgICAgICAgICAge05hbWU6IFwiSmFjay1pbi10aGUtQm94IFNjeXRoZVwiLEl0ZW1JRDogNDQ4NzYsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlL0I4RkFCM0NGNDQ5RDRCRjUwQkQyOUFFQTdCMUE3NTNGN0U1Q0U3OTIvNjQzMjgxLnBuZ1wifSxcclxuICAgICAgICAgICAgICAgIHtOYW1lOiBcIkphY2staW4tdGhlLUJveCBTY3l0aGVcIixJdGVtSUQ6IDQ4OTM0LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9COEZBQjNDRjQ0OUQ0QkY1MEJEMjlBRUE3QjFBNzUzRjdFNUNFNzkyLzY0MzI4MS5wbmdcIn0sXHJcbiAgICAgICAgICAgICAgICB7TmFtZTogXCJMdWNreSBEb2cgSGFydmVzdGluZyBUb29sXCIsSXRlbUlEOiA4Njk0MyxJY29uOiBcImh0dHBzOi8vcmVuZGVyLmd1aWxkd2FyczIuY29tL2ZpbGUvM0M3MDdBMjJDQTYwQUJCNDAzNEIxNEMxNEZFRjdBNkEwQjUzRENFNS8xOTM4NDU1LnBuZ1wifSxcclxuICAgICAgICAgICAgICAgIHtOYW1lOiBcIkx1Y2t5IERvZyBIYXJ2ZXN0aW5nIFRvb2xcIixJdGVtSUQ6IDg3Mzk3LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS8zQzcwN0EyMkNBNjBBQkI0MDM0QjE0QzE0RkVGN0E2QTBCNTNEQ0U1LzE5Mzg0NTUucG5nXCJ9LFxyXG4gICAgICAgICAgICAgICAge05hbWU6IFwiU2hpZnRpbmcgU2FuZHMgTWluaW5nIFBpY2tcIixJdGVtSUQ6IDg3NDI1LEljb246IFwiaHR0cHM6Ly9yZW5kZXIuZ3VpbGR3YXJzMi5jb20vZmlsZS9BOTVFMEI5RjExRDA5ODNCQUQwMjZERkVBRDBGN0I5NzIxNEM1RDI0LzE5NzI0MDcucG5nXCJ9LFxyXG4gICAgICAgICAgICAgICAge05hbWU6IFwiU3VwZXIgQWR2ZW50dXJlIExvZ2dpbmcgQmVhclwiLEl0ZW1JRDogODA5NjYsSWNvbjogXCJodHRwczovL3JlbmRlci5ndWlsZHdhcnMyLmNvbS9maWxlL0NFQTVDRjMxRDI5NTk2MThGNjIxMzY3RjI0RjIwRENCREE3QUY5NDIvMTY2Mzg5Ny5wbmdcIn1cclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIF1cclxuICAgIH0gICAgICAgXHJcbl0iLCAiaW1wb3J0IHtnZXREYn0gZnJvbSBcIi4uL0d3Mkl0ZW1EYi5zZXJ2ZXJcIlxyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGxvYWRlciA9IGFzeW5jICgpID0+IHtcclxuLy8gICAgIGNvbnN0IGRiID0gYXdhaXQgZ2V0RGIoKVxyXG4vLyAgICAgY29uc3QgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbi8vICAgICBjb25zdCByZXMgPSBhd2FpdCBkYi5hbGwoJ1NFTEVDVCAqIGZyb20gaXRlbXMgV0hFUkUgbmFtZT09JytVUkwpXHJcbi8vIH1cclxuXHJcblxyXG5mdW5jdGlvbiBteXNxbF9yZWFsX2VzY2FwZV9zdHJpbmcgKHN0cikge1xyXG4gIHJldHVybiBzdHIucmVwbGFjZSgvW1xcMFxceDA4XFx4MDlcXHgxYVxcblxcclwiJ1xcXFxcXCVdL2csIGZ1bmN0aW9uIChjaGFyKSB7XHJcbiAgICAgIHN3aXRjaCAoY2hhcikge1xyXG4gICAgICAgICAgY2FzZSBcIlxcMFwiOlxyXG4gICAgICAgICAgICAgIHJldHVybiBcIlxcXFwwXCI7XHJcbiAgICAgICAgICBjYXNlIFwiXFx4MDhcIjpcclxuICAgICAgICAgICAgICByZXR1cm4gXCJcXFxcYlwiO1xyXG4gICAgICAgICAgY2FzZSBcIlxceDA5XCI6XHJcbiAgICAgICAgICAgICAgcmV0dXJuIFwiXFxcXHRcIjtcclxuICAgICAgICAgIGNhc2UgXCJcXHgxYVwiOlxyXG4gICAgICAgICAgICAgIHJldHVybiBcIlxcXFx6XCI7XHJcbiAgICAgICAgICBjYXNlIFwiXFxuXCI6XHJcbiAgICAgICAgICAgICAgcmV0dXJuIFwiXFxcXG5cIjtcclxuICAgICAgICAgIGNhc2UgXCJcXHJcIjpcclxuICAgICAgICAgICAgICByZXR1cm4gXCJcXFxcclwiO1xyXG4gICAgICAgICAgY2FzZSBcIlxcXCJcIjpcclxuICAgICAgICAgIGNhc2UgXCInXCI6XHJcbiAgICAgICAgICBjYXNlIFwiXFxcXFwiOlxyXG4gICAgICAgICAgY2FzZSBcIiVcIjpcclxuICAgICAgICAgICAgICByZXR1cm4gXCJcXFxcXCIrY2hhcjsgLy8gcHJlcGVuZHMgYSBiYWNrc2xhc2ggdG8gYmFja3NsYXNoLCBwZXJjZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFuZCBkb3VibGUvc2luZ2xlIHF1b3Rlc1xyXG4gICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICByZXR1cm4gY2hhcjtcclxuICAgICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyBpZiB0aGUgdXNlciB2aXNpdHMgL2ludm9pY2VzLzEyM1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZGVyKHtcclxuICAgIHJlcXVlc3QsXHJcbiAgfTogTG9hZGVyRnVuY3Rpb25BcmdzKSB7XHJcblxyXG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybClcclxuICAgIGNvbnN0IGRiID0gYXdhaXQgZ2V0RGIoKVxyXG4gICAgbGV0IHNlYXJjaF9pbnB1dCA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KCdxJyk7XHJcbiAgICBzZWFyY2hfaW5wdXQgPSBteXNxbF9yZWFsX2VzY2FwZV9zdHJpbmcoc2VhcmNoX2lucHV0KVxyXG4gICAgY29uc3QgcXVlcnkgPSAnU0VMRUNUICogRlJPTSBpdGVtcyBXSEVSRSBuYW1lIExJS0UgXCIlJytzZWFyY2hfaW5wdXQgKyclXCInXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBkYi5hbGwocXVlcnkpXHJcbiAgICByZXR1cm4gcmVzXHJcbiAgfSIsICJpbXBvcnQgeyBvcGVuIH0gZnJvbSAnc3FsaXRlJ1xyXG5pbXBvcnQgc3FsaXRlMyBmcm9tICdzcWxpdGUzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldERiID0gYXN5bmMoKSA9PiB7XHJcbiAgICBjb25zdCBkYiA9IGF3YWl0KG9wZW4oe1xyXG4gICAgICAgIGZpbGVuYW1lOiBcIi4vYXBwL2RhdGEvaXRlbXMuZGJcIixcclxuICAgICAgICBkcml2ZXI6IHNxbGl0ZTMuRGF0YWJhc2VcclxuICAgIH0pKVxyXG4gICAgcmV0dXJuIGRiXHJcbn0iLCAiaW1wb3J0IHsgQ29kZUljb24sIE1haWxJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgU29jaWFsSWNvbiB9IGZyb20gXCJyZWFjdC1zb2NpYWwtaWNvbnNcIlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBYm91dCgpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1wcmltYXJ5IG91dGxpbmUgcm91bmRlZC0yeGwgb3V0bGluZS0yIG91dGxpbmUtc2Vjb25kYXJ5IG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctc3BcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWF1dG8gdy1mdWxsIGJnLXNlY29uZGFyeSBwLTMgdGV4dC13aGl0ZSB0ZXh0LW1kIG91dGxpbmUtc2Vjb25kYXJ5IG91dGxpbmUgb3V0bGluZS01XCI+PGgyIGNsYXNzTmFtZT1cInRleHQtbWRcIj5BYm91dDwvaDI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IHRleHQteHMgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBoLTUgdy1mdWxsIHB0LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5DcmVhdGVkIGJ5IEFsZXhhbmRlciBLb25yYWQgKEhwcHlEZWRQeGwuNzUwOCk8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtMlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGgtNSB3LWZ1bGwgcHQtMVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGlnbi1taWRkbGVcIj48U29jaWFsSWNvbiBuZXR3b3JrPVwidHdpdHRlclwic3R5bGU9e3toZWlnaHQ6XCIxNHB4XCIsd2lkdGg6XCIxNHB4XCJ9fSBjb2xvcj1cIndoaXRlXCI+PC9Tb2NpYWxJY29uPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXggcGwtMVwiPjxhIGNsYXNzTmFtZT1cInRleHQtbGluayBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOnRyYW5zaXRpb24tYWxsIHRyYW5zaXRpb24tYWxsXCIgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vSHBweVB4bFwiIHRhcmdldD1cIl9ibGFua1wiPkBIcHB5UHhsPC9hPjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGgtNSB3LWZ1bGwgcHQtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2RlSWNvbiBjbGFzc05hbWU9XCJmbGV4IHByLTFcIiBjb2xvcj1cIndoaXRlXCIgZm9udFNpemU9ezJ9PjwvQ29kZUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleFwiPjxhIGNsYXNzTmFtZT1cInRleHQtbGluayBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOnRyYW5zaXRpb24tYWxsIHRyYW5zaXRpb24tYWxsXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9IcHB5RGVkUHhsL2d3Ml9pdGVtX2ZpbmRlclwiIHRhcmdldD1cIl9ibGFua1wiPkZpbmQgdGhlIFNvdXJjZSBvbiBHaXRodWI8L2E+PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaC01IHctZnVsbCBwdC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1haWxJY29uIGNsYXNzTmFtZT1cImZsZXggcHItMVwiIGNvbG9yPVwid2hpdGVcIiBmb250U2l6ZT17Mn0+PC9NYWlsSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4XCI+YWxleGFuZGVyQHRoZWxhenlkZXYubmV0PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlNwZWNpYWwgVGhhbmtzOjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTFcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaC01IHctZnVsbCBwdC0xXCI+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxpZ24tbWlkZGxlXCI+PFNvY2lhbEljb24gbmV0d29yaz1cInR3aXR0ZXJcIiBzdHlsZT17e2hlaWdodDpcIjE0cHhcIix3aWR0aDpcIjE0cHhcIn19IGNvbG9yPVwid2hpdGVcIj48L1NvY2lhbEljb24+PC9kaXY+ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXggcGwtMVwiPjxhIGNsYXNzTmFtZT1cInRleHQtbGluayBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOnRyYW5zaXRpb24tYWxsIHRyYW5zaXRpb24tYWxsXCIgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vUm9saWxpY2hhblwiIHRhcmdldD1cIl9ibGFua1wiPkBSb2xpbGljaGFuIChMb2dvIERlc2lnbik8L2E+IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC02XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cD5Tb21ldGhpbmcgbm90IHdvcmtpbmcgYXMgZXhwZWN0ZWQ/PC9wPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTFcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyB3LWZ1bGwgcHQtMVwiPiAgICBcclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJhbnNpdGlvbi1hbGwgaG92ZXI6dHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IGgtNiB3LWZ1bGwgYmctaW5mbyAgdGV4dC1ibGFjayBob3Zlcjp0ZXh0LWdyYXkgcm91bmRlZC0zeGwgaG92ZXI6cm91bmRlZC1tZCBteC0xXCIgb25DbGljaz17KGUpPT57ZS5wcmV2ZW50RGVmYXVsdCgpOyB3aW5kb3cub3BlbignaHR0cHM6Ly9zdGF0dXMuZ3cyZWZmaWNpZW5jeS5jb20vJywnX2JsYW5rJyl9fT5DaGVjayB0aGUgQVBJIFN0YXR1cyE8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHJhbnNpdGlvbi1hbGwgaG92ZXI6dHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IGgtNiB3LWZ1bGwgYmctbmVnYXRpdmUgIHRleHQtYmxhY2sgaG92ZXI6dGV4dC1ncmF5IHJvdW5kZWQtM3hsIGhvdmVyOnJvdW5kZWQtbWQgbXgtMVwiIG9uQ2xpY2s9eyhlKT0+e2UucHJldmVudERlZmF1bHQoKTsgd2luZG93Lm9wZW4oJ2h0dHBzOi8vZ2l0aHViLmNvbS9IcHB5RGVkUHhsL2d3Ml9pdGVtX2ZpbmRlci9pc3N1ZXMnLCdfYmxhbmsnKX19PkNyZWF0ZSBhIGJ1ZyByZXBvcnQhPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59IiwgIlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb3d0bygpIHtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXByaW1hcnkgb3V0bGluZSByb3VuZGVkLTJ4bCBvdXRsaW5lLTIgb3V0bGluZS1zZWNvbmRhcnkgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy1zcFwiPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWF1dG8gdy1mdWxsIGJnLXNlY29uZGFyeSBwLTMgdGV4dC13aGl0ZSB0ZXh0LW1kIG91dGxpbmUtc2Vjb25kYXJ5IG91dGxpbmUgb3V0bGluZS01XCI+PGgyIGNsYXNzTmFtZT1cInRleHQtbWRcIj5TZXR0aW5nIHVwIHlvdXIgQWNjb3VudDwvaDI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJsaXN0LWRpc2MgdGV4dC13aGl0ZSB0ZXN0LXN4IHRleHQteHMgcHgtNSBweS01XCIgdHlwZT1cIjFcIj5cclxuICAgICAgICAgICAgICAgIDxsaSB0eXBlPVwiMVwiIGNsYXNzTmFtZT1cImxpc3QtaW5zaWRlXCI+SGVhZCBvdmVyIHRvIHRoZSA8YSBjbGFzc05hbWU9XCJ0ZXh0LWxpbmsgaG92ZXI6dGV4dC13aGl0ZSBob3Zlcjp0cmFuc2l0aW9uLWFsbCB0cmFuc2l0aW9uLWFsbFwiIGhyZWY9XCJodHRwczovL2FjY291bnQuYXJlbmEubmV0L2FwcGxpY2F0aW9uc1wiIHRhcmdldD1cIl9ibGFua1wiPkd1aWxkIFdhcnMgMiBBUEkgS2V5IE1hbmFnZW1lbnQ8L2E+LjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgdHlwZT1cIjFcIiBjbGFzc05hbWU9XCJsaXN0LWluc2lkZVwiPkNsaWNrIG9uIHRoZSBcIk5ldyBLZXlcIiBidXR0b24uPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSB0eXBlPVwiMVwiIGNsYXNzTmFtZT1cImxpc3QtaW5zaWRlXCI+RW50ZXIgYSBuYW1lIG9mIHlvdXIgY2hvaWNlIGFuZCBjaGVjayBhdCBsZWFzdCB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb25zLlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjM1JVwiLG1hcmdpbkxlZnQ6XCJhdXRvXCIsbWFyZ2luUmlnaHQ6XCJhdXRvXCIscGFkZGluZ1RvcDpcIjhweFwiLHBhZGRpbmdCb3R0b206XCI4cHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwidHV0b19wZXJtaXNzaW9ucy5wbmdcIiB0YXJnZXQ9XCJfYmxhbmtcIj48aW1nIGNsYXNzTmFtZT1cImJvcmRlci1zb2xpZCBib3JkZXItZ3JheS01MDAgcm91bmRlZC1tZCBib3JkZXItMiBwLTFcIiBzcmM9XCJ0dXRvX3Blcm1pc3Npb25zLnBuZ1wiPjwvaW1nPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxsaSB0eXBlPVwiMVwiIGNsYXNzTmFtZT1cImxpc3QtaW5zaWRlXCI+Q29weSB5b3VyIG5ldyBBUEkga2V5LjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgdHlwZT1cIjFcIiBjbGFzc05hbWU9XCJsaXN0LWluc2lkZVwiPlBhc3RlIGl0IGludG8gdGhlIEFQSS1LZXkgSW5wdXQgZmllbGQuPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSB0eXBlPVwiMVwiIGNsYXNzTmFtZT1cImxpc3QtaW5zaWRlXCI+Q2xpY2sgdGhlIFwiU2V0IEFjY291bnRcIiBidXR0b24gYW5kIHdhaXQuPC9saT5cclxuXHJcbiAgICAgICAgICAgIDwvb2w+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIiwgImltcG9ydCB7IFF1ZXN0aW9uTWFya0NpcmNsZUljb24sIFJlZnJlc2hJY29uLCBTZWFyY2hJY29uLCBYSWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZSdcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluaywgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCAgU2VhcmNoUmVzdWx0LCB7IEl0ZW1DYXJkIH0gZnJvbSAnfi9jb21wb25lbnRzL0l0ZW1DYXJkJztcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiwgY3JlYXRlQ29va2llIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHsgRGVzZXJpYWxpemVHVzJBY2NvdW50SW5mbywgR1cyQWNjb3VudEluZm8gfSBmcm9tICd+L0dXMkFwaS9HVzJBY2NvdW50SW5mbyc7XG5pbXBvcnQgeyBCYXJMb2FkZXIsIFJpbmdMb2FkZXIgfSBmcm9tICdyZWFjdC1zcGlubmVycyc7XG5pbXBvcnQgQXN5bmMsIHsgdXNlQXN5bmMgfSBmcm9tICdyZWFjdC1zZWxlY3QvYXN5bmMnO1xuaW1wb3J0IEFzeW5jU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdC9hc3luYyc7XG5pbXBvcnQgSXRlbVNlbGVjdCwgeyBJdGVtT3B0aW9uIH0gZnJvbSAnfi9jb21wb25lbnRzL0l0ZW1TZWxlY3QnO1xuaW1wb3J0IEhvd3RvIGZyb20gJy4vaG93dG8nO1xuaW1wb3J0IHsgR2VuZXJhdGVHYXRoZXJpbmdUb29sRnJvbU9wdGlvbnMsIEdlbmVyYXRlSW5mdXNpb25TdHJpbmdGcm9tT3B0aW9ucywgR1cySXRlbUZpbmRlciB9IGZyb20gJ34vR1cyQXBpL0dXMkl0ZW1GaW5kUHJvY2Vzcyc7XG5cblxuZnVuY3Rpb24gQ29udmVydFRpbWVzcGFuVG9UaW1lU3RyaW5nKHNwYW46IG51bWJlcikge1xuICBzcGFuID0gc3Bhbi8xMDAwO1xuICB2YXIgZCA9IE1hdGguZmxvb3Ioc3BhbiAvICgzNjAwKjI0KSk7XG4gIHZhciBoID0gTWF0aC5mbG9vcihzcGFuICUgKDM2MDAqMjQpIC8gMzYwMCk7XG4gIHZhciBtID0gTWF0aC5mbG9vcihzcGFuICUgMzYwMCAvIDYwKTtcbiAgdmFyIHMgPSBNYXRoLmZsb29yKHNwYW4gJSA2MCk7XG4gIHMgPSBNYXRoLm1heChzLDEpXG4gIHZhciBkRGlzcGxheSA9IGQgPiAwID8gZCArIChkID09IDEgPyBcIiBkYXksIFwiIDogXCIgZGF5cywgXCIpIDogXCJcIjtcbiAgdmFyIGhEaXNwbGF5ID0gaCA+IDAgPyBoICsgKGggPT0gMSA/IFwiIGhvdXIsIFwiIDogXCIgaG91cnMsIFwiKSA6IFwiXCI7XG4gIHZhciBtRGlzcGxheSA9IG0gPiAwID8gbSArIChtID09IDEgPyBcIiBtaW51dGUsIFwiIDogXCIgbWludXRlcywgXCIpIDogXCJcIjtcbiAgdmFyIHNEaXNwbGF5ID0gcyA+IDAgPyBzICsgKHMgPT0gMSA/IFwiIHNlY29uZFwiIDogXCIgc2Vjb25kc1wiKSA6IFwiXCI7XG4gIHJldHVybiBkRGlzcGxheSArIGhEaXNwbGF5ICsgbURpc3BsYXkgKyBzRGlzcGxheTtcbn1cblxuZnVuY3Rpb24gR2VuZXJhdGVVSUQoKSA6IHN0cmluZyB7XG4gcmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCAzMik7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VhcmNoUGFnZVN0YXRle1xuICBiU2hvdWxkRmV0Y2hPbkxvYWQ6IGJvb2xlYW47XG4gIEl0ZW1zVG9GZXRjaDogSXRlbU9wdGlvbltdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcblxuICBjb25zdCBbaXRlbUNhcmRzLCBzZXRJdGVtQ2FyZHNdID0gdXNlU3RhdGU8SXRlbUNhcmRbXT4oW10pO1xuICBjb25zdCBbaXRlbUFtb3VudCwgc2V0SXRlbUFtb3VudF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2lucHV0X2FwaUtleSwgc2V0aW5wdXRfYXBpS2V5XSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFtpbnB1dF9pdGVtSUQsIHNldGlucHV0X2l0ZW1JRF0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbaW5wdXRfaXRlbVNlbGVjdGlvbixzZXRpbnB1dF9pdGVtU2VsZWN0aW9uXSA9IHVzZVN0YXRlPEl0ZW1PcHRpb25bXT4oW10pXG4gIGNvbnN0IFtmZXRjaGluZ0FjY291bnQsIHNldEZldGNoaW5nQWNjb3VudF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2FjY291bnRJbmZvLCBzZXRBY2NvdW50SW5mb10gPSB1c2VTdGF0ZTxHVzJBY2NvdW50SW5mbz4oKVxuICBjb25zdCBbc2hvdWxkUHJlZmV0Y2hJdGVtcywgc2V0U2hvdWxkUHJlZmV0Y2hJdGVtc10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2l0ZW1zVG9QcmVmZXRjaCwgc2V0SXRlbXNUb1ByZWZldGNoXSA9IHVzZVN0YXRlPEl0ZW1PcHRpb25bXT4oW10pXG5cblxuICBmdW5jdGlvbiByZW1vdmVBbGxFbXB0eUNhcmRzKCl7XG4gICAgbGV0IGljX2NvcHkgPSBpdGVtQ2FyZHM7XG4gICAgLy8gZmluZCBlbGVtZW50IGF0IGluZGV4XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpY19jb3B5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gaWNfY29weVtpXTtcbiAgICAgIGlmIChlbGVtZW50LnJlc3VsdHMgPT09IDApe1xuICAgICAgICAgIGljX2NvcHkuc3BsaWNlKGksMSk7XG4gICAgICAgICAgaS0tO1xuICAgICAgfVxuICAgIH1cblxuICAgIHNldEl0ZW1DYXJkcyhpY19jb3B5KTtcbiAgICBzZXRJdGVtQW1vdW50KGl0ZW1DYXJkcy5sZW5ndGgpO1xuICB9XG5cblxuICBmdW5jdGlvbiByZW1vdmVDYXJkRnJvbUNhcmRzKHVpZCA6IHN0cmluZyl7XG4gICAgbGV0IGljX2NvcHkgPSBpdGVtQ2FyZHM7XG4gICAgLy8gZmluZCBlbGVtZW50IGF0IGluZGV4XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpY19jb3B5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gaWNfY29weVtpXTtcbiAgICAgIGlmIChlbGVtZW50LnVpZCA9PT0gdWlkKXtcbiAgICAgICAgaWNfY29weS5zcGxpY2UoaSwxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRJdGVtQ2FyZHMoaWNfY29weSk7XG4gICAgc2V0SXRlbUFtb3VudChpdGVtQ2FyZHMubGVuZ3RoKTtcblxuICB9XG5cbiAgZnVuY3Rpb24gU2V0QXBpS2V5KCl7XG4gICAgbGV0IG5ld0FjY291bnQgOiBHVzJBY2NvdW50SW5mbyA9IG5ldyBHVzJBY2NvdW50SW5mbygpOyAgXG4gICAgc2V0RmV0Y2hpbmdBY2NvdW50KHRydWUpO1xuICAgIG5ld0FjY291bnQucG9wdWxhdGVGcm9tQXBpS2V5KGlucHV0X2FwaUtleSlcbiAgICAudGhlbihyZXM9PntcbiAgICAgICAgc2V0QWNjb3VudEluZm8ocmVzKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJndzJBY2NvdW50SW5mb1wiLEpTT04uc3RyaW5naWZ5KHJlcykpO1xuICAgICAgICBzZXRGZXRjaGluZ0FjY291bnQoZmFsc2UpOyAgIFxuICAgIH0pXG4gICAgLmNhdGNoKGVycj0+e1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIHNldEZldGNoaW5nQWNjb3VudChmYWxzZSk7XG4gICAgICAvLyBUb2RvOiBJbnZhbGlkIEFwaSBLZXkgUElOR1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gUmVmcmVzaEFjY291bnQoKXtcbiAgICBzZXRGZXRjaGluZ0FjY291bnQodHJ1ZSk7XG4gICAgaWYoYWNjb3VudEluZm8gIT09IHVuZGVmaW5lZCAmJiBhY2NvdW50SW5mbyAhPT0gbnVsbCl7XG4gICAgICBsZXQgYWNjb3VudCA6IEdXMkFjY291bnRJbmZvID0gbmV3IEdXMkFjY291bnRJbmZvKCk7XG5cbiAgIFxuICAgIGFjY291bnQucG9wdWxhdGVGcm9tQXBpS2V5KGFjY291bnRJbmZvLkFwaUtleSlcbiAgICAudGhlbihyZXM9PntcbiAgICAgIHNldEFjY291bnRJbmZvKHJlcyk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImd3MkFjY291bnRJbmZvXCIsIEpTT04uc3RyaW5naWZ5KHJlcykpO1xuICAgICAgc2V0RmV0Y2hpbmdBY2NvdW50KGZhbHNlKTtcbiAgICB9KVxuICAgIC5jYXRjaChlcnI9PntcbiAgICAgIHNldEZldGNoaW5nQWNjb3VudChmYWxzZSk7XG4gICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gUmVtb3ZlQWNjb3VudCgpe1xuICAgIHNldEFjY291bnRJbmZvKHVuZGVmaW5lZCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJndzJBY2NvdW50SW5mb1wiLFwidW5kZWZpbmVkXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gSGFzVmFsaWRBY2NvdW50KCkgOiBib29sZWFuIHtcbiAgICAvLyBsYXp5IGxvYWQgZnJvbSBjb29raWVcbiAgICByZXR1cm4gKCEoYWNjb3VudEluZm8/LkFjY291bnROYW1lID09PSBcIlwiIHx8IGFjY291bnRJbmZvPy5BY2NvdW50TmFtZSA9PT0gdW5kZWZpbmVkIHx8IGFjY291bnRJbmZvLkFjY291bnROYW1lID09PSBudWxsIHx8IGZldGNoaW5nQWNjb3VudCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gRmluZEl0ZW0oaXRlbTogSXRlbU9wdGlvbil7XG4gICAgbGV0IGljX2NvcHkgPSBpdGVtQ2FyZHM7XG4gICAgaWYoYWNjb3VudEluZm8gIT09IHVuZGVmaW5lZCl7XG4gICAgICBsZXQgaXRlbVNlYXJjaENhcmQgPSBuZXcgSXRlbUNhcmQoKTtcbiAgICAgIGl0ZW1TZWFyY2hDYXJkLnVpZCA9IEdlbmVyYXRlVUlEKCk7XG4gICAgICBpdGVtU2VhcmNoQ2FyZC5hY2NvdW50ID0gYWNjb3VudEluZm87XG4gICAgICBpdGVtU2VhcmNoQ2FyZC5pdGVtSUQgPSBpdGVtLnZhbHVlO1xuICAgICAgaXRlbVNlYXJjaENhcmQuaXRlbUljb24gPSBpdGVtLmljb247XG4gICAgICBpdGVtU2VhcmNoQ2FyZC5pdGVtTmFtZSA9IGl0ZW0ubGFiZWw7XG4gICAgICBpdGVtU2VhcmNoQ2FyZC5vblJlbW92ZUNsaWNrZWRDYWxsYmFjayA9IHJlbW92ZUNhcmRGcm9tQ2FyZHM7XG4gICAgICBpY19jb3B5LnVuc2hpZnQoaXRlbVNlYXJjaENhcmQpO1xuICAgICAgc2V0SXRlbUNhcmRzKGljX2NvcHkpO1xuICAgICAgc2V0SXRlbUFtb3VudChpdGVtQ2FyZHMubGVuZ3RoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBGaW5kSXRlbXMoKXtcbiAgICBGaW5kSXRlbXNQYXJhbXMoaW5wdXRfaXRlbVNlbGVjdGlvbilcbiAgfVxuXG4gIGZ1bmN0aW9uIEZpbmRJdGVtc1BhcmFtcyhpdGVtczogSXRlbU9wdGlvbltdKXtcbiAgICAvL0dlbmVyYXRlR2F0aGVyaW5nVG9vbEZyb21PcHRpb25zKGl0ZW1zKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBGaW5kSXRlbShpdGVtc1tpXSk7IFxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIE9uTXVsdGlTZWxlY3RDaGFuZ2VkKHNlbGVjdGVkSXRlbXMgOiBJdGVtT3B0aW9uW10pe1xuICAgIHNldGlucHV0X2l0ZW1TZWxlY3Rpb24oc2VsZWN0ZWRJdGVtcyk7XG4gIH1cblxuICBsZXQgc3RhdGUgOiBTZWFyY2hQYWdlU3RhdGUgPSB1c2VMb2NhdGlvbigpLnN0YXRlIGFzIFNlYXJjaFBhZ2VTdGF0ZTtcbiAgLy8gR2V0IEFjY291bnQgZnJvbSBjYWNoZVxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBsZXQgZGF0YSA9IG51bGw7XG4gICAgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdndzJBY2NvdW50SW5mbycpO1xuICAgIGlmKGRhdGEgIT09IG51bGwgJiYgZGF0YSAhPT0gdW5kZWZpbmVkICYmIGRhdGEgIT09IFwidW5kZWZpbmVkXCIpe1xuICAgICAgbGV0IGFjY291bnQ6IEdXMkFjY291bnRJbmZvICA9IERlc2VyaWFsaXplR1cyQWNjb3VudEluZm8oZGF0YSk7XG4gICAgICAvLyByZWFzc2lnbiBwcm90b3R5cGUgcHJvcGVydGllc1xuICAgICAgc2V0QWNjb3VudEluZm8oYWNjb3VudCk7XG5cbiAgICAgIGlmKHN0YXRlICE9PSBudWxsICYmIHN0YXRlLmJTaG91bGRGZXRjaE9uTG9hZCAmJiBhY2NvdW50ICE9PSB1bmRlZmluZWQgJiYgYWNjb3VudCAhPT0gbnVsbCl7XG4gICAgICAgIHNldFNob3VsZFByZWZldGNoSXRlbXModHJ1ZSk7XG4gICAgICAgIHNldEl0ZW1zVG9QcmVmZXRjaChzdGF0ZS5JdGVtc1RvRmV0Y2gpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgfSxbXSk7XG5cblxuICBpZihzaG91bGRQcmVmZXRjaEl0ZW1zKXtcbiAgICBGaW5kSXRlbXNQYXJhbXMoaXRlbXNUb1ByZWZldGNoKTtcbiAgICBzZXRTaG91bGRQcmVmZXRjaEl0ZW1zKGZhbHNlKTtcbiAgICBzZXRJdGVtc1RvUHJlZmV0Y2goW10pO1xuICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh7fSxkb2N1bWVudC50aXRsZSk7XG4gIH1cblxuICAvLyByZXNldCBzdGF0ZSB0byBwcmV2ZW50IGluZmluaXRlIHJlbmRlciBsb29wXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXByaW1hcnkgb3V0bGluZSByb3VuZGVkLW1kIG91dGxpbmUtMiBvdXRsaW5lLXNlY29uZGFyeSBzaGFkb3ctc3BcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtYXV0byB3LWZ1bGwgYmctc2Vjb25kYXJ5IHAtMSBwbC00IHJvdW5kZWQtdC1tZCB0ZXh0LXdoaXRlIHRleHQtbWRcIj48aDIgY2xhc3NOYW1lPVwidGV4dC1tZFwiPkFjY291bnQ8L2gyPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3B4LTQgcHktNCc+ICAgXG4gICAgICAgIHsvKiBBQ0NPVU5UIFNFQ1RJT04gKi99XG4gICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHBsYWNlLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWl0ZW1zLWF1dG8gdy1mdWxsXCI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIEhhc1ZhbGlkQWNjb3VudCgpID8gKDxkaXYgY2xhc3NOYW1lPVwiZmxleCB0ZXh0LXhzIHRleHQtZ3JheS00MDBcIj5MYXN0IFJlZnJlc2hlZDoge2FjY291bnRJbmZvP0NvbnZlcnRUaW1lc3BhblRvVGltZVN0cmluZyhhY2NvdW50SW5mbz8uZ2V0VGltZVNpbmNlTGFzdFVwZGF0ZWQoKSk6XCJpbnZhbGlkXCJ9IGFnbzwvZGl2PikgOiAoPD48Lz4pXG4gICAgICAgICAgICB9ICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBwbGFjZS1pdGVtcy1jZW50ZXIganVzdGlmeS1pdGVtcy1hdXRvIGgtN1wiPlxuICAgICAgICAgIHshSGFzVmFsaWRBY2NvdW50KCkgPyBcbiAgICAgICAgICAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICB7LyogQVBJIEtFWSBJTlBVVCAqL31cbiAgICAgICAgICAgIHtmZXRjaGluZ0FjY291bnQgPyBcbiAgICAgICAgICAgICg8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgaC1mdWxsIHB4LTFcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdGV4dC14cyB0ZXh0LWdyYXktMzAwXCI+QnJhdmUgU2tyaXR0IGFyZSBtYWtpbmcgYSBtYXAgb2YgeW91ciBhY2NvdW50ISBUaGlzIGNhbiB0YWtlIGEgd2hpbGUgYnV0IHdpbGwgbWFrZSBmaW5kaW5nIHNoaW5pZXMgZmFzdGVyIGxhdGVyIS4uLjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBncmlkXCI+PEJhckxvYWRlciB3aWR0aD0nMTAwJScgY29sb3I9J3doaXRlJz48L0JhckxvYWRlcj48L2Rpdj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPikgXG4gICAgICAgICAgICA6IFxuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cImFwaS1rZXlcIiBpZD1cImFwaS1rZXlcIiBjbGFzc05hbWU9XCJmbGV4IGZvY3VzOnJpbmctaW5kaWdvLTUwMCBmb2N1czpib3JkZXItaW5kaWdvLTUwMCBibG9jayB3LWZ1bGwgcGwtMiBwci0yIHB5LTEgc206dGV4dC1zbSBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBoLWZ1bGxcIiBwbGFjZWhvbGRlcj1cIkFQSSBLZXlcIiBvbkNoYW5nZT17ZT0+c2V0aW5wdXRfYXBpS2V5KGUudGFyZ2V0LnZhbHVlKX0+XG4gICAgICAgICAgICAgIDwvaW5wdXQ+XG4gICAgICAgICAgICAgIDxidXR0b24gbmFtZT1cImNvbmZpcm0tYnV0dG9uXCIgaWQ9XCJjb25maXJtLWJ1dHRvblwiIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgcGwtMiBwci0yIHB5LTEgc206dGV4dC1zbSBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBiZy1ncmVlbi0zMDAgbWwtMiBoLWZ1bGwgdy0zLzEyIHBsYWNlLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWl0ZW1zLWF1dG8gaG92ZXI6YmctZ3JlZW4tNzAwIGhvdmVyOnRleHQtd2hpdGVcIiBvbkNsaWNrPXtTZXRBcGlLZXl9PiA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB3LWZ1bGwgdGV4dC14cyBtZDp0ZXh0LW1kXCI+U2V0IEFjY291bnQ8L3A+IDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7LyogQVBJIEtFWSBJTlBVVCBFTkQgKi99XG4gICAgICAgICAgPC8+XG4gICAgICAgICAgKSBcbiAgICAgICAgICA6XG4gICAgICAgICAgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgey8qIEFDQ09VTlQgREVUQUlMUyBESVNQTEFZICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHBsYWNlLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWl0ZW1zLWF1dG8gdy1mdWxsXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBwbGFjZS1pdGVtcy1jZW50ZXIganVzdGlmeS1pdGVtcy1hdXRvIHctZnVsbCBiZy13aGl0ZSBwbC0yIHJvdW5kZWQtbWQgYm9yZGVyLTEgYm9yZGVyLXNvbGlkIGJvcmRlci1zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsXCI+e2FjY291bnRJbmZvPy5BY2NvdW50TmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmbGV4ICB0cmFuc2l0aW9uLWFsbCBob3Zlcjp0cmFuc2l0aW9uLWFsbCBoLWF1dG8gdy03IG1sLTEgdGV4dC13aGl0ZSBob3Zlcjp0ZXh0LWdyYXktNDAwIGJnLWluZm8gcm91bmRlZC0yeGwgaG92ZXI6cm91bmRlZC1tZCBob3Zlcjp0ZXh0LXdoaXRlIHAtMVwiIG5hbWU9XCJyZW1vdmUtYWNjb3VudC1idXR0b25cIiBpZD1cInJlbW92ZS1hY2NvdW50LWJ1dHRvblwiIG9uQ2xpY2s9e1JlZnJlc2hBY2NvdW50fT48UmVmcmVzaEljb24gY29sb3I9J2JsYWNrJyBzdHlsZT17e2FsaWduU2VsZjonY2VudGVyJ319PjwvUmVmcmVzaEljb24+PC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmxleCB0cmFuc2l0aW9uLWFsbCBob3Zlcjp0cmFuc2l0aW9uLWFsbCBoLWF1dG8gdy03IG1sLTEgdGV4dC13aGl0ZSBob3Zlcjp0ZXh0LWdyYXktNDAwIGJnLW5lZ2F0aXZlIHJvdW5kZWQtMnhsIGhvdmVyOnJvdW5kZWQtbWQgYm9yZGVyLXNvbGlkIGhvdmVyOnRleHQtd2hpdGUgcC0xXCIgbmFtZT1cInJlbW92ZS1hY2NvdW50LWJ1dHRvblwiIGlkPVwicmVtb3ZlLWFjY291bnQtYnV0dG9uXCJvbkNsaWNrPXtSZW1vdmVBY2NvdW50fT48WEljb24gY29sb3I9J2JsYWNrJyBzdHlsZT17e2FsaWduU2VsZjonY2VudGVyJ319PjwvWEljb24+PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogQUNDT1VOVCBERVRBSUxTIERJU1BMQVkgRU5EKi99XG5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogQUNDT1VOVCBTRUNUSU9OIEVORCAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0xXCI+PC9kaXY+XG4gICAgICAgIHsvKiBJVEVNIElOUFVUICovfVxuICAgICAgICB7SGFzVmFsaWRBY2NvdW50KCkgPyBcbiAgICAgICAgKDw+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgcHgtMVwiPlxuICAgICAgICAgICAgSXRlbXNcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0xXCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgbGFjZS1pdGVtcy1jZW50ZXIganVzdGlmeS1pdGVtcy1hdXRvJz5cbiAgICAgICAgICA8SXRlbVNlbGVjdCBvbkNoYW5nZT17T25NdWx0aVNlbGVjdENoYW5nZWR9PjwvSXRlbVNlbGVjdD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTFcIj48L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIG5hbWU9XCJjb25maXJtLWJ1dHRvblwiIGlkPVwiY29uZmlybS1idXR0b25cIiBjbGFzc05hbWU9XCJmbGV4IHRyYW5zaXRpb24tYWxsIGhvdmVyOnRyYW5zaXRpb24tYWxsIHBsLTIgcHItMiByb3VuZGVkLTJ4bCBob3Zlcjpyb3VuZGVkLW1kIGJnLXBvc2l0aXZlIGgtYXV0b1wiIG9uQ2xpY2s9e0ZpbmRJdGVtc30+PGRpdiBjbGFzc05hbWU9XCJtLWF1dG8gdy0xMCBwLTJcIj48U2VhcmNoSWNvbiBjb2xvcj0nYmxhY2snPjwvU2VhcmNoSWNvbj48L2Rpdj48L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTJcIj5cbiAgICAgICAgICAgIDxidXR0b24gbmFtZT1cInJlbW92ZS1lbXRweS1idXR0b25cIiBpZD1cInJlbW92ZS1lbXB0eS1idXR0b25cIiBjbGFzc05hbWU9J2ZsZXggdy1mdWxsIHRyYW5zaXRpb24tYWxsIGhvdmVyOnRyYW5zaXRpb24tYWxsIHBsLTIgcHItMiByb3VuZGVkLTJ4bCBob3Zlcjpyb3VuZGVkLW1kIGJnLW5lZ2F0aXZlIGgtYXV0byBjb250ZW50LWNlbnRlciBpdGVtcy1jZW50ZXIgYWxpZ24tY2VudGVyJyBvbkNsaWNrPXtyZW1vdmVBbGxFbXB0eUNhcmRzfT48ZGl2IGNsYXNzTmFtZT0nZmxleCBtLWF1dG8gYWxpZ24tY2VudGVyJz5QdXJnZTwvZGl2PjwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgICAgKVxuICAgICAgICA6XG4gICAgICAgICg8PlxuICAgICAgICA8Lz5cbiAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAge0hhc1ZhbGlkQWNjb3VudCgpID8gKDw+PC8+KSA6IFxuICAgIChcbiAgICA8PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMlwiPjwvZGl2PlxuICAgICAge0hvd3RvKCl9XG4gICAgPC8+KVxuICAgIH1cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0c0NvbnRhaW5lck1vYmlsZSBsZzpyZXN1bHRzQ29udGFpbmVyIFwiPlxuICAgIHsgaXRlbUNhcmRzLm1hcCgoaXRlbSk9PlxuICAgICAgPGRpdiBrZXk9e2l0ZW0udWlkfSBjbGFzc05hbWU9XCJweS0yIHB4LTJcIj5cbiAgICAgICAgIDxTZWFyY2hSZXN1bHQgIG9uUmVtb3ZlQ2xpY2tlZENhbGxiYWNrPXtyZW1vdmVDYXJkRnJvbUNhcmRzfSB1aWQ9e2l0ZW0udWlkfSBhY2NvdW50PXtpdGVtLmFjY291bnR9IGl0ZW1JRD17aXRlbS5pdGVtSUR9IGl0ZW1JY29uPXtpdGVtLml0ZW1JY29ufSBpdGVtTmFtZT17aXRlbS5pdGVtTmFtZX0gb25OZXdSZXN1bHRMZW5ndGg9e2l0ZW0ub25OZXdSZXN1bHRMZW5ndGh9Lz5cbiAgICAgIDwvZGl2PlxuICAgICl9XG4gICAgPC9kaXY+XG4gIDwvPlxuICApO1xufVxuIiwgImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJAaGVhZGxlc3N1aS9yZWFjdC9kaXN0L3V0aWxzL3JlbmRlclwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEdXMkFQSV9DYWxsIH0gZnJvbSBcIn4vR1cyQXBpL0dXMkFQSV9DYWxsXCI7XHJcbmltcG9ydCB7IExvYWRlckZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgR1cyQWNjb3VudFNlYXJjaFJlc3VsdCwgR1cySXRlbUZpbmRlciBhcyBHVzJJdGVtRmluZGVyIH0gZnJvbSBcIn4vR1cyQXBpL0dXMkl0ZW1GaW5kUHJvY2Vzc1wiO1xyXG5pbXBvcnQgeyBHVzJBY2NvdW50SW5mbyB9IGZyb20gXCJ+L0dXMkFwaS9HVzJBY2NvdW50SW5mb1wiO1xyXG5pbXBvcnQgeyBHVzJJdGVtIH0gZnJvbSBcIn4vR1cyQXBpL0dXMkl0ZW1cIjtcclxuaW1wb3J0IFBhY21hbkxvYWRlciBmcm9tIFwicmVhY3Qtc3Bpbm5lcnMvUGFjbWFuTG9hZGVyXCI7XHJcbmltcG9ydCB7IFhJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBJdGVtQ2FyZCB7XHJcbiAgICB1aWQ6IHN0cmluZztcclxuICAgIGFjY291bnQ6IEdXMkFjY291bnRJbmZvO1xyXG4gICAgaXRlbUlEOiBzdHJpbmc7XHJcbiAgICBpdGVtSWNvbjogc3RyaW5nO1xyXG4gICAgaXRlbU5hbWU6IHN0cmluZztcclxuICAgIHJlc3VsdHMgOiBudW1iZXI7XHJcbiAgICBvblJlbW92ZUNsaWNrZWRDYWxsYmFjazogKCh1aWQgOnN0cmluZykgPT4gdm9pZCkgfCBudWxsO1xyXG4gICAgb25OZXdSZXN1bHRMZW5ndGg6KChuZXdMZW5ndGg6bnVtYmVyKSA9PiB2b2lkKTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMudWlkID0gXCJcIjtcclxuICAgICAgICB0aGlzLmFjY291bnQgPSBuZXcgR1cyQWNjb3VudEluZm8oKTtcclxuICAgICAgICB0aGlzLml0ZW1JRCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5pdGVtSWNvbiA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5pdGVtTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5yZXN1bHRzID0gMDtcclxuICAgICAgICB0aGlzLm9uUmVtb3ZlQ2xpY2tlZENhbGxiYWNrID0gbnVsbDtcclxuICAgICAgICB0aGlzLm9uTmV3UmVzdWx0TGVuZ3RoID0gKG46bnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdWx0cyA9IG47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBJdGVtQ2FyZFByb3BzID0ge1xyXG4gICAgdWlkOiBzdHJpbmc7XHJcbiAgICBhY2NvdW50OiBHVzJBY2NvdW50SW5mbyxcclxuICAgIGl0ZW1JRDogc3RyaW5nLFxyXG4gICAgaXRlbUljb246IHN0cmluZyxcclxuICAgIGl0ZW1OYW1lOiBzdHJpbmcsXHJcbiAgICBvblJlbW92ZUNsaWNrZWRDYWxsYmFjazogKCh1aWQgOnN0cmluZykgPT4gdm9pZCkgfCBudWxsXHJcbiAgICBvbk5ld1Jlc3VsdExlbmd0aDooKG5ld0xlbmd0aDpudW1iZXIpID0+IHZvaWQpO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBTZWFyY2hJdGVtUHJvcHMgPSB7XHJcbiAgICB1aWQ6IHN0cmluZztcclxuICAgIGFjY291bnQ6IEdXMkFjY291bnRJbmZvLFxyXG4gICAgaXRlbUlEOiBzdHJpbmcsXHJcbn1cclxuXHJcbmNvbnN0IHVzZUFQSURhdGEgPSAoYWNjb3VudDogR1cyQWNjb3VudEluZm8sIGl0ZW1pZDogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCBbYXBpRGF0YSwgc2V0QXBpRGF0YV0gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcclxuICAgIGNvbnN0IFtpc0Vycm9yLCBzZXRJc0Vycm9yXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW0Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlPEdXMkFjY291bnRTZWFyY2hSZXN1bHRbXT4oW10pXHJcbiAgICBjb25zdCBbYWdncmVnYXRlUmVzdWx0cywgc2V0QWdncmVnYXRlUmVzdWx0XSA9IHVzZVN0YXRlPGFueVtdPihbXSlcclxuICAgIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG5cclxuICAgICAgICBsZXQgZmluZGVyIDogR1cySXRlbUZpbmRlciA9IG5ldyBHVzJJdGVtRmluZGVyKGFjY291bnQsaXRlbWlkKVxyXG4gICAgICAgIGxldCByID0gZmluZGVyLlNlYXJjaE9uQWNjb3VudChpdGVtaWQpXHJcbiAgICAgICAgc2V0UmVzdWx0KHIuaGl0cyk7XHJcbiAgICAgICAgc2V0QWdncmVnYXRlUmVzdWx0KHIuYWdncmVnYXRlcylcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuXHJcbiAgICAgfSxbXSk7XHJcblxyXG4gICAgcmV0dXJuIHthcGlEYXRhLCBpc0xvYWRpbmcsIHJlc3VsdCwgYWdncmVnYXRlUmVzdWx0cywgZXhwYW5kZWQsIGlzRXJyb3IsIEVycm9yLCBzZXRFeHBhbmRlZH1cclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiByYW5kdWlkKCkge1xyXG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiA5OTk5OTk5OTk5O1xyXG4gIH1cclxuXHJcbmNvbnN0IEl0ZW1TZWFyY2ggPSAocHJvcHMgOiBJdGVtQ2FyZFByb3BzKSA9PiB7XHJcblxyXG4gICAgXHJcblxyXG4gICAgY29uc3QgeyBhcGlEYXRhLCBpc0xvYWRpbmcscmVzdWx0LCBhZ2dyZWdhdGVSZXN1bHRzLCBleHBhbmRlZCwgaXNFcnJvciwgRXJyb3IsIHNldEV4cGFuZGVkIH0gPSB1c2VBUElEYXRhKHByb3BzLmFjY291bnQsIHByb3BzLml0ZW1JRCwpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZUV4cGFuZCgpe1xyXG4gICAgICAgIHNldEV4cGFuZGVkKCFleHBhbmRlZCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgbGV0IG9uUmVtb3ZlQ2xpY2tlZCA9ICgpID0+IHtcclxuICAgICAgICBpZihwcm9wcy5vblJlbW92ZUNsaWNrZWRDYWxsYmFjayAhPT0gbnVsbClcclxuICAgICAgICAgICAgcHJvcHM/Lm9uUmVtb3ZlQ2xpY2tlZENhbGxiYWNrKHByb3BzLnVpZClcclxuICAgIH1cclxuXHJcbiAgICBwcm9wcy5vbk5ld1Jlc3VsdExlbmd0aChyZXN1bHQubGVuZ3RoKTtcclxuXHJcbiAgICByZXR1cm4gaXNFcnJvciA/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXByaW1hcnkgYm9yZGVyLXNvbGlkIGJvcmRlci1yZWQtODAwIGJvcmRlci00IHJvdW5kZWQtbWQgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy1zcFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC13aGl0ZSAgcHQtM1wiPk9oIG5vISBTb21ldGhpbmcgd2VudCB3cm9uZyE8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC13aGl0ZSAgcHQtMSBwYi0zXCI+e0Vycm9yfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuXHJcbiAgICApIDogKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcHJpbWFyeSBvdXRsaW5lIG91dGxpbmUtNiBvdXRsaW5lLXNlY29uZGFyeSBwYi0xIHJvdW5kZWQtbWQgc2hhZG93LXNwXCI+XHJcbiAgICAgICAge2lzTG9hZGluZyA/IChcclxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LXdoaXRlIHB4LTIwIHB5LTE2XCI+PFBhY21hbkxvYWRlciBjb2xvcj1cIndoaXRlXCI+PC9QYWNtYW5Mb2FkZXI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1zZWNvbmRhcnkgaC04IGZsZXggZmxleC1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvcHMuaXRlbUljb259IGNsYXNzTmFtZT1cImgtZnVsbCByb3VuZGVkLW1kIFwiPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtd2hpdGUgdGV4dC1zbVwiPntwcm9wcy5pdGVtTmFtZX0gW3twcm9wcy5pdGVtSUR9XTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LTcgaC03IG15LWF1dG8gaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1yLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRyYW5zaXRpb24tYWxsIGhvdmVyOnRyYW5zaXRpb24tYWxsIGJnLW5lZ2F0aXZlIGgtNyB3LTcgcm91bmRlZC0yeGwgaG92ZXI6cm91bmRlZC1tZCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1ibGFjayBwLTFcIiBvbkNsaWNrPXtvblJlbW92ZUNsaWNrZWR9PjxYSWNvbiBzdHlsZT17e2FsaWduU2VsZjonY2VudGVyJ319PjwvWEljb24+PC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTIgcHgtNFwiPlxyXG4gICAgICAgICAgICAgICAge3Jlc3VsdC5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcblxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGFnZ3JlZ2F0ZVJlc3VsdHMubWFwKHI9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3JhbmR1aWQoKX0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1xdWF0ZXJuYXJ5IG15LTEgbXgtMSBteS0xIHB5LTEgcHgtNCBoLWF1dG8gZmxleCBmbGV4LXJvdyBib3JkZXItc29saWQgYm9yZGVyLXNlY29uZGFyeSByb3VuZGVkLXhsIHRleHQteHNcIj4gICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuRGF0YVtcIkNoYXJhY3RlckRhdGFcIl0gPT09IHVuZGVmaW5lZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ci5OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHRHcmlkQ29sIGNvbC1zcGFuLTIgbWQ6Y29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e1wiaWNvbnMvXCIrci5EYXRhW1wiQ2hhcmFjdGVyRGF0YVwiXS5HZXRDaGFyYWN0ZXJDbGFzcygpK1wiLnBuZ1wifSBjbGFzc05hbWU9XCJoLTYgcHItMlwiPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LXdoaXRlIHdyYXAtYW55d2hlcmVcIj57ci5EYXRhW1wiQ2hhcmFjdGVyRGF0YVwiXS5DaGFyYWN0ZXJOYW1lfSA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdEdyaWRDb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtd2hpdGUgcGwtNCB0ZXh0LWdyYS0zMDBcIj4gQW1vdW50IEZvdW5kOiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtd2hpdGUgcGwtMSB0ZXh0LXBvc2l0aXZlXCI+e3IuRGF0YVtcIkFtb3VudFwiXX0gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgeyBleHBhbmRlZCA/IDw+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZUV4cGFuZH0gY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgdHJhbnNpdGlvbi1hbGwgaG92ZXI6dHJhbnNpdGlvbi1hbGwgcGwtMiBwci0yIHJvdW5kZWQtMnhsIGhvdmVyOnJvdW5kZWQtbWQgYmctcG9zaXRpdmUgaC1hdXRvIGNvbnRlbnQtY2VudGVyIGl0ZW1zLWNlbnRlciBhbGlnbi1jZW50ZXIgZXhwYW5kLWJ1dHRvblwiID5IaWRlIERldGFpbGVkIExvY2F0aW9uIEluZm88L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5tYXAocj0+KFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e3IudXVpZH0+ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1xdWF0ZXJuYXJ5IG15LTEgbXgtMSBteS0xIHB5LTEgcHgtNCBoLWF1dG8gZmxleCBmbGV4LXJvdyBib3JkZXItc29saWQgYm9yZGVyLXNlY29uZGFyeSByb3VuZGVkLXhsIHRleHQteHNcIj4gICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtMyB3LWZ1bGxcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtyLkNoYXJhY3RlciA9PT0gbnVsbCA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHRHcmlkQ29sIGNvbC1zcGFuLTIgbWQ6Y29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LXdoaXRlXCI+Tm8gQ2hhcmFjdGVyPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz4pIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0R3JpZENvbCBjb2wtc3Bhbi0yIG1kOmNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17XCJpY29ucy9cIityLkNoYXJhY3Rlci5HZXRDaGFyYWN0ZXJDbGFzcygpK1wiLnBuZ1wifSBjbGFzc05hbWU9XCJoLTYgcHItMlwiPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC13aGl0ZSB3cmFwLWFueXdoZXJlXCI+e3IuQ2hhcmFjdGVyLkNoYXJhY3Rlck5hbWV9IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX0gICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ci5FcXVpcG1lbnRUYWJOciAhPT0gMCA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0R3JpZENvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC13aGl0ZSBwbC00IHRleHQtZ3JhLTMwMFwiPiBFcXVpcG1lbnQgVGFiOiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtd2hpdGUgcGwtMSB0ZXh0LXBvc2l0aXZlXCI+e3IuRXF1aXBtZW50VGFiTnJ9IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0R3JpZENvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC13aGl0ZSBwbC00IHRleHQtZ3JheS0zMDBcIj4ge3IuTG9jYXRpb259IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPikgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHRHcmlkQ29sIGNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtd2hpdGUgcGwtNFwiPlNsb3Q6IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC13aGl0ZSBwbC0xIHRleHQtcG9zaXRpdmUgd3JhcC1hbnl3aGVyZVwiPntyLlNsb3R9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9IDwvPlxyXG4gICAgICAgICAgICA6IDw+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dG9nZ2xlRXhwYW5kfSBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCB0cmFuc2l0aW9uLWFsbCBob3Zlcjp0cmFuc2l0aW9uLWFsbCBwbC0yIHByLTIgcm91bmRlZC0yeGwgaG92ZXI6cm91bmRlZC1tZCBiZy1wb3NpdGl2ZSBoLWF1dG8gY29udGVudC1jZW50ZXIgaXRlbXMtY2VudGVyIGFsaWduLWNlbnRlciBleHBhbmQtYnV0dG9uXCI+VmlldyBEZXRhaWxlZCBMb2NhdGlvbiBJbmZvPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvPiB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcXVhdGVybmFyeSBteS0xIG14LTEgbXktMSBweS0xIHB4LTQgaC1hdXRvIGZsZXggZmxleC1yb3cgYm9yZGVyLXNvbGlkIGJvcmRlci1zZWNvbmRhcnkgcm91bmRlZC14bCB0ZXh0LXhzXCI+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC13aGl0ZSB0ZXh0LXhzIG14LWF1dG8gXCI+SXRlbSBub3QgZm91bmQgb24gdGhpcyBBY2NvdW50LiBTa3JpdHQgYXJlIHZlcnkgc29ycnkgOig8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICApfVxyXG4gICAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSXRlbVNlYXJjaDsiLCAiaW1wb3J0IHsgSXRlbU9wdGlvbiB9IGZyb20gXCJ+L2NvbXBvbmVudHMvSXRlbVNlbGVjdFwiO1xyXG5pbXBvcnQgeyBJdGVtR3JvdXAgfSBmcm9tIFwifi9yb3V0ZXMvSXRlbUxpc3RzXCI7XHJcbmltcG9ydCB7IEdXMkFjY291bnRJbmZvfSBmcm9tIFwiLi9HVzJBY2NvdW50SW5mb1wiO1xyXG5pbXBvcnQgeyBDaGFyYWN0ZXJFcVRlbXBsYXRlUmVzdWx0LCBFcVRlbXBsYXRlTGlzdFJlc3VsdCwgR1cyQVBJX0NhbGwgfSBmcm9tIFwiLi9HVzJBUElfQ2FsbFwiO1xyXG5pbXBvcnQgeyBHVzJDaGFyYWN0ZXIgfSBmcm9tIFwiLi9HVzJDaGFyYWN0ZXJcIjtcclxuaW1wb3J0IHsgR1cySXRlbSB9IGZyb20gXCIuL0dXMkl0ZW1cIjtcclxuXHJcbmV4cG9ydCB0eXBlIEdXMkFjY291bnRJdGVtU2VhcmNoUmVzdWx0ID0ge1xyXG4gICAgYWdncmVnYXRlczpbXVxyXG4gICAgaGl0czogR1cyQWNjb3VudFNlYXJjaFJlc3VsdFtdXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEdXMkFjY291bnRTZWFyY2hSZXN1bHQgPSB7XHJcbiAgICB1dWlkOiBzdHJpbmc7XHJcbiAgICBDaGFyYWN0ZXI6IEdXMkNoYXJhY3RlciB8IG51bGwsXHJcbiAgICBFcXVpcG1lbnRUYWJOcjogbnVtYmVyLFxyXG4gICAgRXF1aXBtZW50VGFiTmFtZTogc3RyaW5nLFxyXG4gICAgTG9jYXRpb246IHN0cmluZyxcclxuICAgIFNsb3Q6IHN0cmluZyxcclxuICAgIENvdW50OiBOdW1iZXJcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBHVzJJdGVtRmluZGVyIHtcclxuXHJcbiAgICBhY2NvdW50OiBHVzJBY2NvdW50SW5mbztcclxuICAgIGl0ZW1JRDogc3RyaW5nO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihhY2NvdW50OiBHVzJBY2NvdW50SW5mbywgaXRlbUlEOiBzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuYWNjb3VudCA9IGFjY291bnQ7XHJcbiAgICAgICAgdGhpcy5pdGVtSUQgPSBpdGVtSUQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIENvbnNvbGlkYXRlU2VhcmNoKGhpdHM6R1cyQWNjb3VudFNlYXJjaFJlc3VsdFtdKSA6IGFueSB7XHJcbiAgICAgICAgbGV0IHRvdGFsRm91bmQgPSAwO1xyXG5cclxuICAgICAgICBsZXQgQ291bnRlcnMgPSBbXVxyXG5cclxuICAgICAgICBoaXRzLmZvckVhY2goaGl0ID0+IHtcclxuICAgICAgICAgICAgaWYoaGl0ICE9IG51bGwpe1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBGaW5kTG9jYXRpb24gPSBcIlwiXHJcbiAgICAgICAgICAgICAgICBpZihoaXQuQ2hhcmFjdGVyICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgRmluZExvY2F0aW9uID0gaGl0LkNoYXJhY3Rlci5DaGFyYWN0ZXJOYW1lXHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgRmluZExvY2F0aW9uID0gXCJfX19cIitoaXQuTG9jYXRpb25cclxuICAgICAgICAgICAgICAgIGlmKENvdW50ZXJzW0ZpbmRMb2NhdGlvbl0gIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoQ291bnRlcnNbRmluZExvY2F0aW9uXVtoaXQuRXF1aXBtZW50VGFiTnJdICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3VudGVyc1tGaW5kTG9jYXRpb25dW2hpdC5FcXVpcG1lbnRUYWJOcl0gPSBDb3VudGVyc1tGaW5kTG9jYXRpb25dW2hpdC5FcXVpcG1lbnRUYWJOcl0gKyBoaXQuQ291bnRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ291bnRlcnNbRmluZExvY2F0aW9uXVtoaXQuRXF1aXBtZW50VGFiTnJdID0gaGl0LkNvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYXJyID0gW11cclxuICAgICAgICAgICAgICAgICAgICBhcnJbaGl0LkVxdWlwbWVudFRhYk5yXSA9IGhpdC5Db3VudFxyXG4gICAgICAgICAgICAgICAgICAgIENvdW50ZXJzW0ZpbmRMb2NhdGlvbl0gPSBhcnI7XHJcbiAgICAgICAgICAgICAgICAgICAgQ291bnRlcnNbRmluZExvY2F0aW9uXVtcIkNoYXJhY3RlckRhdGFcIl0gPSBoaXQuQ2hhcmFjdGVyXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICBcclxuICAgICAgICBsZXQgQWdncmVnYXRlcyA9IFtdXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGl0ZXJhdG9yID0gT2JqZWN0LmtleXMoQ291bnRlcnMpXHJcbiAgXHJcbiAgICAgICAgaXRlcmF0b3IuZm9yRWFjaChsb2MgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYobG9jLnN0YXJ0c1dpdGgoXCJfX19cIikpe1xyXG4gICAgICAgICAgICAgICAgQWdncmVnYXRlc1tsb2Muc2xpY2UoMyldID0gW11cclxuICAgICAgICAgICAgICAgIEFnZ3JlZ2F0ZXNbbG9jLnNsaWNlKDMpXVtcIkFtb3VudFwiXSA9IENvdW50ZXJzW2xvY11bMF1cclxuICAgICAgICAgICAgICAgIHRvdGFsRm91bmQgPSB0b3RhbEZvdW5kICsgQ291bnRlcnNbbG9jXVswXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3ViSXRlcmF0b3IgPSBPYmplY3Qua2V5cyhDb3VudGVyc1tsb2NdKVxyXG4gICAgXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG1heEFyciA9IFtdXHJcbiAgICAgICAgICAgICAgICBsZXQgZm91bmRPbkxvY2F0aW9uID0gMDtcclxuICAgICAgICAgICAgICAgIHN1Ykl0ZXJhdG9yLmZvckVhY2godGFiPT57XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGFiID09PSBcIkNoYXJhY3RlckRhdGFcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRhYiA9PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGb3VuZCB0aGlzIGhlcmVcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxGb3VuZCArPSBDb3VudGVyc1tsb2NdW3RhYl1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRPbkxvY2F0aW9uICs9IENvdW50ZXJzW2xvY11bdGFiXVxyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhBcnIucHVzaChDb3VudGVyc1tsb2NdW3RhYl0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGlmKG1heEFyci5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbWF4ID0gIE1hdGgubWF4KC4uLm1heEFycilcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbEZvdW5kICs9IG1heFxyXG4gICAgICAgICAgICAgICAgICAgIGZvdW5kT25Mb2NhdGlvbiArPSBtYXhcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIEFnZ3JlZ2F0ZXNbbG9jXSA9IFtdXHJcbiAgICAgICAgICAgICAgICBBZ2dyZWdhdGVzW2xvY11bXCJBbW91bnRcIl0gPSBmb3VuZE9uTG9jYXRpb25cclxuICAgICAgICAgICAgICAgIEFnZ3JlZ2F0ZXNbbG9jXVtcIkNoYXJhY3RlckRhdGFcIl0gPSBDb3VudGVyc1tsb2NdW1wiQ2hhcmFjdGVyRGF0YVwiXVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgZmluYWxBZ2dyZWdhdGVzID0gW11cclxuICAgICAgICBmaW5hbEFnZ3JlZ2F0ZXMucHVzaCh7XCJOYW1lXCIgOiBcIkZ1bGwgQWNjb3VudFwiLCBcIkRhdGFcIjp7XCJBbW91bnRcIjp0b3RhbEZvdW5kfX0pXHJcbiAgICAgICAgbGV0IGZpbmFsSXRlcmF0b3IgPSBPYmplY3Qua2V5cyhBZ2dyZWdhdGVzKVxyXG4gICAgICAgIGZpbmFsSXRlcmF0b3IuZm9yRWFjaChpdCA9PiB7XHJcbiAgICAgICAgICAgIGZpbmFsQWdncmVnYXRlcy5wdXNoKHtcIk5hbWVcIjppdCxcIkRhdGFcIjpBZ2dyZWdhdGVzW2l0XX0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG5cclxuXHJcblxyXG4gICAgICAgIHJldHVybiBmaW5hbEFnZ3JlZ2F0ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgU2VhcmNoT25BY2NvdW50KGl0ZW1JZDogc3RyaW5nKSA6IEdXMkFjY291bnRJdGVtU2VhcmNoUmVzdWx0IHsgICAgIFxyXG4gICAgICAgIGxldCBzZWFyY2ggOiBHVzJBY2NvdW50SXRlbVNlYXJjaFJlc3VsdDtcclxuICAgICAgICBsZXQgcmVzdWx0cyA9IHRoaXMuYWNjb3VudC5GaW5kSXRlbUluQWNjb3VudChwYXJzZUludChpdGVtSWQpKVxyXG4gICAgICAgIGxldCBhZ2dyZWdhdGVkX3Jlc3VsdHMgPSB0aGlzLkNvbnNvbGlkYXRlU2VhcmNoKHJlc3VsdHMpO1xyXG4gICAgICAgIHNlYXJjaCA9IHthZ2dyZWdhdGVzOmFnZ3JlZ2F0ZWRfcmVzdWx0cywgaGl0czogcmVzdWx0c307XHJcbiAgICAgICAgY29uc29sZS5sb2coc2VhcmNoKVxyXG4gICAgICAgIHJldHVybiBzZWFyY2g7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSZXNvbHZlQnVmZlRvU3RhdChidWZmOiBzdHJpbmcpIDogc3RyaW5nIHtcclxuICAgIGlmKGJ1ZmYgPT09IFwiQm9vbkR1cmF0aW9uXCIpXHJcbiAgICAgICAgcmV0dXJuIFwiQ29uY2VudHJhdGlvblwiXHJcbiAgICBlbHNlIGlmKGJ1ZmY9PT1cIkNvbmRpdGlvbkR1cmF0aW9uXCIpXHJcbiAgICAgICAgcmV0dXJuIFwiRXhwZXJ0aXNlXCI7XHJcbiAgICByZXR1cm4gYnVmZjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdlbmVyYXRlR2F0aGVyaW5nVG9vbEZyb21PcHRpb25zKG9wdGlvbnM6IEl0ZW1PcHRpb25bXSl7XHJcbiAgICBsZXQgaXRlbXMgOiBHVzJJdGVtW10gPSBbXTtcclxuICAgIGxldCBwcm9taXNlcyA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IG5ld0l0ZW0gPSBuZXcgR1cySXRlbSgpO1xyXG4gICAgICAgIG5ld0l0ZW0uSXRlbUlEID0gcGFyc2VJbnQob3B0aW9uc1tpXS52YWx1ZSk7XHJcbiAgICAgICAgcHJvbWlzZXMucHVzaChuZXdJdGVtLnBvcHVsYXRlRnJvbUFQSSgpKTsgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4ocmVzPT57XHJcbiAgICAgICAgbGV0IG9iaiA6IEl0ZW1Hcm91cD0ge1xyXG4gICAgICAgICAgICBOYW1lOiByZXNbMF0uTmFtZSxcclxuICAgICAgICAgICAgSWNvbjogcmVzWzBdLkljb25VcmwsXHJcbiAgICAgICAgICAgIEl0ZW1zOiBbXVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gcmVzW2ldO1xyXG4gICAgICAgICAgICBsZXQgbmFtZVN0ciA9IGVsZW1lbnQuTmFtZTtcclxuICAgICAgICAgICAgb2JqLkl0ZW1zLnB1c2goe05hbWU6IG5hbWVTdHIsIEl0ZW1JRDplbGVtZW50Lkl0ZW1JRCxJY29uOmVsZW1lbnQuSWNvblVybH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2cob2JqKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2VuZXJhdGVJbmZ1c2lvblN0cmluZ0Zyb21PcHRpb25zKG9wdGlvbnM6IEl0ZW1PcHRpb25bXSl7XHJcblxyXG4gICAgbGV0IGl0ZW1zIDogR1cySXRlbVtdID0gW107XHJcbiAgICBsZXQgcHJvbWlzZXMgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBuZXdJdGVtID0gbmV3IEdXMkl0ZW0oKTtcclxuICAgICAgICBuZXdJdGVtLkl0ZW1JRCA9IHBhcnNlSW50KG9wdGlvbnNbaV0udmFsdWUpO1xyXG4gICAgICAgIHByb21pc2VzLnB1c2gobmV3SXRlbS5wb3B1bGF0ZUZyb21BUEkoKSk7ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKHJlcz0+e1xyXG4gICAgICAgIGxldCBvYmogOiBJdGVtR3JvdXA9IHtcclxuICAgICAgICAgICAgTmFtZTogcmVzWzBdLk5hbWUsXHJcbiAgICAgICAgICAgIEljb246IHJlc1swXS5JY29uVXJsLFxyXG4gICAgICAgICAgICBJdGVtczogW11cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHJlc1tpXTtcclxuICAgICAgICAgICAgbGV0IG5hbWVTdHIgPSBlbGVtZW50Lk5hbWU7XHJcbiAgICAgICAgICAgIG5hbWVTdHIgKz0gXCIgKFwiICsgUmVzb2x2ZUJ1ZmZUb1N0YXQoZWxlbWVudC5EZXRhaWxzLmluZml4X3VwZ3JhZGUuYXR0cmlidXRlc1swXS5hdHRyaWJ1dGUpICsgXCIpXCJcclxuXHJcbiAgICAgICAgICAgIG9iai5JdGVtcy5wdXNoKHtOYW1lOiBuYW1lU3RyLCBJdGVtSUQ6ZWxlbWVudC5JdGVtSUQsSWNvbjplbGVtZW50Lkljb25Vcmx9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKG9iaik7XHJcbiAgICAgICAgLy8gUkVHRVggVE8gQ09OVkVSVCBUSElTIE9CSkVDVCBKU09OIFRPIFVTQUJMRSBBUlJBWSBJVEVNTElTVFMuVFNYIDogLyBcXHMrKD89XCIpXFxcIig/PU5hbWV8SWNvbnxJdGVtc3xJdGVtSUQpfFxcXCIoPz1cXDopfFxccyg/PD0sKXxcXHMrKD89fSkgL2dtXHJcbiAgICB9KTtcclxufSIsICJpbXBvcnQgeyBHVzJBUElfQ2FsbCB9IGZyb20gXCIuL0dXMkFQSV9DYWxsXCI7XHJcbmltcG9ydCB7IEdXMkpzb25JdGVtV3JhcHBlciB9IGZyb20gXCIuL0dXMkNoYXJhY3RlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdXMkl0ZW0ge1xyXG4gICAgSXRlbUlEIDogbnVtYmVyO1xyXG5cclxuICAgIE5hbWU6IHN0cmluZztcclxuICAgIEljb25Vcmw6IHN0cmluZztcclxuXHJcbiAgICBTbG90IDogc3RyaW5nO1xyXG4gICAgVXBncmFkZXMgOiBudW1iZXJbXTtcclxuICAgIEluZnVzaW9ucyA6IG51bWJlcltdO1xyXG4gICAgU2tpbjogbnVtYmVyO1xyXG4gICAgU3RhdHM6IG9iamVjdDtcclxuICAgIEJpbmRpbmc6IHN0cmluZztcclxuICAgIER5ZXM6IG51bWJlcltdO1xyXG4gICAgQ291bnQ6bnVtYmVyO1xyXG4gICAgLy8gdG9kbyA6IFByb3Blcmx5IHR5cGVcclxuICAgIERldGFpbHM6IGFueTtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLkl0ZW1JRCA9IDA7XHJcbiAgICAgICAgdGhpcy5OYW1lID0gXCJcIjtcclxuICAgICAgICB0aGlzLkljb25VcmwgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuU2xvdCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5VcGdyYWRlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuSW5mdXNpb25zID0gW107XHJcbiAgICAgICAgdGhpcy5Ta2luID0gMDtcclxuICAgICAgICB0aGlzLlN0YXRzID0ge307XHJcbiAgICAgICAgdGhpcy5CaW5kaW5nID0gXCJcIjtcclxuICAgICAgICB0aGlzLkR5ZXMgPSBbXTtcclxuICAgICAgICB0aGlzLkNvdW50ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZnJvbUpTT04oaXRlbURhdGE6IEdXMkpzb25JdGVtV3JhcHBlcil7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSBuZXcgR1cySXRlbSgpO1xyXG4gICAgICAgIGl0ZW0uSXRlbUlEID0gaXRlbURhdGEuaWQ7XHJcbiAgICAgICAgaXRlbS5TbG90ID0gaXRlbURhdGEuc2xvdDtcclxuICAgICAgICBpdGVtLlVwZ3JhZGVzID0gaXRlbURhdGEudXBncmFkZXM7XHJcbiAgICAgICAgaXRlbS5JbmZ1c2lvbnMgPSBpdGVtRGF0YS5pbmZ1c2lvbnM7XHJcbiAgICAgICAgaXRlbS5Ta2luID0gaXRlbURhdGEuc2tpbjtcclxuICAgICAgICBpdGVtLlN0YXRzID0gaXRlbURhdGEuc3RhdHM7ICAgXHJcbiAgICAgICAgaXRlbS5CaW5kaW5nID0gaXRlbURhdGEuYmluZGluZztcclxuICAgICAgICBpdGVtLkR5ZXMgPSBpdGVtRGF0YS5keWVzO1xyXG4gICAgICAgIGl0ZW0uQ291bnQgPSBpdGVtRGF0YS5jb3VudDtcclxuXHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgaGFzSXRlbUlkQXNVcGdyYWRlT3JJbmZ1c2lvbihpZDpudW1iZXIpIDogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYodGhpcy5JbmZ1c2lvbnMgIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5JbmZ1c2lvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuSW5mdXNpb25zW2ldID09PSBpZClcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlOyAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLlVwZ3JhZGVzICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuVXBncmFkZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuVXBncmFkZXNbaV0gPT09IGlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7ICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwb3B1bGF0ZUZyb21BUEkoKSA6IFByb21pc2U8R1cySXRlbT57XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPEdXMkl0ZW0+KChyZXNvbHZlLGVycm9yKT0+e1xyXG5cclxuICAgICAgICAgICAgbGV0IGNhbGwgOiBHVzJBUElfQ2FsbCA9IG5ldyBHVzJBUElfQ2FsbChcIk5vQXV0aFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNhbGwuR2V0SXRlbURhdGEodGhpcy5JdGVtSUQpLnRoZW4ocmVzdWx0PT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLk5hbWUgPSByZXN1bHQuTmFtZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuSWNvblVybCA9IHJlc3VsdC5JY29uVXJsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5EZXRhaWxzID0gcmVzdWx0LkRldGFpbHM7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlc29sdmVkXCIpXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyPT57XHJcbiAgICAgICAgICAgICAgICBlcnJvcihlcnIpO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn0iLCAiaW1wb3J0IHsgcmVzb2x2ZVBhdGggfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XHJcbmltcG9ydCB7IGpzb24gfSBmcm9tIFwicmVtaXhcIjtcclxuXHJcbmNvbnN0IEdXMkFQSUVuZHBvaW50IDogc3RyaW5nID0gXCJodHRwczovL2FwaS5ndWlsZHdhcnMyLmNvbS92Mi9cIjtcclxuXHJcbmV4cG9ydCB0eXBlIENoYXJhY3RlclJlc3VsdCA9IHtcclxuICAgIENoYXJhY3Rlck5hbWU6IHN0cmluZyxcclxuICAgIENoYXJhY3RlclByb2Zlc3Npb246IHN0cmluZyxcclxuICAgIENoYXJhY3RlckJhZ3M6IGFueVtdLFxyXG4gICAgQ2hhcmFjdGVyUHZFU3BlY3MgOiBvYmplY3RcclxuICBcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgRGVmYXVsdEVxdWlwbWVudFJlc3VsdCA9IHtcclxuICAgIEVxdWlwbWVudDogYW55W107XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIERlZmF1bHRTaGFyZWRJbnZlbnRvcnlSZXN1bHQgPSB7XHJcbiAgICBJdGVtczogYW55W107XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEVxVGVtcGxhdGVMaXN0UmVzdWx0ID17XHJcbiAgICBDaGFyYWN0ZXJOYW1lOiBzdHJpbmcsXHJcbiAgICBUZW1wbGF0ZUxpc3Q6IHN0cmluZ1tdXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIENoYXJhY3RlckVxVGVtcGxhdGVSZXN1bHQgPSB7XHJcbiAgICBDaGFyYWN0ZXJOYW1lOiBzdHJpbmcsXHJcbiAgICBFcVRlbXBsYXRlSWQ6IHN0cmluZyxcclxuICAgIEVxdWlwbWVudDogb2JqZWN0XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEl0ZW1EYXRhUmVzdWx0ID0ge1xyXG4gICAgSUQ6IG51bWJlcjtcclxuICAgIE5hbWU6IHN0cmluZztcclxuICAgIEljb25Vcmw6IHN0cmluZztcclxuICAgIFR5cGU6IHN0cmluZztcclxuICAgIERldGFpbHM6IGFueTtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQWNjb3VudFJlc3VsdCA9IHtcclxuICAgIE5hbWU6IHN0cmluZztcclxuICAgIEFjY2Vzczogc3RyaW5nW107XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEJhbmtSZXN1bHQgPSB7XHJcbiAgICBJdGVtcyA6IGFueVtdO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBNYXRlcmlhbFN0b3JhZ2VSZXN1bHQgPSB7XHJcbiAgICBJdGVtcyA6IGFueVtdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR1cyQVBJX0NhbGwge1xyXG5cclxuICAgIEFwaUtleTogc3RyaW5nO1xyXG4gICAgVVJJOiBzdHJpbmc7XHJcbiAgICBJc0RvbmU6IGJvb2xlYW47XHJcbiAgICBSZXNwb25zZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGFwaUtleTogc3RyaW5nKXtcclxuICAgICAgICB0aGlzLkFwaUtleSA9IGFwaUtleTtcclxuICAgICAgICB0aGlzLlVSSSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5SZXNwb25zZSA9IFwidGVzdFwiO1xyXG4gICAgICAgIHRoaXMuSXNEb25lID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgY2FsbCgpIDogUHJvbWlzZTxzdHJpbmc+e1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxlcnJvcik9PntcclxuICAgICAgICAgICAgbGV0IGNvbnRleHQgPSB0aGlzO1xyXG4gICAgICAgICAgICBsZXQgZW5kcG9pbnQgPSB0aGlzLlVSSStcIj9hY2Nlc3NfdG9rZW49XCIrdGhpcy5BcGlLZXk7XHJcbiAgICAgICAgICAgIHJldHVybiBmZXRjaChlbmRwb2ludCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgIHJlZGlyZWN0OiAnZm9sbG93J1xyXG4gICAgICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+e1xyXG4gICAgICAgICAgICAgICAgY29udGV4dC5Jc0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UudGV4dCgpLnRoZW4ocmVzPT57XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5SZXNwb25zZSA9IHJlcztcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyPT4gZXJyb3IoXCJFcnJvcjogXCIgKyBlcnIpKTtcclxuICAgICAgICB9KSAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgY2FsbE5vQXV0aCgpIDogUHJvbWlzZTxzdHJpbmc+e1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxlcnJvcik9PntcclxuICAgICAgICAgICAgbGV0IGNvbnRleHQgPSB0aGlzO1xyXG4gICAgICAgICAgICBsZXQgZW5kcG9pbnQgPSB0aGlzLlVSSTtcclxuICAgICAgICAgICAgcmV0dXJuIGZldGNoKGVuZHBvaW50LCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgcmVkaXJlY3Q6ICdmb2xsb3cnXHJcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT57XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0LklzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS50ZXh0KCkudGhlbihyZXM9PntcclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LlJlc3BvbnNlID0gcmVzO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnI9PiBlcnJvcihcIkVycm9yOiBcIiArIGVycikpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgR2V0Q2hhcmFjdGVyTGlzdCgpIDogUHJvbWlzZTxzdHJpbmdbXT57XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsZXJyKT0+e1xyXG4gICAgICAgICAgICB0aGlzLlVSSSA9IEdXMkFQSUVuZHBvaW50ICsgXCJjaGFyYWN0ZXJzXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbCgpLnRoZW4oKHJlc29sdmUpPT57XHJcbiAgICAgICAgICAgICAgICBsZXQganNvblJlcyA9IEpTT04ucGFyc2UodGhpcy5SZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICBpZihqc29uUmVzLnRleHQgIT09IHVuZGVmaW5lZCAmJiBqc29uUmVzLnRleHQgPT09IFwiSW52YWxpZCBhY2Nlc3MgdG9rZW5cIil7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyKFwiSW52YWxpZCBBUEkgS2V5XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlcyhqc29uUmVzKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpPT57ZXJyKFwiRXJyb3JcIil9KTtcclxuICAgICAgICB9KSBcclxuICAgIH1cclxuXHJcbiAgICBHZXRFcXVpcG1lbnRUZW1wbGF0ZXMoY2hhcmFjdGVyTmFtZSA6c3RyaW5nKSA6IFByb21pc2U8RXFUZW1wbGF0ZUxpc3RSZXN1bHQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8RXFUZW1wbGF0ZUxpc3RSZXN1bHQ+KChyZXNvbHZlLGVycm9yKT0+e1xyXG4gICAgICAgICAgICB0aGlzLlVSSSA9ICBHVzJBUElFbmRwb2ludCArIFwiY2hhcmFjdGVycy9cIiArIGNoYXJhY3Rlck5hbWUgKyBcIi9lcXVpcG1lbnR0YWJzXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbCgpLnRoZW4oKHJlcyk9PntcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA6IEVxVGVtcGxhdGVMaXN0UmVzdWx0ID0ge0NoYXJhY3Rlck5hbWUgOiBjaGFyYWN0ZXJOYW1lLCBUZW1wbGF0ZUxpc3QgOiBKU09OLnBhcnNlKHJlcyl9O1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnI9PmVycm9yKGVycikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIEdldEVxdWlwbWVudEZyb21UZW1wbGF0ZShjaGFyYWN0ZXJOYW1lOiBzdHJpbmcsIHRlbXBsYXRlSWQ6IHN0cmluZyApIDogUHJvbWlzZTxDaGFyYWN0ZXJFcVRlbXBsYXRlUmVzdWx0PntcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8Q2hhcmFjdGVyRXFUZW1wbGF0ZVJlc3VsdD4oKHJlc29sdmUsZXJyb3IpPT57XHJcbiAgICAgICAgICAgIHRoaXMuVVJJID0gR1cyQVBJRW5kcG9pbnQgKyBcImNoYXJhY3RlcnMvXCIgKyBjaGFyYWN0ZXJOYW1lICsgXCIvZXF1aXBtZW50dGFicy9cIiArIHRlbXBsYXRlSWQ7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbCgpLnRoZW4oKHJlcyk9PntcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA6IENoYXJhY3RlckVxVGVtcGxhdGVSZXN1bHQgPSB7Q2hhcmFjdGVyTmFtZSA6IGNoYXJhY3Rlck5hbWUsIEVxVGVtcGxhdGVJZCA6IHRlbXBsYXRlSWQsIEVxdWlwbWVudCA6IEpTT04ucGFyc2UocmVzKX07XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycj0+ZXJyb3IoZXJyKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0Q2hhcmFjdGVyRGF0YShjaGFyYWN0ZXJOYW1lOiBzdHJpbmcpIDogUHJvbWlzZTxDaGFyYWN0ZXJSZXN1bHQ+e1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxDaGFyYWN0ZXJSZXN1bHQ+KChyZXNvbHZlLGVycm9yKT0+e1xyXG4gICAgICAgICAgICB0aGlzLlVSSSA9IEdXMkFQSUVuZHBvaW50ICtcImNoYXJhY3RlcnMvXCIgKyBjaGFyYWN0ZXJOYW1lO1xyXG4gICAgICAgICAgICB0aGlzLmNhbGwoKS50aGVuKChyZXMpPT57XHJcbiAgICAgICAgICAgICAgICBsZXQganNvblJlcyA9IEpTT04ucGFyc2UocmVzKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA6IENoYXJhY3RlclJlc3VsdCA9IHtDaGFyYWN0ZXJOYW1lOiBjaGFyYWN0ZXJOYW1lLCBDaGFyYWN0ZXJQcm9mZXNzaW9uOiBqc29uUmVzLnByb2Zlc3Npb24sIENoYXJhY3RlckJhZ3M6IGpzb25SZXMuYmFncywgQ2hhcmFjdGVyUHZFU3BlY3M6IGpzb25SZXMuc3BlY2lhbGl6YXRpb25zLnB2ZSB9O1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnI9PmVycm9yKGVycikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBHZXRJdGVtRGF0YShpdGVtSWQ6IG51bWJlcikgOiBQcm9taXNlPEl0ZW1EYXRhUmVzdWx0PntcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8SXRlbURhdGFSZXN1bHQ+KChyZXNvbHZlLGVycm9yKT0+e1xyXG4gICAgICAgICAgICBpZighaXRlbUlkIHx8IGlzTmFOKGl0ZW1JZCkpe1xyXG4gICAgICAgICAgICAgICAgZXJyb3IoXCJJdGVtIElEIGRvZXMgbm90IGV4aXN0IVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLlVSSSA9IEdXMkFQSUVuZHBvaW50ICsgXCJpdGVtcy9cIiArIGl0ZW1JZDtcclxuICAgICAgICAgICAgdGhpcy5jYWxsTm9BdXRoKCkudGhlbigocmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgbGV0IGpzb25SZXMgPSBKU09OLnBhcnNlKHJlcyk7XHJcbiAgICAgICAgICAgICAgICBpZihqc29uUmVzLnRleHQgIT09IHVuZGVmaW5lZCAmJiBqc29uUmVzLnRleHQgPT09IFwibm8gc3VjaCBpZFwiKXtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcihcIkl0ZW0gSUQgZG9lcyBub3QgZXhpc3QhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA6IEl0ZW1EYXRhUmVzdWx0ID0ge0lEIDogaXRlbUlkLCBOYW1lIDoganNvblJlcy5uYW1lLCBJY29uVXJsIDoganNvblJlcy5pY29uLCBUeXBlOiBqc29uUmVzLnR5cGUsIERldGFpbHM6IGpzb25SZXMuZGV0YWlsc307XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICAgICAgZXJyb3IoZXJyKX0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIEdldEFjY291bnREYXRhKCkgOiBQcm9taXNlPEFjY291bnRSZXN1bHQ+e1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxBY2NvdW50UmVzdWx0PigocmVzb2x2ZSxlcnJvcik9PntcclxuICAgICAgICAgICAgdGhpcy5VUkkgPSBHVzJBUElFbmRwb2ludCArIFwiYWNjb3VudFwiO1xyXG4gICAgICAgICAgICB0aGlzLmNhbGwoKS50aGVuKHJlcz0+e1xyXG4gICAgICAgICAgICAgICAgbGV0IGpzb25SZXMgPSBKU09OLnBhcnNlKHRoaXMuUmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgaWYoanNvblJlcy50ZXh0ICE9PSB1bmRlZmluZWQgJiYganNvblJlcy50ZXh0ID09PSBcIkludmFsaWQgYWNjZXNzIHRva2VuXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yKFwiSW52YWxpZCBBUEkgS2V5XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA6IEFjY291bnRSZXN1bHQgPSAge05hbWU6IGpzb25SZXMubmFtZSwgQWNjZXNzOiBqc29uUmVzLmFjY2Vzc307XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnI9PntcclxuICAgICAgICAgICAgICAgIGVycm9yKGVycik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0RGVmYXVsdEVxdWlwbWVudERhdGEoY2hhcmFjdGVyTmFtZTogc3RyaW5nKSA6IFByb21pc2U8RGVmYXVsdEVxdWlwbWVudFJlc3VsdD57XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPERlZmF1bHRFcXVpcG1lbnRSZXN1bHQ+KChyZXNvbHZlLGVycm9yKT0+e1xyXG4gICAgICAgICAgICB0aGlzLlVSSSA9IEdXMkFQSUVuZHBvaW50ICsgXCJjaGFyYWN0ZXJzL1wiICsgY2hhcmFjdGVyTmFtZSArIFwiL2VxdWlwbWVudFwiO1xyXG4gICAgICAgICAgICB0aGlzLmNhbGwoKS50aGVuKHJlcz0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgOiBEZWZhdWx0RXF1aXBtZW50UmVzdWx0ID0ge0VxdWlwbWVudCA6IEpTT04ucGFyc2UocmVzKS5lcXVpcG1lbnR9O1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICAgICAgZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0U2hhcmVkSW52ZW50b3J5RGF0YSgpIDogUHJvbWlzZTxEZWZhdWx0U2hhcmVkSW52ZW50b3J5UmVzdWx0PntcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8RGVmYXVsdFNoYXJlZEludmVudG9yeVJlc3VsdD4oKHJlc29sdmUsZXJyb3IpPT57XHJcbiAgICAgICAgICAgIHRoaXMuVVJJID0gR1cyQVBJRW5kcG9pbnQgKyBcImFjY291bnQvaW52ZW50b3J5XCI7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbCgpLnRoZW4ocmVzPT57XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0IDogRGVmYXVsdFNoYXJlZEludmVudG9yeVJlc3VsdCA9IHtJdGVtczogSlNPTi5wYXJzZShyZXMpfVxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyPT57XHJcbiAgICAgICAgICAgICAgICBlcnJvcihlcnIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgR2V0QmFua0RhdGEoKSA6IFByb21pc2U8QmFua1Jlc3VsdD57XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPEJhbmtSZXN1bHQ+KChyZXNvbHZlLGVycm9yKT0+e1xyXG4gICAgICAgICAgICB0aGlzLlVSSSA9IEdXMkFQSUVuZHBvaW50ICsgXCJhY2NvdW50L2JhbmtcIjtcclxuICAgICAgICAgICAgdGhpcy5jYWxsKCkudGhlbihyZXM9PntcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgOiBCYW5rUmVzdWx0ID0ge0l0ZW1zOiBKU09OLnBhcnNlKHJlcyl9XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnI9PntcclxuICAgICAgICAgICAgICAgIGVycm9yKGVycik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0TWF0ZXJpYWxTdG9yYWdlRGF0YSgpIDogUHJvbWlzZTxNYXRlcmlhbFN0b3JhZ2VSZXN1bHQ+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0TWF0c3RvcmFnZURhdGFcIik7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPEJhbmtSZXN1bHQ+KChyZXNvbHZlLGVycm9yKT0+e1xyXG4gICAgICAgICAgICB0aGlzLlVSSSA9IEdXMkFQSUVuZHBvaW50ICsgXCJhY2NvdW50L21hdGVyaWFsc1wiO1xyXG4gICAgICAgICAgICB0aGlzLmNhbGwoKS50aGVuKHJlcz0+e1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA6IE1hdGVyaWFsU3RvcmFnZVJlc3VsdCA9IHtJdGVtczogSlNPTi5wYXJzZShyZXMpfVxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyPT57XHJcbiAgICAgICAgICAgICAgICBlcnJvcihlcnIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufSIsICJpbXBvcnQgeyBDaGFyYWN0ZXJFcVRlbXBsYXRlUmVzdWx0LCBDaGFyYWN0ZXJSZXN1bHQsIEdXMkFQSV9DYWxsIH0gZnJvbSBcIi4vR1cyQVBJX0NhbGxcIjtcclxuaW1wb3J0IHsgR1cyQ2hhcmFjdGVyLCBHVzJKc29uSXRlbVdyYXBwZXIgfSBmcm9tIFwiLi9HVzJDaGFyYWN0ZXJcIjtcclxuaW1wb3J0IHsgR1cyRXF1aXBtZW50VGFiIH0gZnJvbSBcIi4vR1cyRXF1aXBtZW50VGFiXCI7XHJcbmltcG9ydCB7IEdXMkl0ZW0gfSBmcm9tIFwiLi9HVzJJdGVtXCI7XHJcbmltcG9ydCB7IEdXMkFjY291bnRTZWFyY2hSZXN1bHQgfSBmcm9tIFwiLi9HVzJJdGVtRmluZFByb2Nlc3NcIjtcclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIEdlbmVyYXRlVUlEKCkgOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCAzMik7XHJcbiAgIH1cclxuXHJcbmV4cG9ydCBjbGFzcyBHVzJBY2NvdW50SW5mb3tcclxuXHJcbiAgICBBY2NvdW50TmFtZTogc3RyaW5nO1xyXG4gICAgQWNjZXNzOiBzdHJpbmdbXTtcclxuICAgIENoYXJhY3RlcnM6IEdXMkNoYXJhY3RlcltdO1xyXG4gICAgU2hhcmVkSW52ZW50b3J5OiAoR1cySXRlbXxudWxsKVtdO1xyXG4gICAgQmFua0ludmVudG9yeTogKEdXMkl0ZW18bnVsbClbXTtcclxuICAgIE1hdGVyaWFsU3RvcmFnZTogKEdXMkl0ZW18bnVsbClbXTtcclxuICAgIEFwaUtleTogc3RyaW5nO1xyXG4gICAgTGFzdFVwZGF0ZTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5BY2NvdW50TmFtZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5BY2Nlc3MgPSBbXTtcclxuICAgICAgICB0aGlzLkNoYXJhY3RlcnMgPSBbXTtcclxuICAgICAgICB0aGlzLlNoYXJlZEludmVudG9yeSA9IFtdO1xyXG4gICAgICAgIHRoaXMuQXBpS2V5ID0gXCJcIjtcclxuICAgICAgICB0aGlzLkxhc3RVcGRhdGUgPSAwO1xyXG4gICAgICAgIHRoaXMuQmFua0ludmVudG9yeSA9IFtdXHJcbiAgICAgICAgdGhpcy5NYXRlcmlhbFN0b3JhZ2UgPSBbXVxyXG4gICAgfVxyXG5cclxuICAgIHBvcHVsYXRlRnJvbUFwaUtleShhcGlLZXk6IHN0cmluZykgOiBQcm9taXNlPEdXMkFjY291bnRJbmZvPiB7XHJcblxyXG4gICAgICAgIHRoaXMuQXBpS2V5ID0gYXBpS2V5O1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxHVzJBY2NvdW50SW5mbz4oKHJlc29sdmUsZXJyb3IpPT57XHJcbiAgICAgICAgICAgIC8vIDEuIEdldCBBY2NvdW50IEluZm9cclxuICAgICAgICAgICAgbmV3IEdXMkFQSV9DYWxsKGFwaUtleSkuR2V0QWNjb3VudERhdGEoKS50aGVuKHJlcz0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BY2NvdW50TmFtZSA9IHJlcy5OYW1lO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BY2Nlc3MgPSByZXMuQWNjZXNzO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBwYXJhbGxlbFJlcXVlc3RzID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMi4xIEdldCBTaGFyZWQgSW52ZW50b3J5IERhdGFcclxuICAgICAgICAgICAgICAgIHBhcmFsbGVsUmVxdWVzdHMucHVzaChuZXcgR1cyQVBJX0NhbGwoYXBpS2V5KS5HZXRTaGFyZWRJbnZlbnRvcnlEYXRhKCkudGhlbigocmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuU2hhcmVkSW52ZW50b3J5ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXMuSXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5TaGFyZWRJbnZlbnRvcnkucHVzaChyZXMuSXRlbXNbaV0gIT09IG51bGwgPyBHVzJJdGVtLmZyb21KU09OKHJlcy5JdGVtc1tpXSkgOiBudWxsKTsgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnI9PntcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDIuMiBHZXQgQmFuayBJbnZlbnRvcnkgRGF0YVxyXG4gICAgICAgICAgICAgICAgcGFyYWxsZWxSZXF1ZXN0cy5wdXNoKG5ldyBHVzJBUElfQ2FsbChhcGlLZXkpLkdldEJhbmtEYXRhKCkudGhlbigocmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQmFua0ludmVudG9yeSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzLkl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQmFua0ludmVudG9yeS5wdXNoKHJlcy5JdGVtc1tpXSAhPT0gbnVsbCA/IEdXMkl0ZW0uZnJvbUpTT04ocmVzLkl0ZW1zW2ldKSA6IG51bGwpOyAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMi4zLiBHZXQgQ2hhcmFjdGVyIERhdGFcclxuICAgICAgICAgICAgICAgIHBhcmFsbGVsUmVxdWVzdHMucHVzaChuZXcgR1cyQVBJX0NhbGwoYXBpS2V5KS5HZXRDaGFyYWN0ZXJMaXN0KCkudGhlbihyZXM9PntcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoYXJhY3RlclByb21pc2VzIDogUHJvbWlzZTxHVzJDaGFyYWN0ZXI+W10gPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IENoYXJhY3RlciBvYmplY3QgZm9yIGVhY2ggY2hhcmFjdGVyIGluIHRoZSBsaXN0IGFuZFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlc29sdmUgdGhlIHByb21pc2UgYXMgc29vbiBhcyB0aGUgcG9wdWxhdGlvbiBvZiBhbGwgb2YgdGhlbVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlzIGRvbmVcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGFyTmFtZSA9IHJlc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0NoYXJhY3RlciA6IEdXMkNoYXJhY3RlciA9IG5ldyBHVzJDaGFyYWN0ZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5DaGFyYWN0ZXJzLnB1c2gobmV3Q2hhcmFjdGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyUHJvbWlzZXMucHVzaChuZXdDaGFyYWN0ZXIucG9wdWxhdGVGcm9tQXBpKGFwaUtleSxjaGFyTmFtZSkpOyAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEdpdmUgYmFjayB0aGlzIG9iamVjdCwgd2hlbiBhbGwgY2hhcmFjdGVyIGhhdmUgc3VjY2Vzc2Z1bGx5IHBvcHVsYXRlZCB0aGlzIG9iamVjdCBpc1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFsc28gZnVsbHkgcG9wdWxhdGVkIHdpdGggZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChjaGFyYWN0ZXJQcm9taXNlcykudGhlbihyZXM9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTm8gbmVlZCB0byBkbyBhbnl0aGluZyBoZXJlLCB3ZSBqdXN0IHdhaXQgdW50aWwgYWxsIHByb2Nlc3NlcyBhcmUgZG9uZSB3aGljaCBtZWFucyBldmVyeXRoaW5nIGhhcyBiZWVuIHBvcHVsYXRlZFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyPT57XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgICAgICAgICBwYXJhbGxlbFJlcXVlc3RzLnB1c2gobmV3IEdXMkFQSV9DYWxsKGFwaUtleSkuR2V0TWF0ZXJpYWxTdG9yYWdlRGF0YSgpLnRoZW4ocmVzPT57XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5NYXRlcmlhbFN0b3JhZ2UgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlcy5JdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLk1hdGVyaWFsU3RvcmFnZS5wdXNoKHJlcy5JdGVtc1tpXSAhPT0gbnVsbCA/IEdXMkl0ZW0uZnJvbUpTT04ocmVzLkl0ZW1zW2ldKSA6IG51bGwpOyAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHdpdGggYWNjb3VudCBvYmplY3Qgb25jZSBhbGwgcGFyYWxsZWwgcmVxdWVzdHMgYXJlIGRvbmUuXHJcbiAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChwYXJhbGxlbFJlcXVlc3RzKS50aGVuKHJlcz0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuTGFzdFVwZGF0ZSA9IERhdGUubm93KClcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLSBBQ0NPVU5UIFNVQ0VTU0ZVTExZIElOREVYRUQgLS0tLS0tLS1cIilcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnI9PntcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICAgICAgZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRpbWVTaW5jZUxhc3RVcGRhdGVkKCkgOiBudW1iZXJ7XHJcbiAgICAgICAgcmV0dXJuIERhdGUubm93KCkgLSB0aGlzLkxhc3RVcGRhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgcG9wdWxhdGVXaXRoRGF0YShkYXRhOiBDaGFyYWN0ZXJFcVRlbXBsYXRlUmVzdWx0W10gKXtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRhdGFbaV07XHJcbiAgICAgICAgICAgIC8vIGNoZWNrIHdldGhlciBhIGNoYXJhY3RlciBsaWtlIHRoYXQgYWxyZWFkeSBleGlzdHMgaW4gdGhlIGNoYXJhY3RlciBsaXN0XHJcbiAgICAgICAgICAgIGlmKHRoaXMuQ2hhcmFjdGVycy5zb21lKChlKSA9PiBlLkNoYXJhY3Rlck5hbWUgPT09IGVsZW1lbnQuQ2hhcmFjdGVyTmFtZSkpe1xyXG4gICAgICAgICAgICAgICAgLy8gRXhpc3RzLCBqdXN0IGFwcGVuZCBuZXcgZXF1aXBtZW50IFRlbXBsYXRlXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuQ2hhcmFjdGVycy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuQ2hhcmFjdGVyc1tqXS5DaGFyYWN0ZXJOYW1lID09IGVsZW1lbnQuQ2hhcmFjdGVyTmFtZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQ2hhcmFjdGVyc1tqXS5FcXVpcG1lbnRUYWJzLnB1c2gobmV3IEdXMkVxdWlwbWVudFRhYigpLnBvcHVsYXRlRnJvbUpzb25PYmplY3QoZWxlbWVudC5FcXVpcG1lbnQpKTtcclxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gRG9lcyBub3QgZXhpc3QsIGNyZWF0ZSBuZXcgY2hhcmFjdGVyXHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3Q2hhciA6IEdXMkNoYXJhY3RlciA9IG5ldyBHVzJDaGFyYWN0ZXIoKTtcclxuICAgICAgICAgICAgICAgIG5ld0NoYXIuQ2hhcmFjdGVyTmFtZSA9IGVsZW1lbnQuQ2hhcmFjdGVyTmFtZTtcclxuICAgICAgICAgICAgICAgIG5ld0NoYXIuRXF1aXBtZW50VGFicyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgbmV3Q2hhci5FcXVpcG1lbnRUYWJzLnB1c2gobmV3IEdXMkVxdWlwbWVudFRhYigpLnBvcHVsYXRlRnJvbUpzb25PYmplY3QoZWxlbWVudC5FcXVpcG1lbnQpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuQ2hhcmFjdGVycy5wdXNoKG5ld0NoYXIpO1xyXG4gICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXNvbHZlQ2hhcmFjdGVyc0Zyb21BUEkoYXBpS2V5OiBzdHJpbmcpIDogUHJvbWlzZTxHVzJBY2NvdW50SW5mbz4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgZXJyb3IpPT57XHJcblxyXG4gICAgICAgICAgICBsZXQgcGVuZGluZ1JlcXVlc3RzIDogUHJvbWlzZTxDaGFyYWN0ZXJSZXN1bHQ+W10gPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkNoYXJhY3RlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoYXJhY3RlciA9IHRoaXMuQ2hhcmFjdGVyc1tpXTtcclxuICAgICAgICAgICAgICAgIHBlbmRpbmdSZXF1ZXN0cy5wdXNoKG5ldyBHVzJBUElfQ2FsbChhcGlLZXkpLkdldENoYXJhY3RlckRhdGEodGhpcy5DaGFyYWN0ZXJzW2ldLkNoYXJhY3Rlck5hbWUpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgUHJvbWlzZS5hbGwocGVuZGluZ1JlcXVlc3RzKS50aGVuKHJlc3VsdHM9PntcclxuICAgICAgICAgICAgICAgIC8vIHdyaXRlIGJhY2sgZGF0YSB0byB0aGUgcHJvcGVyIGNoYXJhY3RlclxyXG4gICAgICAgICAgICAgICAgcmVzdWx0cy5mb3JFYWNoKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkNoYXJhY3RlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5DaGFyYWN0ZXJzW2ldLkNoYXJhY3Rlck5hbWUgPT09IHJlc3VsdC5DaGFyYWN0ZXJOYW1lKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQ2hhcmFjdGVyc1tpXS5Qcm9mZXNzaW9uID0gcmVzdWx0LkNoYXJhY3RlclByb2Zlc3Npb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkNoYXJhY3RlcnNbaV0uU2V0QWN0aXZlUHZFU3BlY2lhbGl6YXRpb25zKHJlc3VsdC5DaGFyYWN0ZXJQdkVTcGVjcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkNoYXJhY3RlcnNbaV0uQmFncyA9IHJlc3VsdC5DaGFyYWN0ZXJCYWdzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIEZpbmRJdGVtSW5BY2NvdW50KHNlYXJjaElkIDogbnVtYmVyKSA6IEdXMkFjY291bnRTZWFyY2hSZXN1bHRbXSB7XHJcblxyXG4gICAgICAgIGxldCBoaXRzIDogR1cyQWNjb3VudFNlYXJjaFJlc3VsdFtdID0gW107XHJcblxyXG4gICAgICAgIC8vIDEuIENoZWNrIFNoYXJlZCBJbnZlbnRvcnkgU2xvdHNcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuU2hhcmVkSW52ZW50b3J5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuU2hhcmVkSW52ZW50b3J5W2ldICE9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuU2hhcmVkSW52ZW50b3J5W2ldPy5JdGVtSUQgPT09IHNlYXJjaElkIHx8IHRoaXMuU2hhcmVkSW52ZW50b3J5W2ldPy5oYXNJdGVtSWRBc1VwZ3JhZGVPckluZnVzaW9uKHNlYXJjaElkKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaXRlbSBpdHNlbFxyXG4gICAgICAgICAgICAgICAgICAgIGhpdHMucHVzaCh7dXVpZDogR2VuZXJhdGVVSUQoKSxDaGFyYWN0ZXI6IG51bGwsRXF1aXBtZW50VGFiTnI6IDAsIEVxdWlwbWVudFRhYk5hbWU6XCJTaGFyZWQgQWNjb3VudCBJbnZlbnRvcnlcIiwgU2xvdDogU3RyaW5nKGkrMSksIExvY2F0aW9uOlwiU2hhcmVkIEludmVudG9yeVwiLENvdW50OiB0aGlzLlNoYXJlZEludmVudG9yeVtpXS5Db3VudH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAyLiBDaGVjayBCYW5rXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkJhbmtJbnZlbnRvcnkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYodGhpcy5CYW5rSW52ZW50b3J5W2ldICE9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuQmFua0ludmVudG9yeVtpXSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuQmFua0ludmVudG9yeVtpXT8uSXRlbUlEID09PSBzZWFyY2hJZCB8fCB0aGlzLkJhbmtJbnZlbnRvcnlbaV0/Lmhhc0l0ZW1JZEFzVXBncmFkZU9ySW5mdXNpb24oc2VhcmNoSWQpKXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYmFua1RhYiA6IG51bWJlciA9IE1hdGguZmxvb3IoaSAvIDMwKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc2xvdCA9IGkgLSAoYmFua1RhYiAqIDMwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaGl0cy5wdXNoKHt1dWlkOiBHZW5lcmF0ZVVJRCgpLENoYXJhY3RlcjogbnVsbCxFcXVpcG1lbnRUYWJOcjogMCwgRXF1aXBtZW50VGFiTmFtZTpcIkFjY291bnQgQmFua1wiLCBTbG90OiBcIlRhYjogXCIrKGJhbmtUYWIrMSkgK1wiIFNsb3Q6XCIgKyAoc2xvdCsxKSwgTG9jYXRpb246XCJBY2NvdW50IEJhbmtcIixDb3VudDp0aGlzLkJhbmtJbnZlbnRvcnlbaV0uQ291bnR9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICAvLyAyLiBDaGVjayBNYXRlcmlhbCBTdG9yYWdlXHJcbiAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuTWF0ZXJpYWxTdG9yYWdlKVxyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuTWF0ZXJpYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuTWF0ZXJpYWxTdG9yYWdlW2ldICE9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuTWF0ZXJpYWxTdG9yYWdlW2ldKTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuTWF0ZXJpYWxTdG9yYWdlW2ldPy5JdGVtSUQgPT09IHNlYXJjaElkIHx8IHRoaXMuTWF0ZXJpYWxTdG9yYWdlW2ldPy5oYXNJdGVtSWRBc1VwZ3JhZGVPckluZnVzaW9uKHNlYXJjaElkKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaGl0cy5wdXNoKHt1dWlkOiBHZW5lcmF0ZVVJRCgpLENoYXJhY3RlcjogbnVsbCxFcXVpcG1lbnRUYWJOcjogMCwgRXF1aXBtZW50VGFiTmFtZTpcIk1hdGVyaWFsIFN0b3JhZ2VcIiwgU2xvdDogXCItXCIsIExvY2F0aW9uOlwiTWF0ZXJpYWwgU3RvcmFnZVwiLENvdW50OnRoaXMuTWF0ZXJpYWxTdG9yYWdlW2ldLkNvdW50fSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyA0LiBJdGVyYXRlIG92ZXIgYWxsIGNoYXJhY3RlcnNcclxuICAgICAgICB0aGlzLkNoYXJhY3RlcnMuZm9yRWFjaChjaGFyYWN0ZXIgPT4ge1xyXG4gICAgICAgICAgICAvLyA1LiBDaGVjayBcImdhdGhlcmluZyBzbG90c1wiXHJcbiAgICAgICAgICAgIGxldCBzbG90c1RvQ2hlY2sgOiBzdHJpbmdbXSA9IFtcIlNpY2tsZVwiLCBcIkF4ZVwiLCBcIlBpY2tcIixcIkZpc2hpbmdSb2RcIixcIkZpc2hpbmdCYWl0XCIsXCJGaXNoaW5nTHVyZVwiLFwiUG93ZXJDb3JlXCIsXCJTZW5zb3J5QXJyYXlcIixcIlNlcnZpY2VDaGlwXCIsXCJSZWxpY1wiXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbG90c1RvQ2hlY2subGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50IDogR1cySXRlbSB8IG51bGwgPSBjaGFyYWN0ZXIuR2V0RGVmYXVsdEVxdWlwbWVudFNsb3Qoc2xvdHNUb0NoZWNrW2ldKTtcclxuICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQgIT09IG51bGwgJiYgZWxlbWVudC5JdGVtSUQgPT09IHNlYXJjaElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGl0cy5wdXNoKHt1dWlkOiBHZW5lcmF0ZVVJRCgpLENoYXJhY3RlcjogY2hhcmFjdGVyLEVxdWlwbWVudFRhYk5yOiAwLCBFcXVpcG1lbnRUYWJOYW1lOlwiRGVmYXVsdCBFcXVpcG1lbnRcIiwgU2xvdDogc2xvdHNUb0NoZWNrW2ldLCBMb2NhdGlvbjpcIkVxdWlwbWVudFwiLENvdW50OjF9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gNi4gQ2hlY2sgSW52ZW50b3J5XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hhcmFjdGVyLkJhZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJhZyA9IGNoYXJhY3Rlci5CYWdzW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYoYmFnID09IG51bGwpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBiYWcuSW52ZW50b3J5Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGJhZy5JbnZlbnRvcnlbal07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaXRlbSAhPT0gbnVsbCAmJiBpdGVtLkl0ZW1JRCA9PT0gc2VhcmNoSWQgfHwgaXRlbT8uaGFzSXRlbUlkQXNVcGdyYWRlT3JJbmZ1c2lvbihzZWFyY2hJZCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaXRzLnB1c2goe3V1aWQ6IEdlbmVyYXRlVUlEKCksQ2hhcmFjdGVyOiBjaGFyYWN0ZXIsRXF1aXBtZW50VGFiTnI6IDAsIEVxdWlwbWVudFRhYk5hbWU6XCJJbnZlbnRvcnlcIiwgU2xvdDogXCJCYWc6IFwiICsgKGkrMSkgK1wiIFNsb3Q6IFwiICsgKGorMSksIExvY2F0aW9uOlwiSW52ZW50b3J5XCIsQ291bnQ6aXRlbS5Db3VudH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gNy4gQ2hlY2sgYWxsIEVxdWlwbWVudCBUYWJzXHJcbiAgICAgICAgICAgIGNoYXJhY3Rlci5FcXVpcG1lbnRUYWJzLmZvckVhY2goZXF1aXBtZW50VGFiID0+IHtcclxuICAgICAgICAgICAgICAgIGVxdWlwbWVudFRhYi5lcXVpcG1lbnQuZm9yRWFjaChpdGVtID0+IHsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGl0ZW0gaW4gcXVlc3Rpb24gaXMgdGhlIGl0ZW0gd2UgYXJlIGxvb2tpbmcgZm9yXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaXRlbS5pZCA9PT0gc2VhcmNoSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpdHMucHVzaCh7dXVpZDogR2VuZXJhdGVVSUQoKSwgQ2hhcmFjdGVyOiBjaGFyYWN0ZXIsRXF1aXBtZW50VGFiTnI6IGVxdWlwbWVudFRhYi5pZCwgRXF1aXBtZW50VGFiTmFtZTogZXF1aXBtZW50VGFiLm5hbWUsIFNsb3Q6IGl0ZW0uc2xvdCxMb2NhdGlvbjpcIkVxdWlwbWVudCBUYWJcIixDb3VudDoxfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBpdGVtIGlzIG9uZSBvZiB0aGUgaW5mdXNpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaXRlbS5pbmZ1c2lvbnMgIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW5mdXNpb25zLmZvckVhY2goaW5mdXNpb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaW5mdXNpb24gPT09IHNlYXJjaElkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaXRzLnB1c2goe3V1aWQ6IEdlbmVyYXRlVUlEKCksQ2hhcmFjdGVyOiBjaGFyYWN0ZXIsRXF1aXBtZW50VGFiTnI6IGVxdWlwbWVudFRhYi5pZCwgRXF1aXBtZW50VGFiTmFtZTogZXF1aXBtZW50VGFiLm5hbWUsIFNsb3Q6IGl0ZW0uc2xvdCxMb2NhdGlvbjpcIkVxdWlwbWVudCBUYWJcIixDb3VudDoxfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGl0ZW0gaXMgb25lIG9mIHRoZSB1cGdyYWRlc1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGl0ZW0udXBncmFkZXMgIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udXBncmFkZXMuZm9yRWFjaCh1cGdyYWRlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHVwZ3JhZGUgPT09IHNlYXJjaElkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaXRzLnB1c2goe3V1aWQ6IEdlbmVyYXRlVUlEKCksQ2hhcmFjdGVyOiBjaGFyYWN0ZXIsRXF1aXBtZW50VGFiTnI6IGVxdWlwbWVudFRhYi5pZCwgRXF1aXBtZW50VGFiTmFtZTogZXF1aXBtZW50VGFiLm5hbWUsIFNsb3Q6IGl0ZW0uc2xvdCxMb2NhdGlvbjpcIkVxdWlwbWVudCBUYWJcIixDb3VudDoxfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhpdHM7XHJcbiAgICB9XHJcblxyXG4gICAgU2VyaWFsaXplKCkgOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzKTtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIERlc2VyaWFsaXplR1cyQWNjb3VudEluZm8oZGF0YTogc3RyaW5nKSA6IEdXMkFjY291bnRJbmZvIHtcclxuXHJcbiAgICBsZXQgZGF0YU9iaiA6IEdXMkFjY291bnRJbmZvID0gSlNPTi5wYXJzZShkYXRhKTtcclxuICAgIC8vIDEuIGFzc2lnbiBwcm90b3R5cGVzIHRvIG1haW5cclxuICAgIGRhdGFPYmogPSBPYmplY3QuYXNzaWduKG5ldyBHVzJBY2NvdW50SW5mbygpLGRhdGFPYmopO1xyXG5cclxuICAgIC8vIDIuIHJlYXNzaWduIHByb3RvdHlwZXMgdG8gc2hhcmVkIGludmVudG9yeVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhT2JqLlNoYXJlZEludmVudG9yeS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmKGRhdGFPYmouU2hhcmVkSW52ZW50b3J5W2ldICE9PSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZGF0YU9iai5TaGFyZWRJbnZlbnRvcnlbaV0gPSBPYmplY3QuYXNzaWduKG5ldyBHVzJJdGVtKCksZGF0YU9iai5TaGFyZWRJbnZlbnRvcnlbaV0pO1xyXG4gICAgICAgIH0gICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy8gMy4gcmVhc3NpbmcgcHJvdG90eXBlcyB0byBiYW5rXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFPYmouQmFua0ludmVudG9yeS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmKGRhdGFPYmouQmFua0ludmVudG9yeVtpXSAhPT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRhdGFPYmouQmFua0ludmVudG9yeVtpXSA9IE9iamVjdC5hc3NpZ24obmV3IEdXMkl0ZW0oKSxkYXRhT2JqLkJhbmtJbnZlbnRvcnlbaV0pO1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcblxyXG4gICAgLy8gNC4gcmVhc3NpbmcgcHJvdG90eXBlcyB0byBtYXRlcmlhbCBzdG9yYWdlXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFPYmouTWF0ZXJpYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYoZGF0YU9iai5NYXRlcmlhbFN0b3JhZ2VbaV0gIT09IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkYXRhT2JqLk1hdGVyaWFsU3RvcmFnZVtpXSA9IE9iamVjdC5hc3NpZ24obmV3IEdXMkl0ZW0oKSxkYXRhT2JqLk1hdGVyaWFsU3RvcmFnZVtpXSk7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuXHJcbiAgICAvLyA1LiBpdGVyYXRlIG92ZXIgYWxsIFwiY2hhcmFjdGVyXCIgZW50cmllcyBhbmQgcmVhc3NpZ24gcHJvdG90eXBlXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFPYmouQ2hhcmFjdGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGRhdGFPYmouQ2hhcmFjdGVyc1tpXSA9IE9iamVjdC5hc3NpZ24obmV3IEdXMkNoYXJhY3RlcigpLGRhdGFPYmouQ2hhcmFjdGVyc1tpXSk7XHJcbiAgICAgICAgLy8gMy4gdGVsbCBjaGFyYWN0ZXIgb2JqZWN0IHRvIGRvIHRoZSBzYW1lIGZvciBvd24gY2hpbGRyZW5cclxuICAgICAgICBkYXRhT2JqLkNoYXJhY3RlcnNbaV0uUmVhc3NpZ25Qcm90b3R5cGVzKCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGF0YU9iajtcclxuICAgIFxyXG59IiwgImltcG9ydCB7IEdXMkFQSV9DYWxsIH0gZnJvbSBcIi4vR1cyQVBJX0NhbGxcIjtcclxuaW1wb3J0IHsgR1cyQmFnIH0gZnJvbSBcIi4vR1cyQmFnXCI7XHJcbmltcG9ydCB7IEdXMkVxdWlwbWVudFRhYiB9IGZyb20gXCIuL0dXMkVxdWlwbWVudFRhYlwiO1xyXG5pbXBvcnQgeyBHVzJJdGVtIH0gZnJvbSBcIi4vR1cySXRlbVwiO1xyXG5cclxuaW50ZXJmYWNlIEVTcGVjTG9va3Vwe1trZXk6bnVtYmVyXTogc3RyaW5nfTtcclxuY29uc3QgRWxpdGVTcGVjTG9va3VwVGFibGUgOiBFU3BlY0xvb2t1cCA9IHtcclxuICAgIC8vIEhPVFxyXG4gICAgNTogXCJEcnVpZFwiLFxyXG4gICAgNzogXCJEYXJlZGV2aWxcIixcclxuICAgIDE4OiBcIkJlcnNlcmtlclwiLFxyXG4gICAgMjc6IFwiRHJhZ29uaHVudGVyXCIsXHJcbiAgICAzNDogXCJSZWFwZXJcIixcclxuICAgIDQwOiBcIkNocm9ub21hbmNlclwiLFxyXG4gICAgNDM6IFwiU2NyYXBwZXJcIixcclxuICAgIDQ4OiBcIlRlbXBlc3RcIixcclxuICAgIDUyOiBcIkhlcmFsZFwiLFxyXG5cclxuICAgIC8vIFBPRlxyXG4gICAgNTU6IFwiU291bGJlYXN0XCIsXHJcbiAgICA1NjogXCJXZWF2ZXJcIixcclxuICAgIDU3OiBcIkhvbG9zbWl0aFwiLFxyXG4gICAgNTg6IFwiRGVhZGV5ZVwiLFxyXG4gICAgNTk6IFwiTWlyYWdlXCIsXHJcbiAgICA2MDogXCJTY291cmdlXCIsXHJcbiAgICA2MTogXCJTcGVsbGJyZWFrZXJcIixcclxuICAgIDYyOiBcIkZpcmVicmFuZFwiLFxyXG4gICAgNjM6IFwiUmVuZWdhZGVcIixcclxuXHJcbiAgICAvLyBFb0RcclxuICAgIDY0OiBcIkhhcmJpbmdlclwiLFxyXG4gICAgNjU6IFwiV2lsbGJlbmRlclwiLFxyXG4gICAgNjY6IFwiVmlydHVvc29cIixcclxuICAgIDY3OiBcIkNhdGFseXN0XCIsXHJcbiAgICA2ODogXCJCbGFkZVN3b3JuXCIsXHJcbiAgICA2OTogXCJWaW5kaWNhdG9yXCIsXHJcbiAgICA3MDogXCJNZWNoYW5pc3RcIixcclxuICAgIDcxOiBcIlNwZWN0ZXJcIixcclxuICAgIDcyOiBcIlVudGFtZWRcIlxyXG59XHJcblxyXG4vLyBUb2RvOiAoQUspIHByb3Blcmx5IG1vdmUgdG8gc2VwZXJhdGUgZmlsZSwgbWF5YmUgbWVyZ2Ugd2l0aCBHVzJJdGVtPyBDcmVhdGUgR1cySW52ZW50b3J5SXRlbT9cclxuZXhwb3J0IGludGVyZmFjZSBHVzJKc29uSXRlbVdyYXBwZXIge1xyXG4gICAgaWQgOiBudW1iZXI7XHJcbiAgICBzbG90IDogc3RyaW5nO1xyXG4gICAgdXBncmFkZXMgOiBudW1iZXJbXTtcclxuICAgIGluZnVzaW9ucyA6IG51bWJlcltdO1xyXG4gICAgc2tpbjogbnVtYmVyO1xyXG4gICAgc3RhdHM6IG9iamVjdDtcclxuICAgIGJpbmRpbmc6IHN0cmluZztcclxuICAgIGR5ZXM6IG51bWJlcltdO1xyXG4gICAgY291bnQ6bnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdXMkpzb25CYWdXcmFwcGVyIHtcclxuICAgIGlkIDogbnVtYmVyO1xyXG4gICAgaW52ZW50b3J5IDogR1cySnNvbkl0ZW1XcmFwcGVyW107XHJcbiAgICBzaXplOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHVzJDaGFyYWN0ZXJ7XHJcbiAgICBDaGFyYWN0ZXJOYW1lOiBzdHJpbmc7XHJcbiAgICBFcXVpcG1lbnRUYWJzOiBHVzJFcXVpcG1lbnRUYWJbXTtcclxuXHJcbiAgICBQcm9mZXNzaW9uOiBzdHJpbmc7XHJcbiAgICBFbGl0ZVNwZWM6IHN0cmluZztcclxuXHJcbiAgICBCYXNlRXF1aXBtZW50IDogKEdXMkl0ZW18bnVsbClbXTtcclxuICAgIEJhZ3M6IChHVzJCYWd8bnVsbClbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuQ2hhcmFjdGVyTmFtZT1cIlwiO1xyXG4gICAgICAgIHRoaXMuRXF1aXBtZW50VGFicz1bXVxyXG4gICAgICAgIHRoaXMuUHJvZmVzc2lvbj1cIlwiO1xyXG4gICAgICAgIHRoaXMuRWxpdGVTcGVjID0gXCJOb1wiO1xyXG4gICAgICAgIHRoaXMuQmFncyA9IFtdO1xyXG4gICAgICAgIHRoaXMuQmFzZUVxdWlwbWVudCA9IFtdO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwb3B1bGF0ZUZyb21BcGkoYXBpS2V5OiBzdHJpbmcsIGNoYXJhY3Rlck5hbWU6IHN0cmluZykgOiBQcm9taXNlPEdXMkNoYXJhY3Rlcj57XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPEdXMkNoYXJhY3Rlcj4oKHJlc29sdmUsZXJyb3IpPT57XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyAxLiBHZXQgQ2hhcmFjdGVyIE1ldGFEYXRhXHJcbiAgICAgICAgICAgIG5ldyBHVzJBUElfQ2FsbChhcGlLZXkpLkdldENoYXJhY3RlckRhdGEoY2hhcmFjdGVyTmFtZSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzPT57XHJcbiAgICAgICAgICAgICAgICAvLyBTZXQgUHJpbWFyeSBNZXRhIERhdGEgYW5kIEludmVudG9yeSBMaXN0XHJcbiAgICAgICAgICAgICAgICB0aGlzLkNoYXJhY3Rlck5hbWUgPSByZXMuQ2hhcmFjdGVyTmFtZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuUHJvZmVzc2lvbiA9IHJlcy5DaGFyYWN0ZXJQcm9mZXNzaW9uO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5TZXRBY3RpdmVQdkVTcGVjaWFsaXphdGlvbnMocmVzLkNoYXJhY3RlclB2RVNwZWNzKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLkJhZ3MgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzLkNoYXJhY3RlckJhZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihyZXMuQ2hhcmFjdGVyQmFnc1tpXSAhPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBiYWcgPSBuZXcgR1cyQmFnKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhZy5JdGVtSUQgPSByZXMuQ2hhcmFjdGVyQmFnc1tpXS5pZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhZy5JbnZlbnRvcnkgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByZXMuQ2hhcmFjdGVyQmFnc1tpXS5pbnZlbnRvcnkubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSByZXMuQ2hhcmFjdGVyQmFnc1tpXS5pbnZlbnRvcnlbal07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWcuSW52ZW50b3J5LnB1c2goZWxlbWVudCA9PSBudWxsID8gbnVsbCA6IEdXMkl0ZW0uZnJvbUpTT04oZWxlbWVudCkpOyAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhZy5TaXplID0gcmVzLkNoYXJhY3RlckJhZ3NbaV0uc2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5CYWdzLnB1c2goYmFnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5CYWdzLnB1c2gobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IHBhcmFsbGVsTG9va3VwcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDIuMS4gR2V0IERlZmF1bHQgRXF1aXBtZW50XHJcbiAgICAgICAgICAgICAgICBwYXJhbGxlbExvb2t1cHMucHVzaChuZXcgR1cyQVBJX0NhbGwoYXBpS2V5KS5HZXREZWZhdWx0RXF1aXBtZW50RGF0YShjaGFyYWN0ZXJOYW1lKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzPT57XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5CYXNlRXF1aXBtZW50ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXMuRXF1aXBtZW50Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQmFzZUVxdWlwbWVudC5wdXNoKHJlcy5FcXVpcG1lbnRbaV0gIT09IG51bGwgPyBHVzJJdGVtLmZyb21KU09OKHJlcy5FcXVpcG1lbnRbaV0pIDogbnVsbCk7ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAyLjIuIEdldCBFcXVpcG1lbnQgVGFiIExpc3RcclxuICAgICAgICAgICAgICAgIHBhcmFsbGVsTG9va3Vwcy5wdXNoKG5ldyBHVzJBUElfQ2FsbChhcGlLZXkpLkdldEVxdWlwbWVudFRlbXBsYXRlcyhjaGFyYWN0ZXJOYW1lKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzPT57XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIG5ldyBFcXVpcG1lbnQgVGFicyBmb3IgZWFjaCB0YWIgaW4gdGhlIGxpc3QgYW5kIHBvcHVsYXRlIGl0IGZyb21cclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgYXBpXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVxdWlwbWVudFRhYlByb21pc2VzIDogUHJvbWlzZTxHVzJFcXVpcG1lbnRUYWI+W10gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlcy5UZW1wbGF0ZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFiSWQgPSByZXMuVGVtcGxhdGVMaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3RXF1aXBtZW50VGFiIDogR1cyRXF1aXBtZW50VGFiID0gbmV3IEdXMkVxdWlwbWVudFRhYigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcXVpcG1lbnRUYWJQcm9taXNlcy5wdXNoKG5ld0VxdWlwbWVudFRhYi5wb3B1bGF0ZUZyb21BcGkoYXBpS2V5LGNoYXJhY3Rlck5hbWUsdGFiSWQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5FcXVpcG1lbnRUYWJzLnB1c2gobmV3RXF1aXBtZW50VGFiKTsgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFmdGVyIGFsbCB0YWJzIGFyZSBwb3B1bGF0ZWQsIHJldHVybiBvdXJzZWx2ZXNcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoZXF1aXBtZW50VGFiUHJvbWlzZXMpLnRoZW4ocmVzPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRvIG5vdGhpbmcgaGVyZSwgdGhpcyBqdXN0IG1lYW5zIGFsbCBwcm9jZXNzZXMgaGF2ZSByZXR1cm5lZCB0aGUgcHJvbWlzZSwgcmVzb2x1dGlvbiBpcyBvbmNlIGFsbCBwYXJhbGxlbCBwcm9taXNlcyBhcmUgZG9uZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyPT57XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyByZXNvbHZlIG9uY2UgMi4xIGFuZCAyLjIgaGF2ZSByZXNvbHZlZFxyXG4gICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwocGFyYWxsZWxMb29rdXBzKS50aGVuKHJlcz0+e1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFsbCBQcm9taXNlcyBvbiBpbmRpdmlkdWFsIGNoYXJhY3RlciByZXNvbHZlZC5cclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnI9PntcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICAgICAgZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc3dpdGNoIHJlc29sdmUgLS0gbm8gbmVlZCBmb3IgYXBpIGNhbGxzLCB0aGlzIGxpc3Qgb25seSB1cGRhdGVzIG9uY2UgYSB5ZWFyIGFueXdheVxyXG4gICAgUmVzb2x2ZVNwZWNJZFRvRWxpdGVTcGVjKGlkOiBudW1iZXIpIDogc3RyaW5ne1xyXG4gICAgICAgIGlmKEVsaXRlU3BlY0xvb2t1cFRhYmxlW2lkXSAhPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgcmV0dXJuIEVsaXRlU3BlY0xvb2t1cFRhYmxlW2lkXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFwiTm9cIjtcclxuICAgIH1cclxuXHJcbiAgICBTZXRBY3RpdmVQdkVTcGVjaWFsaXphdGlvbnMocHZlU3BlY3M6IGFueSl7XHJcblxyXG4gICAgICAgIC8vIDMgc3BlY3MgYXJlIHNldCwgdGhhdCBtZWFucyBhbiBlbGl0ZSBzcGVjIENPVUxEIGJlIHNldFxyXG4gICAgICAgIGlmKHB2ZVNwZWNzLmxlbmd0aCA9PSAzKXtcclxuICAgICAgICAgICAgbGV0IHRoaXJkU3BlYyA9IHB2ZVNwZWNzWzJdO1xyXG4gICAgICAgICAgICB0aGlzLkVsaXRlU3BlYyA9IHRoaXMuUmVzb2x2ZVNwZWNJZFRvRWxpdGVTcGVjKHRoaXJkU3BlYy5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEdldENoYXJhY3RlckNsYXNzKCkgOnN0cmluZyB7XHJcbiAgICAgICAgaWYodGhpcy5FbGl0ZVNwZWMgIT09IFwiTm9cIikgcmV0dXJuIHRoaXMuRWxpdGVTcGVjO1xyXG4gICAgICAgIHJldHVybiB0aGlzLlByb2Zlc3Npb247XHJcbiAgICB9XHJcblxyXG4gICAgUmVhc3NpZ25Qcm90b3R5cGVzKCl7XHJcbiAgICAgICAgLy8gMS4gUmVhc3NpZ24gUHJvdG90eXBlcyBmb3IgRXF1aXBtZW50IFRhYnNcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuRXF1aXBtZW50VGFicy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLkVxdWlwbWVudFRhYnNbaV0gPSBPYmplY3QuYXNzaWduKG5ldyBHVzJFcXVpcG1lbnRUYWIoKSx0aGlzLkVxdWlwbWVudFRhYnNbaV0pO1xyXG4gICAgICAgICAgICB0aGlzLkVxdWlwbWVudFRhYnNbaV0uUmVhc3NpZ25Qcm90b3R5cGVzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIDIuIFJlYXNzaWduIFByb3RvdHlwZXMgZm9yIEJhZ3NcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuQmFncy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZih0aGlzLkJhZ3NbaV0gIT09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5CYWdzW2ldID0gT2JqZWN0LmFzc2lnbihuZXcgR1cyQmFnKCksdGhpcy5CYWdzW2ldKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuQmFnc1tpXT8uUmVhc3NpZ25Qcm90b3R5cGVzKCk7XHJcbiAgICAgICAgICAgIH0gICAgIFxyXG4gICAgICAgIH0gIFxyXG4gICAgICAgIC8vIDMuIFJlYXNzaWduIEJhc2UgRXF1aXBtZW50IFByb3RvdHlwZXNcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuQmFzZUVxdWlwbWVudC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZih0aGlzLkJhc2VFcXVpcG1lbnRbaV0gIT09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5CYXNlRXF1aXBtZW50W2ldID0gT2JqZWN0LmFzc2lnbihuZXcgR1cySXRlbSgpLHRoaXMuQmFzZUVxdWlwbWVudFtpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICBcclxuICAgIH1cclxuXHJcbiAgICBHZXREZWZhdWx0RXF1aXBtZW50U2xvdChzbG90TmFtZSA6IHN0cmluZykgOiBHVzJJdGVtIHwgbnVsbHtcclxuICAgICAgICBpZih0aGlzLkJhc2VFcXVpcG1lbnQgPT09IG51bGwgfHwgdGhpcy5CYXNlRXF1aXBtZW50ID09PSB1bmRlZmluZWQpIFxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuQmFzZUVxdWlwbWVudC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZih0aGlzLkJhc2VFcXVpcG1lbnRbaV0/LlNsb3QgPT09IHNsb3ROYW1lKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkJhc2VFcXVpcG1lbnRbaV07XHJcbiAgICAgICAgICAgIH0gICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IHsgR1cySXRlbSB9IGZyb20gXCIuL0dXMkl0ZW1cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHVzJCYWcge1xyXG4gICAgSXRlbUlEOiBudW1iZXI7XHJcbiAgICBJbnZlbnRvcnk6IChHVzJJdGVtfG51bGwpW11cclxuICAgIFNpemU6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuSXRlbUlEID0gMDtcclxuICAgICAgICB0aGlzLkludmVudG9yeSA9IFtdO1xyXG4gICAgICAgIHRoaXMuU2l6ZSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgUmVhc3NpZ25Qcm90b3R5cGVzKCl7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkludmVudG9yeS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZih0aGlzLkludmVudG9yeVtpXSAhPT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5JbnZlbnRvcnlbaV0gPSBPYmplY3QuYXNzaWduKG5ldyBHVzJJdGVtKCksdGhpcy5JbnZlbnRvcnlbaV0pO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCAiaW1wb3J0IHsgR1cyQVBJX0NhbGwgfSBmcm9tIFwiLi9HVzJBUElfQ2FsbFwiO1xyXG5pbXBvcnQgeyBHVzJFcXVpcG1lbnRJdGVtIH0gZnJvbSBcIi4vR1cyRXF1aXBtZW50SXRlbVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdXMkVxdWlwbWVudFRhYntcclxuICAgIGlkIDogbnVtYmVyO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgZXF1aXBtZW50OiBHVzJFcXVpcG1lbnRJdGVtW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmlkID0gLTE7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gXCJcIjtcclxuICAgICAgICB0aGlzLmVxdWlwbWVudCA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHBvcHVsYXRlRnJvbUpzb25PYmplY3QoanNvbk9iamVjdDogYW55KSA6IEdXMkVxdWlwbWVudFRhYiB7IFxyXG4gICAgICAgIHRoaXMuaWQgPSBqc29uT2JqZWN0LnRhYjtcclxuICAgICAgICB0aGlzLm5hbWUgPSBqc29uT2JqZWN0Lm5hbWU7XHJcbiAgICAgICAgdGhpcy5lcXVpcG1lbnQgPSBbXTtcclxuXHJcbiAgICAgICAgaWYoanNvbk9iamVjdC5lcXVpcG1lbnQgIT09IG51bGwgJiYganNvbk9iamVjdC5lcXVpcG1lbnQgIT09IHVuZGVmaW5lZCAmJiBBcnJheS5pc0FycmF5KGpzb25PYmplY3QuZXF1aXBtZW50KSl7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwganNvbk9iamVjdC5lcXVpcG1lbnQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVxID0ganNvbk9iamVjdC5lcXVpcG1lbnRbaV07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVxdWlwbWVudC5wdXNoKHtpZDplcS5pZCxzbG90OmVxLnNsb3QsdXBncmFkZXM6ZXEudXBncmFkZXMsaW5mdXNpb25zOmVxLmluZnVzaW9uc30pOyAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHBvcHVsYXRlRnJvbUFwaShhcGlLZXk6IHN0cmluZywgY2hhcmFjdGVyTmFtZTogc3RyaW5nLCB0YWJJZDogc3RyaW5nKSA6IFByb21pc2U8R1cyRXF1aXBtZW50VGFiPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPEdXMkVxdWlwbWVudFRhYj4oKHJlc29sdmUsZXJyb3IpPT57XHJcbiAgICAgICAgICAgIC8vIDEuIEdldCBFcXVpcG1lbnQgVGFiIERhdGEgZnJvbSBBcGlcclxuICAgICAgICAgICAgbmV3IEdXMkFQSV9DYWxsKGFwaUtleSkuR2V0RXF1aXBtZW50RnJvbVRlbXBsYXRlKGNoYXJhY3Rlck5hbWUsdGFiSWQpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcz0+e1xyXG4gICAgICAgICAgICAgICAgLy8gcmVzb2x2ZSB3aXRoIHNlbGYgYWZ0ZXIgcG9wdWxhdGluZyBmcm9tIHJlc3BvbnNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVsYXRlRnJvbUpzb25PYmplY3QocmVzLkVxdWlwbWVudCk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyPT57XHJcbiAgICAgICAgICAgICAgICBlcnJvcihlcnIpO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBSZWFzc2lnblByb3RvdHlwZXMoKXtcclxuICAgICAgICAvLyBUT0RPOiBDaGFuZ2UgdGhpcyB0byBHVzJJdGVtXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmVxdWlwbWVudC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmVxdWlwbWVudFtpXSA9IE9iamVjdC5hc3NpZ24obmV3IEdXMkVxdWlwbWVudEl0ZW0oKSx0aGlzLmVxdWlwbWVudFtpXSk7ICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59IiwgImltcG9ydCB7IGpzb24gfSBmcm9tIFwicmVtaXhcIjtcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBHVzJFcXVpcG1lbnRJdGVte1xyXG4gICAgaWQgOiBudW1iZXI7XHJcbiAgICBzbG90OiBzdHJpbmc7XHJcbiAgICB1cGdyYWRlczogbnVtYmVyW107XHJcbiAgICBpbmZ1c2lvbnM6IG51bWJlcltdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5pZCA9IDA7XHJcbiAgICAgICAgdGhpcy5zbG90ID0gXCJOb25lXCI7XHJcbiAgICAgICAgdGhpcy51cGdyYWRlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuaW5mdXNpb25zID0gW107XHJcbiAgICB9XHJcbn0iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBY3Rpb25NZXRhLCBjb21wb25lbnRzLCBNdWx0aVZhbHVlUHJvcHMsIE9uQ2hhbmdlVmFsdWUsIE9wdGlvblByb3BzLCBTaW5nbGVWYWx1ZVByb3BzLCBTdHlsZXNDb25maWcgfSBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XHJcbmltcG9ydCBBc3luY1NlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0L2FzeW5jXCI7XHJcbmltcG9ydCBTaW5nbGVWYWx1ZSBmcm9tIFwicmVhY3Qtc2VsZWN0L2Rpc3QvZGVjbGFyYXRpb25zL3NyYy9jb21wb25lbnRzL1NpbmdsZVZhbHVlXCI7XHJcbmltcG9ydCB7IHZhbHVlVGVybmFyeSB9IGZyb20gXCJyZWFjdC1zZWxlY3QvZGlzdC9kZWNsYXJhdGlvbnMvc3JjL3V0aWxzXCI7XHJcbmltcG9ydCB7IEdXMkNhY2hlRmlsdGVyUmVzdWx0LCBHVzJPZmZsaW5lSXRlbUNhY2hlIH0gZnJvbSBcIn4vR1cyQXBpL0dXMk9mZmxpbmVJdGVtQ2FjaGVcIjtcclxuaW1wb3J0IHsgdXNlRmV0Y2hlciB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnXHJcbmltcG9ydCB7IHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0XCI7XHJcbi8vaW1wb3J0IHsgdXNlRGVmZXJyZWRWYWx1ZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5leHBvcnQgdHlwZSBJdGVtU2VsZWN0UHJvcHMgPSB7XHJcbiAgICBvbkNoYW5nZTogKG5ld1ZhbHVlOiBPbkNoYW5nZVZhbHVlPGFueSwgYW55PiwgYWN0aW9uTWV0YTogQWN0aW9uTWV0YTxhbnk+KSA9PiB2b2lkLFxyXG59XHJcblxyXG5pbnRlcmZhY2UgSXRlbVNlbGVjdFN0YXRle1xyXG4gICAgcmVhZG9ubHkgaW5wdXRWYWx1ZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgaW5wdXRCYWNrdXA6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgSXRlbU9wdGlvbiA9IHtcclxuICAgIHZhbHVlOiBzdHJpbmcsXHJcbiAgICBsYWJlbDogc3RyaW5nLFxyXG4gICAgaWNvbjogc3RyaW5nLFxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIE1ha2VJbWFnZU1hcmt1cCh1cmwgOiBzdHJpbmcpe1xyXG4gICAgcmV0dXJuICc8ZGl2PjxpbWcgc3JjPVwiJyArIHVybCArICdcIiBoZWlnaHQ9XCJhdXRvXCIgd2lkdGg9XCJhdXRvXCIvPjwvZGl2Pic7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0ZW1TZWxlY3QgZXh0ZW5kcyBDb21wb25lbnQ8SXRlbVNlbGVjdFByb3BzLCBJdGVtU2VsZWN0U3RhdGU+e1xyXG4gICAgXHJcbiAgICBzZWxlY3RvcjogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLnNlbGVjdG9yID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGU6IEl0ZW1TZWxlY3RTdGF0ZSA9IHsgXHJcbiAgICAgICAgaW5wdXRWYWx1ZTogJycsXHJcbiAgICAgICAgaW5wdXRCYWNrdXA6ICcnLFxyXG4gICAgfTtcclxuXHJcblxyXG5cclxuICAgIHByb21pc2VJdGVtT3B0aW9ucyA9IChpbnB1dFZhbHVlOiBzdHJpbmcpID0+e1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8SXRlbU9wdGlvbltdPihyZXNvbHZlPT57XHJcbiAgICAgICAgYXhpb3MuZ2V0KCcuL0ZpbmRJdGVtP3E9JytpbnB1dFZhbHVlKS50aGVuKChyZXMpPT57XHJcbiAgICAgICAgICAgIGxldCBvcHRpb25zIDogSXRlbU9wdGlvbltdID0gW107XHJcblxyXG4gICAgICAgICAgICBmb3IoIGxldCBpID0gMCA7IGkgPCByZXMuZGF0YS5sZW5ndGggJiYgaSA8IDEwMDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSByZXMuZGF0YVtpXTtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaCh7dmFsdWU6ZWxlbWVudC5pZCxsYWJlbDogZWxlbWVudC5uYW1lLGljb246ZWxlbWVudC5pY29ufSk7ICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzb2x2ZShvcHRpb25zKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pfTtcclxuXHJcbiAgICBvbklucHV0Q2hhbmdlID0gIChxdWVyeTphbnksIHsgYWN0aW9uIH0pID0+IHtcclxuXHJcbiAgICAgICAgIGlmKGFjdGlvbiAhPT0gXCJzZXQtdmFsdWVcIil7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2lucHV0VmFsdWU6IHF1ZXJ5fSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2lucHV0QmFja3VwOnF1ZXJ5fSk7XHJcbiAgICAgICAgICAgIHJldHVybiBxdWVyeTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aW5wdXRWYWx1ZTogdGhpcy5zdGF0ZS5pbnB1dEJhY2t1cH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5pbnB1dEJhY2t1cDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgb25PcHRpb25TZWxlY3RlZCA9IChkYXRhOmFueSwgYWN0aW9uOkFjdGlvbk1ldGE8YW55PikgPT57XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShkYXRhLGFjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyT3B0aW9ucyAob3B0aW9ucywgZmlsdGVyLCB2YWx1ZXMpIHtcclxuICAgICAgICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSBbXVxyXG4gICAgICAgIHJldHVybiBvcHRpb25zXHJcbiAgICAgIH1cclxuXHJcbiAgICBzaW5nbGVPcHRpb24gPSAocHJvcHM6IE9wdGlvblByb3BzPGFueT4pID0+IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYm9yZGVyLXNvbGlkIGJvcmRlci1ncmF5IGJvcmRlci1iLTIgcHktMiB4czpweS0wIGgtMTIgc206aC05IG1kOmgtN1wiPlxyXG4gICAgICAgICAgICA8Y29tcG9uZW50cy5PcHRpb24gey4uLnByb3BzfT5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3ctZnVsbCBoLWZ1bGwgaXRlbXMtY2VudGVyIGFsaWduLWNlbnRlciBwci0yXCI+XHJcbiAgICAgICAgICB7cHJvcHMuZGF0YS5pY29uPyA8aW1nIGNsYXNzTmFtZT1cImZsZXggaC1mdWxsIHctMCByb3VuZGVkLW1kIGJvcmRlci0yIGJvcmRlci1zb2xpZCBib3JkZXItZ3JheS0zMDAgaW52aXNpYmxlIHhzOnctYXV0byB4czp2aXNpYmxlXCIgc3JjPXtwcm9wcy5kYXRhLmljb259Lz4gOiBudWxsfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHBsLTQgdGV4dC14cyBtZDp0ZXh0LXNtXCI+e3Byb3BzLmxhYmVsfTwvZGl2PjxzdXA+e3Byb3BzLmRhdGEudmFsdWV9PC9zdXA+ICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvY29tcG9uZW50cy5PcHRpb24+XHJcblxyXG4gICAgICAgIDwvZGl2PilcclxuXHJcbiAgICBtdWx0aVZhbHVlID0gKHByb3BzOiBNdWx0aVZhbHVlUHJvcHM8YW55PikgPT4gKFxyXG4gICAgICAgIDxjb21wb25lbnRzLk11bHRpVmFsdWUgey4uLnByb3BzfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3ctZnVsbCBpdGVtcy1jZW50ZXIgYWxpZ24tY2VudGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB0ZXh0LXhzIG1kOnRleHQtc21cIj57cHJvcHMuZGF0YS5sYWJlbH08L2Rpdj48c3VwPntwcm9wcy5kYXRhLnZhbHVlfTwvc3VwPiAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgICA8L2NvbXBvbmVudHMuTXVsdGlWYWx1ZT5cclxuICAgIClcclxuXHJcbiAgICBcclxuICAgIHNlbGVjdEJhc2VTdHlsZSA9IHtcclxuICAgICAgICBjb250cm9sOiAoYmFzZSkgPT4gKHtcclxuICAgICAgICAgICAgLi4uYmFzZSxcclxuICAgICAgICAgICAgbWluSGVpZ2h0OjM0LFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KSxcclxuICAgICAgICBkcm9wZG93bkluZGljYXRvcjogKHN0eWxlcykgPT4gKHtcclxuICAgICAgICAgICAgLi4uc3R5bGVzLFxyXG4gICAgICAgICAgICBwYWRkaW5nVG9wOiAyLFxyXG4gICAgICAgICAgICBwYWRkaW5nQm90dG9tOiAyLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGNsZWFySW5kaWNhdG9yOiAoc3R5bGVzKSA9PiAoe1xyXG4gICAgICAgICAgICAuLi5zdHlsZXMsXHJcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IDIsXHJcbiAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IDIsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgb3B0aW9uOihwcm92aWRlZCwgc3RhdGUpID0+KHtcclxuICAgICAgICAgICAgLi4ucHJvdmlkZWQsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0Oic0cHgnLFxyXG4gICAgICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKTogUmVhY3ROb2RlIHtcclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHJldHVybig8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1hdXRvXCI+XHJcbiAgICAgICAgPEFzeW5jU2VsZWN0IFxyXG5cclxuICAgICAgICByZWY9e3RoaXMuc2VsZWN0b3J9XHJcbiAgICAgICAgb25DaGFuZ2U9e3RoaXMub25PcHRpb25TZWxlY3RlZH1cclxuICAgICAgICBpbnB1dFZhbHVlPXt0aGlzLnN0YXRlLmlucHV0VmFsdWV9XHJcbiAgICAgICAgb25JbnB1dENoYW5nZT17dGhpcy5vbklucHV0Q2hhbmdlfVxyXG4gICAgICAgIGlzTXVsdGlcclxuICAgICAgICBjYWNoZU9wdGlvbnNcclxuICAgICAgICBkZWZhdWx0T3B0aW9ucz17ZmFsc2V9XHJcbiAgICAgICAgY2xvc2VNZW51T25TZWxlY3Q9e2ZhbHNlfVxyXG4gICAgICAgIGJsdXJJbnB1dE9uU2VsZWN0PXtmYWxzZX1cclxuICAgICAgICBzdHlsZXM9e3RoaXMuc2VsZWN0QmFzZVN0eWxlfVxyXG4gICAgICAgIGNvbXBvbmVudHM9e3sgXHJcbiAgICAgICAgICAgIE9wdGlvbjogdGhpcy5zaW5nbGVPcHRpb24sXHJcbiAgICAgICAgICAgIFNpbmdsZVZhbHVlOiB0aGlzLnNpbmdsZVZhbHVlLFxyXG4gICAgICAgICAgICBNdWx0aVZhbHVlOiB0aGlzLm11bHRpVmFsdWVcclxuICAgICAgICB9fVxyXG4gICAgICAgIGxvYWRPcHRpb25zPXt0aGlzLnByb21pc2VJdGVtT3B0aW9uc31cclxuXHJcbiAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPilcclxuICAgIH1cclxufVxyXG5cclxuIiwgIlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb3d0bygpIHtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXByaW1hcnkgb3V0bGluZSByb3VuZGVkLTJ4bCBvdXRsaW5lLTIgb3V0bGluZS1zZWNvbmRhcnkgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy1zcFwiPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWF1dG8gdy1mdWxsIGJnLXNlY29uZGFyeSBwLTMgdGV4dC13aGl0ZSB0ZXh0LW1kIG91dGxpbmUtc2Vjb25kYXJ5IG91dGxpbmUgb3V0bGluZS01XCI+PGgyIGNsYXNzTmFtZT1cInRleHQtbWRcIj5TZXR0aW5nIHVwIHlvdXIgQWNjb3VudDwvaDI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJsaXN0LWRpc2MgdGV4dC13aGl0ZSB0ZXN0LXN4IHRleHQteHMgcHgtNSBweS01XCIgdHlwZT1cIjFcIj5cclxuICAgICAgICAgICAgICAgIDxsaSB0eXBlPVwiMVwiIGNsYXNzTmFtZT1cImxpc3QtaW5zaWRlXCI+SGVhZCBvdmVyIHRvIHRoZSA8YSBjbGFzc05hbWU9XCJ0ZXh0LWxpbmsgaG92ZXI6dGV4dC13aGl0ZSBob3Zlcjp0cmFuc2l0aW9uLWFsbCB0cmFuc2l0aW9uLWFsbFwiIGhyZWY9XCJodHRwczovL2FjY291bnQuYXJlbmEubmV0L2FwcGxpY2F0aW9uc1wiIHRhcmdldD1cIl9ibGFua1wiPkd1aWxkIFdhcnMgMiBBUEkgS2V5IE1hbmFnZW1lbnQ8L2E+LjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgdHlwZT1cIjFcIiBjbGFzc05hbWU9XCJsaXN0LWluc2lkZVwiPkNsaWNrIG9uIHRoZSBcIk5ldyBLZXlcIiBidXR0b24uPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSB0eXBlPVwiMVwiIGNsYXNzTmFtZT1cImxpc3QtaW5zaWRlXCI+RW50ZXIgYSBuYW1lIG9mIHlvdXIgY2hvaWNlIGFuZCBjaGVjayBhdCBsZWFzdCB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb25zLlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjM1JVwiLG1hcmdpbkxlZnQ6XCJhdXRvXCIsbWFyZ2luUmlnaHQ6XCJhdXRvXCIscGFkZGluZ1RvcDpcIjhweFwiLHBhZGRpbmdCb3R0b206XCI4cHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwidHV0b19wZXJtaXNzaW9ucy5wbmdcIiB0YXJnZXQ9XCJfYmxhbmtcIj48aW1nIGNsYXNzTmFtZT1cImJvcmRlci1zb2xpZCBib3JkZXItZ3JheS01MDAgcm91bmRlZC1tZCBib3JkZXItMiBwLTFcIiBzcmM9XCJ0dXRvX3Blcm1pc3Npb25zLnBuZ1wiPjwvaW1nPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxsaSB0eXBlPVwiMVwiIGNsYXNzTmFtZT1cImxpc3QtaW5zaWRlXCI+Q29weSB5b3VyIG5ldyBBUEkga2V5LjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgdHlwZT1cIjFcIiBjbGFzc05hbWU9XCJsaXN0LWluc2lkZVwiPlBhc3RlIGl0IGludG8gdGhlIEFQSS1LZXkgSW5wdXQgZmllbGQuPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSB0eXBlPVwiMVwiIGNsYXNzTmFtZT1cImxpc3QtaW5zaWRlXCI+Q2xpY2sgdGhlIFwiU2V0IEFjY291bnRcIiBidXR0b24gYW5kIHdhaXQuPC9saT5cclxuXHJcbiAgICAgICAgICAgIDwvb2w+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExlZ2FsKCl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXByaW1hcnkgb3V0bGluZSByb3VuZGVkLTJ4bCBvdXRsaW5lLTIgb3V0bGluZS1zZWNvbmRhcnkgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy1zcFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtYXV0byB3LWZ1bGwgYmctc2Vjb25kYXJ5IHAtMyB0ZXh0LXdoaXRlIHRleHQtbWQgb3V0bGluZS1zZWNvbmRhcnkgb3V0bGluZSBvdXRsaW5lLTVcIj48aDIgY2xhc3NOYW1lPVwidGV4dC1tZFwiPkxlZ2FsIERpc2NsYWltZXJzPC9oMj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IHRleHQtd2hpdGUgdGV4dC14c1wiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHB5LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTkNTT0ZULCB0aGUgaW50ZXJsb2NraW5nIE5DIGxvZ28sIEFyZW5hTmV0LCBHdWlsZCBXYXJzLCBHdWlsZCBXYXJzIEZhY3Rpb25zLCBHdWlsZCBXYXJzIE5pZ2h0ZmFsbCwgR3VpbGQgV2FyczogRXllIG9mIHRoZSBOb3J0aCwgR3VpbGQgV2FycyAyLCBhbmQgYWxsIGFzc29jaWF0ZWQgbG9nb3MgYW5kIGRlc2lnbnMgYXJlIHRyYWRlbWFya3Mgb3IgcmVnaXN0ZXJlZCB0cmFkZW1hcmtzIG9mIE5DU09GVCBDb3Jwb3JhdGlvbi4gQWxsIG90aGVyIHRyYWRlbWFya3MgYXJlIHRoZSBwcm9wZXJ0eSBvZiB0aGVpciByZXNwZWN0aXZlIG93bmVycy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHktMVwiPklmIHlvdSByZXF1aXJlIGFueSBtb3JlIGluZm9ybWF0aW9uIG9yIGhhdmUgYW55IHF1ZXN0aW9ucyBhYm91dCBvdXIgc2l0ZSdzIGRpc2NsYWltZXIsIHBsZWFzZSBmZWVsIGZyZWUgdG8gY29udGFjdCB1cyBieSBlbWFpbCBhdCBhbGV4YW5kZXJAa29ucmFkcy5pby4gT3VyIERpc2NsYWltZXIgd2FzIGdlbmVyYXRlZCB3aXRoIHRoZSBoZWxwIG9mIHRoZSA8YSBocmVmPVwiaHR0cHM6Ly93d3cudGVybXNmZWVkLmNvbS9kaXNjbGFpbWVyLWdlbmVyYXRvci9cIj5EaXNjbGFpbWVyIEdlbmVyYXRvcjwvYT4uPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtYm9sZCBweS0xIHB0LTNcIj5UTDtEUjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInB5LTFcIj5XZSBkbyBub3Qgc2F2ZSBhbnkgb2YgeW91ciBhY2NvdW50IGluZm9ybWF0aW9uIHRvIG91ciBzZXJ2ZXJzLiBXZSBzYXZlIGEgY29weSBvZiB5b3VyIGFjY291bnQgZGF0YSB0byB5b3VyIGxvY2FsIGJyb3dzZXIgdG8gYWxsb3cgeW91IHRvIHNlYXJjaCBpdCBxdWlja2x5LiBXZSB1c2UgR29vZ2xlIEFuYWx5dGljcyB0byBnYXVnZSB0cmFmZmljLiBXZSBhcmUgbm90IGxpYWJsZSBmb3IgY29udGVudCBmb3VuZCBvbiB3ZWJzaXRlcyB0aGF0IG1pZ2h0IGJlIGxpbmtlZCBmcm9tIHRoaXMgd2Vic2l0ZS4gV2Ugb25seSBwcm92aWRlIGxpbmtzIGluIGdvb2QgZmFpdGggYW5kIHRyeSB0byBxdWlja2x5IGRldGVjdCBsaW5rcyB0aGF0IGhhdmUgZ29uZSBiYWQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHB5LTEgcHQtM1wiPkRpc2NsYWltZXJzIGZvciBGaW5kTXlTa3JpdHQuY29tPC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInB5LTFcIj5BbGwgdGhlIGluZm9ybWF0aW9uIG9uIHRoaXMgd2Vic2l0ZSAtIEZpbmRNeVNrcml0dC5jb20gLSBpcyBwdWJsaXNoZWQgaW4gZ29vZCBmYWl0aCBhbmQgZm9yIGdlbmVyYWwgaW5mb3JtYXRpb24gcHVycG9zZSBvbmx5LiBGaW5kTXlTa3JpdHQuY29tIGRvZXMgbm90IG1ha2UgYW55IHdhcnJhbnRpZXMgYWJvdXQgdGhlIGNvbXBsZXRlbmVzcywgcmVsaWFiaWxpdHkgYW5kIGFjY3VyYWN5IG9mIHRoaXMgaW5mb3JtYXRpb24uIEFueSBhY3Rpb24geW91IHRha2UgdXBvbiB0aGUgaW5mb3JtYXRpb24geW91IGZpbmQgb24gdGhpcyB3ZWJzaXRlIChGaW5kTXlTa3JpdHQuY29tKSwgaXMgc3RyaWN0bHkgYXQgeW91ciBvd24gcmlzay4gRmluZE15U2tyaXR0LmNvbSB3aWxsIG5vdCBiZSBsaWFibGUgZm9yIGFueSBsb3NzZXMgYW5kL29yIGRhbWFnZXMgaW4gY29ubmVjdGlvbiB3aXRoIHRoZSB1c2Ugb2Ygb3VyIHdlYnNpdGUuPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHktMVwiPkZpbmRNeVNrcml0dC5jb20gdXNlcyBjb29raWVzIGluIG9yZGVyIHRvIHN0b3JlIHNvbWUgb2YgeW91ciBwcm92aWRlZCBpbmZvcm1hdGlvbiBsb2NhbGx5IG9uIHlvdXIgZGV2aWNlIHRvIGltcHJvdmUgb3BlcmF0aW9uYWwgcXVhbGl0eSBhbmQgcmVkdWNlIHNlcnZlciBsb2FkLiBUaGUgc2F2ZWQgZGF0YSBjb25zaXN0IG9mIGEgbWlycm9yIG9mIHRoZSBpdGVtcyBvbiB5b3VyIGFjY291bnQgYW5kIHlvdXIgYXBpIGtleSBidXQgbm8gZGF0YSB0aGF0IHdvdWxkIGFsbG93IGF1dGhlbnRpY2F0aW9uIG9uIG90aGVyIHdlYnNpdGVzIG9yIGFsbG93IGFjY2VzcyB0byB5b3VyIGFjY291bnQgZGlyZWN0bHkuPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHktMVwiPkZpbmRNeVNrcml0dC5jb20gZG9lcyBub3Qgc3RvcmUgYW55IG9mIHlvdXIgZGF0YSBvbiBpdCdzIG93biBzZXJ2ZXJzIGFuZCBkb2VzIG5vdCBwcm92aWRlIGFueSBvdGhlciBzZXJ2aWNlcyB3aXRoIGFjY2VzcyB0byBhbnkgZGF0YSBlbnRlcmVkIG9uIHRoaXMgd2Vic2l0ZS48L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJweS0xXCI+RnJvbSBvdXIgd2Vic2l0ZSwgeW91IGNhbiB2aXNpdCBvdGhlciB3ZWJzaXRlcyBieSBmb2xsb3dpbmcgaHlwZXJsaW5rcyB0byBzdWNoIGV4dGVybmFsIHNpdGVzLiBXaGlsZSB3ZSBzdHJpdmUgdG8gcHJvdmlkZSBvbmx5IHF1YWxpdHkgbGlua3MgdG8gdXNlZnVsIGFuZCBldGhpY2FsIHdlYnNpdGVzLCB3ZSBoYXZlIG5vIGNvbnRyb2wgb3ZlciB0aGUgY29udGVudCBhbmQgbmF0dXJlIG9mIHRoZXNlIHNpdGVzLiBUaGVzZSBsaW5rcyB0byBvdGhlciB3ZWJzaXRlcyBkbyBub3QgaW1wbHkgYSByZWNvbW1lbmRhdGlvbiBmb3IgYWxsIHRoZSBjb250ZW50IGZvdW5kIG9uIHRoZXNlIHNpdGVzLiBTaXRlIG93bmVycyBhbmQgY29udGVudCBtYXkgY2hhbmdlIHdpdGhvdXQgbm90aWNlIGFuZCBtYXkgb2NjdXIgYmVmb3JlIHdlIGhhdmUgdGhlIG9wcG9ydHVuaXR5IHRvIHJlbW92ZSBhIGxpbmsgd2hpY2ggbWF5IGhhdmUgZ29uZSAnYmFkJy48L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJweS0xXCI+UGxlYXNlIGJlIGFsc28gYXdhcmUgdGhhdCB3aGVuIHlvdSBsZWF2ZSBvdXIgd2Vic2l0ZSwgb3RoZXIgc2l0ZXMgbWF5IGhhdmUgZGlmZmVyZW50IHByaXZhY3kgcG9saWNpZXMgYW5kIHRlcm1zIHdoaWNoIGFyZSBiZXlvbmQgb3VyIGNvbnRyb2wuIFBsZWFzZSBiZSBzdXJlIHRvIGNoZWNrIHRoZSBQcml2YWN5IFBvbGljaWVzIG9mIHRoZXNlIHNpdGVzIGFzIHdlbGwgYXMgdGhlaXIgXCJUZXJtcyBvZiBTZXJ2aWNlXCIgYmVmb3JlIGVuZ2FnaW5nIGluIGFueSBidXNpbmVzcyBvciB1cGxvYWRpbmcgYW55IGluZm9ybWF0aW9uLjwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWJvbGQgcHktMVwiPkNvbnNlbnQ8L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHktMVwiPkJ5IHVzaW5nIG91ciB3ZWJzaXRlLCB5b3UgaGVyZWJ5IGNvbnNlbnQgdG8gb3VyIGRpc2NsYWltZXIgYW5kIGFncmVlIHRvIGl0cyB0ZXJtcy48L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHB5LTFcIj5Hb29nbGUgQW5hbHl0aWNzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInB5LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyB3ZWJzaXRlIHVzZXMgR29vZ2xlIEFuYWx5dGljcywgYSB3ZWIgYW5hbHl0aWNzIHNlcnZpY2UgcHJvdmlkZWQgYnkgR29vZ2xlLCBJbmMuIChcdTIwMUNHb29nbGVcdTIwMUQpLiBHb29nbGUgQW5hbHl0aWNzIHVzZXMgXHUyMDFDY29va2llc1x1MjAxRCwgd2hpY2ggYXJlIHRleHQgZmlsZXMgcGxhY2VkIG9uIHlvdXIgY29tcHV0ZXIsIHRvIGhlbHAgdGhlIHdlYnNpdGUgYW5hbHl6ZSBob3cgdXNlcnMgdXNlIHRoZSBzaXRlLiBUaGUgaW5mb3JtYXRpb24gZ2VuZXJhdGVkIGJ5IHRoZSBjb29raWUgYWJvdXQgeW91ciB1c2Ugb2YgdGhlIHdlYnNpdGUgKGluY2x1ZGluZyB5b3VyIElQIGFkZHJlc3MpIHdpbGwgYmUgdHJhbnNtaXR0ZWQgdG8gYW5kIHN0b3JlZCBieSBHb29nbGUgb24gc2VydmVycyBpbiB0aGUgVW5pdGVkIFN0YXRlcy4gSW4gY2FzZSBvZiBhY3RpdmF0aW9uIG9mIHRoZSBJUCBhbm9ueW1pemF0aW9uLCBHb29nbGUgd2lsbCB0cnVuY2F0ZS9hbm9ueW1pemUgdGhlIGxhc3Qgb2N0ZXQgb2YgdGhlIElQIGFkZHJlc3MgZm9yIE1lbWJlciBTdGF0ZXMgb2YgdGhlIEV1cm9wZWFuIFVuaW9uIGFzIHdlbGwgYXMgZm9yIG90aGVyIHBhcnRpZXMgdG8gdGhlIEFncmVlbWVudCBvbiB0aGUgRXVyb3BlYW4gRWNvbm9taWMgQXJlYS4gT25seSBpbiBleGNlcHRpb25hbCBjYXNlcywgdGhlIGZ1bGwgSVAgYWRkcmVzcyBpcyBzZW50IHRvIGFuZCBzaG9ydGVuZWQgYnkgR29vZ2xlIHNlcnZlcnMgaW4gdGhlIFVTQS4gT24gYmVoYWxmIG9mIHRoZSB3ZWJzaXRlIHByb3ZpZGVyIEdvb2dsZSB3aWxsIHVzZSB0aGlzIGluZm9ybWF0aW9uIGZvciB0aGUgcHVycG9zZSBvZiBldmFsdWF0aW5nIHlvdXIgdXNlIG9mIHRoZSB3ZWJzaXRlLCBjb21waWxpbmcgcmVwb3J0cyBvbiB3ZWJzaXRlIGFjdGl2aXR5IGZvciB3ZWJzaXRlIG9wZXJhdG9ycyBhbmQgcHJvdmlkaW5nIG90aGVyIHNlcnZpY2VzIHJlbGF0aW5nIHRvIHdlYnNpdGUgYWN0aXZpdHkgYW5kIGludGVybmV0IHVzYWdlIHRvIHRoZSB3ZWJzaXRlIHByb3ZpZGVyLiBHb29nbGUgd2lsbCBub3QgYXNzb2NpYXRlIHlvdXIgSVAgYWRkcmVzcyB3aXRoIGFueSBvdGhlciBkYXRhIGhlbGQgYnkgR29vZ2xlLiBZb3UgbWF5IHJlZnVzZSB0aGUgdXNlIG9mIGNvb2tpZXMgYnkgc2VsZWN0aW5nIHRoZSBhcHByb3ByaWF0ZSBzZXR0aW5ncyBvbiB5b3VyIGJyb3dzZXIuIEhvd2V2ZXIsIHBsZWFzZSBub3RlIHRoYXQgaWYgeW91IGRvIHRoaXMsIHlvdSBtYXkgbm90IGJlIGFibGUgdG8gdXNlIHRoZSBmdWxsIGZ1bmN0aW9uYWxpdHkgb2YgdGhpcyB3ZWJzaXRlLiBGdXJ0aGVybW9yZSB5b3UgY2FuIHByZXZlbnQgR29vZ2xlXHUyMDE5cyBjb2xsZWN0aW9uIGFuZCB1c2Ugb2YgZGF0YSAoY29va2llcyBhbmQgSVAgYWRkcmVzcykgYnkgZG93bmxvYWRpbmcgYW5kIGluc3RhbGxpbmcgdGhlIGJyb3dzZXIgcGx1Zy1pbiBhdmFpbGFibGUgdW5kZXIgaHR0cHM6Ly90b29scy5nb29nbGUuY29tL2RscGFnZS9nYW9wdG91dD9obD1lbi1HQi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtYm9sZCBweS0xXCI+VXBkYXRlPC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInB5LTFcIj5TaG91bGQgd2UgdXBkYXRlLCBhbWVuZCBvciBtYWtlIGFueSBjaGFuZ2VzIHRvIHRoaXMgZG9jdW1lbnQsIHRob3NlIGNoYW5nZXMgd2lsbCBiZSBwcm9taW5lbnRseSBwb3N0ZWQgaGVyZS48L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonMTM1N2ZjMmMnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LTZERUdRWkRJLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1ZSlpLMjZQSy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVdLTzNDNUVLLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstT1VMQTZNRlcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0zMjVEMzdNUy5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtVzNNVUQ1TlUuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVNORURZQlVGLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9GaW5kSXRlbSc6eydpZCc6J3JvdXRlcy9GaW5kSXRlbScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidGaW5kSXRlbScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9GaW5kSXRlbS1CRkFLM0ZCTi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvSXRlbUxpc3RzJzp7J2lkJzoncm91dGVzL0l0ZW1MaXN0cycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidJdGVtTGlzdHMnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvSXRlbUxpc3RzLTIyUzdORUE0LmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvSXRlbVJlcG9ydCc6eydpZCc6J3JvdXRlcy9JdGVtUmVwb3J0JywncGFyZW50SWQnOidyb290JywncGF0aCc6J0l0ZW1SZXBvcnQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvSXRlbVJlcG9ydC1MQlBXQ0hTNy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Fib3V0Jzp7J2lkJzoncm91dGVzL2Fib3V0JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Fib3V0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Fib3V0LTdLRkFWMklHLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvY2hhbmdlbG9nJzp7J2lkJzoncm91dGVzL2NoYW5nZWxvZycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidjaGFuZ2Vsb2cnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvY2hhbmdlbG9nLTNMTFhPR1BaLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaG93dG8nOnsnaWQnOidyb3V0ZXMvaG93dG8nLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonaG93dG8nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaG93dG8tTk5BS01HNFkuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTcySlVWWkY3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1VM0RBTlFFRi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstNzJKVVZaRjcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2xlZ2FsJzp7J2lkJzoncm91dGVzL2xlZ2FsJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2xlZ2FsJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xlZ2FsLUlWRFlZRFFPLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LTEzNTdGQzJDLmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQUFBO0FBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxPQUFPLFFBQVE7QUFJbkIsV0FBTyxlQUFlLFNBQVMsNEJBQTRCO0FBQUEsTUFDekQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxvQ0FBb0M7QUFBQSxNQUNqRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLHND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
