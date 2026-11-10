import Link from "next/link";
import Picture from "./Picture";
import Socials from "./Socials";
import RoleTypewriter from "./RoleTypewriter";
import { profile } from "@/data/profile";

const Hero = () => {
  return (
    <section>
      <div className="flex flex-row gap-2 lg:gap-10 items-center mb-4">
        <Picture />
        <div className="ml-4 lg:ml-0">
          <h1 className="text-md lg:text-3xl font-bold text-white">
            Hey, I'm Teemu
          </h1>
          <RoleTypewriter />
          <Socials />
        </div>
      </div>
      <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 mt-4">
        <a
          href={`mailto:${profile.email}`}
          className="col-span-2 sm:col-span-1 rounded-md bg-accentOrange px-4 py-2 text-center text-sm lg:text-base font-bold text-white hover:opacity-90"
        >
          {profile.email}
        </a>
        <a
          href={profile.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-gray-600 px-4 py-2 text-center text-sm lg:text-base text-white hover:border-accentOrange hover:text-accentOrange"
        >
          Resume
        </a>
        <Link
          href="/projects"
          className="rounded-md border border-gray-600 px-4 py-2 text-center text-sm lg:text-base text-white hover:border-accentOrange hover:text-accentOrange"
        >
          See my work
        </Link>
      </div>
    </section>
  );
};

export default Hero;
