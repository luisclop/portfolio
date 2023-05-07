import React from "react";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="absolute left-0 right-0 top-0 mx-auto mt-11 flex h-16 w-312 items-center justify-between font-montserrat text-accent">
      <p className="text-3xl font-bold">Luis.dev</p>
      <button className="h-14 w-48 rounded-full border-2 border-accent text-xl font-normal transition-all hover:bg-accent hover:text-secondary">
        Resume
      </button>
    </nav>
  );
}
