import type { Metadata } from "next";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Practical legal articles by Dr. Miguel Alabi on family, civil and labor law in Argentina.",
  alternates: {
    canonical: "https://www.estudiolcb.com.ar/articles",
  },
};

const articles = [
  {
    slug: "divorce-in-argentina",
    title: "Divorce in Argentina: Process and Legal Checklist",
    description:
      "Requirements, filing stages, agreements and timeline expectations for divorce proceedings.",
    category: "Family Law",
  },
  {
    slug: "succession-inheritance-argentina",
    title: "Succession and Inheritance in Argentina",
    description:
      "How inheritance cases work, required documents and common procedural mistakes.",
    category: "Civil Law",
  },
  {
    slug: "unfair-dismissal-argentina",
    title: "Unfair Dismissal in Argentina: Rights and Compensation",
    description:
      "Understand severance, deadlines and legal actions after termination without cause.",
    category: "Labor Law",
  },
  {
    slug: "labor-reform-argentina-2026",
    title: "Argentina Labor Reform 27.802 (2026)",
    description:
      "Key legal changes for workers and employers under Law 27.802.",
    category: "Labor Law",
  },
];

export default function ArticlesPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-7xl px-6 py-20 xl:max-w-[1380px]">
      <div className="neo-panel mb-12 p-10 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.45em] text-zinc-400">
          Legal Resources
        </span>
        <h1 className="mt-3 text-4xl font-black text-zinc-100 sm:text-5xl">
          Articles and Practical Guides
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg font-light text-zinc-300">
          Updated legal information to help you understand your rights and make
          better decisions.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <article
            key={article.slug}
            className="neo-inset group flex h-full flex-col overflow-hidden p-6 transition hover:border-zinc-700"
          >
            <div className="flex flex-1 flex-col gap-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                {article.category}
              </span>
              <h2 className="text-xl font-bold text-zinc-100">{article.title}</h2>
              <p className="text-sm font-light leading-relaxed text-zinc-300">
                {article.description}
              </p>
            </div>
            <div className="pt-6">
              <Link
                href={`/articles/${article.slug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-300 transition hover:text-zinc-100"
              >
                Read full article
                <IoArrowForward
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="neo-panel mt-16 p-8 text-center md:p-12">
        <h2 className="text-2xl font-bold text-zinc-100 md:text-3xl">
          Need legal advice for your specific case?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base font-light text-zinc-300">
          Contact Dr. Miguel Alabi Law Office for a personalized consultation.
        </p>
        <Link href="/#Contact" className="neo-button mt-6 inline-block">
          Book consultation
        </Link>
      </div>
    </main>
  );
}
