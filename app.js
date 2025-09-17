const btn = document.getElementById ('btnMenu');
const menu = document.getElementById ('menu');
const btnClose = document.getElementById ('MenuClose');

btn.addEventListener('click',()=>{
    menu.classList.add('isOpen')
});

btnClose.addEventListener('click',()=>{
    menu.classList.remove('isOpen')
});