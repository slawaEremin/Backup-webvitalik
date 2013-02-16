

$(document).ready(function(){
	
	 $("#slides").slides({
	    	next:'next',
	    	prev:'prev',
	    	play: 6000,
	    	pagination: true,
	    	effect:'fade'
	    	});
	    	
	 $("#catalog").slides({
	    	next:'next',
	    	prev:'prev',
	    	play: 6000,
	    	pagination: true,	    	
	    	generateNextPrev: true,
	    	effect:'fade'	    	
	    	});

	$(".fancy").fancybox({
			'titlePosition'  : 'inside'
			});
			
	$('#tabs .nav a').click( function(){
		var self=$(this);
		var link=$(this).attr('href');
		$('#tabs .nav a').not(self).removeClass('active');
		$('#tabs>div').not(link).stop(true,true).fadeOut(200, function(){			
			self.addClass('active').closest('#tabs').find(link).fadeIn(200);
		});					
		return false;
	})
	
	$('#catalog li>a').click( function(){
		var self=$(this);
		$('.detail-catalog').stop().fadeOut(0,function(){
			$('h5','.detail-catalog').html($('span',self).html());
			$('.descr','.detail-catalog').html($(self).next('.description').html());
			$(this).fadeIn(300);
		});
		return false;
	});

	







});























