'use strict'

// Сначала читаем от пользователя границы диапазона (min и max). Используем parseFloat
var min = parseFloat(prompt("Введите минимальное значение для генерации случайных чисел"));
var max = parseFloat(prompt("Введите максимальное значение для генерации случайных чисел"));


// Утилитарная функция: возвращает случайное число в диапазоне [min, max).

function rand(min, max) {
	return Math.random() * (max - min) + min; //Math.random() — возвращает число с плавающей точкой от 0 (включительно) до 1 (не включительно).
	
}

// Генерируем x и y в указанном диапазоне.
let x = rand(min, max);

// Защита: если x оказался ровно 0, то некоторые выражения содержат деление на |x| — это вызовет ошибку (деление на ноль).
// Здесь мы выводим предупреждение и просим ввести диапазон заново. 
if (Math.abs(x) == 0){
	alert("x присвоилось значение ноль, введите максимальное и минимальное значение еще раз");
	// Переопределяем значения диапазона, пользователь вводит их заново
	
	min = parseFloat(prompt("Введите минимальное значение для генерации случайных чисел"));
	max = parseFloat(prompt("Введите максимальное значение для генерации случайных чисел"));
	
	
	
}

let y = rand(min, max);

// Количество знаков после запятой при выводе. Используем parseInt, чтобы получить целое число.
const decimals = parseInt(prompt("Введите количество знаков после запятой при выводе"));

// Массив для хранения значений четырёх выражений.
let results = [];


// 1) 3 + 5 * (x / e)^7
//    используем Math.pow для степени и Math.E для числа e
results.push(3 + 5 * Math.pow(x / Math.E, 7));

// 2) (cos(x)^3 - sin(y)^2) / ln(5)
//    Math.cos и Math.sin принимают аргументы в радианах; Math.log — натуральный логарифм
results.push((Math.pow(Math.cos(x), 3) - Math.pow(Math.sin(y), 2)) / Math.log(5));

// 3) |x| * log2(|y| + 1) / 13
//    используем Math.abs для модуля. Math.log2 есть в современных браузерах.
//    Если логика должна работать в старых окружениях, можно заменить на Math.log(v)/Math.log(2).
results.push(Math.abs(x) * Math.log2(Math.abs(y) + 1) / 13);

// 4) 2 * atan(y) * ln(2) / |x|
//    Math.atan возвращает арктангенс, Math.log(2) — натуральный логарифм 2
results.push(2 * Math.atan(y) * Math.log(2) / Math.abs(x));

// Находим максимум и минимум в массиве results.
const maxValue = Math.max(...results);
const minValue = Math.min(...results);

// Получаем индексы (добавляем +1, чтобы нумерация выражений была с 1, а не с 0).
// indexOf возвращает первый индекс, на котором найдено значение.
const maxIndex = results.indexOf(maxValue) + 1; 
const minIndex = results.indexOf(minValue) + 1;

// Выводим результаты на страницу — создаём простой контейнер.
// Значения x и y форматируем методом toFixed с количеством знаков, указанным пользователем.
const container = document.createElement('div');
container.style.fontFamily = 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif';
container.style.padding = '16px';
container.innerHTML = ` 
	<h2>Вычисления (x и y заданы случайно)</h2>
	<p><strong>x</strong> = ${x.toFixed(decimals)}, <strong>y</strong> = ${y.toFixed(decimals)}</p>
	
	<p>Максимум: выражение №<strong>${maxIndex}</strong> = <strong>${maxValue}</strong></p>
	<p>Минимум: выражение №<strong>${minIndex}</strong> = <strong>${minValue}</strong></p>
`; //вставка HTML-кода в элемент

document.body.appendChild(container);

// Для отладки в консоль также выведем значения
console.log('x =', x, 'y =', y);
console.log('results =', results);
console.log('max =', maxValue, 'min =', minValue);

// --- Задание 2: демонстрация преобразований типов для нескольких строковых значений ---
// Набор тестовых строк, на которых продемонстрируем поведение разных функций преобразования типов.
const conversionTests = ["3.12", "*3.12", "3.", "3.Julia", "312", "Polina3.12", "FIT3"];
for(let i=0; i< conversionTests.length; i++){
	console.log(String(conversionTests[i]));
	console.log(Number(conversionTests[i]));
	console.log(Boolean(conversionTests[i]));
	console.log(parseFloat(conversionTests[i]));
	console.log(parseInt(conversionTests[i]));
}




// --- Задание3: показать текущую дату и время в таблице (используем объект Date) ---
// Создаём объект Date с текущим временем
const now = new Date();

// Получаем составляющие
const year = now.getFullYear();
const month = now.getMonth() + 1; // месяц в JS 0-11, поэтому +1 для человека
const day = now.getDate();
const hour = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
const fullDate = now.toString(); // полное представление даты и времени

function pad2(n) {
	return n < 10 ? '0' + n : String(n);
}

// Строим таблицу
const dateContainer = document.createElement('div');
dateContainer.style.margin = '16px';
dateContainer.style.fontFamily = 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif';

const title = document.createElement('h3');
title.textContent = 'Составляющие текущей даты и времени';
dateContainer.appendChild(title);

const table = document.createElement('table');
table.style.borderCollapse = 'collapse';
table.style.minWidth = '320px';


function addRow(label, value) {
	const tr = document.createElement('tr'); // создает элемент с указанным тегом
	const td1 = document.createElement('td');
	const td2 = document.createElement('td');
	td1.textContent = label;
	td1.style.border = '1px solid #ddd';
	td1.style.padding = '8px';
	td1.style.background = '#f9f9f9';
	td2.textContent = value;
	td2.style.border = '1px solid #ddd';
	td2.style.padding = '8px';
	tr.appendChild(td1);// вставляет элемент как дочерний в родительский элемент
	tr.appendChild(td2);
	table.appendChild(tr);
}

addRow('Год', year);
addRow('Месяц', pad2(month));
addRow('День', pad2(day));
addRow('Час', pad2(hour));
addRow('Минуты', pad2(minutes));
addRow('Секунды', pad2(seconds));
addRow('Дата целиком', fullDate);

dateContainer.appendChild(table);
document.body.appendChild(dateContainer);

// --- Задание 4: количество дней до указанной даты ---

function askIntegerInRange(message, min, max) {
	while (true) {
		let raw = prompt(message);
		if (raw === null) return null; // пользователь отменил
		let n = parseInt(raw.trim()); //Удаляет начальные/конечные пробелы (trim())
		if (!Number.isNaN(n) && n >= min && n <= max){ //Number.isNaN(n) — функция, которая возвращает true только если значение n строго равно специальному значению NaN (Not‑A‑Number).
		
			return n;
		}  
		else{
			alert(`Введите целое число от ${min} до ${max}.`);
	}}
}

// Возвращает число дней в месяце year и month (month: 1-12)
function daysInMonth(year, month) {
	return new Date(year, month, 0).getDate(); //0- дни
}

// Спрашиваем у пользователя день и месяц
const userDay = askIntegerInRange('Введите день (1-31):', 1, 31);
if (userDay !== null) {
	let userMonth = askIntegerInRange('Введите месяц (1-12):', 1, 12);
	if (userMonth !== null) {
		// Проверим, валиден ли такой день для указанного месяца и текущего года
		let today = new Date();
		let thisYear = today.getFullYear();
		let maxDayThisMonth = daysInMonth(thisYear, userMonth);
		if (userDay > maxDayThisMonth) {
			alert(`В месяце ${userMonth} максимум ${maxDayThisMonth} дней. Попробуйте снова.`);
		} else {
			// Формируем целевую дату в текущем году
			let target = new Date(thisYear, userMonth - 1, userDay); //пользователь вводил месяц в привычной форме 1..12. Конструктор Date ожидает индекс месяца 0..11, поэтому делаем смещение на −1.
			// Начало текущего дня (без времени) — чтобы считать целые дни
			let todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
			// Если дата уже прошла или совпадает с сегодняшней (тогда 0 дней),
			// и если прошла — берем следующий год
			if (target < todayStart) {
				target = new Date(thisYear + 1, userMonth - 1, userDay);//пользователь вводил месяц в привычной форме 1..12. Конструктор Date ожидает индекс месяца 0..11, поэтому делаем смещение на −1.
			}

			let msPerDay = 24 * 60 * 60 * 1000; // количество миллисекунд в дне
			let diffMs = target - todayStart; // положительное число (или 0)
			let daysUntil = Math.round(diffMs / msPerDay);

			// Выведем результат на страницу и в консоль
			const resultDiv = document.createElement('div');
			resultDiv.style.margin = '16px';
			resultDiv.style.fontFamily = 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif';
			resultDiv.innerHTML = `
				<h3>Дней до ${pad2(userDay)}.${pad2(userMonth)}</h3>
				<p>До ближайшего наступления этой даты осталось: <strong>${daysUntil}</strong> ${daysUntil === 1 ? 'день' : 'дней'}</p>
				<p>Целевая дата: ${target.toDateString()}</p>
			`;
			document.body.appendChild(resultDiv);
			console.log(`До ${userDay}.${userMonth} осталось ${daysUntil} дней (целевая дата: ${target.toDateString()})`);
		}
	}
}



