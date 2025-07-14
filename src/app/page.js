import Image from "next/image";
import { Home } from "./home";
import { About } from "./about";
import { Project } from "./project";
import { Contact } from "./contact";
import 'animate.css';



export default function Portfolio() {

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen gap-10 font-[family-name:var(--font-geist-sans)]">
      <div className="w-full">
        <Home />
      </div>
      <div className="w-full">
        <About />
      </div>
      <div className="w-full z-50">
        <Project />
      </div>
      <div className="w-full h-fit mb-10 sm:mb-0">
        <Contact />
      </div>
    </div>
  );
}
