// var swiper = new Swiper(".home-slider", {
//     effect: "coverflow",
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: "auto",
//     coverflowEffect: {
//       rotate: 0,
//       stretch: 0,
//       depth: 100,
//       modifier: 2,
//       slideShadows: true,
//     },
//     loop: true,
//     autoplay: {
//       delay: 1000,
//       disableOnInteraction: false,
//     },
    
//   });



let menBtn=document.getElementById('menBtn');
menBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    window.location.href=".././Mens/men.html";
})

let womenBtn=document.getElementById('womenBtn');
womenBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    window.location.href=".././Womens/men.html";
})

let kidBtn=document.getElementById('kidBtn');
kidBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    window.location.href=".././Kids/men.html";
})

let accessBtn=document.getElementById('accessBtn');
accessBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    window.location.href=".././Accessories/access.html";
})