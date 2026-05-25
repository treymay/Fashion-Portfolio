export type Project = {
  slug: string;
  title: string;
  year: string;
  category: string;
  materials: string;
  technique: string;
  tagline: string;
  description: string;
  bg: string;          // CSS gradient for placeholder
  accentColor: string;
  concept: string;
  process: string;
  final: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    slug: "lunar-arc",
    title: "Lunar Arc",
    year: "2025",
    category: "Ring",
    materials: "18k White Gold, Moonstone, Pavé Diamonds",
    technique: "Lost-wax casting, hand engraving",
    tagline: "A crescent of light forged in metal",
    description: "Inspired by the lunar cycle, this ring captures the negative space of a waxing moon — the stone floats within an open arc of white gold, as if held by gravity alone.",
    bg: "linear-gradient(135deg, #1a1612 0%, #2a2318 50%, #1a1612 100%)",
    accentColor: "#C9A96E",
    concept: "The lunar cycle has guided human emotion for millennia — marking time, governing tides, inspiring ritual. Lunar Arc began as a sketch of negative space: what if the absence of metal were itself the design? The moonstone, with its adularescent glow, becomes the moon itself — suspended within a precise white-gold crescent. The arc is mathematically derived from the golden ratio, ensuring the negative space feels as intentional as the metal.",
    process: "Development began with hand-rendered sketches exploring the geometry of the crescent arc. From there, I moved to CAD modeling in Rhino to refine the prong positions and test the structural integrity of the open setting. The first prototype was 3D-printed in wax and hand-adjusted before investment casting in 18k white gold. Pavé diamond setting was completed by hand using a diamond-tipped graver under 10x magnification.",
    final: "The final piece was exhibited at the MFA Graduate Exhibition, Atlanta (2025). It sold to a private collector within the opening week. The ring sits in a size 6 and features a 1.2ct oval moonstone with blue-green adularescence, flanked by 0.18ctw pavé diamonds on a 2mm band.",
    tags: ["Ring", "White Gold", "Moonstone", "Fine Jewelry"],
  },
  {
    slug: "terra-colla",
    title: "Terra Colla",
    year: "2025",
    category: "Necklace",
    materials: "Oxidized Sterling Silver, Raw Citrine, Leather",
    technique: "Fabrication, cold connection, patination",
    tagline: "Where earth meets adornment",
    description: "A meditation on geological time — raw citrine crystals suspended in oxidized silver cradles, connected by hand-stitched leather cord. Each crystal is unique; no two pieces are alike.",
    bg: "linear-gradient(135deg, #201808 0%, #2e1c08 50%, #1a1208 100%)",
    accentColor: "#C9A96E",
    concept: "Terra Colla (Italian: earth glue) explores the idea of jewelry as geological record. Citrine forms over millions of years under extreme heat and pressure — wearing it is wearing time. I wanted the setting to reflect this rawness: oxidized silver mimics the dark matrix rock in which crystals naturally form, while leather grounds the piece in the organic.",
    process: "I sourced raw citrine directly from a Brazilian cooperative that practices ethical extraction. Each stone was hand-selected for its natural termination points and color graduation from amber to champagne. The silver cradles were fabricated from sheet metal using cold-connection techniques — no solder — to preserve the raw aesthetic. Patination was achieved with liver of sulfur, then selectively polished to create tonal contrast.",
    final: "Terra Colla was produced as a limited edition of 12, each numbered and signed. The piece was featured in Metalsmith Magazine's 2025 emerging artists issue and is carried by a contemporary jewelry gallery in New York City.",
    tags: ["Necklace", "Silver", "Citrine", "Artisan"],
  },
  {
    slug: "echo-bangle",
    title: "Echo",
    year: "2024",
    category: "Bangle",
    materials: "22k Gold, Black Enamel",
    technique: "Electroforming, enamel inlay, reticulation",
    tagline: "Repetition as ritual",
    description: "Three concentric bands in 22k gold, each surface treated differently — mirror polish, brushed, and reticulated — unified by bands of black enamel. A study in the beauty of repetition.",
    bg: "linear-gradient(135deg, #0e0e0e 0%, #1a1408 50%, #0e0e0e 100%)",
    accentColor: "#C9A96E",
    concept: "Echo questions our relationship with repetition in ritual and adornment. The three bands reference the three-beat rhythm of a mantra, the trinity in spiritual traditions, and the three acts of a story. The varying surface treatments ensure each band has its own voice within the unified whole — mirroring how repetition in music creates richness, not monotony.",
    process: "The form was electroformed over a wax original, allowing for the precise 22k gold deposit that gives the piece its unusual warmth. Black enamel was inlaid using the champlevé technique — cells etched into the metal, filled with powdered enamel, fired at 800°C, and ground flush. The reticulated surface on the outer band was created by a controlled flame technique that melts only the surface layer of the gold.",
    final: "Echo was awarded Best in Category at the Atlanta Jewelry Show, 2024. The bangle is available in small, medium, and large fits. It has been acquired by the permanent collection of the Georgia Museum of Art.",
    tags: ["Bangle", "Gold", "Enamel", "Award-Winning"],
  },
  {
    slug: "veil-earrings",
    title: "Veil",
    year: "2024",
    category: "Earrings",
    materials: "14k Rose Gold, Champagne Diamonds, Silk Thread",
    technique: "Micro-pavé setting, textile integration",
    tagline: "The weight of lightness",
    description: "Cascading rose gold micro-structures threaded with natural silk — the earrings move with the wearer, catching light like dew on a spider's web at dawn.",
    bg: "linear-gradient(135deg, #1a0f0f 0%, #261416 50%, #1a0f0f 100%)",
    accentColor: "#C4846E",
    concept: "Veil was born from a photograph of morning dew on a spider's web. The structure of a web — mathematically precise yet visually ethereal — became the design foundation. I wanted to create jewelry that felt weightless despite being made of metal, that moved and breathed like fabric. The integration of silk thread into a metalwork structure was the solution.",
    process: "Each earring contains 47 individually set champagne diamonds ranging from 0.8mm to 1.5mm. The rose gold wire structures were hand-bent and soldered under 10x magnification. Natural silk thread was woven through the metal framework using a custom-designed jig to ensure consistent tension and drape. The silk is treated with a proprietary fixative that preserves its luster while protecting against moisture.",
    final: "Veil has been worn by two editorial fashion shoots for independent jewelry publications. The earrings are made to order with a 6-week lead time, allowing customization of silk color (available in 8 natural dye shades) and diamond weight.",
    tags: ["Earrings", "Rose Gold", "Diamond", "Wearable Art"],
  },
  {
    slug: "stratum-brooch",
    title: "Stratum",
    year: "2024",
    category: "Brooch",
    materials: "Titanium, 18k Yellow Gold, Labradorite",
    technique: "Anodization, inlay, fabrication",
    tagline: "Geology worn on the body",
    description: "Layers of anodized titanium in hues of cobalt and violet, inlaid with 18k gold and a slice of labradorite, replicate the cross-section of sedimentary stone.",
    bg: "linear-gradient(135deg, #0a0f1a 0%, #111828 50%, #0a0f1a 100%)",
    accentColor: "#7B9CC4",
    concept: "Stratum translates geological cross-section into wearable form. Each layer of anodized titanium corresponds to a stratum of rock — the colors (achieved through controlled electrical current, not paint) mirror the iron oxides, manganese, and copper deposits that paint the earth. The labradorite slice, cut horizontally through the stone, reveals its inner architecture of iridescent feldspar.",
    process: "Titanium anodization is achieved by passing precise electrical current through the metal in an electrolytic solution. Different voltage levels produce different interference colors — no dyes are used. The layers were cut, anodized individually, then assembled using cold rivets of 18k gold. The labradorite was sourced from Madagascar and cut to a 2mm slab to maximize labradorescence visibility.",
    final: "Stratum was the thesis centrepiece of my MFA collection, presented at the SCAD Fashion Show 2024. It has been loaned to two traveling exhibitions on contemporary metal arts.",
    tags: ["Brooch", "Titanium", "Labradorite", "MFA Thesis"],
  },
  {
    slug: "reverie-pendant",
    title: "Reverie",
    year: "2023",
    category: "Pendant",
    materials: "Sterling Silver, Pink Sapphire, Freshwater Pearl",
    technique: "Granulation, forging, bezel setting",
    tagline: "Daydream made tangible",
    description: "An asymmetric composition of granulated silver spheres, a pink sapphire, and a baroque pearl — each element weighted differently, creating a pendant that sways and catches light in motion.",
    bg: "linear-gradient(135deg, #12100e 0%, #1e1818 50%, #12100e 100%)",
    accentColor: "#C4846E",
    concept: "Reverie was my first exploration of granulation — the ancient Etruscan technique of fusing tiny spheres of metal to a surface without visible solder. The difficulty of the technique demanded a design that honored it: an asymmetric scatter of spheres, as if pearls of thought were gently resting on a surface mid-dream. The baroque pearl, with its organic irregularity, anchors the composition.",
    process: "Granulation requires fusing silver spheres at temperatures below the melting point of the base metal — a process controlled by eutectic bonding at the molecular level. Each of the 84 spheres on this piece was individually prepared and fused. The pink sapphire was set in a bezel hand-formed from fine silver sheet. The baroque pearl is secured on a threaded post, making it interchangeable.",
    final: "Reverie was my undergraduate capstone project and received the Dean's Award for Technical Excellence. The piece is in a private collection in Atlanta, Georgia.",
    tags: ["Pendant", "Silver", "Sapphire", "Granulation"],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
