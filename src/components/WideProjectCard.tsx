"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card"
import { ProjectType } from "@/lib/data/projects"
import Image from "next/image"

type Item = {
  name: string
  logo: string
  title?: string
  city?: string
  duration?: string
  details?: string
  url?: string
  badge?: {
    label: string
    variant?: "default" | "secondary" | "outline" | "destructive"
  }
}

type Props = {
  type: ProjectType
  title: string
  items: Item[]
}

export const WideProjectCard = ({ title, items, type }: Props) => {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const getImagePath = (logo: string) => {
    if (!mounted) return logo // fallback to light image on SSR
    if (resolvedTheme === "dark") {
      return logo.replace("/light/", "/dark/")
    }
    return logo
  }

  return (
    <Card className="w-full p-6 border-none shadow-sm bg-muted hover:bg-card/70 transition-all duration-300">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>

      {type === "job" ? (
        <div className="flex flex-col gap-4">
          {items.map((job, index) => {
            const content = (
              <div className="flex items-center gap-4">
                <Image
                  src={getImagePath(job.logo)}
                  alt={job.name}
                  width={48}
                  height={48}
                  className="rounded-lg object-contain"
                />
                <div>
                  <h4 className="text-base font-semibold">{job.title}</h4>
                  <p className="text-sm text-muted-foreground">{job.name} – {job.city}</p>
                  <p className="text-xs text-muted-foreground">{job.duration}</p>
                </div>
              </div>
            )

            return job.url ? (
              <a
                key={index}
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-[1.02] transition-transform"
              >
                {content}
              </a>
            ) : (
              <div key={index}>{content}</div>
            )
          })}
        </div>
      ) : (
        <div className="flex flex-wrap gap-6">
          {items.map((item, index) => {
            const content = (
              <div className="w-24 flex flex-col items-center cursor-pointer hover:scale-105 transition">
                {item.badge && (
                  <Badge
                    variant={item.badge.variant || "default"}
                    className="text-[10px] px-1.5 py-0.5 mb-2"
                  >
                    {item.badge.label}
                  </Badge>
                )}
                <div className="w-12 h-12 mb-2">
                  <Image
                    src={getImagePath(item.logo)}
                    alt={item.name}
                    width={48}
                    height={48}
                    className="rounded-lg object-contain w-full h-full"
                  />
                </div>
                <span className="text-xs text-center leading-tight break-words">
                  {item.name}
                </span>
              </div>
            )

            return (
              <HoverCard key={index}>
                <HoverCardTrigger asChild>
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </HoverCardTrigger>
                <HoverCardContent className="w-64 text-sm">{item.details}</HoverCardContent>
              </HoverCard>
            )
          })}
        </div>
      )}
    </Card>
  )
}
