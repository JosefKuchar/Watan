// Include libraries required by phaser
import 'pixi';
import 'p2';
import * as Phaser from 'phaser-ce';
import * as io from 'socket.io-client';

new Phaser.Game(800, 600, Phaser.AUTO, '');
console.log(io());

//console.log(Socket);
const test = 1;