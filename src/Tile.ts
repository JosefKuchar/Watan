export default class Tile {
    type: number;
    value: number;
    roads: boolean[];
    buildings: number[];

    constructor(type: number, value: number) {
        this.type = type;
        this.value = value;

        this.initRoads();
        this.initBuldings();
    }

    private initRoads() {
        this.roads = [];

        for (let i = 0; i < 6; i++) {
            this.roads[i] = false;
        }
    }

    private initBuldings() {
        this.buildings = [];

        for (let i = 0; i < 6; i++) {
            this.buildings[i] = 0;
        }
    }
}