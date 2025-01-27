"use client";


import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";


export default function Home() {
  // const router = useRouter();

  return (
   <>
    <Navbar/>
     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-blue-900 drop-shadow-lg animate-fadeIn">
          Welcome to the Job Portal
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Discover the best jobs or post one today!
        </p>
      </div>

    

      <div className="mt-10">
        {/* Decorative Image or Icon */}
        <Image
          src={"https://images.unsplash.com/photo-1653669487361-8102878e1201?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
          alt="Job Search Illustration"
          width={400}
          height={300}
          className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
        />
      </div>
    </div>
   </>
  );
}
