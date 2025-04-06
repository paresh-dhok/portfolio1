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
      skills: ["Matlab", "Simullink", "VS Code", "PyCharm", "Proteus"]
    },
    {
      name: "Libraries & SDKs",
      skills: ["NumPy", "pandas", "Matplotlib", "OpenCV", "scikit-learn", "TensorFlow", "Keras", "ADB shell", "PYQT5", "Plotly", "Dash"]
    }
  ];

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
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
          <Separator className="mx-auto w-20 mb-8" />
          <p className="text-lg text-muted-foreground mb-6">
            My expertise spans across programming languages, hardware systems, and technical tools.
          </p>
        </motion.div>

        <Tabs defaultValue={skillCategories[0].name} className="w-full max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
            {skillCategories.map((category) => (
              <TabsTrigger key={category.name} value={category.name} className="text-sm">
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {skillCategories.map((category) => (
            <TabsContent key={category.name} value={category.name}>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {category.skills.map((skill) => (
                  <motion.div key={skill} variants={itemVariants}>
                    <Badge className="px-3 py-1 text-sm" variant="secondary">
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
