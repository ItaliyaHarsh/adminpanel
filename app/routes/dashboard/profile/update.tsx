// import type { LoaderArgs, ActionArgs } from "@remix-run/node";
// import { json, redirect } from "@remix-run/node";
// import { Form, Link, useLoaderData, useSearchParams } from "@remix-run/react";
// import { getUser, getUserId } from "~/session.server";
// import { useState } from "react";
// import { updateUser } from "~/models/user.server";

// export async function loader({ request }: LoaderArgs) {
//   const user = await getUser(request);
//   if (!user) return redirect("/login");

//   return json({ user });
// }

// export async function action({ request }: ActionArgs) {
//   const formData = await request.formData();
//   const fullname = formData.get("fullname");
//   const email = formData.get("email");
//   const username = formData.get("username");
//   const userid = await getUserId(request);

//   const updateuser = await updateUser(
//     JSON.stringify(email),
//     JSON.stringify(username),
//     JSON.stringify(fullname),
//     JSON.stringify(userid)
//   );
//   // console.log();

//   // console.log(document.location.hostname);
//   // console.log(email, username, fullname, userid, updateuser);
//   return redirect("/dashboard/profile");
// }

// const updateprofile = () => {
//   const data = useLoaderData<typeof loader>();
//   const [email, setEmail] = useState(data.user?.email);
//   const [fullname, setFullname] = useState(data.user?.fullname);
//   const [username, setUsername] = useState(data.user?.username);

//   return (
//     <>
//       <div className="w-full p-4 flex bg-indigo-300">
//         <div className="m-2 border-2 rounded-2xl h-full w-full bg-indigo-200">
//           <Form method="post">
//             <div className="m-5 ml-12">
//               <label className="font-semibold text-[24px] mb-5 ">
//                 UserName :
//               </label>
//               <input
//                 value={username}
//                 // ref={usernameRef}
//                 name="username"
//                 className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-400 rounded-lg bg-gray-100"
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//             </div>
//             <hr />
//             <div className="m-5 ml-12">
//               <label className="font-semibold text-[24px] mb-5 ">
//                 Fullname :
//               </label>
//               <input
//                 value={fullname}
//                 // ref={fullnameRef}
//                 name="fullname"
//                 className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-400 rounded-lg bg-gray-100"
//                 onChange={(e) => setFullname(e.target.value)}
//               />
//             </div>
//             <hr />
//             <div className="m-5 ml-12">
//               <label className="font-semibold text-[24px] mb-5 ">Email :</label>
//               <input
//                 value={email}
//                 // ref={emailRef}
//                 name="email"
//                 className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-400 rounded-lg bg-gray-100"
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>

//             <button
//               type="submit"
//               className="mt-10 ml-12 text-center bg-indigo-800 text-white px-5 py-1 rounded-md border-2 border-indigo-700 hover:bg-white hover:text-indigo-800 font-semibold active:shadow-[inset_1px_5px_50px_-15px_rgba(1,1,1,0.5)]"
//             >
//               Update
//             </button>
//             <button className="mt-10 ml-12 text-center bg-indigo-800 text-white px-5 py-1 rounded-md border-2 border-indigo-700 hover:bg-white hover:text-indigo-800 font-semibold active:shadow-[inset_1px_5px_50px_-15px_rgba(1,1,1,0.5)]">
//               <Link to="/dashboard/profile">Cancel</Link>
//             </button>
//           </Form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default updateprofile;
