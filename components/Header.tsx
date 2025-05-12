import React from 'react'
import { SidebarTrigger } from './ui/sidebar'

const Header = () => {
  return (
    <div className="flex items-center bg-[#ECE5DE] px-4 py-2 gap-2">
        <SidebarTrigger variant="ghost" />
    </div>
  )
}

export default Header