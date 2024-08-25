import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ClientRootLayout from "@/components/Layout";
import ApolloClientProvider from "@/components/ApolloClientProvider";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pecege Movies",
  description: "Pecege film project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <ApolloClientProvider>
          <ClientRootLayout>{children}</ClientRootLayout>
        </ApolloClientProvider>
      </body>
    </html>
  );
}
