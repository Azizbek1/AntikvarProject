$(window).ready(()=>{
   


    // OWl Carouse;
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout: 5000,
        responsive:{
            320: {
                items: 1
            },
            576: {
                items: 2
            },
            768:{
                items: 2
            },
            992:{
                items: 2,
                nav: false
            },
            1200:{
                items:1
            }
        }
    })

    
});
