$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        center: true,
        loop:false,
        margin:10,
        autoWidth:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            },
            1300:{
                items:2
            },
            1900:{
                items:3
            }
        }
    });
});