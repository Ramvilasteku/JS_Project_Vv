let buyNow = document.getElementById("buyNow");

buyNow.addEventListener("click", (e) => {
  e.preventDefault();
  location.href = "../../main/CheckOut/checkout.html";
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
    card.className = "card";
    card.classList.add("cartCard");
    card.innerHTML = `
  <div id="container">
    <table width="100%">
        <tr>
            <th><img src=${x.image} alt="image" class="img"/></th>
            <th><p>${x.title}</p></th>
               <th ><span id='cartRuppe'><i class="fa fa-rupee"></i>
           ${x.price}</span></th>
    
            <th>
            <div id='add-remove-btn'> 
            <button id="dec"><i class="fa fa-minus"></i></button>
            <button id="count">${x.count}</button>
            <button id="inc"><i class="fa fa-plus"></i></button>
            </div>
            </th>
            <th> <button id="remove">Remove</button></th>
        </tr>
    </table>
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
      "itemsCount"
    ).textContent = `total items:-- ${totalItems}`;
    document.getElementById(
      "itemsCost"
    ).textContent = `total cost:-- ${totalCost}`;
  }
  updates();
});
