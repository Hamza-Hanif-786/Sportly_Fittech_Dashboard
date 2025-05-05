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
import Home from '@/public/icons/home.svg'
import Message from "@/public/icons/message.svg"
import Folder from "@/public/icons/folder.svg"
import File from "@/public/icons/file.svg"
import Setting from "@/public/icons/setting.svg"
import UsersGroup from "@/public/icons/usergroup.svg"
import Logo from "@/public/logo.svg"

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Messages",
    url: "/messages",
    icon: Message,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: Folder,
  },
  {
    title: "Blogs",
    url: "/blogs",
    icon: File,
  },
  {
    title: "Services",
    url: "/services",
    icon: Setting,
  },
  {
    title: "Subscribers",
    url: "/subscribers",
    icon: UsersGroup,
  },
]

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="bg-[#ECE5DE]">
        <SidebarMenu>
          <SidebarMenuItem className="p-3">
            <Link href="/">
              <Image
                src={Logo}
                alt="Logo"
                width={80}
                height={80}
                className="object-cover"
              />
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="bg-[#ECE5DE]">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-5">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={30}
                        height={30}
                      />
                      <span>{item.title}</span>
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
