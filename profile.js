const userForm = document.getElementById("userForm");
const userNameInput = document.getElementById("userName");
const userEmailInput = document.getElementById("userEmail");
const ordersDiv = document.getElementById("orders");

// Load user info
const userData = JSON.parse(localStorage.getItem("userData")) || {};
userNameInput.value = userData.name || "";
userEmailInput.value = userData.email || "";

// Save user info
userForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = userNameInput.value;
  const email = userEmailInput.value;
  localStorage.setItem("userData", JSON.stringify({ name, email }));
  alert("User info saved!");
});

// Load order history
const orderHistory = JSON.parse(localStorage.getItem("orderHistory")) || [];

function renderOrders() {
  ordersDiv.innerHTML = "";
  if (orderHistory.length === 0) {
    ordersDiv.innerHTML = "<p>No orders yet.</p>";
    return;
  }

  orderHistory.forEach((order, index) => {
    const div = document.createElement("div");
    div.className = "order-item";
    div.innerHTML = `
      <h3>Order #${index + 1}</h3>
      <ul>
        ${order.map(item => `<li>${item.name} - ${item.price}</li>`).join("")}
      </ul>
    `;
    ordersDiv.appendChild(div);
  });
}

renderOrders();

checkoutForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const history = JSON.parse(localStorage.getItem("orderHistory")) || [];
    history.push([...cart]); // Save current cart
    localStorage.setItem("orderHistory", JSON.stringify(history));
    alert("Order placed successfully!");
    cart = [];
    checkoutModal.classList.add("hidden");
  });
  
  const profilePicInput = document.getElementById("profilePicInput");
const profilePreview = document.getElementById("profilePreview");

// Load profile image
const savedPic = localStorage.getItem("profilePic");
if (savedPic) profilePreview.src = savedPic;

// Save new image
profilePicInput.addEventListener("change", () => {
  const file = profilePicInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      profilePreview.src = reader.result;
      localStorage.setItem("profilePic", reader.result);
    };
    reader.readAsDataURL(file);
  }
});

function renderOrders() {
    ordersDiv.innerHTML = "";
    if (orderHistory.length === 0) {
      ordersDiv.innerHTML = "<p>No orders yet.</p>";
      return;
    }
  
    orderHistory.forEach((order, index) => {
      const div = document.createElement("div");
      div.className = "order-item";
      div.innerHTML = `
        <h3>Order #${index + 1}</h3>
        <div class="order-meta">📅 ${order.date} | 📦 Status: ${order.status}</div>
        <ul>
          ${order.items.map(item => `<li>${item.name} - ${item.price}</li>`).join("")}
        </ul>
      `;
      ordersDiv.appendChild(div);
    });
  }
  

