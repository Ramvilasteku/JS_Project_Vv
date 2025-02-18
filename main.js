import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCAzIRmxl1OQ3TGOlXfxy6JPufnvDr6Okg",
  authDomain: "vastra-vilas.firebaseapp.com",
  projectId: "vastra-vilas",
  storageBucket: "vastra-vilas.firebasestorage.app",
  messagingSenderId: "429952723766",
  appId: "1:429952723766:web:1779054f5b388c83536197"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const author = getAuth(app)




let signUpBtn = document.getElementById("signUpBtn");

signUpBtn.addEventListener("click", (e) => {
  e.preventDefault
  // let signUpModal =document.getElementById("signUpModal")
  // console.log(signUpModal);

  let signUpModal = new bootstrap.Modal(document.getElementById("signUpModal"));
  signUpModal.show()

  let signupMbtn = document.getElementById("signupMbtn");
  signupMbtn.addEventListener('click', async () => {

    let signUpName = document.getElementById('signUpName').value.trim();
    let signUpEmail = document.getElementById('signUpEmail').value.trim();
    let signUpPassword = document.getElementById('signUpPassword').value.trim();
    let signUpCpassword = document.getElementById('signUpCpassword').value.trim();

    if (signUpEmail === "" || signUpName === "" || signUpPassword === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "enter all fields",
      }).then(() => {
        signUpModal.show()
      })
      return;
    }


    try {
      await createUserWithEmailAndPassword(author, signUpEmail, signUpPassword).then(() => {
        Swal.fire({
          title: "registered successfully!",
          icon: "success",
        }).then(() => {
          document.getElementById("signUpName").textContent = ""
          document.getElementById("signUpEmail").textContent = ""
          document.getElementById("signUpPassword").textContent = ""
          document.getElementById("signUpCpassword").textContent = ""
          location.href = "./main/home.html"
        })
      })
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err,
      })
    }
  })

})

//  Login Modle functionality

let loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener("click", (e) => {
  e.preventDefault()

  let loginModal = new bootstrap.Modal(document.getElementById('loginModal'))
  loginModal.show()

  let MloginBtn = document.getElementById('MloginBtn')

  MloginBtn.addEventListener("click", async() => {

    let loginEmail = document.getElementById('loginEmail').value.trim();
    let loginPassword = document.getElementById('loginPassword').value.trim();

    if (loginEmail === "" || loginPassword === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "enter all fields",
      }).then(() => {
        loginModal.show()
      })
      return;
    }

    try {
      await signInWithEmailAndPassword(author, loginEmail, loginPassword).then(() => {
        Swal.fire({
          title: "logged successfully!",
          icon: "success",
        }).then(() => {
          document.getElementById("loginEmail").textContent = ""
          document.getElementById("loginPassword").textContent = ""
          location.href = "./main/Home/home.html"
        })
      })


    }
    catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err,
      })
    }

  })
})

let skipBtn = document.getElementById('skipbtn')

skipBtn.addEventListener('click',(e)=>{
  e.preventDefault

  location.href='./main/Home/home.html'
})




