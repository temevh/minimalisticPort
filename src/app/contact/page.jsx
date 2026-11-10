import { profile } from "@/data/profile";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Teemu Hämäläinen by email.",
};

const ContactPage = () => {
  return (
    <div>
      <h1 className="text-xl lg:text-3xl font-bold">Get in touch 📬</h1>
      <p className="text-sm lg:text-base text-graytext mt-2">
        I'm looking for my next mid-level developer role, and happy to chat
        about interesting projects. Email is the best way to reach me.
      </p>

      <div className="flex flex-col gap-4 mt-6">
        <a
          href={`mailto:${profile.email}`}
          className="inline-block self-start rounded-md bg-accentOrange px-4 py-2 font-bold text-white hover:opacity-90"
        >
          {profile.email}
        </a>
        <div className="flex flex-wrap gap-4 text-sm lg:text-base">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-accentOrange"
          >
            LinkedIn ↗
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-accentOrange"
          >
            GitHub ↗
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-accentOrange"
          >
            Resume ↗
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
