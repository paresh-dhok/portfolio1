"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Download, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="py-20 md:py-32 hero-bg">
      <div className="container">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-6">
          <motion.h1
            className="responsive-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I'm <span className="gradient-text">Paresh Dhok</span>
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Electronics and Communication Engineering Student with a passion for AI/ML, IoT, and Embedded Systems
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button size="lg" asChild>
              <a href="#projects">
                View My Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/paresh-dhok-resume.txt" download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
