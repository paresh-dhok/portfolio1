import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import "@/app/globals.css";
import Script from "next/script";
import ChatBotWidget from "@/components/ChatBotWidget";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs"
          type="module"
          strategy="beforeInteractive"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
          <Toaster />
          <ChatBotWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
