import React from "react";
import { Navbar, Footer } from "../components";
import { Home } from "./Home.routes";
import { About } from "./About.routes";

export function Root() {
  return (
    <div className="flex w-full flex-col items-center bg-primary font-poppins text-secondary">
      <header>
        <Navbar />
      </header>
      <main className="font-poppins">
        <Home />
        <About />
      </main>
      <Footer />
    </div>
  );
}
