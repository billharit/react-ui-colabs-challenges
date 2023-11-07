import { Inter } from "next/font/google";
import Navbar from "@/components/layout/navbar";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Colabs",
  description: "Mock Website of Colabs",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={inter.className}>
        <Navbar />
        <div className="bg-[#f9f8f6]">{children}</div>
      </body>
    </html>
  );
}
