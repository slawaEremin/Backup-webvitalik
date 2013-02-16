$(document).ready(function(){	


    $('.menu>li a').first().mouseenter( function(){
            var childs = $(this).closest('li').find('ul').length;
            $(this).closest('li').addClass('active').find('.sub-menu-inner').stop(true,true).slideDown();


    });

    $('menu>li.rounded').not('first').find('a').hover(
        function(){
           $(this).addClass('hover');
        },
        function(){
            $(this).removeClass('hover');
        }
    )


    $('.menu>li, .sub-menu').mouseleave( function(){
        var parent = 0;
        if ($(this).hasClass('first')){
            parent = $(this);
        }

        if ($(this).hasClass('sub-menu')){

            parent = $(this).closest('li.first');
        }



        if (parent!=0){
            if (!parent.hasClass('active')) return false;
            parent.removeClass('active').find('.sub-menu-inner').stop(true,true).slideUp();
        }
    });



        /*var childs = $(this).closest('li').find('ul').length,
            parent = $(this).closest('li');
           parent.removeClass('active').find('.sub-menu-inner').stop(true,true).slideUp();

        if (childs == 0){
            $(this).removeClass('hover').find('span').fadeOut();

        }*/


    $('.menu>li').each( function(){
        var childs = $(this).find('ul').length;
        if (childs == 0){
            $(this).find('a').first().find('span').fadeOut();
        }
    })

    $('.up').click( function(){
        var root = $(this).closest('.number-inner'),
            value = root.find('.order').val();
        root.find('.order').val( ++value);
        return false;
    })

    $('.showAll').click( function(){
        var link = $(this),
            parent = $(this).closest('.services'),
            heights;
        if (link.hasClass('shows')){
            parent.find('.drop-list').animate({height:108},400);
            link.removeClass('shows').text('показать все сервисы');

        }else {

        heights = parent.find('.drop-list-inner').height();
        parent.find('.drop-list').animate({height:heights+20},400);
        link.addClass('shows').text('скрыть все сервисы');
        }


        return false;
    })

    $('.down').click( function(){
        var root = $(this).closest('.number-inner'),
            value = root.find('.order').val();
        if (value == 0 || value == null) return false
            else {
            root.find('.order').val( --value);
        }
        return false;
    })









	







});




