'use strict'
function namesite(){
    let name = prompt("Введите имя");
    if(name){
        document.getElementById('hello').innerHTML = `<h1>Привет, ${name}</h1>`;
    }
    else{
        document.getElementById('hello').innerHTML = `<h1>Привет, Антон</h1>`;
    }
}
namesite();


