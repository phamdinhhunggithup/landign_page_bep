$(function () {
    // Banner 
    carousel(".ldp-banner-wp .nb-slider-carousel",1);
    carousel(".ldp-client-wp .client-carousel-slider",1);
    function carousel(carouselName,mainItem)
    {
        let carousel = $(carouselName)
        $(carousel).owlCarousel({
            loop:false,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:2
                },
                768 : {
                    items:3
                },
                1000:{
                    items:mainItem - 1
                },
                1200 : {
                    items:mainItem
                }
            }
        })
    }
});