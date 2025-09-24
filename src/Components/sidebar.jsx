import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../Auth/Signin/authReducer';
import { useState } from 'react';
import { ROLE_CONFIG } from './Role_Config';
import { Icons } from './Icons';

const Sidebar = () => {
  const { user } = useAuth();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  if (!user) return null;

  const config = ROLE_CONFIG[user.role];
  const theme = config?.theme;

  const isActive = (path) => location.pathname === path;

  return (
    <div className={`${collapsed ? 'w-20' : 'w-64'} bg-white shadow-xl h-screen flex flex-col transition-all duration-300 border-r border-gray-100`}>
 
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <div>
              <h2 className={`text-xl font-bold text-${theme?.primary}`}>
                {config?.title}
              </h2>
              <p className="text-sm text-gray-500 capitalize mt-1">
                {user.role} Portal
              </p>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className={`p-2 rounded-lg hover:bg-${theme?.secondary} text-${theme?.accent} transition-colors`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {config?.navigation?.map((item) => {
          const IconComponent = Icons[item.icon];
          const active = isActive(item.path);
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`
                flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 group
                ${active 
                  ? `bg-gradient-to-r ${theme?.gradient} text-white shadow-lg transform scale-105` 
                  : `text-gray-600 hover:bg-${theme?.secondary} hover:text-${theme?.primary}`
                }
              `}
            >
              <div className={`${active ? 'text-white' : `text-${theme?.accent}`} group-hover:scale-110 transition-transform`}>
                {IconComponent && IconComponent()}
              </div>
              {!collapsed && (
                <span className={`${active ? 'text-white' : ''} font-medium`}>
                  {item.label}
                </span>
              )}
            </Link>
          );
        })}
      </nav>
      {!collapsed && (
        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center space-x-3 p-3 rounded-xl bg-gray-50">
            <div className={`w-10 h-10 bg-gradient-to-r ${theme?.gradient} rounded-lg flex items-center justify-center shadow-sm`}>
              <span className="text-white text-sm font-bold">
                {user.name?.charAt(0)?.toUpperCase() || user.role?.charAt(0)?.toUpperCase()}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {user.name || 'User'}
              </p>
              <p className="text-xs text-gray-500 truncate">
                {user.gmail}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Sidebar;