$(document).ready(function(){


    $('.js-fluid').live('mouseenter', function(){
        var $this = $(this);

        if ( $this.data('id')) {
            $this.find('.find-buttom').css('display','block')
        };
        $this.find('.inner').css('display','block');
    });

    $('.js-fluid').live('mouseleave', function(){
        $(this).find('.find-buttom').css('display','none')
            .end().find('.inner').css('display','none');
    });

    $('.js-showFlash, .find-buttom').on('click', function(){
        var $flash = $('.js-flash'),
            $preview = $('.js-preview'),
            $this = $(this);

        if (!$this.data('id')) {
            isReadyId = $this.closest('.js-fluid').data('id');
            if (isReadyState){
                sendId();
            }

        }

        if ($this.hasClass('js-showFlash')) {
            isReadyId = '000';
            if (isReadyState){
                sendId();
            }
        }

        $preview.fadeOut(function () {
            $flash.css('position', 'static');
            $('.wrap, .content, .content-flash').css('height','100%');
        });

        $('.show-people').css('display','none');
        return false;
    });

    /*responsive*/
    resize($(window));

    $(window).resize( function(){
        resize($(this));
    });

    function column_number($this){
        var column;

        if ($this.width() < 600) {
            column = 3;
        }
        if ($this.width() > 601 && $this.width() < 1010 ) {
            column = 4;
        }
        if ($this.width() > 1011 && $this.width() < 1129 ) {
            column = 5;
        }
        if ($this.width() > 1130 && $this.width() < 1380) {
            column = 6;
        }
        if ($this.width() > 1381 && $this.width() < 1580) {
            column = 8;
        }
        if ($this.width() > 1581) {
            column = 10;
        }
        return column;
    }

    function resize($window) {
        var $this = $window,
            jsFluid = $('.js-fluid'),
            count = jsFluid.length,
            over,
            i, iMax,
            column;

        column = column_number( $this );

        if (count < column*2) return;

        if (count % column === 0) {
            jsFluid.css('display', 'block');
        } else {
            over = count % column;
            for (i = (count - over), iMax = count; i < iMax; i += 1) {
                jsFluid.eq(i).css('display', 'none');
            }
        }
    };

    /*ajax*/
    $('.show-people').on('click', function(){
        $.post('more.php',{
            list: $('#list_user').text()
        }, function(data,status){
            if (status == 'success'){
                $('.js-preview').append(data);
                resize($(window));
            }
        });
        return false;
    });

});

/*externak interface*/
var isReadyState = false,
    isReadyId = null;

function vcrRedy(){
    isReadyState = true;

    if (isReadyId !== null){
        sendId();
    }
}

function getFlash(idFlash) {
    if (navigator.appName.indexOf("Microsoft") != -1) {
        return window[idFlash];
    } else {
        return document[idFlash];
    }
}

function sendId() {
    getFlash("flashcontent").vcrChosenId(isReadyId);
    isReadyId = null;
}









