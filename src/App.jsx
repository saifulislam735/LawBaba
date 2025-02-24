import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import ClientLogin from "./pages/ClientLogin";
import LawyerLogin from "./pages/LawyerLogin";
import ClientSignup from "./pages/ClientSignup";
import LawyerSignup from "./pages/LawyerSignup";
import LawyerList from "./pages/LawyerList";
import LegalResources from "./pages/LegalResources";
import Messages from "./pages/Messages";
import UserProfile from "./pages/UserProfile";
import LawyerProfile from "./components/lawyers/LawyerProfile";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import ChatbotIcon from "./components/chatbot/ChatbotIcon";
import ChatInterface from "./components/chatbot/ChatInterface";
import HelpCenterIcon from "./components/chatbot/HelpCenterIcon";
import HelpCenter from "./components/support/HelpCenter";
import BookingPage from "./components/booking/BookingPage";
import ContactPage from "./pages/ContactPage";
import FAQPage from "./pages/FAQPage";
import Home from "./pages/Home";
import { NotificationProvider } from "./contexts/NotificationContext";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import './App.css';

// Simple Layout component with Chatbot
const Layout = ({ children }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const toggleChat = () => setIsChatOpen(!isChatOpen);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow pt-16">
        <HelpCenterIcon />
        <ChatbotIcon onClick={toggleChat} />
        {isChatOpen && <ChatInterface onClose={toggleChat} />}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

// Simple Protected Route
const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const { isAuthenticated, loading, user } = useAuth();

  if (loading) return <div className="flex justify-center items-center h-screen"><div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div></div>;
  if (!isAuthenticated) return <Navigate to="/client-login" />;
  if (allowedRoles.length > 0 && !allowedRoles.includes(user?.role)) return <Navigate to="/" />;
  return children;
};

const App = () => {
  return (
    <Router>
      <LanguageProvider>
        <AuthProvider>
          <NotificationProvider>
            <Routes>
              {/* Public Routes */}
              <Route path="/client-login" element={<ClientLogin />} />
              <Route path="/lawyer-login" element={<LawyerLogin />} />
              <Route path="/client-signup" element={<ClientSignup />} />
              <Route path="/lawyer-signup" element={<LawyerSignup />} />
              <Route path="/help" element={<HelpCenter />} />
              <Route path="/signup" element={<Navigate to="/client-signup" />} />
              <Route path="/login" element={<Navigate to="/client-login" />} />

              <Route path="/" element={<Layout><Home /></Layout>} />
              <Route path="/lawyers" element={<Layout><LawyerList /></Layout>} />
              <Route path="/lawyers/:id" element={<Layout><LawyerProfile /></Layout>} />
              <Route path="/legal-resources" element={<Layout><LegalResources /></Layout>} />
              <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
              <Route path="/faq" element={<Layout><FAQPage /></Layout>} />

              {/* Protected Routes */}
              <Route path="/profile" element={<ProtectedRoute><Layout><UserProfile /></Layout></ProtectedRoute>} />
              <Route path="/messages" element={<ProtectedRoute><Layout><Messages /></Layout></ProtectedRoute>} />
              <Route path="/messages/:id" element={<ProtectedRoute><Layout><Messages /></Layout></ProtectedRoute>} />
              <Route path="/dashboard" element={<ProtectedRoute allowedRoles={["lawyer"]}><Dashboard /></ProtectedRoute>} />
              <Route path="/lawyers/:id/book" element={<ProtectedRoute><Layout><BookingPage /></Layout></ProtectedRoute>} />

              {/* Fallback */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </NotificationProvider>
        </AuthProvider>
      </LanguageProvider>
    </Router>
  );
};

export default App;