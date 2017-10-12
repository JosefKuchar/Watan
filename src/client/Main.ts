import { Stage } from 'phaser-ce';
import Client from './Client';
import {TileNames} from './Enums';

export default class Main extends Stage {
    sprites: any = {
        tiles: Phaser.Group
    };
    
    create() {

        this.sprites.tiles = this.game.add.group();

        //let test = this.game.add.sprite(0, 0, 'animal-tile');
        this.bindSocketEvents();
        Client.socket.emit('grid');
    }

    resize(width: number, height: number) {
        this.recalculateUI(width, height);
    }

    private bindSocketEvents() {
        Client.socket.on('grid', this.test.bind(this))
    }

    private recalculateUI(width: number, height: number) {
        this.sprites.tiles.scale.x = 0.5;
        this.sprites.tiles.scale.y = 0.5;
        //console.log(this.sprites.tiles.texture.width)
    }

    private test(data: any) {
        for (let x = 0; x < data.tiles.length; x++) {
            for (let y = 0; y < data.tiles[x].length; y++) {
                for (let z = 0; z < data.tiles[x][y].length; z++) {
                    if (data.tiles[x][y][z]) {
                        let size = 127;
                        let posX = size * Math.sqrt(3) * (x + z/2)
                        let posY = size * 3/2 * z
                        let sprite = TileNames[data.tiles[x][y][z].type];
                        this.sprites.tiles.create(posX, posY, sprite);
                    }
                }
            }
        }
    }
}