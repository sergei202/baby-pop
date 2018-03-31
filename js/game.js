'use strict';

class Game extends Phaser.Game {
	constructor() {
		super({
			type: Phaser.AUTO,
			width: window.innerWidth,
			height: window.innerHeight,
			scene: [PlayScene]
		});

		window.game = this;

		// Handle game resizing (and orientation changes)
		this.resizeTimeout = null;
		this.resizeListener = () => game.onResize();
		window.addEventListener('resize', this.resizeListener);
	}


	onResize() {
		console.log('resize event');

		// Debounce resize events
		if(this.resizeTimeout) clearTimeout(this.resizeTimeout);
		setTimeout(() => {
			// Just destroy the current game and recreate it.
			window.removeEventListener('resize', this.resizeListener);
			// Still some issues with this.  Throws phaser errors.
			this.destroy(true);
			setTimeout(() => new Game(), 500);

			// Broken.  Need to find a resize solution.
			// this.renderer.resize(window.innerWidth, window.innerHeight, 1.0);
			// this.events.emit('resize');
		}, 250);
	}
}
