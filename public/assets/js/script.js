
var lastScrollTop = 0;
nav=document.getElementById(navbar);
window.addEventListener ("scroll", function(){
    var header= document.querySelector("header");
    header.classList.toggle ("sticky", window. scrollYOffset ||  document. documentElement. scrollTOP) {
        I
    }
});

let menu= document.querySelector('.navbar-toggler');
let navlist = document.querySelector('.navbar-nav');
menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};
window.onscroll = ()=>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};
