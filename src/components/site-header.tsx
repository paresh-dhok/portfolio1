"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Menu, Download } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { motion } from "framer-motion"

// Animation variants
const navItemVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.1,
    color: "#6366F1", // Tailwind 'text-primary'
    transition: { type: "spring", stiffness: 300 },
  },
}

const underlineVariants = {
  rest: { width: 0 },
  hover: {
    width: "100%",
    transition: { duration: 0.3 },
  },
}

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Left section - Logo & Nav */}
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Paresh Dhok</span>
          </Link>

          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                variants={navItemVariants}
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="relative group"
              >
                <Link
                  href={item.href}
                  className="text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
                <motion.div
                  className="h-[2px] bg-primary absolute left-0 -bottom-1"
                  variants={underlineVariants}
                />
              </motion.div>
            ))}
          </nav>
        </div>

        {/* Right section - Buttons */}
        <div className="flex items-center gap-4">
          <motion.div
            variants={navItemVariants}
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <Button variant="outline" size="sm" className="hidden md:flex gap-2" asChild>
              <a href="/Paresh_Resume.pdf" download>
                <Download className="h-4 w-4" />
                Resume
              </a>
            </Button>
          </motion.div>

          <ThemeToggle />

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                ))}
                <Button variant="outline" size="sm" className="gap-2 mt-4 w-fit" asChild>
                  <a href="/Paresh_Resume.pdf" download>
                    <Download className="h-4 w-4" />
                    Resume
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
