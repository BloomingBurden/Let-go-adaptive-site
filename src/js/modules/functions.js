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

const setPeopleLevel = () => {
    const level = document.querySelectorAll('.people__level');

    level.forEach(item => {
        const svgCircle = item.querySelector('.people__circle-main');
        const level = item.querySelector('b');

        svgCircle.style.strokeDashoffset = Math.ceil(180 - (level.textContent * 1.76));
    })
}

isWebp();
setPeopleLevel();
document.addEventListener('click', onClickBurger);