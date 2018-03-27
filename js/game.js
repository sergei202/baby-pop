'use strict';

class Game extends Phaser.Game {
	constructor() {
		const config = {
			type: Phaser.AUTO,
			width: window.innerWidth,
			height: window.innerHeight,
			scene: [PlayScene]
		};
		super(config);
	}

	onResize() {
		console.log('resize event');
		// Broken.  Need to find a resize solution.
		// this.renderer.resize(window.innerWidth, window.innerHeight, 1.0);
		// this.events.emit('resize');
	}
}

window.onload = () => {
	const game = new Game();
	window.game = game;
	window.addEventListener('resize', () => game.onResize());
};
