"use client"

import React from "react"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { TrophyIcon } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

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
    <section id="achievements" className="py-16 md:py-24 bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-3xl font-bold mb-4"
            whileHover={{ scale: 1.02 }}
          >
            Achievements
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Separator className="mx-auto w-20 mb-8 bg-primary/80 h-[2px]" />
          </motion.div>
          <motion.p 
            className="text-lg text-muted-foreground mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Recognition and awards that showcase my technical abilities and commitment to excellence.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full group relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-6 flex flex-col gap-4">
                  <motion.div 
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  >
                    <motion.div
                      className="bg-primary/10 p-3 rounded-full"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                    >
                      <TrophyIcon className="h-6 w-6 text-primary" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                      <p className="text-muted-foreground">{achievement.description}</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="mt-4 overflow-hidden rounded-xl"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.4 }}
                  >
                    <Image
                      src={achievement.imagePath}
                      alt={achievement.imageAlt}
                      width={500}
                      height={300}
                      className="rounded-xl shadow-md object-cover transform transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </motion.div>
                </CardContent>

                {/* Animated background effect */}
                <motion.div 
                  className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
