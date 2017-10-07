const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const path = require('path');

import Game from './Game';

io.on('connection', (socket: any) => {
    socket.on('disconnect', () => {

    });
});

app.get('/', (request: any, response: any) => {
    response.sendFile(path.resolve('public/index.html'));
});

server.listen(3000);



new Game(0, []);


//let last = Date.now();
function loop() {
    //let now = Date.now();
    //console.log(now - last);
    //last = now;

    process.nextTick(loop);
}

//process.nextTick(loop);