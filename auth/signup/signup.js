// Show Signup Modal
document.getElementById('signupBtn').addEventListener('click', () => {
    const signupModal = new bootstrap.Modal(document.getElementById('signupModal'));
    signupModal.show();
  });
  
  // Save Signup Data to localStorage
  document.getElementById('signupSubmit').addEventListener('click', () => {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
  
    if (username && password) {
      localStorage.setItem('signupData', JSON.stringify({ username, password }));
      alert('Sign Up Successful!');
      document.getElementById('signupForm').reset();
      bootstrap.Modal.getInstance(document.getElementById('signupModal')).hide();
    }
  });
  