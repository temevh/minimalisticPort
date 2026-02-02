"use client";
import { Picture, Socials, TLDR } from "./components";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import DoingRn from "./components/DoingRn";

export default function Home() {
  const [text] = useTypewriter({
    words: [
      "CS student.",
      "Full-stack developer.",
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
      <div className="flex flex-row gap-2 lg:gap-10 items-center mb-2 lg:mb-6">
        <Picture />
        <div className="ml-4 lg:ml-0">
          <p className="text-md lg:text-xl text-gray-400 font-bold">
            <a
              className="text-white hover:text-blue-500 hover:cursor-pointer"
              href="/about"
              target="_self"
              rel="noopener noreferrer"
            >
              Hey, I'm Teemu
            </a>
          </p>
          <div className="text-sm lg:text-xl font-bold text-white overflow-hidden h-6">
            <span className="text-graytext">{text}</span>
            <Cursor
              cursorBlinking="true"
              cursorStyle="|"
              cursorColor="text-designColor"
            />
          </div>
          <Socials />
          <div className="lg:mt-2">
            <a
              href="https://drive.google.com/file/d/1wcdlA5VtSQYJgCmGdsCDkf6AcvXDcSKL/view"
              download="TeemuHamalainenResume.pdf"
              className="text-blue-500 hover:text-graytext text-xs lg:text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              View/download my resume!
            </a>
          </div>
        </div>
      </div>
      <p className="lg:text-2xl text-lg font-bold text-graytext">
        A quick TL;DR of me!
      </p>
      <p className="lg:text-sm text-xs text-gray-700">
        since I know you are busy ;)
      </p>
      {/* <DoingRn />*/}
      <div className="mt-4 flex flex-col gap-4" id="tldrdiv">
        <TLDR />
        <p className="text-white text-sm lg:text-lg">
          Make sure to check out the
          <span className="text-blue-700">
            <a href="/about" target="_self" rel="noopener noreferrer">
              {" "}
              about me{" "}
            </a>
          </span>{" "}
          page to get to know me more!
        </p>
        <p className="text-sm lg:text-lg text-graytext">
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
