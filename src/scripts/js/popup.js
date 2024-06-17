import { Fancybox } from '@fancyapps/ui';

// Присваиваем Fancybox глобальной переменной
window.Fancybox = Fancybox;

// FANCYBOX OPTION
Fancybox.bind('[data-fancybox]', {
    dragToClose: false,
    autoFocus: false,
    hideScrollbar: false,

    on: {
        done: () => {
            // Найти кнопку закрытия и изменить ее title
            const closeButton = document.querySelector('.is-close-btn');
            if (closeButton) {
                closeButton.setAttribute('title', 'Закрыть');
            }
        }
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
        hideScrollbar: false
    });
};

window.popupSuccess = popupSuccess;

// FANCYBOX REVIEWS
document.querySelectorAll('.js-image').forEach((button) => {
    button.addEventListener('click', function () {
        let image = this.parentElement.querySelector('.image img').getAttribute('src');

        Fancybox.show(
            [
                {
                    src: image
                }
            ],
            {
                hideScrollbar: false
            }
        );
    });
});

document.querySelectorAll('.js-popup').forEach((button) => {
    button.addEventListener('click', function () {
        let text = this.closest('.reviews__item').querySelector('.reviews__item-text').innerHTML;

        Fancybox.show(
            [
                {
                    src: `
                        <div class="r-popup popup">
                            <div class="r-review">${text}</div>
                        </div>
                    `,
                    type: 'html'
                }
            ],
            {
                hideScrollbar: false
            }
        );
    });
});
