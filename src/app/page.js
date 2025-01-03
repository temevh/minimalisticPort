import { Picture, Socials, TLDR } from "./components";

export default function Home() {
  return (
    <div className="">
      <div className="flex flex-row gap-10 items-center">
        <Picture />
        <div id="infodiv">
          <p className="text-2xl text-gray-400 font-bold">
            <span className="text-white hover:text-blue-500 hover:cursor-pointer">
              Hey, I'm Teemu
            </span>
            . I'm a "full-stack" developer and a CS student.
          </p>
          <Socials />
          <div></div>
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
          <span className="text-blue-700"> about me </span> page to get to know
          me more!
        </p>
      </div>
    </div>
  );
}
