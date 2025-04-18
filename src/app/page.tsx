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
    <main className="min-h-screen bg-muted">
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

        {/* Cards */}
        <div className="flex-1 space-y-4">
          <div className="w-full flex justify-end mb-2">
            <ThemeToggle />
          </div>

          {projectCards.map((card, index) => {

            return (
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
            )
          })}
        </div>
      </div>

      <Footer />
      <FloatingBadge />
    </main>
  )
}
