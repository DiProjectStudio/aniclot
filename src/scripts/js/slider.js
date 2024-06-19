import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const heroSlider = new Swiper('.hero .swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,

    pagination: {
        el: '.hero .swiper-pagination',
        clickable: true
    },

    navigation: {
        nextEl: '.hero .swiper-btn-next',
        prevEl: '.hero .swiper-btn-prev'
    }
});

const slider = document.querySelectorAll('.slider');

slider.forEach((container) => {
    new Swiper(container.querySelector('.swiper'), {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,

        pagination: {
            el: container.querySelector('.swiper-pagination'),
            clickable: true
        },

        navigation: {
            nextEl: container.querySelector('.swiper-btn-next'),
            prevEl: container.querySelector('.swiper-btn-prev')
        },

        breakpoints: {
            744: {
                slidesPerView: 2
            },

            1200: {
                slidesPerView: 3,
                spaceBetween: 20
            },

            1440: {
                slidesPerView: 4,
                spaceBetween: 20
            }
        }
    });
});
