import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import type { Metadata } from "next";
import "./globals.css";
import { AppSidebar } from "@/components/app-sidebar";

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
    <SidebarProvider>
    <html lang="en">
      <body className='antialiased'>
        <AppSidebar />
        <SidebarTrigger />
        {children}
      </body>
    </html>
    </SidebarProvider>
  );
}
