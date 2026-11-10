import Link from "next/link";
import { notFound } from "next/navigation";
import { writing, getPost } from "@/data/writing";

export function generateStaticParams() {
  return writing.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.titleEn ?? post.title,
    description: post.summary,
  };
}

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
  });

export default async function WritingPost({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article>
      <Link
        href="/writing"
        className="text-sm text-blue-500 hover:text-blue-400"
      >
        ← All writing
      </Link>

      <div className="flex flex-wrap items-center gap-2 text-xs text-graytext mt-4 mb-2">
        <span className="rounded-full border border-accentOrange px-2 py-0.5 text-accentOrange">
          {post.level ?? post.type}
        </span>
        {post.institution && <span>{post.institution}</span>}
        {post.date && <span>{formatDate(post.date)}</span>}
        {post.language && <span>· {post.language}</span>}
      </div>

      <h1 className="text-xl lg:text-3xl font-bold text-white">
        {post.titleEn ?? post.title}
      </h1>
      {post.titleEn && (
        <p className="text-sm text-graytext mt-2 italic">{post.title}</p>
      )}

      {post.takeaways && (
        <section className="mt-6">
          <h2 className="text-lg lg:text-xl font-bold text-white mb-2">
            Key takeaways
          </h2>
          <ul className="list-disc pl-5 flex flex-col gap-2">
            {post.takeaways.map((item) => (
              <li key={item} className="text-sm lg:text-base">
                {item}
              </li>
            ))}
          </ul>
        </section>
      )}

      {post.abstract && (
        <section className="mt-6">
          <h2 className="text-lg lg:text-xl font-bold text-white mb-2">
            Abstract
          </h2>
          <div className="flex flex-col gap-3">
            {post.abstract.en.map((paragraph) => (
              <p key={paragraph} className="text-sm lg:text-base">
                {paragraph}
              </p>
            ))}
          </div>
          {post.abstract.fi && (
            <details className="mt-4 rounded-lg border border-gray-800 bg-gray-900 p-3">
              <summary className="cursor-pointer text-sm text-blue-500">
                Tiivistelmä (suomeksi)
              </summary>
              <div className="flex flex-col gap-3 mt-3">
                {post.abstract.fi.map((paragraph) => (
                  <p key={paragraph} className="text-sm lg:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            </details>
          )}
        </section>
      )}

      {post.body && (
        <div className="flex flex-col gap-3 mt-6">
          {post.body.map((paragraph) => (
            <p key={paragraph} className="text-sm lg:text-base">
              {paragraph}
            </p>
          ))}
        </div>
      )}

      {post.tags && (
        <div className="flex flex-wrap gap-2 mt-6">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-700 text-white px-2 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {post.links?.length > 0 && (
        <div className="flex flex-col gap-2 mt-6">
          {post.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-accentOrange"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
