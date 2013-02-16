/* Author:

*/

$(document).ready(function(){
	
	 $("#slides").slides({
	    	next:'next',
	    	prev:'prev',
	    	play: 6000
	    	});
	    	
	   $("#slides-site").slides({
	    	next:'next-slide',
	    	prev:'prev-slide',
	    	generateNextPrev: true,
	    	effect: 'fade',
	    	play: 10000
	    	
	    	});

	$(".fancy").fancybox({
			'titlePosition'  : 'inside'
			});

	$('.service-nav a').click( function(){
		var link=$(this).attr('href');
		$('.description > div').not(link).hide();
		$(link).fadeIn(400);
		
		$('.service-nav a').not(this).removeClass('cur');
		$(this).addClass('cur');		
		return false;
		
	});
	
	$('.menu a, .dop-nav a, a.up,.navigat').click(function(){
		var link=$(this).attr('href');		
		$('html,body').animate({'scrollTop': $(link).offset().top }, 400);
		
		if ( ($(this).attr('rel'))){
			var link2=$(this).attr('rel');
			$('.description > div').not(link2).hide();
			$('#'+link2).fadeIn(400);
			$('.service-nav a').removeClass('cur');
			$('.service-nav a[href^=#'+link2+']').addClass('cur');
		};
		
		return false;
	});
	
 	$('.concult').click( function(){
 		$('.modal').fadeIn(300, function(){
 			$('#window').fadeIn(400);
 		});
 		return false;
 	});
 	
 	$('.close-window').click(function(){
 		$('#window').fadeOut(300, function(){
 			$('.modal').fadeOut(300);
 		});
 		return false;
 	});
	
	
	
	$(window).scroll( function(){
		
		if ( $(window).scrollTop()>100) {
			$('a.up').fadeIn(300);}
		else {
			$('a.up').fadeOut(300);}
		});
	










});























