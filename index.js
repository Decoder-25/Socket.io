const express = require('express')
const http = require('http');
const socketio = require("socket.io");

const app = express()
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    console.log('A user connected', socket.id);
})

app.use('/', express.static(__dirname + '/public'));

server.listen(3050, () => {
    console.log('server started')
})
