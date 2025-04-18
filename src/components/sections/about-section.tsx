"use client"

import React from "react"
import { Separator } from "@/components/ui/separator"
import { FaGraduationCap } from "react-icons/fa"
import { motion } from "framer-motion"
import Image from "next/image"

const hoverCardVariants = {
  rest: { scale: 1, boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
  hover: {
    scale: 1.03,
    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.12)",
    transition: { duration: 0.3 },
  },
}

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/10">
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
          <p className="text-lg text-muted-foreground">
            I'm an Electronics and Communication Engineering student at MIT World Peace University,
            specializing in AI/ML. I’m passionate about building innovative solutions using AI/ML in Electronics,
            Software/Web Development, IoT, Embedded Systems, and Signal Processing.
          </p>
        </motion.div>

        {/* Profile Image and Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto"
          >
            <Image
              src="/Profile_Photo.jpg"
              alt="Profile Photo"
              width={300}
              height={300}
              className="rounded-2xl shadow-lg border border-muted-foreground"
            />
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={hoverCardVariants}
            whileHover="hover"
            whileTap="hover"
            animate="rest"
            className="bg-white dark:bg-card p-6 rounded-2xl shadow-md border transition-all col-span-2"
          >
            <h3 className="text-2xl font-semibold flex items-center gap-2 mb-6">
              <FaGraduationCap className="text-primary" /> Education
            </h3>
            <ul className="space-y-6">
              {[
                {
                  degree: "B.Tech in Electronics and Communication Engineering with AIML",
                  institute: "MIT World Peace University",
                  time: "Aug 2023 - May 2027"
                },
                {
                  degree: "Higher Secondary Certificate",
                  institute: "Gurukul Public School & Junior College Of Science",
                  time: "Aug 2020 - June 2022"
                },
                {
                  degree: "Secondary School Certificate",
                  institute: "Raisaheb Moti Sangai English School",
                  time: "June 2019 - April 2020"
                }
              ].map((edu, index) => (
                <li key={index} className="space-y-1">
                  <h4 className="text-lg font-medium">{edu.degree}</h4>
                  <p className="text-muted-foreground">{edu.institute}</p>
                  <p className="text-sm text-muted-foreground">{edu.time}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Positions of Responsibility */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <div className="bg-white dark:bg-card p-6 rounded-2xl shadow-md border transition-all">
            <h3 className="text-2xl font-semibold mb-6">Positions of Responsibility</h3>
            <ul className="space-y-8">
              <li>
                <h4 className="text-lg font-medium">Vice President and Founder</h4>
                <p className="text-muted-foreground">Student Club - Prismlabs, MIT-WPU</p>
                <p className="text-sm text-muted-foreground mb-2">Feb 2025 - Present</p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Led club expansion into hackathons, workshops & hands-on AI/ML, IoT training</li>
                  <li>Strategized marketing & recruitment to grow community reach</li>
                </ul>
              </li>
              <li>
                <h4 className="text-lg font-medium">SY Coordinator</h4>
                <p className="text-muted-foreground">Student Club - InsightAI, MIT-WPU</p>
                <p className="text-sm text-muted-foreground mb-2">July 2024 - Present</p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Collaborated with technical clubs to expand AI/ML opportunities</li>
                  <li>Managed second-year activities and event coordination</li>
                </ul>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
