const userInfoDiv = document.getElementById("userInfo");
const userData = JSON.parse(localStorage.getItem("userData")) || {};
const profilePic = localStorage.getItem("profilePic");

userInfoDiv.innerHTML = `
  <img src="${profilePic || 'https://via.placeholder.com/100'}" alt="Profile" style="width:100px;border-radius:50%;" />
  <p><strong>Name:</strong> ${userData.name || 'N/A'}</p>
  <p><strong>Email:</strong> ${userData.email || 'N/A'}</p>
`;
const orderListDiv = document.getElementById("orderList");
let orderHistory = JSON.parse(localStorage.getItem("orderHistory")) || [];

function renderOrders() {
  orderListDiv.innerHTML = "";
  orderHistory.forEach((order, index) => {
    const div = document.createElement("div");
    div.className = "order-card";
    div.innerHTML = `
      <h3>Order #${index + 1}</h3>
      <p><strong>Date:</strong> ${order.date}</p>
      <p><strongStatus:</strong> 
        <select data-index="${index}">
          <option value="Processing" ${order.status === "Processing" ? "selected" : ""}>Processing</option>
          <option value="Shipped" ${order.status === "Shipped" ? "selected" : ""}>Shipped</option>
          <option value="Delivered" ${order.status === "Delivered" ? "selected" : ""}>Delivered</option>
        </select>
      </p>
      <ul>
        ${order.items.map(item => `<li>${item.name} - ${item.price}</li>`).join("")}
      </ul>
    `;
    orderListDiv.appendChild(div);
  });

  document.querySelectorAll("select").forEach(select => {
    select.addEventListener("change", (e) => {
      const i = e.target.dataset.index;
      orderHistory[i].status = e.target.value;
      localStorage.setItem("orderHistory", JSON.stringify(orderHistory));
      alert(`Order #${parseInt(i)+1} status updated to ${e.target.value}`);
    });
  });
}

renderOrders();

if (localStorage.getItem("isAdminLoggedIn") !== "true") {
    window.location.href = "admin-login.html";
  }

  function logoutAdmin() {
    localStorage.removeItem("isAdminLoggedIn");
    window.location.href = "admin-login.html";
  }

  // Redirect if not logged in
if (localStorage.getItem("isAdminLoggedIn") !== "true") {
    window.location.href = "admin-login.html";
  }
  
  // Session timeout (30 minutes)
  const loginTime = parseInt(localStorage.getItem("loginTimestamp"));
  const now = Date.now();
  const THIRTY_MINUTES = 30 * 60 * 1000;
  
  if (now - loginTime > THIRTY_MINUTES) {
    alert("Session expired. Please log in again.");
    localStorage.removeItem("isAdminLoggedIn");
    localStorage.removeItem("loginTimestamp");
    window.location.href = "admin-login.html";
  }
  
  
  
