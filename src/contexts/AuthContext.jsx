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
    name: 'কামরুল ইসলাম',
    lastName: 'খান',
    id: 'client1',
  },
  lawyer: {
    email: 'lawyer@test.com',
    password: 'lawyer123',
    role: 'lawyer',
    firstName: 'মো. সোহেল',
    lastName: 'রানা',
    id: 'lawyer1',
    specialization: 'ক্রিমিনাল আইন',
    barNumber: 'BAR123456',
    experience: '12 বছর',
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

    // Redirection logic based on the login/signup path
    if (currentPath === '/client-login' || currentPath === '/client-signup') {
      if (userData.role === 'client') {
        navigate('/lawyers'); // Redirect to client dashboard or lawyers' list
      } else {
        navigate('/lawyer-login'); // If lawyer logged in from client login/signup
      }
    } else if (currentPath === '/lawyer-login' || currentPath === '/lawyer-signup') {
      if (userData.role === 'lawyer') {
        navigate('/dashboard'); // Redirect to lawyer dashboard
      } else {
        navigate('/client-login'); // If client logged in from lawyer login/signup
      }
    }
  };

  const login = async (email, password) => {
    try {
      setError(null);

      // Check for mock users based on email and password
      let userData = null;
      if (email === mockUsers.client.email && password === mockUsers.client.password) {
        userData = mockUsers.client;
      } else if (email === mockUsers.lawyer.email && password === mockUsers.lawyer.password) {
        userData = mockUsers.lawyer;
      }

      if (userData) {
        // Simulate successful login
        localStorage.setItem('user_data', JSON.stringify(userData));
        setUser(userData);
        handleRoleBasedRedirect(userData); // Redirect based on role (client or lawyer)
        return userData;
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (err) {
      setError('Invalid credentials');
      throw err;
    }
  };

  const register = async (userData) => {
    try {
      setError(null);
      const response = await authService.register(userData);
      const { token, newUser } = response;

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
