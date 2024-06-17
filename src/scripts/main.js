// Import Plugins
import Inputmask from 'inputmask';
import $ from 'jquery';

// Import Scripts
import './js/map.js';
import './js/popup.js';
import './js/slider.js';

// INPUT MASK PHONE NUMBER
Inputmask({
    mask: '+7 (999) 999-99-99',
    showMaskOnHover: false,
    showMaskOnFocus: false,

    onBeforePaste: (pastedValue, opts) => {
        return pastedValue.replace(/^8/, '');
    }
}).mask('[phone-number]');

// INPUT MASK FOR NUMBERS
Inputmask({
    regex: '^[0-9]*$',
    allowMinus: false,
    showMaskOnHover: false,
    showMaskOnFocus: false,
    placeholder: ''
}).mask('[number-only]');

// INPUT MASK FOR CALENDAR
Inputmask({
    mask: '99-99-9999',
    allowMinus: false,
    showMaskOnHover: false,
    showMaskOnFocus: false
}).mask('[calendar]');

// HEADER
$(window).on('scroll', function () {
    if ($(window).scrollTop() > $('#header').height()) {
        $('#header').addClass('header-fixed');
    } else if ($(window).scrollTop() == 0) {
        $('#header').removeClass('header-fixed');
    }
});

if ($(window).scrollTop() > $('#header').height()) {
    $('#header').addClass('header-fixed');
}

// HEADER MENU
$(document).on('keyup', (e) => {
    if (e.key == 'Escape') {
        $('.header__nav').removeClass('mobile-menu');

        $('body').removeClass('overflow-hidden');
        $('#header').removeClass('bg-overlay');
    }
});

$('.header__menu').on('click', (e) => {
    if (!$(e.currentTarget).hasClass('active')) {
        $(e.currentTarget).addClass('active');
        $('.header__nav').addClass('mobile-menu');

        $('body').addClass('overflow-hidden');
        $('#header').addClass('bg-overlay');

        if (!$('.header__nav .header__logo').length) {
            $('.header__nav').append(
                $('.header__logo, .header__socials, .header__callback, .header__phone').clone()
            );
            $('.header__nav .header__callback').removeClass('btn--border-white');
            $('.header__nav .header__callback').addClass('btn--red');
        }
    } else {
        $(e.currentTarget).removeClass('active');
        $('.header__nav').removeClass('mobile-menu');

        $('body').removeClass('overflow-hidden');
        $('#header').removeClass('bg-overlay');
    }
});

$('#header').on('click', (e) => {
    if (
        !$(e.target).closest('.header__menu').length &&
        !$(e.target).closest('.header__nav').length
    ) {
        $('.header__menu').removeClass('active');
        $('.header__nav').removeClass('mobile-menu');

        $('body').removeClass('overflow-hidden');
        $('#header').removeClass('bg-overlay');
    }
});

$('.header__nav .close-menu').on('click', () => {
    $('.header__menu').removeClass('active');
    $('.header__nav').removeClass('mobile-menu');

    $('body').removeClass('overflow-hidden');
    $('#header').removeClass('bg-overlay');
});

if ($(window).width() < 1200) {
    $('nav .arrow-down').on('click', (e) => {
        $(e.target).parent().toggleClass('active');
        $(e.target).next().slideToggle();
    });
}

$(window).on('resize', () => {
    if ($(window).width() >= 1200) {
        $(
            '.header__nav .header__logo, .header__nav .header__socials, .header__nav .header__callback, .header__nav .header__phone'
        ).remove();

        $('.header__menu').removeClass('active');
        $('.header__nav').removeClass('mobile-menu');

        $('body').removeClass('overflow-hidden');
        $('#header').removeClass('bg-overlay');
    }
});

// HERO VIDEO
$('.hero__slider-item').on('click', (el) => {
    if ($('.hero-video video source').attr('src') != el.currentTarget.dataset.videoUrl) {
        $('.hero-video video').remove();
        $('.hero-video').append(
            `<video playsinline muted autoplay loop><source src="${el.currentTarget.dataset.videoUrl}", type="video/mp4"></video>`
        );

        setTimeout(() => {
            $('.hero-video video').attr(
                'poster',
                $(el.currentTarget).find('.hero__slider-poster img').attr('src')
            );
        }, 500);
    }
});

// TABS
$('.tabs__item').on('click', (e) => {
    $(e.currentTarget).parent().find('.tabs__item').removeClass('active');
    $(e.currentTarget).addClass('active');

    $(e.currentTarget).parent().parent().find('.tabs-content').removeClass('active');
    $(e.currentTarget)
        .parent()
        .parent()
        .find(`.tabs-content[data-show=${$(e.currentTarget).attr('data-active')}]`)
        .addClass('active');
});

$('.bar__item').on('click', (e) => {
    $(e.currentTarget).parent().find('.bar__item').removeClass('active');
    $(e.currentTarget).addClass('active');

    $(e.currentTarget).parent().parent().find('.bar-content').removeClass('active');
    $(e.currentTarget)
        .parent()
        .parent()
        .find(`.bar-content[data-show=${$(e.currentTarget).attr('data-active')}]`)
        .addClass('active');
});

// FAQ
$('.faq__title').on('click', (e) => {
    $(e.currentTarget).parent().toggleClass('active');
    $(e.currentTarget).parent().find('.faq__text').slideToggle();
});

// POINT ON IMAGE
$('.point').on('click', (e) => {
    if (!$(e.currentTarget).hasClass('active')) {
        $('.point').removeClass('active');
        $(e.currentTarget).addClass('active');
    } else {
        $(e.currentTarget).removeClass('active');
    }
});

// QUIZ

$('.quiz-tiles__item').on('click', (e) => {
    $('.quiz-input input').val('');
    $('.quiz-input input').val($(e.currentTarget).find('p').text());
});

// QUIZ SUBMIT
let prevQuizTab;
let prevQuizStep;

$('#submit').on('click', (e) => {
    if ($('.quiz-tab__item.active').attr('data-active') == 4) {
        $(e.currentTarget).closest('form').submit();
    }

    if ($('.quiz-tab__item.active').attr('data-active') != 4) {
        prevQuizTab = $(
            `.quiz-tab__item[data-active=${$('.quiz-tab__item.active').attr('data-active')}]`
        ).next();
        $('.quiz-tab__item.active').removeClass('active');
        prevQuizTab.addClass('active');

        prevQuizStep = $(
            `.quiz-step.active[data-step=${$('.quiz-step.active').attr('data-step')}]`
        ).next();
        $('.quiz-step.active').removeClass('active');
        prevQuizStep.addClass('active');
    }
});

$('#prevBtn').on('click', (e) => {
    if ($('.quiz-tab__item.active').attr('data-active') != 1) {
        prevQuizTab = $(
            `.quiz-tab__item[data-active=${$('.quiz-tab__item.active').attr('data-active')}]`
        ).prev();
        $('.quiz-tab__item.active').removeClass('active');
        prevQuizTab.addClass('active');

        prevQuizStep = $(
            `.quiz-step[data-step=${$('.quiz-step.active').attr('data-step')}]`
        ).prev();
        $('.quiz-step.active').removeClass('active');
        prevQuizStep.addClass('active');
    }
});
