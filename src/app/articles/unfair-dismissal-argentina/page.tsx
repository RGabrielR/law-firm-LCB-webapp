import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Unfair Dismissal in Argentina: Rights and Compensation",
  description:
    "Know your severance rights, claim deadlines and legal actions after dismissal without cause.",
  alternates: {
    canonical: "https://www.estudiolcb.com.ar/articles/unfair-dismissal-argentina",
  },
};

const card =
  "rounded-3xl border border-zinc-800 bg-zinc-950/75 p-7 backdrop-blur-xl shadow-[14px_14px_30px_rgba(0,0,0,0.7),-8px_-8px_22px_rgba(63,63,70,0.18),inset_1px_1px_0_rgba(113,113,122,0.2)]";

export default function UnfairDismissalArgentinaPage() {
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
            Labor Law
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-zinc-100 md:text-5xl">
            Unfair Dismissal in Argentina: Rights and Compensation
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-zinc-300">
            If termination occurs without legal cause, employees may claim severance and
            additional items depending on contract conditions, registration status and
            payment compliance.
          </p>
        </section>

        <section className={card}>
          <h2 className="text-3xl font-bold text-zinc-100">Main Compensation Items</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-300">
            <li>Severance based on salary and seniority.</li>
            <li>Notice period payment (if omitted).</li>
            <li>Proportional vacation and SAC balances.</li>
            <li>Potential penalties for unregistered labor situations.</li>
          </ul>
        </section>

        <section className={card}>
          <h2 className="text-3xl font-bold text-zinc-100">Practical Steps After Dismissal</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-zinc-300">
            <li>Preserve dismissal notice and payroll records.</li>
            <li>Verify severance calculation with counsel.</li>
            <li>Send formal claim notice if differences exist.</li>
            <li>Initiate conciliation or judicial action within deadlines.</li>
          </ol>
        </section>

        <section className={card}>
          <h2 className="text-3xl font-bold text-zinc-100">How Dr. Miguel Alabi Helps</h2>
          <p className="mt-4 text-zinc-300">
            Dr. Miguel Alabi reviews liquidation details, leads negotiation and conciliation,
            and represents clients in labor litigation when needed.
          </p>
          <Link href="/#Contact" className="neo-button mt-6 inline-block">
            Book a Consultation
          </Link>
        </section>
      </article>
    </main>
  );
}
