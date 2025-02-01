import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Mantenimientos",
  description: "Reportes de mantenimientos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="bg-primaryColor">
          <NavBar/>
        </header>
        <main>
          {children}
        </main>
        <footer>
            <Footer/>
        </footer>
      </body>
    </html>
  );
}
