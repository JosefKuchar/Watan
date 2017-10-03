import TileGrid from './TileGrid';

export default class Board {
    tiles: TileGrid

    constructor() {
        this.tiles = new TileGrid(4)
    }
}