"use client";
import { Picture, Socials, TLDR } from "./components";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Home() {
  const [text] = useTypewriter({
    words: [
      "Computer science student.",
      "¾-stack developer.",
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
          <div className="mt-2">
            <a
              href="https://drive.google.com/file/d/1E7zyljzi5_CsHjGF4510s63GfcR8mCzs/view?usp=sharing"
              download="TeemuHamalainenResume.pdf"
              className="text-blue-500 hover:text-graytext text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              View/download my resume!
            </a>
          </div>
        </div>
      </div>
      <p className="text-2xl font-bold text-graytext">A quick TL;DR of me!</p>
      <p className="text-sm text-gray-700">since I know you are busy ;)</p>
      <div className="mt-4 flex flex-col gap-4" id="tldrdiv">
        <TLDR />
        <p className="text-white text-lg">
          Make sure to check out the
          <span className="text-blue-700">
            <a href="/about" target="_self" rel="noopener noreferrer">
              {" "}
              about me{" "}
            </a>
          </span>{" "}
          page to get to know me more!
        </p>
        <p className="text-lg text-graytext">
          You can find my{" "}
          <span className="bg-yellow-200 text-black font-bold">
            {" "}
            contact info
          </span>{" "}
          in the resume!
        </p>
      </div>
    </div>
  );
}
