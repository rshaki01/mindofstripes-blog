import React from 'react'
import localFont from 'next/font/local'
import Link from 'next/link'

const myFont = localFont({
    src: '../../../public/fonts/bof.ttf'
  })  

const Navbar = () => {

  return (
    <div className='flex items-center justify-center h-20 bg-white w-full sticky top-0 left-0 z-50 border-b-2 border-black'>
      <Link href='/'>
        <h1 className={`${myFont.className} text-black text-4xl cursor-pointer`}>Stripes!</h1>
      </Link>
    </div>
  )
}

export default Navbar
