window.addEventListener('load', function() {
	var container = document.getElementById('layout-graphic-container');
	
	var canvas = document.createElement('canvas');
	canvas.width = 550;
	canvas.height = 370;
	
	function circle(x, y, r) {
		ctx.beginPath();
		ctx.arc(x, y, r, 0, 2*Math.PI, false);
		ctx.stroke();
	}
	function arrow(x1, y1, x2, y2) {
		var x = 4;
		var dx = x2 - x1,
		    dy = y2 - y1,
		    l  = Math.sqrt(dx*dx + dy*dy);
		
		ctx.save();
		ctx.translate(x1, y1);
		ctx.rotate(Math.atan2(dy, dx));
		ctx.beginPath();
		ctx.moveTo(0, -x);
		ctx.lineTo(0, x);
		ctx.moveTo(0, 0);
		ctx.lineTo(l, 0);
		ctx.moveTo(l, -x);
		ctx.lineTo(l, x);
		ctx.stroke();
		ctx.restore();
	}
	function triangle(x, y, r, rad) {
		ctx.save();
		ctx.translate(x, y);
		ctx.rotate(rad);
		
		ctx.beginPath();
		ctx.moveTo(r, 0);
		var i = 3;
		while(i) {
			ctx.rotate((2/3)*Math.PI);
			ctx.lineTo(r, 0);
			i--;
		}
		ctx.stroke();
		
		ctx.restore();
	}
	
	var ctx = canvas.getContext('2d');
	ctx.lineWidth = 2;
	ctx.strokeStyle = ctx.fillStyle = '#f3f3f3';
	ctx.miterLimit = 2;
	ctx.font = '14px Nobile, "Trebuchet MS", sans-serif';
	ctx.save();
	
	// Border:
	ctx.strokeRect(10, 10, 280, 280);
	
	ctx.translate(150, 150);
	
	// Wheel:
	circle(0, 0, 120);
	circle(0, 0, 100);
	
	// Triangle:
	triangle(0, 0, 100, .1);
	
	// Wheel pointer:
	ctx.save();
	ctx.rotate(.1);
	ctx.translate(110, 0);
	circle(0, 0, 10);
	circle(0, 0, 4);
	ctx.restore();
	
	// Triangle pointer:
	circle(-10, 10, 10);
	circle(-10, 10, 4);
	
	ctx.restore();
	ctx.strokeStyle = ctx.fillStyle = '#999';
	ctx.lineWidth = 1;
	ctx.translate(.5, .5);
	
	// size:
	ctx.textAlign = 'center';
	ctx.textBaseline = 'top';
	arrow(10, 310, 290, 310);
	ctx.fillText('size', 150, 317);
	// triangleSize:
	arrow(50, 343, 250, 343)
	ctx.fillText('triangleSize', 150, 350)
	
	// padding:
	ctx.textAlign = 'left';
	ctx.textBaseline = 'middle';
	arrow(310, 10, 310, 30);
	// size − 2 × padding
	ctx.fillText('padding', 320, 20);
	arrow(310, 30, 310, 270);
	ctx.fillText('size − 2 × padding', 320, 150);
	// padding:
	arrow(310, 270, 310, 290);
	ctx.fillText('padding', 320, 280);

	
	container.appendChild(canvas);
}, false);
