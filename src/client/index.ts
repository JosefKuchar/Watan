// Import libraries required by phaser
import 'pixi';
import 'p2';

// Import phaser game framework
import * as Phaser from 'phaser-ce';

// Import socket.io client
import * as io from 'socket.io-client';

// Import states
import Boot from './Boot';
import Preload from './Preload';

console.log(io());

//console.log(Socket);
const test = 1;

class Game extends Phaser.Game {
    constructor() {
        super('100%', '100%', Phaser.AUTO);

        this.state.add('Boot', Boot);
        this.state.add('Preload', Preload);

        this.state.start('Boot');
    }
}

new Game();