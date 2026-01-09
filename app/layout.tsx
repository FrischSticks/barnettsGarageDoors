import "./globals.css";
import { ReactNode } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="pt-16 md:pt-20">
        {/* Fixed Navbar */}
        <NavBar />

        {/* Page Content */}
        <main>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
