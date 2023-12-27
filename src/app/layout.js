import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "A Properties App",
  description: "A properties buy and rent app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} scrollbar-hide flex justify-between`}>
        <div className="fixed">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
