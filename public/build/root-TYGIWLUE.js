import {
  require_react_dom
} from "/build/_shared/chunk-YJZK26PK.js";
import {
  MenuIcon_default,
  XIcon_default
} from "/build/_shared/chunk-N5SMSE4E.js";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-4R4YFY6F.js";
import {
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-325D37MS.js";

// browser-route-module:Z:\GIT\Repositories\GW2ItemFinder\app\root.tsx?browser
init_react();

// app/root.tsx
init_react();

// app/styles/app.css
var app_default = "/build/_assets/app-ETIGJXKR.css";

// app/root.tsx
var import_react33 = __toESM(require_react());

// node_modules/@headlessui/react/dist/headlessui.esm.js
init_react();
var import_react = __toESM(require_react(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_react3 = __toESM(require_react(), 1);
var import_react4 = __toESM(require_react(), 1);
var import_react5 = __toESM(require_react(), 1);
var import_react6 = __toESM(require_react(), 1);
var import_react7 = __toESM(require_react(), 1);
var import_react8 = __toESM(require_react(), 1);
var import_react9 = __toESM(require_react(), 1);
var import_react10 = __toESM(require_react(), 1);
var import_react11 = __toESM(require_react(), 1);
var import_react12 = __toESM(require_react(), 1);
var import_react13 = __toESM(require_react(), 1);
var import_react14 = __toESM(require_react(), 1);
var import_react15 = __toESM(require_react(), 1);
var import_react16 = __toESM(require_react(), 1);
var import_react17 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);
var import_react18 = __toESM(require_react(), 1);
var import_react19 = __toESM(require_react(), 1);
var import_react20 = __toESM(require_react(), 1);
var import_react21 = __toESM(require_react(), 1);
var import_react22 = __toESM(require_react(), 1);
var import_react23 = __toESM(require_react(), 1);
var import_react24 = __toESM(require_react(), 1);
var import_react25 = __toESM(require_react(), 1);
var import_react26 = __toESM(require_react(), 1);
var import_react27 = __toESM(require_react(), 1);
var import_react28 = __toESM(require_react(), 1);
var import_react29 = __toESM(require_react(), 1);
var import_react30 = __toESM(require_react(), 1);
var import_react31 = __toESM(require_react(), 1);
var import_react32 = __toESM(require_react(), 1);
function k() {
  let e = [], t = [], r = { enqueue(o) {
    t.push(o);
  }, requestAnimationFrame(...o) {
    let n = requestAnimationFrame(...o);
    r.add(() => cancelAnimationFrame(n));
  }, nextFrame(...o) {
    r.requestAnimationFrame(() => {
      r.requestAnimationFrame(...o);
    });
  }, setTimeout(...o) {
    let n = setTimeout(...o);
    r.add(() => clearTimeout(n));
  }, add(o) {
    e.push(o);
  }, dispose() {
    for (let o of e.splice(0))
      o();
  }, async workQueue() {
    for (let o of t.splice(0))
      await o();
  } };
  return r;
}
function Q() {
  let [e] = (0, import_react2.useState)(k);
  return (0, import_react2.useEffect)(() => () => e.dispose(), [e]), e;
}
var x = typeof window != "undefined" ? import_react4.useLayoutEffect : import_react4.useEffect;
var yt = { serverHandoffComplete: false };
function q() {
  let [e, t] = (0, import_react5.useState)(yt.serverHandoffComplete);
  return (0, import_react5.useEffect)(() => {
    e !== true && t(true);
  }, [e]), (0, import_react5.useEffect)(() => {
    yt.serverHandoffComplete === false && (yt.serverHandoffComplete = true);
  }, []), e;
}
var or = 0;
function to() {
  return ++or;
}
function A() {
  let e = q(), [t, r] = (0, import_react3.useState)(e ? to : null);
  return x(() => {
    t === null && r(to());
  }, [t]), t != null ? "" + t : void 0;
}
function ke(e) {
  let t = (0, import_react7.useRef)(e);
  return (0, import_react7.useEffect)(() => {
    t.current = e;
  }, [e]), t;
}
function ee(e, t) {
  let [r, o] = (0, import_react6.useState)(e), n = ke(e);
  return x(() => o(n.current), [n, o, ...t]), r;
}
function I(...e) {
  let t = (0, import_react8.useRef)(e);
  return (0, import_react8.useEffect)(() => {
    t.current = e;
  }, [e]), (0, import_react8.useCallback)((r) => {
    for (let o of t.current)
      o != null && (typeof o == "function" ? o(r) : o.current = r);
  }, [t]);
}
function S(e, t, ...r) {
  if (e in t) {
    let n = t[e];
    return typeof n == "function" ? n(...r) : n;
  }
  let o = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((n) => `"${n}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(o, S), o;
}
function E({ props: e, slot: t, defaultTag: r, features: o, visible: n = true, name: i }) {
  if (n)
    return _e(e, t, r, i);
  let a = o != null ? o : 0;
  if (a & 2) {
    let { static: l = false, ...s } = e;
    if (l)
      return _e(s, t, r, i);
  }
  if (a & 1) {
    let { unmount: l = true, ...s } = e;
    return S(l ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return _e({ ...s, hidden: true, style: { display: "none" } }, t, r, i);
    } });
  }
  return _e(e, t, r, i);
}
function _e(e, t = {}, r, o) {
  let { as: n = r, children: i, refName: a = "ref", ...l } = gt(e, ["unmount", "static"]), s = e.ref !== void 0 ? { [a]: e.ref } : {}, u = typeof i == "function" ? i(t) : i;
  if (l.className && typeof l.className == "function" && (l.className = l.className(t)), n === import_react9.Fragment && Object.keys(l).length > 0) {
    if (!(0, import_react9.isValidElement)(u) || Array.isArray(u) && u.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${o} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(l).map((c) => `  - ${c}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((c) => `  - ${c}`).join(`
`)].join(`
`));
    return (0, import_react9.cloneElement)(u, Object.assign({}, fr(mr(gt(l, ["ref"])), u.props, ["onClick"]), s));
  }
  return (0, import_react9.createElement)(n, Object.assign({}, gt(l, ["ref"]), n !== import_react9.Fragment && s), u);
}
function fr(e, t, r) {
  let o = Object.assign({}, e);
  for (let n of r)
    e[n] !== void 0 && t[n] !== void 0 && Object.assign(o, { [n](i) {
      i.defaultPrevented || e[n](i), i.defaultPrevented || t[n](i);
    } });
  return o;
}
function D(e) {
  var t;
  return Object.assign((0, import_react9.forwardRef)(e), { displayName: (t = e.displayName) != null ? t : e.name });
}
function mr(e) {
  let t = Object.assign({}, e);
  for (let r in t)
    t[r] === void 0 && delete t[r];
  return t;
}
function gt(e, t = []) {
  let r = Object.assign({}, e);
  for (let o of t)
    o in r && delete r[o];
  return r;
}
function br(e) {
  throw new Error("Unexpected object: " + e);
}
function ae(e, t) {
  let r = t.resolveItems();
  if (r.length <= 0)
    return null;
  let o = t.resolveActiveIndex(), n = o != null ? o : -1, i = (() => {
    switch (e.focus) {
      case 0:
        return r.findIndex((a) => !t.resolveDisabled(a));
      case 1: {
        let a = r.slice().reverse().findIndex((l, s, u) => n !== -1 && u.length - s - 1 >= n ? false : !t.resolveDisabled(l));
        return a === -1 ? a : r.length - 1 - a;
      }
      case 2:
        return r.findIndex((a, l) => l <= n ? false : !t.resolveDisabled(a));
      case 3: {
        let a = r.slice().reverse().findIndex((l) => !t.resolveDisabled(l));
        return a === -1 ? a : r.length - 1 - a;
      }
      case 4:
        return r.findIndex((a) => t.resolveId(a) === e.id);
      case 5:
        return null;
      default:
        br(e);
    }
  })();
  return i === -1 ? o : i;
}
function G(e) {
  let t = e.parentElement, r = null;
  for (; t && !(t instanceof HTMLFieldSetElement); )
    t instanceof HTMLLegendElement && (r = t), t = t.parentElement;
  let o = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return o && Tr(r) ? false : o;
}
function Tr(e) {
  if (!e)
    return false;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement)
      return false;
    t = t.previousElementSibling;
  }
  return true;
}
function w(e, t, r) {
  let o = (0, import_react10.useRef)(t);
  o.current = t, (0, import_react10.useEffect)(() => {
    function n(i) {
      o.current.call(window, i);
    }
    return window.addEventListener(e, n, r), () => window.removeEventListener(e, n, r);
  }, [e, r]);
}
var Pt = (0, import_react11.createContext)(null);
Pt.displayName = "OpenClosedContext";
function _() {
  return (0, import_react11.useContext)(Pt);
}
function W({ value: e, children: t }) {
  return import_react11.default.createElement(Pt.Provider, { value: e }, t);
}
function ro(e) {
  var r;
  if (e.type)
    return e.type;
  let t = (r = e.as) != null ? r : "button";
  if (typeof t == "string" && t.toLowerCase() === "button")
    return "button";
}
function U(e, t) {
  let [r, o] = (0, import_react12.useState)(() => ro(e));
  return x(() => {
    o(ro(e));
  }, [e.type, e.as]), x(() => {
    r || !t.current || t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && o("button");
  }, [r, t]), r;
}
function se({ container: e, accept: t, walk: r, enabled: o = true }) {
  let n = (0, import_react13.useRef)(t), i = (0, import_react13.useRef)(r);
  (0, import_react13.useEffect)(() => {
    n.current = t, i.current = r;
  }, [t, r]), x(() => {
    if (!e || !o)
      return;
    let a = n.current, l = i.current, s = Object.assign((c) => a(c), { acceptNode: a }), u = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, s, false);
    for (; u.nextNode(); )
      l(u.currentNode);
  }, [e, o, n, i]);
}
var Ar = { [1](e) {
  return e.disabled || e.comboboxState === 1 ? e : { ...e, activeOptionIndex: null, comboboxState: 1 };
}, [0](e) {
  return e.disabled || e.comboboxState === 0 ? e : { ...e, comboboxState: 0 };
}, [2](e, t) {
  return e.disabled === t.disabled ? e : { ...e, disabled: t.disabled };
}, [3](e, t) {
  if (e.disabled || e.optionsRef.current && !e.optionsPropsRef.current.static && e.comboboxState === 1)
    return e;
  let r = ae(t, { resolveItems: () => e.options, resolveActiveIndex: () => e.activeOptionIndex, resolveId: (o) => o.id, resolveDisabled: (o) => o.dataRef.current.disabled });
  return e.activeOptionIndex === r ? e : { ...e, activeOptionIndex: r };
}, [4]: (e, t) => {
  var i;
  let r = e.activeOptionIndex !== null ? e.options[e.activeOptionIndex] : null, o = Array.from((i = e.optionsRef.current) == null ? void 0 : i.querySelectorAll('[id^="headlessui-combobox-option-"]')).reduce((a, l, s) => Object.assign(a, { [l.id]: s }), {}), n = [...e.options, { id: t.id, dataRef: t.dataRef }].sort((a, l) => o[a.id] - o[l.id]);
  return { ...e, options: n, activeOptionIndex: (() => r === null ? null : n.indexOf(r))() };
}, [5]: (e, t) => {
  let r = e.options.slice(), o = e.activeOptionIndex !== null ? r[e.activeOptionIndex] : null, n = r.findIndex((i) => i.id === t.id);
  return n !== -1 && r.splice(n, 1), { ...e, options: r, activeOptionIndex: (() => n === e.activeOptionIndex || o === null ? null : r.indexOf(o))() };
} };
var vt = (0, import_react.createContext)(null);
vt.displayName = "ComboboxContext";
function pe(e) {
  let t = (0, import_react.useContext)(vt);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, pe), r;
  }
  return t;
}
var Rt = (0, import_react.createContext)(null);
Rt.displayName = "ComboboxActions";
function Ue() {
  let e = (0, import_react.useContext)(Rt);
  if (e === null) {
    let t = new Error("ComboboxActions is missing a parent <Combobox /> component.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, Ue), t;
  }
  return e;
}
function hr(e, t) {
  return S(t.type, Ar, e, t);
}
var Or = import_react.Fragment;
var Ir = D(function(t, r) {
  let { value: o, onChange: n, disabled: i = false, ...a } = t, l = (0, import_react.useRef)({ value: o, onChange: n }), s = (0, import_react.useRef)({ static: false, hold: false }), u = (0, import_react.useRef)({ displayValue: void 0 }), c = (0, import_react.useReducer)(hr, { comboboxState: 1, comboboxPropsRef: l, optionsPropsRef: s, inputPropsRef: u, labelRef: (0, import_react.createRef)(), inputRef: (0, import_react.createRef)(), buttonRef: (0, import_react.createRef)(), optionsRef: (0, import_react.createRef)(), disabled: i, options: [], activeOptionIndex: null }), [{ comboboxState: m, options: b, activeOptionIndex: T, optionsRef: y, inputRef: p, buttonRef: f }, d] = c;
  x(() => {
    l.current.value = o;
  }, [o, l]), x(() => {
    l.current.onChange = n;
  }, [n, l]), x(() => d({ type: 2, disabled: i }), [i]), w("mousedown", (O) => {
    var N, K, V;
    let L = O.target;
    m === 0 && (((N = f.current) == null ? void 0 : N.contains(L)) || ((K = p.current) == null ? void 0 : K.contains(L)) || ((V = y.current) == null ? void 0 : V.contains(L)) || d({ type: 1 }));
  });
  let P = T === null ? null : b[T].dataRef.current.value, C = (0, import_react.useMemo)(() => ({ open: m === 0, disabled: i, activeIndex: T, activeOption: P }), [m, i, b, T]), R = (0, import_react.useCallback)(() => {
    if (!p.current || o === void 0)
      return;
    let O = u.current.displayValue;
    typeof O == "function" ? p.current.value = O(o) : typeof o == "string" && (p.current.value = o);
  }, [o, p, u]), g = (0, import_react.useCallback)((O) => {
    let L = b.find((K) => K.id === O);
    if (!L)
      return;
    let { dataRef: N } = L;
    l.current.onChange(N.current.value), R();
  }, [b, l, p]), v = (0, import_react.useCallback)(() => {
    if (T !== null) {
      let { dataRef: O } = b[T];
      l.current.onChange(O.current.value), R();
    }
  }, [T, b, l, p]), h = (0, import_react.useMemo)(() => ({ selectOption: g, selectActiveOption: v }), [g, v]);
  return x(() => {
    m === 1 && R();
  }, [R, m]), x(R, [R]), import_react.default.createElement(Rt.Provider, { value: h }, import_react.default.createElement(vt.Provider, { value: c }, import_react.default.createElement(W, { value: S(m, { [0]: 0, [1]: 1 }) }, E({ props: r === null ? a : { ...a, ref: r }, slot: C, defaultTag: Or, name: "Combobox" }))));
});
var Lr = "input";
var Dr = D(function(t, r) {
  var R, g;
  let { value: o, onChange: n, displayValue: i, ...a } = t, [l, s] = pe("Combobox.Input"), u = Ue(), c = I(l.inputRef, r), m = l.inputPropsRef, b = `headlessui-combobox-input-${A()}`, T = Q(), y = ke(n);
  x(() => {
    m.current.displayValue = i;
  }, [i, m]);
  let p = (0, import_react.useCallback)((v) => {
    switch (v.key) {
      case "Enter":
        v.preventDefault(), v.stopPropagation(), u.selectActiveOption(), s({ type: 1 });
        break;
      case "ArrowDown":
        return v.preventDefault(), v.stopPropagation(), S(l.comboboxState, { [0]: () => s({ type: 3, focus: 2 }), [1]: () => {
          s({ type: 0 }), T.nextFrame(() => {
            l.comboboxPropsRef.current.value || s({ type: 3, focus: 0 });
          });
        } });
      case "ArrowUp":
        return v.preventDefault(), v.stopPropagation(), S(l.comboboxState, { [0]: () => s({ type: 3, focus: 1 }), [1]: () => {
          s({ type: 0 }), T.nextFrame(() => {
            l.comboboxPropsRef.current.value || s({ type: 3, focus: 3 });
          });
        } });
      case "Home":
      case "PageUp":
        return v.preventDefault(), v.stopPropagation(), s({ type: 3, focus: 0 });
      case "End":
      case "PageDown":
        return v.preventDefault(), v.stopPropagation(), s({ type: 3, focus: 3 });
      case "Escape":
        return v.preventDefault(), l.optionsRef.current && !l.optionsPropsRef.current.static && v.stopPropagation(), s({ type: 1 });
      case "Tab":
        u.selectActiveOption(), s({ type: 1 });
        break;
    }
  }, [T, s, l, u]), f = (0, import_react.useCallback)((v) => {
    var h;
    s({ type: 0 }), (h = y.current) == null || h.call(y, v);
  }, [s, y]), d = ee(() => {
    if (!!l.labelRef.current)
      return [l.labelRef.current.id].join(" ");
  }, [l.labelRef.current]), P = (0, import_react.useMemo)(() => ({ open: l.comboboxState === 0, disabled: l.disabled }), [l]), C = { ref: c, id: b, role: "combobox", type: "text", "aria-controls": (R = l.optionsRef.current) == null ? void 0 : R.id, "aria-expanded": l.disabled ? void 0 : l.comboboxState === 0, "aria-activedescendant": l.activeOptionIndex === null || (g = l.options[l.activeOptionIndex]) == null ? void 0 : g.id, "aria-labelledby": d, disabled: l.disabled, onKeyDown: p, onChange: f };
  return E({ props: { ...a, ...C }, slot: P, defaultTag: Lr, name: "Combobox.Input" });
});
var Mr = "button";
var Fr = D(function(t, r) {
  var p;
  let [o, n] = pe("Combobox.Button"), i = Ue(), a = I(o.buttonRef, r), l = `headlessui-combobox-button-${A()}`, s = Q(), u = (0, import_react.useCallback)((f) => {
    switch (f.key) {
      case "ArrowDown":
        return f.preventDefault(), f.stopPropagation(), o.comboboxState === 1 && (n({ type: 0 }), s.nextFrame(() => {
          o.comboboxPropsRef.current.value || n({ type: 3, focus: 0 });
        })), s.nextFrame(() => {
          var d;
          return (d = o.inputRef.current) == null ? void 0 : d.focus({ preventScroll: true });
        });
      case "ArrowUp":
        return f.preventDefault(), f.stopPropagation(), o.comboboxState === 1 && (n({ type: 0 }), s.nextFrame(() => {
          o.comboboxPropsRef.current.value || n({ type: 3, focus: 3 });
        })), s.nextFrame(() => {
          var d;
          return (d = o.inputRef.current) == null ? void 0 : d.focus({ preventScroll: true });
        });
      case "Escape":
        return f.preventDefault(), o.optionsRef.current && !o.optionsPropsRef.current.static && f.stopPropagation(), n({ type: 1 }), s.nextFrame(() => {
          var d;
          return (d = o.inputRef.current) == null ? void 0 : d.focus({ preventScroll: true });
        });
    }
  }, [s, n, o, i]), c = (0, import_react.useCallback)((f) => {
    if (G(f.currentTarget))
      return f.preventDefault();
    o.comboboxState === 0 ? n({ type: 1 }) : (f.preventDefault(), n({ type: 0 })), s.nextFrame(() => {
      var d;
      return (d = o.inputRef.current) == null ? void 0 : d.focus({ preventScroll: true });
    });
  }, [n, s, o]), m = ee(() => {
    if (!!o.labelRef.current)
      return [o.labelRef.current.id, l].join(" ");
  }, [o.labelRef.current, l]), b = (0, import_react.useMemo)(() => ({ open: o.comboboxState === 0, disabled: o.disabled }), [o]), T = t, y = { ref: a, id: l, type: U(t, o.buttonRef), tabIndex: -1, "aria-haspopup": true, "aria-controls": (p = o.optionsRef.current) == null ? void 0 : p.id, "aria-expanded": o.disabled ? void 0 : o.comboboxState === 0, "aria-labelledby": m, disabled: o.disabled, onClick: c, onKeyDown: u };
  return E({ props: { ...T, ...y }, slot: b, defaultTag: Mr, name: "Combobox.Button" });
});
var wr = "label";
function kr(e) {
  let [t] = pe("Combobox.Label"), r = `headlessui-combobox-label-${A()}`, o = (0, import_react.useCallback)(() => {
    var a;
    return (a = t.inputRef.current) == null ? void 0 : a.focus({ preventScroll: true });
  }, [t.inputRef]), n = (0, import_react.useMemo)(() => ({ open: t.comboboxState === 0, disabled: t.disabled }), [t]), i = { ref: t.labelRef, id: r, onClick: o };
  return E({ props: { ...e, ...i }, slot: n, defaultTag: wr, name: "Combobox.Label" });
}
var _r = "ul";
var Gr = 1 | 2;
var Hr = D(function(t, r) {
  var y;
  let { hold: o = false, ...n } = t, [i] = pe("Combobox.Options"), { optionsPropsRef: a } = i, l = I(i.optionsRef, r), s = `headlessui-combobox-options-${A()}`, u = _(), c = (() => u !== null ? u === 0 : i.comboboxState === 0)();
  x(() => {
    var p;
    a.current.static = (p = t.static) != null ? p : false;
  }, [a, t.static]), x(() => {
    a.current.hold = o;
  }, [o, a]), se({ container: i.optionsRef.current, enabled: i.comboboxState === 0, accept(p) {
    return p.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : p.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(p) {
    p.setAttribute("role", "none");
  } });
  let m = ee(() => {
    var p, f, d;
    return (d = (p = i.labelRef.current) == null ? void 0 : p.id) != null ? d : (f = i.buttonRef.current) == null ? void 0 : f.id;
  }, [i.labelRef.current, i.buttonRef.current]), b = (0, import_react.useMemo)(() => ({ open: i.comboboxState === 0 }), [i]), T = { "aria-activedescendant": i.activeOptionIndex === null || (y = i.options[i.activeOptionIndex]) == null ? void 0 : y.id, "aria-labelledby": m, role: "listbox", id: s, ref: l };
  return E({ props: { ...n, ...T }, slot: b, defaultTag: _r, features: Gr, visible: c, name: "Combobox.Options" });
});
var Ur = "li";
function Br(e) {
  let { disabled: t = false, value: r, ...o } = e, [n, i] = pe("Combobox.Option"), a = Ue(), l = `headlessui-combobox-option-${A()}`, s = n.activeOptionIndex !== null ? n.options[n.activeOptionIndex].id === l : false, u = n.comboboxPropsRef.current.value === r, c = (0, import_react.useRef)({ disabled: t, value: r });
  x(() => {
    c.current.disabled = t;
  }, [c, t]), x(() => {
    c.current.value = r;
  }, [c, r]), x(() => {
    var P, C;
    c.current.textValue = (C = (P = document.getElementById(l)) == null ? void 0 : P.textContent) == null ? void 0 : C.toLowerCase();
  }, [c, l]);
  let m = (0, import_react.useCallback)(() => a.selectOption(l), [a, l]);
  x(() => (i({ type: 4, id: l, dataRef: c }), () => i({ type: 5, id: l })), [c, l]), x(() => {
    n.comboboxState === 0 && (!u || i({ type: 3, focus: 4, id: l }));
  }, [n.comboboxState, u, l]), x(() => {
    if (n.comboboxState !== 0 || !s)
      return;
    let P = k();
    return P.requestAnimationFrame(() => {
      var C, R;
      (R = (C = document.getElementById(l)) == null ? void 0 : C.scrollIntoView) == null || R.call(C, { block: "nearest" });
    }), P.dispose;
  }, [l, s, n.comboboxState, n.activeOptionIndex]);
  let b = (0, import_react.useCallback)((P) => {
    if (t)
      return P.preventDefault();
    m(), i({ type: 1 }), k().nextFrame(() => {
      var C;
      return (C = n.inputRef.current) == null ? void 0 : C.focus({ preventScroll: true });
    });
  }, [i, n.inputRef, t, m]), T = (0, import_react.useCallback)(() => {
    if (t)
      return i({ type: 3, focus: 5 });
    i({ type: 3, focus: 4, id: l });
  }, [t, l, i]), y = (0, import_react.useCallback)(() => {
    t || s || i({ type: 3, focus: 4, id: l });
  }, [t, s, l, i]), p = (0, import_react.useCallback)(() => {
    t || !s || n.optionsPropsRef.current.hold || i({ type: 3, focus: 5 });
  }, [t, s, i, n.comboboxState, n.comboboxPropsRef]), f = (0, import_react.useMemo)(() => ({ active: s, selected: u, disabled: t }), [s, u, t]);
  return E({ props: { ...o, ...{ id: l, role: "option", tabIndex: t === true ? void 0 : -1, "aria-disabled": t === true ? true : void 0, "aria-selected": u === true ? true : void 0, disabled: void 0, onClick: b, onFocus: T, onPointerMove: y, onMouseMove: y, onPointerLeave: p, onMouseLeave: p } }, slot: f, defaultTag: Ur, name: "Combobox.Option" });
}
var Na = Object.assign(Ir, { Input: Dr, Button: Fr, Label: kr, Options: Hr, Option: Br });
var Et = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
function xe(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Et));
}
function de(e, t = 0) {
  return e === document.body ? false : S(t, { [0]() {
    return e.matches(Et);
  }, [1]() {
    let r = e;
    for (; r !== null; ) {
      if (r.matches(Et))
        return true;
      r = r.parentElement;
    }
    return false;
  } });
}
function ce(e) {
  e == null || e.focus({ preventScroll: true });
}
function M(e, t) {
  let r = Array.isArray(e) ? e.slice().sort((c, m) => {
    let b = c.compareDocumentPosition(m);
    return b & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : b & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  }) : xe(e), o = document.activeElement, n = (() => {
    if (t & (1 | 4))
      return 1;
    if (t & (2 | 8))
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), i = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, r.indexOf(o)) - 1;
    if (t & 4)
      return Math.max(0, r.indexOf(o)) + 1;
    if (t & 8)
      return r.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), a = t & 32 ? { preventScroll: true } : {}, l = 0, s = r.length, u;
  do {
    if (l >= s || l + s <= 0)
      return 0;
    let c = i + l;
    if (t & 16)
      c = (c + s) % s;
    else {
      if (c < 0)
        return 3;
      if (c >= s)
        return 1;
    }
    u = r[c], u == null || u.focus(a), l += n;
  } while (u !== document.activeElement);
  return u.hasAttribute("tabindex") || u.setAttribute("tabindex", "0"), 2;
}
function Be() {
  let e = (0, import_react16.useRef)(false);
  return (0, import_react16.useEffect)(() => (e.current = true, () => {
    e.current = false;
  }), []), e;
}
function Ne(e, t = 30, { initialFocus: r, containers: o } = {}) {
  let n = (0, import_react15.useRef)(typeof window != "undefined" ? document.activeElement : null), i = (0, import_react15.useRef)(null), a = Be(), l = Boolean(t & 16), s = Boolean(t & 2);
  (0, import_react15.useEffect)(() => {
    !l || (n.current = document.activeElement);
  }, [l]), (0, import_react15.useEffect)(() => {
    if (!!l)
      return () => {
        ce(n.current), n.current = null;
      };
  }, [l]), (0, import_react15.useEffect)(() => {
    if (!s || !e.current)
      return;
    let u = document.activeElement;
    if (r == null ? void 0 : r.current) {
      if ((r == null ? void 0 : r.current) === u) {
        i.current = u;
        return;
      }
    } else if (e.current.contains(u)) {
      i.current = u;
      return;
    }
    (r == null ? void 0 : r.current) ? ce(r.current) : M(e.current, 1) === 0 && console.warn("There are no focusable elements inside the <FocusTrap />"), i.current = document.activeElement;
  }, [e, r, s]), w("keydown", (u) => {
    !(t & 4) || !e.current || u.key === "Tab" && (u.preventDefault(), M(e.current, (u.shiftKey ? 2 : 4) | 16) === 2 && (i.current = document.activeElement));
  }), w("focus", (u) => {
    if (!(t & 8))
      return;
    let c = new Set(o == null ? void 0 : o.current);
    if (c.add(e), !c.size)
      return;
    let m = i.current;
    if (!m || !a.current)
      return;
    let b = u.target;
    b && b instanceof HTMLElement ? Kr(c, b) ? (i.current = b, ce(b)) : (u.preventDefault(), u.stopPropagation(), ce(m)) : ce(i.current);
  }, true);
}
function Kr(e, t) {
  var r;
  for (let o of e)
    if ((r = o.current) == null ? void 0 : r.contains(t))
      return true;
  return false;
}
var fe = /* @__PURE__ */ new Set();
var J = /* @__PURE__ */ new Map();
function po(e) {
  e.setAttribute("aria-hidden", "true"), e.inert = true;
}
function co(e) {
  let t = J.get(e);
  !t || (t["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t["aria-hidden"]), e.inert = t.inert);
}
function fo(e, t = true) {
  x(() => {
    if (!t || !e.current)
      return;
    let r = e.current;
    fe.add(r);
    for (let o of J.keys())
      o.contains(r) && (co(o), J.delete(o));
    return document.querySelectorAll("body > *").forEach((o) => {
      if (o instanceof HTMLElement) {
        for (let n of fe)
          if (o.contains(n))
            return;
        fe.size === 1 && (J.set(o, { "aria-hidden": o.getAttribute("aria-hidden"), inert: o.inert }), po(o));
      }
    }), () => {
      if (fe.delete(r), fe.size > 0)
        document.querySelectorAll("body > *").forEach((o) => {
          if (o instanceof HTMLElement && !J.has(o)) {
            for (let n of fe)
              if (o.contains(n))
                return;
            J.set(o, { "aria-hidden": o.getAttribute("aria-hidden"), inert: o.inert }), po(o);
          }
        });
      else
        for (let o of J.keys())
          co(o), J.delete(o);
    };
  }, [t]);
}
var mo = (0, import_react18.createContext)(false);
function bo() {
  return (0, import_react18.useContext)(mo);
}
function At(e) {
  return import_react18.default.createElement(mo.Provider, { value: e.force }, e.children);
}
function Xr() {
  let e = bo(), t = (0, import_react17.useContext)(Po), [r, o] = (0, import_react17.useState)(() => {
    if (!e && t !== null || typeof window == "undefined")
      return null;
    let n = document.getElementById("headlessui-portal-root");
    if (n)
      return n;
    let i = document.createElement("div");
    return i.setAttribute("id", "headlessui-portal-root"), document.body.appendChild(i);
  });
  return (0, import_react17.useEffect)(() => {
    r !== null && (document.body.contains(r) || document.body.appendChild(r));
  }, [r]), (0, import_react17.useEffect)(() => {
    e || t !== null && o(t.current);
  }, [t, o, e]), r;
}
var Jr = import_react17.Fragment;
function We(e) {
  let t = e, r = Xr(), [o] = (0, import_react17.useState)(() => typeof window == "undefined" ? null : document.createElement("div")), n = q();
  return x(() => {
    if (!!r && !!o)
      return r.appendChild(o), () => {
        var i;
        !r || !o || (r.removeChild(o), r.childNodes.length <= 0 && ((i = r.parentElement) == null || i.removeChild(r)));
      };
  }, [r, o]), n ? !r || !o ? null : (0, import_react_dom.createPortal)(E({ props: t, defaultTag: Jr, name: "Portal" }), o) : null;
}
var Zr = import_react17.Fragment;
var Po = (0, import_react17.createContext)(null);
function en(e) {
  let { target: t, ...r } = e;
  return import_react17.default.createElement(Po.Provider, { value: t }, E({ props: r, defaultTag: Zr, name: "Popover.Group" }));
}
We.Group = en;
var vo = (0, import_react19.createContext)(null);
function Ro() {
  let e = (0, import_react19.useContext)(vo);
  if (e === null) {
    let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, Ro), t;
  }
  return e;
}
function re() {
  let [e, t] = (0, import_react19.useState)([]);
  return [e.length > 0 ? e.join(" ") : void 0, (0, import_react19.useMemo)(() => function(o) {
    let n = (0, import_react19.useCallback)((a) => (t((l) => [...l, a]), () => t((l) => {
      let s = l.slice(), u = s.indexOf(a);
      return u !== -1 && s.splice(u, 1), s;
    })), []), i = (0, import_react19.useMemo)(() => ({ register: n, slot: o.slot, name: o.name, props: o.props }), [n, o.slot, o.name, o.props]);
    return import_react19.default.createElement(vo.Provider, { value: i }, o.children);
  }, [t])];
}
var an = "p";
function me(e) {
  let t = Ro(), r = `headlessui-description-${A()}`;
  x(() => t.register(r), [r, t.register]);
  let o = e, n = { ...t.props, id: r };
  return E({ props: { ...o, ...n }, slot: t.slot || {}, defaultTag: an, name: t.name || "Description" });
}
var ht = (0, import_react20.createContext)(() => {
});
ht.displayName = "StackContext";
function cn() {
  return (0, import_react20.useContext)(ht);
}
function Eo({ children: e, onUpdate: t, type: r, element: o }) {
  let n = cn(), i = (0, import_react20.useCallback)((...a) => {
    t == null || t(...a), n(...a);
  }, [n, t]);
  return x(() => (i(0, r, o), () => i(1, r, o)), [i, r, o]), import_react20.default.createElement(ht.Provider, { value: i }, e);
}
var yn = { [0](e, t) {
  return e.titleId === t.id ? e : { ...e, titleId: t.id };
} };
var Ve = (0, import_react14.createContext)(null);
Ve.displayName = "DialogContext";
function It(e) {
  let t = (0, import_react14.useContext)(Ve);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <${An.displayName} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, It), r;
  }
  return t;
}
function gn(e, t) {
  return S(t.type, yn, e, t);
}
var Pn = "div";
var xn = 1 | 2;
var vn = D(function(t, r) {
  let { open: o, onClose: n, initialFocus: i, ...a } = t, [l, s] = (0, import_react14.useState)(0), u = _();
  o === void 0 && u !== null && (o = S(u, { [0]: true, [1]: false }));
  let c = (0, import_react14.useRef)(/* @__PURE__ */ new Set()), m = (0, import_react14.useRef)(null), b = I(m, r), T = t.hasOwnProperty("open") || u !== null, y = t.hasOwnProperty("onClose");
  if (!T && !y)
    throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!T)
    throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!y)
    throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (typeof o != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${o}`);
  if (typeof n != "function")
    throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${n}`);
  let p = o ? 0 : 1, f = (() => u !== null ? u === 0 : p === 0)(), [d, P] = (0, import_react14.useReducer)(gn, { titleId: null, descriptionId: null }), C = (0, import_react14.useCallback)(() => n(false), [n]), R = (0, import_react14.useCallback)((F) => P({ type: 0, id: F }), [P]), v = q() && p === 0, h = l > 1, O = (0, import_react14.useContext)(Ve) !== null;
  Ne(m, v ? S(h ? "parent" : "leaf", { parent: 16, leaf: 30 }) : 1, { initialFocus: i, containers: c }), fo(m, h ? v : false), w("mousedown", (F) => {
    var H;
    let $ = F.target;
    p === 0 && (h || ((H = m.current) == null ? void 0 : H.contains($)) || C());
  }), w("keydown", (F) => {
    F.key === "Escape" && p === 0 && (h || (F.preventDefault(), F.stopPropagation(), C()));
  }), (0, import_react14.useEffect)(() => {
    if (p !== 0 || O)
      return;
    let F = document.documentElement.style.overflow, $ = document.documentElement.style.paddingRight, H = window.innerWidth - document.documentElement.clientWidth;
    return document.documentElement.style.overflow = "hidden", document.documentElement.style.paddingRight = `${H}px`, () => {
      document.documentElement.style.overflow = F, document.documentElement.style.paddingRight = $;
    };
  }, [p, O]), (0, import_react14.useEffect)(() => {
    if (p !== 0 || !m.current)
      return;
    let F = new IntersectionObserver(($) => {
      for (let H of $)
        H.boundingClientRect.x === 0 && H.boundingClientRect.y === 0 && H.boundingClientRect.width === 0 && H.boundingClientRect.height === 0 && C();
    });
    return F.observe(m.current), () => F.disconnect();
  }, [p, m, C]);
  let [N, K] = re(), V = `headlessui-dialog-${A()}`, Fe = (0, import_react14.useMemo)(() => [{ dialogState: p, close: C, setTitleId: R }, d], [p, d, C, R]), ge = (0, import_react14.useMemo)(() => ({ open: p === 0 }), [p]), we = { ref: b, id: V, role: "dialog", "aria-modal": p === 0 ? true : void 0, "aria-labelledby": d.titleId, "aria-describedby": N, onClick(F) {
    F.stopPropagation();
  } }, X = a;
  return import_react14.default.createElement(Eo, { type: "Dialog", element: m, onUpdate: (0, import_react14.useCallback)((F, $, H) => {
    $ === "Dialog" && S(F, { [0]() {
      c.current.add(H), s((Pe) => Pe + 1);
    }, [1]() {
      c.current.add(H), s((Pe) => Pe - 1);
    } });
  }, []) }, import_react14.default.createElement(At, { force: true }, import_react14.default.createElement(We, null, import_react14.default.createElement(Ve.Provider, { value: Fe }, import_react14.default.createElement(We.Group, { target: m }, import_react14.default.createElement(At, { force: false }, import_react14.default.createElement(K, { slot: ge, name: "Dialog.Description" }, E({ props: { ...X, ...we }, slot: ge, defaultTag: Pn, features: xn, visible: f, name: "Dialog" }))))))));
});
var Rn = "div";
var En = D(function(t, r) {
  let [{ dialogState: o, close: n }] = It("Dialog.Overlay"), i = I(r), a = `headlessui-dialog-overlay-${A()}`, l = (0, import_react14.useCallback)((m) => {
    if (m.target === m.currentTarget) {
      if (G(m.currentTarget))
        return m.preventDefault();
      m.preventDefault(), m.stopPropagation(), n();
    }
  }, [n]), s = (0, import_react14.useMemo)(() => ({ open: o === 0 }), [o]);
  return E({ props: { ...t, ...{ ref: i, id: a, "aria-hidden": true, onClick: l } }, slot: s, defaultTag: Rn, name: "Dialog.Overlay" });
});
var Cn = "h2";
function Sn(e) {
  let [{ dialogState: t, setTitleId: r }] = It("Dialog.Title"), o = `headlessui-dialog-title-${A()}`;
  (0, import_react14.useEffect)(() => (r(o), () => r(null)), [o, r]);
  let n = (0, import_react14.useMemo)(() => ({ open: t === 0 }), [t]);
  return E({ props: { ...e, ...{ id: o } }, slot: n, defaultTag: Cn, name: "Dialog.Title" });
}
var An = Object.assign(vn, { Overlay: En, Title: Sn, Description: me });
var Ln = { [0]: (e) => ({ ...e, disclosureState: S(e.disclosureState, { [0]: 1, [1]: 0 }) }), [1]: (e) => e.disclosureState === 1 ? e : { ...e, disclosureState: 1 }, [4](e) {
  return e.linkedPanel === true ? e : { ...e, linkedPanel: true };
}, [5](e) {
  return e.linkedPanel === false ? e : { ...e, linkedPanel: false };
}, [2](e, t) {
  return e.buttonId === t.buttonId ? e : { ...e, buttonId: t.buttonId };
}, [3](e, t) {
  return e.panelId === t.panelId ? e : { ...e, panelId: t.panelId };
} };
var Mt = (0, import_react21.createContext)(null);
Mt.displayName = "DisclosureContext";
function Ft(e) {
  let t = (0, import_react21.useContext)(Mt);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <${Ye.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Ft), r;
  }
  return t;
}
var wt = (0, import_react21.createContext)(null);
wt.displayName = "DisclosureAPIContext";
function Ao(e) {
  let t = (0, import_react21.useContext)(wt);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <${Ye.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Ao), r;
  }
  return t;
}
var kt = (0, import_react21.createContext)(null);
kt.displayName = "DisclosurePanelContext";
function Dn() {
  return (0, import_react21.useContext)(kt);
}
function Mn(e, t) {
  return S(t.type, Ln, e, t);
}
var Fn = import_react21.Fragment;
function Ye(e) {
  let { defaultOpen: t = false, ...r } = e, o = `headlessui-disclosure-button-${A()}`, n = `headlessui-disclosure-panel-${A()}`, i = (0, import_react21.useReducer)(Mn, { disclosureState: t ? 0 : 1, linkedPanel: false, buttonId: o, panelId: n }), [{ disclosureState: a }, l] = i;
  (0, import_react21.useEffect)(() => l({ type: 2, buttonId: o }), [o, l]), (0, import_react21.useEffect)(() => l({ type: 3, panelId: n }), [n, l]);
  let s = (0, import_react21.useCallback)((m) => {
    l({ type: 1 });
    let b = (() => m ? m instanceof HTMLElement ? m : m.current instanceof HTMLElement ? m.current : document.getElementById(o) : document.getElementById(o))();
    b == null || b.focus();
  }, [l, o]), u = (0, import_react21.useMemo)(() => ({ close: s }), [s]), c = (0, import_react21.useMemo)(() => ({ open: a === 0, close: s }), [a, s]);
  return import_react21.default.createElement(Mt.Provider, { value: i }, import_react21.default.createElement(wt.Provider, { value: u }, import_react21.default.createElement(W, { value: S(a, { [0]: 0, [1]: 1 }) }, E({ props: r, slot: c, defaultTag: Fn, name: "Disclosure" }))));
}
var wn = "button";
var kn = D(function(t, r) {
  let [o, n] = Ft("Disclosure.Button"), i = (0, import_react21.useRef)(null), a = I(i, r), l = Dn(), s = l === null ? false : l === o.panelId, u = (0, import_react21.useCallback)((f) => {
    var d;
    if (s) {
      if (o.disclosureState === 1)
        return;
      switch (f.key) {
        case " ":
        case "Enter":
          f.preventDefault(), f.stopPropagation(), n({ type: 0 }), (d = document.getElementById(o.buttonId)) == null || d.focus();
          break;
      }
    } else
      switch (f.key) {
        case " ":
        case "Enter":
          f.preventDefault(), f.stopPropagation(), n({ type: 0 });
          break;
      }
  }, [n, s, o.disclosureState, o.buttonId]), c = (0, import_react21.useCallback)((f) => {
    switch (f.key) {
      case " ":
        f.preventDefault();
        break;
    }
  }, []), m = (0, import_react21.useCallback)((f) => {
    var d;
    G(f.currentTarget) || t.disabled || (s ? (n({ type: 0 }), (d = document.getElementById(o.buttonId)) == null || d.focus()) : n({ type: 0 }));
  }, [n, t.disabled, o.buttonId, s]), b = (0, import_react21.useMemo)(() => ({ open: o.disclosureState === 0 }), [o]), T = U(t, i), y = t, p = s ? { ref: a, type: T, onKeyDown: u, onClick: m } : { ref: a, id: o.buttonId, type: T, "aria-expanded": t.disabled ? void 0 : o.disclosureState === 0, "aria-controls": o.linkedPanel ? o.panelId : void 0, onKeyDown: u, onKeyUp: c, onClick: m };
  return E({ props: { ...y, ...p }, slot: b, defaultTag: wn, name: "Disclosure.Button" });
});
var _n = "div";
var Gn = 1 | 2;
var Hn = D(function(t, r) {
  let [o, n] = Ft("Disclosure.Panel"), { close: i } = Ao("Disclosure.Panel"), a = I(r, () => {
    o.linkedPanel || n({ type: 4 });
  }), l = _(), s = (() => l !== null ? l === 0 : o.disclosureState === 0)();
  (0, import_react21.useEffect)(() => () => n({ type: 5 }), [n]), (0, import_react21.useEffect)(() => {
    var b;
    o.disclosureState === 1 && ((b = t.unmount) != null ? b : true) && n({ type: 5 });
  }, [o.disclosureState, t.unmount, n]);
  let u = (0, import_react21.useMemo)(() => ({ open: o.disclosureState === 0, close: i }), [o, i]), c = { ref: a, id: o.panelId }, m = t;
  return import_react21.default.createElement(kt.Provider, { value: o.panelId }, E({ props: { ...m, ...c }, slot: u, defaultTag: _n, features: Gn, visible: s, name: "Disclosure.Panel" }));
});
Ye.Button = kn;
Ye.Panel = Hn;
var $n = { [1](e) {
  return e.disabled || e.listboxState === 1 ? e : { ...e, activeOptionIndex: null, listboxState: 1 };
}, [0](e) {
  return e.disabled || e.listboxState === 0 ? e : { ...e, listboxState: 0 };
}, [2](e, t) {
  return e.disabled === t.disabled ? e : { ...e, disabled: t.disabled };
}, [3](e, t) {
  return e.orientation === t.orientation ? e : { ...e, orientation: t.orientation };
}, [4](e, t) {
  if (e.disabled || e.listboxState === 1)
    return e;
  let r = ae(t, { resolveItems: () => e.options, resolveActiveIndex: () => e.activeOptionIndex, resolveId: (o) => o.id, resolveDisabled: (o) => o.dataRef.current.disabled });
  return e.searchQuery === "" && e.activeOptionIndex === r ? e : { ...e, searchQuery: "", activeOptionIndex: r };
}, [5]: (e, t) => {
  if (e.disabled || e.listboxState === 1)
    return e;
  let o = e.searchQuery !== "" ? 0 : 1, n = e.searchQuery + t.value.toLowerCase(), a = (e.activeOptionIndex !== null ? e.options.slice(e.activeOptionIndex + o).concat(e.options.slice(0, e.activeOptionIndex + o)) : e.options).find((s) => {
    var u;
    return !s.dataRef.current.disabled && ((u = s.dataRef.current.textValue) == null ? void 0 : u.startsWith(n));
  }), l = a ? e.options.indexOf(a) : -1;
  return l === -1 || l === e.activeOptionIndex ? { ...e, searchQuery: n } : { ...e, searchQuery: n, activeOptionIndex: l };
}, [6](e) {
  return e.disabled || e.listboxState === 1 || e.searchQuery === "" ? e : { ...e, searchQuery: "" };
}, [7]: (e, t) => {
  var n;
  let r = Array.from((n = e.optionsRef.current) == null ? void 0 : n.querySelectorAll('[id^="headlessui-listbox-option-"]')).reduce((i, a, l) => Object.assign(i, { [a.id]: l }), {}), o = [...e.options, { id: t.id, dataRef: t.dataRef }].sort((i, a) => r[i.id] - r[a.id]);
  return { ...e, options: o };
}, [8]: (e, t) => {
  let r = e.options.slice(), o = e.activeOptionIndex !== null ? r[e.activeOptionIndex] : null, n = r.findIndex((i) => i.id === t.id);
  return n !== -1 && r.splice(n, 1), { ...e, options: r, activeOptionIndex: (() => n === e.activeOptionIndex || o === null ? null : r.indexOf(o))() };
} };
var Gt = (0, import_react23.createContext)(null);
Gt.displayName = "ListboxContext";
function Re(e) {
  let t = (0, import_react23.useContext)(Gt);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <${Ee.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Re), r;
  }
  return t;
}
function Qn(e, t) {
  return S(t.type, $n, e, t);
}
var qn = import_react23.Fragment;
function Ee(e) {
  let { value: t, onChange: r, disabled: o = false, horizontal: n = false, ...i } = e, a = n ? "horizontal" : "vertical", l = (0, import_react23.useReducer)(Qn, { listboxState: 1, propsRef: { current: { value: t, onChange: r } }, labelRef: (0, import_react23.createRef)(), buttonRef: (0, import_react23.createRef)(), optionsRef: (0, import_react23.createRef)(), disabled: o, orientation: a, options: [], searchQuery: "", activeOptionIndex: null }), [{ listboxState: s, propsRef: u, optionsRef: c, buttonRef: m }, b] = l;
  x(() => {
    u.current.value = t;
  }, [t, u]), x(() => {
    u.current.onChange = r;
  }, [r, u]), x(() => b({ type: 2, disabled: o }), [o]), x(() => b({ type: 3, orientation: a }), [a]), w("mousedown", (y) => {
    var f, d, P;
    let p = y.target;
    s === 0 && (((f = m.current) == null ? void 0 : f.contains(p)) || ((d = c.current) == null ? void 0 : d.contains(p)) || (b({ type: 1 }), de(p, 1) || (y.preventDefault(), (P = m.current) == null || P.focus())));
  });
  let T = (0, import_react23.useMemo)(() => ({ open: s === 0, disabled: o }), [s, o]);
  return import_react23.default.createElement(Gt.Provider, { value: l }, import_react23.default.createElement(W, { value: S(s, { [0]: 0, [1]: 1 }) }, E({ props: i, slot: T, defaultTag: qn, name: "Listbox" })));
}
var zn = "button";
var Yn = D(function(t, r) {
  var p;
  let [o, n] = Re("Listbox.Button"), i = I(o.buttonRef, r), a = `headlessui-listbox-button-${A()}`, l = Q(), s = (0, import_react23.useCallback)((f) => {
    switch (f.key) {
      case " ":
      case "Enter":
      case "ArrowDown":
        f.preventDefault(), n({ type: 0 }), l.nextFrame(() => {
          o.propsRef.current.value || n({ type: 4, focus: 0 });
        });
        break;
      case "ArrowUp":
        f.preventDefault(), n({ type: 0 }), l.nextFrame(() => {
          o.propsRef.current.value || n({ type: 4, focus: 3 });
        });
        break;
    }
  }, [n, o, l]), u = (0, import_react23.useCallback)((f) => {
    switch (f.key) {
      case " ":
        f.preventDefault();
        break;
    }
  }, []), c = (0, import_react23.useCallback)((f) => {
    if (G(f.currentTarget))
      return f.preventDefault();
    o.listboxState === 0 ? (n({ type: 1 }), l.nextFrame(() => {
      var d;
      return (d = o.buttonRef.current) == null ? void 0 : d.focus({ preventScroll: true });
    })) : (f.preventDefault(), n({ type: 0 }));
  }, [n, l, o]), m = ee(() => {
    if (!!o.labelRef.current)
      return [o.labelRef.current.id, a].join(" ");
  }, [o.labelRef.current, a]), b = (0, import_react23.useMemo)(() => ({ open: o.listboxState === 0, disabled: o.disabled }), [o]), T = t, y = { ref: i, id: a, type: U(t, o.buttonRef), "aria-haspopup": true, "aria-controls": (p = o.optionsRef.current) == null ? void 0 : p.id, "aria-expanded": o.disabled ? void 0 : o.listboxState === 0, "aria-labelledby": m, disabled: o.disabled, onKeyDown: s, onKeyUp: u, onClick: c };
  return E({ props: { ...T, ...y }, slot: b, defaultTag: zn, name: "Listbox.Button" });
});
var Xn = "label";
function Jn(e) {
  let [t] = Re("Listbox.Label"), r = `headlessui-listbox-label-${A()}`, o = (0, import_react23.useCallback)(() => {
    var a;
    return (a = t.buttonRef.current) == null ? void 0 : a.focus({ preventScroll: true });
  }, [t.buttonRef]), n = (0, import_react23.useMemo)(() => ({ open: t.listboxState === 0, disabled: t.disabled }), [t]), i = { ref: t.labelRef, id: r, onClick: o };
  return E({ props: { ...e, ...i }, slot: n, defaultTag: Xn, name: "Listbox.Label" });
}
var Zn = "ul";
var ei = 1 | 2;
var ti = D(function(t, r) {
  var f;
  let [o, n] = Re("Listbox.Options"), i = I(o.optionsRef, r), a = `headlessui-listbox-options-${A()}`, l = Q(), s = Q(), u = _(), c = (() => u !== null ? u === 0 : o.listboxState === 0)();
  x(() => {
    let d = o.optionsRef.current;
    !d || o.listboxState === 0 && d !== document.activeElement && d.focus({ preventScroll: true });
  }, [o.listboxState, o.optionsRef]);
  let m = (0, import_react23.useCallback)((d) => {
    switch (s.dispose(), d.key) {
      case " ":
        if (o.searchQuery !== "")
          return d.preventDefault(), d.stopPropagation(), n({ type: 5, value: d.key });
      case "Enter":
        if (d.preventDefault(), d.stopPropagation(), n({ type: 1 }), o.activeOptionIndex !== null) {
          let { dataRef: P } = o.options[o.activeOptionIndex];
          o.propsRef.current.onChange(P.current.value);
        }
        k().nextFrame(() => {
          var P;
          return (P = o.buttonRef.current) == null ? void 0 : P.focus({ preventScroll: true });
        });
        break;
      case S(o.orientation, { vertical: "ArrowDown", horizontal: "ArrowRight" }):
        return d.preventDefault(), d.stopPropagation(), n({ type: 4, focus: 2 });
      case S(o.orientation, { vertical: "ArrowUp", horizontal: "ArrowLeft" }):
        return d.preventDefault(), d.stopPropagation(), n({ type: 4, focus: 1 });
      case "Home":
      case "PageUp":
        return d.preventDefault(), d.stopPropagation(), n({ type: 4, focus: 0 });
      case "End":
      case "PageDown":
        return d.preventDefault(), d.stopPropagation(), n({ type: 4, focus: 3 });
      case "Escape":
        return d.preventDefault(), d.stopPropagation(), n({ type: 1 }), l.nextFrame(() => {
          var P;
          return (P = o.buttonRef.current) == null ? void 0 : P.focus({ preventScroll: true });
        });
      case "Tab":
        d.preventDefault(), d.stopPropagation();
        break;
      default:
        d.key.length === 1 && (n({ type: 5, value: d.key }), s.setTimeout(() => n({ type: 6 }), 350));
        break;
    }
  }, [l, n, s, o]), b = ee(() => {
    var d, P, C;
    return (C = (d = o.labelRef.current) == null ? void 0 : d.id) != null ? C : (P = o.buttonRef.current) == null ? void 0 : P.id;
  }, [o.labelRef.current, o.buttonRef.current]), T = (0, import_react23.useMemo)(() => ({ open: o.listboxState === 0 }), [o]), y = { "aria-activedescendant": o.activeOptionIndex === null || (f = o.options[o.activeOptionIndex]) == null ? void 0 : f.id, "aria-labelledby": b, "aria-orientation": o.orientation, id: a, onKeyDown: m, role: "listbox", tabIndex: 0, ref: i };
  return E({ props: { ...t, ...y }, slot: T, defaultTag: Zn, features: ei, visible: c, name: "Listbox.Options" });
});
var oi = "li";
function ri(e) {
  let { disabled: t = false, value: r, ...o } = e, [n, i] = Re("Listbox.Option"), a = `headlessui-listbox-option-${A()}`, l = n.activeOptionIndex !== null ? n.options[n.activeOptionIndex].id === a : false, s = n.propsRef.current.value === r, u = (0, import_react23.useRef)({ disabled: t, value: r });
  x(() => {
    u.current.disabled = t;
  }, [u, t]), x(() => {
    u.current.value = r;
  }, [u, r]), x(() => {
    var d, P;
    u.current.textValue = (P = (d = document.getElementById(a)) == null ? void 0 : d.textContent) == null ? void 0 : P.toLowerCase();
  }, [u, a]);
  let c = (0, import_react23.useCallback)(() => n.propsRef.current.onChange(r), [n.propsRef, r]);
  x(() => (i({ type: 7, id: a, dataRef: u }), () => i({ type: 8, id: a })), [u, a]), x(() => {
    var d, P;
    n.listboxState === 0 && (!s || (i({ type: 4, focus: 4, id: a }), (P = (d = document.getElementById(a)) == null ? void 0 : d.focus) == null || P.call(d)));
  }, [n.listboxState]), x(() => {
    if (n.listboxState !== 0 || !l)
      return;
    let d = k();
    return d.requestAnimationFrame(() => {
      var P, C;
      (C = (P = document.getElementById(a)) == null ? void 0 : P.scrollIntoView) == null || C.call(P, { block: "nearest" });
    }), d.dispose;
  }, [a, l, n.listboxState, n.activeOptionIndex]);
  let m = (0, import_react23.useCallback)((d) => {
    if (t)
      return d.preventDefault();
    c(), i({ type: 1 }), k().nextFrame(() => {
      var P;
      return (P = n.buttonRef.current) == null ? void 0 : P.focus({ preventScroll: true });
    });
  }, [i, n.buttonRef, t, c]), b = (0, import_react23.useCallback)(() => {
    if (t)
      return i({ type: 4, focus: 5 });
    i({ type: 4, focus: 4, id: a });
  }, [t, a, i]), T = (0, import_react23.useCallback)(() => {
    t || l || i({ type: 4, focus: 4, id: a });
  }, [t, l, a, i]), y = (0, import_react23.useCallback)(() => {
    t || !l || i({ type: 4, focus: 5 });
  }, [t, l, i]), p = (0, import_react23.useMemo)(() => ({ active: l, selected: s, disabled: t }), [l, s, t]);
  return E({ props: { ...o, ...{ id: a, role: "option", tabIndex: t === true ? void 0 : -1, "aria-disabled": t === true ? true : void 0, "aria-selected": s === true ? true : void 0, disabled: void 0, onClick: m, onFocus: b, onPointerMove: T, onMouseMove: T, onPointerLeave: y, onMouseLeave: y } }, slot: p, defaultTag: oi, name: "Listbox.Option" });
}
Ee.Button = Yn;
Ee.Label = Jn;
Ee.Options = ti;
Ee.Option = ri;
var ui = { [1](e) {
  return e.menuState === 1 ? e : { ...e, activeItemIndex: null, menuState: 1 };
}, [0](e) {
  return e.menuState === 0 ? e : { ...e, menuState: 0 };
}, [2]: (e, t) => {
  let r = ae(t, { resolveItems: () => e.items, resolveActiveIndex: () => e.activeItemIndex, resolveId: (o) => o.id, resolveDisabled: (o) => o.dataRef.current.disabled });
  return e.searchQuery === "" && e.activeItemIndex === r ? e : { ...e, searchQuery: "", activeItemIndex: r };
}, [3]: (e, t) => {
  let o = e.searchQuery !== "" ? 0 : 1, n = e.searchQuery + t.value.toLowerCase(), a = (e.activeItemIndex !== null ? e.items.slice(e.activeItemIndex + o).concat(e.items.slice(0, e.activeItemIndex + o)) : e.items).find((s) => {
    var u;
    return ((u = s.dataRef.current.textValue) == null ? void 0 : u.startsWith(n)) && !s.dataRef.current.disabled;
  }), l = a ? e.items.indexOf(a) : -1;
  return l === -1 || l === e.activeItemIndex ? { ...e, searchQuery: n } : { ...e, searchQuery: n, activeItemIndex: l };
}, [4](e) {
  return e.searchQuery === "" ? e : { ...e, searchQuery: "", searchActiveItemIndex: null };
}, [5]: (e, t) => {
  var n;
  let r = Array.from((n = e.itemsRef.current) == null ? void 0 : n.querySelectorAll('[id^="headlessui-menu-item-"]')).reduce((i, a, l) => Object.assign(i, { [a.id]: l }), {}), o = [...e.items, { id: t.id, dataRef: t.dataRef }].sort((i, a) => r[i.id] - r[a.id]);
  return { ...e, items: o };
}, [6]: (e, t) => {
  let r = e.items.slice(), o = e.activeItemIndex !== null ? r[e.activeItemIndex] : null, n = r.findIndex((i) => i.id === t.id);
  return n !== -1 && r.splice(n, 1), { ...e, items: r, activeItemIndex: (() => n === e.activeItemIndex || o === null ? null : r.indexOf(o))() };
} };
var Ht = (0, import_react24.createContext)(null);
Ht.displayName = "MenuContext";
function Je(e) {
  let t = (0, import_react24.useContext)(Ht);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <${Ze.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Je), r;
  }
  return t;
}
function pi(e, t) {
  return S(t.type, ui, e, t);
}
var di = import_react24.Fragment;
function Ze(e) {
  let t = (0, import_react24.useReducer)(pi, { menuState: 1, buttonRef: (0, import_react24.createRef)(), itemsRef: (0, import_react24.createRef)(), items: [], searchQuery: "", activeItemIndex: null }), [{ menuState: r, itemsRef: o, buttonRef: n }, i] = t;
  w("mousedown", (l) => {
    var u, c, m;
    let s = l.target;
    r === 0 && (((u = n.current) == null ? void 0 : u.contains(s)) || ((c = o.current) == null ? void 0 : c.contains(s)) || (i({ type: 1 }), de(s, 1) || (l.preventDefault(), (m = n.current) == null || m.focus())));
  });
  let a = (0, import_react24.useMemo)(() => ({ open: r === 0 }), [r]);
  return import_react24.default.createElement(Ht.Provider, { value: t }, import_react24.default.createElement(W, { value: S(r, { [0]: 0, [1]: 1 }) }, E({ props: e, slot: a, defaultTag: di, name: "Menu" })));
}
var ci = "button";
var fi = D(function(t, r) {
  var y;
  let [o, n] = Je("Menu.Button"), i = I(o.buttonRef, r), a = `headlessui-menu-button-${A()}`, l = Q(), s = (0, import_react24.useCallback)((p) => {
    switch (p.key) {
      case " ":
      case "Enter":
      case "ArrowDown":
        p.preventDefault(), p.stopPropagation(), n({ type: 0 }), l.nextFrame(() => n({ type: 2, focus: 0 }));
        break;
      case "ArrowUp":
        p.preventDefault(), p.stopPropagation(), n({ type: 0 }), l.nextFrame(() => n({ type: 2, focus: 3 }));
        break;
    }
  }, [n, l]), u = (0, import_react24.useCallback)((p) => {
    switch (p.key) {
      case " ":
        p.preventDefault();
        break;
    }
  }, []), c = (0, import_react24.useCallback)((p) => {
    if (G(p.currentTarget))
      return p.preventDefault();
    t.disabled || (o.menuState === 0 ? (n({ type: 1 }), l.nextFrame(() => {
      var f;
      return (f = o.buttonRef.current) == null ? void 0 : f.focus({ preventScroll: true });
    })) : (p.preventDefault(), p.stopPropagation(), n({ type: 0 })));
  }, [n, l, o, t.disabled]), m = (0, import_react24.useMemo)(() => ({ open: o.menuState === 0 }), [o]), b = t, T = { ref: i, id: a, type: U(t, o.buttonRef), "aria-haspopup": true, "aria-controls": (y = o.itemsRef.current) == null ? void 0 : y.id, "aria-expanded": t.disabled ? void 0 : o.menuState === 0, onKeyDown: s, onKeyUp: u, onClick: c };
  return E({ props: { ...b, ...T }, slot: m, defaultTag: ci, name: "Menu.Button" });
});
var mi = "div";
var bi = 1 | 2;
var Ti = D(function(t, r) {
  var p, f;
  let [o, n] = Je("Menu.Items"), i = I(o.itemsRef, r), a = `headlessui-menu-items-${A()}`, l = Q(), s = _(), u = (() => s !== null ? s === 0 : o.menuState === 0)();
  (0, import_react24.useEffect)(() => {
    let d = o.itemsRef.current;
    !d || o.menuState === 0 && d !== document.activeElement && d.focus({ preventScroll: true });
  }, [o.menuState, o.itemsRef]), se({ container: o.itemsRef.current, enabled: o.menuState === 0, accept(d) {
    return d.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : d.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(d) {
    d.setAttribute("role", "none");
  } });
  let c = (0, import_react24.useCallback)((d) => {
    var P;
    switch (l.dispose(), d.key) {
      case " ":
        if (o.searchQuery !== "")
          return d.preventDefault(), d.stopPropagation(), n({ type: 3, value: d.key });
      case "Enter":
        if (d.preventDefault(), d.stopPropagation(), n({ type: 1 }), o.activeItemIndex !== null) {
          let { id: C } = o.items[o.activeItemIndex];
          (P = document.getElementById(C)) == null || P.click();
        }
        k().nextFrame(() => {
          var C;
          return (C = o.buttonRef.current) == null ? void 0 : C.focus({ preventScroll: true });
        });
        break;
      case "ArrowDown":
        return d.preventDefault(), d.stopPropagation(), n({ type: 2, focus: 2 });
      case "ArrowUp":
        return d.preventDefault(), d.stopPropagation(), n({ type: 2, focus: 1 });
      case "Home":
      case "PageUp":
        return d.preventDefault(), d.stopPropagation(), n({ type: 2, focus: 0 });
      case "End":
      case "PageDown":
        return d.preventDefault(), d.stopPropagation(), n({ type: 2, focus: 3 });
      case "Escape":
        d.preventDefault(), d.stopPropagation(), n({ type: 1 }), k().nextFrame(() => {
          var C;
          return (C = o.buttonRef.current) == null ? void 0 : C.focus({ preventScroll: true });
        });
        break;
      case "Tab":
        d.preventDefault(), d.stopPropagation();
        break;
      default:
        d.key.length === 1 && (n({ type: 3, value: d.key }), l.setTimeout(() => n({ type: 4 }), 350));
        break;
    }
  }, [n, l, o]), m = (0, import_react24.useCallback)((d) => {
    switch (d.key) {
      case " ":
        d.preventDefault();
        break;
    }
  }, []), b = (0, import_react24.useMemo)(() => ({ open: o.menuState === 0 }), [o]), T = { "aria-activedescendant": o.activeItemIndex === null || (p = o.items[o.activeItemIndex]) == null ? void 0 : p.id, "aria-labelledby": (f = o.buttonRef.current) == null ? void 0 : f.id, id: a, onKeyDown: c, onKeyUp: m, role: "menu", tabIndex: 0, ref: i };
  return E({ props: { ...t, ...T }, slot: b, defaultTag: mi, features: bi, visible: u, name: "Menu.Items" });
});
var yi = import_react24.Fragment;
function gi(e) {
  let { disabled: t = false, onClick: r, ...o } = e, [n, i] = Je("Menu.Item"), a = `headlessui-menu-item-${A()}`, l = n.activeItemIndex !== null ? n.items[n.activeItemIndex].id === a : false;
  x(() => {
    if (n.menuState !== 0 || !l)
      return;
    let p = k();
    return p.requestAnimationFrame(() => {
      var f, d;
      (d = (f = document.getElementById(a)) == null ? void 0 : f.scrollIntoView) == null || d.call(f, { block: "nearest" });
    }), p.dispose;
  }, [a, l, n.menuState, n.activeItemIndex]);
  let s = (0, import_react24.useRef)({ disabled: t });
  x(() => {
    s.current.disabled = t;
  }, [s, t]), x(() => {
    var p, f;
    s.current.textValue = (f = (p = document.getElementById(a)) == null ? void 0 : p.textContent) == null ? void 0 : f.toLowerCase();
  }, [s, a]), x(() => (i({ type: 5, id: a, dataRef: s }), () => i({ type: 6, id: a })), [s, a]);
  let u = (0, import_react24.useCallback)((p) => {
    if (t)
      return p.preventDefault();
    if (i({ type: 1 }), k().nextFrame(() => {
      var f;
      return (f = n.buttonRef.current) == null ? void 0 : f.focus({ preventScroll: true });
    }), r)
      return r(p);
  }, [i, n.buttonRef, t, r]), c = (0, import_react24.useCallback)(() => {
    if (t)
      return i({ type: 2, focus: 5 });
    i({ type: 2, focus: 4, id: a });
  }, [t, a, i]), m = (0, import_react24.useCallback)(() => {
    t || l || i({ type: 2, focus: 4, id: a });
  }, [t, l, a, i]), b = (0, import_react24.useCallback)(() => {
    t || !l || i({ type: 2, focus: 5 });
  }, [t, l, i]), T = (0, import_react24.useMemo)(() => ({ active: l, disabled: t }), [l, t]);
  return E({ props: { ...o, ...{ id: a, role: "menuitem", tabIndex: t === true ? void 0 : -1, "aria-disabled": t === true ? true : void 0, disabled: void 0, onClick: u, onFocus: c, onPointerMove: m, onMouseMove: m, onPointerLeave: b, onMouseLeave: b } }, slot: T, defaultTag: yi, name: "Menu.Item" });
}
Ze.Button = fi;
Ze.Items = Ti;
Ze.Item = gi;
var vi = { [0]: (e) => ({ ...e, popoverState: S(e.popoverState, { [0]: 1, [1]: 0 }) }), [1](e) {
  return e.popoverState === 1 ? e : { ...e, popoverState: 1 };
}, [2](e, t) {
  return e.button === t.button ? e : { ...e, button: t.button };
}, [3](e, t) {
  return e.buttonId === t.buttonId ? e : { ...e, buttonId: t.buttonId };
}, [4](e, t) {
  return e.panel === t.panel ? e : { ...e, panel: t.panel };
}, [5](e, t) {
  return e.panelId === t.panelId ? e : { ...e, panelId: t.panelId };
} };
var Ut = (0, import_react25.createContext)(null);
Ut.displayName = "PopoverContext";
function ot(e) {
  let t = (0, import_react25.useContext)(Ut);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <${Te.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, ot), r;
  }
  return t;
}
var Bt = (0, import_react25.createContext)(null);
Bt.displayName = "PopoverAPIContext";
function Mo(e) {
  let t = (0, import_react25.useContext)(Bt);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <${Te.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Mo), r;
  }
  return t;
}
var Nt = (0, import_react25.createContext)(null);
Nt.displayName = "PopoverGroupContext";
function Fo() {
  return (0, import_react25.useContext)(Nt);
}
var Wt = (0, import_react25.createContext)(null);
Wt.displayName = "PopoverPanelContext";
function Ri() {
  return (0, import_react25.useContext)(Wt);
}
function Ei(e, t) {
  return S(t.type, vi, e, t);
}
var Ci = "div";
function Te(e) {
  let t = `headlessui-popover-button-${A()}`, r = `headlessui-popover-panel-${A()}`, o = (0, import_react25.useReducer)(Ei, { popoverState: 1, button: null, buttonId: t, panel: null, panelId: r }), [{ popoverState: n, button: i, panel: a }, l] = o;
  (0, import_react25.useEffect)(() => l({ type: 3, buttonId: t }), [t, l]), (0, import_react25.useEffect)(() => l({ type: 5, panelId: r }), [r, l]);
  let s = (0, import_react25.useMemo)(() => ({ buttonId: t, panelId: r, close: () => l({ type: 1 }) }), [t, r, l]), u = Fo(), c = u == null ? void 0 : u.registerPopover, m = (0, import_react25.useCallback)(() => {
    var p;
    return (p = u == null ? void 0 : u.isFocusWithinPopoverGroup()) != null ? p : (i == null ? void 0 : i.contains(document.activeElement)) || (a == null ? void 0 : a.contains(document.activeElement));
  }, [u, i, a]);
  (0, import_react25.useEffect)(() => c == null ? void 0 : c(s), [c, s]), w("focus", () => {
    n === 0 && (m() || !i || !a || l({ type: 1 }));
  }, true), w("mousedown", (p) => {
    let f = p.target;
    n === 0 && ((i == null ? void 0 : i.contains(f)) || (a == null ? void 0 : a.contains(f)) || (l({ type: 1 }), de(f, 1) || (p.preventDefault(), i == null || i.focus())));
  });
  let b = (0, import_react25.useCallback)((p) => {
    l({ type: 1 });
    let f = (() => p ? p instanceof HTMLElement ? p : p.current instanceof HTMLElement ? p.current : i : i)();
    f == null || f.focus();
  }, [l, i]), T = (0, import_react25.useMemo)(() => ({ close: b }), [b]), y = (0, import_react25.useMemo)(() => ({ open: n === 0, close: b }), [n, b]);
  return import_react25.default.createElement(Ut.Provider, { value: o }, import_react25.default.createElement(Bt.Provider, { value: T }, import_react25.default.createElement(W, { value: S(n, { [0]: 0, [1]: 1 }) }, E({ props: e, slot: y, defaultTag: Ci, name: "Popover" }))));
}
var Si = "button";
var Ai = D(function(t, r) {
  let [o, n] = ot("Popover.Button"), i = (0, import_react25.useRef)(null), a = Fo(), l = a == null ? void 0 : a.closeOthers, s = Ri(), u = s === null ? false : s === o.panelId, c = I(i, r, u ? null : (g) => n({ type: 2, button: g })), m = I(i, r), b = (0, import_react25.useRef)(null), T = (0, import_react25.useRef)(typeof window == "undefined" ? null : document.activeElement);
  w("focus", () => {
    T.current = b.current, b.current = document.activeElement;
  }, true);
  let y = (0, import_react25.useCallback)((g) => {
    var v, h;
    if (u) {
      if (o.popoverState === 1)
        return;
      switch (g.key) {
        case " ":
        case "Enter":
          g.preventDefault(), g.stopPropagation(), n({ type: 1 }), (v = o.button) == null || v.focus();
          break;
      }
    } else
      switch (g.key) {
        case " ":
        case "Enter":
          g.preventDefault(), g.stopPropagation(), o.popoverState === 1 && (l == null || l(o.buttonId)), n({ type: 0 });
          break;
        case "Escape":
          if (o.popoverState !== 0)
            return l == null ? void 0 : l(o.buttonId);
          if (!i.current || !i.current.contains(document.activeElement))
            return;
          g.preventDefault(), g.stopPropagation(), n({ type: 1 });
          break;
        case "Tab":
          if (o.popoverState !== 0 || !o.panel || !o.button)
            return;
          if (g.shiftKey) {
            if (!T.current || ((h = o.button) == null ? void 0 : h.contains(T.current)) || o.panel.contains(T.current))
              return;
            let O = xe(), L = O.indexOf(T.current);
            if (O.indexOf(o.button) > L)
              return;
            g.preventDefault(), g.stopPropagation(), M(o.panel, 8);
          } else
            g.preventDefault(), g.stopPropagation(), M(o.panel, 1);
          break;
      }
  }, [n, o.popoverState, o.buttonId, o.button, o.panel, i, l, u]), p = (0, import_react25.useCallback)((g) => {
    var v;
    if (!u && (g.key === " " && g.preventDefault(), o.popoverState === 0 && !!o.panel && !!o.button))
      switch (g.key) {
        case "Tab":
          if (!T.current || ((v = o.button) == null ? void 0 : v.contains(T.current)) || o.panel.contains(T.current))
            return;
          let h = xe(), O = h.indexOf(T.current);
          if (h.indexOf(o.button) > O)
            return;
          g.preventDefault(), g.stopPropagation(), M(o.panel, 8);
          break;
      }
  }, [o.popoverState, o.panel, o.button, u]), f = (0, import_react25.useCallback)((g) => {
    var v, h;
    G(g.currentTarget) || t.disabled || (u ? (n({ type: 1 }), (v = o.button) == null || v.focus()) : (o.popoverState === 1 && (l == null || l(o.buttonId)), (h = o.button) == null || h.focus(), n({ type: 0 })));
  }, [n, o.button, o.popoverState, o.buttonId, t.disabled, l, u]), d = (0, import_react25.useMemo)(() => ({ open: o.popoverState === 0 }), [o]), P = U(t, i), C = t, R = u ? { ref: m, type: P, onKeyDown: y, onClick: f } : { ref: c, id: o.buttonId, type: P, "aria-expanded": t.disabled ? void 0 : o.popoverState === 0, "aria-controls": o.panel ? o.panelId : void 0, onKeyDown: y, onKeyUp: p, onClick: f };
  return E({ props: { ...C, ...R }, slot: d, defaultTag: Si, name: "Popover.Button" });
});
var hi = "div";
var Oi = 1 | 2;
var Ii = D(function(t, r) {
  let [{ popoverState: o }, n] = ot("Popover.Overlay"), i = I(r), a = `headlessui-popover-overlay-${A()}`, l = _(), s = (() => l !== null ? l === 0 : o === 0)(), u = (0, import_react25.useCallback)((T) => {
    if (G(T.currentTarget))
      return T.preventDefault();
    n({ type: 1 });
  }, [n]), c = (0, import_react25.useMemo)(() => ({ open: o === 0 }), [o]);
  return E({ props: { ...t, ...{ ref: i, id: a, "aria-hidden": true, onClick: u } }, slot: c, defaultTag: hi, features: Oi, visible: s, name: "Popover.Overlay" });
});
var Li = "div";
var Di = 1 | 2;
var Mi = D(function(t, r) {
  let { focus: o = false, ...n } = t, [i, a] = ot("Popover.Panel"), { close: l } = Mo("Popover.Panel"), s = (0, import_react25.useRef)(null), u = I(s, r, (p) => {
    a({ type: 4, panel: p });
  }), c = _(), m = (() => c !== null ? c === 0 : i.popoverState === 0)(), b = (0, import_react25.useCallback)((p) => {
    var f;
    switch (p.key) {
      case "Escape":
        if (i.popoverState !== 0 || !s.current || !s.current.contains(document.activeElement))
          return;
        p.preventDefault(), p.stopPropagation(), a({ type: 1 }), (f = i.button) == null || f.focus();
        break;
    }
  }, [i, s, a]);
  (0, import_react25.useEffect)(() => () => a({ type: 4, panel: null }), [a]), (0, import_react25.useEffect)(() => {
    var p;
    t.static || i.popoverState === 1 && ((p = t.unmount) != null ? p : true) && a({ type: 4, panel: null });
  }, [i.popoverState, t.unmount, t.static, a]), (0, import_react25.useEffect)(() => {
    if (!o || i.popoverState !== 0 || !s.current)
      return;
    let p = document.activeElement;
    s.current.contains(p) || M(s.current, 1);
  }, [o, s, i.popoverState]), w("keydown", (p) => {
    var d;
    if (i.popoverState !== 0 || !s.current || p.key !== "Tab" || !document.activeElement || !s.current || !s.current.contains(document.activeElement))
      return;
    p.preventDefault();
    let f = M(s.current, p.shiftKey ? 2 : 4);
    if (f === 3)
      return (d = i.button) == null ? void 0 : d.focus();
    if (f === 1) {
      if (!i.button)
        return;
      let P = xe(), C = P.indexOf(i.button), R = P.splice(C + 1).filter((g) => {
        var v;
        return !((v = s.current) == null ? void 0 : v.contains(g));
      });
      M(R, 1) === 0 && M(document.body, 1);
    }
  }), w("focus", () => {
    var p;
    !o || i.popoverState === 0 && (!s.current || ((p = s.current) == null ? void 0 : p.contains(document.activeElement)) || a({ type: 1 }));
  }, true);
  let T = (0, import_react25.useMemo)(() => ({ open: i.popoverState === 0, close: l }), [i, l]), y = { ref: u, id: i.panelId, onKeyDown: b };
  return import_react25.default.createElement(Wt.Provider, { value: i.panelId }, E({ props: { ...n, ...y }, slot: T, defaultTag: Li, features: Di, visible: m, name: "Popover.Panel" }));
});
var Fi = "div";
function wi(e) {
  let t = (0, import_react25.useRef)(null), [r, o] = (0, import_react25.useState)([]), n = (0, import_react25.useCallback)((b) => {
    o((T) => {
      let y = T.indexOf(b);
      if (y !== -1) {
        let p = T.slice();
        return p.splice(y, 1), p;
      }
      return T;
    });
  }, [o]), i = (0, import_react25.useCallback)((b) => (o((T) => [...T, b]), () => n(b)), [o, n]), a = (0, import_react25.useCallback)(() => {
    var T;
    let b = document.activeElement;
    return ((T = t.current) == null ? void 0 : T.contains(b)) ? true : r.some((y) => {
      var p, f;
      return ((p = document.getElementById(y.buttonId)) == null ? void 0 : p.contains(b)) || ((f = document.getElementById(y.panelId)) == null ? void 0 : f.contains(b));
    });
  }, [t, r]), l = (0, import_react25.useCallback)((b) => {
    for (let T of r)
      T.buttonId !== b && T.close();
  }, [r]), s = (0, import_react25.useMemo)(() => ({ registerPopover: i, unregisterPopover: n, isFocusWithinPopoverGroup: a, closeOthers: l }), [i, n, a, l]), u = (0, import_react25.useMemo)(() => ({}), []), c = { ref: t }, m = e;
  return import_react25.default.createElement(Nt.Provider, { value: s }, E({ props: { ...m, ...c }, slot: u, defaultTag: Fi, name: "Popover.Group" }));
}
Te.Button = Ai;
Te.Overlay = Ii;
Te.Panel = Mi;
Te.Group = wi;
function wo(e = 0) {
  let [t, r] = (0, import_react27.useState)(e), o = (0, import_react27.useCallback)((l) => r((s) => s | l), [r]), n = (0, import_react27.useCallback)((l) => Boolean(t & l), [t]), i = (0, import_react27.useCallback)((l) => r((s) => s & ~l), [r]), a = (0, import_react27.useCallback)((l) => r((s) => s ^ l), [r]);
  return { addFlag: o, hasFlag: n, removeFlag: i, toggleFlag: a };
}
var _o = (0, import_react28.createContext)(null);
function Go() {
  let e = (0, import_react28.useContext)(_o);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, Go), t;
  }
  return e;
}
function Ae() {
  let [e, t] = (0, import_react28.useState)([]);
  return [e.length > 0 ? e.join(" ") : void 0, (0, import_react28.useMemo)(() => function(o) {
    let n = (0, import_react28.useCallback)((a) => (t((l) => [...l, a]), () => t((l) => {
      let s = l.slice(), u = s.indexOf(a);
      return u !== -1 && s.splice(u, 1), s;
    })), []), i = (0, import_react28.useMemo)(() => ({ register: n, slot: o.slot, name: o.name, props: o.props }), [n, o.slot, o.name, o.props]);
    return import_react28.default.createElement(_o.Provider, { value: i }, o.children);
  }, [t])];
}
var Ni = "label";
function nt(e) {
  let { passive: t = false, ...r } = e, o = Go(), n = `headlessui-label-${A()}`;
  x(() => o.register(n), [n, o.register]);
  let i = { ...o.props, id: n }, a = { ...r, ...i };
  return t && delete a.onClick, E({ props: a, slot: o.slot || {}, defaultTag: Ni, name: o.name || "Label" });
}
var Vi = { [0](e, t) {
  return { ...e, options: [...e.options, { id: t.id, element: t.element, propsRef: t.propsRef }] };
}, [1](e, t) {
  let r = e.options.slice(), o = e.options.findIndex((n) => n.id === t.id);
  return o === -1 ? e : (r.splice(o, 1), { ...e, options: r });
} };
var jt = (0, import_react26.createContext)(null);
jt.displayName = "RadioGroupContext";
function Ho(e) {
  let t = (0, import_react26.useContext)(jt);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <${lt.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Ho), r;
  }
  return t;
}
function $i(e, t) {
  return S(t.type, Vi, e, t);
}
var Qi = "div";
function lt(e) {
  let { value: t, onChange: r, disabled: o = false, ...n } = e, [{ options: i }, a] = (0, import_react26.useReducer)($i, { options: [] }), [l, s] = Ae(), [u, c] = re(), m = `headlessui-radiogroup-${A()}`, b = (0, import_react26.useRef)(null), T = (0, import_react26.useMemo)(() => i.find((R) => !R.propsRef.current.disabled), [i]), y = (0, import_react26.useMemo)(() => i.some((R) => R.propsRef.current.value === t), [i, t]), p = (0, import_react26.useCallback)((R) => {
    var v;
    if (o || R === t)
      return false;
    let g = (v = i.find((h) => h.propsRef.current.value === R)) == null ? void 0 : v.propsRef.current;
    return (g == null ? void 0 : g.disabled) ? false : (r(R), true);
  }, [r, t, o, i]);
  se({ container: b.current, accept(R) {
    return R.getAttribute("role") === "radio" ? NodeFilter.FILTER_REJECT : R.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(R) {
    R.setAttribute("role", "none");
  } });
  let f = (0, import_react26.useCallback)((R) => {
    if (!b.current)
      return;
    let v = i.filter((h) => h.propsRef.current.disabled === false).map((h) => h.element.current);
    switch (R.key) {
      case "ArrowLeft":
      case "ArrowUp":
        if (R.preventDefault(), R.stopPropagation(), M(v, 2 | 16) === 2) {
          let O = i.find((L) => L.element.current === document.activeElement);
          O && p(O.propsRef.current.value);
        }
        break;
      case "ArrowRight":
      case "ArrowDown":
        if (R.preventDefault(), R.stopPropagation(), M(v, 4 | 16) === 2) {
          let O = i.find((L) => L.element.current === document.activeElement);
          O && p(O.propsRef.current.value);
        }
        break;
      case " ":
        {
          R.preventDefault(), R.stopPropagation();
          let h = i.find((O) => O.element.current === document.activeElement);
          h && p(h.propsRef.current.value);
        }
        break;
    }
  }, [b, i, p]), d = (0, import_react26.useCallback)((R) => (a({ type: 0, ...R }), () => a({ type: 1, id: R.id })), [a]), P = (0, import_react26.useMemo)(() => ({ registerOption: d, firstOption: T, containsCheckedOption: y, change: p, disabled: o, value: t }), [d, T, y, p, o, t]), C = { ref: b, id: m, role: "radiogroup", "aria-labelledby": l, "aria-describedby": u, onKeyDown: f };
  return import_react26.default.createElement(c, { name: "RadioGroup.Description" }, import_react26.default.createElement(s, { name: "RadioGroup.Label" }, import_react26.default.createElement(jt.Provider, { value: P }, E({ props: { ...n, ...C }, defaultTag: Qi, name: "RadioGroup" }))));
}
var qi = "div";
function zi(e) {
  let t = (0, import_react26.useRef)(null), r = `headlessui-radiogroup-option-${A()}`, [o, n] = Ae(), [i, a] = re(), { addFlag: l, removeFlag: s, hasFlag: u } = wo(1), { value: c, disabled: m = false, ...b } = e, T = (0, import_react26.useRef)({ value: c, disabled: m });
  x(() => {
    T.current.value = c;
  }, [c, T]), x(() => {
    T.current.disabled = m;
  }, [m, T]);
  let { registerOption: y, disabled: p, change: f, firstOption: d, containsCheckedOption: P, value: C } = Ho("RadioGroup.Option");
  x(() => y({ id: r, element: t, propsRef: T }), [r, y, t, e]);
  let R = (0, import_react26.useCallback)(() => {
    var V;
    !f(c) || (l(2), (V = t.current) == null || V.focus());
  }, [l, f, c]), g = (0, import_react26.useCallback)(() => l(2), [l]), v = (0, import_react26.useCallback)(() => s(2), [s]), h = (d == null ? void 0 : d.id) === r, O = p || m, L = C === c, N = { ref: t, id: r, role: "radio", "aria-checked": L ? "true" : "false", "aria-labelledby": o, "aria-describedby": i, "aria-disabled": O ? true : void 0, tabIndex: (() => O ? -1 : L || !P && h ? 0 : -1)(), onClick: O ? void 0 : R, onFocus: O ? void 0 : g, onBlur: O ? void 0 : v }, K = (0, import_react26.useMemo)(() => ({ checked: L, disabled: O, active: u(2) }), [L, O, u]);
  return import_react26.default.createElement(a, { name: "RadioGroup.Description" }, import_react26.default.createElement(n, { name: "RadioGroup.Label" }, E({ props: { ...b, ...N }, slot: K, defaultTag: qi, name: "RadioGroup.Option" })));
}
lt.Option = zi;
lt.Label = nt;
lt.Description = me;
var $t = (0, import_react29.createContext)(null);
$t.displayName = "GroupContext";
var tl = import_react29.Fragment;
function ol(e) {
  let [t, r] = (0, import_react29.useState)(null), [o, n] = Ae(), [i, a] = re(), l = (0, import_react29.useMemo)(() => ({ switch: t, setSwitch: r, labelledby: o, describedby: i }), [t, r, o, i]);
  return import_react29.default.createElement(a, { name: "Switch.Description" }, import_react29.default.createElement(n, { name: "Switch.Label", props: { onClick() {
    !t || (t.click(), t.focus({ preventScroll: true }));
  } } }, import_react29.default.createElement($t.Provider, { value: l }, E({ props: e, defaultTag: tl, name: "Switch.Group" }))));
}
var rl = "button";
function Qt(e) {
  let { checked: t, onChange: r, ...o } = e, n = `headlessui-switch-${A()}`, i = (0, import_react29.useContext)($t), a = (0, import_react29.useRef)(null), l = I(a, i === null ? null : i.setSwitch), s = (0, import_react29.useCallback)(() => r(!t), [r, t]), u = (0, import_react29.useCallback)((y) => {
    if (G(y.currentTarget))
      return y.preventDefault();
    y.preventDefault(), s();
  }, [s]), c = (0, import_react29.useCallback)((y) => {
    y.key !== "Tab" && y.preventDefault(), y.key === " " && s();
  }, [s]), m = (0, import_react29.useCallback)((y) => y.preventDefault(), []), b = (0, import_react29.useMemo)(() => ({ checked: t }), [t]), T = { id: n, ref: l, role: "switch", type: U(e, a), tabIndex: 0, "aria-checked": t, "aria-labelledby": i == null ? void 0 : i.labelledby, "aria-describedby": i == null ? void 0 : i.describedby, onClick: u, onKeyUp: c, onKeyPress: m };
  return E({ props: { ...o, ...T }, slot: b, defaultTag: rl, name: "Switch" });
}
Qt.Group = ol;
Qt.Label = nt;
Qt.Description = me;
var ul = { [0](e, t) {
  return e.selectedIndex === t.index ? e : { ...e, selectedIndex: t.index };
}, [1](e, t) {
  return e.orientation === t.orientation ? e : { ...e, orientation: t.orientation };
}, [2](e, t) {
  return e.activation === t.activation ? e : { ...e, activation: t.activation };
}, [3](e, t) {
  return e.tabs.includes(t.tab) ? e : { ...e, tabs: [...e.tabs, t.tab] };
}, [4](e, t) {
  return { ...e, tabs: e.tabs.filter((r) => r !== t.tab) };
}, [5](e, t) {
  return e.panels.includes(t.panel) ? e : { ...e, panels: [...e.panels, t.panel] };
}, [6](e, t) {
  return { ...e, panels: e.panels.filter((r) => r !== t.panel) };
}, [7](e) {
  return { ...e };
} };
var zt = (0, import_react30.createContext)(null);
zt.displayName = "TabsContext";
function Le(e) {
  let t = (0, import_react30.useContext)(zt);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Le), r;
  }
  return t;
}
function pl(e, t) {
  return S(t.type, ul, e, t);
}
var dl = import_react30.Fragment;
function cl(e) {
  let { defaultIndex: t = 0, vertical: r = false, manual: o = false, onChange: n, selectedIndex: i = null, ...a } = e, l = r ? "vertical" : "horizontal", s = o ? "manual" : "auto", [u, c] = (0, import_react30.useReducer)(pl, { selectedIndex: null, tabs: [], panels: [], orientation: l, activation: s }), m = (0, import_react30.useMemo)(() => ({ selectedIndex: u.selectedIndex }), [u.selectedIndex]), b = (0, import_react30.useRef)(() => {
  });
  (0, import_react30.useEffect)(() => {
    c({ type: 1, orientation: l });
  }, [l]), (0, import_react30.useEffect)(() => {
    c({ type: 2, activation: s });
  }, [s]), (0, import_react30.useEffect)(() => {
    typeof n == "function" && (b.current = n);
  }, [n]), (0, import_react30.useEffect)(() => {
    if (u.tabs.length <= 0 || i === null && u.selectedIndex !== null)
      return;
    let p = u.tabs.map((P) => P.current).filter(Boolean), f = p.filter((P) => !P.hasAttribute("disabled")), d = i != null ? i : t;
    if (d < 0)
      c({ type: 0, index: p.indexOf(f[0]) });
    else if (d > u.tabs.length)
      c({ type: 0, index: p.indexOf(f[f.length - 1]) });
    else {
      let P = p.slice(0, d), R = [...p.slice(d), ...P].find((g) => f.includes(g));
      if (!R)
        return;
      c({ type: 0, index: p.indexOf(R) });
    }
  }, [t, i, u.tabs, u.selectedIndex]);
  let T = (0, import_react30.useRef)(u.selectedIndex);
  (0, import_react30.useEffect)(() => {
    T.current = u.selectedIndex;
  }, [u.selectedIndex]);
  let y = (0, import_react30.useMemo)(() => [u, { dispatch: c, change(p) {
    T.current !== p && b.current(p), T.current = p, c({ type: 0, index: p });
  } }], [u, c]);
  return import_react30.default.createElement(zt.Provider, { value: y }, E({ props: { ...a }, slot: m, defaultTag: dl, name: "Tabs" }));
}
var fl = "div";
function ml(e) {
  let [{ selectedIndex: t, orientation: r }] = Le("Tab.List"), o = { selectedIndex: t };
  return E({ props: { ...e, ...{ role: "tablist", "aria-orientation": r } }, slot: o, defaultTag: fl, name: "Tabs.List" });
}
var bl = "button";
function De(e) {
  var C, R;
  let t = `headlessui-tabs-tab-${A()}`, [{ selectedIndex: r, tabs: o, panels: n, orientation: i, activation: a }, { dispatch: l, change: s }] = Le(De.name), u = (0, import_react30.useRef)(null), c = I(u, (g) => {
    !g || l({ type: 7 });
  });
  x(() => (l({ type: 3, tab: u }), () => l({ type: 4, tab: u })), [l, u]);
  let m = o.indexOf(u), b = m === r, T = (0, import_react30.useCallback)((g) => {
    let v = o.map((h) => h.current).filter(Boolean);
    if (g.key === " " || g.key === "Enter") {
      g.preventDefault(), g.stopPropagation(), s(m);
      return;
    }
    switch (g.key) {
      case "Home":
      case "PageUp":
        return g.preventDefault(), g.stopPropagation(), M(v, 1);
      case "End":
      case "PageDown":
        return g.preventDefault(), g.stopPropagation(), M(v, 8);
    }
    return S(i, { vertical() {
      if (g.key === "ArrowUp")
        return M(v, 2 | 16);
      if (g.key === "ArrowDown")
        return M(v, 4 | 16);
    }, horizontal() {
      if (g.key === "ArrowLeft")
        return M(v, 2 | 16);
      if (g.key === "ArrowRight")
        return M(v, 4 | 16);
    } });
  }, [o, i, m, s]), y = (0, import_react30.useCallback)(() => {
    var g;
    (g = u.current) == null || g.focus();
  }, [u]), p = (0, import_react30.useCallback)(() => {
    var g;
    (g = u.current) == null || g.focus(), s(m);
  }, [s, m, u]), f = (0, import_react30.useMemo)(() => ({ selected: b }), [b]), d = { ref: c, onKeyDown: T, onFocus: a === "manual" ? y : p, onClick: p, id: t, role: "tab", type: U(e, u), "aria-controls": (R = (C = n[m]) == null ? void 0 : C.current) == null ? void 0 : R.id, "aria-selected": b, tabIndex: b ? 0 : -1 };
  return E({ props: { ...e, ...d }, slot: f, defaultTag: bl, name: "Tabs.Tab" });
}
var Tl = "div";
function yl(e) {
  let [{ selectedIndex: t }] = Le("Tab.Panels"), r = (0, import_react30.useMemo)(() => ({ selectedIndex: t }), [t]);
  return E({ props: e, slot: r, defaultTag: Tl, name: "Tabs.Panels" });
}
var gl = "div";
var Pl = 1 | 2;
function xl(e) {
  var T, y;
  let [{ selectedIndex: t, tabs: r, panels: o }, { dispatch: n }] = Le("Tab.Panel"), i = `headlessui-tabs-panel-${A()}`, a = (0, import_react30.useRef)(null), l = I(a, (p) => {
    !p || n({ type: 7 });
  });
  x(() => (n({ type: 5, panel: a }), () => n({ type: 6, panel: a })), [n, a]);
  let s = o.indexOf(a), u = s === t, c = (0, import_react30.useMemo)(() => ({ selected: u }), [u]), m = { ref: l, id: i, role: "tabpanel", "aria-labelledby": (y = (T = r[s]) == null ? void 0 : T.current) == null ? void 0 : y.id, tabIndex: u ? 0 : -1 };
  return E({ props: { ...e, ...m }, slot: c, defaultTag: gl, features: Pl, visible: u, name: "Tabs.Panel" });
}
De.Group = cl;
De.List = ml;
De.Panels = yl;
De.Panel = xl;
function Bo() {
  let e = (0, import_react32.useRef)(true);
  return (0, import_react32.useEffect)(() => {
    e.current = false;
  }, []), e.current;
}
function No(e) {
  let t = { called: false };
  return (...r) => {
    if (!t.called)
      return t.called = true, e(...r);
  };
}
function Yt(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function ut(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
function El(e, t) {
  let r = k();
  if (!e)
    return r.dispose;
  let { transitionDuration: o, transitionDelay: n } = getComputedStyle(e), [i, a] = [o, n].map((l) => {
    let [s = 0] = l.split(",").filter(Boolean).map((u) => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, c) => c - u);
    return s;
  });
  return i !== 0 ? r.setTimeout(() => {
    t("finished");
  }, i + a) : t("finished"), r.add(() => t("cancelled")), r.dispose;
}
function Xt(e, t, r, o, n, i) {
  let a = k(), l = i !== void 0 ? No(i) : () => {
  };
  return ut(e, ...n), Yt(e, ...t, ...r), a.nextFrame(() => {
    ut(e, ...r), Yt(e, ...o), a.add(El(e, (s) => (ut(e, ...o, ...t), Yt(e, ...n), l(s))));
  }), a.add(() => ut(e, ...t, ...r, ...o, ...n)), a.add(() => l("cancelled")), a.dispose;
}
function le(e = "") {
  return (0, import_react31.useMemo)(() => e.split(" ").filter((t) => t.trim().length > 1), [e]);
}
var dt = (0, import_react31.createContext)(null);
dt.displayName = "TransitionContext";
function Cl() {
  let e = (0, import_react31.useContext)(dt);
  if (e === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
function Sl() {
  let e = (0, import_react31.useContext)(ct);
  if (e === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
var ct = (0, import_react31.createContext)(null);
ct.displayName = "NestingContext";
function ft(e) {
  return "children" in e ? ft(e.children) : e.current.filter(({ state: t }) => t === "visible").length > 0;
}
function $o(e) {
  let t = (0, import_react31.useRef)(e), r = (0, import_react31.useRef)([]), o = Be();
  (0, import_react31.useEffect)(() => {
    t.current = e;
  }, [e]);
  let n = (0, import_react31.useCallback)((a, l = 1) => {
    var u;
    let s = r.current.findIndex(({ id: c }) => c === a);
    s !== -1 && (S(l, { [0]() {
      r.current.splice(s, 1);
    }, [1]() {
      r.current[s].state = "hidden";
    } }), !ft(r) && o.current && ((u = t.current) == null || u.call(t)));
  }, [t, o, r]), i = (0, import_react31.useCallback)((a) => {
    let l = r.current.find(({ id: s }) => s === a);
    return l ? l.state !== "visible" && (l.state = "visible") : r.current.push({ id: a, state: "visible" }), () => n(a, 0);
  }, [r, n]);
  return (0, import_react31.useMemo)(() => ({ children: r, register: i, unregister: n }), [i, n, r]);
}
function Al() {
}
var hl = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function Qo(e) {
  var r;
  let t = {};
  for (let o of hl)
    t[o] = (r = e[o]) != null ? r : Al;
  return t;
}
function Ol(e) {
  let t = (0, import_react31.useRef)(Qo(e));
  return (0, import_react31.useEffect)(() => {
    t.current = Qo(e);
  }, [e]), t;
}
var Il = "div";
var qo = 1;
function zo(e) {
  let { beforeEnter: t, afterEnter: r, beforeLeave: o, afterLeave: n, enter: i, enterFrom: a, enterTo: l, entered: s, leave: u, leaveFrom: c, leaveTo: m, ...b } = e, T = (0, import_react31.useRef)(null), [y, p] = (0, import_react31.useState)("visible"), f = b.unmount ? 0 : 1, { show: d, appear: P, initial: C } = Cl(), { register: R, unregister: g } = Sl(), v = A(), h = (0, import_react31.useRef)(false), O = $o(() => {
    h.current || (p("hidden"), g(v), X.current.afterLeave());
  });
  x(() => {
    if (!!v)
      return R(v);
  }, [R, v]), x(() => {
    if (f === 1 && !!v) {
      if (d && y !== "visible") {
        p("visible");
        return;
      }
      S(y, { hidden: () => g(v), visible: () => R(v) });
    }
  }, [y, v, R, g, d, f]);
  let L = le(i), N = le(a), K = le(l), V = le(s), Fe = le(u), ge = le(c), we = le(m), X = Ol({ beforeEnter: t, afterEnter: r, beforeLeave: o, afterLeave: n }), F = q();
  (0, import_react31.useEffect)(() => {
    if (F && y === "visible" && T.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [T, y, F]);
  let $ = C && !P;
  x(() => {
    let bt = T.current;
    if (!!bt && !$)
      return h.current = true, d && X.current.beforeEnter(), d || X.current.beforeLeave(), d ? Xt(bt, L, N, K, V, (Tt) => {
        h.current = false, Tt === "finished" && X.current.afterEnter();
      }) : Xt(bt, Fe, ge, we, V, (Tt) => {
        h.current = false, Tt === "finished" && (ft(O) || (p("hidden"), g(v), X.current.afterLeave()));
      });
  }, [X, v, h, g, O, T, $, d, L, N, K, Fe, ge, we]);
  let H = { ref: T }, Pe = b;
  return import_react31.default.createElement(ct.Provider, { value: O }, import_react31.default.createElement(W, { value: S(y, { visible: 0, hidden: 1 }) }, E({ props: { ...Pe, ...H }, defaultTag: Il, features: qo, visible: y === "visible", name: "Transition.Child" })));
}
function mt(e) {
  let { show: t, appear: r = false, unmount: o, ...n } = e, i = _();
  if (t === void 0 && i !== null && (t = S(i, { [0]: true, [1]: false })), ![true, false].includes(t))
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [a, l] = (0, import_react31.useState)(t ? "visible" : "hidden"), s = $o(() => {
    l("hidden");
  }), u = Bo(), c = (0, import_react31.useMemo)(() => ({ show: t, appear: r || !u, initial: u }), [t, r, u]);
  (0, import_react31.useEffect)(() => {
    t ? l("visible") : ft(s) || l("hidden");
  }, [t, s]);
  let m = { unmount: o };
  return import_react31.default.createElement(ct.Provider, { value: s }, import_react31.default.createElement(dt.Provider, { value: c }, E({ props: { ...m, as: import_react31.Fragment, children: import_react31.default.createElement(zo, { ...m, ...n }) }, defaultTag: import_react31.Fragment, features: qo, visible: a === "visible", name: "Transition" })));
}
mt.Child = function(t) {
  let r = (0, import_react31.useContext)(dt) !== null, o = _() !== null;
  return !r && o ? import_react31.default.createElement(mt, { ...t }) : import_react31.default.createElement(zo, { ...t });
};
mt.Root = mt;

// app/root.tsx
function links() {
  return [{ rel: "stylesheet", href: app_default }];
}
var meta = () => {
  return { title: "Guild Wars 2 Item Finder" };
};
function App() {
  return /* @__PURE__ */ import_react33.default.createElement(Document, null, /* @__PURE__ */ import_react33.default.createElement(Layout, null, /* @__PURE__ */ import_react33.default.createElement(Outlet, null)));
}
function Document({ children }) {
  return /* @__PURE__ */ import_react33.default.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ import_react33.default.createElement("head", null, /* @__PURE__ */ import_react33.default.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ import_react33.default.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ import_react33.default.createElement(Meta, null), /* @__PURE__ */ import_react33.default.createElement(Links, null)), /* @__PURE__ */ import_react33.default.createElement("body", {
    className: "mainBody h-full"
  }, /* @__PURE__ */ import_react33.default.createElement("div", null, children, /* @__PURE__ */ import_react33.default.createElement(ScrollRestoration, null), /* @__PURE__ */ import_react33.default.createElement(Scripts, null), /* @__PURE__ */ import_react33.default.createElement(LiveReload, null))));
}
var navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Item Lists", href: "/ItemLists", current: false },
  { name: "About", href: "#", current: false }
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Layout({ children }) {
  return /* @__PURE__ */ import_react33.default.createElement(import_react33.default.Fragment, null, /* @__PURE__ */ import_react33.default.createElement(Ye, {
    as: "nav",
    className: "bg-gray-800"
  }, ({ open }) => /* @__PURE__ */ import_react33.default.createElement(import_react33.default.Fragment, null, /* @__PURE__ */ import_react33.default.createElement("div", {
    className: "max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ import_react33.default.createElement("div", {
    className: "relative flex items-center justify-between h-16"
  }, /* @__PURE__ */ import_react33.default.createElement("div", {
    className: "absolute inset-y-0 left-0 flex items-center sm:hidden"
  }, /* @__PURE__ */ import_react33.default.createElement(Ye.Button, {
    className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
  }, /* @__PURE__ */ import_react33.default.createElement("span", {
    className: "sr-only"
  }, "Open main menu"), open ? /* @__PURE__ */ import_react33.default.createElement(XIcon_default, {
    className: "block h-6 w-6",
    "aria-hidden": "true"
  }) : /* @__PURE__ */ import_react33.default.createElement(MenuIcon_default, {
    className: "block h-6 w-6",
    "aria-hidden": "true"
  }))), /* @__PURE__ */ import_react33.default.createElement("div", {
    className: "flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
  }, /* @__PURE__ */ import_react33.default.createElement("div", {
    className: "flex-shrink-0 flex items-center"
  }, /* @__PURE__ */ import_react33.default.createElement("img", {
    className: "block lg:hidden h-8 w-auto",
    src: "logo.png",
    alt: "Workflow"
  }), /* @__PURE__ */ import_react33.default.createElement("img", {
    className: "hidden lg:block h-8 w-auto",
    src: "logo.png",
    alt: "Workflow"
  })), /* @__PURE__ */ import_react33.default.createElement("div", {
    className: "hidden sm:block sm:ml-6"
  }, /* @__PURE__ */ import_react33.default.createElement("div", {
    className: "flex space-x-4"
  }, navigation.map((item) => /* @__PURE__ */ import_react33.default.createElement("a", {
    key: item.name,
    href: item.href,
    className: classNames(item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "px-3 py-2 rounded-md text-sm font-medium"),
    "aria-current": item.current ? "page" : void 0
  }, item.name))))))), /* @__PURE__ */ import_react33.default.createElement(Ye.Panel, {
    className: "sm:hidden"
  }, /* @__PURE__ */ import_react33.default.createElement("div", {
    className: "px-2 pt-2 pb-3 space-y-1"
  }, navigation.map((item) => /* @__PURE__ */ import_react33.default.createElement(Ye.Button, {
    key: item.name,
    as: "a",
    href: item.href,
    className: classNames(item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "block px-3 py-2 rounded-md text-base font-medium"),
    "aria-current": item.current ? "page" : void 0
  }, item.name)))))), /* @__PURE__ */ import_react33.default.createElement("div", {
    className: "container mx-auto h-full-8 px-6 my-10 content-center"
  }, children));
}
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-TYGIWLUE.js.map
