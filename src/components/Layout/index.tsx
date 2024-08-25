"use client";

import GlobalStyles from "@/styles/global";
import { darkTheme } from "@/styles/themes/dark";
import { ThemeProvider } from "styled-components";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import { Container, Content } from "./styles";

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
        <Container>
          <Sidebar />
          <Content>{children}</Content>
        </Container>
      </ThemeProvider>
    </>
  );
}
