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
      image: "/Signal_Generator.jpg"
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
    },
    {
      title: "Smart Auto Park",
      description: "Autonomous vehicle parking system using ultrasonic sensors and motors",
      techStack: ["Embedded C", "Arduino", "Ultrasonic Sensors", "DC Motors"],
      period: "July 2024 - August 2024",
      highlights: [
        "Developed an autonomous vehicle parking system using ultrasonic sensors for distance measurement",
        "Integrated DC motors and an Arduino to control the movement of the vehicle for accurate parking",
        "Implemented real-time decision-making for parking space detection and automated vehicle positioning"
      ],
      githubLink: "https://github.com/paresh-dhok/Smart-Auto-Park",
      image: "/Smart_Auto_Park.jpg"
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
                        >
                          <Badge variant="secondary" className="text-sm">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                </CardHeader>
                <CardContent className="relative flex-grow">
                  <div className="w-full aspect-w-16 aspect-h-9 relative">
                    {project.image && (
                      <Image
                        src={project.image}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    )}
                  </div>
                </CardContent>
                <CardFooter className="mt-4">
                  {project.githubLink && (
                    <Button
                      as="a"
                      href={project.githubLink}
                      target="_blank"
                      variant="link"
                      className="flex items-center text-primary font-semibold"
                    >
                      <FaGithub className="mr-2" />
                      View on GitHub
                    </Button>
                  )}
                  {project.video && (
                    <Button
                      as="a"
                      href={project.video}
                      target="_blank"
                      variant="link"
                      className="ml-2 text-primary font-semibold"
                    >
                      Watch Video
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
