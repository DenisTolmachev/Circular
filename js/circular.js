$(document).ready(function() {
    $('.navbar-toggler').on('click', function(){
        if($(this).hasClass('collapsed')){
            $('.navbar').addClass('mobile_menu_bg');
        }else{
            $('.navbar').removeClass('mobile_menu_bg');
        }
    });
});
