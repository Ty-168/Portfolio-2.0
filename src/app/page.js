import Image from "next/image";
import { Home } from "./home";
import { About } from "./about";
import { Project } from "./project";
import { Contact } from "./contact";

export default function Portfolio() {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen gap-10 font-[family-name:var(--font-geist-sans)]">
      <div className="w-full">
        <Home id="home"/>
      </div>
      <div className="w-full">
        <About id="about"/>
      </div>
      <div className="w-full">
        <Project id="project"/>
      </div>
      <div className="w-full">
        <Contact id="contact"/>
      </div>
    </div>
  );
}
