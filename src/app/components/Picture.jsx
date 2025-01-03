import headshot from "../../assets/images/headshot.jpg";
import Image from "next/image";

const Picture = () => {
  return (
    <div className="rounded-full overflow-hidden border-2 border-accentOrange">
      <Image
        src={headshot}
        width={120}
        height={120}
        alt="Picture of the author"
        className="object-cover w-full h-full"
      />
    </div>
  );
};

export default Picture;
