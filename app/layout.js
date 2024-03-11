import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextJS Starter",
  description: "Boilerplate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-800 text-gray-100`}>
        <div className="container">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
