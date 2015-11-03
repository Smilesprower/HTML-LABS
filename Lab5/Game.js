//var sceneManager;
var ctx, canvas;
//touchable = 'createTouch' in document;
mouseDown = false;
this.touches = new Array();
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
/*
// Mouse Down
//////////////////////////////////////
Game.prototype.onmousedown = function(e)
{
	mouseDown = true;
}
// Mouse Up
//////////////////////////////////////
Game.prototype.onmouseup = function(e)
{
	mouseDown = false;
}
*/
// Mouse Up
//////////////////////////////////////
Game.prototype.touchstart = function(e)
{
    e.preventDefault();
    this.touches = e.touches; 
}
Game.prototype.touchmove = function(e)
{
    e.preventDefault();
    this.touches = e.touches; 
}

Game.prototype.gameLoop = function()
{
	window.requestAnimationFrame(game.gameLoop);
/*
	if(mouseDown && this.changedLastFrame == false)
	{
		this.sceneManager.nextScene();
		this.changedLastFrame = true;
	}
	else if(!mouseDown)
		this.changedLastFrame = false;

	this.sceneManager.updateCurrentScene(ctx);
*/
	for(var i=0; i<touches.length; i++)
	{
	    var touch = this.touches[i]; 
	    ctx.beginPath(); 
	    ctx.fillStyle = "white";
	    ctx.fillText(" x:"+touch.clientX+" y:"+touch.clientY, touch.clientX+30, touch.clientY-30); 
	    ctx.beginPath(); 
	    ctx.strokeStyle = "red";
	    ctx.lineWidth = "6";
	    ctx.arc(touch.clientX, touch.clientY, 40, 0, Math.PI*2, true); 
	    ctx.stroke();
	}
}
