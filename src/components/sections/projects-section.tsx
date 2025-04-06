"use client"

import React from "react"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FaGithub } from "react-icons/fa"
import { motion } from "framer-motion"

interface Project {
  title: string
  description: string
  techStack: string[]
  period: string
  highlights: string[]
  githubLink?: string
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
      githubLink: "https://github.com/pareshdhok"
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
      githubLink: "https://github.com/pareshdhok"
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
      githubLink: "https://github.com/pareshdhok"
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
      githubLink: "https://github.com/pareshdhok"
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
      githubLink: "https://github.com/pareshdhok"
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5
      }
    })
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <Separator className="mx-auto w-20 mb-8" />
          <p className="text-lg text-muted-foreground mb-6">
            Explore my projects showcasing expertise in embedded systems, IoT, and AI/ML.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <Card className="h-full flex flex-col project-card">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground mb-4">{project.period}</p>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    {project.highlights.map((highlight) => (
                      <li key={`${project.title}-${highlight.substring(0, 20)}`}>{highlight}</li>
                    ))}
                  </ul>
                </CardContent>
                {project.githubLink && (
                  <CardFooter className="pt-0">
                    <Button variant="outline" size="sm" className="gap-2 w-full" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <FaGithub className="h-4 w-4" />
                        View on GitHub
                      </a>
                    </Button>
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
