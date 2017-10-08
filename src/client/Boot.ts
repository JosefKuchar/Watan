import * as Phaser from 'phaser-ce';

export default class Boot extends Phaser.State {
    init() {
        this.scale.scaleMode = Phaser.ScaleManager.RESIZE;
    }

    create() {
        this.state.start('Preload')
    }
}