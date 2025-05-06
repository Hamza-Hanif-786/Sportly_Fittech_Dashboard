"use client"

import Image from "next/image"
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { Icon } from '@iconify/react';
import Logo from "@/public/logo.svg"
import { usePathname } from "next/navigation"

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: "mage:dashboard",
    iconFill: "mage:dashboard-fill",

  },
  {
    title: "Messages",
    url: "/messages",
    icon: "mage:inbox",
    iconFill: "mage:inbox-fill",
  },
  {
    title: "Projects",
    url: "/projects",
    icon: "mage:folder-open",
    iconFill: "mage:folder-open-fill",
  },
  {
    title: "Blogs",
    url: "/blogs",
    icon: "mage:file-2",
    iconFill: "mage:file-2-fill",
  },
  {
    title: "Services",
    url: "/services",
    icon: "mage:settings",
    iconFill: "mage:settings-fill",
  },
  {
    title: "Subscribers",
    url: "/subscribers",
    icon: "mage:users",
    iconFill: "mage:users-fill",
  },
]

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="bg-[#ECE5DE]">
        <SidebarMenu>
          <SidebarMenuItem className="p-3">
            <Link href="/">
              <Image
                src={Logo}
                alt="Logo"
                width={80}
                height={80}
              />
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="bg-[#ECE5DE]">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    size={"lg"}
                    tooltip={item.title}
                    className={`${pathname === item.url ? "bg-carot text-white" : ""} hover:bg-carot active:bg-carot hover:text-white h-auto [&>svg]:size-auto`}>
                    <Link href={item.url}>
                      <Icon icon={item.icon} className="text-3xl" />
                      <span className="font-['Inter'] font-medium text-lg">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
