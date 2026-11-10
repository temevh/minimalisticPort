"use client";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const RoleTypewriter = () => {
  const [text] = useTypewriter({
    words: [
      "Full-stack developer.",
      "Cloud & AI builder.",
      "Team player & natural leader.",
      "Seasoned entrepreneur.",
      "Full-time nerd.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 20,
    delaySpeed: 1500,
  });

  return (
    <div className="text-sm lg:text-xl font-bold text-white overflow-hidden h-6">
      <span className="text-graytext">{text}</span>
      <Cursor cursorBlinking cursorStyle="|" cursorColor="#D16002" />
    </div>
  );
};

export default RoleTypewriter;
