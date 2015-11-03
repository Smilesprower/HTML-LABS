//Global Vars
var game;
this.touchable = 'createTouch' in document;

function main()
{

	game = new Game();
	game.init();
	game.gameLoop();

	window.addEventListener("mousedown" , game.onmousedown);
	window.addEventListener("mouseup" , game.onmouseup);

}
