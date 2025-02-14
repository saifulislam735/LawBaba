import { useEffect, useCallback, useState } from 'react';
import wsService from '../services/websocket';

export const useWebSocket = (conversationId) => {
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState('disconnected');
  const [error, setError] = useState(null);

  useEffect(() => {
    // Subscribe to connection status changes
    const unsubConnection = wsService.subscribe('connection', ({ status }) => {
      setStatus(status);
    });

    // Subscribe to errors
    const unsubError = wsService.subscribe('error', (error) => {
      setError(error);
    });

    // Subscribe to new messages for this conversation
    const unsubMessages = wsService.subscribe('new_message', (message) => {
      if (message.conversationId === conversationId) {
        setMessages(prev => [...prev, message]);
      }
    });

    // Connect to WebSocket
    wsService.connect();

    // Cleanup subscriptions
    return () => {
      unsubConnection();
      unsubError();
      unsubMessages();
    };
  }, [conversationId]);

  const sendMessage = useCallback((content, attachments = []) => {
    try {
      wsService.sendMessage('send_message', {
        conversationId,
        content,
        attachments,
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      setError(error);
    }
  }, [conversationId]);

  return {
    messages,
    status,
    error,
    sendMessage,
  };
};

export default useWebSocket;
