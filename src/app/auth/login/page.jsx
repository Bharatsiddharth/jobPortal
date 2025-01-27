"use client";
import { useState } from "react";
import { toast } from "react-toastify";

import { redirect } from "next/navigation"; // Import redirect for navigation
import { useAuth } from "@/app/contexts/authContext";
import api from "@/app/services/api";

const LoginPage = () => {
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post("/api/companies/login", form);

      if (data && data.token) {
        login(data.token); // Store token in the AuthContext
        toast.success("Logged in successfully!");

        // Redirect to the homepage
        redirect("/"); 
      } else {
        toast.error("No token received. Login failed.");
      }
    } catch (error) {
      console.error("Login error:", error); // Log the error to the console
      // Provide more specific error feedback
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Login failed. Please check your credentials and try again.";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-sm w-full"
      >
        <h1 className="text-xl font-bold mb-4 text-center">Login</h1>
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          className="w-full px-3 py-2 mb-3 border rounded-lg focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
          className="w-full px-3 py-2 mb-3 border rounded-lg focus:outline-none"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
