"use client"

import React from "react"
import { Separator } from "@/components/ui/separator"
import { FaGraduationCap, FaUsers } from "react-icons/fa"
import { motion } from "framer-motion"
import Image from "next/image"

interface Position {
  title: string
  org: string
  time: string
  points: string[]
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  },
  hover: {
    y: -5,
    scale: 1.02,
    transition: { duration: 0.3 }
  }
}

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
}

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-background via-muted/10 to-background">
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl font-bold mb-4"
            whileHover={{ scale: 1.02 }}
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Separator className="mx-auto w-20 mb-8 bg-primary/80 h-[2px]" />
          </motion.div>
          <motion.p 
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            I'm an Electronics and Communication Engineering student at MIT World Peace University,
            specializing in AI/ML. I’m passionate about building innovative solutions using AI/ML in Electronics,
            Software/Web Development, IoT, Embedded Systems, Signal Processing.
          </motion.p>
        </motion.div>

        {/* ProfileImage and Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 150 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <Image
              src="/Profile_Photo.jpg"
              alt="Profile Photo"
              width={400}
              height={400}
              className="rounded-2xl shadow-xl border-2 border-muted-foreground/20 w-full h-auto"
              priority
            />
          </motion.div>

          {/* Education Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            className="bg-card p-6 rounded-2xl shadow-lg border border-muted-foreground/20 col-span-2 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
            <motion.h3
              className="text-2xl font-semibold flex items-center gap-3 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.span 
                className="p-2 bg-primary/10 rounded-lg"
                whileHover={{ rotate: [0, -10, 10, 0] }}
              >
                <FaGraduationCap className="text-primary h-6 w-6" />
              </motion.span>
              Education
            </motion.h3>
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
                <motion.li
                  key={index}
                  className="space-y-1 relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-primary/80 before:rounded-full"
                  variants={listItemVariants}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <h4 className="text-lg font-medium">{edu.degree}</h4>
                  <p className="text-muted-foreground">{edu.institute}</p>
                  <p className="text-sm text-muted-foreground/80">{edu.time}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Positions of Responsibility */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true }}
          className="mt-12"
        >
          <motion.div
            className="bg-card p-6 rounded-2xl shadow-lg border border-muted-foreground/20 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
            <motion.h3
              className="text-2xl font-semibold flex items-center gap-3 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.span 
                className="p-2 bg-primary/10 rounded-lg"
                whileHover={{ rotate: [0, -10, 10, 0] }}
              >
                <FaUsers className="text-primary h-6 w-6" />
              </motion.span>
              Positions of Responsibility
            </motion.h3>
            <ul className="space-y-8">
              {[
                {
                  title: "Vice President and Founder",
                  org: "Student Club - Prismlabs, MIT-WPU",
                  time: "Feb 2025 - Present",
                  points: [
                    "Led club expansion into hackathons, workshops & hands-on AI/ML, IoT training",
                    "Strategized marketing & recruitment to grow community reach",
                  ],
                },
                {
                  title: "SY Coordinator",
                  org: "Student Club - InsightAI, MIT-WPU",
                  time: "July 2024 - Present",
                  points: [
                    "Collaborated with technical clubs to expand AI/ML opportunities",
                    "Managed second-year activities and event coordination",
                  ],
                },
              ].map((role: Position, index) => (
                <motion.li
                  key={index}
                  className="space-y-4"
                  variants={listItemVariants}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="space-y-1 relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-primary/80 before:rounded-full">
                    <h4 className="text-lg font-medium">{role.title}</h4>
                    <p className="text-muted-foreground">{role.org}</p>
                    <p className="text-sm text-muted-foreground/80">{role.time}</p>
                  </div>
                  <ul className="list-disc list-inside space-y-2 pl-4">
                    {role.points.map((point, i) => (
                      <motion.li
                        key={i}
                        className="text-muted-foreground/80 relative pl-4 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-primary/80 before:rounded-full"
                        variants={listItemVariants}
                        custom={i + 0.5}
                        initial="hidden"
                        whileInView="visible"
                      >
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
