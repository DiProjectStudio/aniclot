// Import Plugins
import Inputmask from 'inputmask';
import $ from 'jquery';
window.$ = $;

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
if ($('body').hasClass('page-main')) {
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
        $('.header__nav').addClass('mobile-menu');

        $('body').addClass('overflow-hidden');
        $('#header').addClass('bg-overlay');
    } else {
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
        $('.header__nav').removeClass('mobile-menu');

        $('body').removeClass('overflow-hidden');
        $('#header').removeClass('bg-overlay');
    }
});

$('.header__nav .close-menu').on('click', () => {
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
        $('.header__nav').removeClass('mobile-menu');

        $('body').removeClass('overflow-hidden');
        $('#header').removeClass('bg-overlay');
    }
});

// ADD FAVOURITE
$('.product-favourite').on('click', (e) => {
    $(e.currentTarget).toggleClass('active');
});
