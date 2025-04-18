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
      href: "https://linkedin.com/in/pareshdhok",
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
          <h2 className="text-4xl font-bold text-primary mb-4">Get in Touch</h2>
          <Separator className="mx-auto w-20 bg-primary mb-4" />
          <p className="text-muted-foreground text-lg">
            I'm always open to discussing new projects, collaborations, or opportunities. Reach out below!
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Contact Info */}
          <Card className="backdrop-blur-xl bg-white/70 dark:bg-muted/50 shadow-xl border-none">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Contact Info</h3>
              <ul className="space-y-5">
                {contactInfo.map((item) => (
                  <li key={item.value}>
                    <Link href={item.href} className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                      <span className="bg-primary/10 p-2 rounded-full">{item.icon}</span>
                      <div>
                        <div className="text-sm font-medium">{item.label}</div>
                        <div className="text-base">{item.value}</div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card className="backdrop-blur-xl bg-white/70 dark:bg-muted/50 shadow-xl border-none">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Social Media</h3>
              <div className="flex flex-col gap-4">
                {socialLinks.map((link) => (
                  <Button key={link.name} variant="outline" className="justify-start gap-3 w-full text-muted-foreground hover:text-primary" asChild>
                    <Link href={link.href} target="_blank" rel="noopener noreferrer" className={link.hover}>
                      {link.icon}
                      Connect on {link.name}
                    </Link>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
