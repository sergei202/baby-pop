class TitleScene extends Phaser.Scene {
	constructor() {
		super({key:'title'});
		this.active = false;
	}

	preload() {
		this.load.image('title', 'assets/img/title.png');
		this.load.image('balloon', 'assets/img/balloon-blue.png');
	}

	create() {
		console.log('TitleScene: %o', this);
		window.titleScene = this;

		const title = this.add.image(600,400, 'title');
		const balloon = this.add.image(400, 100, 'balloon');

		this.tweens.add({
			targets: balloon,
			y: 500,
			duration: 2000,
			ease: 'Power2',
			yoyo: true,
			loop: -1
		});
	}

	update() {}
}
