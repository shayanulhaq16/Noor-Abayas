// ===== PAGE NAVIGATION =====
// When the link changes (#shop, #cart...), show that section
function route() {
  let pageName = location.hash.replace("#", "") || "home";
  const exists = document.getElementById(pageName);
  if (!exists || !exists.classList.contains("page")) pageName = "home";

  document.querySelectorAll(".page").forEach((p) => {
    p.classList.toggle("active", p.id === pageName);
  });
  document.querySelectorAll(".nav a[data-page]").forEach((a) => {
    a.classList.toggle("active", a.dataset.page === pageName);
  });

  document.getElementById("nav").classList.remove("open");
  window.scrollTo({ top: 0, behavior: "smooth" });
  observeReveal();
}

// ===== DRAW THE PAGES =====

// Home: first 3 products
function renderHome() {
  document.getElementById("homeGrid").innerHTML =
    products.slice(0, 3).map(productCard).join("");
  observeReveal();
}

// Shop: category filter + search
let currentFilter = "all";
let searchQuery = "";

function renderShop() {
  const query = searchQuery.trim().toLowerCase();

  const list = products.filter((p) => {
    const matchCategory = currentFilter === "all" || p.cat === currentFilter;
    const matchSearch =
      p.name.en.toLowerCase().includes(query) ||
      p.name[currentLang].toLowerCase().includes(query);
    return matchCategory && matchSearch;
  });

  document.getElementById("productGrid").innerHTML = list.length
    ? list.map(productCard).join("")
    : `<p class="empty">${t("no_results")}</p>`;
  observeReveal();
}

// Branches: each branch has a store picture
function renderBranches() {
  document.getElementById("branchGrid").innerHTML = branches.map((b, i) => `
    <div class="card reveal">
      <img class="branch-img" src="./Branches/shop${i + 1}.png" alt="${b.city.en} store" loading="lazy" onerror="${IMG_FALLBACK}">
      <h3>${b.city[currentLang]}</h3>
      <p>📞 ${b.phone}</p>
    </div>`).join("");
  observeReveal();
}

// Cart page
function renderCart() {
  const itemsBox = document.getElementById("cartItems");
  const totalBox = document.getElementById("cartTotal");
  const checkoutBtn = document.getElementById("checkoutBtn");

  if (cart.length === 0) {
    itemsBox.innerHTML = `<p class="empty">${t("empty_cart")}</p>`;
    totalBox.innerHTML = "";
    checkoutBtn.style.display = "none";
    return;
  }
  checkoutBtn.style.display = "inline-block";

  let total = 0;
  const orderLines = [];

  itemsBox.innerHTML = cart.map((item) => {
    const p = products.find((x) => x.id === item.id);
    total += p.usd * item.qty;
    orderLines.push(`${p.name.en} x${item.qty} = ${formatPrice(p.usd * item.qty)}`);

    return `
      <div class="cart-item card reveal">
        <img class="product-img" src="${p.image}" alt="" onerror="${IMG_FALLBACK}">
        <div class="cart-info">
          <h3>${p.name[currentLang]}</h3>
          <p class="price">${formatPrice(p.usd)}</p>
        </div>
        <div class="qty">
          <button onclick="changeQty(${p.id}, -1)">−</button>
          <span>${item.qty}</span>
          <button onclick="changeQty(${p.id}, 1)">+</button>
        </div>
        <button class="remove" onclick="removeItem(${p.id})">${t("remove")}</button>
      </div>`;
  }).join("");

  totalBox.innerHTML = `${t("total")}: <strong>${formatPrice(total)}</strong>`;

  const message = orderLines.join("\n") + `\n${t("total")}: ${formatPrice(total)}`;
  checkoutBtn.href = `https://wa.me/${SHOP_WHATSAPP}?text=${encodeURIComponent(message)}`;
  observeReveal();
}

// Draw everything again (runs when language, country or cart changes)
function renderAll() {
  renderHome();
  renderShop();
  renderBranches();
  renderCart();
}
document.addEventListener("refresh", renderAll);

// ===== CART BUTTONS (+ / − / remove) =====
function changeQty(id, change) {
  const item = cart.find((i) => i.id === id);
  item.qty += change;
  if (item.qty <= 0) {
    removeItem(id);
    return;
  }
  saveCart();
  refreshPage();
}

function removeItem(id) {
  cart = cart.filter((i) => i.id !== id);
  saveCart();
  refreshPage();
}

// ===== EVENTS =====

// Mobile menu button
document.getElementById("menuBtn").addEventListener("click", () => {
  document.getElementById("nav").classList.toggle("open");
});

// Category filter buttons
document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    currentFilter = btn.dataset.filter;
    document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderShop();
  });
});

// Search: typing opens the Shop page and shows results
document.getElementById("searchInput").addEventListener("input", (e) => {
  searchQuery = e.target.value;
  if (location.hash !== "#shop") location.hash = "shop";
  renderShop();
});

window.addEventListener("hashchange", route);

// ===== START =====
route();
initCommon();

