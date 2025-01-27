"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import api from "@/app/services/api";

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
      <div className="p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-blue-600">Email Verification</h1>
        <p className="mt-4 text-gray-700">{status}</p>
        {isVerified && (
          <Link
            href="/auth/login"
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Go to Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;
