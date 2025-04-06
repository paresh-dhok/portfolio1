"use client"

import React from "react"
import Link from "next/link"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

export function SiteFooter() {
  return (
    <footer className="border-t py-6 md:py-10">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:items-start md:gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-lg font-bold">Paresh Dhok</span>
          </Link>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} Paresh Dhok. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="https://github.com/pareshdhok"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <FaGithub className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://linkedin.com/in/pareshdhok"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <FaLinkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="https://x.com/PareshDhok60695"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <FaTwitter className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
