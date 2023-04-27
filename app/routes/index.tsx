import { Link } from "@remix-run/react";
import { json, redirect } from "@remix-run/node";
import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { getUserId } from "~/session.server";

export async function loader({ request }: LoaderArgs) {
  const userId = await getUserId(request);
  if (userId) return redirect("/dashboard");
  return json({});
}

export default function Index() {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-indigo-600">
        <div className="w-96 p-6 shadow-purple-950 shadow-2xl bg-white rounded-md ">
          <Link to="/login"> login</Link>
          <Link to="/register"> register</Link>
          <Link to="/dashboard"> dashboard</Link>
        </div>
      </div>
    </>
  );
}
