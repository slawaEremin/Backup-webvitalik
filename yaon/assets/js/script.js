$(document).ready(function(){	
	/*-- http://ruseller.com/adds/adds2251/example/  --*/
    $(window).load(function() {
        $('.flexslider').flexslider();
    });

	/*--- http://www.jacklmoore.com/colorbox --*/
	$(".colorbox").colorbox();


    /*---  http://caroufredsel.frebsite.nl--*/
    $(".carousel").carouFredSel({
        width	: "100%",
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

    $('.tabs-nav a').click( function(){
        var source = $(this).attr('href'),
            link = $(this),
            root = link.closest('.tabs');

        if (link.hasClass('active')) return false;

        root.find('.tabs-nav').find('.active').removeClass('active');
        link.addClass('active');

        root.find('.content-tabs.show').removeClass('show').css('display','none');
        root.find('.'+source).fadeIn( function(){
            $(this).addClass('show');
        })
            return false;
    })

        $('.accord').find('.title').click( function(){
            var link = $(this),
                par = $(this).closest('h3'),
                block = par.next('div');

            if ( par.hasClass('active')){
                par.removeClass('active');
                par.next('div').slideUp( );
            } else {
                par.siblings('h3').removeClass('active')
                    .end().addClass('active');

                par.siblings('div').not(block).slideUp();
                block.slideDown( )


            }
            return false;
        })

        $('.menu li').hover( function(){
            var link = $(this),
                widthMenu,
                menu;


            link.find('a').first().addClass('selected');
            menu = link.find('ul');
            menu.css('left', (link.width()-menu.outerWidth())/2).stop(true,true).fadeIn();


        }, function(){
            var link = $(this).closest('li');
            link.find('a').first().removeClass('selected');
            link.find('ul').stop(true,true).fadeOut()

        })
	







});




