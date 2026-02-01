"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";

const lookbooks = [
  {
    id: "1",
    title: "Collection 1",
    tag: "Coming Soon",
    videoSrc: "/lookbook1.mp4",
    looks: [
      { id: "l1", label: "Collection 1", sub: "Coming Soon" },
      { id: "l2", label: "Collection 1", sub: "Coming Soon" },
      { id: "l3", label: "Collection 1", sub: "Coming Soon" },
      { id: "l4", label: "Collection 1", sub: "Coming Soon" },
    ],
  },
  {
    id: "2",
    title: "Collection 2",
    tag: "Coming Soon",
    videoSrc: "/lookbook2.mp4",
    looks: [
      { id: "l1", label: "Collection 2", sub: "Coming Soon" },
      { id: "l2", label: "Collection 2", sub: "Coming Soon" },
      { id: "l3", label: "Collection 2", sub: "Coming Soon" },
    ],
  },
  {
    id: "3",
    title: "Collection 3",
    tag: "Coming Soon",
    videoSrc: "/lookbook3.mp4",
    looks: [
      { id: "l1", label: "Collection 3", sub: "Coming Soon" },
      { id: "l2", label: "Collection 3", sub: "Coming Soon" },
    ],
  },
];

// Same aspect ratio for all look images

function LookbookCard({
  item,
  index,
}: {
  item: (typeof lookbooks)[0];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const [hovering, setHovering] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const onHoverStart = useCallback(() => {
    setHovering(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const onHoverEnd = useCallback(() => {
    if (expanded) return;
    setHovering(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [expanded]);

  const onTap = useCallback(() => {
    setExpanded(true);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  const onBack = useCallback(() => {
    setExpanded(false);
  }, []);

  return (
    <ScrollReveal delay={index * 0.08}>
      <motion.article
        layout
        className="relative rounded-sm overflow-hidden bg-ink/5 dark:bg-white/5 border border-ink/10 dark:border-white/10"
        onHoverStart={onHoverStart}
        onHoverEnd={onHoverEnd}
      >
        <AnimatePresence mode="wait">
          {!expanded ? (
            <motion.div
              key="card"
              initial={false}
              className="aspect-[9/16] max-w-[280px] mx-auto cursor-pointer"
              onClick={onTap}
            >
              {/* Vertical video container — hover to play */}
              <div className="relative w-full h-full bg-ink/10 dark:bg-white/10 flex items-center justify-center">
                {item.videoSrc ? (
                  <video
                    ref={videoRef}
                    src={item.videoSrc}
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    onMouseEnter={() => videoRef.current?.play()}
                    onMouseLeave={() => {
                      videoRef.current?.pause();
                      if (videoRef.current) videoRef.current.currentTime = 0;
                    }}
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                    <span className="w-12 h-12 rounded-full border-2 border-ink/30 dark:border-white/30" />
                    <span className="nav-link text-xs text-ink/50 dark:text-white/50">
                      Vertical video
                    </span>
                    {hovering && (
                      <span className="text-xs text-ink/70 dark:text-white/70">
                        Hover to play · Tap to see looks
                      </span>
                    )}
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-ink/80 to-transparent dark:from-black/80">
                  <span className="nav-link text-xs text-white/70">{item.tag}</span>
                  <h2 className="font-display text-lg font-medium text-white mt-0.5">
                    {item.title}
                  </h2>
                </div>
                <div className="absolute top-2 right-2 nav-link text-[10px] text-white/60">
                  Tap to expand
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="expanded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-paper dark:bg-ink overflow-auto"
            >
              <div className="sticky top-0 left-0 right-0 z-10 flex items-center justify-between px-4 md:px-8 h-14 md:h-16 bg-paper/95 dark:bg-ink/95 backdrop-blur border-b border-ink/10 dark:border-white/10">
                <h2 className="font-display text-lg font-medium">
                  {item.title}
                </h2>
                <button
                  type="button"
                  onClick={onBack}
                  className="nav-link text-xs font-medium px-4 py-2 border border-ink dark:border-white hover:bg-ink/5 dark:hover:bg-white/5 transition-colors"
                >
                  Back
                </button>
              </div>
              <div className="px-4 md:px-8 py-8 md:py-12 max-w-4xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                  {item.looks.map((look, i) => (
                    <motion.div
                      key={look.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="aspect-[3/4] rounded-sm overflow-hidden bg-ink/5 dark:bg-white/5 border border-ink/10 dark:border-white/10 flex items-center justify-center"
                    >
                      <span className="nav-link text-xs text-ink/40 dark:text-white/40 text-center">
                        <span className="block">{look.label}</span>
                        <span className="block mt-1 opacity-80">{look.sub}</span>
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.article>
    </ScrollReveal>
  );
}

export default function LookbooksPage() {
  return (
    <div className="min-h-screen bg-paper dark:bg-ink pt-24 md:pt-28 pb-20">
      <div className="px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        <ScrollReveal>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-ink dark:text-white">
            Lookbooks
          </h1>
          <p className="font-sans text-ink/70 dark:text-white/70 mt-4 text-lg max-w-xl">
            Take a look into my closet.
          </p>
        </ScrollReveal>

        <div className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {lookbooks.map((item, i) => (
            <LookbookCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
