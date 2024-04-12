import type { Metadata } from "next";
import { Montserrat, Montserrat_Alternates } from "next/font/google";
import { ChakraProvider } from '@chakra-ui/react';
import AuthProvider from "./context/authprovider";
//import "./globals.css"

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ChakraProvider>
        <AuthProvider>
              {children}
          </AuthProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
