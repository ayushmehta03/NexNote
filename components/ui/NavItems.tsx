"use client";
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navitems=[
    {label:"Home",href:'/'},
    {label:"Companions",href:'/companions'},
    {label:"My Journy", href:'/my-journey'},
]
const NavItems = () => {
    const pathName=usePathname();
  return (
    <nav className='flex items-center gap-4'>
        {navitems.map(({label,href})=>(
            <Link href={href} key={label} className={cn(pathName===href && 'text-blue-600 ')} >
                {label}
            </Link>
        ))}
    </nav>
  )
}

export default NavItems