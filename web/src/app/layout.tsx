import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CSCA SPACE — The Intelligent Bridge to Your Grant in China",
  description: "Apply for Chinese government scholarships with AI precision. CSCA SPACE connects international students with top Chinese universities including Tsinghua, Peking University, and Fudan University.",
  keywords: ["CSCA Scholarship", "Study in China", "Chinese Government Scholarship", "CSC Scholarship", "Tsinghua University", "Peking University", "International Education"],
  authors: [{ name: "CSCA SPACE" }],
  openGraph: {
    title: "CSCA SPACE — The Intelligent Bridge to Your Grant in China",
    description: "Apply for Chinese government scholarships with AI precision. Connect with top universities like Tsinghua and Peking University.",
    url: "https://cscaspace.com",
    siteName: "CSCA SPACE",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CSCA SPACE - The Digital Bridge to China Education",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CSCA SPACE — The Intelligent Bridge to Your Grant in China",
    description: "Apply for Chinese government scholarships with AI precision.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
