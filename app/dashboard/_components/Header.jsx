"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import { usePathname, useRouter } from 'next/navigation'  // 🔥 Added useRouter import

function Header() {

   const path = usePathname();
   const router = useRouter(); // 🔥 Added router for navigation

   useEffect(() => {
    console.log(path);
   }, [])

      // 🔥 Added navigation handler
      const navigateTo = (route) => {
        router.push(route);
      }

  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-md'>
        {/* <Image src={'/logo.svg'} width={160} height={100} alt='logo'/> */}
        <div className="flex items-center">
      <Image 
        src="/eyes.png" 
        width={40} 
        height={40} 
        alt="PrepAI Logo" 
      />
      <span className="text-blue-600 font-bold text-xl ml-2">PrepAI</span>
    </div>
        <ul className='hidden md:flex gap-6'>
            <li className= {`hover:text-primary hover:font-bold transition-all cursor-pointer
                ${path == '/dashboard' && 'text-primary font-bold'}
                `}>
                Dashboard</li>

            <li 
                onClick={() => navigateTo('/dashboard/about')} // 🔥 Added click handler for About Us
                className= {`hover:text-primary hover:font-bold transition-all cursor-pointer
                ${path == '/dashboard/about' && 'text-primary font-bold'}
                `}>About us</li>

            <li 
            onClick={() => navigateTo('/dashboard/work')} // 🔥 Added click handler for How It Works
            className={`hover:text-primary hover:font-bold transition-all cursor-pointer 
            ${path == '/dashboard/work' && 'text-primary font-bold'}
            `} >How it works?
            </li>

            <li 
            onClick={() => navigateTo('/dashboard/resources')}
            className={`hover:text-primary hover:font-bold transition-all cursor-pointer 
           ${path == '/dashboard/resources' && 'text-primary font-bold'}
           `}> Resources </li>
        </ul> 
        <UserButton />
    </div>
  )
}

export default Header

 