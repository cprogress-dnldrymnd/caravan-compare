jQuery(document).ready(function () {
    setTimeout(function () {
        swiper_sliders_new();
    }, 1000);
});


function swiper_sliders_new() {

    var swiper_logo_grid = new Swiper('.swiper-logo-grid', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,

        pagination: {
            el: '.swiper-pagination',
        },
    });

    var swiper_listing_v2 = new Swiper(".swiper-listing-v2", {
        autoHeight: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },

            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },

            992: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
           

        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        pagination: {
            el: '.swiper-pagination',
        },
    });
}