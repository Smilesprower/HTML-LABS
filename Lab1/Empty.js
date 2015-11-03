
function main()
{
	console.log("Hello World!");

	initialiseCanvas();
	for (var i = 200 - 1; i >= 0; i--) {
		draw();
	};
}

function initialiseCanvas()
{

	canvas = document.createElement("canvas");
	// CTX is the context that we will draw on.

	ctx = canvas.getContext("2d");

	document.body.appendChild(canvas);
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

function draw()
{

    var minNumber = 25; // The minimum number you want
    var maxNumberX = canvas.width - minNumber; // The maximum number you want
    var maxNumberY = canvas.height - minNumber;
    var randomnumberX = Math.random() * (maxNumberX - minNumber) + minNumber; // Generates random number
    var randomnumberY = Math.random() * (maxNumberY - minNumber) + minNumber; // Generates random number

	ctx.fillStyle = rgb(Math.floor(Math.random() * 255) + 1, Math.floor(Math.random() * 255) + 1,Math.floor(Math.random() * 255) + 1);
	ctx.fillRect(randomnumberX, randomnumberY, minNumber, minNumber);



}


/*function for rgb for convenience*/
function rgb(r, g, b) 
{ 
	return 'rgb('+clamp(Math.round(r),0,255)+', '+clamp(Math.round(g),0,255)+', '+clamp(Math.round(b),0,255)+')';
}

/*helper function*/
function clamp(value, min, max)
{ 
	if(max<min) { 
		var temp = min; 
		min = max; 
		max = temp; 
	}
	return Math.max(min, Math.min(value, max)); 
}