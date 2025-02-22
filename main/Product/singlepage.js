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
document.body.append(card1);

card1.querySelector("#singleBuyNow").addEventListener("click", (e) => {
  e.stopPropagation();
  location.href = "../../main/CheckOut/checkout.html"
});