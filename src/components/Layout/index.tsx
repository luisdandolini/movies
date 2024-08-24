"use client";

import GlobalStyles from "@/styles/global";
import { darkTheme } from "@/styles/themes/dark";
import { ThemeProvider } from "styled-components";
import { Header } from "../Header";

export default function ClientRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <Header />
        {children}
      </ThemeProvider>
    </>
  );
}
