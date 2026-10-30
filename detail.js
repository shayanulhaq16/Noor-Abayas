// Read the product id from the link: productdetail.html?id=5
const productId = Number(new URLSearchParams(location.search).get("id"));

// Draw the product details
function renderProduct() {
  const box = document.getElementById("productBox");

  // Products load hone ka intezar: agar list khali hai to loading dikhao
  if (products.length === 0) {
    box.innerHTML = `<p class="empty">Loading...</p>`;
    return;
  }

  const p = products.find((x) => x.id === productId);

  if (!p) {
    box.innerHTML = `<p class="empty">${t("not_found")}</p>`;
    return;
  }

  // Up to 4 other products from the same category
  const related = products.filter((x) => x.cat === p.cat && x.id !== p.id).slice(0, 4);

  box.innerHTML = `
    <div class="detail">
      <img class="detail-img" src="${p.image}" alt="${p.name[currentLang]}" onerror="${IMG_FALLBACK}">
      <div class="detail-info">
        <p class="cat">${p.cat === "abaya" ? t("filter_abaya") : t("filter_hijab")}</p>
        <h1>${p.name[currentLang]}</h1>
        <p class="price">${formatPrice(p.usd)}</p>
        <p>${p.desc[currentLang]}</p>

        <div class="qty-row">
          <label>${t("qty")}</label>
          <input type="number" id="qtyInput" value="1" min="1">
        </div>

        <button class="btn btn-gold" id="addBtn">${t("add_to_cart")}</button>
        <a class="btn btn-block" id="buyBtn" target="_blank">${t("buy_now")}</a>
      </div>
    </div>

    <h2 class="section-title">${t("related")}</h2>
    <div class="grid">${related.map(productCard).join("")}</div>
  `;

  const qtyInput = document.getElementById("qtyInput");
  const buyBtn = document.getElementById("buyBtn");

  // WhatsApp message ko quantity ke hisaab se banata hai
  function updateBuyLink() {
    const qty = Math.max(1, Number(qtyInput.value) || 1);
    const text = `${p.name.en} x${qty} = ${formatPrice(p.usd * qty)}`;
    buyBtn.href = `https://wa.me/${SHOP_WHATSAPP}?text=${encodeURIComponent(text)}`;
  }
  updateBuyLink();
  qtyInput.addEventListener("input", updateBuyLink);

  document.getElementById("addBtn").addEventListener("click", () => {
    const qty = Math.max(1, Number(qtyInput.value) || 1);
    addToCart(p.id, qty);
  });

  observeReveal();
}

// Products load hone ke baad aur har refresh par page draw karo
document.addEventListener("refresh", renderProduct);

// Menu button for mobile
document.getElementById("menuBtn").addEventListener("click", () => {
  document.getElementById("nav").classList.toggle("open");
});

// ===== START =====
initCommon();