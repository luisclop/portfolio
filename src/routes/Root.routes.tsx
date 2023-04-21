import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

export function Root() {
  return (
    <div className="flex h-screen flex-col items-center bg-primary font-sans text-secondary">
      <Navbar />
      <main className="my-auto w-312">
        <Outlet />
      </main>
    </div>
  );
}
