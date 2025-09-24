import { createContext, useContext, useReducer, useEffect } from 'react';

const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return { ...state, loading: true, error: null };
    case 'LOGIN_SUCCESS':
      const userData = { ...action.payload, loginTime: new Date().toISOString() };
      localStorage.setItem('user', JSON.stringify(userData));
      return { 
        ...state, 
        user: userData, 
        isAuthenticated: true, 
        loading: false, 
        error: null,
        initialized: true  // ✅ Add this
      };
    case 'LOGIN_FAILURE':
      return { 
        ...state, 
        loading: false, 
        error: action.payload,
        isAuthenticated: false,
        user: null,
        initialized: true  // ✅ Add this
      };
    case 'LOGOUT':
      localStorage.removeItem('user');
      return { 
        ...state, 
        user: null, 
        isAuthenticated: false, 
        loading: false, 
        error: null,
        initialized: true  // ✅ Add this
      };
    case 'LOAD_USER':
      return { 
        ...state, 
        user: action.payload, 
        isAuthenticated: !!action.payload,
        loading: false,
        initialized: true  // ✅ Add this - auth state is now determined
      };
    case 'UPDATE_PROFILE':
      const updatedUser = { ...state.user, ...action.payload };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      return { ...state, user: updatedUser };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
    initialized: false  // ✅ Add this - prevents premature redirects
  });

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        // Optional: Add token expiration check here
        const loginTime = new Date(user.loginTime);
        const now = new Date();
        const hoursSinceLogin = (now - loginTime) / (1000 * 60 * 60);
        
        // Auto-logout after 24 hours (optional)
        if (hoursSinceLogin > 24) {
          localStorage.removeItem('user');
          dispatch({ type: 'LOAD_USER', payload: null });
        } else {
          dispatch({ type: 'LOAD_USER', payload: user });
        }
      } catch (error) {
        localStorage.removeItem('user');
        dispatch({ type: 'LOAD_USER', payload: null });
      }
    } else {
      // ✅ Still dispatch LOAD_USER to set initialized: true
      dispatch({ type: 'LOAD_USER', payload: null });
    }
  }, []);

  const login = async (credentials) => {
    dispatch({ type: 'LOGIN_START' });
    
    try {
      // Simulate API call - replace with actual API integration
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock validation - replace with real authentication
      if (credentials.gmail && credentials.password) {
        const userData = {
          id: Date.now(),
          gmail: credentials.gmail,
          role: credentials.role,
          name: credentials.gmail.split('@')[0],
          avatar: null
        };
        
        dispatch({ type: 'LOGIN_SUCCESS', payload: userData });
        return { success: true };
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  const updateProfile = (profileData) => {
    dispatch({ type: 'UPDATE_PROFILE', payload: profileData });
  };

  return (
    <AuthContext.Provider value={{
      ...state,
      login,
      logout,
      updateProfile
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export default authReducer;