let article = document.getElementById('article1');
let text = article.textContent.split(' ');

article.innerHTML = ''; // Сначала очищаем

for (let i = 0; i < text.length; i++) {
    let span = document.createElement('span');
    span.textContent = text[i] + ' '; // Добавляем пробел после каждого слова

    span.addEventListener("mouseover", function () {
        this.style.color = "blue";
        this.style.fontFamily = "Impact";
        this.style.transition = "all 0.8s ease-in-out";
    });

    span.addEventListener("mouseout", function () {
        this.style.color = "black";
        this.style.fontFamily = "Segoe UI";
        this.style.transition = "all 2s ease-in-out";
    });
    span.addEventListener("click", function () {
        this.style.fontSize = "24px";
    })

    article.appendChild(span);
}

let inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('click', function () {
        alert(this.value);
    });
});

let max = document.getElementById('tutudu');
max.addEventListener("click", function () {
    if (!this.querySelector('img')) {
        let image = document.createElement('img');
        image.src = "img/max.jpg";
        image.classList.add("image");
        this.appendChild(image);
        image.addEventListener("mouseover", function () {
            image.style.maxWidth = "300px";
        })
        image.addEventListener("mouseout", function () {
            image.style.maxWidth = "200px";
        })
    }

})

let borx = document.getElementById('bord');
borx.addEventListener("dblclick", function () {
    borx.style.padding = "10px";
    borx.style.border = "4px dotted rgba(227, 164, 139, 0.23)";
})