"use client"

import React from "react"
import { Separator } from "@/components/ui/separator"
import { FaGraduationCap } from "react-icons/fa"
import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <Separator className="mx-auto w-20 mb-6" />
          <p className="text-lg text-muted-foreground">
            I'm an Electronics and Communication Engineering student at MIT World Peace University,
            specializing in AI/ML. I have a passion for developing innovative solutions
            in AIML and its applications in Software/Web Development, IoT, Embedded Systems, and Signal Processing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6">🎓 Education</h3>
            <div className="space-y-6">
              {[
                {
                  title: "B.Tech in Electronics and Communication Engineering with AIML",
                  subtitle: "MIT World Peace University",
                  date: "Aug 2023 - May 2027"
                },
                {
                  title: "Higher Secondary Certificate",
                  subtitle: "Gurukul Public School & Junior College Of Science",
                  date: "Aug 2020 - June 2022"
                },
                {
                  title: "Secondary School Certificate",
                  subtitle: "Raisaheb Moti Sangai English School",
                  date: "June 2019 - April 2020"
                }
              ].map((edu, i) => (
                <div key={i} className="bg-background rounded-2xl shadow-md p-5 flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <FaGraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{edu.title}</h4>
                    <p className="text-muted-foreground">{edu.subtitle}</p>
                    <p className="text-sm text-muted-foreground">{edu.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Positions of Responsibility */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-6">🧩 Positions of Responsibility</h3>
            <div className="space-y-8">
              <div className="bg-background rounded-2xl shadow-md p-5">
                <h4 className="text-lg font-semibold">Vice President and Founder</h4>
                <p className="text-muted-foreground">Student Club - Prismlabs MIT-WPU</p>
                <p className="text-sm text-muted-foreground mb-2">February 2025 - Present</p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Led the club's expansion through hackathons and technical workshops</li>
                  <li>Pioneered recruitment and branding via strategic outreach</li>
                </ul>
              </div>

              <div className="bg-background rounded-2xl shadow-md p-5">
                <h4 className="text-lg font-semibold">SY Coordinator</h4>
                <p className="text-muted-foreground">Student Club - InsightAI MIT-WPU</p>
                <p className="text-sm text-muted-foreground mb-2">July 2024 - Present</p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Facilitated collaboration with other technical clubs</li>
                  <li>Organized AI/ML activities for second-year students</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
