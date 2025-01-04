"use client";
import { Picture, Socials, TLDR } from "./components";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Home() {
  const [text] = useTypewriter({
    words: [
      "Computer science student.",
      "'Full-stack' developer.",
      "Seasoned entrepreneur.",
      "Fitness enthusiast.",
      "Full-time nerd.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 20,
    delaySpeed: 1500,
  });

  return (
    <div className="">
      <div className="flex flex-row gap-10 items-center mb-6">
        <Picture />
        <div id="infodiv">
          <p className="text-2xl text-gray-400 font-bold">
            <a
              className="text-white hover:text-blue-500 hover:cursor-pointer"
              href="/about"
              target="_self"
              rel="noopener noreferrer"
            >
              Hey, I'm Teemu
            </a>
          </p>
          <div className="text-2xl font-bold text-white overflow-hidden h-8">
            <span className="text-graytext">{text}</span>
            <Cursor
              cursorBlinking="true"
              cursorStyle="|"
              cursorColor="text-designColor"
            />
          </div>
          <Socials />
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-4" id="tldrdiv">
        <p className="text-2xl font-bold text-graytext">
          A quick TL;DR of me!
          <span className="text-sm text-gray-700 ml-6">
            since I know you are busy ;)
          </span>
        </p>
        <TLDR />
        <p className="text-graytext text-lg">
          Make sure to check out the
          <span className="text-blue-700">
            <a href="/about" target="_self" rel="noopener noreferrer">
              {" "}
              about me{" "}
            </a>
          </span>{" "}
          page to get to know me more!
        </p>
      </div>
    </div>
  );
}
