import Link from "next/link";
import { writing } from "@/data/writing";

export const metadata = {
  title: "Writing",
  description:
    "Research and writing by Teemu Hämäläinen, including a bachelor's thesis on Microsoft's AI tools in software development.",
};

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
  });

const WritingPage = () => {
  return (
    <div>
      <h1 className="lg:text-3xl text-xl font-bold">Writing & research ✍️</h1>
      <p className="lg:text-sm text-xs text-graytext italic mb-6 mt-2">
        Thesis work, and (eventually) notes on things I learn while building.
      </p>

      <div className="flex flex-col gap-4">
        {writing.map((post) => (
          <Link
            key={post.slug}
            href={`/writing/${post.slug}`}
            className="group block rounded-lg border border-gray-800  p-4 lg:p-6 transition-all duration-300 hover:border-accentOrange hover:shadow-lg hover:shadow-accentOrange/10"
          >
            <div className="flex flex-wrap items-center gap-2 text-xs text-graytext mb-2">
              <span className="rounded-full border border-accentOrange px-2 py-0.5 text-accentOrange">
                {post.type}
              </span>
              {post.institution && <span>{post.institution}</span>}
              {post.date && <span>{formatDate(post.date)}</span>}
              {post.language && <span>· {post.language}</span>}
            </div>
            <h2 className="text-lg lg:text-xl font-bold text-white group-hover:text-accentOrange">
              {post.titleEn ?? post.title}
            </h2>
            {post.titleEn && (
              <p className="text-xs text-graytext mt-1 italic">{post.title}</p>
            )}
            <p className="text-sm text-white mt-3">{post.summary}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {post.tags?.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-700 text-white px-2 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm text-blue-500 mt-3">Read more →</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WritingPage;
