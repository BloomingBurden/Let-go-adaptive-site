export const moveHeader = () => {
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

    const onMoveHeader = () => {
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