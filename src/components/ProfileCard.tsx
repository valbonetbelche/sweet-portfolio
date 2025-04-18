"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Globe, MapPin } from "lucide-react"
import { profile } from "@/lib/data/profile"
import ContactForm from "@/components/ContactForm"

const icons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  globe: Globe,
}

export default function ProfileCard() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [expanded, setExpanded] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect()
      const x = e.clientX - left
      const y = e.clientY - top
      const rotateY = ((x - width / 2) / width) * 20
      const rotateX = ((height / 2 - y) / height) * 20

      container.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }

    const handleMouseEnter = () => {
      container.style.transition = "transform 0.1s ease"
    }

    const handleMouseLeave = () => {
      container.style.transition = "transform 0.5s ease"
      container.style.transform = `rotateX(0deg) rotateY(0deg)`
    }

    container.addEventListener("mousemove", handleMouseMove)
    container.addEventListener("mouseenter", handleMouseEnter)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
      container.removeEventListener("mouseenter", handleMouseEnter)
      container.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div className="perspective-[1200px] group lg:sticky lg:top-10 max-w-sm mx-auto">
      <div
        ref={containerRef}
        className="relative transition-transform duration-300 ease-in-out rounded-xl"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Fading background overlay */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-muted/60 z-0" />

        <Card className="bg-transparent border-none shadow-none relative z-10">
          <CardContent className="p-6 flex flex-col items-center space-y-4">
            <Avatar className="w-24 h-24">
              <AvatarImage src={profile.avatar} alt={profile.name} />
              <AvatarFallback>{profile.name.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>

            <div className="text-center">
              <h1 className="text-2xl font-bold">{profile.name}</h1>
              <p className="text-muted-foreground flex items-center justify-center gap-1">
                <MapPin className="w-4 h-4" />
                {profile.location}
              </p>
              <p className="text-muted-foreground text-sm">{profile.email}</p>
            </div>

            <p className="text-sm text-center italic">{profile.quote}</p>

            <div className="flex gap-4">
              {profile.socials.map((social, index) => {
                const Icon = icons[social.icon as keyof typeof icons]
                return (
                  <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon">
                      <Icon className="h-5 w-5" />
                    </Button>
                  </a>
                )
              })}
            </div>

            <Button
              variant="ghost"
              className="w-full"
              onClick={() => setExpanded((prev) => !prev)}
            >
              {expanded ? "Close Contact Form" : "Get in touch"}
            </Button>

            {mounted && expanded && (
              <ContactForm onSuccess={() => setExpanded(false)} />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
