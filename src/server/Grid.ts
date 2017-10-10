import Tile from './Tile';
import { Resources, Directions } from './Enums';

export default class Grid {
    size: number;
    tiles: Tile[][][];
    tileCount: number;

    constructor(size: number) {
        this.size = size;
        this.tileCount = this.calculateTileCount();
        this.tiles = this.generateGrid();
    }

    getTile(x: number, y: number, z: number) {
        if (!this.inBounds(x, y, z)) {
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

    placeRoad(x: number, y: number, z: number, edge: number) {
        this.inBounds(x, y, z);
    }

    placeBuilding(x: number, y: number, z: number, vertex: number) {
        this.inBounds(x, y, z);
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
        let types = this.calculateTileTypes();
        let values = this.calculateTileValues();

        for (let x = 0; x < this.size * 2 - 1; x++) {
            grid[x] = []
            for (let y = 0; y < this.size * 2 - 1; y++) {
                grid[x][y] = []
                for (let z = 0; z < this.size * 2 - 1; z++) {
                    if (x + y + z === 3 * (this.size - 1)) {
                        let type = types.splice(Math.floor(Math.random() * types.length), 1)[0];

                        let value = 7;
                        
                        if (type !== Resources.Sand) {
                            value = values.splice(Math.floor(Math.random() * values.length), 1)[0];
                        }
                        
                        grid[x][y][z] = new Tile(type, value);
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

        buffer.push(Resources.Sand);

        return buffer;
    }

    private calculateTileValues() {
        let values = [2, 12, 3, 11, 4, 10, 5, 9, 6, 8];

        let buffer: number[] = [];
        let balancer: number[] = [];

        let constant = Math.ceil(this.tileCount / values.length);
        

        for (let i = 0; i < values.length; i++) {
            balancer.push(constant);
        }

        for (let i = 0; i < balancer.length; i++) {
            if (values.length * constant - i + 1 === this.tileCount) {
                break;
            }
            
            balancer[i]--;
        }

        for (let i = 0; i < values.length; i++) {
            for (let j = 0; j < balancer[i]; j++) {
                buffer.push(values[i]);
            } 
        }

        return buffer;
    }
}