import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Admin Dashboard | Hage Architecture",
  description: "Manage your architecture projects efficiently with our admin dashboard.",
  keywords: "admin, dashboard, architecture, projects, management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='antialiased'>
        {children}
      </body>
    </html>
  );
}
