/* Author:

*/

$(document).ready(function(){
	
	 $("#slides").slides({
	    	next:'next',
	    	prev:'prev',
	    	play: 6000,
	    	pagination: true,
            generateNextPrev: false,
             generatePagination: true
	    	});

	$(".fancy").fancybox({
			'titlePosition'  : 'inside'
			});

    $("#foo2").carouFredSel({
        circular: true,
        infinite: false,
        auto 	: false,
        scroll	: {
            items	: 1,
            pauseOnHover: true
        },
        prev	: {
            button	: "#foo2_prev"
        },
        next	: {
            button	: "#foo2_next"
        }
    });
	







});























