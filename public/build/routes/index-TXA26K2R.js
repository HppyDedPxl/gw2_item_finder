import {
  QuestionMarkCircleIcon_default
} from "/build/_shared/chunk-QHLAUKWK.js";
import {
  Link,
  init_react_router_dom,
  useLoaderData
} from "/build/_shared/chunk-5IU7GSF3.js";
import {
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-P2FTGPOX.js";

// browser-route-module:Z:\GIT\Repositories\GW2ItemFinder\app\routes\index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();
var import_react3 = __toESM(require_react());
init_react_router_dom();

// app/components/ItemCard.tsx
init_react();
var import_react = __toESM(require_react());
var import_react2 = __toESM(require_react());
var useAPIData = () => {
  const [apiData, setApiData] = (0, import_react2.useState)([]);
  const [isLoading, setLoading] = (0, import_react2.useState)(true);
  (0, import_react2.useEffect)(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2e3);
  }, []);
  return { apiData, isLoading };
};
var ItemSearch = () => {
  const { apiData, isLoading } = useAPIData();
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, isLoading ? /* @__PURE__ */ import_react.default.createElement("p", {
    className: "loading-text"
  }, "Loading Data...") : /* @__PURE__ */ import_react.default.createElement("p", {
    className: "loading-text"
  }, "Done Loading..."));
};
var ItemCard_default = ItemSearch;

// app/routes/index.tsx
function Index() {
  const [itemCards, setItemCards] = (0, import_react3.useState)([]);
  const [itemAmount, setItemAmount] = (0, import_react3.useState)(0);
  function FindItem() {
    let ic_copy = itemCards;
    ic_copy.push({ uid: "lol" });
    setItemCards(ic_copy);
    setItemAmount(itemCards.length);
    console.log(itemCards.length);
  }
  let items = useLoaderData();
  return /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "bg-gray-800 border-solid rounded-2xl px-5 py-5"
  }, /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("label", {
    className: "block text-sm font-medium text-white px-1 py-1"
  }, "Enter a valid API Key")), /* @__PURE__ */ import_react3.default.createElement("input", {
    type: "text",
    name: "api-key",
    id: "api-key",
    className: "focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 pr-2 py-1 sm:text-sm border-gray-300 rounded-md",
    placeholder: "API Key"
  }), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "py-1"
  }), /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("label", {
    className: "block text-sm font-medium text-white px-1 py-1"
  }, "Item ID")), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "grid grid-cols-12 place-items-center justify-items-auto"
  }, /* @__PURE__ */ import_react3.default.createElement("input", {
    type: "text",
    name: "item-id",
    id: "item-id",
    className: "focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 pr-2 py-1 sm:text-sm border-gray-300 rounded-md col-span-11",
    placeholder: "Item ID [e.g. 76643]"
  }), /* @__PURE__ */ import_react3.default.createElement(Link, {
    to: "/ItemLists"
  }, " ", /* @__PURE__ */ import_react3.default.createElement(QuestionMarkCircleIcon_default, {
    className: "block h-8 w-8 text-white hover:text-gray-400"
  }))), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "py-1"
  }), /* @__PURE__ */ import_react3.default.createElement("button", {
    name: "confirm-button",
    id: "confirm-button",
    className: "pl-2 pr-2 py-1 rounded-md border-gray-300 bg-green-300 w-full mt-2",
    onClick: FindItem
  }, "Find My Shit!"))), itemCards.map((item) => /* @__PURE__ */ import_react3.default.createElement("div", {
    key: item.uid
  }, /* @__PURE__ */ import_react3.default.createElement(ItemCard_default, null))));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-TXA26K2R.js.map
