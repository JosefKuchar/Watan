import Player from './Player';

export default class Object {
    owner: Player;

    constructor(owner: Player) {
        this.owner = owner;
    }
}