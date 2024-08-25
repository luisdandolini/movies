import "./globals.css";
import type { Metadata } from "next";
import ClientRootLayout from "@/components/Layout";
import ApolloClientProvider from "@/components/ApolloClientProvider";
import Head from "next/head";

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
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <ApolloClientProvider>
          <ClientRootLayout>{children}</ClientRootLayout>
        </ApolloClientProvider>
      </body>
    </html>
  );
}
