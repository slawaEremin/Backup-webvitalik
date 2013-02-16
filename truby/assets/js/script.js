$(document).ready(function(){	


    $('.slider').sliderBig();

    $('.showWindow').click( function(){
        $('.overlay').fadeIn(200, function(){
            $('.window').fadeIn(200);
        })
            return false;
    })

    $('.overlay, .window-phone').click( function(){
        $('.window').fadeOut(200, function(){
            $('.overlay').fadeOut(200);
        })
        return false;
    })

    $(window).load(function() {
        $('.flexslider').flexslider({
            slideshowSpeed: 5000,
            animationDuration: 300

        });
    });

    $('.category>li a').click( function(){
        var parent = $(this).closest('li'),
            root = $(this).closest('.category'),
            childs = root.find('ul a');
        if ($(this).is(childs)) return;

        if (parent.hasClass('active')){
            parent.removeClass('active')
        }else{
            root.find('.active').removeClass('active');
            parent.addClass('active');
        }
        return false;
    })


    $('.tabs').find('.content-tab:first').fadeIn(100);

    $('.tabs-nav a').click( function(){
        var source = $(this).attr('href'),
            root = $('.tabs'),
            link = $(this).closest('li');
        if (link.hasClass('active')) return false;

        root.find('.content-tab').not('.'+source).fadeOut( function(){
            $('.'+source).fadeIn()
        });

        link.siblings().find('a').removeClass('active').removeClass('no-border');
        link.find('a').addClass('active')
            .end().next().find('a').addClass('no-border');

        return false;
    })


    $('.tabs-nav a').hover(
    function(has){
        $(this).closest('li').next().find('a').addClass('no-border')
    },
    function(has){
        if ($(this).hasClass('active')) return false;
        $(this).closest('li').next().find('a').removeClass('no-border')
    })

    $(".select").selectBox()
	







});




