"use client"

import React from "react"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { TrophyIcon } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image" // ✅ Suggested import added

interface Achievement {
  title: string
  description: string
  imagePath: string
  imageAlt: string
}

export function AchievementsSection() {
  const achievements: Achievement[] = [
    {
      title: "First Prize in PBL Project Competition",
      description: "Received first prize in Project Based Learning competition at MIT-WPU in First Year",
      imagePath: "/PBL_Prize.jpg",
      imageAlt: "PBL Project Competition Prize"
    },
    {
      title: "Appreciation Prize in HackMITWPU25 Hackathon",
      description: "Received appreciation prize in the Ideathon track of HackMITWPU25 hackathon",
      imagePath: "/Hackathon.jpg",
      imageAlt: "HackMITWPU25 Hackathon Prize"
    }
  ];

  return (
    <section id="achievements" className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Achievements</h2>
          <Separator className="mx-auto w-20 mb-8" />
          <p className="text-lg text-muted-foreground mb-6">
            Recognition and awards that showcase my technical abilities and commitment to excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6 flex flex-col gap-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <TrophyIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                      <p className="text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                  {/* ✅ Image Section */}
                  <div className="mt-4">
                    <Image
                      src={achievement.imagePath}
                      alt={achievement.imageAlt}
                      width={500}
                      height={300}
                      className="rounded-xl shadow-md object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
