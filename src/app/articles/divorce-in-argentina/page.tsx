import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Divorce in Argentina: Process and Legal Checklist",
  description:
    "A practical guide to divorce requirements, filing stages and key legal decisions in Argentina.",
  alternates: {
    canonical: "https://www.estudiolcb.com.ar/articles/divorce-in-argentina",
  },
};

const card =
  "rounded-3xl border border-zinc-800 bg-zinc-950/75 p-7 backdrop-blur-xl shadow-[14px_14px_30px_rgba(0,0,0,0.7),-8px_-8px_22px_rgba(63,63,70,0.18),inset_1px_1px_0_rgba(113,113,122,0.2)]";

export default function DivorceInArgentinaPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl px-6 py-16 text-zinc-100">
      <article className="flex flex-col gap-8">
        <section className={card}>
          <Link
            href="/articles"
            className="inline-flex items-center rounded-full border border-zinc-700 bg-black px-4 py-2 text-sm font-semibold text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-950"
          >
            Back to Articles
          </Link>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-400">
            Family Law
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-zinc-100 md:text-5xl">
            Divorce in Argentina: Process and Legal Checklist
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-zinc-300">
            Divorce is no-fault in Argentina. You can request it unilaterally or by mutual agreement.
            The core legal work is not proving causes, but correctly structuring parental care,
            support, housing and asset distribution.
          </p>
        </section>

        <section className={card}>
          <h2 className="text-3xl font-bold text-zinc-100">Required Documentation</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-300">
            <li>Marriage certificate.</li>
            <li>ID documentation for both spouses.</li>
            <li>Birth certificates for children (if applicable).</li>
            <li>Draft agreement proposal (support, parenting, property).</li>
            <li>Proof of domicile and relevant financial records.</li>
          </ul>
        </section>

        <section className={card}>
          <h2 className="text-3xl font-bold text-zinc-100">Main Stages</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-zinc-300">
            <li>Initial legal strategy and case assessment.</li>
            <li>Filing before the competent family court.</li>
            <li>Judicial review of proposed arrangements.</li>
            <li>Divorce decree and civil registry update.</li>
          </ol>
        </section>

        <section className={card}>
          <h2 className="text-3xl font-bold text-zinc-100">How Dr. Miguel Alabi Helps</h2>
          <p className="mt-4 text-zinc-300">
            Dr. Miguel Alabi provides strategic drafting of agreements, risk prevention,
            and litigation support when negotiations fail.
          </p>
          <Link href="/#Contact" className="neo-button mt-6 inline-block">
            Book a Consultation
          </Link>
        </section>
      </article>
    </main>
  );
}
