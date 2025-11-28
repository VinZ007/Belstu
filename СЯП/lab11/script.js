'use strict'
const contacts = new Map();
let number = 1;
function AddContact() {
    let name = prompt("Введите имя контакта");
    let phone = prompt("Введите номер телефона контакта");
    if(name && phone){
        contacts.set(number, [name, phone]);
        number += 1;
    }
    else{
        alert("Введите данные");
    }
    

}
let chosen = document.getElementById('chosen');
function FindContact() {
    let contactnumb = +prompt("Введите порядок контакта");
    console.log(contacts.get(contactnumb));
     let contact = contacts.get(contactnumb);
    if (contact) {
        alert(`Контакт "${contactnumb}": ${contact[0]} - ${contact[1]}`);
        chosen.innerHTML += `<h4>Контакт "${contactnumb}": ${contact[0]} - ${contact[1]}</h4> <br>`;
    } else {
        alert("Контакт не найден!");
    }
    
}

/*---------------------------------------TASK2----------------------------------------- */


let arr = ["apple", "banana", "apple", "cherry", "banana", "cherry", "apple",
    11, 12, 12, 13, 14, 14, 15, 16, 17, 18, 19, 20, 20,
    "elderberry", "fig", "grape", "fig", "banana", "apple",
    "kiwi", "lemon", "mango", "kiwi", "nectarine", "orange"];

function arraybim(arr) {
    console.log("Входной массив:", arr);
    console.log("Длина входного массива:", arr.length);
    
    const set = new Set();
    
    for (let i = 0; i < arr.length; i++) {
        set.add(arr[i]);
    }
    
    const result = Array.from(set);
    console.log("Результат:", result);
    console.log("Длина результата:", result.length);
    
    return result;
}

// Запуск
const result = arraybim(arr);