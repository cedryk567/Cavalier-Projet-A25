console.log("SERVER FILE LOADED OK");

const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const cors = require('cors'); // to handle Cross-Origin reuqests

// allow our frontend to access the backend
// without cross-origin issues
const app = express();
app.use(cors());

// create an HTTP server and pass it the app
const server = http.createServer(app); 
const wss = new WebSocket.Server({ server }); // create a WebSocket server

/* handle WebSocket connections : */

// We add an event listener for the connection event
// which is fired whenever a new client connects to our websocket server
wss.on('connection', (ws) => {
    console.log('New client connected');

    // add an event listener for messages 
    // which fires whenever a client sends a message
    ws.on('message', (message) => {
        console.log(`Received message: ${message}`);

        // Send the message to all connected clients
        // (clients in the OPEN state)
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                // Ensure the message is sent as a string
                client.send(message.toString());
            }
        });
    });

    // close event which fires when a client disconnects
    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

// Specify the port on which our server will listen
const PORT = 5000;
server.listen(PORT, () => {
    // message when the server starts
    console.log(`Server is listening on port ${PORT}`);
});