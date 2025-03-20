"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function TestingGround() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
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
      <main className="container mx-auto px-4 flex-1 min-h-0 border-2">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Testing Grounds</h1>
        <p className="text-xl mb-8 text-gray-600">Here you can test new features and components before they are added to the main site.</p>
        <div className="relative w-24 h-24 mb-8">
          <Image
            src="/logo-1.png"
            alt="BadSites Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </main>

      {/* Spacer */}
      <div className="h-16"></div>

      {/* Main Testing Space */}
      <div className="container mx-auto px-4 flex-1 min-h-0 border-2">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Main Testing Space</h1>
        <p className="text-xl mb-8 text-gray-600">Here you can test new features and components before they are added to the main site.</p>
        <div className="relative w-24 h-24 mb-8 border-2">
          {/* Add your testing components here */}
        </div>
      </div>

      {/* Spacer */}
      <div className="h-16"></div>

      {/* Footer */}
      <footer className="bg-gray-800 p-4 text-center text-white mt-auto">
        <div className="container mx-auto">
          <p className="text-sm">&copy; 2025 BadSites. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
