$(document).ready(function(){
	$('#table-show').hide();
	$('#show').click(function(){
		$('#table-show').toggle();
		return false;
	})





  currentPosition = 0;
  var slideWidth = 518;        //ширина слайда
  var slides = 'div.slider-item';     //класса для слайда
  var interval=5000;           //время отображения слайда
  var round=1;                 //1- по кругу, 2-вручную
  var show=2;				   //1 - всегда показывать стрелки 2- скрывать
  var leftcontrol='#prev-slider';     // селектор на левую стрелку
  var rightcontrol='#next-slider';    //селектор на правую стрелку
  var slideInner='#slider-inner';  //селектор на внутреений див
  var navigation='.control li a';     // класс для навигации
  var activeClass='active';    //класс активности для навигации




  var numberOfSlides = $(slides).length;
  $(slideInner).css('width', (slideWidth * numberOfSlides));
  if (show!=1) {$(leftcontrol).hide();}

   if (round==1) {
	  var autoAnimateInterval = interval, intervalId;
	  initsliderTimer()};

    $(rightcontrol).click( function() {
        clearInterval(intervalId);
        nextSlide();
        initsliderTimer();
        return false;
    });

    function nextSlide(){
    	currentPosition++;
		if (currentPosition==numberOfSlides){currentPosition=0;}
		animateSlider(currentPosition);
    }

    $(leftcontrol).click( function() {
        clearInterval(intervalId);
		prevSlide();
        initsliderTimer();
        return false;
    });

    function prevSlide () {
    	currentPosition--;
		if (currentPosition==0){currentPosition==numberOfSlides}
        animateSlider(currentPosition);
    }

    $(navigation).click( function() {
        clearInterval(intervalId);
        var item=$(this);
        $(navigation).each(function(i){
        	if ($(this).attr('id')==item.attr('id')) {
        		currentPosition=i;
        		}
        });


    animateSlider(currentPosition);
        initsliderTimer();
        return false;
    });

    function animateSlider(currentPosition) {
      if (show!=1) manageControls(currentPosition);
      $(slideInner).animate({
        'marginLeft' : slideWidth*(-currentPosition)
      });
       $(navigation).removeClass(activeClass);
       $(navigation).eq(currentPosition).addClass(activeClass);
      return false;
    };

    function manageControls(position){
	    if(position==0){ $(leftcontrol).hide() }
	    else{ $(leftcontrol).show() }
	    if(position==numberOfSlides-1){ $(rightcontrol).hide() }
	    else{ $(rightcontrol).show() }
    }

	function initsliderTimer() {
		if (round==1) {
        clearInterval(intervalId);
        intervalId = setInterval( function() {
           nextSlide();
        }, autoAnimateInterval);
    }
   }

/* menu*/
$('#nav .submenu .submenu').hide();

	$('#nav>li').hover(function(){
		$(this).find('.sub-show').eq(0).show();
		$(this).find('a.root-item').addClass('hover');

	}, function(){
		$(this).find('.sub-show').eq(0).hide();
		$(this).find('a.root-item').removeClass('hover');
	});
	

	$('#nav .submenu li').hover(function(){
		$(this).find('.sub-show').show();
		var i=1;
		$(this).find('a.parent').addClass('hover');

	}, function(){
		$(this).find('.sub-show').hide();
		$(this).find('a.parent').removeClass('hover');
	});









})