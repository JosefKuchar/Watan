import Grid from './Grid';
import Player from './Player';

export default class Game {
    grid: Grid;
    players: Player[];

    constructor(boardSize: number, players: Player[]) {
        this.players = players;
        this.grid = new Grid(boardSize);
    }
}