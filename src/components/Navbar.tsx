import React from "react";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="w-full">
      <ul className="flex justify-end gap-6">
        <li>
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            <p>About</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/stack">
            <p>Stack</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio">
            <p>Portfolio</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            <p>Contact</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
