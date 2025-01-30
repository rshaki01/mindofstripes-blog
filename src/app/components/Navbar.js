import React from 'react'
import localFont from 'next/font/local'

const myFont = localFont({
    src: '../../../public/fonts/bof.ttf'
  })  

const Navbar = () => {

  return (
    <div className='h-16 bg-white w-full fixed top-0 left-0 z-50'>
      <h1 className={myFont.className}>Stripes!</h1>
    </div>
  )
}

export default Navbar
