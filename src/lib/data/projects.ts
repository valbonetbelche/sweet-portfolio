export type ProjectType = "personal" | "freelance" | "job"

export interface ProjectCardItem {
  type: ProjectType
  title: string
  items: {
    name: string
    logo: string
    url?: string
    details?: string // for personal/freelance
    badge?: {
      label: string
      variant?: "default" | "secondary" | "outline" | "destructive"
    }
    // job-specific optional fields
    jobTitle?: string
    city?: string
    duration?: string
  }[]
}

export const projectCards: ProjectCardItem[] = [
  {
    type: "personal",
    title: "Personal Projects",
    items: [
      {
        name: "Faststack.dev",
        details: "Saas boilerplate and deployment starter – coming soon",
        logo: "/logos/light/faststack.png",
        badge: { label: "Coming Soon", variant: "secondary" },
      },
      {
        name: "Kalend",
        details: "Booking system – coming soon",
        logo: "/logos/light/kalend.png",
        badge: { label: "Coming Soon", variant: "secondary" },
      },
      {
        name: "Appaway",
        details: "App builder for small businesses – exited",
        logo: "/logos/light/appaway.png",
        url: "https://bubble.io",
        badge: { label: "🎉 Exited", variant: "secondary" },
      },
    ],
  },
  {
    type: "freelance",
    title: "Freelance Projects",
    items: [
      {
        name: "Capital Partners Law",
        details: "Consulting for Internal automated communication Platform",
        logo: "/logos/light/cplfirm.png",
        url: "https://www.cplfirm.com/",
      },
      {
        name: "OYYA Labs",
        details: "Backend Integrations for Medical Tech",
        logo: "/logos/light/oyya.png",
        url: "https://oyya.fr",
      },
      {
        name: "Encounter Ministries",
        details: "Stripe Payments Integration Consulting",
        logo: "/logos/light/encounter.png",
        url: "https://encounterministries.us/",
      },
      {
        name: "DarlingsMusicLessons",
        details: "Music teaching Frontend",
        logo: "/logos/light/darling.webp",
        url: "https://darlingsmusiclessons.com",
      },
      {
        name: "Hope Free",
        details: "Church website",
        logo: "/logos/light/hope.png",
        url: "https://hopefree.org",
      },
    ],
  },
  {
    type: "job",
    title: "Jobs",
    items: [
      {
        name: "Amadeus",
        jobTitle: "Senior Big Data DevOps & SRE Engineer",
        city: "Nice, France",
        duration: "2025 – Present",
        logo: "/logos/light/amadeus.png",
        url: "https://amadeus.com",
      },
      {
        name: "Appaway",
        jobTitle: "Founder & Lead Developer",
        city: "Remote",
        duration: "2023 – 2024",
        logo: "/logos/light/appaway.png",
        url: "https://bubble.io",
      },
      {
        name: "Walters",
        jobTitle: "IT Manager & Lead Engineer",
        city: "Harrisburg, PA",
        duration: "2021 – 2023",
        logo: "/logos/light/walters.png",
        url: "https://waltersservicesinc.com",
      },
      {
        name: "Lumapps (Axel)",
        jobTitle: "Backend Engineer",
        city: "Paris, France",
        duration: "2020 – 2021",
        logo: "/logos/light/lumapps.svg",
        url: "https://www.lumapps.com/platform/lumapps-journeys",
      },
      {
        name: "Wikicampers",
        jobTitle: "Frontend Developer",
        city: "Biarritz, France",
        duration: "2019 – 2020",
        logo: "/logos/light/wikicampers.svg",
        url: "https://wikicampers.fr",
      },
    ],
  },
]
