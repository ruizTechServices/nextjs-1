"use client";
import Image from "next/image"; 
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Navbar */}
      <nav className="bg-gray-800 text-white shadow-lg sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="relative w-8 h-8">
                <Image
                  src="/logo-1.png"
                  alt="BadSites Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h1 className="font-bold text-xl">BadSites</h1>
            </div>
            
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="hover:text-blue-300 transition duration-300 py-2">Home</Link>
              <Link href="/about" className="hover:text-blue-300 transition duration-300 py-2">About</Link>
              <Link href="/contact" className="hover:text-blue-300 transition duration-300 py-2">Contact</Link>
              <Link href="/admin-dash/admin" className="hover:text-blue-300 transition duration-300 py-2">Admin</Link>
              <Link href="/dashboard/user" className="hover:text-blue-300 transition duration-300 py-2">Dashboard</Link>
              <Link href="/testing-grounds" className="hover:text-blue-300 transition duration-300 py-2">Testing</Link>
            </div>
            
            <button 
              className="md:hidden focus:outline-none" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
          
          {/* Mobile menu */}
          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden mt-4 pb-2`}>
            <div className="flex flex-col space-y-3">
              <Link href="/" className="hover:text-blue-300 transition duration-300">Home</Link>
              <Link href="/about" className="hover:text-blue-300 transition duration-300">About</Link>
              <Link href="/contact" className="hover:text-blue-300 transition duration-300">Contact</Link>
              <Link href="/admin-dash/admin" className="hover:text-blue-300 transition duration-300">Admin</Link>
              <Link href="/dashboard/user" className="hover:text-blue-300 transition duration-300">Dashboard</Link>
              <Link href="/testing-grounds" className="hover:text-blue-300 transition duration-300">Testing</Link>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-8 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="relative w-32 h-32 mx-auto mb-8">
            <Image
              src="/logo-1.png"
              alt="BadSites Logo"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">Welcome to BadSites</h1>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">We're crafting something awesome for you.</p>
          <p className="text-lg text-gray-700 dark:text-gray-400 mb-6">Our site is under construction. Stay tuned!</p>
          <Link href="/about" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            About Us
          </Link>
        </div>
      </main>
    </div>
  );
}
