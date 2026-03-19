"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function HomePage() {
  const portfolioPool = [
    { src: "/media/flo-state/styling-00a.png", ratio: 2 / 3 },
    { src: "/media/flo-state/styling-00b.png", ratio: 2 / 3 },
    { src: "/media/flo-state/styling-01.png", ratio: 2 / 3 },
    { src: "/media/flo-state/styling-02.png", ratio: 2 / 3 },
    { src: "/media/flo-state/styling-03.png", ratio: 2 / 3 },
    { src: "/media/flo-state/styling-04.jpg", ratio: 2 / 3 },
    { src: "/media/flo-state/styling-05.jpg", ratio: 2 / 3 },
    { src: "/media/flo-state/styling-06.jpg", ratio: 2 / 3 },
    { src: "/media/flo-state/styling-07.png", ratio: 2 / 3 },
    { src: "/media/flo-state/styling-08.png", ratio: 2 / 3 },
    { src: "/media/flo-state/styling-09.png", ratio: 2 / 3 },
    { src: "/media/flo-state/styling-10.png", ratio: 2 / 3 },
    { src: "/media/flo-state/styling-11.png", ratio: 2 / 3 },
    { src: "/media/flo-state/styling-12.png", ratio: 2 / 3 },
  ];

  const uniquePool = Array.from(
    new Map(portfolioPool.map((item) => [item.src, item])).values(),
  );

  const [carouselImages, setCarouselImages] = useState(
    uniquePool,
  );

  useEffect(() => {
    const shuffled = [...uniquePool].sort(() => Math.random() - 0.5);
    setCarouselImages(shuffled);
  }, []);

  const trackImages = [...carouselImages, ...carouselImages];

  return (
    <>
      {/* Auto-moving marquee carousel */}
      <section className="relative min-h-[72dvh] overflow-hidden bg-paper text-ink pt-28 pb-14 md:pt-36">
        <div className="px-6 text-center md:px-12 lg:px-20">
          <h1 className="font-display text-5xl font-extrabold tracking-[0.08em] md:text-7xl lg:text-8xl">
            TREY MAY
          </h1>
          <p className="mt-2 font-headline text-2xl font-light tracking-[0.06em] md:text-4xl lg:text-5xl">
            Styling + Design
          </p>
        </div>

        <div className="mt-10 overflow-hidden" aria-label="Hero image carousel">
          <div className="marquee-track flex w-max items-end gap-2 px-0 md:gap-3">
            {trackImages.map((item, index) => (
              <article
                key={`${item.src}-${index}`}
                className="relative h-[401px] shrink-0 overflow-hidden md:h-[562px]"
                style={{ aspectRatio: item.ratio }}
              >
                <Image
                  src={item.src}
                  alt={`Portfolio image ${index + 1}`}
                  fill
                  priority={index < 8}
                  loading="eager"
                  unoptimized
                  sizes="(max-width: 768px) 35vw, 20vw"
                  className="object-cover"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Asymmetric intro: portrait left, quote + bio right */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-paper border-t border-ink/10">
        <ScrollReveal className="md:col-span-5 md:row-span-2">
          <div className="aspect-[3/4] max-w-md w-full mx-auto md:mx-0 relative rounded-sm overflow-hidden border border-ink/10">
            <Image
              src="/profile-new.png"
              alt="Trey May"
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-cover object-top"
              priority
            />
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.15} className="md:col-span-6 md:col-start-7 flex flex-col justify-end pb-2">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-ink leading-snug tracking-tight">
            Fashion is the key to the transformation of someone&apos;s appearance from unimaginative to mystical and inspired.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.25} className="md:col-span-7 md:col-start-7">
          <p className="font-sans text-ink/85 text-base md:text-lg leading-relaxed max-w-2xl">
            Trey is currently pursuing a BFA in Fashion at the Savannah College of Art and Design with a tentative graduation date of Spring 2029. His love for exploration of different disciplines is proof that his skill set isn&apos;t limited to designing garments. Trey&apos;s styling ability almost feels as if it is an &quot;innate talent,&quot; but he is always improving when it comes to storytelling and conceptual activities. His passion for world-building is the engine for his creativity while his avant-garde perspective takes the wheel. His ultimate goal is to curate eye-catchign looks and make wearable clothing that is both innovative and next-level. Trey is currently open to taking advantage of opportunities with a willing and open heart.
          </p>
          <p className="font-sans text-ink/60 mt-6 text-sm nav-link">
            Trey May
          </p>
        </ScrollReveal>
      </section>

      {/* Teaser strip */}
      <section className="bg-paper-off border-y border-ink/10 py-12 px-6">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/styling"
              className="font-display text-3xl md:text-5xl font-semibold text-ink hover:opacity-70 transition-opacity"
            >
              Explore Sections →
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Philosophy */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-paper">
        <ScrollReveal>
          <p className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-ink leading-[1.15] max-w-3xl">
            Intentional styling and design from a style alchemist.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2} className="mt-16 flex flex-wrap gap-8">
          <Link href="/styling" className="nav-link text-xs text-ink/70 hover:text-ink transition-colors">
            Styling
          </Link>
          <Link href="/design" className="nav-link text-xs text-ink/70 hover:text-ink transition-colors">
            Design
          </Link>
          <Link href="/contact" className="nav-link text-xs text-ink/70 hover:text-ink transition-colors">
            Contact
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
