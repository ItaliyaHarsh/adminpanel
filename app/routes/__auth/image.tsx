// import type { ActionArgs, LoaderArgs, V2_MetaFunction } from "@remix-run/node";
// import {
//   NodeOnDiskFile,
//   json,
//   redirect,
//   unstable_composeUploadHandlers,
//   unstable_createFileUploadHandler,
//   unstable_createMemoryUploadHandler,
//   unstable_parseMultipartFormData,
// } from "@remix-run/node";
// import { Form, Link, useActionData, useSearchParams } from "@remix-run/react";

// import { getUserId, createUserSession } from "~/session.server";
// import path from "path";

// export async function loader({ request }: LoaderArgs) {
//   const userId = await getUserId(request);
//   //   if (userId) return redirect("/");
//   return json({});
// }

// export async function action({ request }: ActionArgs) {
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

//   const avatarUrl = formData.get("profilepic");

//   console.log(avatarUrl, "upload-" + Date.now());

//   //   const multer = require("multer");
//   //   //   const path = require("path");

//   //   const storage = multer.diskStorage({
//   //     destination: "~/../public/images/",
//   //     filename: "abc.jpg",
//   //   });

//   //   const upload = multer({ storage: storage });
//   //   upload.single(profilepic);
//   //   console.log(profilepic);
//   return redirect("/image");
// }

// const image = () => {
//   return (
//     <>
//       <div className="flex justify-center items-center h-screen bg-indigo-600">
//         <div className="w-[480px] p-6 shadow-purple-950 shadow-2xl bg-white rounded-md ">
//           <h1 className="text-3xl block text-center font-semibold">
//             <i className="fa-solid fa-user"></i> Register
//           </h1>
//           <hr className="mt-3" />
//           <Form method="post" encType="multipart/form-data">
//             <div className="mt-3">
//               <label htmlFor="profilepic">Profile picture **</label>
//               <input
//                 type="file"
//                 className="w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-sm block text-slate-500
//                 file:mr-4 file:py-2 file:px-4
//                 file:rounded-full file:border-0
//                 file:text-sm file:font-semibold
//                 file:bg-indigo-100 file:text-indigo-800
//                 cursor-pointer file:cursor-pointer file:hover:bg-indigo-200 file:hover:text-indigo-900"
//                 placeholder="please choose profile picture"
//                 id="profilepic"
//                 name="profilepic"
//               />
//             </div>
//             <div className="mt-5">
//               {/* <input type="hidden" name="redirectTo" value={redirectTo} /> */}
//               <button
//                 type="submit"
//                 className="text-center bg-indigo-800 text-white w-full py-1 rounded-md border-2 border-indigo-700 hover:bg-white hover:text-indigo-800 font-semibold active:shadow-[inset_1px_5px_50px_-15px_rgba(1,1,1,0.5)]"
//               >
//                 Register
//               </button>
//             </div>
//             <div className="mt-5 flex justify-end font-semibold">
//               <span>
//                 I already have acount!{" "}
//                 <Link to="/login" className="text-blue-900">
//                   Login
//                 </Link>
//               </span>
//             </div>
//           </Form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default image;
