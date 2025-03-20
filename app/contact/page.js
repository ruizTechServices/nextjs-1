"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

////This needs to be in Supabase, but first put it into Prisma ORM. 

export default function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    comment: ""
  });
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submission:", formData);
    // Reset form after submission
    setFormData({
      name: "",
      phone: "",
      email: "",
      comment: ""
    });
  };
  
  return (
    <main className="flex flex-col items-center min-h-screen p-6 md:p-12 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <nav className="bg-gray-800 text-white shadow-lg sticky top-0 z-10 w-full mb-10">
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
          
          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden mt-4 pb-2`}>
            <div className="flex flex-col space-y-3">
              <Link href="/" className="hover:text-blue-300 transition duration-300">Home</Link>
              <Link href="/about" className="hover:text-blue-300 transition duration-300">About</Link>
              <Link href="/contact" className="hover:text-blue-300 transition duration-300">Contact</Link>
              <Link href="/admin-dash/admin" className="hover:text-blue-300 transition duration-300">Admin</Link>
              <Link href="/dashboard/user" className="hover:text-blue-300 transition duration-300">Dashboard</Link>
            </div>
          </div>
        </div>
      </nav>
      
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-white dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="phone">
              Phone
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-white dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-white dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="comment">
              Comment
            </label>
            <textarea 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-white dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              required
              placeholder="Your Comment"
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
