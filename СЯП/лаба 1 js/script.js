"use strict";
function task1(){
if(confirm("Вам есть 18?")){
    let age = prompt("Введите год рождения");
    if(parseInt(age)<=2007 & parseInt(age)>=1925){
        let vosr = 2025- parseInt(age);
        console.log("Возраст подтвержден",vosr);
        vosr >= 50 ? console.log("Решили тряхнуть стариной?"):
        vosr >=18 ? console.log("Залетай, бро"):
        console.log("Добро пожаловать");
        document.writeln(`<h1>ВАМ ПРЕДОСТАВЛЕН ДОСТУП</h1>`)
        document.writeln(`<a href="index.html" style="text-decoration: none;color: red; font-size: 22px;">Вернуться на первую страницу</a>`)
        
    }
    else if(parseInt(age)<=1925){
        console.log("А если серьезно?");
        alert("Возраст не подтвержден");
        document.writeln(`<h1 style="color: red; font-family: 'Impact';font-size: 52px;">ДОСТУП ОГРАНИЧЕН</h1>`)
        document.writeln(`<a href="index.html" style="text-decoration: none;color: red; font-size: 22px;">Вернуться на первую страницу</a>`)
 
    }
    else{
        alert("Возраст не подтвержден");
        document.writeln(`<h1 style="color: red; font-family: 'Impact';font-size: 52px;">ДОСТУП ОГРАНИЧЕН</h1>`)
        document.writeln(`<a href="index.html" style="text-decoration: none;color: red; font-size: 22px;">Вернуться на первую страницу</a>`)
    }
    
    
}
else{
    alert("Вы слишком малы, покиньте сайт");
    document.writeln(`<h1 style="color: red; font-family: 'Impact'; font-size: 52px; ">ДОСТУП ОГРАНИЧЕН</h1>`)
    document.writeln(`<a href="index.html" style="text-decoration: none;color: red; font-size: 22px;">Вернуться на первую страницу</a>`)
}
}

function task2(){
    let a = prompt("Введите число a");

    let b = prompt("Введите число b");
    document.writeln(`<h1>Результат сложения чисел а и b  равен ${parseInt(a)+parseInt(b)}</h1>`)
    document.writeln(`<h1>Результат сложения строчных значений а и b  равен ${a+b}</h1>`)
    document.writeln(`<h1>Результат сложения числа а и строчного значения b  равен ${parseInt(a)+b}</h1>`)
    document.writeln(`<h1>Результат сложения строчного значения а и числа b  равен ${a+parseInt(b)}</h1>`)

     alert("Результат сложения строки и числа это то же самое, что и сложение двух строк, т. е объединенная строка")
    document.writeln(`<a href="index.html" style="text-decoration: none;color: red; font-size: 22px;">Вернуться на первую страницу</a>`)


}

function task3(){
    let numb = prompt("Введите номер примера");
    switch (numb){
        case '1': 
            alert("Ваш пример: (35y-25x)^3/5+23x^5");
             document.writeln(`<h1>Ваш пример: (35y-25x)^3/5+23x^5</h1>`);
            let x = prompt("Введите x");
            let y = prompt("Введите y");
            let result =((((35*y)-(25*x))**3)/5)+((23*x)**5);
            console.log(result);
            document.writeln(`<h1>Результат решения примера равен ${result.toFixed(2)}</h1>`);
            document.writeln(`<a href="index.html" style="text-decoration: none;color: red; font-size: 22px;">Вернуться на первую страницу</a>`)
            break;
        case '2':
            alert("Ваш пример: (12a² + 5b) / (3a - b⁴)");
             document.writeln(`<h1>Ваш пример: (12a² + 5b) / (3a - b⁴)</h1>`);
            let a = prompt("Введите a");
            let b = prompt("Введите b");
            let result1 =((12*(a**2))+(5*b)/((3*a)-(b**4)));
            console.log(result1);
            document.writeln(`<h1>Результат решения примера равен ${result1.toFixed(2)}</h1>`);
            document.writeln(`<a href="index.html" style="text-decoration: none;color: red; font-size: 22px;">Вернуться на первую страницу</a>`)
            break;
        case '3':
            alert("Ваш пример: ( (с - 2d)³ ) / (4c⁴d²)");
             document.writeln(`<h1>Ваш пример: ( (c - 2d)³ ) / (4c⁴d²)</h1>`);
            let c = prompt("Введите c");
            let d = prompt("Введите d");
            let result3 =(((c-(2*d))**3)/(4*(c**4)*(d**2)));
            console.log(result3);
            document.writeln(`<h1>Результат решения примера равен ${result3.toFixed(2)}</h1>`);
            document.writeln(`<a href="index.html" style="text-decoration: none;color: red; font-size: 22px;">Вернуться на первую страницу</a>`)
            break;
        case '4':
            alert("Ваш пример:  (16e⁶f²)^(¹/₂) + (8e³f⁹)^(¹/₃)");
             document.writeln(`<h1>Ваш пример:  (16e⁶f²)^(¹/₂) + (8e³f⁹)^(¹/₃)</h1>`);
            let e = prompt("Введите e");
            let f = prompt("Введите f");
            let result4 =(((16*(e**6)*(f**2))**(1/2)) + ((8*(e**3)*(f**9))**(1/3)));
            console.log(result4);
            document.writeln(`<h1>Результат решения примера равен ${result4.toFixed(2)}</h1>`);
            document.writeln(`<a href="index.html" style="text-decoration: none;color: red; font-size: 22px;">Вернуться на первую страницу</a>`)
            break;
        case '5':
            alert("Ваш пример:  (3x² - 5y²) / (7xy³)");
             document.writeln(`<h1>Ваш пример:  (3x² - 5y²) / (7xy³)</h1>`);
            let g = prompt("Введите e");
            let h = prompt("Введите f");
            let result5 =(((3*(g**2)) - (5*(h**2)))/(7*g*(h**3)));
            console.log(result5);
            document.writeln(`<h1>Результат решения примера равен ${result5.toFixed(2)}</h1>`);
            document.writeln(`<a href="index.html" style="text-decoration: none;color: red; font-size: 22px;">Вернуться на первую страницу</a>`)
            break;



    }

}

function task4() {
    let col = parseInt(prompt("Enter a"));
    let row = parseInt(prompt("Enter b"));

    
    if (col <= 0 || row <= 0) {
        alert("Please enter valid positive numbers.");
        return;
    }

    document.writeln(`<table border='1' style=" width:80%; min-height: 400px;">`); 

    
    for (let i =1; i <= col; i++) {
        document.writeln(`<tr>`); 

        
        for (let j =1; j <= row; j++) {
            document.writeln(`<td>${i * j}</td>`); 
        }

        document.writeln(`</tr>`); 
    }

    document.writeln(`</table>`);
}

function task5(){
    document.writeln(`<div style="display: flex; justify-content: center; align-items: center;">`)
    document.writeln(`<div style = "display:flex;flex-direction:column;background-color: rgba(255, 255, 255, 0.9);border-radius: 15px;box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);padding: 30px;text-align: center; height:400px; width:500px;">`)
    document.writeln(`<h1 style="color: #6e8efb; margin-top: 0;">Угадай число</h1>`)    
    document.writeln(`<div>`)
    document.writeln(`<p style="margin-bottom: 20px;">Я загадал число от 1 до 100. Попробуй угадать его!</p>`)
    document.writeln(`<p style="margin-bottom: 20px;">После каждой попытки я скажу, больше или меньше мое число.</p>`)
    document.writeln(`</div>`)
    document.writeln(`<button style="background-color: #6e8efb;color: white;border: none;border-radius: 50px;padding: 12px 25px;font-size: 16px;cursor: pointer;transition: all 0.3s;margin-top: 15px;" onclick="startGame()">Начать игру</button>`)
    document.writeln(`<div id="hint" style="margin: 15px 0; padding: 10px;border-radius: 8px;background-color: #f0f4ff;min-height: 20px;"></div>`)
    document.writeln(`<div id="attempts" style="margin-top: 20px;font-weight: bold;color: #6e8efb;">Попыток: 0</div>`)
    document.writeln(`</div>`);
    document.writeln(`</div>`);
    startGame();
  
}
var targetNumber;
var attempts;
function startGame() {
            
            // Генерируем случайное число от 1 до 100
            targetNumber = Math.floor(Math.random() * 100) + 1;
            attempts = 0;
            document.getElementById('attempts').textContent = 'Попыток: 0';
            document.getElementById('hint').textContent = '';
            guessNumber();
        }
        
function guessNumber() {
            let isCorrect = false;
            while (!isCorrect) {
                
                let userInput = prompt("Введите число от 1 до 100:");
                
                
                if (userInput === null) {
                    alert("Игра окончена. Загаданное число было: " + targetNumber);
                    return;
                }
                
                
                let userGuess = parseInt(userInput);
                
                attempts++;
                document.getElementById('attempts').textContent = 'Попыток: ' + attempts;
            if (userGuess === targetNumber) {
                    isCorrect = true;
                    document.getElementById('hint').textContent = 'Поздравляю! Вы угадали число ' + targetNumber + ' за ' + attempts + ' попыток!';
                    alert("Поздравляю! Вы угадали число " + targetNumber + " за " + attempts + " попыток!");
                } else if (userGuess < targetNumber) {
                    document.getElementById('hint').textContent = 'Не угадали! Моё число больше ' + userGuess;
                    alert("Моё число больше " + userGuess);
                } else {
                    document.getElementById('hint').textContent = 'Не угадали! Моё число меньше ' + userGuess;
                    alert("Моё число меньше " + userGuess);
                }
            }
            
        }
    