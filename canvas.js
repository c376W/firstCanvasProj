var canvas=document.querySelector("canvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var c=canvas.getContext('2d');

	// //Rectangles
	// c.fillStyle = 'rgba(255,0,0,0.3';
	// c.fillRect(100,100,100,100);

	// //Line
	// c.beginPath();
	// c.moveTo(50,300);
	// c.lineTo(300,100);
	// c.lineTo(400,300);
	// c.strokeStyle="#000";
	// c.stroke();

	// //Arc/Circle
	// c.beginPath();
	// c.arc(300,300,30,0,Math.PI*2,false); 
	// c.strokeStyle='blue';
	// c.stroke();

	// for(var i=0;i<3;i++){
	// 	var x=window.innerWidth*Math.random();
	// 	var y=window.innerHeight*Math.random();

	// 	c.beginPath();
	// 	c.arc(x,y,30,0,Math.PI*2,false); 
	// 	c.strokeStyle='blue';
	// 	c.stroke();
	// }

	var x=100;
	var dx=4;

	function animate(){

		c.clearRect(0,0,innerWidth,innerHeight);//Clear all the things
		//in this rectangle which starts from (0,0) with the width and height 
		//as the following values;
		c.beginPath();
		c.arc(x,200,30,0,Math.PI*2,false); 
		c.strokeStyle='red';
		c.stroke();
		x+=dx;
		requestAnimationFrame(animate);
		if(x+30>window.innerWidth||x-30<0){
			dx=-dx;
		}


	}

	animate();