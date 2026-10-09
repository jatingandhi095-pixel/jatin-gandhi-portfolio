export const navItems = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/experiments", label: "Experiments" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const featuredWork = [
  {
    title: "Beside",
    category: "Service ecosystem",
    summary:
      "A care-centered mobility platform that brings clarity to a fragile, emotional customer journey.",
    href: "/work/beside-case-study",
  },
  {
    title: "Used Car",
    category: "Retail experience",
    summary:
      "A more transparent way to buy a used car by reducing uncertainty and restoring trust.",
    href: "/work/used-car",
  },
  {
    title: "Shaolin Temple",
    category: "Cultural digital experience",
    summary:
      "A regenerative storytelling experience that invites people to engage with heritage in a contemporary way.",
    href: "/work/shaolin-temple",
  },
] as const;

export const caseStudies = [
  {
    title: "Beside case study",
    href: "/work/beside-case-study",
    summary:
      "A service ecosystem designed to reduce fear and restore confidence during a stressful transition.",
  },
  {
    title: "Used Car case study",
    href: "/work/used-car",
    summary:
      "Reframing trust in a retail journey shaped by uncertainty, negotiation, and emotional risk.",
  },
  {
    title: "Shaolin Temple case study",
    href: "/work/shaolin-temple",
    summary:
      "A digital experience that frames heritage with clarity, warmth, and a contemporary editorial rhythm.",
  },
] as const;

export const experimentEntries = [
  {
    number: "01",
    title: "Interaction studies",
    description: "Testing pacing, gestures, and micro-confirmation moments in interfaces.",
  },
  {
    number: "02",
    title: "Typographic explorations",
    description: "Exploring editorial rhythm, hierarchy, and expressive voice within digital systems.",
  },
  {
    number: "03",
    title: "Material experiments",
    description: "Probing tactile references, textures, and sensorial language for digital products.",
  },
] as const;
