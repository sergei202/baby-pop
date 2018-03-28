class Balloon extends Phaser.GameObjects.Sprite {
	constructor(scene, x,y, key) {
		super(scene, x,y, key);
		scene.add.existing(this);
		this.setInteractive();
		this.on('pointerdown', e => this.onPop(e));

		this.angle = -15 + Math.random()*30;				// -15 to 15
		this.angleDir = -1 + Math.round(Math.random())*2;	// 1 or -1
	}

	onPop(event) {
		// console.log('onPop()\t this=%o, event=%o', this, event);
		this.scene.addBalloon();
		this.scene.killBalloon(this);
	}

	update(time,delta) {
		if(this.y<-64) return this.scene.gameOver();

		this.x += this.angle/20;
		if(this.x<64) this.x = 64;
		if(this.x>(this.scene.sys.game.config.width-64)) this.x = this.scene.sys.game.config.width-64;

		this.angle += this.angleDir/5;
		if(this.angle>25 || this.angle<-25) this.angleDir *= -1;

		this.y -= this.speed;
	}
}
