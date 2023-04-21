import React from "react";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 mx-auto mt-11 flex h-16 w-312 items-center justify-between font-montserrat font-bold">
      <p className="text-3xl font-bold text-accent">Luis.dev</p>
      <ul className="flex justify-end gap-6">
        <li className="flex h-11 w-20 items-center justify-center">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-accent" : "transition-all hover:text-accent"
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="flex h-11 w-20 items-center justify-center">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-accent" : "transition-all hover:text-accent"
            }
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li className="flex h-11 w-20 items-center justify-center">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-accent" : "transition-all hover:text-accent"
            }
            to="/stack"
          >
            Stack
          </NavLink>
        </li>
        <li className="flex h-11 w-20 items-center justify-center">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-accent" : "transition-all hover:text-accent"
            }
            to="/portfolio"
          >
            Portfolio
          </NavLink>
        </li>
        <li className="flex h-11 w-20 items-center justify-center">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-accent" : "transition-all hover:text-accent"
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
