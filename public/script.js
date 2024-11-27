const socket = new WebSocket('ws://localhost:3000');

// Open WebSocket connection
socket.onopen = () => {
    console.log('Connected to the WebSocket server');
};

// Listen for messages from the server
socket.onmessage = (event) => {
    const response = event.data;
    document.getElementById('response').innerText = response;
};

// Send message to server
function sendMessage() {
    const message = document.getElementById('messageInput').value;
    if (message) {
        socket.send(message);
        document.getElementById('response').innerText = 'Sending message...';
    }
}
