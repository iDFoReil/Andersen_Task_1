'use strict'
var ab = document.querySelector('#ab');
var bc = document.querySelector('#bc');
var ac = document.querySelector('#ac');
var a = document.querySelector('#a');
var b = document.querySelector('#b');
var c = document.querySelector('#c');
var idz = document.querySelector('#dropzone');
var items = document.querySelector('#items');
var crelemname = document.querySelector('#crelemname');
var receptList = document.querySelector('#recepts');

var recepts = [{name: 'a+b', 'ingredients': ['a','b']},{'name':'b+c','ingredients':['b','c']},{'name':'a+c','ingredients':['a','c']}]


function crElement(){
	if(crelemname.value){
	var node = document.createTextNode(crelemname.value);
	var crp = document.createElement('p');
	crp.appendChild(node);
	crp.id = crelemname.value;
	items.appendChild(crp);
	crelemname.value = ' ';
	}
}
function addRecept(){

var first = document.querySelector('#firstItem').value;
var second = document.querySelector('#secondItem').value;
var q = { 'name': first+'+'+second, 'ingredients': [first,second]};
recepts.push(q);
var text = q.name;
var p = document.createElement('p');
var node = document.createTextNode(text);
p.appendChild(node);
receptList.appendChild(p);
p.id = text;
}

function checking(){
	var p = document.querySelector('#dropzone').getElementsByTagName('p');
	if(p.length == 2){
	p[1].id;
	}
	
	if(a.parentNode.id == 'dropzone' && b.parentNode.id == 'dropzone'){
		items.appendChild(a);
		items.appendChild(b);
		ab.innerHTML ='a+b - готово';
	}
	if(b.parentNode.id == 'dropzone' && c.parentNode.id == 'dropzone'){
		items.appendChild(b);
		items.appendChild(c);
		bc.innerHTML ='b+c - готово';
	}
	if(a.parentNode.id == 'dropzone' && c.parentNode.id == 'dropzone'){
		items.appendChild(a);
		items.appendChild(c);
		ac.innerHTML ='a+c - готово';
	}
}

function add(event){
	if(event.target.id != 'items') {
		var i = document.getElementById(event.target.id);
		idz.appendChild(i);
	}
}

function remove(event){
	if(event.target.id != 'dropzone'){
		var i = document.getElementById(event.target.id);
		items.appendChild(i);
	}
}

ab.onmouseover = function(){
	a.style.color = 'red';
	b.style.color = 'red';
}
bc.onmouseover = function(){
	b.style.color = 'red';
	c.style.color = 'red';
}
ac.onmouseover = function(){
	a.style.color = 'red';
	c.style.color = 'red';
}

ab.onmouseout = function(){
	a.style.color = 'black';
	b.style.color = 'black';
}
bc.onmouseout = function(){
	c.style.color = 'black';
	b.style.color = 'black';
}
ac.onmouseout = function(){
	a.style.color = 'black';
	c.style.color = 'black';
}