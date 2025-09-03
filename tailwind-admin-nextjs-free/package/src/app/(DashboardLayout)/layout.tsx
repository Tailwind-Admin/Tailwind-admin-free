"use client";
import { ThemeProvider } from "flowbite-react";
import Header from "./layout/header/Header";
import Sidebar from "./layout/sidebar/Sidebar";
import customTheme from "@/utils/theme/custom-theme";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full min-h-screen">
      <div className="page-wrapper flex w-full">
        {/* Header/sidebar */}
        <div className="xl:block hidden">
          <Sidebar />
        </div>
        <div className="body-wrapper w-full bg-background">
          {/* Top Header  */}
          <Header />
          {/* Body Content  */}
          <div
            className={`container mx-auto px-6 py-30`}
          >
            <ThemeProvider theme={customTheme}>
              {children}
            </ThemeProvider>
          </div>
        </div>
      </div>
    </div>
  );
}
