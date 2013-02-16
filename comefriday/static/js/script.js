/* Author:

*/
function clearText(field){
    if (field.defaultValue == field.value) field.value = '';
}


/*jquery*/
$(document).ready(function(){
    $('form').jqTransform({imgPath:'/images/form_fields/'});

    $( ".city_box" ).autocomplete({
        source: function(request, response) {
            $.getJSON("ajax_autocomplete.php", { term: request.term, lookingfor: 'city' },
                response);
        },
        minLength: 3,


        select: function( event, ui ) {
            chosen_value = ui.item.id;
            section = $('.city_box').val();
            $('#city_id').val(chosen_value);

        }
    });

    $('#signin').click( function(){
        $('#overflow').fadeIn(100, function(){
            $('#register').animate({'top':50},400);
        })
    })

    $('#overflow').click( function(){
        $('#register').animate({'top':-800},400);
        $('#overflow').fadeOut();

    });

    $('span','.sex').click( function(){
        var self=$(this);
        self.siblings('span').fadeIn( function(){
                 $(this).removeClass('active').show()
            })
            .end().addClass('active');
    })

    $('.hov-banner').hover(
        function(){
            var left=$(this).css('margin-left');
            var original=$(this);
            var hover=original.clone()
                    .addClass('banner-active').removeClass('hov-banner')
                    .css({
                        'margin-left':5,
                        'z-index':'15',
                        'left':0
                    })
                    .appendTo(original)
                    .fadeIn(200);

        },
        function(){
           $('.banner-active').remove();
        }
    )


});























