document.getElementById('myslide').onmousemove = function (event) {
	var x = event.offsetX; //releted to parent
	console.log(x);
	document.getElementById('two').style.width = x + 'px'
}

// document.getElementById('myslide').onmouseleave = function (event) {
// 	document.getElementById('two').style.width = '640px';
// }
