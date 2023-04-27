import { Outlet } from "@remix-run/react";
import { Layout } from "~/components/Layout";

const dashboard = () => {
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
};

export default dashboard;
