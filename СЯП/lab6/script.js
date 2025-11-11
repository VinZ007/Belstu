let windows = {};
function OpenWindow(){
    let w_name = prompt("Введите рандомное слово");
    const wind1 = window.open("about:blank", w_name, "width=500, height=400");
    wind1.document.writeln(`<html><head><title>${w_name}</title></head><body><h2>Окно: ${w_name}</h2><div id="content"></div></body></html>`);
    windows[w_name] = wind1;
    
}

function CloseWindow(){
    let w_name = prompt("Введите имя окна, которое хотите закрыть");
    if (windows[w_name] && !windows[w_name].closed) {
        windows[w_name].close();
        delete windows[w_name];
    } else {
        alert("Окно с именем " + w_name + " не найдено или уже закрыто.");
    }
}

function PasteText(){
    let w_name = prompt("Введите имя окна, в которое хотите вставить текст");
    if (windows[w_name] && !windows[w_name].closed) {
        let paste_t = prompt("Введите текст");
        windows[w_name].document.writeln(`<h3>Текст: ${paste_t}</h3>`);
    } else {
        alert("Окно с именем " + w_name + " не найдено или уже закрыто.");
    }
}
const table = document.querySelector('table');

function GetInfo(values){
    const tbody = document.querySelector('#browserInfo tbody');
    if (!tbody) return;

    const labels = [
        'Вся информация о браузере пользователя',
        'Версию браузера',
        'Название браузера',
        'Кодовое название браузера',
        'ОС, которую использует пользователь',
        'Включена ли поддержка Java в браузере',
        'Доступная ширина и высота экрана;',
        'Глубина цвета',
        'URL, которые были посещены в данном окне браузера',
        'URL текущего документа',
        'Путь к загруженному документу',
        'Имя домена загруженного документа'
    ];

    const defaultValues = [
        navigator.userAgent,
        navigator.appVersion,
        navigator.appName,
        navigator.appCodeName,
        navigator.platform,
        navigator.javaEnabled(),
        `${screen.width}×${screen.height}`,
        `${screen.colorDepth}`,
        history.length,
        location.href,
        location.pathname,
        location.hostname];

    

    // очистить тело таблицы
    tbody.innerHTML = '';

    for (let i = 0; i < labels.length; i++) {
        tbody.innerHTML += `
            <tr>
                <td>${labels[i]}</td>
                <td>${defaultValues[i]}</td>
            </tr>
        `;
    }
}
