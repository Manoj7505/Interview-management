import React, { useState } from "react";
import { Mail, Phone, MapPin, ExternalLink, Calendar, Building2, User } from "lucide-react";

const LinkedInProfileView = ({ data, onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-full mx-auto">
         <div className="pt-4 px-8  flex justify-end">
          <button
            onClick={onBack}
            className="px-6 py-2 cursor-pointer bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-semibold transition-all duration-200 shadow-sm"
          >
            Back to Edit
          </button>
        </div>
        <div className="relative mt-4">
          <div className="h-56  bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            
          </div>
          <div className="absolute -bottom-16 left-8">
            <div className="w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full border-4 border-white shadow-xl flex items-center justify-center text-4xl font-bold text-gray-600">
              <User size={48} />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-t-3xl pt-20 px-8 pb-6 shadow-lg">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
              <p className="text-xl text-gray-700 mt-1">
                {data.experience !== "Fresher" ? data.experience.role : "Recent Graduate"}
              </p>
              <div className="flex items-center gap-4 mt-3 text-gray-600">
                <div className="flex items-center gap-1">
                  <MapPin size={16} />
                  <span>{data.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Mail size={16} />
                  <span>{data.email}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Phone size={16} />
                  <span>{data.phone}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            {data.linkedin && (
              <a
                href={data.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md"
              >
                <ExternalLink size={16} />
                LinkedIn
              </a>
            )}
            {data.github && (
              <a
                href={data.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg hover:from-gray-900 hover:to-black transition-all duration-200 shadow-md"
              >
                <ExternalLink size={16} />
                GitHub
              </a>
            )}
            {data.portfolio && (
              <a
                href={data.portfolio}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-md"
              >
                <ExternalLink size={16} />
                Portfolio
              </a>
            )}
          </div>
        </div>
        <div className="px-8 pb-8 space-y-6 bg-gradient-to-b from-white to-gray-50">
        
          <div className="bg-white border-0 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">About</h2>
            <p className="text-gray-700 leading-relaxed">
              {data.experience !== "Fresher" 
                ? `Experienced ${data.experience.role} with expertise in various technologies and a passion for creating innovative solutions. ${data.experience.description || ''}`
                : "Recent graduate eager to start a career in technology and make meaningful contributions to innovative projects."
              }
            </p>
          </div>
          <div className="bg-white border-0 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Experience</h2>
            {data.experience === "Fresher" ? (
              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                  <Building2 size={20} className="text-blue-600" />
                </div>
                <div>
                  <p className="font-medium">Recent Graduate</p>
                  <p className="text-sm text-gray-500">Looking for opportunities</p>
                </div>
              </div>
            ) : (
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Building2 size={20} className="text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{data.experience.role}</h3>
                  <p className="text-gray-600 font-medium">{data.experience.company}</p>
                  <div className="flex items-center gap-1 mt-1 text-gray-500 text-sm">
                    <Calendar size={14} />
                    <span>{data.experience.duration}</span>
                  </div>
                  {data.experience.description && (
                    <p className="mt-3 text-gray-700">{data.experience.description}</p>
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="bg-white border-0 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {data.skills.map((skill, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl hover:from-blue-50 hover:to-indigo-50 transition-all duration-200 border border-gray-100">
                  <span className="font-medium text-gray-900">{skill.name}</span>
                  {skill.level && (
                    <span className="text-xs bg-gradient-to-r from-slate-600 to-slate-700 text-white px-2 py-1 rounded-full shadow-sm">
                      {skill.level}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
          {data.projects && data.projects.length > 0 && data.projects.some(p => p.title) && (
            <div className="bg-white border-0 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Projects</h2>
              <div className="space-y-4">
                {data.projects.filter(p => p.title).map((project, i) => (
                  <div key={i} className="border-l-4 border-gradient-to-b from-blue-500 to-indigo-600 bg-gradient-to-r from-blue-50/50 to-transparent pl-4 py-2 rounded-r-lg">
                    <h3 className="font-semibold text-lg text-gray-900">{project.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{project.tech}</p>
                    <div className="flex gap-3 mt-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200"
                        >
                          <ExternalLink size={14} />
                          GitHub
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200"
                        >
                          <ExternalLink size={14} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="bg-white border-0 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Personal Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-xl">
                <p className="text-sm text-gray-500">Date of Birth</p>
                <p className="font-medium text-black">{data.dob}</p>
              </div>
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-xl">
                <p className="text-sm text-gray-500">Gender</p>
                <p className="font-medium capitalize text-black">{data.gender}</p>
              </div>
            </div>
          </div>
          {data.resume && (
            <div className="bg-white border-0 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Resume</h2>
              <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl border border-red-100">
                <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-200 rounded-xl flex items-center justify-center shadow-sm">
                  <span className="text-red-600 text-sm font-bold">PDF</span>
                </div>
                <span className="font-medium text-black">{data.resume.name}</span>
              </div>
            </div>
          )}
        </div>
        
        <div className="h-8"></div>
      </div>
    </div>
  );
};

export default LinkedInProfileView;