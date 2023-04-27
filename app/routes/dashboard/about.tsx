import { Link } from "@remix-run/react";
import { Layout } from "~/components/Layout";
import type { LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
// import { getUser } from "~/session.server";

// export async function loader({ request }: LoaderArgs) {
//   const user = await getUser(request);
//   if (!user) return redirect("/login");
//   return json({});
// }

const about = () => {
  return (
    <>
      <div className="p-3 w-full">
        <h1 className="text-blue-900 text-5xl">this is About</h1>
        <Link to="/login">Login here</Link>
      </div>
    </>
  );
};

export default about;
