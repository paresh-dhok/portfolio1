"use client"

import React from "react"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FaGithub } from "react-icons/fa"
import { motion } from "framer-motion"
import Image from "next/image"

interface Project {
  title: string
  description: string
  techStack: string[]
  period: string
  highlights: string[]
  githubLink?: string
  image?: string
  video?: string
}

export function ProjectsSection() {
  const projects: Project[] = [
  {
    title: "MoodE",
    description: "AI-driven ambient mood adaptation system",
    techStack: ["Python", "Embedded C", "TensorFlow", "OpenCV"],
    period: "February 2024 - Present",
    highlights: [
      "Developed an AI-driven system that adapts room ambiance based on the user's mood, including music, lighting",
      "Integrated Arduino and IoT components to control smart lights, speakers, and aroma diffusers using Intel OpenVino"
    ],
    githubLink: "https://github.com/paresh-dhok/MoodE",
    image: "/MoodE.jpeg"
  },
  {
    title: "Scout Rover",
    description: "Wireless controlled rover with advanced sensing capabilities",
    techStack: ["Python", "Embedded C", "MATLAB"],
    period: "September 2024 - November 2024",
    highlights: [
      "Designed a wireless control system to operate the Scout Rover using a gamepad for variable speed control and directional movement",
      "Integrated ultrasonic sensors, IR sensors, and MPU6050 for obstacle avoidance and motion stability with gas and temperature sensors, plus a LiDAR sensor to scan surroundings and generate 2D maps in MATLAB"
    ],
    githubLink: "https://github.com/paresh-dhok/Scout-Rover",
    image: "/Scout_Rover.jpg"
  },
  {
    title: "Smart Autoprak",
    description: "Smart parking system with dynamic pricing and live streaming",
    techStack: ["Python", "SCADA", "OpenCv","FUZZY"],
    period: "April 2025 - Present",
    highlights: [
      "Pricing changes with availiablity, live streaming of the sensor data and complete app for flexiblity ",
      "An unique SCADA interface for simplified understanding"
    ],
    githubLink: "https://github.com/paresh-dhok/HAS_TO_BE+CHANGED",
    image: "Screenshot (65).png"
  },
  {
    title: "JARVIS",
    description: "Offline voice-controlled home automation system",
    techStack: ["Python", "Embedded C", "Google TTS Framework"],
    period: "March 2024 - April 2024",
    highlights: [
      "Built an offline voice-controlled system to operate home automation devices without needing internet",
      "Developed a custom voice control system that allows users to modify voice commands for each action"
    ],
    githubLink: "https://github.com/paresh-dhok/Jarvis",
    image: "/Jarvis.jpeg"
  },
  {
    title: "Signal Generator",
    description: "Visualization and analysis tool for modulation techniques",
    techStack: ["Python", "Plotly", "Flask", "scikit-learn", "Dash"],
    period: "January 2025 - Present",
    highlights: [
      "Designed a signal generation system to visualize and analyze different modulation techniques in real time",
      "Implemented AM (DSBSC, DSBFC, SSB), FM and PM in Python for visualization"
    ],
    githubLink: "https://github.com/paresh-dhok/Signal-Generator",
    image: "/WhatsApp Image 2025-05-13 at 2.01.57 PM.jpeg"
  },
  {
    title: "Home Automation System",
    description: "Mobile-controlled home automation solution",
    techStack: ["Embedded C"],
    period: "September 2023 - November 2023",
    highlights: [
      "Designed and developed a home automation system with mobile-controlled operations using ESP8266",
      "Implemented automatic garage gate control using a Wi-Fi-based system for seamless entry and exit"
    ],
    githubLink: "https://github.com/paresh-dhok/Home-Automation",
    video: "/Home_Automation.mp4"
  }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { 
        delay: i * 0.05 + 0.3,
        type: "spring",
        stiffness: 150
      }
    })
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1 + 0.4,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-gradient-to-b from-background via-secondary/10 to-background">
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
            transition={{ type: "spring", stiffness: 200 }}
          >
            Projects
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "anticipate" }}
          >
            <Separator className="mx-auto w-20 mb-8 bg-primary/80 h-[2px]" />
          </motion.div>
          <motion.p 
            className="text-lg text-muted-foreground mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, ease: "easeInOut" }}
          >
            Explore my projects showcasing expertise in embedded systems, IoT, and AI/ML.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card className="h-full flex flex-col group relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <CardTitle className="text-xl font-semibold tracking-tight">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="mt-2 text-muted-foreground/80">
                      {project.description}
                    </CardDescription>
                    <motion.div className="flex flex-wrap gap-2 mt-3">
                      {project.techStack.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          variants={badgeVariants}
                          custom={techIndex}
                          initial="hidden"
                          whileInView="visible"
                        >
                          <Badge 
                            variant="secondary" 
                            className="text-xs font-medium bg-muted/50 hover:bg-muted/70 transition-colors"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                </CardHeader>

                <CardContent className="flex-grow">
                  {(project.image || project.video) && (
                    <motion.div
                      className="relative overflow-hidden rounded-lg mb-4 aspect-video"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={600}
                          height={400}
                          className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <video 
                          controls 
                          className="w-full h-full object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-105"
                        >
                          <source src={project.video} type="video/mp4" />
                        </video>
                      )}
                    </motion.div>
                  )}

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <p className="text-sm text-muted-foreground/90 mb-4 font-medium">
                      {project.period}
                    </p>
                    <ul className="space-y-3">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <motion.li
                          key={highlight.substring(0, 30)}
                          variants={listItemVariants}
                          custom={highlightIndex}
                          className="text-sm text-muted-foreground/80 leading-relaxed pl-4 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-primary/80 before:rounded-full"
                        >
                          {highlight}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </CardContent>

                {project.githubLink && (
                  <CardFooter className="pt-0 px-6 pb-6">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="gap-2 w-full transition-all hover:bg-primary/10 hover:text-primary border-muted-foreground/30"
                        asChild
                      >
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="group"
                        >
                          <motion.span 
                            whileHover={{ rotate: [0, -10, 10, 0] }}
                            transition={{ duration: 0.4 }}
                          >
                            <FaGithub className="h-4 w-4 transition-transform group-hover:scale-110" />
                          </motion.span>
                          <span className="transition-transform group-hover:translate-x-1">
                            View on GitHub
                          </span>
                        </a>
                      </Button>
                    </motion.div>
                  </CardFooter>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
