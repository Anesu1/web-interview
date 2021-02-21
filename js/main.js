AOS.init();

$(window).on('scroll', function(){
if($(window).scrollTop()){
$('header').addClass('bgColor')
}
else{
$('header').removeClass('bgColor')
}
})



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})
