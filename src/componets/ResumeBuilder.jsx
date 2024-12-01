import React, { useState } from 'react';

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({
    name: '',
    jobTitle: '',
    skills: '',
    experience: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Resume Data:', formData);
  };

  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg">
      <h2 className="text-3xl font-bold mb-4">Create Your Professional Resume</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-700"
        />
        <input
          type="text"
          name="jobTitle"
          placeholder="Job Title"
          value={formData.jobTitle}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-700"
        />
        <textarea
          name="skills"
          placeholder="Skills (comma-separated)"
          value={formData.skills}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-700"
        />
        <textarea
          name="experience"
          placeholder="Work Experience"
          value={formData.experience}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-700"
        />
        <button type="submit" className="bg-yellow-400 px-4 py-2 rounded">
          Generate Resume
        </button>
      </form>
    </div>
  );
};

export default ResumeBuilder;
