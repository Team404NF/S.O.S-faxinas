function actMenu(){
    var nav = document.querySelector(".nav");
    nav.classList.toggle("nav-act");
    var menu = document.querySelector(".hamburger");
    menu.classList.toggle("menu-act");
    var body = document.getElementById("body");
    body.classList.toggle("body-act");
}