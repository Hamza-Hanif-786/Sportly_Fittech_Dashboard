"use client"

import Image from "next/image"
import { 
  Avatar, 
  AvatarFallback, 
  AvatarImage 
} from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { Icon } from '@iconify/react';
import Logo from "@/public/logo.svg";
import avatarPic from "@/public/images/male1.webp"
import { usePathname } from "next/navigation";

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
            <SidebarMenu className="space-y-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    size={"lg"}
                    tooltip={item.title}
                    className={`${pathname === item.url ? "bg-carot text-white" : ""} hover:bg-carot active:bg-carot hover:text-white h-auto [&>svg]:size-auto`}>
                    <Link href={item.url}>
                      <Icon icon={pathname === item.url ? item.iconFill : item.icon} className="text-3xl" />
                      <span className="font-['Inter'] font-medium text-lg">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-[#ECE5DE]">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center justify-between w-full py-3 px-2">
                <div className="flex items-center gap-2">
                  <Avatar className="size-10 rounded-lg">
                    <AvatarImage src={avatarPic.src} alt="Avatar" />
                    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col text-left">
                    <span className="font-['Inter'] font-medium text-lg">Cynthia</span>
                    <span className="font-['Inter'] font-normal text-sm text-gray-500">cynthia@gmail.com</span>
                  </div>
                </div>  
                <Icon icon="mage:chevron-down" className="text-lg ml-2" />                
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white rounded-lg shadow-lg p-2">
                <DropdownMenuLabel>Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
