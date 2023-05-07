import React from "react";

export function Contact() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center gap-24 bg-primary font-poppins font-normal text-secondary">
      <h1 className="w-4/5 text-center text-4xl">
        I'm excited to learn about your poject. Ready to get started?
      </h1>
      <form action="" className="grid grid-cols-2 grid-rows-4 gap-12">
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input
            className="h-10 w-72 rounded-md border-2 border-gray text-gray"
            type="text"
            name="name"
            id="name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            className="h-10 w-72 rounded-md  border-2 border-gray text-gray"
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Type of project</label>
          <select
            className="h-10 w-72 rounded-md  border-2 border-gray text-gray"
            name="TypeOfProject"
            id="typeOf  Project"
          >
            <option value="Frontend">Frotend</option>
            <option value="Backend">Backend</option>
            <option value="Design">Design</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Budget</label>
          <input
            className="h-10 w-72 rounded-md  border-2 border-gray text-gray"
            type="number"
            name="budget"
            id="budget"
          />
        </div>
        <div className="col-span-2 flex flex-col gap-2">
          <label htmlFor="email">Additional details</label>
          <input
            className="h-10 rounded-md  border-2 border-gray text-gray"
            type="text"
            name="details"
            id="details"
          />
        </div>
        <button className="col-span-2 mx-auto h-12 w-44 rounded-full border-4 border-accent bg-accent text-secondary transition-all duration-300 hover:bg-primary hover:text-accent  ">
          Send
        </button>
      </form>
    </main>
  );
}
