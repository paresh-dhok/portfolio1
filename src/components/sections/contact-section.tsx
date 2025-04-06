"use client"

import React from "react"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function ContactSection() {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      text: "paresh.dhok@mitwpu.edu.in",
      href: "mailto:paresh.dhok@mitwpu.edu.in"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      text: "+91 9545150453",
      href: "tel:+919545150453"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      text: "Pune, Maharashtra, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="h-5 w-5" />,
      name: "GitHub",
      href: "https://github.com/pareshdhok",
      color: "hover:text-gray-900 dark:hover:text-gray-300"
    },
    {
      icon: <FaLinkedin className="h-5 w-5" />,
      name: "LinkedIn",
      href: "https://linkedin.com/in/pareshdhok",
      color: "hover:text-blue-600"
    },
    {
      icon: <FaTwitter className="h-5 w-5" />,
      name: "Twitter",
      href: "https://x.com/PareshDhok60695",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <Separator className="mx-auto w-20 mb-8" />
          <p className="text-lg text-muted-foreground mb-6">
            Feel free to get in touch with me for collaboration or opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold">Let's Connect</h3>
            <p className="text-muted-foreground">
              I'm currently looking for internship opportunities in electronics, embedded systems, and AI/ML. If you have any questions or would like to work together, feel free to reach out!
            </p>

            <div className="pt-4">
              <h4 className="text-lg font-medium mb-4">Contact Information</h4>
              <ul className="space-y-4">
                {contactInfo.map((info) => (
                  <li key={info.text}>
                    <Link
                      href={info.href}
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <div className="bg-primary/10 p-2 rounded-full">
                        {info.icon}
                      </div>
                      {info.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold mb-6">Social Media</h3>
                <div className="grid grid-cols-1 gap-4">
                  {socialLinks.map((link) => (
                    <Button key={link.name} variant="outline" size="lg" className="justify-start gap-3" asChild>
                      <Link
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={link.color}
                      >
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
      </div>
    </section>
  )
}
