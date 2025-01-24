// Load modals dynamically
document.addEventListener('DOMContentLoaded', () => {
    // Load Signup Modal
    fetch('auth/signup/signup.html')
      .then((response) => response.text())
      .then((data) => {
        document.body.insertAdjacentHTML('beforeend', data);
        const signupScript = document.createElement('script');
        signupScript.src = 'auth/signup/signup.js';
        document.body.appendChild(signupScript);
      });
  
    // Load Login Modal
    fetch('auth/login/login.html')
      .then((response) => response.text())
      .then((data) => {
        document.body.insertAdjacentHTML('beforeend', data);
        const loginScript = document.createElement('script');
        loginScript.src = 'auth/login/login.js';
        document.body.appendChild(loginScript);
      });
  });
  