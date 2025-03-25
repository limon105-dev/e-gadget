$(document).ready(function () {
    'use strict';

    //..navbar mobile-menu js start..//
    $(window).on('scroll', function () {
        var scrolling = $(this).scrollTop()
        if (scrolling > 10) {
            $('.navbar-wrapper-main').addClass('nav-fixed')
        } else {
            $('.navbar-wrapper-main').removeClass('nav-fixed')
        }

    })

    $(".ham-menu").click(function (event) {
        event.stopPropagation();
        $(".mobile-menu-wrapper").toggleClass("active");
        $(".ham-menu").toggleClass("active");
        $("body").toggleClass("active");
    });

    $('.mobile-drop-down-menu').on('click', function () {
        $(this).children(".mobile-drop-down-menu-wrapper").slideToggle();
        $(this).children(".drop-down-menu-btn").toggleClass('active');
    });
    //..navbar mobile-menu js end..//

    //..search bar js start..//
    $(".search-open").click(function (event) {
        event.stopPropagation();
        $(".search-bar").addClass('active1');
        $("body").toggleClass('active');
    });

    $(".search-bar-close").click(function (event) {
        event.stopPropagation();
        $(".search-bar").removeClass('active1');
        $("body").toggleClass('active');
    });
    //..search bar js end..//

    // --shop-filer tab js start--
    $('.shop-filer-nav:first-child').addClass('active');
    $('.shop-content-items').hide();
    $('.shop-content-items:first-child').show();

    $('.shop-filer-nav').click(function () {
        $('.shop-filer-nav').removeClass('active');
        $(this).addClass('active');
        $('.shop-content-items').hide();

        var activeTab = $(this).find('a').attr('href');
        $(activeTab).fadeIn();
        return false;
    });
    // --shop-filer tab js end--

    	// **..filter-accordion js start..**
	$('.filter-accordion-toggle-btn').on('click', function () {
		$(this).next().slideToggle();
		$(this).parent().toggleClass('active');
	});
	// **..filter-accordion js end..**

	// **..faq-accordion js start..**
	$(".faq-accordion-item-content").slideUp();
	$(".faq-accordion-item:first-child .faq-accordion-item-content").slideDown();
	$('.accordion-toggle-btn').on('click', function () {
		$(this).next().slideToggle();
		$(this).parent().toggleClass('active');
		$(this).parent().siblings().removeClass('active').find('.faq-accordion-item-content').slideUp();
	});
	// **..faq-accordion js end..**

    	// filter sidebar js start--
	$(".filter-open-btn").click(function (event) {
		event.stopPropagation();
		$(".filter-inner").addClass('active');
        $("body").toggleClass("active");
	});

	$(".filter-close-btn").click(function (event) {
		event.stopPropagation();
		$(".filter-inner").removeClass('active');
        $("body").removeClass("active");
	});
	// filter sidebar js end--

    	// product quantity js start--//
	$(".quantity-increase").click(function () {
		$(".quantity-total").val(parseInt($(".quantity-total").val()) + 1);
	});

	$(".quantity-decrease").click(function () {
		var currentValue = parseInt($(".quantity-total").val());
		if (currentValue > 1) {
			$(".quantity-total").val(currentValue - 1);
		}
	});
	// product quantity js end--//

    // --tab js start--
	$('.tab-nav-item:first-child').addClass('active');
	$('.desktop-tab-content-item').hide();
	$('.desktop-tab-content-item:first').show();

	$('.desktop-tabs-nav-item-link').click(function () {
		$('.tab-nav-item').removeClass('active');
		$(this).parent().addClass('active');
		$('.desktop-tab-content-item').hide();

		var activeTab = $(this).attr('href');
		$(activeTab).fadeIn();
		return false;
	});
	// --tab js end--
})

// top-bar slider js start--
var swiper = new Swiper(".top-bar-slider", {
    spaceBetween: 20,
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    }
});
// top-bar slider js end--

// banner slider js start--
var swiper = new Swiper(".banner-slider", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        1: {
            slidesPerView: 1,
        },
        // when window width is >= 480px
        576: {
            slidesPerView: 1,
        },
        // when window width is >= 992px
        992: {
            slidesPerView: 1,
        }
    }
});
// banner slider js end--

// brand slider js start--
var swiper = new Swiper(".brand-slider", {
    spaceBetween: 30,
    slidesPerView: 6,
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        1: {
            slidesPerView: 4,
            spaceBetween: 10
        },
        // when window width is >= 480px
        576: {
            slidesPerView: 5,
        },
        // when window width is >= 992px
        992: {
            slidesPerView: 6,
        }
    }
});
// brand slider js end--

// testimonial slider js start--
var swiper = new Swiper(".testimonial-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    speed: 500,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        1: {
            slidesPerView: 1,
        },
        // when window width is >= 576px
        576: {
            slidesPerView: 2,
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 3,
        },
        // when window width is >= 993px
        993: {
            slidesPerView: 3,
        }
    }
});
// testimonial slider js end--

// **..product-single-slider js start..**
var swiper = new Swiper(".product-swiper", {
	loop: true,
	spaceBetween: 15,
	slidesPerView: 4,
	grabCursor: true,
});
var swiper2 = new Swiper(".product-swiper-2", {
	loop: true,
	slidesPerView: 1,
	grabCursor: true,
	spaceBetween: 10,
	thumbs: {
		swiper: swiper,
	},
	breakpoints: {
		// when window width is >= 320px
		1: {
			slidesPerView: 1,
		},
		// when window width is >= 576px
		576: {
			slidesPerView: 1,
		},
		// when window width is >= 768px
		768: {
			slidesPerView: 1,
		},
		// when window width is >= 993px
		993: {
			slidesPerView: 1,
		}
	}
});
// **..product-single-slider js end..**

// category slider js start--
var swiper = new Swiper(".category-slider", {
	slidesPerView: 6,
	spaceBetween: 30,
	grabCursor: true,
	loop: true,
	breakpoints: {
		// when window width is >= 320px
		1: {
			slidesPerView: 2.5,
			spaceBetween: 20,
		},
		// when window width is >= 576px
		576: {
			slidesPerView: 3.5,
		},
		// when window width is >= 768px
		768: {
			slidesPerView: 4.5,
		},
		// when window width is >= 993px
		993: {
			slidesPerView: 6,
		}
	}
});
// category slider js end--

// swiper slider js start--
// var swiper = new Swiper(".printer-swiper-slider", {
//     spaceBetween: 30,
//     slidesPerView: 3,
//     grabCursor: true,
//     loop: true,
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     breakpoints: {
//         // when window width is >= 320px
//         1: {
//             slidesPerView: 1,
//         },
//         // when window width is >= 480px
//         576: {
//             slidesPerView: 2,
//         },
//         // when window width is >= 992px
//         992: {
//             slidesPerView: 3,
//         }
//     }
// });
// swiper slider js end--

// content animation--
new WOW().init();