const botaoMenu = document.querySelector(".sideMenu");
const menu = document.querySelector(".menu");
const signUp = document.querySelector(".sign-up");

botaoMenu.addEventListener("click", function(){
    menu.classList.toggle("menu-active");
    signUp.classList.toggle("menu-active");
});