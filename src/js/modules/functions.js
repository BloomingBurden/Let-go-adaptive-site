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

const debounce = (func, ms) => {
    let timer = false;

    return function (...arg) {
        if (timer === true) {
            return;
        } 
        timer = true;
        func(arg);
        
        setTimeout(() => timer = false, ms);
    }
}

const moveHeader = () => {
    const header = document.querySelector('.header');
    const headerImg = document.querySelector('.header__logo-top .logo__img');
    const bodyImg = document.querySelector('.header__logo-body .logo__img');

    const PATHS = {
        phone: [`img/logo-black.png`,`img/logo-white.png`],
        desktop: [`img/logo-tablet-black.png`,`img/logo-tablet.png`],
    };

    const setNewImg = (isScrolled) => {
        if (window.innerWidth < 768) {
            headerImg.src = isScrolled ? PATHS.phone[0] : PATHS.phone[1];
        } else if (window.innerWidth >= 768 && window.innerWidth < 1440 ) {
            headerImg.previousElementSibling.srcset = isScrolled ? PATHS.desktop[0] : PATHS.desktop[1];
        } else {
            bodyImg.previousElementSibling.previousElementSibling.srcset = isScrolled ? PATHS.desktop[0] : PATHS.desktop[1];
        }
    }

    const onMoveHeader = (evt) => {
        if (window.pageYOffset > 0) {
            header.classList.add('header--scrolled');
            
            setNewImg(true);
        } else {
            header.classList.remove('header--scrolled');
            setNewImg(false);
        }
    }

    window.addEventListener('scroll', onMoveHeader);
};


isWebp();
moveHeader();
document.addEventListener('click', onClickBurger);