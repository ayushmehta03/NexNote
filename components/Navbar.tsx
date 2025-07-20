import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "../public/logo.svg"
import { ModeToggle } from './ModeToggle'
import NavItems from './ui/NavItems'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between mx-auto w-full px-14 py-4 max-sm:px-4'>
 <Link href="/">
 <div className='flex items-center gap-2.5 cursor-pointer'>
<Image src={logo} alt='logo' width={46} height={44} 
/>

 </div>
 </Link>
<div className='flex items-center gap-8'>
    <NavItems />
<p>Sign In</p>
</div>
    </nav>
  )
}

export default Navbar