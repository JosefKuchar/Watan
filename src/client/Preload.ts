import { State } from 'phaser-ce';

export default class Preload extends State {
    preload() {
        // Load tiles
        this.load.image('animal-tile', 'assets/sprites/bin/tiles/animal.png');
        this.load.image('brick-tile', 'assets/sprites/bin/tiles/brick.png');
        this.load.image('ore-tile', 'assets/sprites/bin/tiles/ore.png');
        this.load.image('sand-tile', 'assets/sprites/bin/tiles/sand.png');
        this.load.image('wheat-tile', 'assets/sprites/bin/tiles/wheat.png');
        this.load.image('wood-tile', 'assets/sprites/bin/tiles/wood.png');
    }

    create() {
        this.state.start('Main');
    }
}