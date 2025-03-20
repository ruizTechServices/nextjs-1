"use client";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Navbar */}
      <Navbar />
      
      <div className="w-full max-w-5xl space-y-12 animate-fadeIn p-6 md:p-12">
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">About BadSites.net</h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">Your trusted resource for identifying and avoiding problematic websites online.</p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300">BadSites.net empowers internet users by providing a collaborative platform where people can share experiences and insights about questionable websites. We believe in creating a safer digital environment through community-driven awareness.</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">What We Offer</h2>
            <p className="text-gray-600 dark:text-gray-300">Our platform allows users to post detailed reviews, security analyses, and performance metrics for websites they've encountered issues with. From deceptive practices to security vulnerabilities, we help you stay informed.</p>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-4 transform transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Report</h3>
              <p className="text-gray-600 dark:text-gray-300">Users submit detailed reports about problematic websites they've encountered.</p>
            </div>
            <div className="text-center p-4 transform transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Analyze</h3>
              <p className="text-gray-600 dark:text-gray-300">Our community reviews and validates reports, adding technical insights.</p>
            </div>
            <div className="text-center p-4 transform transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Protect</h3>
              <p className="text-gray-600 dark:text-gray-300">Users access our database before visiting unfamiliar websites to stay safe online.</p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-xl shadow-lg text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">Join Our Community</h2>
          <p className="text-xl text-center mb-8">Help make the internet safer for everyone by contributing your experiences and knowledge.</p>
          <div className="flex justify-center">
            <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Sign Up Now
            </button>
          </div>
        </section>
      </div>

      <footer className="w-full max-w-5xl mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
        <p className="text-center text-gray-500 dark:text-gray-400"> 2024 BadSites.net. All rights reserved.</p>
      </footer>
    </main>
  );
}
