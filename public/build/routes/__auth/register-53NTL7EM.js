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

// app/routes/__auth/register.tsx
var React = __toESM(require_react());
var import_session = __toESM(require_session());
var import_user = __toESM(require_user());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var register = () => {
  var _a, _b, _c, _d, _e;
  const [searchParams] = useSearchParams();
  const redirectTo = (_a = searchParams.get("redirectTo")) != null ? _a : void 0;
  const actionData = useActionData();
  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);
  const usernameRef = React.useRef(null);
  const fullnameRef = React.useRef(null);
  React.useEffect(() => {
    var _a2, _b2, _c2, _d2, _e2, _f, _g, _h;
    if ((_a2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a2.email) {
      (_b2 = emailRef.current) == null ? void 0 : _b2.focus();
    } else if ((_c2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c2.password) {
      (_d2 = passwordRef.current) == null ? void 0 : _d2.focus();
    } else if ((_e2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _e2.username) {
      (_f = usernameRef.current) == null ? void 0 : _f.focus();
    } else if ((_g = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _g.fullname) {
      (_h = fullnameRef.current) == null ? void 0 : _h.focus();
    }
  }, [actionData]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center items-center h-screen bg-indigo-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-[480px] p-6 shadow-purple-950 shadow-2xl bg-white rounded-md ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl block text-center font-semibold", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "fa-solid fa-user" }, void 0, false, {
        fileName: "app/routes/__auth/register.tsx",
        lineNumber: 205,
        columnNumber: 13
      }, this),
      " Register"
    ] }, void 0, true, {
      fileName: "app/routes/__auth/register.tsx",
      lineNumber: 204,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", { className: "mt-3" }, void 0, false, {
      fileName: "app/routes/__auth/register.tsx",
      lineNumber: 207,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", encType: "multipart/form-data", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", className: "block text-base mb-2", children: "Email" }, void 0, false, {
          fileName: "app/routes/__auth/register.tsx",
          lineNumber: 210,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            className: "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-sm",
            placeholder: "Enter Email",
            ref: emailRef,
            type: "email",
            id: "email",
            name: "email"
          },
          void 0,
          false,
          {
            fileName: "app/routes/__auth/register.tsx",
            lineNumber: 213,
            columnNumber: 15
          },
          this
        ),
        ((_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.email) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-1 text-red-700", id: "email-error", children: actionData.errors.email }, void 0, false, {
          fileName: "app/routes/__auth/register.tsx",
          lineNumber: 223,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/__auth/register.tsx",
        lineNumber: 209,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "username", className: "block text-base mb-2", children: "UserName" }, void 0, false, {
          fileName: "app/routes/__auth/register.tsx",
          lineNumber: 229,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            className: "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-sm",
            placeholder: "Enter UserName",
            ref: usernameRef,
            type: "text",
            id: "username",
            name: "username"
          },
          void 0,
          false,
          {
            fileName: "app/routes/__auth/register.tsx",
            lineNumber: 232,
            columnNumber: 15
          },
          this
        ),
        ((_c = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c.username) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-1 text-red-700", id: "email-error", children: actionData.errors.username }, void 0, false, {
          fileName: "app/routes/__auth/register.tsx",
          lineNumber: 242,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/__auth/register.tsx",
        lineNumber: 228,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "fullname", className: "block text-base mb-2", children: "FullName" }, void 0, false, {
          fileName: "app/routes/__auth/register.tsx",
          lineNumber: 248,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            className: "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-sm",
            placeholder: "Enter FullName",
            ref: fullnameRef,
            type: "text",
            id: "fullname",
            name: "fullname"
          },
          void 0,
          false,
          {
            fileName: "app/routes/__auth/register.tsx",
            lineNumber: 251,
            columnNumber: 15
          },
          this
        ),
        ((_d = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _d.fullname) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-1 text-red-700", id: "email-error", children: actionData.errors.fullname }, void 0, false, {
          fileName: "app/routes/__auth/register.tsx",
          lineNumber: 261,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/__auth/register.tsx",
        lineNumber: 247,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "password", className: "block text-base mb-2", children: "Password" }, void 0, false, {
          fileName: "app/routes/__auth/register.tsx",
          lineNumber: 267,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            className: "border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-sm",
            placeholder: "Enter Password",
            ref: passwordRef,
            type: "password",
            id: "password",
            name: "password"
          },
          void 0,
          false,
          {
            fileName: "app/routes/__auth/register.tsx",
            lineNumber: 270,
            columnNumber: 15
          },
          this
        ),
        ((_e = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _e.password) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-1 text-red-700", id: "password-error", children: actionData.errors.password }, void 0, false, {
          fileName: "app/routes/__auth/register.tsx",
          lineNumber: 279,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/__auth/register.tsx",
        lineNumber: 266,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "profilepic", children: "Profile picture **" }, void 0, false, {
          fileName: "app/routes/__auth/register.tsx",
          lineNumber: 285,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            type: "file",
            className: "w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-sm block text-slate-500\r\n                file:mr-4 file:py-2 file:px-4\r\n                file:rounded-full file:border-0\r\n                file:text-sm file:font-semibold\r\n                file:bg-indigo-100 file:text-indigo-800\r\n                cursor-pointer file:cursor-pointer file:hover:bg-indigo-200 file:hover:text-indigo-900",
            placeholder: "please choose profile picture",
            id: "profilepic",
            name: "profilepic"
          },
          void 0,
          false,
          {
            fileName: "app/routes/__auth/register.tsx",
            lineNumber: 286,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/__auth/register.tsx",
        lineNumber: 284,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between my-3 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", className: "p-20" }, void 0, false, {
            fileName: "app/routes/__auth/register.tsx",
            lineNumber: 301,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: "Remember Me?" }, void 0, false, {
            fileName: "app/routes/__auth/register.tsx",
            lineNumber: 302,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/__auth/register.tsx",
          lineNumber: 300,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", className: "text-indigo-800 font-semibold", children: "Forget Password?" }, void 0, false, {
          fileName: "app/routes/__auth/register.tsx",
          lineNumber: 305,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/__auth/register.tsx",
          lineNumber: 304,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/__auth/register.tsx",
        lineNumber: 299,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "redirectTo", value: redirectTo }, void 0, false, {
          fileName: "app/routes/__auth/register.tsx",
          lineNumber: 311,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "text-center bg-indigo-800 text-white w-full py-1 rounded-md border-2 border-indigo-700 hover:bg-white hover:text-indigo-800 font-semibold active:shadow-[inset_1px_5px_50px_-15px_rgba(1,1,1,0.5)]",
            children: "Register"
          },
          void 0,
          false,
          {
            fileName: "app/routes/__auth/register.tsx",
            lineNumber: 312,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/__auth/register.tsx",
        lineNumber: 310,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-5 flex justify-end font-semibold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
        "I already have acount!",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/login", className: "text-blue-900", children: "Login" }, void 0, false, {
          fileName: "app/routes/__auth/register.tsx",
          lineNumber: 322,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/__auth/register.tsx",
        lineNumber: 320,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/__auth/register.tsx",
        lineNumber: 319,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/__auth/register.tsx",
      lineNumber: 208,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/__auth/register.tsx",
    lineNumber: 203,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/__auth/register.tsx",
    lineNumber: 202,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/__auth/register.tsx",
    lineNumber: 201,
    columnNumber: 5
  }, this);
};
var register_default = register;
export {
  register_default as default
};
//# sourceMappingURL=/build/routes/__auth/register-53NTL7EM.js.map
