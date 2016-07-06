$(document).ready(function(){
    $('.ryu').mouseenter(function(){
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    })
    .mouseleave(function() {
        $('.ryu-still').show();
        $('.ryu-ready').hide();
    });

    $('.ryu-hulk').mouseenter(function(){
        $('.ryu-hulk-still').hide();
        $('.ryu-hulk-ready').show();
    })
    .mouseleave(function() {
        $('.ryu-hulk-still').show();
        $('.ryu-hulk-ready').hide();
    });

    $('.ryu').mousedown(function(){
        playHadouken();
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate(
            {'left': '1020px'},
            500,
            function(){
                $(this).hide();
                $(this).css('left', '520px');
            });
    })

    .mouseup(function(){
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
    });
 
    $('.ryu-hulk').mousedown(function(){
        playHadouken();
        $('.ryu-hulk-ready').hide();
        $('.ryu-hulk-throwing').show();
        $('.hadouken-flipped').finish().show().animate(
            {'right': '1020px'},
            500,
            function(){
                $(this).hide();
                $(this).css('right', '520px');
            });
    })

    .mouseup(function(){
        $('.ryu-hulk-throwing').hide();
        $('.ryu-hulk-ready').show();
    });

    

    $('body').keydown(function(event){
    	if ( event.which == 88 ) {
    	   $('.ryu-ready, .ryu-hulk-ready').hide();
    	   $('.ryu-still, .ryu-hulk-still').hide();
    	   $('.ryu-cool, .ryu-hulk-cool').show();
    	}
    })
    .keyup(function(){
    	$('.ryu-cool, .ryu-hulk-cool').hide();
    	$('.ryu-still, .ryu-hulk-still').show();
    });

});

function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}