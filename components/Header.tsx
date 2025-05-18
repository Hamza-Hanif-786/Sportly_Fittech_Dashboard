"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import logo from '@/public/logo.svg'
import Menu_Icon from '@/public/icons/Menu.svg'
import Search_Icon from '@/public/icons/Search.svg'
import Plus_Icon from '@/public/icons/Plus.svg'
import Notification_Icon from '@/public/icons/Notification.svg'
import AvatarPic from '@/public/images/male1.webp'
import { Separator } from './ui/separator'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { 
  Avatar, 
  AvatarFallback, 
  AvatarImage 
} from "@/components/ui/avatar"
import { Button } from './ui/button'
import { Input } from './ui/input'
import Link from 'next/link'

const Header = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <div className="flex bg-white border-b border-b-gray-200">
        <div className="flex items-center p-6 border-r-gray-200 border-r">
          <Image src={Menu_Icon} alt="Menu Icon" className="size-6 text-[#9EA3AE] cursor-pointer" />
        </div>
        <div className="flex items-center grow p-6">
          <Image src={logo} alt="Logo" className="w-32 h-8" />
          <Separator className="mx-6" orientation="vertical" />
          <div className='relative'>
            <div className='absolute top-1/2 left-4 transform -translate-y-1/2 flex items-center justify-center'>
              <Image src={Search_Icon} alt="Search Icon" className="pointer-events-none" width={20} height={20} />
            </div>
            <Input
              readOnly
              placeholder="Search"
              className="w-[200px] xl:w-[250px] h-10 pl-12 placeholder:text-[#9EA3AE] placeholder:text-base font-normal font-['Galano-Grotesque']"
              onClick={() => setOpen(true)}
            />
          </div>
          <div className='flex items-center justify-between gap-6 ml-8'>
            <Link href='/sporttracker' className="text-[#192126] text-base font-medium font-['Galano-Grotesque'] leading-normal">Sport Tracker</Link>
            <Link href='/healthtracker' className="text-[#192126] text-base font-medium font-['Galano-Grotesque'] leading-normal">Health Tracker</Link>
            <Link href='/challenges' className="text-[#192126] text-base font-medium font-['Galano-Grotesque'] leading-normal">Challenges</Link>
          </div>
        </div>
        <div className="flex items-center gap-6 p-5">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Image src={Notification_Icon} alt="Bell Icon" className="size-6 cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>None</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Avatar className='size-11 cursor-pointer ring-4 ring-[#BBF246]'>
            <AvatarImage src={AvatarPic.src} className='' />
            <AvatarFallback>HH</AvatarFallback>
          </Avatar>

          <Button size={'icon'} className='rounded-full size-12 bg-[#BBF246] cursor-pointer hover:bg-[#BBF246] focus:bg-[#BBF246] focus-visible:ring-0 active:bg-[#BBF246]'>
            <Image src={Plus_Icon} alt="Plus Icon" className="size-6" />
          </Button>
        </div>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>Profile</CommandItem>
            <CommandItem>Billing</CommandItem>
            <CommandItem>Settings</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}

export default Header