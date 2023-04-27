import {
  Form,
  Link,
  Outlet,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-SOYSF6AU.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/components/Navbar.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Navbar = () => {
  const Home = () => {
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "w-full h-14 px-4 py-4 bg-purple-600 flex justify-between font-semibold", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", children: "LOGO" }, void 0, false, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 9,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 8,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "flex text-white", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "cursor-pointer px-3", onClick: Home, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/dashboard", children: "Home" }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 13,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 12,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "cursor-pointer px-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/dashboard/about", children: "About" }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 16,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 15,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "cursor-pointer px-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/dashboard/contact", children: "Contact" }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 19,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 18,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "cursor-pointer px-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", action: "/logout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", children: "Logout" }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 23,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 22,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 21,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 11,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Navbar.tsx",
    lineNumber: 7,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Navbar.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
};
var Navbar_default = Navbar;

// node_modules/react-icons/lib/esm/iconBase.js
var import_react3 = __toESM(require_react());

// node_modules/react-icons/lib/esm/iconContext.js
var import_react2 = __toESM(require_react());
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = import_react2.default.createContext && import_react2.default.createContext(DefaultContext);

// node_modules/react-icons/lib/esm/iconBase.js
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function Tree2Element(tree) {
  return tree && tree.map(function(node, i) {
    return import_react3.default.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  return function(props) {
    return import_react3.default.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function(conf) {
    var attr = props.attr, size = props.size, title = props.title, svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className)
      className = conf.className;
    if (props.className)
      className = (className ? className + " " : "") + props.className;
    return import_react3.default.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && import_react3.default.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? import_react3.default.createElement(IconContext.Consumer, null, function(conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// node_modules/react-icons/hi/index.esm.js
function HiHome(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" } }] })(props);
}
function HiMenu(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z", "clipRule": "evenodd" } }] })(props);
}

// node_modules/react-icons/fc/index.esm.js
function FcAbout(props) {
  return GenIcon({ "tag": "svg", "attr": { "version": "1", "viewBox": "0 0 48 48", "enableBackground": "new 0 0 48 48" }, "child": [{ "tag": "path", "attr": { "fill": "#2196F3", "d": "M37,40H11l-6,6V12c0-3.3,2.7-6,6-6h26c3.3,0,6,2.7,6,6v22C43,37.3,40.3,40,37,40z" } }, { "tag": "g", "attr": { "fill": "#fff" }, "child": [{ "tag": "rect", "attr": { "x": "22", "y": "20", "width": "4", "height": "11" } }, { "tag": "circle", "attr": { "cx": "24", "cy": "15", "r": "2" } }] }] })(props);
}

// node_modules/react-icons/cg/index.esm.js
function CgProfile(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "clipRule": "evenodd", "d": "M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z", "fill": "currentColor" } }, { "tag": "path", "attr": { "fillRule": "evenodd", "clipRule": "evenodd", "d": "M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z", "fill": "currentColor" } }] })(props);
}

// app/components/Sidebar.tsx
var import_react5 = __toESM(require_react());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var Sidebar = () => {
  const [open, setOpen] = (0, import_react5.useState)(false);
  const expand = () => {
    open ? setOpen(false) : setOpen(true);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    "div",
    {
      className: `min-h-full sidebar bg-indigo-950 duration-100 ${open ? "w-1/5" : "w-14"}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "m-3.5 flex justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          HiMenu,
          {
            size: 26,
            className: "cursor-pointer text-white",
            onClick: expand
          },
          void 0,
          false,
          {
            fileName: "app/components/Sidebar.tsx",
            lineNumber: 22,
            columnNumber: 11
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/Sidebar.tsx",
          lineNumber: 21,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: " py-2 mx-3.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/dashboard", className: "flex text-white", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HiHome, { size: 26, className: "" }, void 0, false, {
            fileName: "app/components/Sidebar.tsx",
            lineNumber: 31,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: `ml-2 ${!open ? "hidden" : ""}`, children: "Dashboard" }, void 0, false, {
            fileName: "app/components/Sidebar.tsx",
            lineNumber: 32,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Sidebar.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/components/Sidebar.tsx",
          lineNumber: 29,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: " py-2 mx-3.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/dashboard/about", className: "flex text-white", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FcAbout, { size: 26, className: " " }, void 0, false, {
            fileName: "app/components/Sidebar.tsx",
            lineNumber: 37,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: `ml-2 ${!open ? "hidden" : ""}`, children: "About" }, void 0, false, {
            fileName: "app/components/Sidebar.tsx",
            lineNumber: 38,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Sidebar.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/components/Sidebar.tsx",
          lineNumber: 35,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: " py-2 mx-3.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/dashboard/profile", className: "flex text-white", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CgProfile, { size: 26, className: " " }, void 0, false, {
            fileName: "app/components/Sidebar.tsx",
            lineNumber: 43,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: `ml-2 ${!open ? "hidden" : ""}`, children: "Profile" }, void 0, false, {
            fileName: "app/components/Sidebar.tsx",
            lineNumber: 44,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Sidebar.tsx",
          lineNumber: 42,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/components/Sidebar.tsx",
          lineNumber: 41,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/Sidebar.tsx",
      lineNumber: 16,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/Sidebar.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
};
var Sidebar_default = Sidebar;

// app/components/Layout.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function Layout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { className: "w-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Navbar_default, {}, void 0, false, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 9,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex gap-0 relative h-[91.5vh] w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Sidebar_default, {}, void 0, false, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 11,
        columnNumber: 11
      }, this),
      children
    ] }, void 0, true, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
var dashboard = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Outlet, {}, void 0, false, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 8,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 7,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
};
var dashboard_default = dashboard;
export {
  dashboard_default as default
};
//# sourceMappingURL=/build/routes/dashboard-TEEYY3RX.js.map
