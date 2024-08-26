"use client";

import { useEffect, useState } from "react";
import { useThemeStore } from "@/store/useThemeStore";
import { Sidebar } from "../Sidebar/Sidebar";
import { Header } from "@/components/Header/Header";
import styles from "./ClientRootLayout.module.css";

export default function ClientRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mounted, setMounted] = useState(false);
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const themeClass = isDarkMode ? "dark" : "light";
      document.documentElement.classList.remove("dark", "light");
      document.documentElement.classList.add(themeClass);
    }
  }, [isDarkMode, mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.mainContent}>
        <Sidebar />
        <div className={styles.content}>{children}</div>
      </main>
    </div>
  );
}
