"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import logo from '@/public/logo.svg'
import Menu_Icon from '@/public/icons/Menu.svg'
import Search_Icon from '@/public/icons/Search.svg'
import Plus_Icon from '@/public/icons/Plus.svg'
import Notification_Icon from '@/public/icons/Notification.svg'
import AvatarPic from '@/public/images/male1.webp'
import { Separator } from './ui/separator'
import { Button } from './ui/button'
import { Input } from './ui/input'
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
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


const Header = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <div className="flex bg-white border-b border-b-gray-200">
        <div className="flex items-center p-4 sm:p-5 xl:p-6 border-r-gray-200 border-r">
          <Image src={Menu_Icon} alt="Menu Icon" className="size-7 text-[#9EA3AE] cursor-pointer" />
        </div>
        <div className="flex items-center grow p-4 sm:p-5 xl:p-6">
          <Image src={logo} alt="Logo" className="w-24 sm:w-32 h-8" />
          <Separator className="mx-4 sm:mx-6  hidden sm:block" orientation="vertical" />
          <div className='relative hidden md:block'>
            <div className='absolute top-1/2 left-4 transform -translate-y-1/2 flex items-center justify-center'>
              <Image src={Search_Icon} alt="Search Icon" className="pointer-events-none" width={20} height={20} />
            </div>
            <Input
              readOnly
              placeholder="Search"
              className="w-full lg:w-[170px] xl:w-[250px] h-10 pl-12 placeholder:text-[#9EA3AE] placeholder:text-base font-normal font-['Galano-Grotesque']"
              onClick={() => setOpen(true)}
            />
          </div>
          <div className='hidden sm:block md:hidden'>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full size-10 cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <Image src={Search_Icon} alt="Search Icon" className="size-5" />
            </Button>
          </div>
          <div className='hidden items-center justify-between gap-6 ml-6 xl:ml-8 lg:flex'>
            <Link href='/sporttracker' className="text-[#192126] text-sm xl:text-base font-medium font-['Galano-Grotesque'] leading-normal">Sport Tracker</Link>
            <Link href='/healthtracker' className="text-[#192126] text-sm xl:text-base font-medium font-['Galano-Grotesque'] leading-normal">Health Tracker</Link>
            <Link href='/challenges' className="text-[#192126] text-sm xl:text-base font-medium font-['Galano-Grotesque'] leading-normal">Challenges</Link>
          </div>
        </div>
        <div className="flex items-center gap-6 p-4 xl:p-5">
          <div>
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
          </div>

          <div className='hidden sm:block'>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className='size-11 cursor-pointer ring-4 ring-[#BBF246]'>
                  <AvatarImage src={AvatarPic.src} className='' />
                  <AvatarFallback>HH</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className='hidden lg:block'>
            <Button size={'icon'} className='rounded-full size-12 bg-[#BBF246] cursor-pointer hover:bg-[#BBF246] focus:bg-[#BBF246] focus-visible:ring-0 active:bg-[#BBF246]'>
              <Image src={Plus_Icon} alt="Plus Icon" className="size-6" />
            </Button>
          </div> 

          <div className='block lg:hidden'>
            <Sheet>
              <SheetTrigger asChild>
                <Image src={Menu_Icon} alt="Avatar" className="size-7 cursor-pointer" />
              </SheetTrigger>
              <SheetContent className='w-3/5 sm:w-2/5'>
                <SheetHeader>
                  <SheetTitle>
                    <Image src={logo} alt="logo" className="w-28" />
                  </SheetTitle>
                </SheetHeader>
                <div className='flex flex-col gap-6 p-4'>
                  <Link href='/sporttracker' className="text-[#192126] text-lg font-medium font-['Galano-Grotesque'] leading-normal">Sport Tracker</Link>
                  <Link href='/healthtracker' className="text-[#192126] text-lg font-medium font-['Galano-Grotesque'] leading-normal">Health Tracker</Link>
                  <Link href='/challenges' className="text-[#192126] text-lg font-medium font-['Galano-Grotesque'] leading-normal">Challenges</Link>
                  <Separator className="my-4" />
                  <div className='relative block sm:hidden'>
                    <div className='absolute top-1/2 left-4 transform -translate-y-1/2 flex items-center justify-center'>
                      <Image src={Search_Icon} alt="Search Icon" className="pointer-events-none" width={20} height={20} />
                    </div>
                    <Input
                      readOnly
                      placeholder="Search"
                      className="w-full lg:w-[170px] xl:w-[250px] h-10 pl-12 placeholder:text-[#9EA3AE] placeholder:text-base font-normal font-['Galano-Grotesque']"
                      onClick={() => setOpen(true)}
                    />
                  </div>
                  <div className='flex items-center justify-between gap-4 w-full'>
                    <div className=' w-full'>
                      <Button className='w-full text-[#192126] text-base bg-[#BBF246] cursor-pointer hover:bg-[#BBF246] focus:bg-[#BBF246] focus-visible:ring-0 active:bg-[#BBF246]'>
                        Upload Post
                      </Button>
                    </div>
                    <div className='block sm:hidden'>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Avatar className='size-11 cursor-pointer ring-4 ring-[#BBF246]'>
                            <AvatarImage src={AvatarPic.src} className='' />
                            <AvatarFallback>HH</AvatarFallback>
                          </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                          <DropdownMenuItem>Profile</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                  
                </div>
              </SheetContent>
            </Sheet>
          </div> 
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