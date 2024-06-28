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

// JS Anchor
const anchor = document.querySelectorAll('[data-anchor]');
if (anchor.length > 0) {
    anchor.forEach((el) => {
        el.onclick = function (e) {
            e.preventDefault();
            document
                .querySelector(`#${el.getAttribute('data-anchor').split('#')[1]}`)
                .scrollIntoView({
                    block: 'start',
                    behavior: 'smooth'
                });
        };
    });
}

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

// PASSWORD SHOW
$('.pass-eye').on('click', (e) => {
    if ($(e.currentTarget).prev('input').attr('type') != 'text') {
        $(e.currentTarget).prev('input').attr('type', 'text');
        $(e.currentTarget)
            .find('svg')
            .html(
                '<path id="Icon" d="M3 3L6.58916 6.58916M21 21L17.4112 17.4112M13.8749 18.8246C13.2677 18.9398 12.6411 19 12.0005 19C7.52281 19 3.73251 16.0571 2.45825 12C2.80515 10.8955 3.33851 9.87361 4.02143 8.97118M9.87868 9.87868C10.4216 9.33579 11.1716 9 12 9C13.6569 9 15 10.3431 15 12C15 12.8284 14.6642 13.5784 14.1213 14.1213M9.87868 9.87868L14.1213 14.1213M9.87868 9.87868L6.58916 6.58916M14.1213 14.1213L6.58916 6.58916M14.1213 14.1213L17.4112 17.4112M6.58916 6.58916C8.14898 5.58354 10.0066 5 12.0004 5C16.4781 5 20.2684 7.94291 21.5426 12C20.8357 14.2507 19.3545 16.1585 17.4112 17.4112" stroke="#231F20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
            );
    } else {
        $(e.currentTarget).prev('input').attr('type', 'password');
        $(e.currentTarget)
            .find('svg')
            .html(
                '<path d="M14.9998 12C14.9998 13.6569 13.6566 15 11.9998 15C10.3429 15 8.99976 13.6569 8.99976 12C8.99976 10.3431 10.3429 9 11.9998 9C13.6566 9 14.9998 10.3431 14.9998 12Z" stroke="#231F20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.45801 12C3.73228 7.94288 7.52257 5 12.0002 5C16.4778 5 20.2681 7.94291 21.5424 12C20.2681 16.0571 16.4778 19 12.0002 19C7.52256 19 3.73226 16.0571 2.45801 12Z" stroke="#231F20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
            );
    }
});

// AUTH TABS
$('.popup-tab__item').on('click', (e) => {
    $('.popup-tab__item').removeClass('active');
    $(e.currentTarget).addClass('active');

    $('.popup-block').removeClass('active');
    $(`.popup-block[data-show=${$(e.currentTarget).attr('data-active')}]`).addClass('active');
});

// CATALOG
$('.filter-btn').on('click', () => {
    if (!$('.filter').hasClass('active')) {
        $('.filter').addClass('active');

        $('body').addClass('overflow-hidden');
        $('#page').addClass('bg-overlay');
    } else {
        $('.filter').removeClass('active');

        $('body').removeClass('overflow-hidden');
        $('#page').removeClass('bg-overlay');
    }
});

$('.filter-close').on('click', () => {
    $('.filter').removeClass('active');

    $('body').removeClass('overflow-hidden');
    $('#page').removeClass('bg-overlay');
});

$('.filter__name').on('click', (e) => {
    $(e.currentTarget).closest('.filter__row').toggleClass('active');
    $(e.currentTarget).closest('.filter__row').find('.filter__item').slideToggle();
});

$('.select').on('click', (e) => {
    if ($(e.currentTarget).hasClass('toggle')) {
        $(e.currentTarget).removeClass('toggle');
    } else {
        $(e.currentTarget).addClass('toggle');
    }
});

$('.option__item').on('click', (e) => {
    $('.select-value').text($(e.currentTarget).text());
});

$('html').on('click', (e) => {
    if (
        !$(e.target).closest('.filter').length &&
        !$(e.target).closest('.filter-btn').length &&
        !$(e.target).closest('.sort').length
    ) {
        $('body').removeClass('overflow-hidden');
        $('#page').removeClass('bg-overlay');
        $('.filter').removeClass('active');

        $('.select').removeClass('toggle');
    }
});

// PRODUCT PAGE
$('.brick-item').on('click', (e) => {
    $(e.currentTarget).closest('.bricks').find('.brick-item').removeClass('selected');
    $(e.currentTarget).addClass('selected');
});

$('.qty-input .qty').on('click', (e) => {
    if (
        $(e.currentTarget).hasClass('qty-minus') &&
        $(e.currentTarget).parent().find('input').val() > 1
    ) {
        $(e.currentTarget)
            .parent()
            .find('input')
            .val(Number($(e.currentTarget).parent().find('input').val()) - 1);
    }
    if (
        $(e.currentTarget).hasClass('qty-plus') &&
        $(e.currentTarget).parent().find('input').val() < 999
    ) {
        $(e.currentTarget)
            .parent()
            .find('input')
            .val(Number($(e.target).parent().find('input').val()) + 1);
    }
});

// TAB
$('.tab .tab-item').on('click', (e) => {
    $('.tab .tab-item').removeClass('active');
    $(e.currentTarget).addClass('active');

    $('.tab-content').removeClass('active');
    $(`.tab-content[data-show=${$(e.currentTarget).attr('data-active')}]`).addClass('active');
});
