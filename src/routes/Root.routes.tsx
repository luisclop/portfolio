import React from "react";
import { Navbar } from "../components";
import { Home } from "./Home.routes";
import { About } from "./About.routes";

export function Root() {
  return (
    <div className="flex w-full flex-col items-center bg-primary font-sans text-secondary">
      <header>
        <Navbar />
      </header>
      <main className="font-poppins">
        <Home />
        <About />
      </main>
    </div>
  );
}
