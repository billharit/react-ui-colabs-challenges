import { Inter } from "next/font/google";
import Navbar from "@/components/layout/navbar";
import "./globals.css";
import Footer from "@/components/layout/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Colabs",
  description: "Mock Website of Colabs",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        <div className="bg-custom-white">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
