$(document).ready(function() {
    // Smooth scroll
    $('.scrollLink').on('click', function() {
        var page = $(this).attr('href');
        var speed = 900;
        $('html, body').animate({
            scrollTop: ($(page).offset().top - $('.header').outerHeight() - parseInt($(page).css('marginTop')))
        }, speed);
        return false;
    });
});