import {
  require_session
} from "/build/_shared/chunk-GLWAIFE6.js";
import {
  Link,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-SOYSF6AU.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/dashboard/index.tsx
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Index() {
  var _a, _b, _c, _d;
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-3 w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-blue-900 text-5xl", children: "this is Dashboard" }, void 0, false, {
      fileName: "app/routes/dashboard/index.tsx",
      lineNumber: 19,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/login", children: "Login here" }, void 0, false, {
      fileName: "app/routes/dashboard/index.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "cursor-pointer", children: "GetUser" }, void 0, false, {
      fileName: "app/routes/dashboard/index.tsx",
      lineNumber: 21,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: (_a = data.user) == null ? void 0 : _a.id }, void 0, false, {
      fileName: "app/routes/dashboard/index.tsx",
      lineNumber: 23,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: (_b = data.user) == null ? void 0 : _b.username }, void 0, false, {
      fileName: "app/routes/dashboard/index.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: (_c = data.user) == null ? void 0 : _c.fullname }, void 0, false, {
      fileName: "app/routes/dashboard/index.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: (_d = data.user) == null ? void 0 : _d.email }, void 0, false, {
      fileName: "app/routes/dashboard/index.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard/index.tsx",
    lineNumber: 18,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/dashboard/index.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/dashboard/index-CNWFLTJB.js.map
