"use client"

import { motion } from "framer-motion"
import ProfileCard from "@/components/ProfileCard"
import { WideProjectCard } from "@/components/WideProjectCard"
import { projectCards } from "@/lib/data/projects"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import FloatingBadge from "@/components/FloatingBadge"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg">
      <div className="mx-auto flex max-w-7xl flex-col lg:flex-row p-6 gap-8">
        {/* Profile card */}
        <motion.div
          className="lg:w-1/3"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <ProfileCard />
        </motion.div>

        {/* Cards section */}
        <div className="flex-1 space-y-4">
          {/* Desktop theme toggle */}
          <div className="hidden lg:flex w-full justify-end mb-2">
            <ThemeToggle />
          </div>

          {/* Wide project cards */}
          {projectCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 + index * 0.1 }}
            >
              <WideProjectCard
                type={card.type}
                title={card.title}
                items={card.items}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
      <FloatingBadge />

      {/* Mobile floating theme toggle as FAB */}
      <div className="fixed bottom-4 right-4 z-50 lg:hidden">
      <div className="fixed bottom-4 right-4 z-50 lg:hidden">
  <ThemeToggle />
</div>
      </div>
    </main>
  )
}
