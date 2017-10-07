import Road from './Road';
import Building from './Building';

export default class Tile {
    type: number;
    value: number;
    roads: Road[] = [];
    buildings: Building[] = [];

    constructor(type: number, value: number) {
        this.type = type;
        this.value = value;
    }
}