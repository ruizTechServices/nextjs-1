// app/dashboard/user/page.jsx

/* Converted the dashboard page into a layout so that nested pages (Overview, Profile, Settings) render in place of the placeholder. Also replaced <a> tags with Next.js <Link> for client-side navigation. */

"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function UserDashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
      <div className="flex flex-1">
        <aside className={`${sidebarOpen ? "block" : "hidden"} md:block md:w-64 bg-gray-800 text-white p-6`}>
          <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
          <nav>
            <ul>
              <li className="mb-4">
                <Link href="/admin-dash/admin/overview" className="hover:text-indigo-400 transition">Overview</Link>
              </li>
              <li className="mb-4">
                <Link href="/admin-dash/admin/profile" className="hover:text-indigo-400 transition">Profile</Link>
              </li>
              <li className="mb-4">
                <Link href="/admin-dash/admin/settings" className="hover:text-indigo-400 transition">Settings</Link>
              </li>
            </ul>
          </nav>
        </aside>
        <div className="flex-1 p-8">
          <button 
            className="md:hidden mb-4 px-4 py-2 bg-blue-600 text-white rounded"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? "Close Menu" : "Open Menu"}
          </button>
          <main>
            {children}
          </main>
        </div>
      </div>
      <footer className="bg-gray-800 p-4 text-center text-white">
        <p className="text-sm">&copy; 2025 Manhattan Dashboard. All rights reserved.</p>
      </footer>
    </div>
  );
}