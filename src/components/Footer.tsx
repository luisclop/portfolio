import React from "react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="w-full bg-primary font-poppins">
      <article className="relative top-20 mx-auto flex h-40 w-4/6 items-center justify-around rounded-3xl bg-secondary p-12 text-primary">
        <p className="mr-8 text-3xl font-semibold">Start a project</p>
        <p className="flex-1">
          Looking for a reliable developer to bring your project to life? Look
          no further!
        </p>
        <Link to={"/contact"}>
          <button className="ml-8 h-12 w-44 rounded-full border-4 border-accent bg-accent text-secondary transition-all duration-300 hover:bg-secondary hover:text-accent">
            Let's talk
          </button>
        </Link>
      </article>
      <div className="h-56 bg-accent"></div>
    </footer>
  );
}
