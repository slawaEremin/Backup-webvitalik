$(document).ready(function(){

    $('div.hover').hover(
    function(){
        var window = $(this).attr('id'),
            $window = $(''+$(this).attr('id')),
           offset = $(this).position().left ;

        if ($window.hasClass('center')){
            offset = $(this).position().left - 70;
        }

        if ($window.hasClass('right')){
            offset = $(this).position().left - 180;
        }

        $(''+window).css({
            'left':offset,
            'top':$(this).position().top + 103
        }).stop(true,true).fadeIn(200);
    },
    function(){
        var window = $(this).attr('id');
        $(''+window).fadeOut();
    });




})