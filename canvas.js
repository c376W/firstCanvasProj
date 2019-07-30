var canvas=document.querySelector("canvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var c=canvas.getContext('2d');

	//Rectangles
	c.fillStyle = 'rgba(255,0,0,0.3';
	c.fillRect(100,100,100,100);

	//Line
	c.beginPath();
	c.moveTo(50,300);
	c.lineTo(300,100);
	c.lineTo(400,300);
	c.strokeStyle="#000";
	c.stroke();

	//Arc/Circle
	c.beginPath();
	c.arc(300,300,30,0,Math.PI*2,false); 
	c.strokeStyle='blue';
	c.stroke();

	for(var i=0;i<3;i++){
		var x=window.innerWidth*Math.random();
		var y=window.innerHeight*Math.random();

		c.beginPath();
		c.arc(x,y,30,0,Math.PI*2,false); 
		c.strokeStyle='blue';
		c.stroke();
	}