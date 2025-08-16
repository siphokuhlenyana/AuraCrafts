const form = document.getElementById("adminLoginForm");
const errorMsg = document.getElementById("loginError");

// Hardcoded credentials (can be replaced with backend later)
const ADMIN_CREDENTIALS = {
  username: "Admin",
  password: "admin"
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("adminUsername").value;
  const password = document.getElementById("adminPassword").value;

  if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
    localStorage.setItem("isAdminLoggedIn", "true");
    window.location.href = "admin.html";
  } else {
    errorMsg.textContent = "Invalid credentials. Try again.";
  }
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("adminLoginForm");
    const errorMsg = document.getElementById("loginError");
  
    const ADMIN_HASH = "e3e1e8e6a3b6b4c2c3c9f4f2c1d3e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2";
  
    async function hashPassword(password) {
      const encoder = new TextEncoder();
      const data = encoder.encode(password);
      const hashBuffer = await crypto.subtle.digest("SHA-256", data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
    }
  
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const username = document.getElementById("adminUsername").value;
      const password = document.getElementById("adminPassword").value;
  
      const hashedInput = await hashPassword(password);
  
      if (username === "admin" && hashedInput === ADMIN_HASH) {
        localStorage.setItem("isAdminLoggedIn", "true");
        localStorage.setItem("loginTimestamp", Date.now().toString());
        window.location.href = "admin.html";
      } else {
        errorMsg.textContent = "Invalid credentials. Try again.";
      }
    });
  });
  