import { Picture } from "./components";

export default function Home() {
  return (
    <div className="">
      <div className="flex flex-row gap-10">
        <Picture />
        <p className="text-xl font-bold">
          Hey, I'm Teemu. I'm a front-end developer and a CS student
        </p>
      </div>
    </div>
  );
}
