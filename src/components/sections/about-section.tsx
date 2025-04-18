"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const hoverCardVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

export default function Education() {
  return (
    <section className="w-full py-20 md:py-28 px-4 sm:px-8 md:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <div className="bg-background rounded-2xl shadow-lg p-4 border">
              <Image
                src="/Profile_Photo.jpg"
                alt="Profile Photo"
                width={250}
                height={250}
                className="rounded-2xl"
              />
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={hoverCardVariants}
            whileHover="hover"
            whileTap="hover"
            animate="rest"
            className="bg-background p-6 rounded-2xl shadow-lg border transition-all md:col-span-2"
          >
            <h3 className="text-2xl font-semibold flex items-center gap-2 mb-6">
              <FaGraduationCap className="text-primary" /> Education
            </h3>
            <ul className="space-y-6">
              {[
                {
                  degree:
                    "B.Tech in Electronics and Communication Engineering with AIML",
                  institute: "MIT World Peace University",
                  time: "Aug 2023 - May 2027",
                },
                {
                  degree: "Higher Secondary Certificate",
                  institute:
                    "Gurukul Public School & Junior College Of Science",
                  time: "Aug 2020 - June 2022",
                },
                {
                  degree: "Secondary School Certificate",
                  institute: "Raisaheb Moti Sangai English School",
                  time: "June 2019 - April 2020",
                },
              ].map((edu, index) => (
                <li key={index} className="space-y-1">
                  <h4 className="text-lg font-medium text-foreground">
                    {edu.degree}
                  </h4>
                  <p className="text-muted-foreground">{edu.institute}</p>
                  <p className="text-sm text-muted-foreground">{edu.time}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Positions of Responsibility */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16"
        >
          <div className="bg-background p-6 rounded-2xl shadow-lg border transition-all">
            <h3 className="text-2xl font-semibold mb-6">
              Positions of Responsibility
            </h3>
            <ul className="space-y-8">
              {[
                {
                  title: "Vice President and Founder",
                  org: "Student Club - Prismlabs, MIT-WPU",
                  time: "Feb 2025 - Present",
                  points: [
                    "Led club expansion into hackathons, workshops & hands-on AI/ML, IoT training",
                    "Strategized marketing & recruitment to grow community reach",
                  ],
                },
                {
                  title: "SY Coordinator",
                  org: "Student Club - InsightAI, MIT-WPU",
                  time: "July 2024 - Present",
                  points: [
                    "Collaborated with technical clubs to expand AI/ML opportunities",
                    "Managed second-year activities and event coordination",
                  ],
                },
              ].map((role, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="p-4 rounded-xl border hover:shadow-md bg-background transition-colors"
                >
                  <h4 className="text-lg font-medium text-foreground">
                    {role.title}
                  </h4>
                  <p className="text-muted-foreground">{role.org}</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    {role.time}
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    {role.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
