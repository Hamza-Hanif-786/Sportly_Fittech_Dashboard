import type { Metadata } from "next";
import "./globals.css";
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
    <html lang="en">
      <body className='antialiased'>
        <Header />
        <div className="w-full px-7 py-5 flex flex-col gap-5 bg-white">
          {children}
        </div>
      </body>
    </html>
  );
}
