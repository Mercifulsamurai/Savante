"use client";
import { useState } from 'react'
import Link from 'next/link'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="fixed top-0 left-0 w-full shadow-md p-4 bg-gray-500 text-stone-50 z-10">
      <div className="flex justify-between items-center mx-auto max-w-screen-xl px-4">
        <div className="flex items-center">
          <Link href="/">
            <h2 className="text-2xl hover:text-slate-200 font-Roboto cursor-pointer">Savante</h2>
          </Link>
          <Link href="/">
            <h3 className="pl-4 text-l font-Roboto hidden sm:block cursor-pointer">Home</h3>
          </Link>
          <Link href="/">
            <h3 className="pl-4 text-l font-Roboto hidden sm:block cursor-pointer">About</h3>
          </Link>
          <Link href="/">
            <h3 className="pl-4 text-l font-Roboto hidden sm:block cursor-pointer">Contact Us</h3>
          </Link>
        </div>
        <div className="hidden sm:flex">
          <Link href="/signup">
            <button className="text-2xl font-Roboto hover:text-slate-200">Signup</button>
          </Link>
        </div>
        <div className="sm:hidden flex items-center">
          <button onClick={toggleMenu} className="text-2xl">
            ☰
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden flex flex-col items-center mt-4 space-y-2">
          <Link href="/">
            <h3 className="text-l font-Roboto cursor-pointer" onClick={toggleMenu}>Home</h3>
          </Link>
          <Link href="/">
            <h3 className="text-l font-Roboto cursor-pointer" onClick={toggleMenu}>About</h3>
          </Link>
          <Link href="/">
            <h3 className="text-l font-Roboto cursor-pointer" onClick={toggleMenu}>Contact Us</h3>
          </Link>
          <Link href="/signup">
            <button className="text-2xl font-Roboto" onClick={toggleMenu}>Signup</button>
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Header
