import Footer from "@/components/layout/Footer";
import "../styles/globals.css"
import Header from "@/components/layout/Header";
import { Inter, Poppins } from "next/font/google";
import { organizationSchema, localBusinessSchema } from "@/lib/schema";
import FloatingActions from "@/components/FloatingActions";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
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
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable}`}>
        <Header />
        {children}
        <Footer/>
         <FloatingActions />
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