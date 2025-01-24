document.addEventListener("DOMContentLoaded", function () {
    document.body.addEventListener("click", function (event) {
        if (event.target.id === "loginSubmit") {
            const username = document.getElementById("login-username").value;
            const password = document.getElementById("login-password").value;

            const signupData = JSON.parse(localStorage.getItem("signupData"));

            if (signupData && signupData.username === username && signupData.password === password) {
                alert("Login Successful!");
                document.getElementById("loginForm").reset();
                const loginModal = bootstrap.Modal.getInstance(document.getElementById("loginModal"));
                loginModal.hide();
            } else {
                alert("Invalid credentials. Please try again.");
            }
        }
    });
});
