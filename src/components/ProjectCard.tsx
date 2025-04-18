"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

type ProjectCardProps = {
  title: string
  description: string
  url: string
  image: string // e.g. "/logos/amadeus.png"
}

export const ProjectCard = ({ title, description, url, image }: ProjectCardProps) => {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render until mounted to avoid mismatch
  if (!mounted) return null

  const imagePath =
    resolvedTheme === "dark"
      ? image.replace(/(\.\w+)$/, "-dark$1") // swap to -dark.png
      : image

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-[1.02] transition-transform duration-200"
    >
      <Card className="p-4 space-y-2 hover:bg-secondary/70">
        <CardContent className="flex items-center space-x-4">
          <img src={"/logos/amadeus-dark.png"} alt={title} className="w-10 h-10 object-cover rounded" />
          <div>
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </CardContent>
      </Card>
    </a>
  )
}
