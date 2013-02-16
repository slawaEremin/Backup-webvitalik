/* Author:

*/

$(document).ready(function(){
	
	 $("#slides").slides({
	    	next:'next',
	    	prev:'prev',
	    	play: 6000,
	    	pagination: true,
            generateNextPrev: false

	    	});
    $('li','.menu').hover(
        function(){
            $(this).find('a').addClass('active').end()
                .find('.menu-items').stop(true,true).fadeIn(200) ;
        },
        function(){
            $(this).find('a').removeClass('active').end()
                .find('.menu-items').stop(true,true).fadeOut(200 );
        }) ;

    $('#basket1').hover(
        function(){
            $(this).find('#basket-list').addClass('active').end()
                .find('.basket-list').stop(true, true).fadeIn(100, function(){
                    $(this).addClass('show');
                });
        },
        function(){
            $(this).find('#basket-list').removeClass('active').end()
                .find('.basket-list').stop(true, true).fadeOut(100, function(){
                    $(this).removeClass('show');
                });
        }
    ) ;

    $('.properties tr:even').addClass('grey');
    $('.properties tr').find('td:first').addClass('first-cell') ;

    /*tabs*/
    $('a','.nav-tabs').click( function(){
        var targets=$(this).attr('href');
        var link=$(this);
        $('a','.nav-tabs').not(link).removeClass('active')
            .closest('.nav-tabs').find(link).addClass('active');
        $('.tab-content').not(''+targets).css('display','none')
            .closest('.tabs').find(''+targets).css('display','block');
       return false;
    });



    $("#list").carouFredSel({
        circular: true,
        infinite: false,
        auto 	: false,
        items   :{
            visible: 5
        } ,
        scroll	: {
            items	: 1,
            pauseOnHover: true
        },
        prev	: {
            button	: "#foo2_prev",
            key		: "left"
        },
        next	: {
            button	: "#foo2_next",
            key		: "right"
        }

});

        $("#news").carouFredSel({
            circular: true,
            infinite: false,
            auto 	: false,
            items   :{
                visible: 5
            } ,
            scroll	: {
                items	: 1,
                pauseOnHover: true
            },
            prev	: {
                button	: "#foo1_prev",
                key		: "left"
            },
            next	: {
                button	: "#foo1_next",
                key		: "right"
            }
        });

    $('.tab-content').not(':first').css('display','none');

    /*gallery*/
    var galleries = $('.ad-gallery').adGallery();










});























