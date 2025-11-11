// Получить первый <div> на странице
const firstDiv = document.querySelector('div');
console.log('first div:', firstDiv);

// Получить первый <ul> на странице
const firstUl = document.querySelector('ul');
console.log('first ul:', firstUl);

// Получить второй <li> внутри этого <ul> (второй по порядку, индекс 1)
let secondLi;
secondLi = firstUl.querySelectorAll('li')[1];
console.log('second li in first ul:', secondLi);


let pitLi;
pitLi = Array.from(firstUl.querySelectorAll('li')).find(li => li.textContent.trim() === 'Пит');

console.log('li with text "Пит":', pitLi);




