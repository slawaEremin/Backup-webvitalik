(function($){
    $.sliderBig = function(el, radius, options){
        var base = this;

        // Access to jQuery and DOM versions of element
        base.$el = $(el);
        base.el = el;

        // Add a reverse reference to the DOM object
        base.$el.data("sliderBig", base);

        base.init = function(){
            base.$el.find('.nav-item:first').addClass('current');
            base.$el.find('.item-n').css('display', 'none').eq(0).show();




        };

        var autoAnimateInterval = 8000,
            intervalId;

        base.$el.find('.nav-item a').click(function() {
            var link=$(this).closest('.nav-item')
            clearInterval(intervalId);
            animateSlider(link.index());
            initsliderTimer();
            return false;
        });
        initsliderTimer();

        function animateSlider(index) {

            var activeTab=base.$el.find('.item-n').eq(index);
            base.$el.find('.item-n').not(activeTab).css('display','none');
                activeTab.fadeIn();


            base.$el.find('.nav-item').removeClass('current');
            base.$el.find('.nav-item').eq(index).addClass('current');
        }

        function nextSlide() {
            var nextIndex = base.$el.find('.nav-item.current').index() + 1;
            if(nextIndex >= base.$el.find('.nav-item').length)
                nextIndex = 0;
            return nextIndex;
        }

        function prevSlide() {
            var prevIndex = base.$el.find('.nav-item.current').index() - 1;
            if(prevIndex < 0)
                prevIndex = base.$el.find('.nav-item').length - 1;
            return prevIndex;
        }

        function initsliderTimer() {
            clearInterval(intervalId);
            intervalId = setInterval(function() {
                animateSlider(nextSlide());
            }, autoAnimateInterval);
        }
        base.init();
    };

    $.fn.sliderBig = function(radius, options){
        return this.each(function(){
            (new $.sliderBig(this, radius, options));

        });
    };

})(jQuery);