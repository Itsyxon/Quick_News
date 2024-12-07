import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import Container from "@/components/Container/Container";

export const metadata: Metadata = {
  title: "Quick News App",
  description: "Created by Daniil Itsyxon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <header>
          <NavBar />
        </header>
        <Container>
          {children}
        </Container>
      </body>
    </html>
  );
}
