/* Author:

*/

$(document).ready(function(){
	
	 $("#slides").slides({
	    	next:'next',
	    	prev:'prev',
	    	play: 6000,
	    	pagination: true,
	    	effect: 'fade',
	    	generateNextPrev: true
	    	});

	$(".fancy").fancybox({
			'titlePosition'  : 'inside'
			});
			
	$('#accord span.title').click( function(){
		if ($(this).hasClass('showing')) return false;
		$('#accord span.title').not(this).removeClass('showing').closest('.accord-item')
				.animate({'height':'24px'},300)
				.find('.accord-desc').fadeOut(50);		
			
			$(this).addClass('showing').closest('.accord-item')
					.animate({'height':'340px'},300)
					.find('.accord-desc').fadeIn(800);
			return false;	
	});
	$('#accord span.title.showing').closest('.accord-item').animate({'height':'340px'},300)
			.find('.accord-desc').fadeIn();
	
	
	$('.coda-nav  li>a').click( function(){
		if ($(this).hasClass('current')) return false;
		$('.coda-content').empty();
		$('.coda-nav  li>a').not(this).removeClass('current');
		 $(this).next('.coda-inner').children().clone().prependTo('.coda-content');
		$(this).addClass('current');
		return false;
	});

	







});























