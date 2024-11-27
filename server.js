const express = require('express');
const WebSocket = require('ws');
const http = require('http');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// WebSocket server
wss.on('connection', (ws) => {
    console.log('A client connected');
    
    ws.on('message', (message) => {
        console.log('Received: %s', message);
        // Echo the received message back to the client
        ws.send(`Echo: ${message}`);
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

// Start server on port 3000
server.listen(3000, () => {
    console.log('Server is listening on http://localhost:3000');
});
