import Tile from './Tile'
import { Resources } from './Enums'

export default class TileGrid {
    size: number;
    tiles: Tile[][][];
    tileCount: number;

    constructor(size: number) {
        this.size = size;
        this.tiles = this.generateGrid();
        this.tileCount = this.calculateTileCount();
    }

    getTile(x: number, y: number, z: number) {
        if (this.inBounds(x, y, z)) {
            return null;
        }

        return this.tiles[x + this.size - 1][y + this.size - 1][z + this.size - 1];
    }

    inBounds(x: number, y: number, z: number) {
        return !(x <= -this.size || x >= this.size ||// X is in bounds
                y <= -this.size || y >= this.size || // Y is in bounds
                z <= -this.size || z >= this.size || // Z is in bounds
                x + y + z !== 0); // Values are aligned correctly
    }

    private calculateTileCount() {
        let count = 2 * this.size - 1;
        
        for (let i = this.size; i < 2 * this.size - 1; i++) {
            count += 2 * i;
        }

        return count;
    }

    private generateGrid() {
        let grid: Tile[][][] = [];
        this.calculateTileTypes();

        let values = [];

        for (let x = 0; x < this.size * 2 - 1; x++) {
            grid[x] = []
            for (let y = 0; y < this.size * 2 - 1; y++) {
                grid[x][y] = []
                for (let z = 0; z < this.size * 2 - 1; z++) {
                    if (x + y + z === 3 * (this.size - 1)) {
                        grid[x][y][z] = new Tile(0, 0);
                    }
                }
            }
        }

        return grid;
    }

    private calculateTileTypes() {
        let buffer: number[] = [];
        let balancer: number[] = [];
        //TODO: Remove this hardcoded 5s
        let constant = Math.ceil(this.tileCount / 5);

        for (let i = 0; i < 5; i++) {
            balancer.push(constant);
        }

        for (let i = balancer.length - 1; i >= 0; i--) {  
            let sum = 0;
            for (let j = 0; j < balancer.length; j++) {
                sum += balancer[j];
            }

            if (this.tileCount - 1 === sum) {
                break;
            }

            balancer[i]--;
        }

        for (let i = 0; i < balancer.length; i++) {
            for (let j = 0; j < balancer[i]; j++) {
                buffer.push(i);
            }
        }

        return buffer;
    }
}