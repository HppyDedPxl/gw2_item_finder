import {
  QuestionMarkCircleIcon_default
} from "/build/_shared/chunk-GTEJRIXI.js";
import {
  Link,
  init_react_router_dom,
  require_node
} from "/build/_shared/chunk-2IHHWOGX.js";
import {
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-VQYBAUSQ.js";

// browser-route-module:Z:\GIT\Repositories\GW2ItemFinder\app\routes\index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();
var import_react2 = __toESM(require_react());
init_react_router_dom();

// app/Components/ItemCard.tsx
init_react();
var import_react = __toESM(require_react());

// app/GW2Api/GW2API_Call.ts
init_react();
var import_node = __toESM(require_node());
var GW2API_Call = class {
  constructor(apiKey) {
    this.ApiKey = apiKey;
    this.URI = "";
    this.IsDone = false;
    this.Response = "";
  }
  async call() {
    let context = this;
    await (0, import_node.fetch)(this.URI, {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + this.ApiKey,
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive"
      }
    }).then((res) => {
      context.IsDone = true;
      context.Response = JSON.stringify(res.json());
    });
  }
  PollCharactersCharacters() {
    this.URI = "https://api.guildwars2.com/v2/characters/";
    this.IsDone = false;
    this.Response = "";
  }
};

// app/Components/ItemCard.tsx
var ItemCard = class extends import_react.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      response: "",
      gw2apicall: new GW2API_Call(props.apikey)
    };
  }
  render() {
    return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, this.state.gw2apicall.IsDone ? this.state.gw2apicall.Response : "Loading");
  }
};
var ItemCard_default = ItemCard;

// app/routes/index.tsx
var itemCards = [];
function FindItem() {
  console.log("lol");
  itemCards.push(new ItemCard_default({
    "apikey": "AAAAA",
    "itemid": "BBBB"
  }));
  alert("wow");
}
function RenderCards() {
  let buffer = [];
  for (let i = 0; i < itemCards.length; i++) {
    buffer.push(itemCards[i].render());
  }
  return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, buffer);
}
function Index() {
  return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "bg-gray-800 border-solid rounded-2xl px-5 py-5"
  }, /* @__PURE__ */ import_react2.default.createElement("div", null, /* @__PURE__ */ import_react2.default.createElement("div", null, /* @__PURE__ */ import_react2.default.createElement("label", {
    className: "block text-sm font-medium text-white px-1 py-1"
  }, "Enter a valid API Key")), /* @__PURE__ */ import_react2.default.createElement("input", {
    type: "text",
    name: "api-key",
    id: "api-key",
    className: "focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 pr-2 py-1 sm:text-sm border-gray-300 rounded-md",
    placeholder: "API Key"
  }), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "py-1"
  }), /* @__PURE__ */ import_react2.default.createElement("div", null, /* @__PURE__ */ import_react2.default.createElement("label", {
    className: "block text-sm font-medium text-white px-1 py-1"
  }, "Item ID")), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "grid grid-cols-12 place-items-center justify-items-auto"
  }, /* @__PURE__ */ import_react2.default.createElement("input", {
    type: "text",
    name: "item-id",
    id: "item-id",
    className: "focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 pr-2 py-1 sm:text-sm border-gray-300 rounded-md col-span-11",
    placeholder: "Item ID [e.g. 76643]"
  }), /* @__PURE__ */ import_react2.default.createElement(Link, {
    to: "/ItemLists"
  }, " ", /* @__PURE__ */ import_react2.default.createElement(QuestionMarkCircleIcon_default, {
    className: "block h-8 w-8 text-white hover:text-gray-400"
  }))), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "py-1"
  }), /* @__PURE__ */ import_react2.default.createElement("button", {
    name: "confirm-button",
    id: "confirm-button",
    className: "pl-2 pr-2 py-1 rounded-md border-gray-300 bg-green-300 w-full mt-2",
    onClick: FindItem
  }, "Find My Shit!"))), /* @__PURE__ */ import_react2.default.createElement(RenderCards, null));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-J34DKBFF.js.map
