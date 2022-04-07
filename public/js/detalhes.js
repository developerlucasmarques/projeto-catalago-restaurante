const q = (el)=> document.querySelector(el);
const qa = (el)=> document.querySelectorAll(el);

const headerIndex = q('#header-index');
const bgHeader = 'bg-header';
const headerContato = q('#header--contato');
const dataFooter = q('[data-footer]');
const menuAtual = q('#header--inicio');
const menuMenu = q('#header--menu');

menuAtual.classList.remove('menu-atual');
menuAtual.href = '/';
menuMenu.href = '/#menu';

function bgIndex() {
    const windowTop = window.pageYOffset;
    if(windowTop >= 30) {
        headerIndex.classList.add(bgHeader);
    }
    if(windowTop < 30) {
        headerIndex.classList.remove(bgHeader);
    }
}

function contato(){
    headerContato.classList.add('menu-atual');
}

function scrollContato(){
    const windowTop = window.pageYOffset;
    if((windowTop) > ((dataFooter.offsetTop * 5) / 18)) {
        contato();
    }
    if((windowTop) <= ((dataFooter.offsetTop * 5) / 18)) {
        headerContato.classList.remove('menu-atual');
    }
}

window.addEventListener('scroll', () =>{
    bgIndex();
    scrollContato()
});