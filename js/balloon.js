class Balloon extends Phaser.GameObjects.Sprite {
	constructor(scene, x,y, key) {
		super(scene, x,y, key);
		scene.add.existing(this);
		this.setInteractive();
		this.on('pointerdown', e => this.onPop(e));

		// this.tweens.add({
		// 	target: this,
		// 	angle: 360,
		// 	duration: 500
		// });
	}

	onPop(event) {
		// console.log('onPop()\t this=%o, event=%o', this, event);
		this.scene.addBalloon();
		this.scene.killBalloon(this);
	}

	update() {
		if(this.y>-64) {
			this.y -= this.speed;
		} else {
			this.scene.gameOver();
		}
	}
}
