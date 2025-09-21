import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "3rd Eye Debt Management Service | Professional Debt Recovery Solutions in Kolkata",
  description:
    "Leading debt recovery and collection services in Kolkata & West Bengal. Specialized in NPA recovery, field collection, telecalling, and LAP recovery. Established 2022 with ₹35Cr+ portfolio.",
  keywords: [
    "debt recovery",
    "debt collection",
    "NPA recovery",
    "field collection services",
    "telecalling operations",
    "LAP recovery",
    "credit card recovery",
    "personal loan recovery",
    "two wheeler recovery",
    "Kolkata debt management",
    "West Bengal collections",
    "financial services",
    "recovery agency",
    "debt management service",
  ],
  authors: [{ name: "3rd Eye Debt Management Service" }],
  creator: "3rd Eye Debt Management Service",
  publisher: "3rd Eye Debt Management Service",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://3rdeyedms.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "3rd Eye Debt Management Service | Professional Debt Recovery Solutions",
    description:
      "Leading debt recovery and collection services in Kolkata & West Bengal. Specialized in NPA recovery, field collection, telecalling, and LAP recovery.",
    url: "https://3rdeyedms.com",
    siteName: "3rd Eye Debt Management Service",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "3rd Eye Debt Management Service Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "3rd Eye Debt Management Service | Professional Debt Recovery Solutions",
    description:
      "Leading debt recovery and collection services in Kolkata & West Bengal. Specialized in NPA recovery, field collection, telecalling, and LAP recovery.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
