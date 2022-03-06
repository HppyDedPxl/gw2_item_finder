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

// app/GW2Api/GW2ItemFindProcess.ts
init_react();

// app/GW2Api/GW2API_Call.ts
init_react();
var GW2API_Call = class {
  constructor(apiKey) {
    this.ApiKey = apiKey;
    this.URI = "";
    this.Response = "";
    this.IsDone = false;
  }
  async call() {
    let context = this;
    let endpoint = this.URI + "?access_token=" + this.ApiKey;
    return fetch(this.URI + "?access_token=" + this.ApiKey, {
      method: "GET",
      headers: {
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive",
        "Accept": "*/*"
      },
      mode: "no-cors"
    }).then((res) => {
      context.IsDone = true;
      console.log(res);
      context.Response = JSON.stringify(res.json());
    });
  }
  async GetCharacterList() {
    return new Promise((res, err) => {
      this.URI = "https://api.guildwars2.com/v2/characters/";
      this.call().then((resolve) => {
        res(this.Response);
      }).catch(() => {
        err("Error");
      });
    });
  }
};

// app/GW2Api/GW2ItemFindProcess.ts
var GW2ItemFindProcess = class {
  constructor(apiKey, itemID) {
    this.apiKey = apiKey;
    this.itemID = itemID;
  }
  async Execute() {
    return new Promise((res, err) => {
      let apiCall = new GW2API_Call(this.apiKey);
      apiCall.GetCharacterList().then((result) => {
        res(apiCall.Response);
      }).catch((error) => {
        err("Error");
      });
    });
  }
};

// app/components/ItemCard.tsx
var useAPIData = (apikey, itemid) => {
  const [apiData, setApiData] = (0, import_react2.useState)([]);
  const [isLoading, setLoading] = (0, import_react2.useState)(true);
  (0, import_react2.useEffect)(() => {
    setLoading(true);
    let FindProcess = new GW2ItemFindProcess(apikey, itemid);
    FindProcess.Execute().then((res) => {
    }).catch((err) => {
    }).finally(() => {
      setLoading(false);
    });
  }, []);
  return { apiData, isLoading };
};
var ItemSearch = (props) => {
  const { apiData, isLoading } = useAPIData(props.apiKey, props.itemID);
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: "bg-gray-800 border-solid rounded-2xl px-5 py-5"
  }, isLoading ? /* @__PURE__ */ import_react.default.createElement("p", {
    className: "loading-text"
  }, "Loading Data...") : /* @__PURE__ */ import_react.default.createElement("p", {
    className: "loading-text"
  }, props.apiKey));
};
var ItemCard_default = ItemSearch;

// app/routes/index.tsx
function GenerateUID() {
  return Math.random().toString(36).substr(2, 32);
}
function Index() {
  const [itemCards, setItemCards] = (0, import_react3.useState)([]);
  const [itemAmount, setItemAmount] = (0, import_react3.useState)(0);
  const [input_apiKey, setinput_apiKey] = (0, import_react3.useState)("8C902A33-9169-7F44-AC09-131DEE2815835E0A7135-1AF8-4602-BEF7-74AB5ADF9980");
  const [input_itemID, setinput_itemID] = (0, import_react3.useState)("");
  function FindItem() {
    let ic_copy = itemCards;
    ic_copy.push({ uid: GenerateUID(), apiKey: input_apiKey, itemID: input_itemID });
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
    placeholder: "API Key",
    onChange: (e) => setinput_apiKey(e.target.value)
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
    placeholder: "Item ID [e.g. 76643]",
    onChange: (e) => setinput_itemID(e.target.value)
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
    key: item.uid,
    className: "py-2"
  }, /* @__PURE__ */ import_react3.default.createElement(ItemCard_default, {
    uid: item.uid,
    apiKey: item.apiKey,
    itemID: item.itemID
  }))));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-CX2ANBZG.js.map
