//Czysty JS

const divArrow = document.querySelector('.arrow');
const iArrow = document.querySelector('.fa-arrow-up');
const nav = document.querySelector('nav');

divArrow.addEventListener('click', function () {
    divArrow.classList.toggle("on");
    iArrow.classList.toggle('on');
    nav.classList.toggle('on');
})



//Wersja JQ v1
// $('.arrow').on('click', function () {
//     $("nav, .arrow, i").toggleClass("on");
// })