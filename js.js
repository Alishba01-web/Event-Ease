const bar = document.querySelector('#bar');
const close = document.querySelector('#close');
const nav = document.querySelector('.nav-links');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('appear');
    })
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('appear');
    })
}