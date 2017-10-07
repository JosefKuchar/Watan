import Object from './Object';
import Player from './Player';

export default class Road extends Object {
    level: number = 1;
    
    constructor(owner: Player) {
        super(owner);
    }

    //TODO: Add max level restriction
    upgrade() {
        this.level++;
    }
}