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
            button	: ".gal_prev"
        },
        next	: {
            button	: ".gal_next"
        }
    });
	







});




