"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import api from "@/app/services/api";

const VerifyEmail = () => {
  const { token } = useParams();  // Get the token from the URL params
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
      </div>
    </div>
  );
};

export default VerifyEmail;
