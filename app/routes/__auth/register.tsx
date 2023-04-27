import type { ActionArgs, LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { prisma } from "~/db.server";
import {
  NodeOnDiskFile,
  json,
  redirect,
  unstable_composeUploadHandlers,
  unstable_createFileUploadHandler,
  unstable_createMemoryUploadHandler,
  unstable_parseMultipartFormData,
} from "@remix-run/node";
import { Form, Link, useActionData, useSearchParams } from "@remix-run/react";
import * as React from "react";

import { getUserId, createUserSession } from "~/session.server";

import { createUser, getUserByEmail } from "~/models/user.server";
import { safeRedirect, validateEmail } from "~/utils";
import path from "path";

export async function loader({ request }: LoaderArgs) {
  const userId = await getUserId(request);
  if (userId) return redirect("/");
  return json({});
}

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  //   const uploadHandler = unstable_composeUploadHandlers(
  //     unstable_createFileUploadHandler({
  //       maxPartSize: 5_000_000,
  //       file: ({ filename }) => "upload-" + Date.now() + path.extname(filename),
  //       directory: "public/images",
  //     }),
  //     // parse everything else into memory
  //     unstable_createMemoryUploadHandler()
  //   );
  //   const formData = await unstable_parseMultipartFormData(
  //     request,
  //     uploadHandler
  //   );
  const email = formData.get("email");
  const password = formData.get("password");
  const username = formData.get("username");
  const fullname = formData.get("fullname");
  //   // const pic = formData.get("profilepic");
  const redirectTo = safeRedirect(formData.get("redirectTo"), "/");

  if (!validateEmail(email)) {
    return json(
      {
        errors: {
          email: "Email is invalid",
          password: null,
          username: null,
          fullname: null,
        },
      },
      { status: 400 }
    );
  }

  if (validateEmail(email)) {
    const userExist = await getUserByEmail(email);
    if (userExist) {
      return json(
        {
          errors: {
            email: "Email is allready registered",
            password: null,
            username: null,
            fullname: null,
          },
        },
        { status: 400 }
      );
    }
  }

  if (typeof username !== "string" || username.length === 0) {
    return json(
      {
        errors: {
          email: null,
          password: null,
          username: "username is required",
          fullname: null,
        },
      },
      { status: 400 }
    );
  }

  if (typeof fullname !== "string" || fullname.length === 0) {
    return json(
      {
        errors: {
          email: null,
          password: null,
          username: null,
          fullname: "Fullname is required",
        },
      },
      { status: 400 }
    );
  }

  if (typeof password !== "string" || password.length === 0) {
    return json(
      {
        errors: {
          email: null,
          password: "Password is required",
          username: null,
          fullname: null,
        },
      },
      { status: 400 }
    );
  }

  if (password.length < 8) {
    return json(
      {
        errors: {
          email: null,
          password: "Password is too short",
          username: null,
          fullname: null,
        },
      },
      { status: 400 }
    );
  }

  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return json(
      {
        errors: {
          email: "A user already exists with this email",
          password: null,
          username: null,
          fullname: null,
        },
      },
      { status: 400 }
    );
  }

  //   const avatarUrl = formData.get("profilepic");
  const image = "";

  //   console.log(avatarUrl, "upload-" + Date.now() + ".jpeg");

  const user = await createUser(email, password, username, fullname, image);

  return createUserSession({
    request,
    userId: user.id,
    remember: false,
    redirectTo,
  });

  // prisma.user.create({
  //   data: {
  //     email: "email",
  //     username: "username",
  //     fullname: "fullname",
  //     image: "",
  //     password: {
  //       create: {
  //         hash: "abcd",
  //       },
  //     },
  //   },
  // });
}

const register = () => {
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? undefined;
  const actionData = useActionData<typeof action>();
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const usernameRef = React.useRef<HTMLInputElement>(null);
  const fullnameRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (actionData?.errors?.email) {
      emailRef.current?.focus();
    } else if (actionData?.errors?.password) {
      passwordRef.current?.focus();
    } else if (actionData?.errors?.username) {
      usernameRef.current?.focus();
    } else if (actionData?.errors?.fullname) {
      fullnameRef.current?.focus();
    }
  }, [actionData]);
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-indigo-600">
        <div className="w-[480px] p-6 shadow-purple-950 shadow-2xl bg-white rounded-md ">
          <h1 className="text-3xl block text-center font-semibold">
            <i className="fa-solid fa-user"></i> Register
          </h1>
          <hr className="mt-3" />
          <Form method="post" encType="multipart/form-data">
            <div className="mt-3">
              <label htmlFor="email" className="block text-base mb-2">
                Email
              </label>
              <input
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-sm"
                placeholder="Enter Email"
                ref={emailRef}
                type="email"
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
              <label htmlFor="username" className="block text-base mb-2">
                UserName
              </label>
              <input
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-sm"
                placeholder="Enter UserName"
                ref={usernameRef}
                type="text"
                id="username"
                name="username"
              />

              {actionData?.errors?.username && (
                <div className="pt-1 text-red-700" id="email-error">
                  {actionData.errors.username}
                </div>
              )}
            </div>
            <div className="mt-3">
              <label htmlFor="fullname" className="block text-base mb-2">
                FullName
              </label>
              <input
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-sm"
                placeholder="Enter FullName"
                ref={fullnameRef}
                type="text"
                id="fullname"
                name="fullname"
              />

              {actionData?.errors?.fullname && (
                <div className="pt-1 text-red-700" id="email-error">
                  {actionData.errors.fullname}
                </div>
              )}
            </div>
            <div className="mt-3">
              <label htmlFor="password" className="block text-base mb-2">
                Password
              </label>
              <input
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-sm"
                placeholder="Enter Password"
                ref={passwordRef}
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
            <div className="mt-3">
              <label htmlFor="profilepic">Profile picture **</label>
              <input
                type="file"
                className="w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-sm block text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-indigo-100 file:text-indigo-800
                cursor-pointer file:cursor-pointer file:hover:bg-indigo-200 file:hover:text-indigo-900"
                placeholder="please choose profile picture"
                id="profilepic"
                name="profilepic"
              />
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
                Register
              </button>
            </div>
            <div className="mt-5 flex justify-end font-semibold">
              <span>
                I already have acount!{" "}
                <Link to="/login" className="text-blue-900">
                  Login
                </Link>
              </span>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default register;
