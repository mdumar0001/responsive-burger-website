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

// =======ADD SHADOW HEADER
let shadowheader=()=>{
    const header=document.getElementById('header')
// add a class if the bottom offset is greater than 50 of the
this.scrollY>=50 ? header.classList.add("show-header")
                  :header.classList.remove("show-header");
}
window.addEventListener('scroll',shadowheader)

// ==============SHOW SCROLL UP=
const scrollUp=()=>{
    const scrrollUp=document.getElementById('scrollup')
    //when the scroll is higher tahan 350 viewport height ,add the 
    this.scrollY>=350? scrrollUp.classList.add('show-scroll')
                      :scrrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)

// =======SCROLL SECTION ACTIVE LINE======
const sections=document.querySelectorAll('section[id]')
const scrollActive = () =>{
const scrollDown=window.scrollY
sections.forEach(current=>{
    const sectionHeight=current.offsetHeight
  const sectionTop = current.offsetTop-58
    const sectionId = current.getAttribute('id')
    const sectionClass=document.querySelector('.nav--menu a[href*= '+ sectionId +' ]')
    // console.log(sectionClass)
     if(scrollDown>sectionTop && scrollDown <= sectionTop + sectionHeight){
        sectionClass.classList.add('active-link')
        console.log(sectionClass.className)
     }
     else{
        sectionClass.classList.remove('active-link')
        console.log(sectionClass.className)
     }
})
}
window.addEventListener('scroll',scrollActive)

// ==========SCROLL REVEAL ANIMATION==========

const sr=ScrollReveal({
    origin:'top',
    distance:'60px',
    delay:300,
    reset:true, //animation repeat

})
sr.reveal(`.home--data,.footer`)
sr.reveal(`.home__dish`,{delay:500,distance:'100px',origin:'bottom'})
sr.reveal(`.home__burger`,{delay:1200,distance:'100px',duration:1500})
sr.reveal(`.home__ingredient`,{delay:1600,interval:100})
sr.reveal(`.recipe__img, .delivery__img, .contact__image`,{origin:'left'})
sr.reveal(`.recipe__data, .delivery__data, .contact__data`,{origin:'right'})
sr.reveal(`.popular__card`,{interval:100})