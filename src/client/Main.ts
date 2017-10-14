import { Stage } from 'phaser-ce';
import Client from './Client';
import Board from './Board'

export default class Main extends Stage {
    board: Board
    
    create() {

        //let test = this.game.add.sprite(0, 0, 'animal-tile');
        this.bindSocketEvents();
        Client.socket.emit('grid');
    }

    resize(width: number, height: number) {
        // Update UI
        this.board.resize(width, height);
    }

    private bindSocketEvents() {
        Client.socket.on('grid', this.test.bind(this))
    }

    private recalculateUI(width: number, height: number) {
        //console.log(this.sprites.tiles.texture.width)
    }

    private test(data: any) {
        this.board = new Board(this.game, data);
    }
}