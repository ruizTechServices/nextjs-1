"use client";
import Image from "next/image"; 
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Navbar Component */}
      <Navbar />
      
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
