import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import 'swiper/css';
// import 'swiper/css/pagination';

//Открыть меню Офисы Softline
export function openOfficesMenu() {
    const menuBtn = document.querySelector('#menu-btn');
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('offices__btn--close');
        const bgOffices = document.querySelector('.offices__bg');
        bgOffices.classList.toggle('offices__bg--white');
        bgOffices.classList.toggle('anim');

        const menuTop = document.querySelector('.offices__top');
        menuTop.classList.toggle('index-1000');

        const menuBlock = document.querySelector('.offices__menu');
        menuBlock.classList.toggle('index-1000');
        menuBlock.classList.toggle('anim');

        const mediaQuery = window.matchMedia('(max-width: 320px)');
        if (mediaQuery.matches) {
            const details = document.querySelectorAll('.regions');
            details.forEach((region) => {
                region.open = false;
            })
        }
    })
};

//Отображение точек на карте 
export function showPointsOnMap() {
    const regionPointList = document.querySelectorAll('input[type="radio"][name="regions"]');
    
    regionPointList.forEach(radio => {
        radio.addEventListener('change', () => {
            const allPoint = document.querySelector('#all').children;
            for (const point of allPoint) {
                if (point.classList.contains('none')) point.classList.remove('none')
                
                if (radio.value !== point.id) point.classList.add('none');

                if (radio.value === 'all') point.classList.remove('none');
            }
        })
    })
}

//hover карточки Направления бизнеса
export function showDetails() {
    const detailsArticle = document.querySelectorAll('.article');
    detailsArticle.forEach(details => {
        details.addEventListener('mouseenter', (e) => {
            if (e.target === details) {
                details.children[0].open = true;
            }
            
        });
        details.addEventListener('mouseleave', (e) => {
            if (e.target === details) {
                details.children[0].open = false;
            }
        })
    })
}

//Слайдер
export function slider() {
    const swiper = new Swiper('.swiper', {
        modules: [Navigation, Pagination],
        direction: 'horizontal',
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            bulletClass: 'swiper-pagination-bullet corporate__point',
            bulletActiveClass: 'swiper-pagination-bullet-active corporate__point--active',
        },
        breakpoints: {
            slidesPerView: 1,
        }
    })
}