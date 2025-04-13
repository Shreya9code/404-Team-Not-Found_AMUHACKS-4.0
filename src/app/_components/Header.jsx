"use client"
import { Button } from '@/components/ui/button'
import { UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  const user = useUser()
  return (
<div className="flex items-center justify-between px-4 md:px-8 lg:px-12 shadow-md bg-white h-20">
  <Image
    src="/AILogoMaker.png"
    alt="logo"
    width={80}
    height={60}
    className="object-contain"
  />
  <div>
    {user && <Button variant="outline">Dashboard</Button>}
  <Button className="px-5 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-700 transition-all">
    Get Started
  </Button>
  <UserButton/>
  </div>
</div>


  )
}

export default Header
