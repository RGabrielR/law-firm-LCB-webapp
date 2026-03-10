import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Succession and Inheritance in Argentina",
  description:
    "Legal overview of inheritance proceedings, mandatory documentation and timing in Argentina.",
  alternates: {
    canonical: "https://www.estudiolcb.com.ar/articles/succession-inheritance-argentina",
  },
};

const card =
  "rounded-3xl border border-zinc-800 bg-zinc-950/75 p-7 backdrop-blur-xl shadow-[14px_14px_30px_rgba(0,0,0,0.7),-8px_-8px_22px_rgba(63,63,70,0.18),inset_1px_1px_0_rgba(113,113,122,0.2)]";

export default function SuccessionInheritanceArgentinaPage() {
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
            Civil Law
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-zinc-100 md:text-5xl">
            Succession and Inheritance in Argentina
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-zinc-300">
            Succession proceedings are required to legally transfer assets from a deceased
            person to heirs. Proper filing order and complete documentation avoid delays,
            objections and tax complications.
          </p>
        </section>

        <section className={card}>
          <h2 className="text-3xl font-bold text-zinc-100">Key Documents</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-300">
            <li>Death certificate.</li>
            <li>ID documents of the deceased and heirs.</li>
            <li>Civil status certificates (marriage, birth).</li>
            <li>Asset records: deeds, vehicle titles, bank data.</li>
            <li>Will (if any) and domicile certifications.</li>
          </ul>
        </section>

        <section className={card}>
          <h2 className="text-3xl font-bold text-zinc-100">Procedure Overview</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-zinc-300">
            <li>Open succession case before civil court.</li>
            <li>Edict publication and notification windows.</li>
            <li>Declaration of heirs.</li>
            <li>Inventory, valuation and allocation of assets.</li>
            <li>Registration of transferred assets.</li>
          </ol>
        </section>

        <section className={card}>
          <h2 className="text-3xl font-bold text-zinc-100">How Dr. Miguel Alabi Helps</h2>
          <p className="mt-4 text-zinc-300">
            Dr. Miguel Alabi coordinates full succession strategy, manages judicial filings,
            and supports negotiated or judicial partition with compliance focus.
          </p>
          <Link href="/#Contact" className="neo-button mt-6 inline-block">
            Book a Consultation
          </Link>
        </section>
      </article>
    </main>
  );
}
