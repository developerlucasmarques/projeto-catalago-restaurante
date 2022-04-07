const target = document.querySelector('#header-admin');
const liNav = document.querySelector('#li-scroll');
const liNav2 = document.querySelector('#li-scroll2');
const liNav3 = document.querySelector('#li-scroll3');
const logoScroll = document.querySelector('#logo-scroll');

const bgScroll = 'bg-scroll';
const navScroll = 'nav-scroll';

function animeBg() {
    const windowTop = window.pageYOffset;
    if(windowTop >= 20) {
        target.classList.add(bgScroll);
        liNav.classList.add(navScroll);
        liNav2.classList.add(navScroll);
        liNav3.classList.add(navScroll);
        logoScroll.classList.add(navScroll);
    }
    if(windowTop < 20) {
        target.classList.remove(bgScroll)
        liNav.classList.remove(navScroll);
        liNav2.classList.remove(navScroll);
        liNav3.classList.remove(navScroll);
        logoScroll.classList.remove(navScroll);
    }
}

window.addEventListener('scroll', () => {
    animeBg();
})
