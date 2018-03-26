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
}

window.onload = () => {
	const game = new Game();
	window.game = game;
};
