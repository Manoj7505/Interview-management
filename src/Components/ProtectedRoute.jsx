import { Navigate } from "react-router-dom";
import { useAuth } from "../Auth/Signin/authReducer";
import Sidebar from "./sidebar";
import Navbar from "./Navbar";

const ProtectedRoute = ({ children, requiredRole }) => {
  const { user, isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-indigo-200 rounded-full animate-spin"></div>
            <div className="absolute top-0 left-0 w-16 h-16 border-4 border-indigo-600 rounded-full animate-spin border-t-transparent"></div>
          </div>
          <div className="text-gray-600 font-medium">Loading...</div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Uncomment if role-based protection is needed
  // if (requiredRole && user?.role !== requiredRole) {
  //   return <Navigate to="/unauthorized" replace />;
  // }

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <aside className="flex-shrink-0">
        <Sidebar />
      </aside>
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex-shrink-0 bg-white/95 backdrop-blur-sm shadow-sm z-20">
          <Navbar />
        </header>
        <main className="flex-1 overflow-auto p-6">
          <div className="h-full">
            <div className="bg-white rounded-2xl shadow-sm h-full overflow-auto">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProtectedRoute;