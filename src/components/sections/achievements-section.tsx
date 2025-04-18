"use client"

import React, { useState } from "react"
import { Separator } from "@/components/ui/separator"
import { FaGraduationCap } from "react-icons/fa"
import { motion } from "framer-motion"
import Image from "next/image"

const hoverCardVariants = {
  rest: { scale: 1, boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
  hover: {
    scale: 1.03,
    boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
    transition: { duration: 0.3 },
  },
}

const slideUpFade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
}

export function AboutSection() {
  const [imageLoaded, setImageLoaded] = useState(false)

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Image with animation fallback */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            {!imageLoaded && (
              <div className="w-[300px] h-[300px] flex items-center justify-center">
                <dotlottie-player
                  src="https://lottie.host/4c47cb5a-8e72-4ab8-b1f9-8b8583277759/0APoeU3CR3.lottie"
                  background="transparent"
                  speed="1"
                  style={{ width: "300px", height: "300px" }}
                  loop
                  autoplay
                ></dotlottie-player>
              </div>
            )}
            <Image
              src="/Profile_Photo.jpg"
              alt="Profile Photo"
              width={300}
              height={300}
              className={`rounded-2xl shadow-xl border border-muted-foreground transition-opacity duration-300 ${
                imageLoaded ? "opacity-100" : "opacity-0 absolute"
              }`}
              onLoad={() => setImageLoaded(true)}
            />
          </motion.div>

          {/* Education Card */}
          <motion.div
            variants={hoverCardVariants}
            initial="rest"
            whileHover="hover"
            whileTap="hover"
            animate="rest"
            className="bg-white dark:bg-card p-6 rounded-2xl shadow-md border transition-all col-span-2"
          >
            <motion.h3
              className="text-2xl font-semibold flex items-center gap-2 mb-6"
              variants={slideUpFade}
              initial="hidden"
              whileInView="visible"
              custom={0}
              viewport={{ once: true }}
            >
              <FaGraduationCap className="text-primary" /> Education
            </motion.h3>
            <ul className="space-y-6">
              {[...yourEducationArrayHere].map((edu, index) => (
                <motion.li
                  key={index}
                  className="space-y-1"
                  variants={slideUpFade}
                  initial="hidden"
                  whileInView="visible"
                  custom={index + 1}
                  viewport={{ once: true }}
                >
                  <h4 className="text-lg font-medium">{edu.degree}</h4>
                  <p className="text-muted-foreground">{edu.institute}</p>
                  <p className="text-sm text-muted-foreground">{edu.time}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Roles Section – (Unchanged) */}
        {/* ... Keep the rest of your existing code here ... */}
      </div>
    </section>
  )
}
