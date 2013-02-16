$(document).ready(function () {
    /*for window*/
    $('a.hover').click( function(){
        $('#layer').fadeIn( function(){
            $('#window').fadeIn();
        })
        return false;
    });

    $('#close').click( function(){
        $('#window').fadeOut( function(){
           $('#layer').fadeOut();
        })
       return false;
    });

    /*scrooll*/
    $('.drops-scroll, .scrollPane').jScrollPane();

     /*language*/
    $('.drop-list').hover( function(){
        $(this).find('.drops-items').stop(true,true).fadeIn();
    },
    function(){
        $(this).find('.drops-items').stop(true,true).fadeOut();
    });

    $('.drop-list').each( function(){
        var input = $(this).children('input'),
            list = $(this).find('.drops-items');

        list.find('label').click( function(){
           var  listChecked,
               i,
               targetB;

               targetB = $(this).find('b');
               if (targetB.hasClass('active')){
                   targetB.removeClass('active');
               } else{
                   if (list.find('.active').length>=3){
                       return false;
                   } else {
                     targetB.addClass('active');
                   }
               }

               listChecked = list.find('.active'),
                   strInput = '';
               for (i=0;i< listChecked.length; i++){
                   strInput += listChecked.eq(i).siblings('span').text() + ' ,';
               }
               input.val(strInput);


        })
    })

    /*checkbox*/
    $('.checkbox').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
        return false;
    });

    /*hover effect*/
    $('.Item').hover(
        function () {
            $(this).find('.Hover').fadeIn(200);
        },
        function () {
            $(this).find('.Hover').fadeOut(200);
        }
    )

    /*menu*/
    $('.menu').find('a').click(function () {
        var link = $(this).attr('href');
        $('html,body').animate({
            scrollTop:$('' + link).offset().top
        }, 400);
        $('.menu').find('a').not($(this)).removeClass('active');
        $(this).addClass('active');
        return false;
    })

    /*same height*/
    var height = $(window).height(),
       divBlock = $('body>div');

    $('.content').each(function () {
        $(this).css('min-height',height );
    })

     $('#home').find('.center-content').height(height);

    $(window).resize( function(){
        var height = $(window).height();
        $('.content').each(function () {
            $(this).css('min-height',height );
        })
    });


    $(window).scroll(function () {
        /*
        var scrollPos = $(this).scrollTop(),
            divTarget = "",
            newTarget = whatIsBlock(scrollPos),
            nextTarget = $('#'+newTarget).next(),
            scrolltop;


        if (divTarget != newTarget) {
            divTarget = newTarget;
            $('.menu').find('a').not('.' + divTarget).removeClass('active');
            $('.' + divTarget).addClass('active');
        };*/
/*
        scrolltop =scrollPos%height;
         $('#' + divTarget).find('.content-inner').css({
                opacity:1 - (scrolltop/height)
         })*/





/*
        nextTarget.find('.content-inner').css({
            top: -$(nextTarget).offset().top + scrollPos

        })*/

    })

    function whatIsBlock(scrolltop) {
        var eventBlock = $('#events').offset().top,
            peopleBlock = $('#people').offset().top,
            commentBlock = $('#comments').offset().top;

        if (scrolltop >= 0 && scrolltop < eventBlock) {
            return "home";
        }

        if (scrolltop >= eventBlock && scrolltop < peopleBlock) {
            return "events";
        }

        if (scrolltop >= peopleBlock && scrolltop < commentBlock) {
            return "people";
        }

        return "comments";
    }

    $('.drops-items').css('display','none');
    $('.datepicker').datepicker();
    $('.advanced').css('display','none');


    /*advanced search*/
    $('#showActivity').click( function(){
        $('.activity').slideDown();
        return false;
    })
    $('#closeActivity').click( function(){
        $('.activity').slideUp();
        return false;
    })
    $('#showActivity1').click( function(){
        $('.activity1').slideDown();
        return false;
    })
    $('#closeActivity1').click( function(){
        $('.activity1').slideUp();
        return false;
    })


});




