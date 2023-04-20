import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

export function Root() {
  return (
    <div className="bg-primary text-secondary h-screen overflow-y-hidden">
      <Navbar />
      <Outlet />
    </div>
  );
}
