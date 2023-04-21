import React from "react";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import photo from "../assets/foto.png";

export function Home() {
  return (
    <section className="flex justify-between">
      <article className="w-153 font-poppins">
        <h2 className="flex h-14 items-center text-4xl font-bold ">
          Hello I'm
        </h2>
        <h1 className="flex h-24 items-center text-6xl font-bold">
          Luis Lopez
        </h1>
        <h2 className="flex h-14 items-center text-4xl font-bold text-accent">
          Full Stack Developer
        </h2>
        <p className="my-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          tincidunt turpis quis quam condimentum, a imperdiet massa pharetra.
          Nam in leo et turpis euismod semper.
        </p>
        <div className="mt-2 flex gap-4">
          <a
            href="https://www.linkedin.com/in/luis-lopez-mollo/"
            target="_blank"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href="https://github.com/luislopez22" target="_blank">
            <img src={github} alt="github" />
          </a>
        </div>
        <button className="mt-8 h-14 w-44 rounded-lg border-4 border-accent bg-accent transition-all duration-300 hover:border-4 hover:border-accent hover:bg-primary hover:text-accent">
          <p className="text-xl font-semibold">Download CV</p>
        </button>
      </article>
      <aside>
        <img
          src={photo}
          alt="photo"
          className="w-124 rounded-full border-4 border-accent"
        />
      </aside>
    </section>
  );
}
