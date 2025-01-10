import headshot from "../../assets/images/headshot.jpg";
import Image from "next/image";

const Picture = () => {
  return (
    <div className="rounded-full overflow-hidden border-2 border-accentOrange">
      <Image
        src={headshot}
        width={180}
        alt="My headshot picture"
        quality={100}
      />
    </div>
  );
};

export default Picture;
