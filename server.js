const express = require ('express');
const path = require('path');
const http = require('http');

const app = express();
const server = http.createServer(app);
const PORT = 3000;
const socketIo = require('socket.io');
app.use(express.static(path.join(__dirname, 'public')));

const io = socketIo(server);


server.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
