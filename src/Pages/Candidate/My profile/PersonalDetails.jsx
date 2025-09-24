import React, { useState } from "react";
import LinkedInProfileView from "./ProfileView";

const PersonalDetails = ({ onSubmit }) => {
  const [showLinkedInView, setShowLinkedInView] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    location: "",
    linkedin: "",
    github: "",
    portfolio: "",
    experienceType: "fresher",
  });

  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState("");
  const [skillLevel, setSkillLevel] = useState("");

  const [experience, setExperience] = useState({
    company: "",
    role: "",
    duration: "",
    description: "",
  });

  const [projects, setProjects] = useState([
    { title: "", tech: "", github: "", live: "" },
  ]);

  const [resume, setResume] = useState(null);
  const [error, setError] = useState("");
  const profileData = {
    ...form,
    skills,
    experience: form.experienceType === "fresher" ? "Fresher" : experience,
    projects,
    resume,
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleExperienceChange = (e) =>
    setExperience({ ...experience, [e.target.name]: e.target.value });

  const handleAddSkill = () => {
    if (skillInput.trim() !== "") {
      setSkills([...skills, { name: skillInput, level: skillLevel }]);
      setSkillInput("");
      setSkillLevel("");
    }
  };
  const handleRemoveSkill = (i) =>
    setSkills(skills.filter((_, idx) => idx !== i));

  const handleProjectChange = (index, field, value) => {
    const updated = [...projects];
    updated[index][field] = value;
    setProjects(updated);
  };
  const handleAddProject = () =>
    setProjects([...projects, { title: "", tech: "", github: "", live: "" }]);
  const handleRemoveProject = (i) =>
    setProjects(projects.filter((_, idx) => idx !== i));

  const handleResumeUpload = (e) => setResume(e.target.files[0]);

  const validateForm = () => {
    if (!form.name || !form.email || !form.phone || !form.dob || !form.gender || !form.location) {
      setError("⚠️ Please fill all required personal details.");
      return false;
    }
    if (skills.length === 0) {
      setError("⚠️ Please add at least one skill.");
      return false;
    }
    if (form.experienceType === "experienced" && (!experience.company || !experience.role || !experience.duration)) {
      setError("⚠️ Please fill all experience details.");
      return false;
    }
    if (!resume) {
      setError("⚠️ Please upload your resume.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setShowLinkedInView(true);
    if (onSubmit) onSubmit(profileData);
  };
  if (showLinkedInView) {
    return (
      <LinkedInProfileView
        data={profileData}
        onBack={() => setShowLinkedInView(false)}
      />
    );
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 text-black bg-white p-6 rounded-2xl shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-2">Candidate Profile</h2>

      {error && <p className="text-red-500 font-medium">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="p-2 rounded border border-gray-200"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="p-2 rounded border border-gray-200"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Phone *
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter your phone"
            className="p-2 rounded border border-gray-200"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Date of Birth *
          </label>
          <input
            type="date"
            name="dob"
            value={form.dob}
            onChange={handleChange}
            className="p-2 rounded border border-gray-200"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Gender *
          </label>
          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            className="p-2 rounded border border-gray-200"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="na">Prefer not to say</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Location *
          </label>
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="Enter location"
            className="p-2 rounded border border-gray-200"
          />
        </div>
      </div>
      <div>
        <h3 className="font-semibold">Skills *</h3>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Skill"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            className="flex-1 p-2 rounded border border-gray-200"
          />
          <select
            value={skillLevel}
            onChange={(e) => setSkillLevel(e.target.value)}
            className="flex-1 p-2 rounded border border-gray-200"
          >
            <option value="">Level</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Expert</option>
          </select>

          <button
            type="button"
            onClick={handleAddSkill}
            className="px-4 py-2 rounded text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer"
          >
            Add
          </button>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {skills.map((s, i) => (
            <span
              key={i}
              className="bg-gray-100 px-3 py-1 rounded-full"
            >
              {s.name} ({s.level})
              <button
                type="button"
                onClick={() => handleRemoveSkill(i)}
                className="ml-2 text-red-500"
              >
                ✕
              </button>
            </span>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1">LinkedIn</label>
          <input
            type="url"
            name="linkedin"
            value={form.linkedin}
            onChange={handleChange}
            placeholder="LinkedIn profile link"
            className="w-full p-2 rounded border border-gray-200"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1">GitHub</label>
          <input
            type="url"
            name="github"
            value={form.github}
            onChange={handleChange}
            placeholder="GitHub profile link"
            className="w-full p-2 rounded border border-gray-200"
          />
        </div>
      </div>
      <div>
        <h3 className="font-semibold">Work Experience *</h3>
        <select
          name="experienceType"
          value={form.experienceType}
          onChange={handleChange}
          className="p-2 rounded border border-gray-200 mb-2"
        >
          <option value="fresher">Fresher</option>
          <option value="experienced">Experienced</option>
        </select>
        {form.experienceType === "experienced" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <input
              type="text"
              name="company"
              value={experience.company}
              onChange={handleExperienceChange}
              placeholder="Company"
              className="p-2 rounded border border-gray-200"
            />
            <input
              type="text"
              name="role"
              value={experience.role}
              onChange={handleExperienceChange}
              placeholder="Role"
              className="p-2 rounded border border-gray-200"
            />
            <input
              type="text"
              name="duration"
              value={experience.duration}
              onChange={handleExperienceChange}
              placeholder="Duration"
              className="p-2 rounded border border-gray-200"
            />
            <input
              type="text"
              name="description"
              value={experience.description}
              onChange={handleExperienceChange}
              placeholder="Description"
              className="p-2 rounded border border-gray-200"
            />
          </div>
        )}
      </div>
      <div>
        <h3 className="font-semibold">Projects</h3>
        {projects.map((p, i) => (
          <div key={i} className=" p-3 rounded mb-2">
            <button
              type="button"
              onClick={() => handleRemoveProject(i)}
              className="text-red-500 mb-2 ml-280 cursor-pointer"
            >
              ✕ Remove
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <input
                type="text"
                value={p.title}
                onChange={(e) =>
                  handleProjectChange(i, "title", e.target.value)
                }
                placeholder="Project Title"
                className="p-2 rounded border border-gray-200"
              />
              <input
                type="text"
                value={p.tech}
                onChange={(e) =>
                  handleProjectChange(i, "tech", e.target.value)
                }
                placeholder="Tech Stack"
                className="p-2 rounded border border-gray-200"
              />
              <input
                type="url"
                value={p.github}
                onChange={(e) =>
                  handleProjectChange(i, "github", e.target.value)
                }
                placeholder="GitHub Repo"
                className="p-2 rounded border border-gray-200"
              />
              <input
                type="url"
                value={p.live}
                onChange={(e) =>
                  handleProjectChange(i, "live", e.target.value)
                }
                placeholder="Live Demo"
                className="p-2 rounded border border-gray-200"
              />
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddProject}
          className="mt-2 px-3 py-1 rounded bg-indigo-600 text-white cursor-pointer hover:bg-indigo-700"
        >
          Add Project
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold">Upload Resume *</h3>
          <input
            type="file"
            accept="application/pdf"
            onChange={handleResumeUpload}
            className="w-full p-2 rounded border border-gray-200"
          />
          {resume && <p className="text-sm mt-1">📄 {resume.name}</p>}
        </div>
        <div>
          <h3 className="font-semibold">Portfolio</h3>
          <input
            type="url"
            name="portfolio"
            value={form.portfolio}
            onChange={handleChange}
            placeholder="Portfolio link"
            className="w-full p-2 rounded border border-gray-200"
          />
        </div>
      </div>
      <button
        type="submit"
        className="ml-280 cursor-pointer rounded bg-indigo-600 hover:bg-indigo-700 p-2 text-white"
      >
        Submit
      </button>
    </form>
  );
};

export default PersonalDetails;
