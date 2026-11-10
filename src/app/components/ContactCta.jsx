import Link from "next/link";
import { profile } from "@/data/profile";

const ContactCta = () => {
  return (
    <section className="rounded-lg border border-accentOrange/60 bg-gray-900 p-5 lg:p-6 text-center">
      <h2 className="font-bold text-lg lg:text-2xl text-white">
        Let's build something together
      </h2>
      <p className="text-sm lg:text-base text-graytext mt-2">
        I'm looking for my next mid-level developer role. The best way to reach
        me is email.
      </p>
      <div className="flex flex-wrap justify-center gap-3 mt-4">
        <a
          href={`mailto:${profile.email}`}
          className="rounded-md bg-accentOrange px-4 py-2 text-sm lg:text-base font-bold text-white hover:opacity-90"
        >
          {profile.email}
        </a>
        <Link
          href="/about"
          className="rounded-md border border-gray-600 px-4 py-2 text-sm lg:text-base text-white hover:border-accentOrange hover:text-accentOrange"
        >
          More about me
        </Link>
      </div>
    </section>
  );
};

export default ContactCta;
