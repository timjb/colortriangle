function log() {
	if(window.console) {
		console.log.apply(console, arguments);
	}
}


/************
* Example 1 *
************/

(function(doc) {
	var ct = new ColorTriangle('#de701d', {
		size: 220,
		padding: 0
	});
	ct.inject(doc.getElementById('example-1'));
	
	var head = document.getElementsByTagName('head')[0];
	
	var canvas = doc.createElement('canvas');
	canvas.width = canvas.height = 16;
	var ctx = canvas.getContext('2d');
	ctx.scale(16, 16);
	
	// Triangle:
	ctx.beginPath();
	ctx.moveTo(.2, .2);
	ctx.lineTo(.2, .8);
	ctx.lineTo(.8, .5);
	ctx.clip();
	
	var link = doc.createElement('link');
	link.rel = 'shortcut icon';
	head.appendChild(link);
	function drawFavicon() {
		ctx.fillStyle = ct.getCSS();
		ctx.fillRect(0, 0, 1, 1);
		var newLink = link.cloneNode(false);
		newLink.href = canvas.toDataURL();
		head.replaceChild(newLink, link);
		link = newLink;
	}
	
	ct.addEventListener('drag', function() {
		log('drag');
	});
	ct.addEventListener('dragstart', function() {
		log('dragstart');
	});
	ct.addEventListener('dragend', function() {
		log('dragend');
		drawFavicon();
	});
	drawFavicon();
})(document);


/************
* Example 2 *
************/

(function(doc) {
	ColorTriangle.initColorInputs({ margin: 5 });
	
	var textColorInput = doc.getElementById('text-color-input'),
	    backgroundColorInput = doc.getElementById('background-color-input'),
	    header = doc.getElementsByTagName('h1')[0];
	
	function update() {
		log('input change');
		var style = header.style;
		style.color = textColorInput.value;
		style.background = backgroundColorInput.value;
	}
	
	textColorInput.addEventListener('change', update, false);
	backgroundColorInput.addEventListener('change', update, false);
	
	update();
})(document);
