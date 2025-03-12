import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Swiper from "swiper";
import {Navigation, Pagination, Autoplay} from 'swiper/modules';


document.addEventListener("DOMContentLoaded", function () {
    let lastScroll = 0;

    const header = document.querySelector('.header');
    const body = document.querySelector('body');
    const headerBurger = document.querySelector('.header__burger');
    const headerNavigation = document.querySelector('.header__nav');
    const headerNavigationBack = document.querySelector('.header__nav-back');
    const headerNavigationClose = document.querySelector('.header__nav-close');
    const headerNavigationLink = document.querySelectorAll('.header__nav-link');



    function toggleMenu() {
        headerNavigation.classList.toggle('is-open')
        body.classList.toggle('no-scroll')
    }

    headerBurger?.addEventListener('click', () => {
        toggleMenu()
    })

    headerNavigationBack?.addEventListener('click', () => {
        toggleMenu()
    })

    headerNavigationClose?.addEventListener('click', () => {
        toggleMenu()
    })

    headerNavigationLink.forEach((link) => {
        link?.addEventListener('click', (e) => {
            e.preventDefault();
            const currentTarget = e.currentTarget;
            const nextElement = currentTarget.nextElementSibling;

            if (!nextElement) {
                window.location.href = currentTarget.href;
                return;
            }

            nextElement.classList.toggle('is-open');
            currentTarget.classList.toggle('is-open');
        })
    })

    function updateHeaderClass() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > 100) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }

        lastScroll = currentScroll;
    }


    if (document.querySelectorAll('.hero__slider').length > 0) {
        const heroSlider = new Swiper('.hero__slider', {
            modules: [Navigation, Pagination, Autoplay],
            slidesPerView: 1,
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".hero__slider-pagination",
            },
            navigation: {
                nextEl: '.hero__slider-button--next',
                prevEl: '.hero__slider-button--prev',
            },
        });
    }

    if (document.querySelectorAll('.products__slider').length > 0) {
        const productsSlider = new Swiper('.products__slider', {
            modules: [Navigation, Pagination, Autoplay],
            slidesPerView: 1,
            spaceBetween: 10,
            navigation: {
                nextEl: '.products__slider-button--next',
                prevEl: '.products__slider-button--prev',
            },
            pagination: {
                el: ".products__slider-pagination",
            },
            breakpoints : {
                680: {
                    slidesPerView: 2,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1440: {
                    slidesPerView: 4,
                }
            }
        });
    }


    updateHeaderClass();

    window.addEventListener('scroll', updateHeaderClass);
});