import{ State } from 'phaser-ce';

export default class Boot extends State {
    init() {
        this.scale.scaleMode = Phaser.ScaleManager.RESIZE;
    }

    create() {
        this.state.start('Preload')
    }
}