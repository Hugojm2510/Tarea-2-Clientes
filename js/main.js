// Almacenando el elemento cuyo id es cardContainer en una variable constante llamada cardContainer, realizar las siguientes acciones:
const posicion = document.getElementById("cardContainer");

// 1) Eliminar el primer elemento hijo desde el padre.
posicion.removeChild(posicion.children[0]);

// 2) Eliminar, desde el propio elemento, el elemento cuya clase es "cards redClass".
const hijo2 = document.querySelector(".cards.redClass");
hijo2.remove();

// 3) Crear un elemento h1 con vuestro nombre.
const h1 = document.createElement("h1");
h1.textContent = "Hugo Jiménez Martín";

// 4) Crear un elemento enlace con texto "Vedruna" y cuyo href sea la pagina del vedruna.
const enlace = document.createElement("a");
enlace.href = "https://vedrunasevilla.org/";

// 5) Crear un elemento boton cuyo id sea "botonJoker" y su texto sea "boton".
const boton = document.createElement("button");
boton.id = "botonJoker"; 
boton.textContent = "boton";

// 6) Crear un elemento div cuya clase sea "cards greenClass".
const div = document.createElement("div");
div.className = "greenClass";

// 7) Añadir al elemento div creado anteriormente los h1, enlace y boton creados anteriormente.
div.appendChild(h1);
div.appendChild(enlace);
div.appendChild(boton);

// 8) Añadir a cardContainer el div del apartado anterior.
posicion.appendChild(div);

