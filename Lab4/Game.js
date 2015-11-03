//var sceneManager;
var ctx, canvas;
//touchable = 'createTouch' in document;
this.mouseDown = false;

function Game()
{


}

Game.prototype.initializeCanvas = function()
{
	canvas= document.createElement("canvas");
	//ctx is the context that we will draw on
	ctx= canvas.getContext("2d");

	document.body.appendChild(canvas);
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

Game.prototype.init = function()
{
	this.initializeCanvas();
	this.sceneManager = new SceneManager();
	this.titleScene = new TitleScene();
	this.menuScene = new MenuScene();
	this.sceneManager.addScene(this.titleScene);
	this.sceneManager.addScene(this.menuScene);
}

// Mouse Down
//////////////////////////////////////
Game.prototype.onmousedown = function(e)
{
	this.mouseDown = true;
}
// Mouse Up
//////////////////////////////////////
Game.prototype.onmouseup = function(e)
{
	this.mouseDown = false;
}


Game.prototype.gameLoop = function()
{
	window.requestAnimationFrame(game.gameLoop);

	if(this.mouseDown && this.changedLastFrame == false)
	{
		game.sceneManager.nextScene();
		this.changedLastFrame = true;
	}
	else if(!this.mouseDown)
		this.changedLastFrame = false;

	game.sceneManager.renderCurrentScene(ctx);
}
