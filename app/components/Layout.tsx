import Navbar from "~/components/Navbar";
import Sidebar from "~/components/Sidebar";
import React from "react";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <section className="w-screen">
        <Navbar />
        <div className="flex gap-0 relative h-[91.5vh] w-full">
          <Sidebar />
          {children}
        </div>
      </section>
    </>
  );
}
