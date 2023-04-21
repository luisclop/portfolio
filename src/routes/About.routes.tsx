import React from "react";
import { ProfilePic } from "../components";

export function About() {
  return (
    <section className="flex justify-between">
      <aside>
        <ProfilePic />
      </aside>
      <article className="w-153 font-poppins">
        <h1 className="mb-2 text-6xl font-bold">
          About <span className="text-accent">Me</span>
        </h1>
        <h2 className="text-xl font-bold">
          A Full Stack Developer with a Passion for Building Web Applications
        </h2>
        <p className="py-6 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          justo leo, viverra nec nisl ut, auctor ornare nisl. Maecenas accumsan
          eu quam et euismod. In ultricies, orci vel consequat porttitor, mi
          urna fermentum enim, nec vehicula tellus mauris quis metus. Morbi nec
          nisl est. Quisque posuere pretium lacus, non suscipit leo tincidunt
          in. Nunc lacinia accumsan tortor, pulvinar gravida sapien placerat et.
          Aenean sit amet faucibus lacus. Fusce ornare lorem vel nibh egestas
          imperdiet. Cras semper mauris odio, vel molestie nibh vehicula quis.
          Phasellus arcu erat, finibus rhoncus ante a, sollicitudin sodales
          lectus. Vestibulum sed urna felis.
        </p>
        <button className="h-14 w-44 rounded-lg border-4 border-accent bg-accent transition-all duration-300 hover:border-4 hover:border-accent hover:bg-primary hover:text-accent">
          <p className="text-xl font-semibold">Read More</p>
        </button>
      </article>
    </section>
  );
}
