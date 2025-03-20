// app/dashboard/user/page.jsx

/* Converted the dashboard page into a layout so that nested pages (Overview, Profile, Settings) render in place of the placeholder. Also replaced <a> tags with Next.js <Link> for client-side navigation. */

"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function UserDashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
      {/* Navbar */}
      <Navbar />
      <div className="flex flex-1">
        <aside className={`${sidebarOpen ? "block" : "hidden"} md:block md:w-64 bg-gray-800 text-white p-6`}>
          <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
          <nav>
            <ul>
              <li className="mb-4">
                <Link href="/dashboard/user/overview" className="hover:text-indigo-400 transition">Overview</Link>
              </li>
              <li className="mb-4">
                <Link href="/dashboard/user/profile" className="hover:text-indigo-400 transition">Profile</Link>
              </li>
              <li className="mb-4">
                <Link href="/dashboard/user/settings" className="hover:text-indigo-400 transition">Settings</Link>
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