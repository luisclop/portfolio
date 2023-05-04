import React from "react";
import { Navbar } from "../components";

export function Root() {
  return (
    <div className="flex h-screen flex-col items-center bg-primary font-sans text-secondary">
      <header>
        <Navbar />
      </header>
      <main className="w-312">Hola</main>
    </div>
  );
}
