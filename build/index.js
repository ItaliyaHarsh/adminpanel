var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// app/routes/__auth/image.tsx
var require_image = __commonJS({
  "app/routes/__auth/image.tsx"() {
    "use strict";
  }
});

// app/routes/dashboard/profile/update.tsx
var require_update = __commonJS({
  "app/routes/dashboard/profile/update.tsx"() {
    "use strict";
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 45,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 87,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_react2 = require("@remix-run/react");

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-3256OOI7.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  { rel: "stylesheet", href: tailwind_default }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => dashboard_default
});
var import_react6 = require("@remix-run/react");

// app/components/Navbar.tsx
var import_react3 = require("@remix-run/react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), Navbar = () => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { className: "w-full h-14 px-4 py-4 bg-purple-600 flex justify-between font-semibold", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "/", children: "LOGO" }, void 0, !1, {
    fileName: "app/components/Navbar.tsx",
    lineNumber: 9,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/components/Navbar.tsx",
    lineNumber: 8,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "flex text-white", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "cursor-pointer px-3", onClick: () => {
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "/dashboard", children: "Home" }, void 0, !1, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 13,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 12,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "cursor-pointer px-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "/dashboard/about", children: "About" }, void 0, !1, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 16,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 15,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "cursor-pointer px-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "/dashboard/contact", children: "Contact" }, void 0, !1, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 19,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 18,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "cursor-pointer px-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Form, { method: "post", action: "/logout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { type: "submit", children: "Logout" }, void 0, !1, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 23,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 22,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 21,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Navbar.tsx",
    lineNumber: 11,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Navbar.tsx",
  lineNumber: 7,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/Navbar.tsx",
  lineNumber: 6,
  columnNumber: 5
}, this), Navbar_default = Navbar;

// app/components/Sidebar.tsx
var import_react4 = require("@remix-run/react"), import_hi = require("react-icons/hi"), import_fc = require("react-icons/fc"), import_cg = require("react-icons/cg"), import_react5 = require("react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), Sidebar = () => {
  let [open, setOpen] = (0, import_react5.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    "div",
    {
      className: `min-h-full sidebar bg-indigo-950 duration-100 ${open ? "w-1/5" : "w-14"}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "m-3.5 flex justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          import_hi.HiMenu,
          {
            size: 26,
            className: "cursor-pointer text-white",
            onClick: () => {
              setOpen(!open);
            }
          },
          void 0,
          !1,
          {
            fileName: "app/components/Sidebar.tsx",
            lineNumber: 22,
            columnNumber: 11
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/Sidebar.tsx",
          lineNumber: 21,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: " py-2 mx-3.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Link, { to: "/dashboard", className: "flex text-white", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_hi.HiHome, { size: 26, className: "" }, void 0, !1, {
            fileName: "app/components/Sidebar.tsx",
            lineNumber: 31,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { className: `ml-2 ${open ? "" : "hidden"}`, children: "Dashboard" }, void 0, !1, {
            fileName: "app/components/Sidebar.tsx",
            lineNumber: 32,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Sidebar.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/components/Sidebar.tsx",
          lineNumber: 29,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: " py-2 mx-3.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Link, { to: "/dashboard/about", className: "flex text-white", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_fc.FcAbout, { size: 26, className: " " }, void 0, !1, {
            fileName: "app/components/Sidebar.tsx",
            lineNumber: 37,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { className: `ml-2 ${open ? "" : "hidden"}`, children: "About" }, void 0, !1, {
            fileName: "app/components/Sidebar.tsx",
            lineNumber: 38,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Sidebar.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/components/Sidebar.tsx",
          lineNumber: 35,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: " py-2 mx-3.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Link, { to: "/dashboard/profile", className: "flex text-white", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_cg.CgProfile, { size: 26, className: " " }, void 0, !1, {
            fileName: "app/components/Sidebar.tsx",
            lineNumber: 43,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { className: `ml-2 ${open ? "" : "hidden"}`, children: "Profile" }, void 0, !1, {
            fileName: "app/components/Sidebar.tsx",
            lineNumber: 44,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Sidebar.tsx",
          lineNumber: 42,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/components/Sidebar.tsx",
          lineNumber: 41,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Sidebar.tsx",
      lineNumber: 16,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/Sidebar.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}, Sidebar_default = Sidebar;

// app/components/Layout.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function Layout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("section", { className: "w-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Navbar_default, {}, void 0, !1, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 9,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex gap-0 relative h-[91.5vh] w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Sidebar_default, {}, void 0, !1, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 11,
        columnNumber: 11
      }, this),
      children
    ] }, void 0, !0, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), dashboard = () => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react6.Outlet, {}, void 0, !1, {
  fileName: "app/routes/dashboard.tsx",
  lineNumber: 8,
  columnNumber: 9
}, this) }, void 0, !1, {
  fileName: "app/routes/dashboard.tsx",
  lineNumber: 7,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/routes/dashboard.tsx",
  lineNumber: 6,
  columnNumber: 5
}, this), dashboard_default = dashboard;

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader
});
var import_react7 = require("@remix-run/react"), import_node3 = require("@remix-run/node");

// app/session.server.ts
var import_node2 = require("@remix-run/node"), import_tiny_invariant = __toESM(require("tiny-invariant"));

// app/models/user.server.ts
var import_bcryptjs = __toESM(require("bcryptjs"));

// app/db.server.ts
var import_client = require("@prisma/client"), prisma;
global.__db__ || (global.__db__ = new import_client.PrismaClient()), prisma = global.__db__, prisma.$connect();

// app/models/user.server.ts
async function getUserById(id) {
  return prisma.user.findFirst({ where: { id } });
}
async function getUserByEmail(email) {
  return prisma.user.findUnique({ where: { email } });
}
async function createUser(email, password, username, fullname, image) {
  let hashedPassword = await import_bcryptjs.default.hash(password, 10);
  return prisma.user.create({
    data: {
      email,
      username,
      fullname,
      image,
      password: {
        create: {
          hash: hashedPassword
        }
      }
    }
  });
}
async function verifyLogin(email, password) {
  let userWithPassword = await prisma.user.findUnique({
    where: { email },
    include: {
      password: !0
    }
  });
  if (!userWithPassword || !userWithPassword.password || !await import_bcryptjs.default.compare(
    password,
    userWithPassword.password.hash
  ))
    return null;
  let { password: _password, ...userWithoutPassword } = userWithPassword;
  return userWithoutPassword;
}

// app/session.server.ts
(0, import_tiny_invariant.default)(process.env.SESSION_SECRET, "SESSION_SECRET must be set");
var sessionStorage = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    name: "__session",
    httpOnly: !0,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET],
    secure: !1
  }
}), USER_SESSION_KEY = "userId";
async function getSession(request) {
  let cookie = await request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}
async function getUserId(request) {
  return await (await getSession(request)).get(USER_SESSION_KEY);
}
async function getUser(request) {
  let userId = await getUserId(request);
  if (userId === void 0)
    return null;
  let user = await getUserById(userId);
  if (user)
    return user;
  throw await logout(request);
}
async function createUserSession({
  request,
  userId,
  remember,
  redirectTo
}) {
  let session = await getSession(request);
  return session.set(USER_SESSION_KEY, userId), (0, import_node2.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session, {
        maxAge: remember ? 60 * 60 * 24 * 7 : void 0
      })
    }
  });
}
async function logout(request) {
  let session = await getSession(request);
  return (0, import_node2.redirect)("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session)
    }
  });
}

// app/routes/index.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
async function loader({ request }) {
  return await getUserId(request) ? (0, import_node3.redirect)("/dashboard") : (0, import_node3.json)({});
}
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex justify-center items-center h-screen bg-indigo-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "w-96 p-6 shadow-purple-950 shadow-2xl bg-white rounded-md ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Link, { to: "/login", children: " login" }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 17,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Link, { to: "/register", children: " register" }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 18,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Link, { to: "/dashboard", children: " dashboard" }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 19,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 16,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 15,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/routes/__auth/register.tsx
var register_exports = {};
__export(register_exports, {
  action: () => action,
  default: () => register_default,
  loader: () => loader2
});
var import_node4 = require("@remix-run/node"), import_react10 = require("@remix-run/react"), React = __toESM(require("react"));

// app/utils.ts
var import_react8 = require("@remix-run/react"), import_react9 = require("react"), DEFAULT_REDIRECT = "/";
function safeRedirect(to, defaultRedirect = DEFAULT_REDIRECT) {
  return !to || typeof to != "string" || !to.startsWith("/") || to.startsWith("//") ? defaultRedirect : to;
}
function validateEmail(email) {
  return typeof email == "string" && email.length > 3 && email.includes("@");
}

// app/routes/__auth/register.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
async function loader2({ request }) {
  return await getUserId(request) ? (0, import_node4.redirect)("/") : (0, import_node4.json)({});
}
async function action({ request }) {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password"), username = formData.get("username"), fullname = formData.get("fullname"), redirectTo = safeRedirect(formData.get("redirectTo"), "/");
  if (!validateEmail(email))
    return (0, import_node4.json)(
      {
        errors: {
          email: "Email is invalid",
          password: null,
          username: null,
          fullname: null
        }
      },
      { status: 400 }
    );
  if (validateEmail(email) && await getUserByEmail(email))
    return (0, import_node4.json)(
      {
        errors: {
          email: "Email is allready registered",
          password: null,
          username: null,
          fullname: null
        }
      },
      { status: 400 }
    );
  if (typeof username != "string" || username.length === 0)
    return (0, import_node4.json)(
      {
        errors: {
          email: null,
          password: null,
          username: "username is required",
          fullname: null
        }
      },
      { status: 400 }
    );
  if (typeof fullname != "string" || fullname.length === 0)
    return (0, import_node4.json)(
      {
        errors: {
          email: null,
          password: null,
          username: null,
          fullname: "Fullname is required"
        }
      },
      { status: 400 }
    );
  if (typeof password != "string" || password.length === 0)
    return (0, import_node4.json)(
      {
        errors: {
          email: null,
          password: "Password is required",
          username: null,
          fullname: null
        }
      },
      { status: 400 }
    );
  if (password.length < 8)
    return (0, import_node4.json)(
      {
        errors: {
          email: null,
          password: "Password is too short",
          username: null,
          fullname: null
        }
      },
      { status: 400 }
    );
  if (await getUserByEmail(email))
    return (0, import_node4.json)(
      {
        errors: {
          email: "A user already exists with this email",
          password: null,
          username: null,
          fullname: null
        }
      },
      { status: 400 }
    );
  let user = await createUser(email, password, username, fullname, "");
  return createUserSession({
    request,
    userId: user.id,
    remember: !1,
    redirectTo
  });
}
var register = () => {
  var _a, _b, _c, _d;
  let [searchParams] = (0, import_react10.useSearchParams)(), redirectTo = searchParams.get("redirectTo") ?? void 0, actionData = (0, import_react10.useActionData)(), emailRef = React.useRef(null), passwordRef = React.useRef(null), usernameRef = React.useRef(null), fullnameRef = React.useRef(null);
  return React.useEffect(() => {
    var _a2, _b2, _c2, _d2, _e, _f, _g, _h;
    (_a2 = actionData == null ? void 0 : actionData.errors) != null && _a2.email ? (_b2 = emailRef.current) == null || _b2.focus() : (_c2 = actionData == null ? void 0 : actionData.errors) != null && _c2.password ? (_d2 = passwordRef.current) == null || _d2.focus() : (_e = actionData == null ? void 0 : actionData.errors) != null && _e.username ? (_f = usernameRef.current) == null || _f.focus() : (_g = actionData == null ? void 0 : actionData.errors) != null && _g.fullname && ((_h = fullnameRef.current) == null || _h.focus());
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex justify-center items-center h-screen bg-indigo-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "w-[480px] p-6 shadow-purple-950 shadow-2xl bg-white rounded-md ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { className: "text-3xl block text-center font-semibold", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("i", { className: "fa-solid fa-user" }, void 0, !1, {
        fileName: "app/routes/__auth/register.tsx",
        lineNumber: 205,
        columnNumber: 13
      }, this),
      " Register"
    ] }, void 0, !0, {
      fileName: "app/routes/__auth/register.tsx",
      lineNumber: 204,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("hr", { className: "mt-3" }, void 0, !1, {
      fileName: "app/routes/__auth/register.tsx",
      lineNumber: 207,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react10.Form, { method: "post", encType: "multipart/form-data", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mt-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("label", { htmlFor: "email", className: "block text-base mb-2", children: "Email" }, void 0, !1, {
          fileName: "app/routes/__auth/register.tsx",
          lineNumber: 210,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
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
          !1,
          {
            fileName: "app/routes/__auth/register.tsx",
            lineNumber: 213,
            columnNumber: 15
          },
          this
        ),
        ((_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.email) && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "pt-1 text-red-700", id: "email-error", children: actionData.errors.email }, void 0, !1, {
          fileName: "app/routes/__auth/register.tsx",
          lineNumber: 223,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__auth/register.tsx",
        lineNumber: 209,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mt-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("label", { htmlFor: "username", className: "block text-base mb-2", children: "UserName" }, void 0, !1, {
          fileName: "app/routes/__auth/register.tsx",
          lineNumber: 229,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
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
          !1,
          {
            fileName: "app/routes/__auth/register.tsx",
            lineNumber: 232,
            columnNumber: 15
          },
          this
        ),
        ((_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.username) && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "pt-1 text-red-700", id: "email-error", children: actionData.errors.username }, void 0, !1, {
          fileName: "app/routes/__auth/register.tsx",
          lineNumber: 242,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__auth/register.tsx",
        lineNumber: 228,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mt-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("label", { htmlFor: "fullname", className: "block text-base mb-2", children: "FullName" }, void 0, !1, {
          fileName: "app/routes/__auth/register.tsx",
          lineNumber: 248,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
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
          !1,
          {
            fileName: "app/routes/__auth/register.tsx",
            lineNumber: 251,
            columnNumber: 15
          },
          this
        ),
        ((_c = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c.fullname) && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "pt-1 text-red-700", id: "email-error", children: actionData.errors.fullname }, void 0, !1, {
          fileName: "app/routes/__auth/register.tsx",
          lineNumber: 261,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__auth/register.tsx",
        lineNumber: 247,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mt-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("label", { htmlFor: "password", className: "block text-base mb-2", children: "Password" }, void 0, !1, {
          fileName: "app/routes/__auth/register.tsx",
          lineNumber: 267,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
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
          !1,
          {
            fileName: "app/routes/__auth/register.tsx",
            lineNumber: 270,
            columnNumber: 15
          },
          this
        ),
        ((_d = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _d.password) && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "pt-1 text-red-700", id: "password-error", children: actionData.errors.password }, void 0, !1, {
          fileName: "app/routes/__auth/register.tsx",
          lineNumber: 279,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__auth/register.tsx",
        lineNumber: 266,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mt-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("label", { htmlFor: "profilepic", children: "Profile picture **" }, void 0, !1, {
          fileName: "app/routes/__auth/register.tsx",
          lineNumber: 285,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          "input",
          {
            type: "file",
            className: `w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-sm block text-slate-500\r
                file:mr-4 file:py-2 file:px-4\r
                file:rounded-full file:border-0\r
                file:text-sm file:font-semibold\r
                file:bg-indigo-100 file:text-indigo-800\r
                cursor-pointer file:cursor-pointer file:hover:bg-indigo-200 file:hover:text-indigo-900`,
            placeholder: "please choose profile picture",
            id: "profilepic",
            name: "profilepic"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/__auth/register.tsx",
            lineNumber: 286,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/__auth/register.tsx",
        lineNumber: 284,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex justify-between my-3 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { type: "checkbox", className: "p-20" }, void 0, !1, {
            fileName: "app/routes/__auth/register.tsx",
            lineNumber: 301,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("label", { children: "Remember Me?" }, void 0, !1, {
            fileName: "app/routes/__auth/register.tsx",
            lineNumber: 302,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/__auth/register.tsx",
          lineNumber: 300,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("a", { href: "#", className: "text-indigo-800 font-semibold", children: "Forget Password?" }, void 0, !1, {
          fileName: "app/routes/__auth/register.tsx",
          lineNumber: 305,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/__auth/register.tsx",
          lineNumber: 304,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__auth/register.tsx",
        lineNumber: 299,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mt-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { type: "hidden", name: "redirectTo", value: redirectTo }, void 0, !1, {
          fileName: "app/routes/__auth/register.tsx",
          lineNumber: 311,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "text-center bg-indigo-800 text-white w-full py-1 rounded-md border-2 border-indigo-700 hover:bg-white hover:text-indigo-800 font-semibold active:shadow-[inset_1px_5px_50px_-15px_rgba(1,1,1,0.5)]",
            children: "Register"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/__auth/register.tsx",
            lineNumber: 312,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/__auth/register.tsx",
        lineNumber: 310,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mt-5 flex justify-end font-semibold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { children: [
        "I already have acount!",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react10.Link, { to: "/login", className: "text-blue-900", children: "Login" }, void 0, !1, {
          fileName: "app/routes/__auth/register.tsx",
          lineNumber: 322,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__auth/register.tsx",
        lineNumber: 320,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/__auth/register.tsx",
        lineNumber: 319,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__auth/register.tsx",
      lineNumber: 208,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__auth/register.tsx",
    lineNumber: 203,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/__auth/register.tsx",
    lineNumber: 202,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/__auth/register.tsx",
    lineNumber: 201,
    columnNumber: 5
  }, this);
}, register_default = register;

// app/routes/__auth/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action2,
  loader: () => loader3
});
var import_node5 = require("@remix-run/node");
async function action2({ request }) {
  return logout(request);
}
async function loader3() {
  return (0, import_node5.redirect)("/login");
}

// server-entry-module:@remix-run/dev/server-build
var route5 = __toESM(require_image());

// app/routes/__auth/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action3,
  default: () => login_default,
  loader: () => loader4
});
var import_node6 = require("@remix-run/node"), import_react11 = require("@remix-run/react"), React2 = __toESM(require("react"));
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
async function loader4({ request }) {
  return await getUserId(request) ? (0, import_node6.redirect)("/") : (0, import_node6.json)({});
}
async function action3({ request }) {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password"), redirectTo = safeRedirect(formData.get("redirectTo"), "/"), remember = formData.get("remember");
  if (!validateEmail(email))
    return (0, import_node6.json)(
      { errors: { email: "Email is invalid", password: null } },
      { status: 400 }
    );
  if (typeof password != "string" || password.length === 0)
    return (0, import_node6.json)(
      { errors: { email: null, password: "Password is required" } },
      { status: 400 }
    );
  if (password.length < 8)
    return (0, import_node6.json)(
      { errors: { email: null, password: "Password is too short" } },
      { status: 400 }
    );
  let user = await verifyLogin(email, password);
  return user ? createUserSession({
    request,
    userId: user.id,
    remember: remember === "on",
    redirectTo
  }) : (0, import_node6.json)(
    { errors: { email: "Invalid email or password", password: null } },
    { status: 400 }
  );
}
var login = () => {
  var _a, _b;
  let [searchParams] = (0, import_react11.useSearchParams)(), redirectTo = searchParams.get("redirectTo") || "/", actionData = (0, import_react11.useActionData)(), emailRef = React2.useRef(null), passwordRef = React2.useRef(null);
  return React2.useEffect(() => {
    var _a2, _b2, _c, _d;
    (_a2 = actionData == null ? void 0 : actionData.errors) != null && _a2.email ? (_b2 = emailRef.current) == null || _b2.focus() : (_c = actionData == null ? void 0 : actionData.errors) != null && _c.password && ((_d = passwordRef.current) == null || _d.focus());
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex justify-center items-center h-screen bg-indigo-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "w-96 p-6 shadow-purple-950 shadow-2xl bg-white rounded-md ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h1", { className: "text-3xl block text-center font-semibold", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("i", { className: "fa-solid fa-user" }, void 0, !1, {
        fileName: "app/routes/__auth/login.tsx",
        lineNumber: 81,
        columnNumber: 13
      }, this),
      " Login"
    ] }, void 0, !0, {
      fileName: "app/routes/__auth/login.tsx",
      lineNumber: 80,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("hr", { className: "mt-3" }, void 0, !1, {
      fileName: "app/routes/__auth/login.tsx",
      lineNumber: 83,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react11.Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mt-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { htmlFor: "email", className: "block text-base mb-2", children: "Email" }, void 0, !1, {
          fileName: "app/routes/__auth/login.tsx",
          lineNumber: 86,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
          !1,
          {
            fileName: "app/routes/__auth/login.tsx",
            lineNumber: 89,
            columnNumber: 15
          },
          this
        ),
        ((_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.email) && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "pt-1 text-red-700", id: "email-error", children: actionData.errors.email }, void 0, !1, {
          fileName: "app/routes/__auth/login.tsx",
          lineNumber: 98,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__auth/login.tsx",
        lineNumber: 85,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mt-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { htmlFor: "password", className: "block text-base mb-2", children: "Password" }, void 0, !1, {
          fileName: "app/routes/__auth/login.tsx",
          lineNumber: 104,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
          !1,
          {
            fileName: "app/routes/__auth/login.tsx",
            lineNumber: 107,
            columnNumber: 15
          },
          this
        ),
        ((_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.password) && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "pt-1 text-red-700", id: "password-error", children: actionData.errors.password }, void 0, !1, {
          fileName: "app/routes/__auth/login.tsx",
          lineNumber: 116,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__auth/login.tsx",
        lineNumber: 103,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex justify-between my-3 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("input", { type: "checkbox", className: "p-20" }, void 0, !1, {
            fileName: "app/routes/__auth/login.tsx",
            lineNumber: 123,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { children: "Remember Me?" }, void 0, !1, {
            fileName: "app/routes/__auth/login.tsx",
            lineNumber: 124,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/__auth/login.tsx",
          lineNumber: 122,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("a", { href: "#", className: "text-indigo-800 font-semibold", children: "Forget Password?" }, void 0, !1, {
          fileName: "app/routes/__auth/login.tsx",
          lineNumber: 127,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/__auth/login.tsx",
          lineNumber: 126,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__auth/login.tsx",
        lineNumber: 121,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mt-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("input", { type: "hidden", name: "redirectTo", value: redirectTo }, void 0, !1, {
          fileName: "app/routes/__auth/login.tsx",
          lineNumber: 133,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "text-center bg-indigo-800 text-white w-full py-1 rounded-md border-2 border-indigo-700 hover:bg-white hover:text-indigo-800 font-semibold active:shadow-[inset_1px_5px_50px_-15px_rgba(1,1,1,0.5)]",
            children: "Login"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/__auth/login.tsx",
            lineNumber: 134,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/__auth/login.tsx",
        lineNumber: 132,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mt-5 flex justify-end font-semibold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { children: [
        "I don't have acount?",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react11.Link, { to: "/register", className: "text-blue-900", children: "Register" }, void 0, !1, {
          fileName: "app/routes/__auth/login.tsx",
          lineNumber: 144,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__auth/login.tsx",
        lineNumber: 142,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/__auth/login.tsx",
        lineNumber: 141,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__auth/login.tsx",
      lineNumber: 84,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__auth/login.tsx",
    lineNumber: 79,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/__auth/login.tsx",
    lineNumber: 78,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/__auth/login.tsx",
    lineNumber: 77,
    columnNumber: 5
  }, this);
}, login_default = login;

// server-entry-module:@remix-run/dev/server-build
var route7 = __toESM(require_update());

// app/routes/dashboard/profile/index.tsx
var profile_exports = {};
__export(profile_exports, {
  default: () => profile_default
});
var import_react12 = require("@remix-run/react"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), index = () => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "p-4 flex bg-indigo-300 w-full", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "m-2 border-2 rounded-2xl h-72 w-80 bg-indigo-200", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      "img",
      {
        className: "rounded-2xl w-32 h-32 bg-gray-400 mt-12 mx-auto shadow-2xl",
        src: "./../../images/photo-1503023345310-bd7c1de61c7d.jpg"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/dashboard/profile/index.tsx",
        lineNumber: 19,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h3", { className: "mt-10 text-2xl text-center font-semibold " }, void 0, !1, {
      fileName: "app/routes/dashboard/profile/index.tsx",
      lineNumber: 24,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard/profile/index.tsx",
    lineNumber: 18,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "m-2 border-2 rounded-2xl h-72 w-[700px] bg-indigo-200", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mt-10 ml-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h2", { className: "font-semibold text-[24px] mb-5" }, void 0, !1, {
        fileName: "app/routes/dashboard/profile/index.tsx",
        lineNumber: 30,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h2", { className: "font-semibold text-[24px] mb-5" }, void 0, !1, {
        fileName: "app/routes/dashboard/profile/index.tsx",
        lineNumber: 33,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard/profile/index.tsx",
      lineNumber: 29,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mt-24 ml-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("button", { className: "text-center bg-indigo-800 text-white px-5 py-1 rounded-md border-2 border-indigo-700 hover:bg-white hover:text-indigo-800 font-semibold active:shadow-[inset_1px_5px_50px_-15px_rgba(1,1,1,0.5)]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react12.Link, { to: "update", children: "Update Profile" }, void 0, !1, {
      fileName: "app/routes/dashboard/profile/index.tsx",
      lineNumber: 39,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard/profile/index.tsx",
      lineNumber: 38,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard/profile/index.tsx",
      lineNumber: 37,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard/profile/index.tsx",
    lineNumber: 28,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/dashboard/profile/index.tsx",
  lineNumber: 17,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/routes/dashboard/profile/index.tsx",
  lineNumber: 16,
  columnNumber: 5
}, this), profile_default = index;

// app/routes/dashboard/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => about_default
});
var import_react13 = require("@remix-run/react"), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), about = () => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "p-3 w-full", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h1", { className: "text-blue-900 text-5xl", children: "this is About" }, void 0, !1, {
    fileName: "app/routes/dashboard/about.tsx",
    lineNumber: 17,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react13.Link, { to: "/login", children: "Login here" }, void 0, !1, {
    fileName: "app/routes/dashboard/about.tsx",
    lineNumber: 18,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/dashboard/about.tsx",
  lineNumber: 16,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/routes/dashboard/about.tsx",
  lineNumber: 15,
  columnNumber: 5
}, this), about_default = about;

// app/routes/dashboard/index.tsx
var dashboard_exports2 = {};
__export(dashboard_exports2, {
  default: () => Index2,
  loader: () => loader5
});
var import_node7 = require("@remix-run/node"), import_react14 = require("@remix-run/react");
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
async function loader5({ request }) {
  let user = await getUser(request);
  return user ? (0, import_node7.json)({ user }) : (0, import_node7.redirect)("/login");
}
function Index2() {
  var _a, _b, _c, _d;
  let data = (0, import_react14.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_jsx_dev_runtime12.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "p-3 w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h1", { className: "text-blue-900 text-5xl", children: "this is Dashboard" }, void 0, !1, {
      fileName: "app/routes/dashboard/index.tsx",
      lineNumber: 19,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react14.Link, { to: "/login", children: "Login here" }, void 0, !1, {
      fileName: "app/routes/dashboard/index.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "cursor-pointer", children: "GetUser" }, void 0, !1, {
      fileName: "app/routes/dashboard/index.tsx",
      lineNumber: 21,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: (_a = data.user) == null ? void 0 : _a.id }, void 0, !1, {
      fileName: "app/routes/dashboard/index.tsx",
      lineNumber: 23,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: (_b = data.user) == null ? void 0 : _b.username }, void 0, !1, {
      fileName: "app/routes/dashboard/index.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: (_c = data.user) == null ? void 0 : _c.fullname }, void 0, !1, {
      fileName: "app/routes/dashboard/index.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: (_d = data.user) == null ? void 0 : _d.email }, void 0, !1, {
      fileName: "app/routes/dashboard/index.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard/index.tsx",
    lineNumber: 18,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/dashboard/index.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "239d07e0", entry: { module: "/build/entry.client-HWL5RMYC.js", imports: ["/build/_shared/chunk-SOYSF6AU.js", "/build/_shared/chunk-5KL4PAQL.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-3AQ2ACJQ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__auth/image": { id: "routes/__auth/image", parentId: "root", path: "image", index: void 0, caseSensitive: void 0, module: "/build/routes/__auth/image-MZP653CN.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__auth/login": { id: "routes/__auth/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/__auth/login-X7GUSTVP.js", imports: ["/build/_shared/chunk-M2ND3YFM.js", "/build/_shared/chunk-GLWAIFE6.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__auth/logout": { id: "routes/__auth/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/__auth/logout-SMRM34DS.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__auth/register": { id: "routes/__auth/register", parentId: "root", path: "register", index: void 0, caseSensitive: void 0, module: "/build/routes/__auth/register-53NTL7EM.js", imports: ["/build/_shared/chunk-M2ND3YFM.js", "/build/_shared/chunk-GLWAIFE6.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard": { id: "routes/dashboard", parentId: "root", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard-TEEYY3RX.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/about": { id: "routes/dashboard/about", parentId: "routes/dashboard", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard/about-A5BVBR5F.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/index": { id: "routes/dashboard/index", parentId: "routes/dashboard", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/dashboard/index-CNWFLTJB.js", imports: ["/build/_shared/chunk-GLWAIFE6.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/profile/index": { id: "routes/dashboard/profile/index", parentId: "routes/dashboard", path: "profile", index: !0, caseSensitive: void 0, module: "/build/routes/dashboard/profile/index-B4Y7XCIW.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/profile/update": { id: "routes/dashboard/profile/update", parentId: "routes/dashboard", path: "profile/update", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard/profile/update-ML5VMTRB.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-CAUFLO4A.js", imports: ["/build/_shared/chunk-GLWAIFE6.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-239D07E0.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !0, unstable_vanillaExtract: !1, v2_errorBoundary: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/dashboard": {
    id: "routes/dashboard",
    parentId: "root",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/__auth/register": {
    id: "routes/__auth/register",
    parentId: "root",
    path: "register",
    index: void 0,
    caseSensitive: void 0,
    module: register_exports
  },
  "routes/__auth/logout": {
    id: "routes/__auth/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/__auth/image": {
    id: "routes/__auth/image",
    parentId: "root",
    path: "image",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  },
  "routes/__auth/login": {
    id: "routes/__auth/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/dashboard/profile/update": {
    id: "routes/dashboard/profile/update",
    parentId: "routes/dashboard",
    path: "profile/update",
    index: void 0,
    caseSensitive: void 0,
    module: route7
  },
  "routes/dashboard/profile/index": {
    id: "routes/dashboard/profile/index",
    parentId: "routes/dashboard",
    path: "profile",
    index: !0,
    caseSensitive: void 0,
    module: profile_exports
  },
  "routes/dashboard/about": {
    id: "routes/dashboard/about",
    parentId: "routes/dashboard",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/dashboard/index": {
    id: "routes/dashboard/index",
    parentId: "routes/dashboard",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: dashboard_exports2
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
