"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Download, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function HeroSection() {
  return (
    <section className="py-20 md:py-32 hero-bg">
      <div className="container">
        <motion.div
          className="flex flex-col items-center text-center max-w-3xl mx-auto gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="responsive-heading" variants={itemVariants}>
            Hi, I'm <span className="gradient-text">Paresh Dhok</span>
          </motion.h1>

          <motion.p
            className="text-xl text-muted-foreground"
            variants={itemVariants}
          >
            Electronics and Communication Engineering Student with a passion for AI/ML, IoT, and Embedded Systems
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-4"
            variants={itemVariants}
          >
            <Button
              size="lg"
              asChild
              className="transition-all hover:scale-105 hover:shadow-lg"
            >
              <a href="#projects">
                View My Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="transition-all hover:scale-105 hover:shadow-md"
            >
              <a
                href="/Paresh_Resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
