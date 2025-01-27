"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useAuth } from "@/app/contexts/authContext";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth(); // Access the user state and logout function from the context

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/">JobPortal</Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-gray-200">
            Home
          </Link>
          <Link href="/jobs" className="hover:text-gray-200">
            Jobs
          </Link>
          <Link href="/about" className="hover:text-gray-200">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-200">
            Contact
          </Link>

          {/* Job Posting Link - Only visible if user is logged in */}
          {user && (
            <Link
              href="/jobs/post"
              className="bg-purple-500 px-4 py-2 rounded-md hover:bg-purple-600 transition duration-200"
            >
              Post Job
            </Link>
          )}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          {/* If user is logged in, show the logout button, otherwise show login/register */}
          {user ? (
            <>
              <button
                onClick={logout}
                className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 transition duration-200"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/auth/register"
                className="bg-green-500 px-4 py-2 rounded-md hover:bg-green-600 transition duration-200"
              >
                Register
              </Link>
              <Link
                href="/auth/login"
                className="bg-yellow-500 px-4 py-2 rounded-md hover:bg-yellow-600 transition duration-200"
              >
                Login
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-500">
          <ul className="flex flex-col space-y-4 py-4">
            <li>
              <Link href="/" className="block px-4 hover:text-gray-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/jobs" className="block px-4 hover:text-gray-200">
                Jobs
              </Link>
            </li>
            <li>
              <Link href="/about" className="block px-4 hover:text-gray-200">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block px-4 hover:text-gray-200">
                Contact
              </Link>
            </li>
            {/* Job Posting Link - Only visible if user is logged in */}
            {user && (
              <li>
                <Link
                  href="/jobs/post"
                  className="block px-4 py-2 bg-purple-500 rounded-md hover:bg-purple-600"
                >
                  Post Job
                </Link>
              </li>
            )}
            {/* Register/Login Links - Visible when user is not logged in */}
            {!user && (
              <>
                <li>
                  <Link
                    href="/auth/register"
                    className="block px-4 py-2 bg-green-500 rounded-md hover:bg-green-600"
                  >
                    Register
                  </Link>
                </li>
                <li>
                  <Link
                    href="/auth/login"
                    className="block px-4 py-2 bg-yellow-500 rounded-md hover:bg-yellow-600"
                  >
                    Login
                  </Link>
                </li>
              </>
            )}
            {/* If user is logged in, show logout */}
            {user && (
              <li>
                <button
                  onClick={logout}
                  className="block px-4 py-2 bg-red-500 rounded-md hover:bg-red-600"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
