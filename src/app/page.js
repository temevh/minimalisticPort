import { Picture, Socials } from "./components";

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
        </div>
      </div>
    </div>
  );
}
