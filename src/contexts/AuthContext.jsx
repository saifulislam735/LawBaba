import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/api';

const AuthContext = createContext(null);

// Mock user data
const mockUsers = {
  client: {
    email: 'client@test.com',
    password: 'client123',
    role: 'client',
    firstName: 'John',
    lastName: 'Doe',
    id: 'client1',
  },
  lawyer: {
    email: 'lawyer@test.com',
    password: 'lawyer123',
    role: 'lawyer',
    firstName: 'Sarah',
    lastName: 'Wilson',
    id: 'lawyer1',
    specialization: 'Corporate Law',
    barNumber: 'BAR123456',
    experience: '10 years',
  },
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for stored user data on mount
    const storedUser = localStorage.getItem('user_data');
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        setUser(userData);
        handleRoleBasedRedirect(userData);
      } catch (err) {
        console.error('Error parsing stored user data:', err);
        localStorage.removeItem('user_data');
      }
    }
    setLoading(false);
  }, []);

  const handleRoleBasedRedirect = (userData) => {
    const currentPath = window.location.pathname;
    if (currentPath === '/login' || currentPath === '/signup') {
      if (userData.role === 'lawyer') {
        navigate('/dashboard');
      } else if (userData.role === 'client') {
        navigate('/lawyers');
      }
    }
  };

  const login = async (email, password) => {
    try {
      setError(null);
      const response = await authService.login(email, password);
      const { token, user: userData } = response;
      
      localStorage.setItem('auth_token', token);
      localStorage.setItem('user_data', JSON.stringify(userData));
      
      setUser(userData);
      handleRoleBasedRedirect(userData);
      return userData;
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
      throw err;
    }
  };

  const register = async (userData) => {
    try {
      setError(null);
      const response = await authService.register(userData);
      const { token, user: newUser } = response;
      
      localStorage.setItem('auth_token', token);
      localStorage.setItem('user_data', JSON.stringify(newUser));
      
      setUser(newUser);
      handleRoleBasedRedirect(newUser);
      return newUser;
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
      throw err;
    }
  };

  const logout = () => {
    authService.logout();
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_data');
    setUser(null);
    navigate('/');
  };

  const updateUserData = (newData) => {
    const updatedUser = { ...user, ...newData };
    localStorage.setItem('user_data', JSON.stringify(updatedUser));
    setUser(updatedUser);
  };

  const value = {
    user,
    loading,
    error,
    login,
    register,
    logout,
    updateUserData,
    isAuthenticated: !!user,
    isLawyer: user?.role === 'lawyer',
    isClient: user?.role === 'client',
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
