const express = require('express');
const { Server } = require('socket.io');
const http = require('http');
const cors = require('cors');

const app = express();
const port = 8000;

// Enable CORS for Express
app.use(cors());

// Create HTTP server
const server = http.createServer(app);

// Initialize Socket.IO and attach it to the HTTP server
const io = new Server(server, {
  cors: true,
  },
);


const emailToSocketMap = new Map();
const socketidToEmailMap = new Map();

// Handle Socket.IO connections
io.on('connection', (socket) => {
  console.log(`Socket connected: ${socket.id}`);
   socket.on('room:join', data => {
      const {email,room} = data
      emailToSocketMap.set(email, socket.id);
      socketidToEmailMap.set(socket.id, email);
      io.to(socket.id).emit('room:join',data)
   })
  // Handle disconnection
  socket.on('disconnect', () => {
    console.log(`Socket disconnected: ${socket.id}`);
  });
});

// Express routes
app.get('/', (req, res) => {
  res.json('Welcome, baby!');
});

// Start the HTTP server
server.listen(port, () => {
  console.log(`Your app is running on http://localhost:${port}`);
});
