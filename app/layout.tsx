import type { Metadata } from "next";
import "./globals.css";
import SideMenu from "@/components/side-menu";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Nortus Dashboard",
  description: "Gráficos inteligentes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen overflow-hidden">
        <div className="flex h-full">
          <SideMenu />
          <Header />
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
