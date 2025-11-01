import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://spilldong.app"),
  title: {
    default: "SpillDong | Find Local Businesses Near Your Campus",
    template: "%s | SpillDong"
  },
  description: "Discover the best local businesses near your campus. Find laundry services, food, stores, and pharmacies trusted by students. Built by students, for students.",
  keywords: ["student directory", "local business", "campus services", "laundry", "food delivery", "student discounts", "pharmacy", "stores"],
  authors: [{ name: "SpillDong Team" }],
  creator: "SpillDong",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://spilldong.app",
    siteName: "SpillDong",
    title: "SpillDong | Find Local Businesses Near Your Campus",
    description: "Find the best local businesses near your campus. Laundry, food, stores, and more.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SpillDong - Local Business Directory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SpillDong - Local Business Directory for Students",
    description: "Find the best local businesses near your campus",
    images: ["/og-image.png"],
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
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent theme flash by setting dark class before hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('theme');var d=matchMedia('(prefers-color-scheme: dark)').matches;var v=t||(d?'dark':'light');if(v==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();",
          }}
        />
      </head>
      <body className={`${plusJakarta.variable} antialiased`}>
        <ThemeProvider>
          {children}
          <Toaster
            position="top-center"
            toastOptions={{
              // Tailwind classes use theme tokens; they switch with html.dark
              className:
                "bg-background text-foreground border border-border shadow-lg rounded-lg font-sans text-sm backdrop-blur-sm",
              duration: 2400,
              // Inline styles as a fallback to ensure correct colors
              style: {
                background: "var(--background)",
                color: "var(--foreground)",
                borderColor: "var(--border)",
              },
              iconTheme: {
                primary: "var(--color-brand-600)",
                secondary: "var(--background)",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
