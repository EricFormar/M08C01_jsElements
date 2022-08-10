const main = document.querySelector('main');
const h2 = document.querySelector('h2');
const a = document.querySelector('a');
const p = document.querySelectorAll('p');

const nombre = prompt('Ingrese su nombre');

if(nombre){
    h2.innerText += ` ${nombre}`
}else{
    h2.innerText += " invitado"
}

h2.classList.add('uppercase')

a.classList.add('colorLink');

let response = confirm('¿Desea colocar un fondo de pantalla?');

if(response){
    document.body.classList.add('fondo')
}

