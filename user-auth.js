document.addEventListener("DOMContentLoaded", () => {
    const showLoginBtn = document.getElementById("showLogin");
    const showRegisterBtn = document.getElementById("showRegister");
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
  
    showLoginBtn.addEventListener("click", () => {
      loginForm.classList.remove("hidden");
      registerForm.classList.add("hidden");
    });
  
    showRegisterBtn.addEventListener("click", () => {
      registerForm.classList.remove("hidden");
      loginForm.classList.add("hidden");
    });
  
    // Register
    document.getElementById("registerForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("registerName").value;
      const email = document.getElementById("registerEmail").value;
      const password = document.getElementById("registerPassword").value;
  
      const userData = { name, email, password };
      localStorage.setItem("userData", JSON.stringify(userData));
      alert("Registration successful! You can now log in.");
      registerForm.reset();
      showLoginBtn.click();
    });
  
    // Login
    document.getElementById("loginForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;
      const storedUser = JSON.parse(localStorage.getItem("userData"));
  
      if (storedUser && storedUser.email === email && storedUser.password === password) {
        localStorage.setItem("isUserLoggedIn", "true");
        window.location.href = "shop.html"; // or profile.html
      } else {
        document.getElementById("loginError").textContent = "Invalid email or password.";
      }
    });
  });
  