
/*----------------------------Owl carosel------------------------------------*/
$(document).ready(function () {
    var owl = $('.slider-active');
    owl.owlCarousel({
        items:5,
        loop:true,
        nav:true,
        dots: false,
        
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        nav    : true,
        smartSpeed :900,
        navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[3000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })
    owl.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY>0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });
    
});


