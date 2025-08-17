const products = [
    { name: "Rings Set", price: "R2490.99", category: "rings", img: "https://siphokuhlenyana.github.io/AuraCrafts/temp_image_55551F70-7191-4EBD-858A-CD641EB99DCA.webp" },
    { name: "Cyan Blue ", price: "R269.99", category: "waist", img: "https://siphokuhlenyana.github.io/AuraCrafts/temp_image_2AFCC692-6840-4962-AAE0-D09AFBE1E23A.webp" },
    { name: "Oroko", price: "R499.99", category: "necklaces", img: "https://siphokuhlenyana.github.io/AuraCrafts/temp_image_3E94F308-C98C-42FE-8183-2CF862A2B4A3.webp" },
    { name: "Evil Eye", price: "R499.99", category: "necklaces", img: "https://siphokuhlenyana.github.io/AuraCrafts/temp_image_43D611D4-E419-4B95-A371-D45FD0AD1C00.webp" },
    { name: "Balancio", price: "R320.99", category: "necklaces", img: "https://siphokuhlenyana.github.io/AuraCrafts/temp_image_60E2205A-E7BD-4819-90F6-F5540729A81E.webp" },
   
    { name: "Zazi", price: "R749.99", category: "necklaces", img: "https://siphokuhlenyana.github.io/AuraCrafts/temp_image_FF101219-9042-4FA3-9122-6B9175492E9A.webp" },

     { name: "Isacholo", price: "R249.99", category: "wrist", img: "https://siphokuhlenyana.github.io/AuraCrafts/temp_image_FC27A90A-675C-4AF1-B935-271743B3000F.webp" },
     { name: "Crowdy", price: "R2499.99", category: "necklaces", img: "https://siphokuhlenyana.github.io/AuraCrafts/temp_image_E3FCCD17-8A08-4FE8-B518-40AF685CFE23.webp" },
     { name: "Eva", price: "R449.99", category: "earings", img: "https://siphokuhlenyana.github.io/AuraCrafts/temp_image_CEA21D35-C0AB-455E-AB24-6465AA87F116.webp" },
      { name: "FistCo", price: "R3349.99", category: "rings", img: "https://siphokuhlenyana.github.io/AuraCrafts/temp_image_C6BCA3B8-C281-4074-9E7A-CB03F7549FF4.webp" },
      { name: "Mandlakazi", price: "R6249.99", category: "wrist", img: "https://siphokuhlenyana.github.io/AuraCrafts/temp_image_BF33BFD8-A6F7-43A0-810F-5867F797FEBA.webp" },

      { name: "Wrist Shore", price: "R6249.99", category: "wrist", img: "https://siphokuhlenyana.github.io/AuraCrafts/temp_image_B97E61B1-E519-4F1D-A801-A4486A4CADC3.webp" },
      { name: "Mbali", price: "R1249.99", category: "rings", img: "https://siphokuhlenyana.github.io/AuraCrafts/temp_image_B6DF0994-04EE-464D-A9BF-6B7BE00DEF40.webp" },
      { name: "Rose Quatz", price: "R849.99", category: "wrist", img: "https://siphokuhlenyana.github.io/AuraCrafts/temp_image_B3F3EA23-549B-4ABA-8B06-32C9B0392BD8.webp" },
        { name: "Oshun Ring", price: "R749.99", category: "rings", img: "https://siphokuhlenyana.github.io/AuraCrafts/temp_image_AF26B45C-2B65-4458-92B4-7F1D8998BD8D.webp" },
        { name: "Grounding You", price: "R749.99", category: "wrist", img: "https://siphokuhlenyana.github.io/AuraCrafts/temp_image_BF33BFD8-A6F7-43A0-810F-5867F797FEBA.webp" },
        { name: "Mueté", price: "R949.99", category: "wrist", img: "https://siphokuhlenyana.github.io/AuraCrafts/temp_image_8973EE3E-484B-48A1-97D1-5E6A0598682D.webp" },

        { name: "Alphonseen", price: "R1049.99", category: "neckalaces", img: "https://siphokuhlenyana.github.io/AuraCrafts/temp_image_75F9554B-6CAE-4D3A-8079-B31C755FFA5C.webp" },
        { name: "Godessa", price: "R3999.99", category: "rings", img: "https://siphokuhlenyana.github.io/AuraCrafts/temp_image_6E54EFB8-77F6-431F-8ED8-D9299818BFB3.webp" },
        
        
  ];
  
  const grid = document.getElementById("productGrid");
  const filterButtons = document.querySelectorAll(".filters button");
  // ✅ Keep only this one
function renderProducts(category = "all") {
  grid.innerHTML = "";
  const filtered = category === "all" ? products : products.filter(p => p.category === category);
  filtered.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.img}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <button><img src="https://siphokuhlenyana.github.io/AuraCrafts/shopping-bag.png"></button>
    `;
    card.addEventListener("click", () => openModal(product));
    const btn = card.querySelector("button");
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      addToCart(product);
    });
    grid.appendChild(card);
  });
}

renderProducts();
  const modal = document.getElementById("productModal");
const modalImg = document.getElementById("modalImg");
const modalName = document.getElementById("modalName");
const modalPrice = document.getElementById("modalPrice");
const modalDesc = document.getElementById("modalDesc");
const modalAddBtn = document.getElementById("modalAddBtn");
const closeBtn = document.querySelector(".close-btn");

function openModal(product) {
  modalImg.src = product.img;
  modalName.textContent = product.name;
  modalPrice.textContent = product.price;
  modalDesc.textContent = "This is a beautiful item that complements your style."; // You can customize this
  modal.classList.remove("hidden");
}

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});

let currentProduct = null;

function openModal(product) {
  currentProduct = product;
  modalImg.src = product.img;
  modalName.textContent = product.name;
  modalPrice.textContent = product.price;
  modalDesc.textContent = "This is a beautiful item that complements your style.";
  modal.classList.remove("hidden");
}


modalAddBtn.addEventListener("click", () => {
  alert("Product added to cart!");
  addToCart(currentProduct);
  modal.classList.add("hidden");
});

let cart = [];

function addToCart(product) {
  cart.push(product);
  alert(`${product.name} added to cart!`);
}

document.querySelectorAll('.product-card button').forEach((btn, index) => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent modal from opening
    addToCart(products[index]);
  });
});
const cartIcon = document.getElementById("openCartBtn") // First icon = cart
const cartModal = document.getElementById("cartModal");
const cartItemsDiv = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const closeCart = document.getElementById("closeCart");

cartIcon.addEventListener("click", () => {
  renderCart();
  cartModal.classList.remove("hidden");
});

closeCart.addEventListener("click", () => {
  cartModal.classList.add("hidden");
});

function renderCart() {
  cartItemsDiv.innerHTML = "";
  let total = 0;
  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <span>${item.name}</span>
      <span>${item.price}</span>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartItemsDiv.appendChild(div);
    total += parseFloat(item.price.replace("R", ""));
  });
  cartTotal.textContent = `Total: R${total.toFixed(2)}`;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

const checkoutBtn = document.getElementById("checkoutBtn");
const checkoutModal = document.getElementById("checkoutModal");
const closeCheckout = document.getElementById("closeCheckout");
const checkoutForm = document.getElementById("checkoutForm");

checkoutBtn.addEventListener("click", () => {
  cartModal.classList.add("hidden");
  checkoutModal.classList.remove("hidden");
});

closeCheckout.addEventListener("click", () => {
  checkoutModal.classList.add("hidden");
});

checkoutForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Order placed successfully!");
  cart = [];
  checkoutModal.classList.add("hidden");
});

checkoutForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const history = JSON.parse(localStorage.getItem("orderHistory")) || [];
    const newOrder = {
      date: new Date().toLocaleDateString(),
      status: "Processing",
      items: [...cart]
    };
    history.push(newOrder);
    localStorage.setItem("orderHistory", JSON.stringify(history));
    alert("Order placed successfully!");
    cart = [];
    checkoutModal.classList.add("hidden");
  });
  


  
  