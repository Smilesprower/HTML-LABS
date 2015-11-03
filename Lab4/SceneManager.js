
function SceneManager()
{
	this.sceneList = new Array();
}

SceneManager.prototype.renderCurrentScene = function(ctx)
{
	this.currentScene.render(ctx);
}

SceneManager.prototype.initCanvas = function()
{
	this.currentScene.initializeCanvas();
}

SceneManager.prototype.nextScene = function()
{
	this.currIndex;
	for (var i = 0; i < this.sceneList.length; i++) 
	{
		if(this.sceneList[i] == this.currentScene)
		{
			// Get Current Scene
			//////////////////////////////
			this.currIndex = i;

			// Stop Current Scene
			//////////////////////////////
			this.sceneList[i].sceneStop();
		}
	};
	if(this.currIndex + 1 < this.sceneList.length)
	{

		// Start Current Scene
		//////////////////////////////
		this.sceneList[this.currIndex + 1].sceneStart();
		this.currentScene = this.sceneList[this.currIndex + 1];
	}
	else
	{
		// Start Current Scene
		//////////////////////////////
		this.sceneList[0].sceneStart();
		this.currentScene = this.sceneList[0];
	}
}
SceneManager.prototype.addScene = function(scene)
{
	this.sceneList.push(scene);
	this.currentScene = this.sceneList[this.sceneList.length-1];
}

SceneManager.prototype.goToScene = function(title)
{
	this.currentScene.sceneStop();

	for (var i = 0; i < this.sceneList.length; i++) 
	{
		if(this.sceneList[i].title == title)
		{
			this.currentScene = this.sceneList[i];

			// Start Current Scene
			//////////////////////////////
			this.currentScene.sceneStart();
		}
	};
}
