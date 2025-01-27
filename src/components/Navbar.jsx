"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import { Menu, X } from "lucide-react";
import { useAuth } from "../app/contexts/authContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Handle mobile menu toggle
  const { user, logout } = useAuth(); // Access the user state and logout function from the AuthContext
  const pathname = usePathname(); // Get the current path

  const isActive = (path) => pathname === path; // Check if the path matches the current pathname

  return (
    <nav className="bg-gray-100 text-gray-700 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center">
          <span className="text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 16h-1v-4h-1m1-4h.01M6 18v-2a4 4 0 014-4h4a4 4 0 014 4v2m-4-4h.01"
              />
            </svg>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center text-sm">
          <Link
            href="/"
            className={`${
              isActive("/") ? "text-blue-600 font-bold" : "hover:text-blue-500"
            } transition`}
          >
            Home
          </Link>
          <Link
            href="/jobs"
            className={`${
              isActive("/jobs") ? "text-blue-600 font-bold" : "hover:text-blue-500"
            } transition`}
          >
            Jobs
          </Link>
          <Link
            href="/about"
            className={`${
              isActive("/about") ? "text-blue-600 font-bold" : "hover:text-blue-500"
            } transition`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`${
              isActive("/contact") ? "text-blue-600 font-bold" : "hover:text-blue-500"
            } transition`}
          >
            Contact
          </Link>
        </div>

        {/* Login Button */}
        <div className="hidden md:flex">
          <Link
            href="/auth/login"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-600 transition"
          >
            <span className="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7"
                />
              </svg>
            </span>
            Login
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none text-gray-700"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-100">
          <ul className="flex flex-col space-y-4 py-4 px-4">
            <li>
              <Link
                href="/dashboard"
                className={`${
                  isActive("/dashboard") ? "text-blue-600 font-bold" : "hover:text-blue-500"
                }`}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/jobs"
                className={`${
                  isActive("/jobs") ? "text-blue-600 font-bold" : "hover:text-blue-500"
                }`}
              >
                Jobs
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`${
                  isActive("/about") ? "text-blue-600 font-bold" : "hover:text-blue-500"
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`${
                  isActive("/contact") ? "text-blue-600 font-bold" : "hover:text-blue-500"
                }`}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/auth/login"
                className="block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
