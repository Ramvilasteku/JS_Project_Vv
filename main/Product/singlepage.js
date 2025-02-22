
let menBtn=document.getElementById('menBtn');
menBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    window.location.href=".././Mens/men.html";
})

let womenBtn=document.getElementById('womenBtn');
womenBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    window.location.href=".././Womens/women.html";
})

let kidBtn=document.getElementById('kidBtn');
kidBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    window.location.href=".././Kids/kid.html";
})


let accessBtn=document.getElementById('accessBtn');
accessBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    window.location.href=".././Accessories/access.html";
})


let singleCard = document.getElementById('singlecard')



let singleP = JSON.parse(localStorage.getItem("singleP"));
let card1 = document.createElement("div");
card1.className = "singleCardDiv"
card1.innerHTML = `

<img src=${singleP.image} alt="image" width="300" class="img"/>
<div id='singleCardData'>

         <p id='singleTitle'>${singleP.title}</p>
         <p id='singledes'>${singleP.description}</p>
         <span id='singleRuppe'>
         <i class="fa fa-rupee"></i>
          ${singleP.price}
          </span>
          <div id='add-Buy-Btn'>
          <button id="singleBuyNow">Buy Now</button>
</div>  
`;
singleCard.append(card1);

card1.querySelector("#singleBuyNow").addEventListener("click", (e) => {
  e.stopPropagation();
  location.href = "../../main/CheckOut/checkout.html"
});