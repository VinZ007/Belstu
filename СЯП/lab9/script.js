let drag = document.getElementById('drag');
let drop = document.getElementById('drop');
let draggedItem;

// Получаем все перетаскиваемые элементы
let items = document.querySelectorAll('[draggable="true"]');

// Назначаем обработчики для каждого элемента
for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('dragstart', function() {
        draggedItem = this;
        this.style.opacity = '0.4';
    });

    items[i].addEventListener('dragend', function() {
        this.style.opacity = '1';
    });
}

// Обработчики для зон
drag.addEventListener('dragover', handleDragOver);
drop.addEventListener('dragover', handleDragOver);

drag.addEventListener('drop', handleDrop);
drop.addEventListener('drop', handleDrop);

function handleDragOver(e) {
    e.preventDefault();
}

function handleDrop(e) {
    e.preventDefault();
    if (draggedItem) {
        this.appendChild(draggedItem);
        
        // Проверяем, если элемент перемещен в зону drop
        if (this.id === 'drop') {
            alert('Элемент перемещен в целевую зону!');
        }
    }
}