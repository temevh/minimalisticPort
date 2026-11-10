import headshot from "../../assets/images/headshot.jpg";
import Image from "next/image";

const Picture = () => {
  return (
    <div className="rounded-full overflow-hidden border-2 border-accentOrange shrink-0">
      <Image
        src={headshot}
        width={180}
        alt="Headshot of Teemu Hämäläinen"
        quality={90}
        priority
      />
    </div>
  );
};

export default Picture;
