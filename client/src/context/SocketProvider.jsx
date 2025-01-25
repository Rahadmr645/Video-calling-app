import React, { useContext, createContext, useMemo } from 'react';
import { io } from 'socket.io-client';

// Create Socket Context
const SocketContext = createContext(null);

// Custom hook to use the Socket
export const useSocket = () => {
  const socket = useContext(SocketContext);
  if (!socket) {
    throw new Error('useSocket must be used within a SocketProvider');
  }
  return socket;
};

// Socket Provider
export const SocketProvider = (props) => {
  const socket = useMemo(() => io('http://localhost:8000'), []); // Initialize socket

  return (
    <SocketContext.Provider value={socket}>
      {props.children}
    </SocketContext.Provider>
  );
};

export default SocketContext;
