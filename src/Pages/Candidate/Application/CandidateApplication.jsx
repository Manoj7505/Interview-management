import React from "react";

const CandidateApplication = ({ appliedRole, userSkills = [], source }) => {
  const jobRoles = {
    backend: {
      title: "Backend Developer",
      description:
        "Responsible for building APIs, managing databases, authentication, and server-side logic.",
      skills: [
        "Node.js",
        "Express.js",
        "NestJS",
        "Django",
        "Flask",
        "Spring Boot",
        "GoLang", 
        "Ruby on Rails",
        "PHP",
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Redis",
        "GraphQL",
        "REST API",
        "Docker",
        "Kubernetes",
        "AWS",
        "GCP",
        "Azure",
      ],
    },
    fullstack: {
      title: "Full Stack Developer",
      description:
        "Work on both frontend and backend, build scalable applications end-to-end.",
      skills: [
        "React",
        "Next.js",
        "Angular",
        "Vue.js",
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "Node.js",
        "Express",
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "GraphQL",
        "REST API",
        "Docker",
        "Kubernetes",
        "AWS",
        "GCP",
        "Azure",
        "CI/CD",
      ],
    },
    frontend: {
      title: "Frontend Developer",
      description:
        "Create responsive UI, improve user experience, and integrate APIs.",
      skills: [
        "HTML5",
        "CSS3",
        "Sass",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Angular",
        "Vue.js",
        "Tailwind CSS",
        "Bootstrap",
        "Material UI",
        "Redux",
        "Jest",
        "Webpack",
        "Vite",
        "REST API",
        "GraphQL",
      ],
    },
    datamanagement: {
      title: "Data Management",
      description:
        "Manage and maintain organizational data, ensuring accuracy and consistency.",
      skills: [
        "SQL",
        "Oracle",
        "ETL",
        "Informatica",
        "Data Warehousing",
        "Data Governance",
        "Python",
        "Excel",
      ],
    },
    hr: {
      title: "HR Executive",
      description:
        "Manage recruitment, employee engagement, payroll, and compliance.",
      skills: ["Communication", "Recruitment", "Payroll", "Onboarding", "MS Office"],
    },
    uiux: {
      title: "UI/UX Designer",
      description:
        "Design user-friendly interfaces and improve overall user experience.",
      skills: [
        "Figma",
        "Adobe XD",
        "Sketch",
        "Wireframing",
        "Prototyping",
        "User Research",
        "Photoshop",
      ],
    },
    tester: {
      title: "Software Tester / QA",
      description:
        "Ensure application quality through manual and automated testing.",
      skills: [
        "Selenium",
        "Cypress",
        "JUnit",
        "Postman",
        "API Testing",
        "Automation",
        "Bug Tracking",
      ],
    },
    mobile: {
      title: "Mobile Application Developer",
      description:
        "Develop cross-platform mobile apps with responsive UI and APIs.",
      skills: [
        "React Native",
        "Flutter",
        "Swift",
        "Kotlin",
        "Java",
        "Firebase",
        "REST API",
        "GraphQL",
      ],
    },
    dataanalyst: {
      title: "Data Analyst",
      description:
        "Analyze data, generate insights, and support business decision-making.",
      skills: [
        "Python",
        "R",
        "SQL",
        "Excel",
        "Power BI",
        "Tableau",
        "Statistics",
        "Data Visualization",
      ],
    },
    datascientist: {
      title: "Data Scientist",
      description:
        "Build predictive models, perform data mining, and apply ML algorithms.",
      skills: [
        "Python",
        "R",
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "SQL",
        "Pandas",
        "NumPy",
        "Deep Learning",
        "Machine Learning",
      ],
    },
    aiml: {
      title: "AI/ML Engineer",
      description:
        "Design and deploy AI/ML models for real-world applications.",
      skills: [
        "Python",
        "TensorFlow",
        "PyTorch",
        "OpenCV",
        "NLP",
        "Computer Vision",
        "Deep Learning",
        "MLOps",
        "Keras",
      ],
    },
  };
  const rolesArray = Object.entries(jobRoles).map(([key, value]) => ({
    key,
    ...value,
  }));
  const sortedRoles = rolesArray.sort((a, b) =>
    a.key === appliedRole ? -1 : b.key === appliedRole ? 1 : 0
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Applied Job Role & Other Opportunities
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sortedRoles.map((role) => {
          const matchedSkills = role.skills.filter((skill) =>
            userSkills.includes(skill)
          );

          return (
            <div
              key={role.key}
              className={`p-5 border border-gray-100 rounded-xl bg-gray-100 shadow ${
                role.key === appliedRole ? "border-indigo-500 col-span-2" : ""
              }`}
            >
              <h3 className="text-xl font-semibold text-indigo-700">
                {role.title}
              </h3>
              <p className="text-gray-600 mt-2">{role.description}</p>
              <div className="mt-3">
                <h4 className="font-medium"> Your Matching Skills:</h4>
                {matchedSkills.length > 0 ? (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {matchedSkills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm rounded-full bg-green-600 text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-red-500 text-sm mt-2">
                    ⚠️ No matching skills found for this role.
                  </p>
                )}
              </div>
              {role.key === appliedRole && (
                <div className="mt-4">
                  <span className="px-4 py-1 rounded-full text-sm bg-blue-600 text-white font-medium">
                     Applied via {source || "Unknown"}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CandidateApplication;
