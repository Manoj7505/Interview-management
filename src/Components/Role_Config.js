export const ROLE_CONFIG = {
  admin: {
    title: "Admin Dashboard",
    theme: {
      primary: "blue-600",
      secondary: "blue-50",
      accent: "blue-500",
      gradient: "from-blue-500 to-blue-700",
      border: "blue-200"
    },
    navigation: [
      { path: "/admin/dashboard", label: "Dashboard", icon: "dashboard" },
      {path: "/admin/hr", label: "HR Details", icon: "users" },   
      {path: "/admin/interviewers", label: "Interviewers", icon: "users" },
      {path: "/admin/candidates", label: "Candidates", icon: "users" },
      {path: "/admin/recruitment", label: "Recruitment", icon: "users" },
      { path: "/admin/users", label: "User Management", icon: "users" },
      { path: "/admin/settings", label: "Settings", icon: "settings" },
      { path: "/admin/reports", label: "Reports", icon: "reports" }
    ]
  },
  hr: {
    title: "HR Dashboard", 
    theme: {
      primary: "green-600",
      secondary: "green-50", 
      accent: "green-500",
      gradient: "from-green-500 to-green-700",
      border: "green-200"
    },
    navigation: [
      { path: "/hr/dashboard", label: "Dashboard", icon: "dashboard" },
      { path: "/hr/overview", label: "overview", icon: "users" },
      { path: "/hr/candidates", label: "Candidates", icon: "users" },
      { path: "/hr/jobpostings", label: "jobpostings", icon: "users" },
      { path: "/hr/Calender", label: "Calender", icon: "calendar" },
      { path: "/hr/interviews", label: "Interviews", icon: "calendar" },
      { path: "/hr/reports", label: "Reports", icon: "reports" },
      { path: "/hr/users", label: "Users", icon: "users" }
    ]
  },
  interviewer: {
    title: "Interviewer Portal",
    theme: {
      primary: "purple-600",
      secondary: "purple-50",
      accent: "purple-500", 
      gradient: "from-purple-500 to-purple-700",
      border: "purple-200"
    },
    navigation: [
      { path: "/interviewer/dashboard", label: "Dashboard", icon: "dashboard" },
      { path: "/interviewer/schedule", label: "Scheduled", icon: "calendar" },
      { path: "/interviewer/status", label: "InterviewStatus", icon: "edit" }
    ]
  },
  candidate: {
    title: "Candidate Portal",
    theme: {
      primary: "indigo-600",
      secondary: "indigo-50",
      accent: "indigo-500",
      gradient: "from-indigo-500 to-indigo-700", 
      border: "indigo-200"
    },
    navigation: [
      // { path: "/candidate/dashboard", label: "Dashboard", icon: "dashboard" },
      { path: "/candidate/profile", label: "My Profile", icon: "user" },
      { path: "/candidate/applications", label: "Applications", icon: "briefcase" },
      { path: "/candidate/interviews", label: "My Interviews", icon: "calendar" }
    ]
  }
};