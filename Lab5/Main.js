//Global Vars
var game;
this.touchable = 'createTouch' in document;

function main()
{

	game = new Game();
	game.init();
	game.gameLoop();
	if(this.touchable)
	{
		window.addEventListener("touchstart", game.touchstart)
		window.addEventListener("touchmove", game.touchmove)
	}
	else
	{
		window.addEventListener("mousedown" , game.onmousedown);
		window.addEventListener("mouseup" , game.onmouseup);
	}
}
