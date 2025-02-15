// API calling

const apiURL = 'https://api-data-ggsb.onrender.com/Accessories'

let allData = document.getElementById("data");

let btn = document.getElementById("btn");
let Footwear = document.getElementById('Footwear');
let Jewellery = document.getElementById('Jewellery');
let Stoles = document.getElementById('Stoles');
btn.addEventListener("", getData());

Footwear.addEventListener("click", () => getData("Footwear"));
Jewellery.addEventListener("click", () => getData("Jewellery"));
Stoles.addEventListener("click", () => getData("Stoles"));




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
             <button id="addCart"><i class="fa fa-shopping-bag"></i></button>
             <button id="buyNow">BuyNow</button>
             </span>
             <div id='card-btn'>
             </div>
             </div>
             `;
      allData.append(card);

      card.addEventListener("click", () => {
        location.href = "./clearCode/singlePage.html";
        localStorage.setItem("singleP", JSON.stringify(x));
      });
      card.querySelector("#addCart").addEventListener("click", (e) => {
        e.stopPropagation();
        alert("item added to cart");
        Swal.fire('Good job!', 'item added to the cart!', 'success');
        Swal.fire({
          title: "This item added to cart",
          text: "you can see item in cart page",
          imageUrl: `${x.image}`,
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: ""
        });

        let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        cartItems.push(x);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
      });
      card.querySelector("#buyNow").addEventListener("click", (e) => {
        e.stopPropagation();
        let timerInterval;
        Swal.fire({
          title: "Redirecting to cart page",
          html: "I will navigate in <b></b> milliseconds.",
          timer: 1000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
              timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          }
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
            location.href = "./clearCode/cartItems.html"
          }
        });

      });
    });
  }
}
getData();
