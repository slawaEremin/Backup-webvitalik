/* Author:

*/

$(document).ready(function(){
	$(".more").hover(function(){ $(this).find('ul').fadeIn()},
						function(){ $(this).find('ul').fadeOut();});

	$(".menu li").hover(
		function(){$(this).addClass('selected').find('ul').fadeIn()},
		function(){$(this).removeClass('selected').find('ul').fadeOut();});

	 $("#slides").slides({
	    	next:'next',
	    	prev:'prev',
	    	play: 6000,
	    	pagination: false
	    	});

	$(".fancy").fancybox({
			'titlePosition'  : 'inside'
			});

	$("#lofslidecontent45").lofJSidernews( { "interval":4000,
												"duration":1200
												 } );

});























