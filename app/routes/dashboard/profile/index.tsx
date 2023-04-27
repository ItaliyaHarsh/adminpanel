import type { LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
// import { getUser } from "~/session.server";

// export async function loader({ request }: LoaderArgs) {
//   const user = await getUser(request);
//   if (!user) return redirect("/login");
//   return json({ user });
// }

const index = () => {
  // const data = useLoaderData<typeof loader>();

  return (
    <>
      <div className="p-4 flex bg-indigo-300 w-full">
        <div className="m-2 border-2 rounded-2xl h-72 w-80 bg-indigo-200">
          <img
            className="rounded-2xl w-32 h-32 bg-gray-400 mt-12 mx-auto shadow-2xl"
            src={`./../../images/photo-1503023345310-bd7c1de61c7d.jpg`}
            // src={`./../../images/${data.user.image}.jpg`}
          />
          <h3 className="mt-10 text-2xl text-center font-semibold ">
            {/* {data.user?.username} */}
          </h3>
        </div>
        <div className="m-2 border-2 rounded-2xl h-72 w-[700px] bg-indigo-200">
          <div className="mt-10 ml-12">
            <h2 className="font-semibold text-[24px] mb-5">
              {/* Fullname : {data.user?.fullname} */}
            </h2>
            <h2 className="font-semibold text-[24px] mb-5">
              {/* Email : {data.user?.email} */}
            </h2>
          </div>
          <div className="mt-24 ml-12">
            <button className="text-center bg-indigo-800 text-white px-5 py-1 rounded-md border-2 border-indigo-700 hover:bg-white hover:text-indigo-800 font-semibold active:shadow-[inset_1px_5px_50px_-15px_rgba(1,1,1,0.5)]">
              <Link to="update">Update Profile</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
