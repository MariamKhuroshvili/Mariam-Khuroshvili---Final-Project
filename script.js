let navigationElement = document.getElementById('navBar');
let burgerElement = document.getElementById('burBar');


burgerElement.addEventListener('click',function() {
    navigationElement.classList.toggle('navActive');
})