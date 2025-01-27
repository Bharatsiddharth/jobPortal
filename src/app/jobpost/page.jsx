"use client"; // Ensure this component is treated as a client component
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/app/services/api';
import { useAuth } from '../contexts/authContext';

const JobForm = () => {
  const { user } = useAuth();  // Get the user state from the AuthContext
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');
  const [endDate, setEndDate] = useState('');
  const [candidateEmails, setCandidateEmails] = useState('');

  useEffect(() => {
    if (!user) {
      // If the user is not logged in, redirect to the login page
      router.push('/auth/login');
    }
  }, [user, router]); // Redirect to login if user is not logged in

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // First, post the job
      const { data: jobData } = await api.post('/api/jobs/post', {
        title,
        description,
        experienceLevel,
        endDate,
        candidateEmails: candidateEmails.split(',').map(email => email.trim()), // Split emails by comma
      });

      // Redirect to jobs page after successful post
      window.location.href = "/jobs";

      // Reset form
      setTitle('');
      setDescription('');
      setExperienceLevel('');
      setEndDate('');
      setCandidateEmails('');
    } catch (error) {
      alert('Failed to post job: ' + (error.response?.data?.message || error.message));
    }
  };

  if (!user) {
    return <div>Loading...</div>;  // Optionally show a loading state while checking user authentication
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Post a Job</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Job Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Experience Level</label>
        <select
          value={experienceLevel}
          onChange={(e) => setExperienceLevel(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          required
        >
          <option value="">Select Experience Level</option>
          <option value="BEGINNER">BEGINNER</option>
          <option value="INTERMEDIATE">INTERMEDIATE</option>
          <option value="EXPERT">EXPERT</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">End Date</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Candidate Emails (comma separated)</label>
        <input
          type="text"
          value={candidateEmails}
          onChange={(e) => setCandidateEmails(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
        Post Job
      </button>
    </form>
  );
};

export default JobForm;
