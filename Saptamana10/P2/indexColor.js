let requestUrl = 'https://raw.githubusercontent.com/bahamas10/css-color-names/master/css-color-names.json';
let request = new XMLHttpRequest();
request.open('GET', requestUrl);
request.responseType = 'json';
request.send();

const colorsList = document.createElement('ul');
document.body.appendChild(colorsList);

const style = document.createElement('style');
style.setAttribute('type', 'text/css');
document.head.appendChild(style);
style.innerHTML =
	'div{display:flex; align-items:center; height:60px; width:60px;} ul{list-style-type:none;}  li{display:flex; flex-direction:row; text-align:center}';

request.onload = function() {
	let colorsObj = {};
	colorsObj = request.response;
	const colorsValues = Object.values(colorsObj);
	const colorsNames = Object.keys(colorsObj);
	
	for (let every in colorsValues) {
		let colorName = '';
		let listLi = document.createElement('li');
		const division = document.createElement('div');
		const divisionTwo = document.createElement('div');
		
		colorsList.appendChild(listLi);
		listLi.appendChild(division);
		division.style.backgroundColor = colorsValues[every];
		colorName = colorsNames[every];
		listLi.appendChild(divisionTwo);
		divisionTwo.append(colorName);
	}
};

