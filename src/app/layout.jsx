import Footer from "@/components/layout/Footer";
import "../styles/globals.css";
import "../styles/animations.css";
import Header from "@/components/layout/Header";
import { Inter, Poppins } from "next/font/google";
import { organizationSchema, localBusinessSchema } from "@/lib/schema";
import FloatingWrapper from "@/components/FloatingWrapper";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://hyalineenviro.com"),

  title: {
    default: "Hyaline Enviro Engineers",
    template: "%s | Hyaline Enviro Engineers",
  },

  description: "Water & Wastewater Treatment Engineering Company",

  verification: {
    google: "YOUR_GOOGLE_CODE",
  },

  
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-16x16.png",
  },

  
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable}`}>
        <Header />
        <main >
        {children}
        </main>
        <Footer />
        <FloatingWrapper />

        {/* Global Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </body>
    </html>
  );
}
