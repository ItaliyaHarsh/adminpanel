import type { LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { requireUserId, getUser } from "~/session.server";

export async function loader({ request }: LoaderArgs) {
  const user = await getUser(request);
  if (!user) return redirect("/login");

  return json({ user });
}

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <>
      <div className="p-3 w-full">
        <h1 className="text-blue-900 text-5xl">this is Dashboard</h1>
        <Link to="/login">Login here</Link>
        <div className="cursor-pointer">GetUser</div>

        <p>{data.user?.id}</p>
        <p>{data.user?.username}</p>
        <p>{data.user?.fullname}</p>
        <p>{data.user?.email}</p>
      </div>
    </>
  );
}
