import { lawyers } from '../data/mockData';

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Predefined users for testing
const mockUsers = {
  'client@test.com': {
    id: 1,
    name: 'John Smith',
    email: 'client@test.com',
    password: 'client123',
    role: 'client'
  },
  'lawyer@test.com': {
    id: 2,
    name: 'Sarah Wilson',
    email: 'lawyer@test.com',
    password: 'lawyer123',
    role: 'lawyer',
    specialization: 'Corporate Law',
    experience: '10+ years'
  }
};

export const mockApi = {
  auth: {
    login: async (credentials) => {
      await delay(1000);
      const user = mockUsers[credentials.email];
      
      if (user && user.password === credentials.password) {
        const { password, ...userData } = user;
        return {
          user: userData,
          token: 'mock-jwt-token'
        };
      }
      throw new Error('Invalid email or password');
    },
    
    register: async (userData) => {
      await delay(1000);
      return {
        user: {
          id: 1,
          ...userData,
        },
        token: 'mock-jwt-token'
      };
    },
    
    logout: async () => {
      await delay(500);
      return { success: true };
    }
  },

  lawyers: {
    getAll: async (params = {}) => {
      await delay(1000);
      let filtered = [...lawyers];
      
      if (params.search) {
        const search = params.search.toLowerCase();
        filtered = filtered.filter(lawyer => 
          lawyer.name.toLowerCase().includes(search) ||
          lawyer.specialization.toLowerCase().includes(search) ||
          lawyer.location.toLowerCase().includes(search)
        );
      }
      
      if (params.specialization) {
        filtered = filtered.filter(lawyer => 
          lawyer.specialization === params.specialization
        );
      }
      
      if (params.priceRange) {
        const [min, max] = params.priceRange.split('-').map(Number);
        filtered = filtered.filter(lawyer => 
          lawyer.hourlyRate >= min && (!max || lawyer.hourlyRate <= max)
        );
      }

      const total = filtered.length;
      const page = params.page || 1;
      const limit = params.limit || 10;
      const start = (page - 1) * limit;
      const end = start + limit;
      
      return {
        lawyers: filtered.slice(start, end),
        total,
        totalPages: Math.ceil(total / limit),
        currentPage: page
      };
    },

    getById: async (id) => {
      await delay(1000);
      const lawyer = lawyers.find(l => l.id === parseInt(id));
      if (!lawyer) throw new Error('Lawyer not found');
      return lawyer;
    }
  },

  consultations: {
    getAll: async () => {
      await delay(1000);
      return [
        {
          id: 1,
          lawyerId: 1,
          clientId: 1,
          date: '2025-03-01T10:00:00',
          status: 'scheduled',
          type: 'video',
          duration: 60,
          price: 200
        },
        {
          id: 2,
          lawyerId: 2,
          clientId: 1,
          date: '2025-03-05T14:00:00',
          status: 'completed',
          type: 'in-person',
          duration: 90,
          price: 300
        }
      ];
    },

    create: async (consultationData) => {
      await delay(1000);
      return {
        id: Math.floor(Math.random() * 1000),
        ...consultationData,
        status: 'scheduled'
      };
    }
  },

  messages: {
    getConversations: async () => {
      await delay(1000);
      return [
        {
          id: 1,
          participantId: 1,
          participantName: 'Sarah Johnson',
          participantRole: 'lawyer',
          lastMessage: 'Thank you for your inquiry',
          timestamp: '2025-02-14T18:30:00',
          unread: 2
        },
        {
          id: 2,
          participantId: 2,
          participantName: 'Michael Chen',
          participantRole: 'lawyer',
          lastMessage: 'I will review your case details',
          timestamp: '2025-02-14T15:45:00',
          unread: 0
        }
      ];
    },

    getMessages: async (conversationId) => {
      await delay(1000);
      return [
        {
          id: 1,
          senderId: 1,
          content: 'Hello, I need legal advice regarding a contract dispute',
          timestamp: '2025-02-14T14:00:00'
        },
        {
          id: 2,
          senderId: 2,
          content: 'I will be happy to help. Can you provide more details about the contract?',
          timestamp: '2025-02-14T14:05:00'
        }
      ];
    },

    sendMessage: async (conversationId, message) => {
      await delay(500);
      return {
        id: Math.floor(Math.random() * 1000),
        senderId: 1,
        content: message,
        timestamp: new Date().toISOString()
      };
    }
  },

  reviews: {
    getAll: async (lawyerId) => {
      await delay(1000);
      return [
        {
          id: 1,
          lawyerId,
          clientName: 'John Smith',
          rating: 5,
          comment: 'Excellent service and very professional',
          date: '2025-01-15T10:00:00'
        },
        {
          id: 2,
          lawyerId,
          clientName: 'Mary Johnson',
          rating: 4,
          comment: 'Very knowledgeable and helpful',
          date: '2025-01-10T15:30:00'
        }
      ];
    },

    create: async (reviewData) => {
      await delay(1000);
      return {
        id: Math.floor(Math.random() * 1000),
        ...reviewData,
        date: new Date().toISOString()
      };
    }
  }
};
