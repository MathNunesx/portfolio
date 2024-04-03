window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 0)
})

let menuBtn = document.getElementById('btn-menu');
let menu = document.getElementById('mobile-menu');
let overlay = document.getElementById('menu-overlay')


menuBtn.addEventListener('click' , function(){
    menu.classList.add('open-menu')
})

menu.addEventListener('click' , function(){
    menu.classList.remove('open-menu')
})

overlay.addEventListener('click' , function(){
    menu.classList.remove('open-menu')
})