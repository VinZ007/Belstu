'use strict'
let drag = document.getElementById('drag');
let dropText = document.getElementById('dropText');
let dropImage = document.getElementById('dropImage');
let draggedItem; //для хранения текущего перетаскиваемого элемента

// Отслеживаем, какие элементы уже перетащены
let textMoved = false;
let imageMoved = false;

// Получаем все перетаскиваемые элементы
let items = document.querySelectorAll('[draggable="true"]');

// Назначаем обработчики для каждого элемента
for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('dragstart', function (e) { //event интерфейс для работы с api
        // Проверяем, можно ли перетаскивать этот элемент
        if ((this.id === 'textItem' && !textMoved) ||
            (this.id === 'imageItem' && !imageMoved)) {
            draggedItem = this;
            this.style.opacity = '0.4';
            e.dataTransfer.setData('text/plain', this.id); //сохраняет данные для передачи между событиями drag & drop
        }
    });

    items[i].addEventListener('dragend', function () {
        this.style.opacity = '1';
    });
}


let zones = [drag, dropText, dropImage];
for (let i = 0; i < zones.length; i++) {
    zones[i].addEventListener('dragover', handleDragOver);
    zones[i].addEventListener('dragenter', handleDragEnter);
    zones[i].addEventListener('dragleave', handleDragLeave);
    zones[i].addEventListener('drop', handleDrop);
}

function handleDragOver(e) {
    e.preventDefault(); //на любой стадии выполнения потока событий отменяет событие
}

function handleDragEnter(e) {
    e.preventDefault();
    this.classList.add('highlight');
}

function handleDragLeave() {
    this.classList.remove('highlight');
}

function handleDrop(e) {
    e.preventDefault();
    this.classList.remove('highlight');

    if (draggedItem) {
        // Проверяем, в какую зону перетащили элемент
        if (this.id === 'dropText' && draggedItem.id === 'textItem' && !textMoved) {
            // Для текстовой зоны
            this.innerHTML = `
                        <div class="text_drag">
                            <h3>Тильда</h3>
                        </div>
                    `;
            this.classList.add('used');
            textMoved = true;
            disableElement('textItem');
            alert('Текст перемещен в целевую зону!');
        }
        else if (this.id === 'dropImage' && draggedItem.id === 'imageItem' && !imageMoved) {
            // Для зоны изображения
            this.innerHTML = `
                        <div class="image_drag">
                            <figure>
                                <img src="smelov.jpg" alt="Новое изображение">
                            </figure>
                            <figcaption>Кофе помргает от Альцгеймера</figcaption>
                        </div>
                    `;
            this.classList.add('used');
            imageMoved = true;
            disableElement('imageItem');
            alert('Изображение перемещено в целевую зону!');
        }
        
        else {
            // Если перетащили не в ту зону или элемент уже перемещен
            if ((draggedItem.id === 'textItem' && textMoved) ||
                (draggedItem.id === 'imageItem' && imageMoved)) {
                alert('Этот элемент уже был перемещен!');
            } else {
                alert('Перетащите элемент в правильную зону!');
            }
        }

        // Проверяем, перемещены ли оба элемента
        if (textMoved && imageMoved) {
            disableDragging();
            alert('Оба элемента перемещены! Перетаскивание отключено.');
        }
    }
}

// Функция для отключения элемента
function disableElement(elementId) {
    let element = document.getElementById(elementId);
    if (element) {
        element.removeAttribute('draggable');
        element.style.cursor = 'default';
        element.style.opacity = '0.5';
    }
}

// Функция для полного отключения перетаскивания
function disableDragging() {
    // Удаляем обработчики событий со всех зон
    [drag, dropText, dropImage].forEach(zone => {
        zone.removeEventListener('dragover', handleDragOver);
        zone.removeEventListener('dragenter', handleDragEnter);
        zone.removeEventListener('dragleave', handleDragLeave);
        zone.removeEventListener('drop', handleDrop);
    });

    // Отключаем все оставшиеся перетаскиваемые элементы
    items.forEach(item => {
        item.removeAttribute('draggable');
        item.style.cursor = 'default';
    });
}

/*--------------------------------------TASK3------------------------------------*/

let canvas = document.getElementById('canvas').getContext('2d');//возвращает объект, предоставляющий методы и свойства для рисования в элементе <canvas>.

let color = "black";

const width = 540;
const height = 540;
const X_BLock = 30;
const Y_BLock = 30;


function clearCanvas() {
    canvas.clearRect(0, 0, width, height);
}

function Draw() {
    canvas.beginPath();
    canvas.font = "14px Arial";
    canvas.strokeStyle = "#ffc264";
    canvas.fillStyle = "black";

    // ГЛАВНЫЕ ОСИ
    canvas.beginPath();
    canvas.strokeStyle = "black";
    canvas.moveTo(0, height / 2);
    canvas.lineTo(width, height / 2);
    canvas.stroke();

    canvas.moveTo(width / 2, 0);
    canvas.lineTo(width / 2, height);
    canvas.stroke();

    canvas.fillStyle = color;
    canvas.closePath();
}

function changeColor() {
    let info = document.getElementById('colors');
    color = info.value;
}

function GetRadio(name) {
    let selected = document.querySelector(`input[name="${name}"]:checked`);
    if (!selected) {
        return null;
    }
    return parseInt(selected.value);
}


let animationId = null;

function calculateFunction(x, funcValue) {
    switch (funcValue) {
        case 1: return x * x; // y=x²
        case 2: return x * x * x; // y=x³
        case 3: return Math.sin(x); // y=sin(x)
        case 4: return Math.cos(x); // y=cos(x)
        default: return 0;
    }
}

function drawAnimatedGraph(funcValue, color) {
    if (animationId) {
        cancelAnimationFrame(animationId);
    }

    clearCanvas();
    Draw();

    const points = [];
    const scale = 30;

    // Создаем массив точек
    for (let i = -8; i <= 8; i += 0.1) {
        const x = i;
        const y = calculateFunction(x, funcValue);
        const canvasX = width / 2 + x * scale;
        const canvasY = height / 2 - y * scale;
        points.push({ x: canvasX, y: canvasY });
    }

    let currentIndex = 0;
    function animate() {
        if (currentIndex < points.length - 1) {
            canvas.beginPath();
            canvas.strokeStyle = color;
            canvas.lineWidth = 2;

            // Рисуем линию от текущей точки к следующей
            canvas.moveTo(points[currentIndex].x, points[currentIndex].y);
            canvas.lineTo(points[currentIndex + 1].x, points[currentIndex + 1].y);
            canvas.stroke();

            currentIndex++;
            animationId = requestAnimationFrame(animate);
        }
    }

    animate();
}


function Buildf() {
    const funcValue = GetRadio('ffunc');
    if (funcValue == null) {
        alert("Вы не выбрали функцию");
        return;
    }
    // Получаем выбранный цвет
    changeColor();

    // Запускаем анимированное рисование графика
    drawAnimatedGraph(funcValue, color);
}
Draw();


