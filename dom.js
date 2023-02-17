console.log("Entramos");

var items = document.getElementsByClassName("item");
var cantidad = items.length;
console.log("Cantidad de listas"+cantidad);

var div = document.createElement("div");

div;

div.innerText="Aprendiendo JavaScript";

var divUno = document.getElementById("uno");

divUno.appendChild(div);

var lista = document.getElementById("lista");

var hijo = document.createElement("li");
hijo.innerText = "li nuevo";
lista.appendChild(hijo);

var par = document.getElementById('tres').style.color = '#FF0033';
var par = document.getElementById('lista').style.color = '#009966';
document.getElementById('cuatro').style.backgroundColor = '#0099FF';
var par = document.getElementById('lista cuatro').style.color = '#FF0033';

