$(document).ready(function(){	
	/*-- http://ruseller.com/adds/adds2251/example/  --*/
    $(window).load(function() {
        $('.flexslider').flexslider();
    });

	/*--- http://www.jacklmoore.com/colorbox --*/
	$(".colorbox").colorbox();


    /*---  http://caroufredsel.frebsite.nl--*/
    $(".carusel").carouFredSel({
        width	: "100%",
        auto 	: false,
        scroll	: {
            items	: 2
        },
        prev	: {
            button	: ".gal_prev1"
        },
        next	: {
            button	: ".gal_next1"
        }
    });

    $(".carusel1").carouFredSel({
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

    $(".carusel2").carouFredSel({
        width	: "100%",
        auto 	: false,
        scroll	: {
            items	: 2
        },
        prev	: {
            button	: ".gal_prev2"
        },
        next	: {
            button	: ".gal_next2"
        }
    });



    /*pretty table*/
    $('table.pretty').each(function(){
        $(this).find(':odd').addClass('grey');
    });

    /*golos*/
    $('.mark>li').hover( function(){
            var index = $(this).index(),
                root = $(this).closest('ul');
            root.find('.active').removeClass('active');
            for (var i=0, element=root.find('li').first() ; i<index; i++){
              element.find('a').addClass('active');
              element = element.next();
            }

        },
        function(){
            var root = $(this).closest('ul');
            var index = root.find('.activeMain').closest('li').index()+1;
            root.find('.active').removeClass('active');
            for (var i=0, element=root.find('li').first() ; i<index; i++){
                element.find('a').addClass('active');
                element = element.next();
            }

        });

    /*golos init*/
    function init() {
        $('.mark').each(function () {

            var root = $(this);
            var index = root.find('.activeMain').closest('li').index() + 1;
            root.find('.active').removeClass('active');
            for (var i = 0, element = root.find('li').first(); i < index; i++) {
                element.find('a').addClass('active');
                element = element.next();

            }
        })
    }
     init();

    /*catalog*/
    $('.firstList').find('a').click( function(){
        var list = $(this).closest('li').find('ul');
        if (list) {
            $(this).addClass('active');
            list.slideDown();
            $(this).closest('li').siblings()
                .find('ul').slideUp().end()
                .find('a').removeClass('active');
        }

        return false;
    })

    $('.firstList').find('ul').slideUp();

    /*tabs*/
    $('.tabs').find('a').click( function(){
        if ($(this).hasClass('active')) return false;

        var source = $(this).attr('href');
        $('.tabs a').not($(this)).removeClass('active');
        $(this).addClass('active')
        $(this).closest('.detail').find('.contentTabs').not(''+source).fadeOut()
        $(''+source).fadeIn();

        return false
    });

    $('.contentTabs').first().fadeIn();


    /*отзывы и вопросы*/
    $('.tabsQuest').find('a').click( function(){
        if ($(this).hasClass('active')) return false;

        var source = $(this).attr('href'),
            root = $(this).closest('ul');
        $(root).find('a').not($(this)).removeClass('active');
        $(this).addClass('active')
        $(this).closest('.question').find('.contentQuest').not(''+source).fadeOut()
        $(''+source).fadeIn();

        return false;
    });

    $('.question').each( function(){
        $(this).find('.contentQuest').first().fadeIn();
    })

        /*filter аксессуары*/
    $('.listAdd').find('a').click( function(){
        var type = $(this).attr('id'),
            root = $(this).closest('.allAddItems'),
            rootList = $(this).closest('.listAdd');

        if (type=='all') {
            root.children('div').fadeIn();
            return false;
        }

        root.children('div').not('.'+type).fadeOut(200);
        $('.'+type).delay(200).fadeIn(200);

        $(this).addClass('active');
        rootList.find('a').not($(this)).removeClass('active');

        return false;
    })

        /*другие телефоны*/
    $('.otherPhone').hover(
        function(){
           $(this).addClass('activeOtherPhone');
           $(this).children('div').css('right','0');

        },
        function(){
            $(this).children('div').css('right','-8000px');
            $(this).removeClass('activeOtherPhone');
        }
    )


        /*slider phone*/

    $('.slider-news').sliderBig();


    /*tabs for colors*/
    $('.listColors').find('a').click( function(){
        if ($(this).hasClass('active')) return false;

        var source = $(this).attr('href'),
            root = $(this).closest('ul');
            liRoot = $(this).closest('li');
        $(root).find('li').not(liRoot).removeClass('active');
        liRoot.addClass('active')
        $(this).closest('.colorsProduct').find('.colorsContent').not(''+source).css('display','none');
            $(''+source).fadeIn();



        return false;
    });

    $('.colorsContent').css('display','none').first().fadeIn();

    /*show all color*/
    $('.allColor').click( function(){
        var root = $('.viewAllColor');
        if (root.hasClass('active')){
            root.removeClass('active').stop(true,true).animate({height:35},200);
            root.find('.previewImage, .price').slideUp(100);
        } else {
        $('.viewAllColor').addClass('active').stop(true,true).animate({height:140},200);
        $('.viewAllColor').find('.previewImage, .price').slideDown(200);
        }
         return false;
    });

    $('.listOtherPhone').css('right','-8000px');












});




