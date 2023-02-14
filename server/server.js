const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
require('dotenv').config();
const PORT = process.env.PORT || 5002;

// const connectDB = require('./config/dbConnection');
// connectDB();
const app = express();
app.use(cors(corsOptions));

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        methods: ['GET', 'POST']
    }
});

server.listen(PORT, (req, res) => {
    console.log(`Server is running on port: ${PORT}`);
    return ({'Message': `Server is running on port: ${PORT}`})
});

io.on('connection', (socket) => {
    // console.log(`User connected: ${socket.id}`);
    socket.on('send_message', (data) => {
        // socket.broadcast.emit('receive_message');
        console.log(data);
    });
});