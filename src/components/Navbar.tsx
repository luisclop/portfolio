import React from "react";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="mx-auto mt-11 flex h-16 w-312 items-center justify-between font-montserrat font-bold text-accent">
      <p className="text-4xl">Luis.dev</p>
      <button className="h-14 w-48 rounded-full border-2 border-accent text-xl font-semibold transition-all hover:bg-accent hover:text-secondary">
        Resume
      </button>
    </nav>
  );
}
