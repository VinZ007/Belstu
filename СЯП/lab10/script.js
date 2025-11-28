$(document).ready(function () {
    $('#btn1').click(function () {
        $('#sidebar, .post').toggleClass('alt-color');
    });

    $('#btn2').click(function () {
        $('.post span').toggleClass('big-span');
    });

    $('#btn3').click(function () {
        $('div span').toggleClass('span-shadow');
    });

    $('#btn4').click(function () {
        $('*').toggleClass('all-underline');
    });

    $('#btn5').click(function () {
        $('p').each(function () {
            $(this).find('*').toggleClass('p-desc-border');
        });
    });


    $('#btn6').click(function () {
        $('div:nth-of-type(even)').toggleClass('align-left');
    });

    $('#btn7').click(function () {
        $('[title$="biography"]').toggleClass('italic-title');
    });

    $('#btn8').click(function () {
        $('div').first().toggleClass('first-bold');
    });

    $('#btn9').click(function () {
        $('input[type=text]').toggleClass('narrow-input');
    });

    var h2ImgSrc = 'pushkin.jpg';
    $('h2').dblclick(function () {
        var $this = $(this);
        if (!$this.data('img-mode')) {
            $this.data('orig-html', $this.html());
            $this.html('<img src="' + h2ImgSrc + '" alt="h2 image" />');
            $this.data('img-mode', true);
        } else {
            $this.html($this.data('orig-html'));
            $this.data('img-mode', false);
        }
    });


    $('#logList').click(function () {
        $('#myList li').each(function (i, li) {

            console.log('List item ' + (i + 1) + ': ' + $(li).text());
        });
    });

    $('#fadeOut').click(function () {
        $('#myList li').each(function (i, li) {
            $(li).animate({ opacity: 0 }, 500);
        });
    });
    $('#fadeIn').click(function () {
        $('#myList li').each(function (i, li) {
            $(li).animate({ opacity: 1 }, 500);
        });
    });

 
    $('#myList li').hover(
        function () {
            var $img = $('<img class="list-hover-img" src="pushkin.jpg" alt="icon">');
            $(this).data('hoverImage', $img);
            $(this).after($img);
        },
        function () {
            var $img = $(this).data('hoverImage');
            if ($img) { $img.remove(); }
        }
    );
});