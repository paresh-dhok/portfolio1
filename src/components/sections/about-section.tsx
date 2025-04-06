"use client"

import React from "react"
import { Separator } from "@/components/ui/separator"
import { FaGraduationCap } from "react-icons/fa"
import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <Separator className="mx-auto w-20 mb-8" />
          <p className="text-lg text-muted-foreground mb-6">
            I'm an Electronics and Communication Engineering student at MIT World Peace University,
            specializing in AI/ML. I have a passion for developing innovative solutions
            in IoT, embedded systems, and signal processing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Education</h3>
            <ul className="space-y-6">
              <li className="flex space-x-4">
                <div className="mt-1 bg-primary/10 p-2 rounded-full">
                  <FaGraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">B.Tech in Electronics and Communication Engineering with AIML</h4>
                  <p className="text-muted-foreground">MIT World Peace University</p>
                  <p className="text-sm text-muted-foreground">Aug 2023 - May 2027</p>
                </div>
              </li>
              <li className="flex space-x-4">
                <div className="mt-1 bg-primary/10 p-2 rounded-full">
                  <FaGraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Higher Secondary Certificate</h4>
                  <p className="text-muted-foreground">Gurukul Public School & Junior College Of Science</p>
                  <p className="text-sm text-muted-foreground">Aug 2020 - June 2022</p>
                </div>
              </li>
              <li className="flex space-x-4">
                <div className="mt-1 bg-primary/10 p-2 rounded-full">
                  <FaGraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Secondary School Certificate</h4>
                  <p className="text-muted-foreground">Raisaheb Moti Sangai English School</p>
                  <p className="text-sm text-muted-foreground">June 2019 - April 2020</p>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Positions of Responsibility</h3>
            <ul className="space-y-6">
              <li>
                <h4 className="text-lg font-medium">Vice President and Founder</h4>
                <p className="text-muted-foreground">Student Club - prismlabs MIT-WPU</p>
                <p className="text-sm text-muted-foreground">February 2025 - Present</p>
                <ul className="list-disc list-inside mt-2 text-sm text-muted-foreground space-y-1">
                  <li>Led the club's expansion, participating in hackathons, technical workshops, and hands-on training for students in AI/ML, IoT, and Embedded Systems</li>
                  <li>Pioneered recruitment and branding, growing the club's presence through strategic marketing campaigns, workshops, and hackathons</li>
                </ul>
              </li>
              <li className="mt-6">
                <h4 className="text-lg font-medium">SY Coordinator</h4>
                <p className="text-muted-foreground">Student Club - InsightAI MIT-WPU</p>
                <p className="text-sm text-muted-foreground">July 2024 - Present</p>
                <ul className="list-disc list-inside mt-2 text-sm text-muted-foreground space-y-1">
                  <li>Facilitate collaborations between Insight AI and other technical clubs, expanding opportunities for AI/ML enthusiasts</li>
                  <li>Coordinating club activities among second year students</li>
                </ul>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
