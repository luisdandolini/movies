"use client";

import GlobalStyles from "@/styles/global";
import { darkTheme } from "@/styles/themes/dark";
import { ThemeProvider } from "styled-components";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import { Container, Content } from "./styles";
import { useThemeStore } from "@/store/useThemeStore";
import { lightTheme } from "@/styles/themes/light";
import { Sidebar2 } from "../Sidebar2/Sidebar2";
import { Header2 } from "../Header2/Header2";

export default function ClientRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        {/* <Header /> */}
        <Header2 />
        <Container>
          {/* <Sidebar /> */}
          <Sidebar2 />
          <Content>{children}</Content>
        </Container>
      </ThemeProvider>
    </>
  );
}
