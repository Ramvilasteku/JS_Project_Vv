   // Load modal content dynamically
   document.addEventListener("DOMContentLoaded", function () {
    // Load the Signup Modal
    fetch("./Authentication/SingUp/signup.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("modalContainer").insertAdjacentHTML("beforeend", html);
        });

    // Load the Login Modal
    fetch("./Authentication/Login/login.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("modalContainer").insertAdjacentHTML("beforeend", html);
        });
});