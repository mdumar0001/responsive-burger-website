//SHOW MENU
let navMenu = document.getElementById('nav-menu')
 let navToggle = document.getElementById('nav--toggle')
 let navClose = document.getElementById('nav--close')

// MENU SHOW
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    }
    )
}
//MENU HIDDEN
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}
//REMOVE MENU MOBILE
let navLink=document.querySelectorAll(".nav--link")
navLink.forEach((navli)=>{
    navli.addEventListener("click",()=>{
        navMenu.classList.remove("show-menu")
    })

})