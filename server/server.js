const express = require('express');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
require('dotenv').config();
const PORT = process.env.PORT || 5002;

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const connectDB = require('./config/dbConnection');
connectDB();

io.on('connection', (socket) => {
    console.log('A client has connected!');
});

io.emit('message', 'Hello, clients!');

// socket.on('message', (data) => {
//     console.log(`Received message from client: ${data}`);
// });

// socket.emit('message', 'Hello, server!');
  
// const app = express();
// app.use(cors(corsOptions));

// const server = http.createServer(app);
// const io = new Server(server, {
//     cors: {
//         methods: ['GET', 'POST']
//     }
// });

// server.listen(PORT, (req, res) => {
//     console.log(`Server is running on port: ${PORT}`);
//     return ({'Message': `Server is running on port: ${PORT}`})
// });

// io.on('connection', (socket) => {
//     // console.log(`User connected: ${socket.id}`);
//     socket.on('send_message', (data) => {
//         // socket.broadcast.emit('receive_message');
//         console.log(data);
//     });
// });