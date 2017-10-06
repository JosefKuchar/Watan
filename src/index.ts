const app = require('express');
const server = require('http').createServer(app);
const io = require('socket.io')(server);

import Game from './Game';

io.on('connection', (socket: any) => {
    socket.on('disconnect', () => {

    });
});

server.listen(3000);

new Game();


//let last = Date.now();
function loop() {
    //let now = Date.now();
    //console.log(now - last);
    //last = now;

    process.nextTick(loop);
}

process.nextTick(loop);