import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

export function Root() {
  return (
    <div className="bg-primary flex flex-col items-center text-secondary h-screen">
      <Navbar />
      <div className="bg-accent w-312">
        <Outlet />
      </div>
    </div>
  );
}
