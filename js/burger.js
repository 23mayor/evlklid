$(document).ready(function() {
    $('.menuToggle').click(function() {
        $(this).toggleClass('active');
        $('.header-list').slideToggle(300)
    })
})