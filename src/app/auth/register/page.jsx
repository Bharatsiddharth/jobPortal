"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import api from "@/app/services/api";
import { redirect } from "next/navigation";

const RegisterPage = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false); // Loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when the form is being submitted

    try {
      const response = await api.post("/api/companies/register", form);
      
      // Check if the response has the expected message
      if (response.data?.message) {
        toast.success(response.data.message || "Registration successful!");
      } else {
        toast.success("Registration successful!");
      }

      // Optionally clear the form fields
      setForm({ name: "", email: "", password: "" });

      // Redirect to login page after successful registration
      window.location.href = "/auth/login";
    } catch (error) {
      // Log error details for debugging
      console.error("Registration error:", error); // Log the error object
      const errorMessage = error.response?.data?.message || error.message || "Registration failed. Please try again.";
      toast.error(errorMessage); // Display the error message
    } finally {
      setLoading(false); // Set loading to false after the process is done
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-sm w-full"
      >
        <h1 className="text-xl font-bold mb-4 text-center">Register</h1>
        <input
          type="text"
          placeholder="Company Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          className="w-full px-3 py-2 mb-3 border rounded-lg focus:outline-none"
        />
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
          className={`w-full ${loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700'} text-white font-bold py-2 px-4 rounded`}
          disabled={loading} // Disable button while loading
        >
          {loading ? (
            <span>Loading...</span>
          ) : (
            "Register"
          )}
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
