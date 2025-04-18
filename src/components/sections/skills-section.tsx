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
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-background">
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold tracking-tight mb-4 text-foreground">Technical Skills</h2>
          <Separator className="mx-auto w-20 mb-6 bg-primary" />
          <p className="text-muted-foreground text-lg">
            A diverse set of tools, platforms, and programming languages that empower me to build effective tech solutions.
          </p>
        </motion.div>

        <Tabs defaultValue={skillCategories[0].name} className="w-full max-w-5xl mx-auto">
          <div className="relative z-10">
            <TabsList className="flex flex-wrap justify-center gap-4 mb-8">
              {skillCategories.map((category) => (
                <TabsTrigger
                  key={category.name}
                  value={category.name}
                  className="text-sm font-medium px-4 py-2 rounded-full border hover:bg-muted transition duration-200"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {skillCategories.map((category) => (
            <TabsContent
              key={category.name}
              value={category.name}
              className="overflow-visible pt-2"
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-3"
              >
                {category.skills.map((skill) => (
                  <motion.div key={skill} variants={itemVariants}>
                    <Badge
                      variant="secondary"
                      className="px-3 py-1 text-sm rounded-full shadow hover:scale-105 transition-transform duration-200 hover:shadow-md"
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
  );
}
