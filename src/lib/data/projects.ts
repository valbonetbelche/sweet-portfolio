export type ProjectType = "personal" | "freelance" | "job";

export interface ProjectCardItem {
  type: ProjectType;
  title: string;
  items: {
    name: string;
    logo: string;
    url?: string;
    details?: string; // for personal/freelance
    badge?: {
      label: string;
      variant?: "default" | "secondary" | "outline" | "destructive";
    };
    // job-specific optional fields
    jobTitle?: string;
    city?: string;
    duration?: string;
  }[];
}

export const projectCards: ProjectCardItem[] = [
  {
    type: "personal",
    title: "Personal Projects",
    items: [
      {
        name: "NextFuture",
        details: "My future project",
        logo: "/logos/light/future.png",
        badge: { label: "Coming Soon", variant: "secondary" },
      },
      {
        name: "TurboBoost",
        details: "A turbo app. For fast people",
        logo: "/logos/light/turbo.png",
        badge: { label: "🎉 Exited", variant: "secondary" },
      },
    ],
  },
  {
    type: "freelance",
    title: "Freelance Projects",
    items: [
      {
        name: "Jeans Lawn",
        details: "Website",
        logo: "/logos/light/jeans.png",
      },
    ],
  },
  {
    type: "job",
    title: "Jobs",
    items: [
      {
        name: "Google",
        jobTitle: "Backend Engineer",
        city: "Seattle, WA",
        duration: "2022 – Present",
        logo: "/logos/light/google.webp",
        url: "https://google.com",
      },
      {
        name: "Amazon",
        jobTitle: "Full-Stack Engineer",
        city: "Seattle, WA",
        duration: "2012 – 2022",
        logo: "/logos/light/amazon.png",
        url: "https://amazon.com",
      },
      {
        name: "Domino's",
        jobTitle: "Cook",
        city: "Los Angeles, CA",
        duration: "2008 – 2012",
        logo: "/logos/light/dominos.png",
        url: "https://dominos.com",
      },
    ],
  },
];
