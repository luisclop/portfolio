import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [typeOfProject, setTypeOfProject] = useState("Frontend");
  const [budget, setBudget] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      name,
      email,
      typeOfProject,
      budget,
      details,
    };

    // Limpiar el formulario
    setName("");
    setEmail("");
    setTypeOfProject("Frontend");
    setBudget("");
    setDetails("");

    toast.success("Your message has been sent successfully!");
  };

  const notify = () => toast("Here is your toast.");

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center gap-24 bg-primary font-poppins font-normal text-secondary">
      <button onClick={notify}>Test</button>
      <h1 className="w-4/5 text-center text-4xl">
        I'm excited to learn about your poject. Ready to get started?
      </h1>
      <form
        action=""
        onSubmit={handleSubmit}
        className="grid grid-cols-2 grid-rows-4 gap-12"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-10 w-72 rounded-md border-2 border-gray text-gray"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-10 w-72 rounded-md  border-2 border-gray text-gray"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Type of project</label>
          <select
            name="TypeOfProject"
            id="typeOf  Project"
            value={typeOfProject}
            onChange={(e) => setTypeOfProject(e.target.value)}
            className="h-10 w-72 rounded-md  border-2 border-gray text-gray"
          >
            <option value="Frontend">Frotend</option>
            <option value="Backend">Backend</option>
            <option value="Design">Design</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Budget</label>
          <input
            type="number"
            name="budget"
            id="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="h-10 w-72 rounded-md  border-2 border-gray text-gray"
          />
        </div>
        <div className="col-span-2 flex flex-col gap-2">
          <label htmlFor="email">Additional details</label>
          <input
            type="text"
            name="details"
            id="details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="h-10 rounded-md  border-2 border-gray text-gray"
          />
        </div>
        <button className="col-span-2 mx-auto h-12 w-44 rounded-full border-4 border-accent bg-accent text-secondary transition-all duration-300 hover:bg-primary hover:text-accent">
          Send
        </button>
      </form>
    </main>
  );
}
