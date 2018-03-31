if(window.cordova) {
	document.addEventListener('deviceready', () => {
		var game = new Game();
		window.game = game;
	}, false);
} else {
	var game = new Game();
	window.game = game;
}
