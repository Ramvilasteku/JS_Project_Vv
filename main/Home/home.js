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



let exnBtn=document.getElementById('exMenBtn');
exMenBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    window.location.href=".././Mens/men.html";
})


let exWomenBtn=document.getElementById('exWomenBtn');
exWomenBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    window.location.href=".././Womens/women.html";
})



let exKidBtn=document.getElementById('exKidBtn');
exKidBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    window.location.href=".././Kids/kid.html";
})



let exAccessBtn=document.getElementById('exAccessBtn');
exAccessBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    window.location.href=".././Accessories/access.html";
})

