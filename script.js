// script.js
document.querySelectorAll('.product-card button').forEach(btn => {
    btn.addEventListener('click', () => {
      alert('Added to cart!');
    });
  });

  document.getElementById("continueShopping").addEventListener("click", () => {
    window.location.href = "shop.html#cartModal";
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    const profileIcon = document.getElementById("goToProfile");
    if (profileIcon) {
      profileIcon.addEventListener("click", () => {
        window.location.href = "profile.html";
      });
    }
  });
  
  
  