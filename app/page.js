import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to BadSites</h1>
      <p className="text-xl mb-8 text-gray-600">We're crafting something awesome for you.</p>
      <div className="relative w-24 h-24 mb-8">
        <Image
          src="/logo-1.png"
          alt="BadSites Logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <p className="text-lg text-gray-700">Our site is under construction. Stay tuned!</p>
      {/* <button className="mt-8 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
        Notify Me
      </button> */}
    </main>
  );
}
