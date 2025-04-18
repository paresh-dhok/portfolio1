"use client"

import React from "react"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { TrophyIcon } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image" // ✅ Suggested import added
import { cn } from "@/lib/utils"

interface Achievement {
    title: string;
    description: string;
    imagePath: string;
    imageAlt: string;
}

export function AchievementsSection() {
    const achievements: Achievement[] = [
        {
            title: "First Prize in PBL Project Competition",
            description: "Received first prize in Project Based Learning competition at MIT-WPU in First Year",
            imagePath: "/PBL_Prize.jpg",
            imageAlt: "PBL Project Competition Prize"
        },
        {
            title: "Appreciation Prize in HackMITWPU25 Hackathon",
            description: "Received appreciation prize in the Ideathon track of HackMITWPU25 hackathon",
            imagePath: "/Hackathon.jpg",
            imageAlt: "HackMITWPU25 Hackathon Prize"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // Stagger the appearance of child elements
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
    };

    return (
        <section id="achievements" className="py-16 md:py-24 bg-gradient-to-br from-secondary/30 to-secondary/10">
            <div className="container">
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-12"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                        Achievements
                    </h2>
                    <Separator className="mx-auto w-32 mb-8 bg-gradient-to-r from-purple-500 to-pink-500" />
                    <p className="text-lg text-gray-400 mb-8">
                        Recognition and awards that showcase my technical abilities and commitment to excellence.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={achievement.title}
                            variants={itemVariants}
                            className="transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                        >
                            <Card
                                className={cn(
                                    "h-full bg-white/5 backdrop-blur-md border border-white/10",
                                    "shadow-xl hover:shadow-2xl transition-all duration-300",
                                    "hover:border-purple-500/20 hover:scale-[1.01]" // Added hover effect
                                  )}
                            >
                                <CardContent className="pt-6 flex flex-col gap-6">
                                    <div className="flex items-start gap-6">
                                        <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-4 rounded-full shadow-md">
                                            <TrophyIcon className="h-8 w-8 text-purple-400 animate-pulse" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-semibold mb-3 text-white">
                                                {achievement.title}
                                            </h3>
                                            <p className="text-gray-300 leading-relaxed">
                                                {achievement.description}
                                            </p>
                                        </div>
                                    </div>
                                    {/* ✅ Image Section */}
                                    <div className="mt-4 rounded-lg overflow-hidden shadow-md border border-white/10">
                                        <Image
                                            src={achievement.imagePath}
                                            alt={achievement.imageAlt}
                                            width={500}
                                            height={300}
                                            className="w-full h-auto object-cover transition-transform duration-500 hover:scale-110" // Added hover effect
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
