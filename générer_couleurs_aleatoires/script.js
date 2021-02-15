
function getRandomRGB(){
	return Math.floor(Math.random() * 256);
};

//console.log(getRandomRGB());


function changeBG(){
	const col1 = getRandomRGB();
	const col2 = getRandomRGB();
	const col3 = getRandomRGB();

	//const colorString = "rgb("+col1+","+col2+","+col3+")";
	const colorString = `rgb(${col1},${col2},${col3})`;
	//console.log(colorString);
	document.body.style.background = colorString;
	document.getElementById('color').textContent = colorString;
}


setInterval(changeBG, 100);