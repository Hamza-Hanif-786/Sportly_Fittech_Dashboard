import { SidebarProvider } from "@/components/ui/sidebar"
import type { Metadata } from "next";
import "./globals.css";
import { AppSidebar } from "@/components/app-sidebar";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Sportly Fittech Dashboard",
  description: "Monitor your fitness, health data, track your progress, challenges and achieve your fitness goals with our comprehensive dashboard.",
  keywords: "fitness, health, dashboard, progress tracking, challenges, goals",
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
        <div className="flex flex-col bg-[#71717115] w-full">
          <Header />
          <div className="w-full px-7 py-5">
            {children}
          </div>
        </div>
      </body>
    </html>
    </SidebarProvider>
  );
}
