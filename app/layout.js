import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Welth",
  description: "Manage the finances",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      {" "}
      <html lang="en">
        <body className={`${inter.className}`}>
          <Header />
          <main className="min-h-screen ">{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
