/* Author:

*/

$(document).ready(function(){
	
	 $("#slides").slides({
	    	next:'next',
	    	prev:'prev',
	    	play: 6000,
	    	pagination: false,
            effect:'fade',
            generateNextPrev: true,
            generatePagination: false
	    	});

    $(".slides_foot").carouFredSel({
        circular: true,
        infinite: false,
        auto 	: true,
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


	$(".fancy").fancybox({
			'titlePosition'  : 'inside'
			});

    $('a','.nav-tabs').click( function(){
        if ($(this).hasClass('active')) return false;
        var link=$(this);
        var tab=link.attr('href');

        $('a','.nav-tabs').not(link).removeClass('active')
                .closest('.nav-tabs').find(link).addClass('active');

        $('.content','.tabs').not(''+tab).css('display','none')
                .siblings(''+tab).css('display','block')

        return false;
    }) ;

    $('.search-button').click(function(){
        $('.search').fadeToggle();
        return false;
    }) ;

    $.datepicker.setDefaults($.datepicker.regional['ru']);
    var dates = $( "#datepicker1,#datepicker2 " ).datepicker({
        numberOfMonths: 1
    });



});























