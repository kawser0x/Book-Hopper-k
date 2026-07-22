import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";

const openSans = Open_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: "Book Hopper",
  description: "Online Book Borrowing Platform",
};

export default function RootLayout({ children }) {

  
  return (
    <html lang="en" data-theme= "light" className={`${openSans.variable} h-full antialiased`}>
      <body className="container mx-auto">
        <Navbar />
        <main>
          <ToastContainer />
          {children}</main>
        <Footer/>
      </body>
    </html>
  );
}
