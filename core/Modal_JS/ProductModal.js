console.log("✅ ProductModal.js loaded");
window.addToCart = addToCart;


// state
let quantity = 1;
let mood = "cold";
let size = "M";
let sugar = "50%";

// change these prices if needed
const sizePrices = { S: 39, M: 69, L: 99 };

function openProductModal(name, imageSrc, description) {
  document.getElementById("modalTitle").textContent = name.toUpperCase();
  document.getElementById("modalDesc").textContent = description;
  document.getElementById("modalImage").src = imageSrc;

  // reset state
  quantity = 1;
  mood = "cold";
  size = "M";
  sugar = "50%";

  document.getElementById("qty").textContent = quantity;
  document.getElementById("modalPrice").textContent = "₱" + sizePrices[size];

  paintMood();
  paintSize();
  paintSugar();

  const modal = document.getElementById("productModal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}


function closeProductModal() {
  const modal = document.getElementById("productModal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

function changeQty(amount) {
  quantity = Math.max(1, quantity + amount);
  document.getElementById("qty").textContent = quantity;
}

function setMood(v) {
  mood = v;
  paintMood();
}

function setSize(v) {
  size = v;
  document.getElementById("modalPrice").textContent = "₱" + sizePrices[size];
  paintSize();
}

function setSugar(v) {
  sugar = v;
  paintSugar();
}

// active outline like screenshot
function setActive(btn, on) {
  btn.classList.toggle("border-gray-800", on);
  btn.classList.toggle("border-transparent", !on);
}

function paintMood() {
  setActive(document.getElementById("moodHot"), mood === "hot");
  setActive(document.getElementById("moodCold"), mood === "cold");
}

function paintSize() {
  setActive(document.getElementById("sizeS"), size === "S");
  setActive(document.getElementById("sizeM"), size === "M");
  setActive(document.getElementById("sizeL"), size === "L");
}

function paintSugar() {
  setActive(document.getElementById("sugar25"), sugar === "25%");
  setActive(document.getElementById("sugar50"), sugar === "50%");
  setActive(document.getElementById("sugar75"), sugar === "75%");
}

function addToCart() {
  const productName = document.getElementById("modalTitle").textContent.trim();
  const imgSrc = document.getElementById("modalImage").getAttribute("src");

  const sizeText = size === "S" ? "Small" : size === "M" ? "Medium" : "Large";
  const moodText = mood === "hot" ? "Hot" : "Iced";
  const subtitle = `${sizeText} | ${moodText} | ${sugar}`;

  const pricePerItem = sizePrices[size];
  const lineTotal = pricePerItem * quantity;

  const orderItems = document.getElementById("orderItems");
  orderItems.innerHTML = `
  <div class="flex items-center justify-between px-6 py-5 bg-white border-b">

    <!-- LEFT -->
    <div class="flex items-center gap-5">
      <!-- Image -->
      <div class="w-20 h-20 rounded-2xl bg-gray-50 flex items-center justify-center overflow-hidden">
        <img src="${imgSrc}" class="w-16 h-16 object-contain" alt="${productName}">
      </div>

      <!-- Info -->
      <div class="leading-tight">
        <div class="text-base font-extrabold uppercase">
          ${productName}
        </div>

        <div class="mt-1 text-xs text-gray-400">
          ${subtitle}
        </div>

        <div class="mt-2 text-sm font-bold">
          x${quantity}
        </div>
      </div>
    </div>

    <!-- RIGHT -->
    <div class="text-sm font-extrabold text-gray-800 whitespace-nowrap">
      TOTAL: ₱${lineTotal.toFixed(2)}
    </div>

  </div>
`;


  document.getElementById("orderTotalText").textContent = `₱${lineTotal.toFixed(2)}`;
  document.getElementById("orderTotalBox").textContent = `₱${lineTotal.toFixed(2)}`;

  const checkoutBtn = document.getElementById("checkoutBtn");
  checkoutBtn.disabled = false;
  checkoutBtn.className =
    "h-14 rounded-2xl bg-black text-white font-semibold tracking-wide shadow transition-all duration-200 hover:bg-white hover:text-black hover:border hover:border-black";

  closeProductModal();
}


