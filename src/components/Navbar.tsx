import React from "react";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 mx-auto mt-11 flex h-16 w-312 items-center justify-between font-montserrat font-bold">
      <p className="text-3xl font-bold text-accent">Luis.dev</p>
      <ul className="gap flex justify-end">
        <li className="flex h-11 w-20 items-center justify-center">
          <NavLink to="/">
            <p className="font-bold">Home</p>
          </NavLink>
        </li>
        <li className="flex h-11 w-20 items-center justify-center">
          <NavLink to="/about">
            <p className="font-bold">About</p>
          </NavLink>
        </li>
        <li className="flex h-11 w-20 items-center justify-center">
          <NavLink to="/stack">
            <p className="font-bold">Stack</p>
          </NavLink>
        </li>
        <li className="flex h-11 w-20 items-center justify-center">
          <NavLink to="/portfolio">
            <p className="font-bold">Portfolio</p>
          </NavLink>
        </li>
        <li className="flex h-11 w-20 items-center justify-center">
          <NavLink to="/contact">
            <p className="font-bold">Contact</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
