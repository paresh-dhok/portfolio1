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
      hover: "hover:bg-gray-100 dark:hover:bg-gray-800"
    },
    {
      icon: <FaLinkedin className="h-5 w-5" />,
      name: "LinkedIn",
      href: "https://linkedin.com/in/pareshdhok",
      hover: "hover:bg-blue-50 dark:hover:bg-blue-900/20"
    },
    {
      icon: <FaTwitter className="h-5 w-5" />,
      name: "Twitter",
      href: "https://x.com/PareshDhok60695",
      hover: "hover:bg-blue-50 dark:hover:bg-blue-900/20"
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
          <h2 className="text-4xl font-bold text-primary mb-4 font-serif">Reach Out</h2>
          <Separator className="mx-auto w-20 bg-primary/80 mb-6 h-1" />
          <p className="text-muted-foreground text-lg leading-relaxed">
            Let's collaborate and create something extraordinary. Whether you have a project in mind or just want to connect, 
            I'm here to listen and explore possibilities.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Contact Info */}
          <Card className="backdrop-blur-xl bg-white/80 dark:bg-muted/60 shadow-lg hover:shadow-xl transition-shadow border border-muted/20">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary font-serif">Direct Contacts</h3>
              <ul className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.li 
                    key={item.value}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link href={item.href} className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                      <span className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                        {React.cloneElement(item.icon, { className: "h-6 w-6 text-primary" })}
                      </span>
                      <div>
                        <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground/80">{item.label}</div>
                        <div className="text-base font-medium">{item.value}</div>
                      </div>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card className="backdrop-blur-xl bg-white/80 dark:bg-muted/60 shadow-lg hover:shadow-xl transition-shadow border border-muted/20">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary font-serif">Digital Spaces</h3>
              <div className="flex flex-col gap-3">
                {socialLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Button 
                      variant="ghost" 
                      className={`justify-start gap-3 w-full text-muted-foreground hover:text-primary px-6 py-5 transition-all ${link.hover}`}
                      asChild
                    >
                      <Link href={link.href} target="_blank" rel="noopener noreferrer">
                        {React.cloneElement(link.icon, { className: "h-6 w-6" })}
                        <span className="text-sm font-medium">{link.name}</span>
                      </Link>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
