import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ClientRootLayout from "@/components/Layout/ClientRootLayout";
import ApolloClientProvider from "@/components/ApolloClientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pecege Movies",
  description: "Pecege film project",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={inter.className}>
      <body>
        <ApolloClientProvider>
          <ClientRootLayout>{children}</ClientRootLayout>
        </ApolloClientProvider>
      </body>
    </html>
  );
}
