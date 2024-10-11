import{_ as f,O as a,S as i,N as n,P as c,T as w,I as d}from"./vendor.min.js";const C=document.getElementById("map");C&&function(){var s;ymaps.ready(t);let r;function t(){s=new ymaps.Map("map",{center:[55.730502,37.644782],zoom:16,controls:[]}),r=new ymaps.Placemark([55.730502,37.644782],{},{preset:"islands#redIcon"}),s.geoObjects.add(r),f(s,{preventScroll:!0,preventTouch:!0})}}();window.Fancybox=a;a.bind("[data-fancybox]",{dragToClose:!1,autoFocus:!1,hideScrollbar:!1,l10n:{CLOSE:"Закрыть",NEXT:"Следующий",PREV:"Предыдущий",MODAL:"Вы можете закрыть это модальное окно, нажав клавишу ESC"}});a.bind(".icon__search[data-fancybox]",{dragToClose:!1,autoFocus:!1,hideScrollbar:!1,showClass:"fancybox-slideDown",hideClass:"fancybox-slideUp",l10n:{CLOSE:"Закрыть",MODAL:"Вы можете закрыть это модальное окно, нажав клавишу ESC"}});const b=()=>{const e=`
        <div class="popup popup-success">
            <img src="${home_dir}/assets/images/anime-girl.svg" alt="img"/>
            <div class="popup-title">Вы успешно зарегистрировались!</div>
            <p>Ваш аккаунт успешно создан, и вы автоматически авторизированы.</p>
            <p><b>Теперь вы можете:</b></p>
            <ul>
                <li>Зайти в свой профиль</li>
                <li>Быстрее делать заказы</li>
                <li>Отслеживать статус своих покупок</li>
                <li>Копить баллы за покупки и расплачиваться ими</li>
            </ul>
            <p><b>Хороших покупок!</b></p>
        </div>
    `;a.show([{src:e,type:"html"}],{dragToClose:!1,autoFocus:!1,hideScrollbar:!1,l10n:{CLOSE:"Закрыть",MODAL:"Вы можете закрыть это модальное окно, нажав клавишу ESC"}})};window.popupSuccessReg=b;const k=()=>{const e=`
        <div class="popup popup-success">
            <img src="${home_dir}/assets/images/anime-girl.svg" alt="img"/>
            <div class="popup-title">Спасибо за подписку на нашу рассылку!</div>
            <p>Теперь вы будете в курсе новинок, акций и другой полезной информации.
            <br>
            <br>
            Если вам надоест получать наши письма, вы сможете отписаться одним кликом по ссылке в письме.</p>
        </div>
    `;a.show([{src:e,type:"html"}],{dragToClose:!1,autoFocus:!1,hideScrollbar:!1,l10n:{CLOSE:"Закрыть",MODAL:"Вы можете закрыть это модальное окно, нажав клавишу ESC"}})};window.popupSuccessSubscribe=k;const y=()=>{const e=`
        <div class="popup popup-success">
            <img src="${home_dir}/assets/images/anime-girl.svg" alt="img"/>
            <div class="popup-title">Отзыв успешно отправлен!</div>
            <p>Наша команда стремится к тому, чтобы каждый клиент остался доволен покупкой. Спасибо за то, что выбрали нас и оставили отзыв о нашей работе!</p>
        </div>
    `;a.show([{src:e,type:"html"}],{dragToClose:!1,autoFocus:!1,hideScrollbar:!1,l10n:{CLOSE:"Закрыть",MODAL:"Вы можете закрыть это модальное окно, нажав клавишу ESC"}})};window.popupSuccessReview=y;const T=()=>{const e=`
        <div class="popup popup-success">
            <img src="${home_dir}/assets/images/anime-girl.svg" alt="img"/>
            <div class="popup-title">Спасибо!<br>Заявка отправлена</div>
            <p>Наш менеджер свяжется с вами в ближайшее время, чтобы уточнить все детали и сориентировать по цене</p>
        </div>
    `;a.show([{src:e,type:"html"}],{dragToClose:!1,autoFocus:!1,hideScrollbar:!1,l10n:{CLOSE:"Закрыть",MODAL:"Вы можете закрыть это модальное окно, нажав клавишу ESC"}})};window.popupSuccess=T;const _=()=>{const e=`
        <div class="popup popup-success">
            <img src="${home_dir}/assets/images/anime-girl.svg" alt="img"/>
            <div class="popup-title">Спасибо за ваш вопрос!</div>
            <p>В ближайшее время мы пришлём ответ на ваш email</p>
        </div>
    `;a.show([{src:e,type:"html"}],{dragToClose:!1,autoFocus:!1,hideScrollbar:!1,l10n:{CLOSE:"Закрыть",MODAL:"Вы можете закрыть это модальное окно, нажав клавишу ESC"}})};window.popupSuccessQuestion=_;let u;function S(e,s){clearTimeout(u),document.querySelector(".header-popup")&&document.querySelector(".header-popup").remove();const r=document.querySelector("#header .container"),t=document.createElement("div");t.className="header-popup",t.innerHTML=`
        <div class="header-popup-image"><img src="${e}" alt=""></div>
        <div class="header-popup-wrap">
            <div class="header-popup-title">Товар добавлен в корзину</div>
            <div class="header-popup-item">${s}</div>
        </div>
    `,r.appendChild(t),u=setTimeout(()=>{t.remove()},5e3)}window.popupAddedCart=S;new i(".hero .swiper",{modules:[n,c],slidesPerView:1,spaceBetween:20,loop:!0,pagination:{el:".hero .swiper-pagination",clickable:!0},navigation:{nextEl:".hero .swiper-btn-next",prevEl:".hero .swiper-btn-prev"}});const M=document.querySelectorAll(".slider");M.forEach(e=>{new i(e.querySelector(".swiper"),{modules:[n,c],slidesPerView:1,spaceBetween:10,loop:!0,pagination:{el:e.querySelector(".swiper-pagination"),clickable:!0},navigation:{nextEl:e.querySelector(".swiper-btn-next"),prevEl:e.querySelector(".swiper-btn-prev")},breakpoints:{744:{slidesPerView:2},1200:{slidesPerView:3,spaceBetween:20},1440:{slidesPerView:4,spaceBetween:20}}})});const x=new i(".product-thumbs .swiper",{modules:[n],slidesPerView:5,spaceBetween:10,watchSlidesProgress:!0,direction:"horizontal",navigation:{nextEl:".product-thumbs .swiper-button-next",prevEl:".product-thumbs .swiper-button-prev"},breakpoints:{1440:{slidesPerView:5,spaceBetween:20,direction:"vertical"}}});new i(".product-main .swiper",{modules:[c,w],slidesPerView:1,spaceBetween:30,thumbs:{swiper:x},pagination:{el:".product-main .swiper-pagination",clickable:!0}});d({mask:"+7 (999) 999-99-99",showMaskOnHover:!1,showMaskOnFocus:!1,onBeforePaste:(e,s)=>e.replace(/^8/,"")}).mask("[phone-number]");d({regex:"^[0-9]*$",allowMinus:!1,showMaskOnHover:!1,showMaskOnFocus:!1,placeholder:""}).mask("[number-only]");d({mask:"99-99-9999",allowMinus:!1,showMaskOnHover:!1,showMaskOnFocus:!1}).mask("[calendar]");const m=document.querySelectorAll("[data-anchor]");m.length>0&&m.forEach(e=>{e.onclick=function(s){s.preventDefault(),document.querySelector(`#${e.getAttribute("data-anchor").split("#")[1]}`).scrollIntoView({block:"center",behavior:"smooth"})}});$(window).on("scroll",function(){$(window).scrollTop()>$("#header").height()?$("#header").addClass("header-fixed"):$(window).scrollTop()==0&&$("#header").removeClass("header-fixed")});$(window).scrollTop()>$("#header").height()&&$("#header").addClass("header-fixed");$(document).on("keyup",e=>{e.key=="Escape"&&($(".header__nav").removeClass("mobile-menu"),$("body").removeClass("overflow-hidden"),$("#header").removeClass("bg-overlay"))});$(".header__menu").on("click",e=>{$(e.currentTarget).hasClass("active")?($(".header__nav").removeClass("mobile-menu"),$("body").removeClass("overflow-hidden"),$("#header").removeClass("bg-overlay")):($(".header__nav").addClass("mobile-menu"),$("body").addClass("overflow-hidden"),$("#header").addClass("bg-overlay"))});$("#header").on("click",e=>{!$(e.target).closest(".header__menu").length&&!$(e.target).closest(".header__nav").length&&($(".header__nav").removeClass("mobile-menu"),$("body").removeClass("overflow-hidden"),$("#header").removeClass("bg-overlay"))});$(".header__nav .close-menu").on("click",()=>{$(".header__nav").removeClass("mobile-menu"),$("body").removeClass("overflow-hidden"),$("#header").removeClass("bg-overlay")});$(window).width()<1200&&$("nav .arrow-down").on("click",e=>{$(e.target).parent().toggleClass("active"),$(e.target).next().slideToggle()});$(window).on("resize",()=>{$(window).width()>=1200&&($(".header__nav").removeClass("mobile-menu"),$("body").removeClass("overflow-hidden"),$("#header").removeClass("bg-overlay"))});$(".product-favourite").on("click",e=>{$(e.currentTarget).toggleClass("active")});$(".pass-eye").on("click",e=>{$(e.currentTarget).prev("input").attr("type")!="text"?($(e.currentTarget).prev("input").attr("type","text"),$(e.currentTarget).find("svg").html('<path id="Icon" d="M3 3L6.58916 6.58916M21 21L17.4112 17.4112M13.8749 18.8246C13.2677 18.9398 12.6411 19 12.0005 19C7.52281 19 3.73251 16.0571 2.45825 12C2.80515 10.8955 3.33851 9.87361 4.02143 8.97118M9.87868 9.87868C10.4216 9.33579 11.1716 9 12 9C13.6569 9 15 10.3431 15 12C15 12.8284 14.6642 13.5784 14.1213 14.1213M9.87868 9.87868L14.1213 14.1213M9.87868 9.87868L6.58916 6.58916M14.1213 14.1213L6.58916 6.58916M14.1213 14.1213L17.4112 17.4112M6.58916 6.58916C8.14898 5.58354 10.0066 5 12.0004 5C16.4781 5 20.2684 7.94291 21.5426 12C20.8357 14.2507 19.3545 16.1585 17.4112 17.4112" stroke="#231F20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>')):($(e.currentTarget).prev("input").attr("type","password"),$(e.currentTarget).find("svg").html('<path d="M14.9998 12C14.9998 13.6569 13.6566 15 11.9998 15C10.3429 15 8.99976 13.6569 8.99976 12C8.99976 10.3431 10.3429 9 11.9998 9C13.6566 9 14.9998 10.3431 14.9998 12Z" stroke="#231F20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.45801 12C3.73228 7.94288 7.52257 5 12.0002 5C16.4778 5 20.2681 7.94291 21.5424 12C20.2681 16.0571 16.4778 19 12.0002 19C7.52256 19 3.73226 16.0571 2.45801 12Z" stroke="#231F20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'))});$(".popup-tab__item").on("click",e=>{$(".popup-tab__item").removeClass("active"),$(e.currentTarget).addClass("active"),$(".popup-block").removeClass("active"),$(`.popup-block[data-show=${$(e.currentTarget).attr("data-active")}]`).addClass("active")});$(".filter-btn").on("click",()=>{$(".filter").hasClass("active")?($(".filter").removeClass("active"),$("body").removeClass("overflow-hidden"),$("#page").removeClass("bg-overlay")):($(".filter").addClass("active"),$("body").addClass("overflow-hidden"),$("#page").addClass("bg-overlay"))});$(".filter-close").on("click",()=>{$(".filter").removeClass("active"),$("body").removeClass("overflow-hidden"),$("#page").removeClass("bg-overlay")});$(".filter__name").on("click",e=>{$(e.currentTarget).closest(".filter__row").toggleClass("active"),$(e.currentTarget).closest(".filter__row").find(".filter__item").slideToggle()});$(".select").on("click",e=>{$(e.currentTarget).hasClass("toggle")?$(e.currentTarget).removeClass("toggle"):$(e.currentTarget).addClass("toggle")});$(".option__item").on("click",e=>{$(".select-value").text($(e.currentTarget).text())});$("html").on("click",e=>{!$(e.target).closest(".filter").length&&!$(e.target).closest(".filter-btn").length&&!$(e.target).closest(".sort").length&&($("body").removeClass("overflow-hidden"),$("#page").removeClass("bg-overlay"),$(".filter").removeClass("active"),$(".select").removeClass("toggle"))});$(".brick-item").on("click",e=>{$(e.currentTarget).closest(".bricks").find(".brick-item").removeClass("selected"),$(e.currentTarget).addClass("selected")});$(".qty-input .qty").on("click",e=>{$(e.currentTarget).hasClass("qty-minus")&&$(e.currentTarget).parent().find("input").val()>1&&$(e.currentTarget).parent().find("input").val(Number($(e.currentTarget).parent().find("input").val())-1),$(e.currentTarget).hasClass("qty-plus")&&$(e.currentTarget).parent().find("input").val()<999&&$(e.currentTarget).parent().find("input").val(Number($(e.target).parent().find("input").val())+1)});$(".tab .tab-item").on("click",e=>{$(".tab .tab-item").removeClass("active"),$(e.currentTarget).addClass("active"),$(".tab-content").removeClass("active"),$(`.tab-content[data-show=${$(e.currentTarget).attr("data-active")}]`).addClass("active")});$(window).width()<744&&$(".nav-link__item").on("click",e=>{$(e.currentTarget).hasClass("active")&&(e.preventDefault(),$(e.currentTarget).closest(".nav-link").toggleClass("dropdown"))});$(".faq__item-title").on("click",e=>{$(e.currentTarget).hasClass("active")?($(e.currentTarget).removeClass("active"),$(e.currentTarget).next().slideUp()):($(".faq__item-title").removeClass("active"),$(".faq__item-title").next().slideUp(),$(e.currentTarget).addClass("active"),$(e.currentTarget).next().slideDown())});const l=$("#file")[0],E=$(".progress");$(l).on("change",function(){$(this).parent().find(".progress").css("width",0);const e=$(this).val().split("\\").pop(),s=this.files[0].size/1e3>=1024?(this.files[0].size/1e6).toFixed(1)+" MB":(this.files[0].size/1e3).toFixed(1)+" KB";$(this).parent().find(".file-name").text(`Файл ${e} загружен`),$(this).parent().find(".file-info").text(s),$(".input-file-img").html(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
            <path d="M1 7L5 11L15 1" stroke="#219653" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`);const r=this.files[0],t=r.size,v=1024*1024;let o=0;const p=()=>{const h=r.slice(o,o+v);o+=h.size,setTimeout(()=>{const g=Math.min(100,Math.round(o/t*100));E.css("width",g+"%"),o<t&&p()},1)};p(),$(".input-file-icon").addClass("remove"),$(this).attr("disabled",!0)});$(".input-file-icon").on("click",function(){$(this).hasClass("remove")&&($(this).removeClass("remove"),$(this).parent().find($(l)).removeAttr("disabled"),$(this).parent().find(".progress").css("width",0),$(this).parent().find(".file-name").text("Загрузите изображение *"),$(this).parent().find(".file-info").text("jpeg, png, pdf"),$(this).parent().find(".input-file-img").html(`<img src="${home_dir}/assets/images/img.svg" alt="">`),$(l).val(""))});
