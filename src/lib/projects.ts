import krussLogo from "@/assets/projects/kruss-real-estate-logo.webp";
import kruss3 from "@/assets/projects/kruss-real-estate-3.webp";
import kruss4 from "@/assets/projects/kruss-real-estate-4.webp";
import kruss5 from "@/assets/projects/kruss-real-estate-5.webp";
import kruss6 from "@/assets/projects/kruss-real-estate-6.webp";
import kruss7 from "@/assets/projects/kruss-real-estate-7.webp";
import mediaLogo from "@/assets/projects/media-wildfire-logo.webp";
import media2 from "@/assets/projects/media-wildfire-2.webp";
import media3 from "@/assets/projects/media-wildfire-3.webp";
import media5 from "@/assets/projects/media-wildfire-5.webp";
import media6 from "@/assets/projects/media-wildfire-6.webp";
import sonaraLogo from "@/assets/projects/sonara-budha-logo.webp";
import sonara2 from "@/assets/projects/sonara-budha-2.webp";
import sonara3 from "@/assets/projects/sonara-budha-3.webp";
import sonara5 from "@/assets/projects/sonara-budha-5.webp";
import sonara7 from "@/assets/projects/sonara-budha-7.webp";
import butterfly1 from "@/assets/projects/butterfly-pavilion-1.webp";
import butterfly2 from "@/assets/projects/butterfly-pavilion-2.webp";
import butterfly3 from "@/assets/projects/butterfly-pavilion-3.webp";
import china1 from "@/assets/projects/china-town-restaurant-1.webp";
import china2 from "@/assets/projects/china-town-restaurant-2.webp";
import china3 from "@/assets/projects/china-town-restaurant-3.webp";
import canopy0 from "@/assets/projects/canopy-credit-card-0.webp";

export const tagColors: Record<string, string> = {
  BRANDING: "bg-[#e0ad34]",
  "UI/UX": "bg-[#D9DAD9]",
  PACKAGING: "bg-[#cbaed3]",
  STATIONERY: "bg-[#f58127]",
  SIGNAGE: "bg-[#D9DAD9]",
  "WEB DESIGN": "bg-[#D9DAD9]",
  "APP DESIGN": "bg-[#D9DAD9]",
  "POSTER DESIGN": "bg-[#cbaed3]",
  "MENU DESIGN": "bg-[#f58127]",
};

export type ProjectImage = { src: string; alt: string };
export type ProjectSection = {
  title: string;
  description?: string[];
  pill?: string;
  palette?: { name: string; hex: string }[];
  images: ProjectImage[];
  /** Show images in a 2-column grid on desktop */
  grid?: boolean;
};
export type Project = {
  slug: string;
  title: string;
  summary: string;
  statement: string;
  year: string;
  scope: string[];
  software: string[];
  tags: string[];
  hero: ProjectImage;
  brief: string[];
  sections: ProjectSection[];
  cta: string;
};

export const projects: Project[] = [
  {
    slug: "kruss-real-estate",
    title: "Kruss Real Estate",
    summary: "A rebrand for Mombasa's premier real estate agency — logo, stationery and signage.",
    statement:
      "Kruss Real Estate is Mombasa's premier real estate agency, specializing in residential, commercial, and vacation properties.",
    year: "2026",
    scope: ["Branding", "Stationery", "Signage"],
    software: ["Illustrator", "Photoshop", "Figma"],
    tags: ["BRANDING", "STATIONERY", "SIGNAGE"],
    hero: { src: kruss4, alt: "Kruss Real Estate sign mounted on a building wall" },
    brief: [
      "The rebranding project was developed to modernize the company's visual identity while preserving the brand recognition and heritage established through its previous branding. The scope of the project included brand identity design, stationery systems, and signage applications.",
      "The goal was to create a refined identity that communicates trust, professionalism, and exclusivity while reflecting the agency's commitment to helping clients find exceptional properties. The new branding balances minimalism with symbolic storytelling.",
      "I was responsible for leading the creative direction and execution of the project, overseeing the entire process from conception to final delivery. Project duration: 6 weeks.",
    ],
    sections: [
      {
        title: "Logo",
        description: [
          "The updated logo for Kruss Real Estate embraces a refined, modern minimalism while honoring the brand's original identity. At its core is a stylized unicorn, an evolution of the previous unicorn head, serving as a subtle nod to the company's heritage. The unicorn, long associated with rarity and distinction, reflects the idea that every property and every client journey is unique.",
          "In this new interpretation, the unicorn is thoughtfully constructed to double as architectural form. The negative spaces between its legs are shaped into doorways, each topped with window elements, seamlessly blending the figure of the unicorn with the structure of a home.",
        ],
        images: [
          { src: krussLogo, alt: "Kruss Real Estate unicorn-house logo mark" },
          { src: kruss3, alt: "Kruss Real Estate logo and wordmark lockups" },
        ],
      },
      {
        title: "Stationery",
        pill: "BUSINESS CARDS",
        images: [{ src: kruss5, alt: "Kruss Real Estate business cards and stationery" }],
      },
      {
        title: "Icons & signage",
        images: [
          { src: kruss6, alt: "Kruss Real Estate location and property icons" },
          { src: kruss7, alt: "Kruss Real Estate billboards and signage mock-ups" },
        ],
      },
    ],
    cta: "Want a rebrand like this?",
  },
  {
    slug: "sonara-budha",
    title: "Sonara Budha",
    summary: "A rebrand for Kenya's leading jewelry store, with packaging rooted in Kenyan heritage.",
    statement:
      "Sonara Budha is Kenya's leading jewelry store, specializing in handcrafted pieces and custom designs that showcase cultural elegance and artistry.",
    year: "2024",
    scope: ["Branding", "Stationery", "Packaging"],
    software: ["Illustrator", "Photoshop"],
    tags: ["BRANDING", "STATIONERY", "PACKAGING"],
    hero: { src: sonara3, alt: "Sonara Budha orange and lilac shopping bag" },
    brief: [
      "Sonara Budha is a local Kenyan jewellery shop that is relatively affordable but offers luxurious products for any occasion. It was established in the 60s and remains one of the most popular jewellery places in the country.",
      "The objective: fully redesign the company branding to make it more simplistic and attractive, and redesign the business cards to attract new customers.",
    ],
    sections: [
      {
        title: "Logo",
        description: [
          "The logo for Sonara Budha integrates African heritage and the geographical significance of the company's roots. A stylized map of Kenya replaces the \u201cO\u201d in \u201cSonara,\u201d symbolizing the company's deep connection to the country and its commitment to sourcing materials locally.",
          "An alternative version of the logo features a map of Kenya with elevation levels that highlight the country's mountainous terrain — a direct reference to the areas the company sources its precious stones from.",
        ],
        palette: [
          { name: "Deep Saffron", hex: "#F6983E" },
          { name: "Leaf", hex: "#8BA03D" },
          { name: "Amethyst Smoke", hex: "#B08CBE" },
          { name: "White Smoke", hex: "#F5F6F7" },
        ],
        images: [
          { src: sonaraLogo, alt: "Sonara Budha Jewellers logo" },
          { src: sonara5, alt: "Sonara Budha alternative Kenya-map logo" },
        ],
      },
      {
        title: "Packaging",
        pill: "PATTERN",
        description: [
          "The packaging reflects the brand's identity and its roots — Kenya. The art features an illustrated bird of paradise flower, commonly seen in Kenya, used as a print throughout the whole brand for a consistent look. Minimalistic hand-drawn lines around the print represent jewelry's delicate and sophisticated look.",
        ],
        images: [
          { src: sonara2, alt: "Sonara Budha jewelry boxes with bird of paradise print" },
          { src: sonara7, alt: "Sonara Budha business card and pattern" },
        ],
      },
    ],
    cta: "Want a rebrand like this?",
  },
  {
    slug: "media-wildfire",
    title: "Media Wildfire",
    summary: "Branding and web design for a digital marketing agency built around a spark.",
    statement:
      "Media Wildfire is a dynamic digital marketing platform, specializing in website development, SEO, and strategic online growth.",
    year: "2026",
    scope: ["Branding", "Web Design"],
    software: ["Illustrator", "Photoshop", "Figma"],
    tags: ["BRANDING", "WEB DESIGN"],
    hero: { src: media3, alt: "Media Wildfire logo letterpressed on paper" },
    brief: [
      "Media Wildfire is an online marketing agency with more than a decade of experience managing pay-per-click campaigns on Google, Microsoft and Facebook, providing custom advertising and lead-generating services to businesses of all sizes.",
      "The brief was a warm, energetic identity and a website that carries it — built around the idea of a spark that spreads like a wildfire.",
    ],
    sections: [
      {
        title: "Logo",
        description: [
          "The Media Wildfire logo is designed with a sense of flow and continuity. A key feature is the transformation of the \u201ci\u201d in Media into the \u201cI\u201d of Wildfire, forming a visual bridge between the two words.",
          "This element doubles as a matchstick, symbolizing the spark that ignites every wildfire and reinforcing the brand's core idea of growth, energy and momentum. The warm palette evokes creativity and warmth, giving the logo a bold, memorable presence.",
        ],
        palette: [
          { name: "Tulip Tree", hex: "#F4AB3E" },
          { name: "Dark Byzantium", hex: "#5F3950" },
          { name: "Grey Olive", hex: "#635F55" },
          { name: "White Rock", hex: "#EFE6D3" },
        ],
        images: [
          { src: mediaLogo, alt: "Media Wildfire logo" },
          { src: media2, alt: "Media Wildfire logo variations" },
        ],
      },
      {
        title: "Website",
        pill: "WEB DESIGN",
        grid: true,
        images: [
          { src: media5, alt: "Media Wildfire homepage design" },
          { src: media6, alt: "Media Wildfire SEO service page design" },
        ],
      },
    ],
    cta: "Want a brand like this?",
  },
  {
    slug: "butterflies-of-kenya",
    title: "Butterflies of Kenya",
    summary: "An app and poster that identify butterfly species instantly from a photo.",
    statement:
      "Butterflies of Kenya lets you identify butterfly species instantly by taking a photo, showcasing the country's vibrant diversity.",
    year: "2024",
    scope: ["Branding", "App Design", "Poster Design"],
    software: ["Illustrator", "Photoshop", "Figma"],
    tags: ["BRANDING", "APP DESIGN", "POSTER DESIGN"],
    hero: { src: butterfly1, alt: "Butterflies of Kenya yellow butterfly illustration" },
    brief: [
      "In Kenya's vibrant landscapes, butterflies dance in a kaleidoscope of colour — from the striking Mocker Swallowtail to the radiant Danaid Eggfly.",
      "The app lets users browse the different species, read about each one, and identify butterflies simply by taking a picture of them.",
    ],
    sections: [
      {
        title: "App design",
        pill: "UI/UX",
        images: [{ src: butterfly2, alt: "Butterflies of Kenya app screens" }],
      },
      {
        title: "Poster",
        images: [{ src: butterfly3, alt: "Butterflies of Kenya poster" }],
      },
    ],
    cta: "Want something like this?",
  },
  {
    slug: "china-town-restaurant",
    title: "China Town Restaurant",
    summary: "Branding and menu design for a Chinese restaurant in Nigeria.",
    statement:
      "China Town is a Chinese restaurant located in Nigeria, offering authentic cuisine, memorable dining experiences, and innovative hospitality services.",
    year: "2023",
    scope: ["Branding", "Menu Design"],
    software: ["Illustrator", "Photoshop", "InDesign"],
    tags: ["BRANDING", "MENU DESIGN"],
    hero: { src: china1, alt: "China Town Restaurant logo on orange and dark backgrounds" },
    brief: [
      "China Town needed an identity that felt authentic and bold, carried consistently from the logo to the menus guests hold at the table.",
    ],
    sections: [
      {
        title: "Social media",
        images: [{ src: china2, alt: "China Town Restaurant social media profile" }],
      },
      {
        title: "Menu",
        pill: "MENU DESIGN",
        images: [{ src: china3, alt: "China Town Restaurant menu design" }],
      },
    ],
    cta: "Want a brand like this?",
  },
  {
    slug: "canopy-credit-card",
    title: "Canopy Credit Card",
    summary: "A website for a digital bank that turns everyday spending into environmental impact.",
    statement:
      "Canopy is a modern digital bank that transforms everyday spending into measurable environmental impact.",
    year: "2025",
    scope: ["Web Design", "UI/UX"],
    software: ["Figma", "Photoshop"],
    tags: ["UI/UX", "WEB DESIGN"],
    hero: { src: canopy0, alt: "Canopy credit card website design" },
    brief: [
      "Every Canopy purchase earns Seeds, which can be redeemed for rewards or used to support reforestation, pollinator habitats and community green spaces.",
      "The website explains how Canopy works, shows members their impact, and invites new members to join — banking that grows with every purchase.",
    ],
    sections: [],
    cta: "Want a website like this?",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
