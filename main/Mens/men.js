

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





    
// API calling

const apiURL = 'https://api-data-ggsb.onrender.com/Mens'

let allData = document.getElementById("data");

// let allProduct = document.getElementById('btn');
// let Footwear = document.getElementById('Angarkhas-Bandhgalas');
// let Jewellery = document.getElementById('Dhotis');
// let Stoles = document.getElementById('Kurta-Pajama');
// let Sherwanis = document.getElementById('Sherwanis');

// Footwear.addEventListener("click", () => getData("Angarkhas-Bandhgalas"));
// Jewellery.addEventListener("click", () => getData("Dhotis"));
// Stoles.addEventListener("click", () => getData("Kurta-Pajama"));
// Sherwanis.addEventListener("click", () => getData("Sherwanis"));
// allProduct.addEventListener("click", ()=>getData(""))



async function getData(category = null) {
  const data = await fetch(apiURL);
  const res = await data.json();

  allData.innerHTML = "";

  const filteredData = category ? res.filter((x) => x.category === category) : res;

  if (filteredData == 0) {
    allData.innerHTML = "no data found";
  } else {
    filteredData.filter((x) => {
      let card = document.createElement("div");
      
      card.className = "card1";
      card.innerHTML = `

             <img src=${x.image} alt="image" width="300" class="img"/>
             <div id='main-card'>
             <p>${x.title}</p>
             <span id='p-icon'>
             <i class="fa fa-rupee"></i>
             ${x.price}
             </span>
             <div id='a-b-btn'>
             <button id="buyNow">BuyNow</button>
             <button id="addCart"><i class="fa fa-shopping-bag"></i></button>
             </span>
             </div>
             `;
      allData.append(card);

      card.addEventListener("click", () => {
        location.href = "../../main/Product/singlepage.html";
        localStorage.setItem("singleP", JSON.stringify(x));
      });
      card.querySelector("#addCart").addEventListener("click", (e) => {
        e.stopPropagation();
        // Swal.fire('Good job!', 'item added to the cart!', 'success');
        Swal.fire({
          title: `${x.title}`,
          text: `${x.price}`,
          imageUrl: `${x.image}`,
          imageWidth: 200,
          imageHeight: 200,
          imageAlt: ""
        });

        let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        cartItems.push(x);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
      });

    });
  }
}
getData();
