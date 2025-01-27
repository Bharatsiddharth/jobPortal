"use client";
import React, { useEffect, useState } from "react";
import api from "@/app/services/api";
import Navbar from "../../components/Navbar";

const JobsPage = () => {
  const [jobs, setJobs] = useState([]); // State to store jobs
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [sending, setSending] = useState(null); // Track sending state for each job
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track if the user is logged in

  // Check if the user is logged in by verifying token in localStorage or cookies
  useEffect(() => {
    const token = localStorage.getItem("token"); // Assuming token is stored in localStorage
    if (token) {
      setIsLoggedIn(true); // Set logged-in state if token exists
    }
  }, []);

  // Fetch all jobs from the backend API
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const { data } = await api.get("/api/jobs/alljobs"); // GET request to fetch jobs
        setJobs(data); // Store the jobs in state
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching jobs", error);
        setLoading(false); // Set loading to false even in case of an error
      }
    };
    fetchJobs();
  }, []);

  // Function to handle sending emails
  const handleSendEmails = async (jobId) => {
    setSending(jobId); // Indicate sending process for the specific job
    try {
      await api.post("/api/jobs/send-emails", { jobId }); // Send email request
      alert("Emails sent successfully!");
    } catch (error) {
      alert("Failed to send emails: " + (error.response?.data?.message || error.message));
    } finally {
      setSending(null); // Reset sending state
    }
  };

  if (loading) {
    return <div>Loading jobs...</div>; // Show loading message while jobs are being fetched
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
  <h1 className="text-3xl font-bold mb-6 text-center py-10">Job Listings</h1>
  {jobs.length === 0 ? (
    <p className="text-lg text-gray-600">
      No jobs available at the moment.
    </p> // Message when no jobs are available
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs.map((job) => (
        <div
          key={job._id}
          className="bg-gray-100 shadow-md rounded-2xl p-6 transition-transform transform hover:scale-105 hover:shadow-lg"
        >
          {/* Job Title */}
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            {job.title}
          </h2>

          {/* Job Description */}
          <p className="text-gray-700 mb-4 text-sm line-clamp-3">
            {job.description}
          </p>

          {/* Experience Level */}
          <p className="text-gray-600 text-sm">
            <strong className="text-gray-800">Experience Level:</strong>{" "}
            {job.experienceLevel}
          </p>

          {/* Apply Before Date */}
          <p className="text-gray-600 text-sm">
            <strong className="text-gray-800">Apply Before:</strong>{" "}
            {new Date(job.endDate).toLocaleDateString()}
          </p>

          {/* Action Buttons */}
          <div className="flex justify-between items-center mt-4">
            <button
              // Add your application logic if needed
              className="bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition"
            >
              Apply
            </button>
            {isLoggedIn && (
              <button
                onClick={() => handleSendEmails(job._id)} // Trigger email sending for this job
                className={`${
                  sending === job._id
                    ? "bg-gray-400"
                    : "bg-green-500 hover:bg-green-600"
                } text-white font-medium py-2 px-4 rounded-lg transition`}
                disabled={sending === job._id} // Disable button while sending
              >
                {sending === job._id ? "Sending..." : "Send Emails"}
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  )}
</div>

    </>
  );
};

export default JobsPage;
