import React from "react";
import { ProfilePic } from "../components";
import brush from "../assets/brush.png";
import code from "../assets/code.png";
import server from "../assets/driver.png";

export function About() {
  return (
    <section className="w-full bg-primary">
      <div className="flex w-full items-center justify-center gap-32 bg-accent p-14">
        <aside>
          <ProfilePic />
        </aside>
        <article className="flex w-1/2 flex-col items-center gap-5 pb-64 pt-36 text-center font-poppins">
          <h1 className="mb-2 text-4xl font-bold">About Me</h1>
          <p className="py-3 text-base">
            I am a final cycle mechatronic engineering student passionate about
            programming and software development. During my career, I discovered
            an interest in technological innovation in the software field and
            the possibility of implementing ideas through code.
          </p>
          <p>
            In particular, I love working on web development projects, as I
            believe the web is a free and inclusive space that allows anyone to
            access the information and tools they need. Through web development,
            I can contribute to creating solutions that are accessible to
            everyone, regardless of their geographic location or economic
            situation.
          </p>
          <p>
            Furthermore, I strongly believe in the importance of continuing to
            learn and improving my skills. I stay updated with the latest trends
            and technologies in software development and am always looking for
            new technologies to add to my knowledge base.
          </p>
        </article>
      </div>
      <div className="relative bottom-40 mx-auto flex w-4/5 justify-between rounded-3xl bg-secondary py-16 text-center text-xl text-gray">
        <div className="flex w-full flex-col items-center justify-start gap-6 px-4 font-semibold">
          <img src={brush} />
          <p className="text-2xl text-primary">Designer</p>
          <p className="text-lg font-normal">
            I have experience in user research, wireframing, prototyping and
            design systems
          </p>
          <p className="text-accent">Things I enjoy design and tools I use:</p>
          <ul>
            <li className="my-6">Web</li>
            <li className="my-6">Mobile</li>
            <li className="my-6">UI/UX</li>
            <li className="my-6">Figma</li>
          </ul>
        </div>
        <div className="flex w-full flex-col items-center justify-start gap-6 px-4 font-semibold">
          <img src={code} />
          <p className="text-2xl text-primary">Frontend Developer</p>
          <p className="text-lg font-normal">
            I have experience in implementing design from scratch to build
            dynamic and responsive user interfaces.
          </p>
          <p className="text-accent">Languages and frameworks I use:</p>
          <ul className="">
            <li className="my-6">HTML</li>
            <li className="my-6">CSS</li>
            <li className="my-6">Javascript</li>
            <li className="my-6">React</li>
            <li className="my-6">Typescript</li>
            <li className="my-6">Tailwind CSS</li>
          </ul>
        </div>
        <div className="flex w-full flex-col items-center justify-start gap-6 px-4 font-semibold">
          <img src={server} />
          <p className="text-2xl text-primary">Backend Developer</p>
          <p className="text-lg font-normal">
            I have experience in creating scalable web applications,
            implementing server-side architecture and APIs
          </p>
          <p className="text-accent">Languages and frameworks I use:</p>
          <ul className="">
            <li className="my-6">Node JS</li>
            <li className="my-6">Express JS</li>
            <li className="my-6">MongoDB</li>
            <li className="my-6">Mongoose</li>
            <li className="my-6">Socket.io</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
