jQuery(document).ready(function () {
    templates();
    //fancybox();
    password_input();
    setTimeout(function () {
        swiper_sliders();
        header();
    }, 1000);

});
function password_input() {
    jQuery(document).on('click', ".password---hidden", function () {
        $input = jQuery(this).prev();
        $input.attr('type', 'text');
        jQuery(this).addClass('password---show').removeClass('password---hidden');
    });

    jQuery(document).on('click', ".password---show", function () {
        $input = jQuery(this).prev();
        $input.attr('type', 'password');
        jQuery(this).addClass('password---hidden').removeClass('password---show');
    });
}

function templates() {
    fetch('template-parts/--topbar.html') // Path to the HTML file you want to insert
        .then(response => response.text())
        .then(data => {
            document.getElementById('top-bar-insert').innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching the HTML file:', error);
            document.getElementById('top-bar-insert').innerHTML = '<p>Error loading content.</p>';
        });

    fetch('template-parts/--header.html') // Path to the HTML file you want to insert
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-insert').innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching the HTML file:', error);
            document.getElementById('header-insert').innerHTML = '<p>Error loading content.</p>';
        });

    fetch('template-parts/offcanvas/--offcanvas-menu.html') // Path to the HTML file you want to insert
        .then(response => response.text())
        .then(data => {
            document.getElementById('offcanvas-menu').innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching the HTML file:', error);
            document.getElementById('offcanvas-menu').innerHTML = '<p>Error loading content.</p>';
        });

    fetch('template-parts/--footer.html') // Path to the HTML file you want to insert
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-insert').innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching the HTML file:', error);
            document.getElementById('footer-insert').innerHTML = '<p>Error loading content.</p>';
        });
}

function header() {
    jQuery('.header').removeClass('overflow-hidden');
    $height = jQuery('#main-header').outerHeight();
    $top_bar = jQuery('.top-bar').outerHeight();
    if ($height != undefined) {
        jQuery('body').css('--header-height', $height + 'px');
    }
    if ($top_bar != undefined) {
        jQuery('body').css('--top-bar-height', $top_bar + 'px');
    }
}

function fancybox() {
    Fancybox.bind("[data-fancybox]", {
        // Your custom options
    });

    jQuery('.zoom').click(function (e) {
        jQuery(this).next().find('.swiper-slide-active a').addClass('sdsdss');
        jQuery(this).next().find('.swiper-slide-active a').trigger('click');
        e.preventDefault();
    });
}

function swiper_sliders() {


    if (window.innerWidth < 1400) {
        var swiper_icon_lists = new Swiper(".swiper-icons-lists", {
            slidesPerView: 'auto',
            breakpoints: {

                0: {
                    slidesPerView: 'auto',
                    spaceBetween: 5,
                },
                992: {
                    spaceBetween: 20,
                },

            },

        });

    }
    $key = 0;
    if (jQuery('.swiper-thumbnails').length > 0) {

        if (window.innerWidth > 991) {
            $height = jQuery('.swiper-gallery').outerHeight();

            jQuery('.swiper-thumbnails').css('height', $height + 'px');
            var swiper_thumb = new Swiper(".swiper-thumbnails", {
                direction: "vertical",
                spaceBetween: 10,
                slidesPerView: 'auto',
                freeMode: true,
                watchSlidesProgress: true,
            });
        } else {
            var swiper_thumb = new Swiper(".swiper-thumbnails", {
                spaceBetween: 5,
                slidesPerView: 4,
                freeMode: true,
                watchSlidesProgress: true,
            });
        }



        var swiper_gallery = new Swiper('.swiper-gallery', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 0,
            thumbs: {
                swiper: swiper_thumb,
            },
            navigation: {
                nextEl: '.swiper-gallery-next',
                prevEl: '.swiper-gallery-prev',
            },
            pagination: {
                el: '.swiper-gallery-pagination',
                type: "fraction",
            },
        });
        $key++;
    } else {
        jQuery('.swiper-gallery').each(function (index, element) {
            var $id = 'swiper' + $key;
            jQuery(this).attr('id', $id);
            jQuery(this).find('.swiper-button-next').attr('id', $id + '-next');
            jQuery(this).find('.swiper-button-prev').attr('id', $id + '-prev');
            jQuery(this).find('.swiper-pagination').attr('id', $id + '-pagination');

            var $id = new Swiper('#' + $id, {
                loop: true,
                slidesPerView: 1,
                spaceBetween: 0,
                navigation: {
                    nextEl: '#' + $id + '-next',
                    prevEl: '#' + $id + '-prev',
                },
                pagination: {
                    el: '#' + $id + '-pagination',
                    type: "fraction",
                },
            });
            $key++;
        });
    }

    var swiper = new Swiper(".swiper-hero", {
        slidesPerView: 1,

        pagination: {
            el: '.swiper-pagination',
        },
    });

    var swiper_listing = new Swiper(".swiper-listing", {

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

            1200: {
                slidesPerView: 4,
                spaceBetween: 22,
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

    var swiper_listing_related = new Swiper(".swiper-listing-related", {

        breakpoints: {
            0: {
                slidesPerView: 'auto',
                spaceBetween: 12,
                freeMode: true,
            },


            992: {
                slidesPerView: 2,
                spaceBetween: 20,
            },

        },
        pagination: {
            el: '.swiper-pagination',
        },
    });


    jQuery('.nav-tabs-swiper .swiper-slide').each(function (index, element) {
        $width = jQuery(this).find('.nav-link').outerWidth();
        jQuery(this).css('width', $width + 'px');
    });
    var swiper_nav_tabs = new Swiper('.nav-tabs-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 40,
        freeMode: true,
    });


    var swiper_gallery_slider = new Swiper('.swiper-gallery-slider', {
        slidesPerView: 1,
        spaceBetween: 0,

        pagination: {
            el: '.swiper-pagination',
        },
    });


    var swiper_logo_slider = new Swiper(".swiper-logo-slider", {
        spaceBetween: 20,
        speed: 5000,
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
            },

            576: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 5,
            },

            1200: {
                slidesPerView: 6,
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


    var swiper_grid_slider_1 = new Swiper(".swiper-grid-slider-js-1", {
        pagination: {
            el: '.swiper-pagination',
        },
        breakpoints: {
            0: {
                slidesPerView: 'auto',
                spaceBetween: 12,
                freeMode: true,
            },


            992: {
                slidesPerView: 2,
                spaceBetween: 20,
            },

            1200: {
                slidesPerView: 3,
                spaceBetween: 22,
            },

        },

    });
    var swiper_grid_slider_2 = new Swiper(".swiper-grid-slider-js-2", {
        freeMode: true,

        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },

            992: {
                slidesPerView: 'auto',
                spaceBetween: 20,
            },
        },

    });

    var swiper_testimonials = new Swiper(".swiper-testimonials", {
        freeMode: true,

        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 12,
            },

            992: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },

        pagination: {
            el: '.swiper-pagination',
        },

    });


    $key = 0;
    jQuery('.swiper-listing-grid-gallery').each(function (index, element) {
        var $id = 'swiper' + $key;
        jQuery(this).attr('id', $id);
        jQuery(this).find('.swiper-button-next').attr('id', $id + '-next');
        jQuery(this).find('.swiper-button-prev').attr('id', $id + '-prev');

        var $id = new Swiper('#' + $id, {
            slidesPerView: 1,
            navigation: {
                nextEl: '#' + $id + '-next',
                prevEl: '#' + $id + '-prev',
            },
        });
        $key++;
    });




    var swiper_dealer_reviews = new Swiper(".swiper-dealer-reviews", {
        freeMode: true,

        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 12,
            },

            992: {
                slidesPerView: 2,
                spaceBetween: 20,
            },

        },

        pagination: {
            el: '.swiper-pagination',
        },

    });

    if (window.innerWidth < 992) {
        jQuery('.swiper-on-mobile-js').addClass('swiper');
        jQuery('.swiper-on-mobile-js > div').addClass('swiper-wrapper').removeClass('row g-sm h-100');
        jQuery('.swiper-on-mobile-js > div > div').addClass('swiper-slide');

        var swiper_on_mobile = new Swiper(".swiper-on-mobile-js", {
            slidesPerView: 1,
            spaceBetween: 12,
            pagination: {
                el: '.swiper-pagination',
            },

        });
    }
}