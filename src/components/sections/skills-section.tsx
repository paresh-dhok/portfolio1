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
      skills: ["Python", "C/C++", "HTML", "Tailwind CSS", "JavaScript", "Embedded C", "Java", "Machine Level Programming", "Web Development"]
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

  const slugify = (text: string) =>
    text.toLowerCase().replace(/\s+/g, "-");

  return (
    <section id="skills" className="py-20 md:py-28 bg-gradient-to-br from-background to-muted">
      <div className="container px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-primary">Technical Skills</h2>
          <Separator className="mx-auto w-20 mb-6 bg-primary" />
          <p className="text-lg text-muted-foreground">
            My expertise spans programming, hardware systems, and technical tools.
          </p>
        </motion.div>

        <Tabs defaultValue={slugify(skillCategories[0].name)} className="w-full max-w-5xl mx-auto">
          <div className="relative z-10">
            <TabsList className="flex flex-wrap gap-3 justify-center mb-10">
              {skillCategories.map((category) => (
                <TabsTrigger
                  key={category.name}
                  value={slugify(category.name)}
                  className="text-sm px-4 py-2 rounded-xl bg-muted/60 hover:bg-muted transition-all"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {skillCategories.map((category) => (
            <TabsContent
              key={category.name}
              value={slugify(category.name)}
              className="overflow-visible pt-6 data-[state=active]:block hidden"
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-4 justify-center"
              >
                {category.skills.map((skill) => (
                  <motion.div key={skill} variants={itemVariants}>
                    <Badge
                      className="px-4 py-2 text-sm rounded-full bg-muted text-primary transition-all duration-500 
                                 hover:bg-gradient-to-r hover:from-muted hover:to-blue-500 hover:text-white shadow-sm"
                      variant="secondary"
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
