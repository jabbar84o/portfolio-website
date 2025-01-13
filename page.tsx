"use client";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About  from "@/components/About";
import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react";
// /eslint-disable-next-line @typescript-eslint/no-unused-vars
// /import Image from "next/image";

export default function Home() {
  useEffect (() => {
    AOS.init({
      easing:"ease-out-back",
      duration: 1200,
      delay: 100,
      mirror:true,
      anchorPlacement:"bottom-bottom",
      offset:160,
    });
    AOS.refresh();
  },[]);
  return (
<main>
  <Hero />
 <Projects />
 <Skills />
 <Contact />
 <About />
</main>
  );
}
/// eslint-disable-next-line @typescript-eslint/no-unused-vars
// function useEffect(_arg0: () => void, _p0: never[]) {
  // throw new Error("Function not implemented.");
// }

