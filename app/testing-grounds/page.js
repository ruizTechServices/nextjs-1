"use client";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function TestingGround() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      
      <div className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-center">Testing Grounds</h1>
        <p className="text-lg text-center mb-12">This area is for experimental features and testing.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Test here  */}
          {/* Here is where we will test the new features and components */}

          

        </div>
      </div>
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p> 2025 BadSites. Testing Environment.</p>
        </div>
      </footer>
    </main>
  );
}
