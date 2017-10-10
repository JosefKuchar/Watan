// Import libraries required by phaser
import 'pixi';
import 'p2';

// Import phaser game framework
import * as Phaser from 'phaser-ce';

// Import states
import Boot from './Boot';
import Preload from './Preload';
import Main from './Main';

// Import socket.io client
import Client from './Client';

class Game extends Phaser.Game {
    socket: any;

    constructor() {
        super('100%', '100%', Phaser.AUTO, null, '', false, true);

        this.state.add('Boot', Boot);
        this.state.add('Preload', Preload);
        this.state.add('Main', Main);

        this.state.start('Boot');
    }
}



new Client();
new Game();