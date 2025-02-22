document.addEventListener("DOMContentLoaded", function () {
    const checkoutForm = document.getElementById("checkoutForm");
    const paymentMethods = document.querySelectorAll('input[name="payment"]');
    const cardDetails = document.getElementById("cardDetails");

    // Toggle card details based on selected payment method
    paymentMethods.forEach(method => {
        method.addEventListener("change", function () {
            if (this.value === "cod") {
                cardDetails.style.display = "none";
            } else {
                cardDetails.style.display = "block";
            }
        });
    });

    // Live formatting for card number
    document.getElementById("card").addEventListener("input", function (event) {
        let value = event.target.value.replace(/\D/g, ""); // Remove non-digits
        value = value.replace(/(.{4})/g, "$1 ").trim(); // Add space every 4 digits
        event.target.value = value;
    });

    // Live formatting for expiry date
    document.getElementById("expiry").addEventListener("input", function (event) {
        let value = event.target.value.replace(/\D/g, ""); // Remove non-digits
        if (value.length > 2) {
            value = value.slice(0, 2) + "/" + value.slice(2, 4); // Add slash after MM
        }
        event.target.value = value;
    });

    // Form validation
    checkoutForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let address = document.getElementById("address").value.trim();
        let selectedPayment = document.querySelector('input[name="payment"]:checked').value;

        if (!name || !email || !address) {
            Swal.fire({
                icon: "error",
                title: "Please fill in all required fields!",
              });            
              return;
        }

        // If credit card payment is selected, validate card details
        if (selectedPayment === "card") {
            let card = document.getElementById("card").value.replace(/\s/g, ""); // Remove spaces
            let expiry = document.getElementById("expiry").value.trim();
            let cvv = document.getElementById("cvv").value.trim();

            if (card.length !== 16 || isNaN(card)) {
                Swal.fire({
                    icon: "error",
                    title: "Invalid card number. Must be 16 digits!",
                  });
                return;
            }
            if (cvv.length !== 3 || isNaN(cvv)) {

                Swal.fire({
                    icon: "error",
                    title: "Invalid CVV. Must be 3 digits!",
                  });
                return;
            }
            Swal.fire({
                title: "Order placed successfully with Credit Card!",
                icon: "success",
                confirmButtonText: "Back to Home",
                showButton: true
            }).then((result) => {
                if (result.isConfirmed) {
                    location.href = "../../main/Home/home.html"

                }
            })
            
        } else {
            Swal.fire({
                title: "Order placed successfully with Cash on Delivery!",
                confirmButtonText: "Back to Home",
                showButton: true,
                icon: "success",
            }).then((result) => {
                if (result.isConfirmed) {
                    location.href = "../../main/Home/home.html"

                }
            })

        }
    });

    
});
