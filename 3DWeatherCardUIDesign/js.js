$(document).ready(function () {
    $('.more').click(function () {
        $('.back').addClass('active');
        $('.front').removeClass('active');
    });
    $('.go-back').click(function () {
        $('.back').removeClass('active');
        $('.front').addClass('active');
        
    });
})