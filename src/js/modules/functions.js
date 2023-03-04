function isWebp() {
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }

    testWebP(function (support) {
        let className = support ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
}

const onClickBurger = (evt) => {
    const target = evt.target;

    if (!target.closest('.burger')) return;

    const burgerMenu = document.querySelector('[data-burger]');

    burgerMenu.dataset.burger === 'opened' ? burgerMenu.dataset.burger = 'closed' : burgerMenu.dataset.burger = 'opened';
};

isWebp();
document.addEventListener('click', onClickBurger);