const http = require('http');
const httpServer = http.createServer();
const { Server } = require("socket.io");


const allChats = async (req, res) => {
    const io = new Server(httpServer, {
        cors: {
          origin: "https://localhost/chats/chatID"
        }
      });
    io.on('connection', (socket) => {
        console.log('a user connected');
        socket.emit('event', data);
        socket.on('event', (data) => {
            console.log(data);
        });
    });

    console.log('This is user chat!');
    res.json({name: 'chats'});
}

module.exports = {
    allChats
}