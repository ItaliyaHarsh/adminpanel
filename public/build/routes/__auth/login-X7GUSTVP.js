import {
  require_user
} from "/build/_shared/chunk-M2ND3YFM.js";
import {
  require_session
} from "/build/_shared/chunk-GLWAIFE6.js";
import {
  Form,
  Link,
  require_jsx_dev_runtime,
  require_react,
  useActionData,
  useSearchParams
} from "/build/_shared/chunk-SOYSF6AU.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/__auth/login.tsx
var React = __toESM(require_react());
var import_session = __toESM(require_session());
var import_user = __toESM(require_user());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var login = () => {
  var _a, _b;
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/";
  const actionData = useActionData();
  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);
  React.useEffect(() => {
    var _a2, _b2, _c, _d;
    if ((_a2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a2.email) {
      (_b2 = emailRef.current) == null ? void 0 : _b2.focus();
    } else if ((_c = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c.password) {
      (_d = passwordRef.current) == null ? void 0 : _d.focus();
    }
  }, [actionData]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center items-center h-screen bg-indigo-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-96 p-6 shadow-purple-950 shadow-2xl bg-white rounded-md ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl block text-center font-semibold", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "fa-solid fa-user" }, void 0, false, {
        fileName: "app/routes/__auth/login.tsx",
        lineNumber: 81,
        columnNumber: 13
      }, this),
      " Login"
    ] }, void 0, true, {
      fileName: "app/routes/__auth/login.tsx",
      lineNumber: 80,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", { className: "mt-3" }, void 0, false, {
      fileName: "app/routes/__auth/login.tsx",
      lineNumber: 83,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", className: "block text-base mb-2", children: "Email" }, void 0, false, {
          fileName: "app/routes/__auth/login.tsx",
          lineNumber: 86,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            className: "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-sm",
            placeholder: "Enter Email",
            ref: emailRef,
            type: "text",
            id: "email",
            name: "email"
          },
          void 0,
          false,
          {
            fileName: "app/routes/__auth/login.tsx",
            lineNumber: 89,
            columnNumber: 15
          },
          this
        ),
        ((_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.email) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-1 text-red-700", id: "email-error", children: actionData.errors.email }, void 0, false, {
          fileName: "app/routes/__auth/login.tsx",
          lineNumber: 98,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/__auth/login.tsx",
        lineNumber: 85,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "password", className: "block text-base mb-2", children: "Password" }, void 0, false, {
          fileName: "app/routes/__auth/login.tsx",
          lineNumber: 104,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            className: "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-sm",
            ref: passwordRef,
            placeholder: "Enter Password",
            type: "password",
            id: "password",
            name: "password"
          },
          void 0,
          false,
          {
            fileName: "app/routes/__auth/login.tsx",
            lineNumber: 107,
            columnNumber: 15
          },
          this
        ),
        ((_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.password) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-1 text-red-700", id: "password-error", children: actionData.errors.password }, void 0, false, {
          fileName: "app/routes/__auth/login.tsx",
          lineNumber: 116,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/__auth/login.tsx",
        lineNumber: 103,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between my-3 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", className: "p-20" }, void 0, false, {
            fileName: "app/routes/__auth/login.tsx",
            lineNumber: 123,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: "Remember Me?" }, void 0, false, {
            fileName: "app/routes/__auth/login.tsx",
            lineNumber: 124,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/__auth/login.tsx",
          lineNumber: 122,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", className: "text-indigo-800 font-semibold", children: "Forget Password?" }, void 0, false, {
          fileName: "app/routes/__auth/login.tsx",
          lineNumber: 127,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/__auth/login.tsx",
          lineNumber: 126,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/__auth/login.tsx",
        lineNumber: 121,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "redirectTo", value: redirectTo }, void 0, false, {
          fileName: "app/routes/__auth/login.tsx",
          lineNumber: 133,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "text-center bg-indigo-800 text-white w-full py-1 rounded-md border-2 border-indigo-700 hover:bg-white hover:text-indigo-800 font-semibold active:shadow-[inset_1px_5px_50px_-15px_rgba(1,1,1,0.5)]",
            children: "Login"
          },
          void 0,
          false,
          {
            fileName: "app/routes/__auth/login.tsx",
            lineNumber: 134,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/__auth/login.tsx",
        lineNumber: 132,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-5 flex justify-end font-semibold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
        "I don't have acount?",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/register", className: "text-blue-900", children: "Register" }, void 0, false, {
          fileName: "app/routes/__auth/login.tsx",
          lineNumber: 144,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/__auth/login.tsx",
        lineNumber: 142,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/__auth/login.tsx",
        lineNumber: 141,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/__auth/login.tsx",
      lineNumber: 84,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/__auth/login.tsx",
    lineNumber: 79,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/__auth/login.tsx",
    lineNumber: 78,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/__auth/login.tsx",
    lineNumber: 77,
    columnNumber: 5
  }, this);
};
var login_default = login;
export {
  login_default as default
};
//# sourceMappingURL=/build/routes/__auth/login-X7GUSTVP.js.map
