export type WorkAsset = {
  label: string;
  href: string;
};

export type DivinitiiiWork = {
  code: string;
  slug: string;
  title: string;
  type: string;
  status: string;
  summary: string;
  thumbnail: string;
  media: string[];
  assets: WorkAsset[];
};

export const divinitiiiWorks: DivinitiiiWork[] = [
  {
    code: "00",
    slug: "00-exoskeletal-void-case",
    title: "ExoSkeletal Void Case",
    type: "Object / Phone Case",
    status: "Process archive live",
    summary:
      "Concept renders, silhouette studies, Rhino process snapshots, and production troubleshooting for the ExoSkeletal Void Case.",
    thumbnail:
      "/projects/divinitiii/works/00-exoskeletal-void-case/media/divinitiii-case-white-back.png",
    media: [
      "/projects/divinitiii/works/00-exoskeletal-void-case/media/clear-iphone-case-back-2.png",
      "/projects/divinitiii/works/00-exoskeletal-void-case/media/clear-iphone-case-front.png",
      "/projects/divinitiii/works/00-exoskeletal-void-case/media/divinitiii-case-black-back.png",
      "/projects/divinitiii/works/00-exoskeletal-void-case/media/divinitiii-case-black-front.png",
      "/projects/divinitiii/works/00-exoskeletal-void-case/media/divinitiii-case-white-back.png",
      "/projects/divinitiii/works/00-exoskeletal-void-case/media/divinitiii-case-white-front.png",
      "/projects/divinitiii/works/00-exoskeletal-void-case/media/error-1.png",
      "/projects/divinitiii/works/00-exoskeletal-void-case/media/error-message-1.png",
      "/projects/divinitiii/works/00-exoskeletal-void-case/media/iphone-case-sketch-black.jpg",
      "/projects/divinitiii/works/00-exoskeletal-void-case/media/rhino-screenshot-2.png",
      "/projects/divinitiii/works/00-exoskeletal-void-case/media/rhino-screenshot.png",
      "/projects/divinitiii/works/00-exoskeletal-void-case/media/silhouette-research.jpeg",
      "/projects/divinitiii/works/00-exoskeletal-void-case/media/stl-file-screenshot-2.png",
      "/projects/divinitiii/works/00-exoskeletal-void-case/media/stl-file-screenshot.png",
    ],
    assets: [],
  },
  {
    code: "01",
    slug: "01-haloed-wraith-exo",
    title: "Haloed Wraith Exo",
    type: "Footwear / Exoskeletal Study",
    status: "Process archive live",
    summary:
      "Concept renders, Rhino process capture, and initial inspiration assets.",
    thumbnail: "/projects/divinitiii/works/01-haloed-wraith/media/concept-1-render-1.jpg",
    media: [
      "/projects/divinitiii/works/01-haloed-wraith/media/concept-1-render-1.jpg",
      "/projects/divinitiii/works/01-haloed-wraith/media/concept-1-render-2.jpg",
      "/projects/divinitiii/works/01-haloed-wraith/media/concept-1-render-3.jpg",
      "/projects/divinitiii/works/01-haloed-wraith/media/concept-1-rhino-screenshot.png",
      "/projects/divinitiii/works/01-haloed-wraith/media/initial-inspiration.jpeg",
    ],
    assets: [
      {
        label: "Chassis Agilus Black (.stl)",
        href: "/projects/divinitiii/works/01-haloed-wraith/docs/chassis-agilus-black-black.stl",
      },
      {
        label: "ExoSkeleton Vero Clear (.stl)",
        href: "/projects/divinitiii/works/01-haloed-wraith/docs/exoskeleton-vero-clear.stl",
      },
      {
        label: "Sole Agilus White Black (.stl)",
        href: "/projects/divinitiii/works/01-haloed-wraith/docs/sole-agilus-white-black.stl",
      },
    ],
  },
  {
    code: "02",
    slug: "02-vertebrae-mutation-sleeve",
    title: "Vertebrae Mutation Sleeve",
    type: "Garment Component / Sleeve System",
    status: "Process archive live",
    summary:
      "Technical drawings, render studies, Rhino process screenshots, and STL sizing variants.",
    thumbnail:
      "/projects/divinitiii/works/02-vertebrae-mutation-sleeve-black/media/vertebrae-renders.png",
    media: [
      "/projects/divinitiii/works/02-vertebrae-mutation-sleeve-black/media/concept-1-technical-drawing.jpg",
      "/projects/divinitiii/works/02-vertebrae-mutation-sleeve-black/media/vertebrae-renders.png",
      "/projects/divinitiii/works/02-vertebrae-mutation-sleeve-black/media/rhino-screenshot.png",
      "/projects/divinitiii/works/02-vertebrae-mutation-sleeve-black/media/silhouette-research.jpeg",
      "/projects/divinitiii/works/02-vertebrae-mutation-sleeve-black/media/human-skeleton-research.jpeg",
      "/projects/divinitiii/works/02-vertebrae-mutation-sleeve-black/media/error-1.png",
      "/projects/divinitiii/works/02-vertebrae-mutation-sleeve-black/media/error-2.png",
      "/projects/divinitiii/works/02-vertebrae-mutation-sleeve-black/media/error-message-1.png",
    ],
    assets: [
      {
        label: "60mm Revised (.stl)",
        href: "/projects/divinitiii/works/02-vertebrae-mutation-sleeve-black/docs/60mm-revised.stl",
      },
      {
        label: "60mm (.stl)",
        href: "/projects/divinitiii/works/02-vertebrae-mutation-sleeve-black/docs/60mm.stl",
      },
      {
        label: "70mm Revised (.stl)",
        href: "/projects/divinitiii/works/02-vertebrae-mutation-sleeve-black/docs/70mm-revised.stl",
      },
      {
        label: "70mm (.stl)",
        href: "/projects/divinitiii/works/02-vertebrae-mutation-sleeve-black/docs/70mm.stl",
      },
    ],
  },
  {
    code: "03",
    slug: "03-thorned-gorget",
    title: "Thorned Gorget",
    type: "Accessory / Neck System",
    status: "Process archive live",
    summary:
      "Black and white render variants with multipart fabrication files for jeweled and non-jeweled builds.",
    thumbnail: "/projects/divinitiii/works/03-thorned-gorget/media/white-necklace-front.png",
    media: [
      "/projects/divinitiii/works/03-thorned-gorget/media/black-necklace-back.png",
      "/projects/divinitiii/works/03-thorned-gorget/media/black-necklace-front.png",
      "/projects/divinitiii/works/03-thorned-gorget/media/white-necklace-back.png",
      "/projects/divinitiii/works/03-thorned-gorget/media/white-necklace-front.png",
    ],
    assets: [
      {
        label: "Top Part with Jewels (.3mf)",
        href: "/projects/divinitiii/works/03-thorned-gorget/docs/top-part-with-jewels.3mf",
      },
      {
        label: "Bottom Part with Jewels (.3mf)",
        href: "/projects/divinitiii/works/03-thorned-gorget/docs/bottom-part-with-jewels.3mf",
      },
      {
        label: "Bottom Left with Jewels (.stl)",
        href: "/projects/divinitiii/works/03-thorned-gorget/docs/bottom-part-left-with-jewels.stl",
      },
      {
        label: "Bottom Left no Jewels (.stl)",
        href: "/projects/divinitiii/works/03-thorned-gorget/docs/bottom-part-left-no-jewels.stl",
      },
      {
        label: "Bottom Right with Jewels (.stl)",
        href: "/projects/divinitiii/works/03-thorned-gorget/docs/bottom-part-right-with-jewels.stl",
      },
      {
        label: "Bottom Right no Jewels (.stl)",
        href: "/projects/divinitiii/works/03-thorned-gorget/docs/bottom-part-right-no-jewels.stl",
      },
    ],
  },
  {
    code: "04",
    slug: "04-dark-wing-choker",
    title: "Dark Wing Choker",
    type: "Accessory / Choker",
    status: "Process archive live",
    summary:
      "Angle studies and printable file development for a sculptural dark-wing neckpiece.",
    thumbnail: "/projects/divinitiii/works/04-dark-wing-choker/media/angle-2.png",
    media: [
      "/projects/divinitiii/works/04-dark-wing-choker/media/angle-1.png",
      "/projects/divinitiii/works/04-dark-wing-choker/media/angle-2.png",
      "/projects/divinitiii/works/04-dark-wing-choker/media/angle-3.png",
    ],
    assets: [
      {
        label: "Flo State Choker (.stl)",
        href: "/projects/divinitiii/works/04-dark-wing-choker/docs/flo-state-choker.stl",
      },
    ],
  },
  {
    code: "05",
    slug: "05-spined-stilettos",
    title: "Spined Stilettos",
    type: "Footwear / Heel Prototype",
    status: "Process archive live",
    summary:
      "Initial sketches, prototype imagery, and final render passes for spined heel development.",
    thumbnail: "/projects/divinitiii/works/05-spined-stilettos/media/prototype-1-image-2.jpg",
    media: [
      "/projects/divinitiii/works/05-spined-stilettos/media/initial-sketch.jpg",
      "/projects/divinitiii/works/05-spined-stilettos/media/prototype-1-image-2.jpg",
      "/projects/divinitiii/works/05-spined-stilettos/media/render-1.jpg",
      "/projects/divinitiii/works/05-spined-stilettos/media/render-2.png",
    ],
    assets: [
      {
        label: "Heels 7.5-8 (.stl)",
        href: "/projects/divinitiii/works/05-spined-stilettos/docs/heels-7.5-8.stl",
      },
    ],
  },
  {
    code: "06",
    slug: "06-core-research-archive",
    title: "Core Research Archive",
    type: "Reference / Process Foundation",
    status: "Archive live",
    summary:
      "Primary concept references and early process-book pages supporting the collection language.",
    thumbnail:
      "/projects/divinitiii/works/06-core-research-archive/media/research-book-process-1.png",
    media: [
      "/projects/divinitiii/works/06-core-research-archive/media/research-book-process-1.png",
      "/projects/divinitiii/works/06-core-research-archive/media/research-book-process-2.png",
      "/projects/divinitiii/works/06-core-research-archive/media/research-book-process-3.png",
      "/projects/divinitiii/works/06-core-research-archive/media/ref-main.jpg",
      "/projects/divinitiii/works/06-core-research-archive/media/ref-01.jpg",
      "/projects/divinitiii/works/06-core-research-archive/media/ref-02.jpg",
      "/projects/divinitiii/works/06-core-research-archive/media/ref-03.jpg",
      "/projects/divinitiii/works/06-core-research-archive/media/ref-04.jpg",
      "/projects/divinitiii/works/06-core-research-archive/media/ref-05.jpg",
      "/projects/divinitiii/works/06-core-research-archive/media/ref-06.jpg",
      "/projects/divinitiii/works/06-core-research-archive/media/ref-07.jpg",
      "/projects/divinitiii/works/06-core-research-archive/media/ref-08.jpg",
      "/projects/divinitiii/works/06-core-research-archive/media/ref-09.jpg",
      "/projects/divinitiii/works/06-core-research-archive/media/ref-10.jpg",
      "/projects/divinitiii/works/06-core-research-archive/media/ref-11.jpg",
      "/projects/divinitiii/works/06-core-research-archive/media/ref-12.jpg",
      "/projects/divinitiii/works/06-core-research-archive/media/ref-13.jpg",
      "/projects/divinitiii/works/06-core-research-archive/media/ref-14.jpg",
      "/projects/divinitiii/works/06-core-research-archive/media/ref-15.jpg",
      "/projects/divinitiii/works/06-core-research-archive/media/ref-16.jpg",
      "/projects/divinitiii/works/06-core-research-archive/media/ref-17.jpg",
      "/projects/divinitiii/works/06-core-research-archive/media/ref-18.jpg",
      "/projects/divinitiii/works/06-core-research-archive/media/ref-19.jpg",
      "/projects/divinitiii/works/06-core-research-archive/media/ref-20.jpg",
      "/projects/divinitiii/works/06-core-research-archive/media/ref-21.jpg",
      "/projects/divinitiii/works/06-core-research-archive/media/human-skeleton-anatomy.jpg",
      "/projects/divinitiii/works/06-core-research-archive/media/uuid-0263.jpg",
      "/projects/divinitiii/works/06-core-research-archive/media/uuid-0115.jpg",
      "/projects/divinitiii/works/06-core-research-archive/media/butterfly-or-human.jpg",
      "/projects/divinitiii/works/06-core-research-archive/media/gerrit-jacob-berlin-fall-2025.jpg",
      "/projects/divinitiii/works/06-core-research-archive/media/ice-platinum-barbie.jpg",
      "/projects/divinitiii/works/06-core-research-archive/media/illusion-futuristic-catsuit.jpg",
      "/projects/divinitiii/works/06-core-research-archive/media/initial-inspiration.jpg",
      "/projects/divinitiii/works/06-core-research-archive/media/making-shapes-1.jpg",
      "/projects/divinitiii/works/06-core-research-archive/media/making-shapes.jpg",
      "/projects/divinitiii/works/06-core-research-archive/media/parametrics-james-london-mills-2017.jpg",
      "/projects/divinitiii/works/06-core-research-archive/media/skeleton-monochrome-background.jpg",
      "/projects/divinitiii/works/06-core-research-archive/media/weiraen.jpg",
      "/projects/divinitiii/works/06-core-research-archive/media/initial-inspiration.jpeg",
      "/projects/divinitiii/works/06-core-research-archive/media/weiraen.jpeg",
      "/projects/divinitiii/works/06-core-research-archive/media/skeleton-monochrome-reference.jpeg",
    ],
    assets: [],
  },
];

