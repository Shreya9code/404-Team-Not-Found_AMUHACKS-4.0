"use client"
import React, { useState } from 'react'
import Lookup from '../_data/Lookup'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
function Hero() {
    const [logoTitle,setLogoTitle]=useState()

  return (
    <div className="p-8 text-center">
  <h1 className="text-4xl font-bold mb-4">{Lookup.HeroHeading}</h1>
  <h2 className="text-2xl text-gray-700 mb-2">{Lookup.HeroSubHeading}</h2>
  <p className="text-md text-gray-600">{Lookup.HeroDesc}</p>
  <div>
    <input
      type="text"
      placeholder={Lookup.InputTitlePlaceholder}
      className="mt-4 p-2 border border-gray-300 rounded-lg w-full max-w-md mx-auto"
      onChange={(e) => setLogoTitle(e.target.value)}
    />
    <Link href={'/create?title='+logoTitle}>
    <Button className="mt-4 bg-violet-500 text-white p-2 rounded-lg hover:bg-violet-600 transition duration-300">
      Generate Logo</Button></Link>
  </div>
</div>

  )
}

export default Hero
