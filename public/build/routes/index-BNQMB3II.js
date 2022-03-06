import {
  QuestionMarkCircleIcon_default
} from "/build/_shared/chunk-QHLAUKWK.js";
import {
  ItemCard
} from "/build/_shared/chunk-XJ2DHMUZ.js";
import {
  Link,
  init_react_router_dom,
  useLoaderData
} from "/build/_shared/chunk-NJHOHO7Z.js";
import {
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-P2FTGPOX.js";

// browser-route-module:Z:\GIT\Repositories\GW2ItemFinder\app\routes\index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();
var import_react = __toESM(require_react());
init_react_router_dom();
function Index() {
  const [itemCards, setItemCards] = (0, import_react.useState)([]);
  const [itemAmount, setItemAmount] = (0, import_react.useState)(0);
  function FindItem() {
    console.log(itemCards.length);
    let ic_copy = itemCards;
    ic_copy.push(new ItemCard({
      "apikey": "AAAAA",
      "itemid": "BBBB"
    }));
    setItemCards(ic_copy);
    setItemAmount(itemCards.length);
  }
  let items = useLoaderData();
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "bg-gray-800 border-solid rounded-2xl px-5 py-5"
  }, /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("label", {
    className: "block text-sm font-medium text-white px-1 py-1"
  }, "Enter a valid API Key")), /* @__PURE__ */ import_react.default.createElement("input", {
    type: "text",
    name: "api-key",
    id: "api-key",
    className: "focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 pr-2 py-1 sm:text-sm border-gray-300 rounded-md",
    placeholder: "API Key"
  }), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "py-1"
  }), /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("label", {
    className: "block text-sm font-medium text-white px-1 py-1"
  }, "Item ID")), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "grid grid-cols-12 place-items-center justify-items-auto"
  }, /* @__PURE__ */ import_react.default.createElement("input", {
    type: "text",
    name: "item-id",
    id: "item-id",
    className: "focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 pr-2 py-1 sm:text-sm border-gray-300 rounded-md col-span-11",
    placeholder: "Item ID [e.g. 76643]"
  }), /* @__PURE__ */ import_react.default.createElement(Link, {
    to: "/ItemLists"
  }, " ", /* @__PURE__ */ import_react.default.createElement(QuestionMarkCircleIcon_default, {
    className: "block h-8 w-8 text-white hover:text-gray-400"
  }))), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "py-1"
  }), /* @__PURE__ */ import_react.default.createElement("button", {
    name: "confirm-button",
    id: "confirm-button",
    className: "pl-2 pr-2 py-1 rounded-md border-gray-300 bg-green-300 w-full mt-2",
    onClick: FindItem
  }, "Find My Shit!"))), itemCards.map((card) => {
    return card.render();
  }));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-BNQMB3II.js.map
