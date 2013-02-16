/* Author:

*/

$(document).ready(function(){	
	$(".menu li").hover(
		function(){$(this).addClass('selected').find('ul').fadeIn(50)},
		function(){$(this).removeClass('selected').find('ul').fadeOut(50);});
/*

	$(".fancy").fancybox({
			'titlePosition'  : 'inside'
			});
*/
});























