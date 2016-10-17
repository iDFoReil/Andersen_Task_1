'use strict'
var ab = document.querySelector('#a+b');
var bc = document.querySelector('#b+c');
var ac = document.querySelector('#a+c');
var a = document.querySelector('#a');
var b = document.querySelector('#b');
var c = document.querySelector('#c');
var DropzoneObj = document.querySelector('#dropzone');
var items = document.querySelector('#items');
var CrElemName = document.querySelector('#crelemname');
var receptList = document.querySelector('#recepts');
var buttonObj = document.getElementsByTagName('button');

var recepts = [
{name:'a+b',ingredients: ['a','b']},
{name:'b+c',ingredients:['b','c']},
{name:'a+c',ingredients:['a','c']}
];

(function(){
items.addEventListener('click', add);
DropzoneObj.addEventListener('click', remove);
buttonObj[0].addEventListener('click', crElement);
buttonObj[1].addEventListener('click', crRecept);
buttonObj[2].addEventListener('click', crafting);
receptList.addEventListener('mouseover', ChangeColorToRed);
receptList.addEventListener('mouseout', ChangeColorToWhite);
})()

function crElement(){
	if(CrElemName.value && !document.getElementById(CrElemName.value)){
		var node = document.createTextNode(CrElemName.value);
		var pElementCreate = document.createElement('p');
		pElementCreate.appendChild(node);
		pElementCreate.id = CrElemName.value;
		pElementCreate.classList.add('elements');
		items.appendChild(pElementCreate);
		CrElemName.value ='';
	}
	else{
		alert('Такой элемент уже существует или название не корректно');
	}
}
function crRecept(){
	var first = document.querySelector('#firstItem').value;
	var second = document.querySelector('#secondItem').value;
	if(document.getElementById(first+'+'+second) == null){
		var q = { 'name': first+'+'+second, 'ingredients': [first,second]};
		recepts.push(q);
		var text = q.name;
		var pElementCreate = document.createElement('p');
		var node = document.createTextNode(text);
		pElementCreate.appendChild(node);
		receptList.appendChild(pElementCreate);
		pElementCreate.id = text;
		pElementCreate.classList.add('elements');
	}
	else{
		alert('Такой рецепт уже существует или название не корректно');
	}
}

function crafting(){
	var pSearchingElement = DropzoneObj.getElementsByTagName('p');
	if(pSearchingElement.length == 2){
		var pElements = DropzoneObj.querySelectorAll('p');
		for(var i=0; i<recepts.length;i++){
			if((pElements[0].id == recepts[i].ingredients[0] || pElements[0].id == recepts[i].ingredients[1]) && 
				(pElements[1].id == recepts[i].ingredients[0] || pElements[1].id == recepts[i].ingredients[1])){
				document.getElementById(recepts[i].name).style.backgroundColor = 'green';
			document.getElementById(recepts[i].name).style.color = 'white';
				DropzoneObj.removeChild(document.getElementById(recepts[i].ingredients[0]));
				DropzoneObj.removeChild(document.getElementById(recepts[i].ingredients[1]));
			}
		}
	}
	else{
		alert('Крафтить можно только из двух элементов');
	}
}

function add(event){
	if(event.target.id != 'items') {
		var i = document.getElementById(event.target.id);
		DropzoneObj.appendChild(i);
	}
}

function remove(event){
	if(event.target.id != 'dropzone'){
		var i = document.getElementById(event.target.id);
		items.appendChild(i);
	}
}

function ChangeColorToRed(event){
for(var i = 0; i<recepts.length;i++){
	if(recepts[i].name == event.target.id){
		var elem1 = document.getElementById(recepts[i].ingredients[0]);
		var elem2 = document.getElementById(recepts[i].ingredients[1]);
		if(elem1 && elem2){
			document.getElementById(recepts[i].ingredients[0]).style.backgroundColor= 'red';
			document.getElementById(recepts[i].ingredients[0]).style.color= 'white';
			document.getElementById(recepts[i].ingredients[1]).style.backgroundColor= 'red';
			document.getElementById(recepts[i].ingredients[1]).style.color= 'white';
		}
	}
}
}

function ChangeColorToWhite(event){
for(var i = 0; i<recepts.length;i++){
	if(recepts[i].name == event.target.id){
		var elem1 = document.getElementById(recepts[i].ingredients[0]);
		var elem2 = document.getElementById(recepts[i].ingredients[1]);
		if(elem1 && elem2){
			document.getElementById(recepts[i].ingredients[0]).style.backgroundColor = 'white';
			document.getElementById(recepts[i].ingredients[0]).style.color= 'black';
			document.getElementById(recepts[i].ingredients[1]).style.backgroundColor = 'white'
			document.getElementById(recepts[i].ingredients[1]).style.color= 'black';
		}
	}
}
}