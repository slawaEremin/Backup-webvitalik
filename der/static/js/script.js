/* Author:

*/

$(document).ready(function(){

	$('.documents .link').click( function(){
		if (!$(this).hasClass('active')){
			$('.documents .link').removeClass('active');
			$(this).addClass('active');
			var link=$(this).attr('href');
			$('.documents .law').hide();
			$(this).closest('.documents').find(link).fadeIn(400);
			return false;
		}
	});

	 $("#slides").slides({
	 		preload: true,
	    	next:'next',
	    	prev:'prev',
	    	play: 4000,
	    	hoverPause: true,
	    	pause: 4000

	    	});

	$(".fancy").fancybox({
			'titlePosition'  : 'inside'
			});









});























