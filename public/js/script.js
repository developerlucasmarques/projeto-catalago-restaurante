const q = (el)=> document.querySelector(el);
const qa = (el)=> document.querySelectorAll(el);

const headerIndex = q('#header-index');
const bgHeader = 'bg-header';

function bgIndex() {
    const windowTop = window.pageYOffset;
    if(windowTop >= 30) {
        headerIndex.classList.add(bgHeader);
    }
    if(windowTop < 30) {
        headerIndex.classList.remove(bgHeader);
    }
}


const headerInicio = q('#header--inicio');
const headerMenu = q('#header--menu');
const headerContato = q('#header--contato');

function inicio(){
    headerInicio.classList.add('menu-atual');
    headerMenu.classList.remove('menu-atual');
    headerContato.classList.remove('menu-atual');
}

function menu(){
    headerInicio.classList.remove('menu-atual');
    headerMenu.classList.add('menu-atual');
    headerContato.classList.remove('menu-atual');
}

function contato(){
    headerInicio.classList.remove('menu-atual');
    headerMenu.classList.remove('menu-atual');
    headerContato.classList.add('menu-atual');
}

const dataMenu = q('[data-menu]');
const dataFooter = q('[data-footer]');



function animeScroll() {
    const windowTop = window.pageYOffset;
    if((windowTop) > ((dataMenu.offsetTop * 4) / 5)) {
        menu();
    }
    if((windowTop) < ((dataMenu.offsetTop * 2) / 4.5)) {
        inicio();
    }
    if((windowTop) > ((dataFooter.offsetTop * 4) / 4.9)) {
        contato();
    }
}


window.addEventListener('scroll', () =>{
    bgIndex();
    animeScroll();
});




//funções para o slide


let sliderWidth = q('.slider-width').style.width = `calc(100vw * ${slideArray.length})`;
let ctGoSlide = 1;
let rolar = true;

slideArray.map((element)=>{
    let sliderItem = q('#models .slider-item').cloneNode(true);
    let pointerItem = q('#models .pointer-item').cloneNode();

    sliderItem.querySelector('h1').innerHTML = element.h1;
    sliderItem.querySelector('h2').innerHTML = element.h2;
    sliderItem.querySelector('.button-pedido').innerHTML = element.button;
    sliderItem.querySelector('.bg-slider img').src = element.img;

    q('#header-slide .slider-width').append(sliderItem);
    q('#pointers-header-slide').append(pointerItem);
});


let pointerItem = qa('#pointers-header-slide .pointer-item');
pointerItem[0].classList.add('pointer-item-atual');

for(let i = 0; i < pointerItem.length; i++) {
    pointerItem[i].addEventListener('click', ()=> {
        for(let i = 0; i < pointerItem.length; i++) {
            pointerItem[i].classList.remove('pointer-item-atual')
        }
        q('.slider-width').style.marginLeft = `calc(-100vw * ${i})`
        pointerItem[i].classList.add('pointer-item-atual');
        ctGoSlide = i + 1;
        rolar = false;
    });
    
};

function goSlide() {
    if(rolar) {
        if(ctGoSlide >= slideArray.length) {
            ctGoSlide = 0;
        }
        for(let i = 0; i < pointerItem.length; i++) {
            pointerItem[i].classList.remove('pointer-item-atual')
        }
        q('.slider-width').style.marginLeft = `calc(-100vw * ${ctGoSlide})`
        pointerItem[ctGoSlide].classList.add('pointer-item-atual');
        ctGoSlide++;
    } else {
        rolar = true;
    }
}




setInterval(goSlide, 5000);
