"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Download, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  },
}

const nameVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export function HeroSection() {
  return (
    <section className="py-20 md:py-36 hero-bg bg-gradient-to-b from-background via-muted/10 to-background">
      <div className="container">
        <motion.div
          className="flex flex-col items-center text-center max-w-3xl mx-auto gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.15]"
            variants={itemVariants}
          >
            Hi, I'm{" "}
            <motion.span
              className="inline-block bg-gradient-to-r from-primary via-blue-600 to-purple-500 bg-clip-text text-transparent"
              variants={nameVariant}
              whileHover={{
                scale: [1, 1.02, 1],
                transition: { duration: 0.6, ease: "easeInOut" }
              }}
            >
              Paresh Dhok
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed"
            variants={itemVariants}
          >
            Electronics and Communication Engineering Student with a passion for{" "}
            <span className="bg-gradient-to-r from-primary/90 to-blue-500 bg-clip-text text-transparent font-medium">
              AI/ML, IoT, and Embedded Systems
            </span>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-6"
            variants={itemVariants}
          >
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                asChild
                className="group transition-all hover:shadow-lg bg-gradient-to-br from-primary to-blue-600 text-white"
              >
                <a href="#projects">
                  View My Projects
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="transition-all hover:shadow-md border-muted-foreground/30 hover:border-primary/50"
              >
                <a
                  href="/Paresh_Resume.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-4 w-4 group-hover:translate-y-[-1px] transition-transform" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
