let signup1 = document.getElementById("signUp")

signup1.addEventListener("submit",(event)=> {
    event.preventDefault()

    let name=document.getElementById("name").value.trim();
    let email=document.getElementById("email").value.trim();
    let password=document.getElementById("password").value.trim()
    let comfirmpassword=document.getElementById("confirmpassword").value.trim()
    
    
    
    const signup = {
        name : name,
        email:email,
        password:password,
        confirmpassword:comfirmpassword
    }
    
    localStorage.setItem("SignupData",JSON.stringify(signup))

    let data =JSON.parse(localStorage.getItem("SignupData"))

    console.log(data);


})

// export {signup1}; 