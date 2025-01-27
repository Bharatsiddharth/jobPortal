"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import api from "@/app/services/api";
import Link from "next/link";

const VerifyEmail = () => {
  const { token } = useParams();  // Get the token from the URL params
  const [isVerified, setIsVerified] = useState(false)
  const [status, setStatus] = useState("Verifying...");

  useEffect(() => {
    if (!token) return;

    const verifyEmail = async () => {
      try {
        // Ensure you await the response here
        const response = await api.get(`/api/companies/verify-email/${token}`);

        // Check if the response is OK (status 200-299)
        if (response.status !== 200) {
          setStatus(`Verification failed: ${response.data.message || 'Unknown error'}`);
          return;
        }

        // If the response is OK, handle the JSON response
        setStatus("Email verified successfully! 🎉");
        setIsVerified(true); // Set verified flag to true
      } catch (error) {
        console.error("Error verifying email:", error);
        setStatus("An error occurred while verifying your email.");
      }
    };

    verifyEmail();
  }, [token]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-md w-full">
      <h1 className="text-3xl font-semibold text-blue-600">Email Verification</h1>
      <p className="mt-4 text-lg text-gray-700">{status}</p>
      {isVerified && (
        <Link
          href="/auth/login"
          className="mt-6 inline-block w-full py-3 text-center text-white bg-blue-600 rounded-lg transform transition duration-300 hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Go to Login
        </Link>
      )}
    </div>
  </div>
  
  );
};

export default VerifyEmail;
