$(document).ready(function(){	
	/*-- http://ruseller.com/adds/adds2251/example/  --*/
    $(window).load(function() {
        $('.flexslider').flexslider();
    });

	/*--- http://www.jacklmoore.com/colorbox --*/
	$(".colorbox").colorbox();

    $('.menu>li').hover(
        function(){
           $(this).find('.menu-items').stop(true,true).fadeIn(200);
            $(this).children('a').addClass('selected');
        },
        function(){
            $(this).find('.menu-items').stop(true,true).fadeOut(200);
            $(this).children('a').removeClass('selected');
        }
    );

    $('.menu').hover(
        function(){
            $('header').stop(true,true).animate({height:350}, 200);
        },
        function(){
            $('header').stop(true,true).animate({height:250}, 200);
        });

    /*---  http://caroufredsel.frebsite.nl--*/
    $(".carousel").carouFredSel({

        auto 	: false,
        scroll	: {
            items	: 2
        },
        prev	: {
            button	: ".gal_prev"
        },
        next	: {
            button	: ".gal_next"
        }
    });
	







});




