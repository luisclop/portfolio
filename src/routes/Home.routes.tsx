import React from "react";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

export function Home() {
  return (
    <section className="flex h-screen items-center justify-center">
      <article className="w-3/5 font-poppins">
        <h2 className="flex items-center text-lg font-bold text-gray ">
          Hello I'm
        </h2>
        <h1 className="flex h-24 items-center text-6xl font-bold">
          Luis Lopez
        </h1>
        <h2 className="flex h-14 items-center text-6xl font-bold text-accent">
          Full Stack Developer
        </h2>
        <p className="my-6 text-base text-gray">
          Mechatronic engineering student, interested un software development,
          particularly in web development. I have experience in frontend and
          backend development, using technologies such as React, Node, Express,
          MongoDB, among others.
        </p>
        <button className="mt-8 h-14 w-48 rounded-lg border-4 border-accent bg-accent transition-all duration-300 hover:border-4 hover:border-accent hover:bg-primary hover:text-accent">
          <p className="text-xl font-semibold">Get in touch</p>
        </button>
      </article>
      <aside className="absolute bottom-0 left-20 flex flex-col items-center gap-6">
        <a href="https://www.linkedin.com/in/luis-lopez-mollo/" target="_blank">
          <img src={linkedin} alt="linkedin" />
        </a>
        <a href="https://github.com/luislopez22" target="_blank">
          <img src={github} alt="github" />
        </a>
        <div className="h-72 border-l-2 border-accent"></div>
      </aside>
    </section>
  );
}
