import { Picture, Socials, TLDR } from "./components";

export default function Home() {
  return (
    <div className="">
      <div className="flex flex-row gap-10 items-center">
        <Picture />
        <div id="infodiv">
          <p className="text-2xl text-gray-400 font-bold">
            <span className="text-white">Hey, I'm Teemu</span>. I'm a front-end
            developer and a CS student.
          </p>
          <Socials />
          <div></div>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-4" id="tldrdiv">
        <p className="text-2xl font-bold">
          Below is a quick TL;DR of me!
          <span className="text-sm text-graytext ml-6">
            since I know you are busy ;)
          </span>
        </p>
        <TLDR />
      </div>
    </div>
  );
}
