import { Stage } from 'phaser-ce';
import Client from './Client';

export default class Main extends Stage {
    create() {
        let test = this.game.add.sprite(0, 0, 'animal-tile');

        Client.socket.on('grid', this.test.bind(this))
        Client.socket.emit('grid');
    }

    resize(width: number, height: number) {
        this.recalculateUI(width, height);
    }

    private recalculateUI(width: number, height: number) {

    }

    private test(data: any) {
        console.log(data);
    }
}