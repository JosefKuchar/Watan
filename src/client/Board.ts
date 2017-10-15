import { Game, Group, Sprite } from 'phaser-ce';
import { TileNames } from './Enums';
import { Vector2, Vector3 } from './Vector';

export default class Board {
    game: Game;
    tiles: Group;
    tileArray: Sprite[][][];
    
    private originalSize: Vector2;

    constructor(game: Game, boardData: any) {
        this.game = game;
        this.tiles = this.game.add.group();
        this.buildBoard(boardData);
    }

    private initTileArray(boardData: any) {
        for (let x = 0; x < boardData.size * 2 - 1; x++) {
            this.tileArray[x] = []
            for (let y = 0; y < boardData.size * 2 - 1; y++) {
                this.tileArray[x][y] = []
            }
        }
    }

    private buildBoard(boardData: any) {
        for (let x = 0; x < boardData.tiles.length; x++) {
            for (let y = 0; y < boardData.tiles[x].length; y++) {
                for (let z = 0; z < boardData.tiles[x][y].length; z++) {
                    if (boardData.tiles[x][y][z]) {
                        let size = 128;
                        let posX = size * Math.sqrt(3) * (x + z/2)
                        let posY = size * 3/2 * z
                        let spriteName = TileNames[boardData.tiles[x][y][z].type];
                        let sprite: Sprite = this.tiles.create(posX, posY, spriteName);

                        //sprite.anchor.x = 0.5;
                        //sprite.anchor.y = 0.5;

                        //this.game.add.text(500, 500, "TEST")
                        let number = this.game.add.text(100, 100, boardData.tiles[x][y][z].value)

                        sprite.addChild(number);

                        sprite.inputEnabled = true;
                        sprite.events.onInputOver.add(this.mouseOver);
                    }
                }
            }
        }

        // Get original size before resizing
        this.originalSize = new Vector2(this.tiles.width, this.tiles.height);
    }

    private mouseOver(a:any ,b:any) {
        console.log(a,b);
    }

    resize(width: number, height: number) {
        // Resize
        if (width > height) {
            this.tiles.scale.x = height / this.originalSize.y;
            this.tiles.scale.y = height / this.originalSize.y;
        } else {
            this.tiles.scale.x = width / this.originalSize.x;
            this.tiles.scale.y = width / this.originalSize.x;
        }
    }

    placeBuilding(tile: Vector3, index: number) {

    }
}