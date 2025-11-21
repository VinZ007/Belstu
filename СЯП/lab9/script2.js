'use strict' 
const image = document.getElementById('image');
let animationId;
let angle = 0;
image.style.left = "75px";
image.style.top = "75px";

function startAnimation() {

    if (animationId) {
        cancelAnimationFrame(animationId); //Метод, останавливает анимацию, запланированную с помощью метода requestAnimationFrame().
    }

    // Запускаем круговое движение
    animateCircle();
}

function animateCircle() {
    // Вычисляем позицию по кругу
    const radius = 100;
    const centerX = 75 + 180; //Центр круга по X: 75 + 180 = 255px
    const centerY = 75 + 87; // Центр круга по Y: 75 + 87 = 162px

    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);

    image.style.left = x + "px";
    image.style.top = y + "px";

    angle += 0.05;

    // Проверяем, завершен ли полный круг
    if (angle < 2 * Math.PI) {
        animationId = requestAnimationFrame(animateCircle);
    } else {
        // Сбрасываем угол и возвращаем в начальную позицию
        angle = 0;
        setTimeout(() => {
            image.style.left = "75px";
            image.style.top = "75px";
        }, 2000);
    }
}