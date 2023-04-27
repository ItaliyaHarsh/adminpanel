import type { ActionArgs, LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, Link, useActionData, useSearchParams } from "@remix-run/react";
import * as React from "react";

import { createUserSession, getUserId } from "~/session.server";
import { verifyLogin } from "~/models/user.server";
import { safeRedirect, validateEmail } from "~/utils";

export async function loader({ request }: LoaderArgs) {
  const userId = await getUserId(request);
  if (userId) return redirect("/");
  return json({});
}

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const redirectTo = safeRedirect(formData.get("redirectTo"), "/");
  const remember = formData.get("remember");

  if (!validateEmail(email)) {
    return json(
      { errors: { email: "Email is invalid", password: null } },
      { status: 400 }
    );
  }

  if (typeof password !== "string" || password.length === 0) {
    return json(
      { errors: { email: null, password: "Password is required" } },
      { status: 400 }
    );
  }

  if (password.length < 8) {
    return json(
      { errors: { email: null, password: "Password is too short" } },
      { status: 400 }
    );
  }

  const user = await verifyLogin(email, password);

  if (!user) {
    return json(
      { errors: { email: "Invalid email or password", password: null } },
      { status: 400 }
    );
  }

  return createUserSession({
    request,
    userId: user.id,
    remember: remember === "on" ? true : false,
    redirectTo,
  });
}

const login = () => {
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/";
  const actionData = useActionData<typeof action>();
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (actionData?.errors?.email) {
      emailRef.current?.focus();
    } else if (actionData?.errors?.password) {
      passwordRef.current?.focus();
    }
  }, [actionData]);

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-indigo-600">
        <div className="w-96 p-6 shadow-purple-950 shadow-2xl bg-white rounded-md ">
          <h1 className="text-3xl block text-center font-semibold">
            <i className="fa-solid fa-user"></i> Login
          </h1>
          <hr className="mt-3" />
          <Form method="post">
            <div className="mt-3">
              <label htmlFor="email" className="block text-base mb-2">
                Email
              </label>
              <input
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-sm"
                placeholder="Enter Email"
                ref={emailRef}
                type="text"
                id="email"
                name="email"
              />
              {actionData?.errors?.email && (
                <div className="pt-1 text-red-700" id="email-error">
                  {actionData.errors.email}
                </div>
              )}
            </div>
            <div className="mt-3">
              <label htmlFor="password" className="block text-base mb-2">
                Password
              </label>
              <input
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-sm"
                ref={passwordRef}
                placeholder="Enter Password"
                type="password"
                id="password"
                name="password"
              />
              {actionData?.errors?.password && (
                <div className="pt-1 text-red-700" id="password-error">
                  {actionData.errors.password}
                </div>
              )}
            </div>
            <div className="flex justify-between my-3 items-center">
              <div>
                <input type="checkbox" className="p-20" />
                <label>Remember Me?</label>
              </div>
              <div>
                <a href="#" className="text-indigo-800 font-semibold">
                  Forget Password?
                </a>
              </div>
            </div>
            <div className="mt-5">
              <input type="hidden" name="redirectTo" value={redirectTo} />
              <button
                type="submit"
                className="text-center bg-indigo-800 text-white w-full py-1 rounded-md border-2 border-indigo-700 hover:bg-white hover:text-indigo-800 font-semibold active:shadow-[inset_1px_5px_50px_-15px_rgba(1,1,1,0.5)]"
              >
                Login
              </button>
            </div>
            <div className="mt-5 flex justify-end font-semibold">
              <span>
                I don't have acount?{" "}
                <Link to="/register" className="text-blue-900">
                  Register
                </Link>
              </span>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default login;
