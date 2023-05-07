import React from "react";
import { Navbar } from "../components";
import { Home } from "./Home.routes";
import { About } from "./About.routes";

export function Root() {
  return (
    <div className="flex flex-col items-center bg-primary font-sans text-secondary">
      <header>
        <Navbar />
      </header>
      <main className="w-312">
        <Home />
        <About />
      </main>
    </div>
  );
}
