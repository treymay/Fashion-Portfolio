import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ScrollReveal } from "@/components/ScrollReveal";
import { divinitiiiWorks } from "../work-data";

type Props = {
  params: Promise<{ workSlug: string }>;
};

export default async function DivinitiiiWorkPage({ params }: Props) {
  const { workSlug } = await params;
  const work = divinitiiiWorks.find((item) => item.slug === workSlug);

  if (!work) notFound();

  return (
    <div className="min-h-screen bg-paper dark:bg-ink pt-24 md:pt-28 pb-20">
      <div className="px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="nav-link text-xs text-ink/60 dark:text-white/60">
            Projects / DIVINITIII / {work.code}
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-ink dark:text-white mt-3">
            {work.title}
          </h1>
          <p className="font-sans text-ink/70 dark:text-white/70 mt-4 text-lg max-w-3xl">
            {work.type} · {work.status}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-12">
          <section className="border border-ink/10 dark:border-white/10 rounded-sm p-6 md:p-8 bg-paper-off/35 dark:bg-white/[0.03]">
            <h2 className="font-display text-2xl md:text-3xl text-ink dark:text-white">
              Process Notes
            </h2>
            <p className="font-sans text-ink/80 dark:text-white/80 mt-4 leading-relaxed max-w-4xl">
              {work.summary}
            </p>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="mt-12">
          <div className="flex items-end justify-between gap-4 mb-6">
            <h2 className="font-display text-2xl md:text-3xl text-ink dark:text-white">
              Media
            </h2>
            <p className="nav-link text-xs text-ink/55 dark:text-white/55">
              {work.media.length} items
            </p>
          </div>
        </ScrollReveal>

        <div
          className={
            work.code === "06"
              ? "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4"
              : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          }
        >
          {work.media.map((src, index) => (
            <ScrollReveal key={src} delay={0.03 * (index % 6)}>
              <a
                href={src}
                target="_blank"
                rel="noreferrer"
                className={`relative block rounded-sm overflow-hidden border border-ink/10 dark:border-white/10 bg-ink/5 dark:bg-white/[0.03] group ${
                  work.code === "06" ? "aspect-square" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={src}
                  alt={`${work.title} media ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3} className="mt-14">
          <section className="border-t border-ink/10 dark:border-white/10 pt-8">
            <h3 className="font-display text-2xl md:text-3xl text-ink dark:text-white">
              Process Docs & Assets
            </h3>
            {work.assets.length > 0 ? (
              <div className="mt-5 flex flex-wrap gap-4">
                {work.assets.map((asset) => (
                  <a
                    key={asset.href}
                    href={asset.href}
                    target="_blank"
                    rel="noreferrer"
                    className="nav-link text-xs inline-block text-ink dark:text-white underline underline-offset-4 hover:opacity-70 transition-opacity"
                  >
                    {asset.label}
                  </a>
                ))}
              </div>
            ) : (
              <p className="font-sans text-ink/60 dark:text-white/60 mt-4">
                Documentation upload in progress for this work.
              </p>
            )}
          </section>
        </ScrollReveal>

        <ScrollReveal delay={0.35} className="mt-10">
          <Link
            href="/projects/divinitiii"
            className="nav-link text-xs text-ink dark:text-white hover:opacity-70 transition-opacity"
          >
            Back to DIVINITIII overview →
          </Link>
        </ScrollReveal>
      </div>
    </div>
  );
}

