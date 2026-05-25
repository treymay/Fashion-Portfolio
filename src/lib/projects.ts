export type Project = {
  slug: string;
  title: string;
  year: string;
  category: string;
  materials: string;
  technique: string;
  tagline: string;
  description: string;
  accentColor: string;
  pillClass: string;
  coverBg: string;
  tags: string[];
  images?: { src: string; caption: string }[];
  concept?: string;
  process?: string;
  final?: string;
};

export const projects: Project[] = [
  {
    slug: "blood-and-tears",
    title: "Blood & Tears",
    year: "2025",
    category: "Brooch",
    materials: "Brass & Copper Sheet Metal, Stainless Steel & Copper Wire, Pearls, Gemstone Beads, Resin",
    technique: "Cold Connections, Metalworking, Soldering, Chemical Patination, Wire Wrapping, UV Resin",
    tagline: "An eye that weeps what words can't hold",
    description: "For my final project in Introduction to Jewelry, I created a brooch with narrative and symbolic meaning — accumulating every technique from the semester. Blood & Tears is an eye that cries blood: a monument to the specific agony of watching someone you loved move on.",
    accentColor: "#C41E3A",
    pillClass: "pill-orange",
    coverBg: "linear-gradient(135deg, #f5e8e0 0%, #e8c8b8 50%, #d4a090 100%)",
    tags: ["Brooch", "Copper", "Narrative", "2025"],
    images: [
      { src: "/blood-tears/page-1.png", caption: "Design Brief — the beginning of Blood & Tears" },
      { src: "/blood-tears/page-2.png", caption: "Inspiration — the specific grief of watching someone move on" },
      { src: "/blood-tears/page-3.png", caption: "Sketches — different iterations of the same vivid vision" },
      { src: "/blood-tears/page-4.png", caption: "Process & Materials — fabrication techniques used" },
      { src: "/blood-tears/page-5.png", caption: "Progress — step by step, precision piercing to UV resin" },
    ],
    concept: "These tears are meant to symbolize a different kind of cry. This cry is of agony and pain over the loss of someone you were passionate about or desired. For me personally, I spent years crying over someone that I was in love with. While I'm okay now, I still feel that deep grief and remember all the suffering I had to endure while I saw them move on with their life with someone else. The color palette — blood red, amber gold, cream, and black — was pulled directly from that emotional weight. Pearls and ruby-red beads form the tears. The eye watches. It always watches.",
    process: "Because I had such a clear and vivid vision for this brooch, I wanted to simply create different iterations of the same concept — adjusting the number of eyelashes, the type of chains, the assortment of beads. Fabrication techniques included: Cold Connections (resin, wire-wrapping), Metalworking (precision piercing, doming, finishing), Soldering & Mechanisms (integrated hand-crafted hinge and catch), Surface Treatment (chemical & heat patination in red and black on copper), and Wire Working (custom structural eyelash fabrication). Materials: Brass and Copper sheet metal, Stainless steel and copper wire, Pearls and gemstone beads, Resin.",
    final: "The completed piece is a wearable narrative — an eye brooch with custom wire eyelashes, blood-red bead tears, and a UV-resin-sealed iris. The hinge and catch mechanism were hand-fabricated, allowing the piece to function as a proper, wearable brooch. It was completed as my final project for Introduction to Jewelry at SCAD, 2025.",
  },
  {
    slug: "for-an-endless-spring",
    title: "For An Endless Spring",
    year: "2026",
    category: "Earrings",
    materials: "Brass, Copper, Moonstone",
    technique: "Sand Casting, CAD / Rhino 3D, Fabrication, Stone Setting",
    tagline: "Medieval armor, reimagined as something you actually want to wear",
    description: "Ear cuffs born from medieval heraldry, crusader imagery, and the idea that armor can be beautiful. Dragon wings, crests, and the motto 'For An Endless Spring' — because protection and joy are not opposites.",
    accentColor: "#C9A96E",
    pillClass: "pill-gold",
    coverBg: "linear-gradient(135deg, #f5f0e0 0%, #e8d8a8 50%, #d4b870 100%)",
    tags: ["Earrings", "Brass", "Medieval", "2026"],
    images: [
      { src: "/earrings/medieval-board.png", caption: "Research — medieval heraldry, crusader imagery, and the iconography of knighthood" },
      { src: "/earrings/physical-board.png", caption: "Physical mood board — tactile research collage exploring texture, pattern, and narrative" },
      { src: "/earrings/coat-of-arms.png", caption: "Coat of Arms design — 'For An Endless Spring' — the guiding concept" },
      { src: "/earrings/sketches.png", caption: "CAD sketches — four iterations of the ear cuff in Rhino 3D" },
      { src: "/earrings/front.png", caption: "Final — front view, brass ear cuffs with moonstone drops" },
      { src: "/earrings/back.png", caption: "Final — back view showing the structural detail and moonstone bezel" },
    ],
    concept: "Medieval Europe is full of jewelry that meant something — crests, sigils, armor — every piece was a statement of identity and allegiance. I wanted to pull that energy into something modern and wearable. The ear cuff form naturally evokes armor plating along the ear, so I leaned into that: dragon-wing silhouettes, heraldic geometry, a dangling moonstone drop that catches light like a gemstone in a royal setting. The motto 'For An Endless Spring' became the guiding spirit — this is armor for living beautifully, not surviving.",
    process: "Research began with medieval heraldry, crusader manuscripts, and gothic stained glass. I built a physical mood board collaging textures, patterns, and iconography, then moved to CAD in Rhino 3D — sketching four iterations of the ear cuff form, pushing the dragon-wing silhouette until it read as both fierce and elegant. The pieces were fabricated using sand casting and hand-finished. Moonstone cabochons were set in hand-formed bezels and attached with wire wrapping.",
    final: "Two pairs of brass ear cuffs with moonstone drops. Final photoshoot images coming soon — stay tuned. The earrings are currently available to commission; reach out via the contact page.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
