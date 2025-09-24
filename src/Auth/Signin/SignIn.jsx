// src/components/Signup.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import signupImage from "../../assets/Signup/create.png";   // ✅ corrected
import logo from "../../assets/logo/logo.png";     

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [success, setSuccess] = useState(false); // ✅ for popup message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // ✅ Show success popup
    setSuccess(true);

    // ✅ Redirect after 2 seconds
    setTimeout(() => {
      setSuccess(false);
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen p-4 sm:p-6 bg-blue-100">
      {/* ✅ Success Popup */}
      {success && (
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-green-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg animate-bounce z-10">
          ✅ Account Created Successfully!
        </div>
      )}

      {/* Card */}
      <div className="flex flex-col lg:flex-row w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Left Side - Illustration */}
        <div className="lg:w-[40%] w-full flex items-center justify-center relative overflow-hidden bg-white">
          {/* Half-circle background */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#5B2BEB] via-[#6C36F4] to-[#8848FF] rounded-r-full"></div>

          {/* Illustration */}
          <img
            src={signupImage}
            alt="Create Account Illustration"
            className="w-[420px] object-contain relative z-10"
          />

          {/* Decorative circles */}
          <div className="absolute top-8 right-8 w-6 h-6 bg-gradient-to-br from-[#5B2BEB] via-[#6C36F4] to-[#8848FF]  rounded-full opacity-70 z-0"></div>
          <div className="absolute bottom-8 left-8 w-10 h-10  rounded-full opacity-70 z-0"></div>
        </div>

        {/* Right Side - Form */}
        <div className="lg:w-[60%] w-full flex flex-col justify-center p-8 lg:p-12 bg-white relative">
          {/* Heading */}
          <div className="text-center mb-8">
            <img src={logo} alt="Logo" className="h-10 mx-auto object-contain" />
            <h1 className="text-3xl lg:text-2xl font-bold text-gray-900 mt-3">
              Create Account
            </h1>
            
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 max-w-md mx-auto w-full"
          >
            {/* First + Last Name */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-full h-10 border-2 border-gray-300 rounded-lg px-4 text-base focus:outline-none hover:border-[#555] focus:border-[#555] transition-all"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="w-full h-10 border-2 border-gray-300 rounded-lg px-4 text-base focus:outline-none hover:border-[#555] focus:border-[#555] transition-all"
                  required
                />
                 <div className="absolute  right-8 w-6 h-6 bg-gradient-to-br from-[#5B2BEB] via-[#6C36F4] to-[#8848FF]  rounded-full opacity-70 z-0"></div>
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full h-10 border-2 border-gray-300 rounded-lg px-4 text-base focus:outline-none hover:border-[#555] focus:border-[#555] transition-all"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full h-10 border-2 border-gray-300 rounded-lg px-4 text-base focus:outline-none hover:border-[#555] focus:border-[#555] transition-all"
                required
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full h-10 bg-gradient-to-br from-[#5B2BEB] via-[#6C36F4] to-[#8848FF] text-white text-lg font-semibold rounded-lg hover:shadow-lg hover:scale-[1.02] transition-all duration-200 mt-6"
            >
              Create Account
            </button>
          </form>
          <p className="mt-6 text-gray-600 text-center text-base">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-purple-600 font-semibold cursor-pointer hover:underline hover:text-purple-700 transition-colors"
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;