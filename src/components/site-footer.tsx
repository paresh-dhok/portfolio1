'use client'; // Marking this file as a client-side component

import { useEffect, useState } from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paresh Dhok | Portfolio",
  description:
    "A professional portfolio for Paresh Dhok, Electronics and Communication Engineering Student with expertise in AI/ML, IoT, and Embedded Systems.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#020817" },
  ],
};

export default function SiteFooter() {
  // Local state to control visibility and trigger the animation
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the fade-in effect when the component is mounted
    setIsVisible(true);
  }, []);

  return (
    <footer
      className={`transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="footer-content">
        <p>Paresh Dhok | Portfolio</p>
        <p>
          Electronics and Communication Engineering Student with expertise in
          AI/ML, IoT, and Embedded Systems.
        </p>
      </div>
    </footer>
  );
}
