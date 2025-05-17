import Image from 'next/image'
import React from 'react'
import logo from '../public/logo.svg'

const Header = () => {
  return (
    <div className="flex items-center bg-[#ECE5DE] px-4 py-2 gap-2">
      <div className="flex items-center gap-2">
        <Image src={logo} alt="Logo" className="w-28" />
      </div>
      <div className="flex-grow"></div>
      <div className="flex items-center gap-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded">Sign Up</button>
      </div>
    </div>
  )
}

export default Header