let burger = document.querySelector('.burger');
let nav = document.querySelector('nav');

burger.onclick = function() {
    nav.classList.toggle('show');
    if(burger.textContent === 'close') {
        burger.textContent = 'menu'
    }else if(burger.textContent === 'menu') {
        burger.textContent = 'close'
    }
}