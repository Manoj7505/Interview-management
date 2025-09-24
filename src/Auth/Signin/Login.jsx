import React, { useState } from "react";
import login from "../../assets/login/login.png";
import logo from "../../assets/logo/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./authReducer"; // ✅ use auth context

const Login = () => {
  const [formData, setFormData] = useState({
    userId: "",
    role: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const auth = useAuth(); // get entire auth context

  // Prefer whichever login function exists in your context (login or loginUser)
  const loginFn = auth?.login || auth?.loginUser;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.userId.trim()) {
      newErrors.userId = "User ID is required";
    }
    if (!formData.role) {
      newErrors.role = "Please select a role";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (!loginFn) {
      // Auth context doesn't expose login function -> debug hint
      setErrors({ general: "Auth provider is not configured correctly." });
      console.error("Auth context missing login function:", auth);
      return;
    }

    setIsLoading(true);
    try {
      // NOTE: convert your userId into the field name your auth expects (gmail)
      const payload = {
        gmail: formData.userId,
        password: formData.password,
        role: formData.role,
      };

      console.log("Attempting login with:", payload);
      const result = await loginFn(payload); // expected to return { success: true } on success

      console.log("loginFn result:", result, "auth state:", auth);

      // If your auth function dispatches/loading/errors inside the context,
      // it may also set auth.isAuthenticated and auth.user — we handle both cases.
      if (result && result.success) {
        // redirect to role-based dashboard
        switch (formData.role) {
          case "admin":
            navigate("/admin/dashboard");
            break;
          case "hr":
            navigate("/hr/dashboard");
            break;
             case "interviewer":
            navigate("/interviewer/dashboard");
            break;
            case "candidate":
            navigate("/candidate/dashboard");
            break;
          default:
            navigate("/unauthorized");
        }
        return;
      }

      // If loginFn didn't return a result object, check auth state
      if (auth?.isAuthenticated || auth?.user) {
        navigate(`/${formData.role}/dashboard`);
        return;
      }

      // Show an error if we ended up here
      setErrors({
        general:
          (result && result.error) ||
          auth?.error ||
          "Login failed. Please try again.",
      });
    } catch (error) {
      console.error("Login error (caught):", error);
      setErrors({ general: "Login failed. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl w-full relative">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-10 relative z-10">
          <div className="w-full max-w-md">
            <div className="flex justify-center mb-6">
              <img src={logo} alt="Logo" className="h-14" />
            </div>

            <h2 className="text-3xl font-bold text-center mb-8">Login Now</h2>

            {errors.general && (
              <p className="text-red-500 text-sm mb-4 text-center">
                {errors.general}
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  name="userId"
                  value={formData.userId}
                  onChange={handleChange}
                  placeholder="Email or Username"
                  className={`w-full h-11 px-5 py-3 border rounded-xl focus:outline-none focus:ring-2 ${
                    errors.userId
                      ? "border-red-400 focus:ring-red-300"
                      : "border-gray-300 focus:ring-blue-400"
                  }`}
                />
                {errors.userId && (
                  <p className="text-red-500 text-xs mt-1">{errors.userId}</p>
                )}
              </div>

              <div>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className={`w-full h-11 px-5 py-3 border rounded-xl focus:outline-none focus:ring-2 ${
                    errors.role
                      ? "border-red-400 focus:ring-red-300"
                      : "border-gray-300 focus:ring-blue-400"
                  }`}
                >
                  <option value="">Select Role</option>
                  <option value="admin">Admin</option>
                  <option value="hr">HR</option>
                  <option value="interviewer">Interviewer</option>
                  <option value="candidate">Candidate</option>
                </select>
                {errors.role && (
                  <p className="text-red-500 text-xs mt-1">{errors.role}</p>
                )}
              </div>

              <div>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className={`w-full h-11 px-5 py-3 border rounded-xl focus:outline-none focus:ring-2 ${
                    errors.password
                      ? "border-red-400 focus:ring-red-300"
                      : "border-gray-300 focus:ring-blue-400"
                  }`}
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition disabled:bg-blue-400"
              >
                {isLoading ? "Logging in..." : "LOGIN"}
              </button>
            </form>

            <div className="mt-6 text-center text-sm">
              <p>
                Not a member?{" "}
                <Link to="/signin" className="text-yellow-500 font-semibold">
                  Signup now
                </Link>
              </p>
              <Link
                to="/forgot-password"
                className="text-blue-500 hover:underline block mt-2"
              >
                Forgot your password?
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex w-1/2 items-center justify-center relative bg-blue-700 rounded-l-full">
          <div className="absolute top-10 right-20 w-10 h-10 bg-blue-400 rounded-full opacity-70"></div>
          <div className="absolute bottom-10 left-30 w-14 h-14 bg-blue-300 rounded-full opacity-70"></div>
          <img
            src={login}
            alt="Login Illustration"
            className="max-h-[400px] object-contain relative z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;