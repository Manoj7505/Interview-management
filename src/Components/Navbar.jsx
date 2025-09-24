import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../Auth/Signin/authReducer';
import { ROLE_CONFIG } from './Role_Config';
import { Icons } from './Icons';

const Navbar = () => {
  const { user, logout } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const location = useLocation();

  if (!user) return null;

  const config = ROLE_CONFIG[user.role];
  const theme = config?.theme;
  const currentPath = location.pathname;
  const currentNav = config?.navigation?.find(nav => nav.path === currentPath);
  const pageTitle = currentNav?.label || config?.title || 'Dashboard';

  return (
    <header className={`bg-gradient-to-r from-${theme?.secondary} via-white to-${theme?.secondary} border-b border-${theme?.border} px-6 py-4 shadow-sm`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className={`text-2xl font-bold text-${theme?.primary} tracking-tight`}>
            {pageTitle}
          </h1>
        </div>

        {/* Center Section - Search */}
        {/* <div className="flex-1 max-w-xl mx-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              {Icons.search(`h-5 w-5 text-${theme?.accent}`)}
            </div>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-2.5 border border-${theme?.border} rounded-xl bg-white/70 backdrop-blur-sm placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-${theme?.accent} focus:border-transparent transition-all duration-200`}
            />
          </div>
        </div> */}

        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className={`p-2.5 cursor-pointer text-${theme?.accent} hover:text-${theme?.primary} hover:bg-white/80 rounded-xl transition-all duration-200 relative`}
            >
              {Icons.bell('w-6 h-6')}
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium shadow-lg">
                3
              </span>
            </button>
          </div>
          <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-sm border border-white/20">
            <div className={`w-10 h-10 bg-gradient-to-r ${theme?.gradient} rounded-xl flex items-center justify-center shadow-sm`}>
              <span className="text-white text-sm font-bold">
                {user.name?.charAt(0)?.toUpperCase() || user.role?.charAt(0)?.toUpperCase()}
              </span>
            </div>
            <div className="hidden sm:block text-left">
              <p className={`text-sm font-semibold text-${theme?.primary} capitalize`}>
                {user.name || user.role}
              </p>
              <p className="text-xs text-gray-500 truncate max-w-32">
                {user.gmail}
              </p>
            </div>
            <button
              onClick={logout}
              className={`px-4 py-2 cursor-pointer bg-gradient-to-r ${theme?.gradient} text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5`}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;