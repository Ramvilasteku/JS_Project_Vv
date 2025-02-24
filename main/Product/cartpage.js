
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




let buyNow = document.getElementById("buyNow");

buyNow.addEventListener("click", (e) => {
  e.preventDefault();
  location.href = "../../main/CheckOut/checkoutCart.html";
});

let allData = document.getElementById("container");
document.addEventListener("DOMContentLoaded", () => {
  let allItems = JSON.parse(localStorage.getItem("cartItems"));

  let totalItems = 0;
  let totalCost = 0;

  allItems = allItems.map((x) => ({
    ...x,
    count: x.count || 1,
  }));
  allItems.forEach((x, index) => {
    let card = document.createElement("div");
    // card.className = "card";
    card.classList.add("card1");
    card.innerHTML = `

     <img src=${x.image} alt="image" width="300" class="img"/>
             <div id='main-card'>
             <p>${x.title}</p>
             <div id='p-icon'>
             <i class="fa fa-rupee"></i>
             ${x.price}
             </div>
             <div id='add-remove-btn'> 
            <button id="dec"><i class="fa fa-minus"></i></button>
            <button id="count">${x.count}</button>
            <button id="inc"><i class="fa fa-plus"></i></button>
            <button id="remove">Remove</button>
            </div>
            </div>
    

  
     `;
    allData.append(card);
    card.querySelector("#remove").addEventListener("click", () => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          allData.removeChild(card);
          allItems.splice(index, 1);
          localStorage.setItem("cartItems", JSON.stringify(allItems));
          updates();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });

      // const c = confirm("are you sure to delete?");
      // if (c) {
      //   allData.removeChild(card);
      //   allItems.splice(index, 1);
      //   localStorage.setItem("cartItems", JSON.stringify(allItems));
      //   updates()
      // }
    });
    const countValue = card.querySelector("#count");
    card.querySelector("#inc").addEventListener("click", () => {
      x.count++;
      countValue.textContent = x.count;
      localStorage.setItem("cartItems", JSON.stringify(allItems));
      updates();
    });
    card.querySelector("#dec").addEventListener("click", () => {
      if (x.count > 1) {
        x.count--;
        countValue.textContent = x.count;
        localStorage.setItem("cartItems", JSON.stringify(allItems));
      }
      updates();
    });
  });

  function updates() {
    totalItems = 0;
    totalCost = 0;
    allItems.forEach((x) => {
      totalItems += x.count;
      totalCost += x.count * x.price;
    });
    document.getElementById(
      "proCount"
    ).textContent = `total items:-- ${totalItems}`;
    document.getElementById(
      "proCost"
    ).textContent = `total cost:-- ${totalCost}`;
  }
  updates();
});
