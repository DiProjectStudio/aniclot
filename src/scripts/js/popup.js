import { Fancybox } from '@fancyapps/ui';

// Присваиваем Fancybox глобальной переменной
window.Fancybox = Fancybox;

// FANCYBOX OPTION
Fancybox.bind('[data-fancybox]', {
    dragToClose: false,
    autoFocus: false,
    hideScrollbar: false,
    showClass: 'fancybox-slideDown', // Класс для анимации появления
    hideClass: 'fancybox-slideUp', // Класс для анимации исчезновения
    l10n: {
        CLOSE: 'Закрыть',
        NEXT: 'Следующий',
        PREV: 'Предыдущий',
        MODAL: 'Вы можете закрыть это модальное окно, нажав клавишу ESC'
    }
});

const popupSuccess = () => {
    const template = `
        <div id="popup-callback" class="popup popup-success">
            <div class="popup-title">Спасибо</div>
            <div class="popup-subtitle">Заявка успешно отправлена</div>
            <div class="btn btn--red" onclick="Fancybox.close();">Закрыть окно</div>
        </div>
    `;
    Fancybox.show([{ src: template, type: 'html' }], {
        dragToClose: false,
        autoFocus: false,
        hideScrollbar: false,
        l10n: {
            CLOSE: 'Закрыть',
            MODAL: 'Вы можете закрыть это модальное окно, нажав клавишу ESC'
        }
    });
};

window.popupSuccess = popupSuccess;

// POPUP CART ADDED
let timeout;

function popupAddedCart($img, $productName) {
    clearTimeout(timeout);

    const headerContainer = document.querySelector('#header .container');
    const headerPopup = document.createElement('div');
    headerPopup.className = 'header-popup';
    headerPopup.innerHTML = `
        <div class="header-popup-image"><img src="${$img}" alt=""></div>
        <div class="header-popup-wrap">
            <div class="header-popup-title">Товар добавлен в корзину</div>
            <div class="header-popup-item">${$productName}</div>
        </div>
    `;

    headerContainer.appendChild(headerPopup);

    timeout = setTimeout(() => {
        headerPopup.remove();
    }, 5000);
}

window.popupAddedCart = popupAddedCart;
