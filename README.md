# Lawyer Consultation Platform

A modern web application that connects clients with legal professionals through an intuitive and feature-rich platform.

Added test login credentials:
Client:
Email: client@test.com
Password: client123

Lawyer:
Email: lawyer@test.com
Password: lawyer123

## 🚀 Features

- **User Authentication**
  - Role-based access (Client/Lawyer)
  - Protected routes
  - JWT-based authentication
  - Secure password handling

- **Lawyer Discovery**
  - Advanced search and filtering
  - Real-time search results
  - Pagination support
  - Lawyer profiles with ratings and reviews

- **Real-time Messaging**
  - Instant chat between clients and lawyers
  - File attachments
  - Message history
  - Online status indicators

- **Consultation Management**
  - Booking system
  - Schedule management
  - Payment integration
  - Consultation history

- **Document Management**
  - Secure file sharing
  - Document preview
  - Version control
  - Access permissions

## 🛠️ Technology Stack

- **Frontend**
  - React 18+ with Vite
  - TailwindCSS for styling
  - React Router v6 for routing
  - Context API for state management
  - WebSocket for real-time features
  - Formik + Yup for form handling

- **Backend** (Required for full functionality)
  - Node.js with Express
  - MongoDB for database
  - JWT for authentication
  - WebSocket for real-time features

## 📁 Project Structure

```
frontend/
├── public/              # Static files
├── src/
│   ├── assets/         # Images, fonts, etc.
│   ├── components/     # Reusable components
│   │   ├── auth/      # Authentication components
│   │   ├── chat/      # Chat-related components
│   │   ├── common/    # Common UI components
│   │   └── lawyers/   # Lawyer-specific components
│   ├── contexts/      # React Context providers
│   ├── hooks/         # Custom React hooks
│   ├── pages/         # Page components
│   ├── services/      # API and external services
│   ├── utils/         # Utility functions
│   ├── App.jsx        # Root component
│   └── main.jsx       # Entry point
├── .env               # Environment variables
└── package.json       # Dependencies and scripts
```

## 🚦 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd lawyer-consultation-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_API_URL=http://localhost:3000
   VITE_WS_URL=ws://localhost:3000
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## 🔌 API Integration

### Backend API Requirements

The frontend expects the following API endpoints:

```javascript
// Authentication
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/refresh-token

// Lawyers
GET    /api/lawyers
GET    /api/lawyers/:id
GET    /api/lawyers/search
POST   /api/lawyers/filter

// Consultations
POST   /api/consultations
GET    /api/consultations
PUT    /api/consultations/:id

// Messages
GET    /api/messages/:conversationId
POST   /api/messages
GET    /api/conversations

// Documents
POST   /api/documents/upload
GET    /api/documents
DELETE /api/documents/:id
```

### WebSocket Events

```javascript
// Connection
socket.on('connect')
socket.on('disconnect')

// Messages
socket.on('message:new')
socket.on('message:read')

// Status
socket.on('user:online')
socket.on('user:offline')
```

## 🔐 Authentication Flow

1. User registers/logs in through `/auth` endpoints
2. JWT token is stored in memory (not in localStorage for security)
3. Refresh token is stored as an HTTP-only cookie
4. API requests include JWT in Authorization header
5. Token refresh is handled automatically by axios interceptors

## 🎯 Future Improvements

1. **Performance Optimization**
   - Implement React.lazy for code splitting
   - Add service worker for offline support
   - Optimize image loading with lazy loading

2. **Enhanced Security**
   - Add 2FA support
   - Implement rate limiting
   - Add CAPTCHA for registration

3. **Feature Additions**
   - Video consultation support
   - Document e-signing
   - Calendar integration
   - Payment gateway integration

4. **Testing**
   - Add unit tests with Jest
   - Add E2E tests with Cypress
   - Add integration tests

5. **Monitoring**
   - Error tracking with Sentry
   - Analytics integration
   - Performance monitoring

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run E2E tests
npm run test:e2e

# Generate coverage report
npm run test:coverage
```

## 📚 Documentation

- Component documentation is available in each component's directory
- API documentation can be found in `/docs/api`
- Additional documentation can be found in the `/docs` directory

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support, email support@lawyerplatform.com or join our Slack channel.
