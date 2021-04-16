(function navigation() {
    const nav = document.querySelector('.navigation');
    const navBox = document.querySelector('.navigation__box');
    const navActive = document.querySelector('.navigation__mobile');
    const navLinksActive = document.querySelectorAll('.navigation__link');
    const hamburger = document.querySelector('.ham-ico');
    const hamburgerActive = document.querySelector('.ham-ico__bars');
    const estimate = document.querySelector('.navigation__envelope');

    let menuOpen = false;

    const handleButton = () => {
        menuOpen = !menuOpen;
        hamburgerActive.classList.toggle('ham-ico__bars--active');
        navActive.classList.toggle('navigation__mobile--active');

        menuOpen ? document.body.style.overflow = "hidden" : document.body.style.overflow = "";
    }

    hamburger.addEventListener('click', handleButton);

    navLinksActive.forEach(item => {
        item.addEventListener('click', () => {
            navActive.classList.remove('navigation__mobile--active');
            hamburgerActive.classList.remove('ham-ico__bars--active');
            document.body.style.overflow = "";
            menuOpen = false;
        });
    });
    estimate.addEventListener('click', () => {
        if (!menuOpen) return;
        navActive.classList.remove('navigation__mobile--active');
        hamburgerActive.classList.remove('ham-ico__bars--active');
        document.body.style.overflow = "";
        menuOpen = false;
    });


    const addShadow = () => {
        if (window.scrollY >= 1) {
            nav.classList.add('navigation--shadow')
            navBox.classList.add('navigation__box--active')
            
        } else {
            nav.classList.remove('navigation--shadow')
            navBox.classList.remove('navigation__box--active')
        }
    }
    window.addEventListener('scroll', addShadow)

})();