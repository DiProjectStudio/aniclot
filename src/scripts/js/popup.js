import { Fancybox } from '@fancyapps/ui';

// Присваиваем Fancybox глобальной переменной
window.Fancybox = Fancybox;

// FANCYBOX OPTION
Fancybox.bind('[data-fancybox]', {
    dragToClose: false,
    autoFocus: false,
    hideScrollbar: false,
    l10n: {
        CLOSE: 'Закрыть',
        NEXT: 'Следующий',
        PREV: 'Предыдущий',
        MODAL: 'Вы можете закрыть это модальное окно, нажав клавишу ESC'
    }
});

// Fancybox search
Fancybox.bind('.icon__search[data-fancybox]', {
    dragToClose: false,
    autoFocus: false,
    hideScrollbar: false,
    showClass: 'fancybox-slideDown', // Класс для анимации появления
    hideClass: 'fancybox-slideUp', // Класс для анимации исчезновения
    l10n: {
        CLOSE: 'Закрыть',
        MODAL: 'Вы можете закрыть это модальное окно, нажав клавишу ESC'
    }
});

// Success registration
const popupSuccessReg = () => {
    const template = `
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

window.popupSuccessReg = popupSuccessReg;

// Success subscribe
const popupSuccessSubscribe = () => {
    const template = `
        <div class="popup popup-success">
            <img src="${home_dir}/assets/images/anime-girl.svg" alt="img"/>
            <div class="popup-title">Спасибо за подписку на нашу рассылку!</div>
            <p>Теперь вы будете в курсе новинок, акций и другой полезной информации.
            <br>
            <br>
            Если вам надоест получать наши письма, вы сможете отписаться одним кликом по ссылке в письме.</p>
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

window.popupSuccessSubscribe = popupSuccessSubscribe;

// Popup success
const popupSuccess = () => {
    const template = `
        <div class="popup popup-success">
            <img src="${home_dir}/assets/images/anime-girl.svg" alt="img"/>
            <div class="popup-title">Спасибо!<br>Заявка отправлена</div>
            <p>Наш менеджер свяжется с вами в ближайшее время, чтобы уточнить все детали и сориентировать по цене</p>
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
