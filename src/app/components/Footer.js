"use client";
import FooterSocials from "./FooterSocials";

const Footer = () => {
  return (
    <div className="pt-4 flex items-center justify-between">
      <p className="text-sm text-graytext mt-4">Teemu Hämäläinen</p>
      <span>
        <FooterSocials />
      </span>
    </div>
  );
};

export default Footer;
