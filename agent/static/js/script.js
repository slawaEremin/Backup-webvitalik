/* Author:

*/

$(document).ready(function(){
	
	 $("#slides").slides({
	    	next:'next',
	    	prev:'prev',
	    	play: 6000,
	    	pagination: true,
	    	effect:'fade'
	    	});

	$(".fancy").fancybox({
			'titlePosition'  : 'inside'
			});
			
	/*header*/
	$('a','.b-navContact').bind('click', function(){ 
		var link=$(this).attr('href');
		$('a','.b-navContact').removeClass('b-contactActive');
		$(this).addClass('b-contactActive');
				
		$('div','.b-contact').not(link).fadeOut(0, function(){
			$(link).fadeIn(200);
		});
		return false;				
	});
	
	/*tabs news articles*/
	$('a','.b-partionNav').bind('click', function(){ 
		var link=$(this).attr('href');
		$('a','.b-partionNav').removeClass('b-activeTab');
		$(this).addClass('b-activeTab');
				
		$('section','.b-partion').not(link).fadeOut(0, function(){
			$(link).fadeIn(200);
		});
		return false;				
	});
		

	







});























