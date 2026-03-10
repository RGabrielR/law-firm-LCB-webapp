import type { Metadata } from "next";
import Link from "next/link";

const keyChanges = [
  {
    title: "1) Dismissal compensation formula changed",
    text: "Compensation is now based on regular monthly salary only, excluding SAC, vacation pay, and non-recurring bonuses. This can reduce payout values and makes legal review of calculations more important.",
  },
  {
    title: "2) FAL contribution is now mandatory",
    text: "Employers must contribute monthly to the Labor Assistance Fund (FAL). While potentially offsettable through social security credits, this adds compliance and documentation obligations.",
  },
  {
    title: "3) Hour bank agreements became more relevant",
    text: "Overtime may be compensated with future time off instead of direct payment, but only with proper written agreements. Poor implementation can trigger disputes and unpaid overtime claims.",
  },
  {
    title: "4) Vacation periods can be split",
    text: "Leave can be fragmented into blocks of at least 7 consecutive days, and summer vacation rights must still be preserved under the new schedule rules.",
  },
  {
    title: "5) Labor regularization window opened",
    text: "The law enables formalization of unregistered employment with penalty relief and installment plans. Timing and filing details are critical to keep these benefits.",
  },
];

export const metadata: Metadata = {
  title: "Argentina Labor Reform 27.802 (2026) | Dr. Miguel Alabi",
  description:
    "Comprehensive guidance by Dr. Miguel Alabi on Argentina's Labor Reform Law 27.802, including compensation, hour banks, FAL, and labor regularization.",
  keywords: [
    "Argentina labor reform 27802",
    "Labor Law 27802 2026",
    "dismissal compensation Argentina",
    "hour bank agreement Argentina",
    "FAL labor assistance fund",
    "labor formalization Argentina",
    "employment lawyer Tucuman",
    "Dr Miguel Alabi labor law",
  ],
  alternates: {
    canonical: "https://www.estudiolcb.com.ar/articles/labor-reform-argentina-2026",
  },
  openGraph: {
    title: "Dr. Miguel Alabi | Labor Reform 27.802 in Argentina",
    description:
      "A practical legal explanation by Dr. Miguel Alabi for workers and employers navigating Law 27.802.",
    type: "article",
  },
};

const softCard =
  "rounded-[2rem] border border-zinc-800 bg-zinc-950/75 p-7 backdrop-blur-2xl shadow-[16px_16px_36px_rgba(0,0,0,0.78),-10px_-10px_24px_rgba(63,63,70,0.22),inset_1px_1px_0_rgba(113,113,122,0.25)]";

export default function LaborReformArgentina2026Page() {
  return (
    <main className="relative isolate mx-auto min-h-screen w-full max-w-5xl overflow-hidden bg-black px-6 py-16 text-zinc-100">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute -left-20 top-[-70px] h-72 w-72 rounded-full bg-zinc-700/20 blur-3xl" />
        <div className="absolute -right-16 bottom-[-40px] h-72 w-72 rounded-full bg-zinc-600/20 blur-3xl" />
      </div>
      <article className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-8">
        <section className={`${softCard} relative overflow-hidden`}>
          <div className="absolute -right-24 -top-24 h-52 w-52 rounded-full bg-zinc-500/15 blur-3xl" />
          <div className="relative z-10">
            <Link
              href="/articles"
              className="inline-flex items-center rounded-full border border-zinc-700 bg-black px-4 py-2 text-sm font-semibold text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-950"
            >
              Back to Articles
            </Link>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-400">
              Dr. Miguel Alabi | Labor Law in Argentina
            </p>
            <h1 className="mt-4 text-4xl font-black leading-tight text-zinc-100 md:text-5xl">
              Law 27.802 (2026): Legal Guidance by Dr. Miguel Alabi
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-zinc-300">
              Argentina enacted Labor Modernization Law 27.802 on February 27, 2026. This guide
              summarizes the practical legal impact for workers and employers.
            </p>
          </div>
        </section>

        <section className={softCard}>
          <h2 className="text-3xl font-bold text-zinc-100">Five Key Changes</h2>
          <div className="mt-6 grid gap-4">
            {keyChanges.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-zinc-800 bg-black p-5 shadow-[inset_1px_1px_0_rgba(82,82,91,0.3),0_10px_24px_rgba(0,0,0,0.45)]"
              >
                <h3 className="text-xl font-semibold text-zinc-100">{item.title}</h3>
                <p className="mt-2 text-zinc-300">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-zinc-800 bg-gradient-to-br from-black via-zinc-950 to-black p-8 backdrop-blur-2xl shadow-[18px_18px_40px_rgba(0,0,0,0.78),-8px_-8px_22px_rgba(63,63,70,0.2)]">
          <h2 className="text-3xl font-bold text-zinc-100">Legal Support with Dr. Miguel Alabi</h2>
          <p className="mt-4 text-zinc-300">
            Dr. Miguel Alabi advises workers and employers on compliance, contracts,
            dismissals, and labor litigation strategy under the new legal framework.
          </p>
          <p className="mt-4 text-zinc-400">
            Office address: Avenida Salta 1563 - San Miguel de Tucuman - Tucuman
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/#Contact"
              className="rounded-full border border-zinc-700 bg-black px-7 py-3 font-semibold text-zinc-100 transition hover:-translate-y-0.5 hover:border-zinc-500 hover:bg-zinc-950"
            >
              Book a Consultation
            </Link>
            <Link
              href="/#Contact"
              className="rounded-full border border-zinc-700 bg-black px-7 py-3 font-semibold text-zinc-100 transition hover:-translate-y-0.5 hover:border-zinc-500 hover:bg-zinc-950"
            >
              Employer Advisory
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
