import { Unbounded, Albert_Sans } from "next/font/google";
import "./globals.css";

// Specify weights for Albert Sans (300 to 700)
export const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-albert_sans",
  weight: ["300", "400", "500", "600", "700"],
});

// Specify weights for Unbounded (300 to 700)
export const unbounded = Unbounded({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-unbounded",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Zamrood by Pandooin",
  description: "created by jiehan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${albertSans.variable} ${unbounded.variable}`}>
      <body className="bg-[#FAF9F5]">{children}</body>
    </html>
  );
}
