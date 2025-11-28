$(document).ready(function(){
    // Инициализируем начальную позицию
    $('img').css('marginLeft', '0');
    
    $('#left').click(function(){
        $('img').animate({
            marginLeft: "-=100px"
        }, 300) // Добавляем продолжительность анимации
    })
    
    $('#right').click(function(){
        $('img').animate({
            marginLeft: "+=100px"
        }, 300) // Добавляем продолжительность анимации
    })
})