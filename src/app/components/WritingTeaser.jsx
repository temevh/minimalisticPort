import Link from "next/link";
import { writing } from "@/data/writing";

const WritingTeaser = () => {
  const latest = writing[0];
  if (!latest) return null;

  return (
    <section>
      <div className="flex items-baseline justify-between mb-3">
        <h2 className="font-bold text-lg lg:text-2xl text-white">
          Writing & research
        </h2>
        <Link
          href="/writing"
          className="text-sm text-blue-500 hover:text-blue-400"
        >
          All writing →
        </Link>
      </div>
      <Link
        href={`/writing/${latest.slug}`}
        className="group block rounded-lg border border-gray-800 bg-gray-900 p-4 transition-all duration-300 hover:border-accentOrange"
      >
        <p className="text-xs text-accentOrange mb-1">
          {latest.level ?? latest.type}
          {latest.institution ? ` · ${latest.institution}` : ""}
        </p>
        <h3 className="font-bold text-white group-hover:text-accentOrange">
          {latest.titleEn ?? latest.title}
        </h3>
        <p className="text-sm text-graytext mt-1">{latest.summary}</p>
      </Link>
    </section>
  );
};

export default WritingTeaser;
