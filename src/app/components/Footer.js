"use client";
import FooterSocials from "./FooterSocials";

const Footer = () => {
  return (
    <div className="flex items-center justify-between w-full pb-6 px-4 lg:px-0">
      <p className="text-sm text-graytext mt-4">Teemu Hämäläinen</p>
      <span>
        <FooterSocials />
      </span>
    </div>
  );
};

export default Footer;
