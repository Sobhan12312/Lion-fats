const menuburger = document.querySelector('.menu-burger');
const list = document.querySelector('.list');
var bool = true;

menuburger.addEventListener('click', () => {
    if (bool == true) {
        menuburger.classList.add('open');
        list.style.top = 0;
        list.style.right = 0;
        bool = false;
    }else{
        menuburger.classList.remove('open');
        list.style.top = '-100%';
        list.style.right=0;
        bool = true;
    }
})