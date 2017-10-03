"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tile_1 = require("./Tile");
class TileGrid {
    constructor(size) {
        this.size = size;
        this.tiles = this.generateGrid();
    }
    getTile(x, y, z) {
        if (this.inBounds(x, y, z)) {
            return null;
        }
        return this.tiles[x + this.size - 1][y + this.size - 1][z + this.size - 1];
    }
    inBounds(x, y, z) {
        return (x <= -this.size || x >= this.size ||
            y <= -this.size || y >= this.size ||
            z <= -this.size || z >= this.size ||
            x + y + z !== 0);
    }
    generateGrid() {
        let grid = [];
        for (let x = 0; x < this.size * 2 - 1; x++) {
            grid[x] = [];
            for (let y = 0; y < this.size * 2 - 1; y++) {
                grid[x][y] = [];
                for (let z = 0; z < this.size * 2 - 1; z++) {
                    if (x + y + z === 3 * (this.size - 1)) {
                        grid[x][y][z] = new Tile_1.default();
                    }
                }
            }
        }
        return grid;
    }
}
exports.default = TileGrid;
//# sourceMappingURL=TileGrid.js.map