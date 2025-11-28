'use strict'
function createUniqueRandom() {
    const generated = new Set(); // Храним сгенерированные числа

    return function() {
        if (generated.size === 100) {
            return null; // Все числа от 1 до 100 уже были сгенерированы
        }

        let num;
        do {
            num = Math.floor(Math.random() * 100) + 1;
        } while (generated.has(num)); // Генерируем, пока не найдем уникальное

        generated.add(num);
        return num;
    };
}

const getUniqueRandom = createUniqueRandom();

function Pagewrite(){
    let numb = getUniqueRandom()
    alert(numb);
    console.log(numb); 
}

