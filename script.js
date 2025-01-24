// import { signup1 } from "./Authentication/SingUp/signup";


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
        async function submit() {
            
            let Signup = await fetch("./Authentication/SingUp/signup.js")
            console.log(Signup);
            
        }
        submit()

});

