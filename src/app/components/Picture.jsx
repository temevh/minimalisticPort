import headshot from "../../assets/images/headshot.jpg";
import Image from "next/image";

const Picture = () => {
  return (
    <div className="rounded-full overflow-hidden border-2 border-accentOrange shrink-0 w-28 sm:w-[180px]">
      <Image
        src={headshot}
        width={180}
        alt="Headshot of Teemu Hämäläinen"
        quality={90}
        sizes="(min-width: 640px) 180px, 112px"
        className="w-full h-auto"
        priority
      />
    </div>
  );
};

export default Picture;
