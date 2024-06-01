import { Lexend } from "next/font/google";
import "./globals.css";

import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        <main className="flex flex-col min-h-screen">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
