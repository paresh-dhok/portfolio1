'use client';

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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
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
          AI/ML, <span className="text-inherit">IoT</span>, and Embedded Systems.
        </p>
      </div>
    </footer>
  );
}
