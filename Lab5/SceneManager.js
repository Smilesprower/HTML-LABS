var currentScene;
var sceneList;

function SceneManager()
{
	sceneList = new Array();
}

SceneManager.prototype.updateCurrentScene = function(ctx)
{
	currentScene.render(ctx);
}

SceneManager.prototype.initCanvas = function()
{
	currentScene.initializeCanvas();
}

SceneManager.prototype.nextScene = function()
{
	var currIndex;
	for (var i = 0; i < sceneList.length; i++) 
	{
		if(sceneList[i] == currentScene)
		{
			currIndex = i;
		}
	};
	if(currIndex+1 <sceneList.length)
		currentScene = sceneList[currIndex+1];
	else
		currentScene = sceneList[0];
}
SceneManager.prototype.addScene = function(scene)
{
	sceneList.push(scene);
	currentScene = sceneList[sceneList.length-1];
}

SceneManager.prototype.goToScene = function(title)
{
	for (var i = 0; i < sceneList.length; i++) 
	{
		if(sceneList[i].title == title)
			currentScene = sceneList[i];
	};
}
