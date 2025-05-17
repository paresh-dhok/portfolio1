"use client"

import React from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ContactSection() {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "pareshdhok20@gmail.com",
      href: "mailto:pareshdhok20@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 9545150453",
      href: "tel:+919545150453"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Pune, Maharashtra, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="h-5 w-5" />,
      name: "GitHub",
      href: "https://github.com/paresh-dhok",
      hover: "hover:text-gray-900 dark:hover:text-gray-300"
    },
    {
      icon: <FaLinkedin className="h-5 w-5" />,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/pareshdhok/",
      hover: "hover:text-blue-600"
    },
    {
      icon: <FaTwitter className="h-5 w-5" />,
      name: "Twitter",
      href: "https://x.com/PareshDhok60695",
      hover: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-muted/30 to-background">
      <div className="container px-4">
        <motion.div
          className="text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl font-bold text-primary mb-4"
            whileHover={{ scale: 1.02 }}
          >
            Get in Touch
          </motion.h2>
          <Separator className="mx-auto w-20 bg-primary mb-4 h-[2px]" />
          <motion.p 
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            I'm always open to discussing new projects, collaborations, or opportunities. Reach out below!
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Contact Info */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="backdrop-blur-xl bg-white/70 dark:bg-muted/50 shadow-xl border-none hover:shadow-2xl transition-shadow">
              <CardContent className="p-8">
                <motion.h3 
                  className="text-2xl font-semibold mb-6 text-primary"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Contact Info
                </motion.h3>
                <ul className="space-y-5">
                  {contactInfo.map((item, index) => (
                    <motion.li 
                      key={item.value}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    >
                      <Link 
                        href={item.href} 
                        className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                      >
                        <motion.span 
                          className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors"
                          whileHover={{ scale: 1.1 }}
                        >
                          {item.icon}
                        </motion.span>
                        <div className="space-y-1">
                          <div className="text-sm font-medium">{item.label}</div>
                          <motion.div 
                            className="text-base"
                            whileHover={{ x: 5 }}
                          >
                            {item.value}
                          </motion.div>
                        </div>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Social Links */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="backdrop-blur-xl bg-white/70 dark:bg-muted/50 shadow-xl border-none hover:shadow-2xl transition-shadow">
              <CardContent className="p-8">
                <motion.h3 
                  className="text-2xl font-semibold mb-6 text-primary"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Social Media
                </motion.h3>
                <div className="flex flex-col gap-4">
                  {socialLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <Button 
                        variant="outline" 
                        className={`justify-start gap-3 w-full text-muted-foreground hover:text-primary ${link.hover}`}
                        asChild
                      >
                        <Link 
                          href={link.href} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="transition-all"
                        >
                          <motion.span whileHover={{ rotate: [0, -10, 10, 0] }}>
                            {link.icon}
                          </motion.span>
                          <motion.span whileHover={{ scale: 1.05 }}>
                            Connect on {link.name}
                          </motion.span>
                        </Link>
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
