const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const path = require('path');

import Game from './Game';
import Grid from './Grid';

let SOCKET: any = null

io.on('connection', (socket: any) => {
    console.log("New client!");

    // Only for testing, this will be removed later
    socket.on('grid', () => {
        socket.emit('grid', new Grid(3));
    })
    
    SOCKET = socket;
    socket.on('disconnect', () => {

    });
});

app.get('/', (request: any, response: any) => {
    response.sendFile(path.resolve('dist/client/index.html'));
});

app.use(express.static(path.resolve('dist/client')));
server.listen(3000);



new Game(0, []);


//let last = Date.now();
setInterval(() => {
    //let now = Date.now();
    //console.log(now - last);
    //last = now;
    
}, 20);