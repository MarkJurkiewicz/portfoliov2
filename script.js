var $document = $(document),
    windowHeight = $(window).height(),
    windowWidth = $(window).width();

$(document).scroll(function() {
    if ($document.scrollTop() >= (windowHeight * 0.5)) {
        // user scrolled 50 pixels or more;
        // do stuff
        $(".navi_fade").fadeIn(700);
    }
    else {
        $(".navi_fade").fadeOut(300);
    }
});
function email(s) {
    var mail = "mailto:" + s + "@gmail.com";
    window.location = mail;
}

$(window).load(function() {
    $('h1').fadeIn(900);
    $('.about').fadeIn(5000);
    $(".scroll").click(function(event){
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1200);

        $('.smooth').on('click', function() {
            $.smoothScroll({
                scrollElement: $('body'),
                scrollTarget: '#' + this.id
            });

            return false;
        });
    });
});