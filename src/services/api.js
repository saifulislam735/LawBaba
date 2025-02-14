import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for authentication
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Handle token expiration
      localStorage.removeItem('auth_token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const authService = {
  login: async (email, password) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },
  register: async (userData) => {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },
  logout: () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_data');
  },
};

export const lawyerService = {
  getLawyers: async (filters) => {
    const response = await api.get('/lawyers', { params: filters });
    return response.data;
  },
  getLawyerById: async (id) => {
    const response = await api.get(`/lawyers/${id}`);
    return response.data;
  },
  updateProfile: async (id, profileData) => {
    const response = await api.put(`/lawyers/${id}`, profileData);
    return response.data;
  },
};

export const bookingService = {
  createBooking: async (bookingData) => {
    const response = await api.post('/bookings', bookingData);
    return response.data;
  },
  getBookings: async (filters) => {
    const response = await api.get('/bookings', { params: filters });
    return response.data;
  },
  updateBooking: async (id, bookingData) => {
    const response = await api.put(`/bookings/${id}`, bookingData);
    return response.data;
  },
};

export const messageService = {
  getConversations: async () => {
    const response = await api.get('/conversations');
    return response.data;
  },
  getMessages: async (conversationId) => {
    const response = await api.get(`/conversations/${conversationId}/messages`);
    return response.data;
  },
  sendMessage: async (conversationId, messageData) => {
    const response = await api.post(`/conversations/${conversationId}/messages`, messageData);
    return response.data;
  },
};

export const fileService = {
  uploadFile: async (file, type = 'document') => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('type', type);
    
    const response = await api.post('/files/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },
  
  getFile: async (fileId) => {
    const response = await api.get(`/files/${fileId}`, {
      responseType: 'blob',
    });
    return response.data;
  },
};

export default api;
