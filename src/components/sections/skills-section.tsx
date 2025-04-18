"use client"

import React from "react"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"

interface SkillCategory {
  name: string
  skills: string[]
}

export function SkillsSection() {
  const skillCategories: SkillCategory[] = [
    {
      name: "Languages",
      skills: ["Python", "C/C++", "HTML", "Embedded C", "Java", "Machine Level Programming"]
    },
    {
      name: "Hardware & Embedded Systems",
      skills: ["ESP32", "Arduino", "Raspberry Pi", "STM32", "8051", "Lidar", "Sensors", "Actuators", "Motor Drivers", "RF Bluetooth Modules"]
    },
    {
      name: "Frameworks & Platforms",
      skills: ["Flask", "WordPress", "Arduino", "OpenVino", "TinkerCad", "MultiSim"]
    },
    {
      name: "Circuit Design & Electronics",
      skills: ["Analog Circuit Design", "Digital Circuit Design", "Signal Processing", "Microcontroller"]
    },
    {
      name: "Developer Tools",
      skills: ["Matlab", "Simulink", "VS Code", "PyCharm", "Proteus"]
    },
    {
      name: "Libraries & SDKs",
      skills: ["NumPy", "pandas", "Matplotlib", "OpenCV", "scikit-learn", "TensorFlow", "Keras", "ADB shell", "PYQT5", "Plotly", "Dash"]
    }
  ];

  const slugify = (text: string) =>
    text.toLowerCase().replace(/\s+/g, "-");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="skills" className="py-24 bg-gradient-to-tr from-background to-muted">
      <div className="container max-w-6xl px-6 mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-3">My Technical Arsenal</h2>
          <Separator className="mx-auto w-24 bg-primary mb-5" />
          <p className="text-lg text-muted-foreground">A versatile stack of software, hardware, and development tools I work with.</p>
        </motion.div>

        <Tabs defaultValue={slugify(skillCategories[0].name)} className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-3 bg-background/60 p-4 rounded-2xl shadow-md mb-10 backdrop-blur-md border">
            {skillCategories.map((category) => (
              <TabsTrigger
                key={category.name}
                value={slugify(category.name)}
                className="text-sm md:text-base px-5 py-2 rounded-full bg-muted hover:bg-primary hover:text-white transition-all duration-300"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent
              key={category.name}
              value={slugify(category.name)}
              className="data-[state=active]:block hidden mt-2"
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-center"
              >
                {category.skills.map((skill) => (
                  <motion.div key={skill} variants={itemVariants}>
                    <Badge
                      className="px-4 py-2 text-sm rounded-full bg-gradient-to-tr from-secondary to-muted hover:from-primary hover:to-blue-500 text-foreground hover:text-white shadow transition-all duration-300"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
