import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import UserProvider from "@/providers/UserProvider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WaveLynk",
  description: "The peer-to-peer social network",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnQOomUxfnRqLheS5ynwYXbgLncTl5ELavjWQ+0BDrqLXuI4ZGqT+q5hPqoBmEud1w5W5yJQZ+5UHvGd6g=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={inter.className}>
        <Toaster position="top-center" />
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
