// ===== SETTINGS =====
const SHOP_WHATSAPP = "923001234567"; // Apna WhatsApp number (country code ke sath)

// ===== TRANSLATIONS (3 languages) =====
const translations = {
  en: {
    brand: "Noor Abaya & Hijab",
    nav_home: "Home", nav_shop: "Shop", nav_about: "About Us", nav_branches: "Branches", nav_cart: "Cart",
    search_placeholder: "Search abaya or hijab...",
    hero_title: "Elegant Abayas & Hijabs for Every Day",
    hero_text: "Modest fashion made with quality fabric and care.",
    shop_now: "Shop Now", featured: "Featured Products",
    choose_country: "Choose Your Country",
    country_note: "Prices change according to the country you select.",
    filter_all: "All", filter_abaya: "Abayas", filter_hijab: "Hijabs",
    add_to_cart: "Add to Cart", added: "Added to cart!", view_details: "View Details",
    about_title: "About Us",
    about_text: "Noor Abaya & Hijab offers women elegant and modest clothing. We care about quality, simplicity and modesty in every piece we make.",
    branches_title: "Our Branches",
    cart_title: "Your Cart", empty_cart: "Your cart is empty.", total: "Total", remove: "Remove",
    checkout: "Order on WhatsApp", no_results: "No products found.",
    footer_text: "© 2026 Noor Abaya & Hijab. All rights reserved.",
    qty: "Quantity", buy_now: "Buy on WhatsApp", related: "You may also like",
    not_found: "Product not found.", back_shop: "Back to Shop",
    about_mission_title: "Our Mission",
    about_mission_text: "To give every woman modest clothing that makes her feel confident, comfortable and beautiful.",
    about_quality_title: "Quality Fabric",
    about_quality_text: "Every abaya and hijab is made with carefully chosen fabric that is soft, breathable and long lasting.",
    about_service_title: "Caring Service",
    about_service_text: "Our team is ready to help you choose the right size and style, in every branch and online.",
    about_story_title: "Our Story",
    about_story_text: "Noor started with a simple idea: modest fashion should be elegant, affordable and available to women everywhere. Today we serve customers in many countries, and we keep growing with the same goal, to bring quality and modesty together in every design.",
    contact_title: "Contact Us", contact_info_title: "Get in Touch", contact_whatsapp: "WhatsApp: +92 300 123 4567",
    contact_address: "Karachi, Pakistan", contact_hours: "Mon to Sat, 10:00 AM to 8:00 PM",
    contact_form_title: "Send us a Message", contact_name: "Your name", contact_email: "Your email",
    contact_message: "Your message", contact_send: "Send on WhatsApp",
  },
  ur: {
    brand: "نور عبایہ اور حجاب",
    nav_home: "ہوم", nav_shop: "دکان", nav_about: "ہمارے بارے میں", nav_branches: "برانچز", nav_cart: "کارٹ",
    search_placeholder: "عبایہ یا حجاب تلاش کریں...",
    hero_title: "روزمرہ کے لیے خوبصورت عبایے اور حجاب",
    hero_text: "معیاری کپڑے اور محبت سے تیار کردہ باوقار فیشن۔",
    shop_now: "ابھی خریدیں", featured: "نمایاں مصنوعات",
    choose_country: "اپنا ملک منتخب کریں",
    country_note: "قیمتیں آپ کے منتخب کردہ ملک کے مطابق بدلیں گی۔",
    filter_all: "سب", filter_abaya: "عبایے", filter_hijab: "حجاب",
    add_to_cart: "کارٹ میں شامل کریں", added: "کارٹ میں شامل ہو گیا!", view_details: "تفصیل دیکھیں",
    about_title: "ہمارے بارے میں",
    about_text: "نور عبایہ اور حجاب ایک ایسا برانڈ ہے جو خواتین کو باوقار اور خوبصورت لباس فراہم کرتا ہے۔",
    branches_title: "ہماری برانچز",
    cart_title: "آپ کی کارٹ", empty_cart: "آپ کی کارٹ خالی ہے۔", total: "کل رقم", remove: "حذف کریں",
    checkout: "واٹس ایپ پر آرڈر کریں", no_results: "کوئی مصنوعات نہیں ملی۔",
    footer_text: "© 2026 نور عبایہ اور حجاب۔ تمام حقوق محفوظ ہیں۔",
    qty: "تعداد", buy_now: "واٹس ایپ پر خریدیں", related: "آپ یہ بھی پسند کر سکتی ہیں",
    not_found: "مصنوعہ نہیں ملا۔", back_shop: "دکان پر واپس جائیں",
    about_mission_title: "ہمارا مشن",
    about_mission_text: "ہر خاتون کو باوقار لباس فراہم کرنا جو اسے پراعتماد، آرام دہ اور خوبصورت محسوس کرائے۔",
    about_quality_title: "معیاری کپڑا",
    about_quality_text: "ہر عبایہ اور حجاب احتیاط سے چُنے گئے کپڑے سے بنایا جاتا ہے جو نرم، ہوادار اور پائیدار ہوتا ہے۔",
    about_service_title: "مخلصانہ خدمت",
    about_service_text: "ہماری ٹیم ہر برانچ اور آن لائن آپ کو درست سائز اور انداز چننے میں مدد کے لیے تیار ہے۔",
    about_story_title: "ہماری کہانی",
    about_story_text: "نور کا آغاز ایک سادہ خیال سے ہوا: باوقار فیشن خوبصورت، مناسب قیمت پر اور ہر جگہ کی خواتین کی پہنچ میں ہونا چاہیے۔ آج ہم کئی ممالک میں گاہکوں کی خدمت کر رہے ہیں، اور ہر ڈیزائن میں معیار اور حیا کو یکجا کرنے کے ایک ہی مقصد کے ساتھ آگے بڑھ رہے ہیں۔",
    contact_title: "ہم سے رابطہ کریں", contact_info_title: "رابطے کی معلومات", contact_whatsapp: "واٹس ایپ: +92 300 123 4567",
    contact_address: "کراچی، پاکستان", contact_hours: "پیر تا ہفتہ، صبح 10 بجے تا رات 8 بجے",
    contact_form_title: "ہمیں پیغام بھیجیں", contact_name: "آپ کا نام", contact_email: "آپ کی ای میل",
    contact_message: "آپ کا پیغام", contact_send: "واٹس ایپ پر بھیجیں",
  },
  ar: {
    brand: "نور للعبايات والحجاب",
    nav_home: "الرئيسية", nav_shop: "المتجر", nav_about: "من نحن", nav_branches: "الفروع", nav_cart: "السلة",
    search_placeholder: "ابحثي عن عباءة أو حجاب...",
    hero_title: "عبايات وحجابات أنيقة لكل يوم",
    hero_text: "أزياء محتشمة بخامات عالية الجودة واهتمام بالتفاصيل.",
    shop_now: "تسوقي الآن", featured: "منتجات مميزة",
    choose_country: "اختاري بلدك",
    country_note: "تتغير الأسعار حسب البلد الذي تختارينه.",
    filter_all: "الكل", filter_abaya: "عبايات", filter_hijab: "حجابات",
    add_to_cart: "أضف إلى السلة", added: "تمت الإضافة إلى السلة!", view_details: "عرض التفاصيل",
    about_title: "من نحن",
    about_text: "نور للعبايات والحجاب علامة تجارية تقدم للمرأة أزياءً راقية ومحتشمة.",
    branches_title: "فروعنا",
    cart_title: "سلة التسوق", empty_cart: "سلة التسوق فارغة.", total: "المجموع", remove: "حذف",
    checkout: "اطلبي عبر واتساب", no_results: "لا توجد منتجات مطابقة.",
    footer_text: "© 2026 نور للعبايات والحجاب. جميع الحقوق محفوظة.",
    qty: "الكمية", buy_now: "اشتري عبر واتساب", related: "قد يعجبك أيضا",
    not_found: "المنتج غير موجود.", back_shop: "العودة إلى المتجر",
    about_mission_title: "رسالتنا",
    about_mission_text: "أن نقدم لكل امرأة أزياء محتشمة تجعلها واثقة ومرتاحة وجميلة.",
    about_quality_title: "جودة الخامات",
    about_quality_text: "كل عباءة وحجاب يُصنعان من خامات مختارة بعناية، ناعمة ومريحة وتدوم طويلاً.",
    about_service_title: "خدمة تهتم بك",
    about_service_text: "فريقنا جاهز لمساعدتك في اختيار المقاس والتصميم المناسبين، في كل فروعنا وعبر الإنترنت.",
    about_story_title: "قصتنا",
    about_story_text: "بدأت نور بفكرة بسيطة: أن تكون الأزياء المحتشمة أنيقة وبأسعار مناسبة ومتاحة لكل امرأة. واليوم نخدم عملاء في دول كثيرة، ونواصل النمو بالهدف نفسه: الجمع بين الجودة والحشمة في كل تصميم.",
    contact_title: "اتصلي بنا", contact_info_title: "معلومات التواصل", contact_whatsapp: "واتساب: +92 300 123 4567",
    contact_address: "كراتشي، باكستان", contact_hours: "من الاثنين إلى السبت، 10 صباحاً إلى 8 مساءً",
    contact_form_title: "أرسلي لنا رسالة", contact_name: "اسمك", contact_email: "بريدك الإلكتروني",
    contact_message: "رسالتك", contact_send: "أرسلي عبر واتساب",
  }
};

// ===== COUNTRIES (24) =====
// rate = how many units of the local currency equal 1 USD (approximate, edit as needed)
const COUNTRIES = [
  { code: "PK", cur: "PKR", rate: 280, name: { en: "Pakistan", ur: "پاکستان", ar: "باكستان" } },
  { code: "IN", cur: "INR", rate: 84, name: { en: "India", ur: "بھارت", ar: "الهند" } },
  { code: "BD", cur: "BDT", rate: 122, name: { en: "Bangladesh", ur: "بنگلہ دیش", ar: "بنغلاديش" } },
  { code: "SA", cur: "SAR", rate: 3.75, name: { en: "Saudi Arabia", ur: "سعودی عرب", ar: "السعودية" } },
  { code: "AE", cur: "AED", rate: 3.67, name: { en: "UAE", ur: "متحدہ عرب امارات", ar: "الإمارات" } },
  { code: "KW", cur: "KWD", rate: 0.31, name: { en: "Kuwait", ur: "کویت", ar: "الكويت" } },
  { code: "QA", cur: "QAR", rate: 3.64, name: { en: "Qatar", ur: "قطر", ar: "قطر" } },
  { code: "OM", cur: "OMR", rate: 0.385, name: { en: "Oman", ur: "عمان", ar: "عُمان" } },
  { code: "BH", cur: "BHD", rate: 0.376, name: { en: "Bahrain", ur: "بحرین", ar: "البحرين" } },
  { code: "EG", cur: "EGP", rate: 50, name: { en: "Egypt", ur: "مصر", ar: "مصر" } },
  { code: "TR", cur: "TRY", rate: 35, name: { en: "Turkey", ur: "ترکی", ar: "تركيا" } },
  { code: "MY", cur: "MYR", rate: 4.4, name: { en: "Malaysia", ur: "ملائیشیا", ar: "ماليزيا" } },
  { code: "ID", cur: "IDR", rate: 16000, name: { en: "Indonesia", ur: "انڈونیشیا", ar: "إندونيسيا" } },
  { code: "NG", cur: "NGN", rate: 1500, name: { en: "Nigeria", ur: "نائجیریا", ar: "نيجيريا" } },
  { code: "KE", cur: "KES", rate: 129, name: { en: "Kenya", ur: "کینیا", ar: "كينيا" } },
  { code: "ZA", cur: "ZAR", rate: 18, name: { en: "South Africa", ur: "جنوبی افریقہ", ar: "جنوب أفريقيا" } },
  { code: "GB", cur: "GBP", rate: 0.79, name: { en: "United Kingdom", ur: "برطانیہ", ar: "المملكة المتحدة" } },
  { code: "US", cur: "USD", rate: 1, name: { en: "United States", ur: "امریکہ", ar: "الولايات المتحدة" } },
  { code: "CA", cur: "CAD", rate: 1.37, name: { en: "Canada", ur: "کینیڈا", ar: "كندا" } },
  { code: "AU", cur: "AUD", rate: 1.52, name: { en: "Australia", ur: "آسٹریلیا", ar: "أستراليا" } },
  { code: "DE", cur: "EUR", rate: 0.92, name: { en: "Germany", ur: "جرمنی", ar: "ألمانيا" } },
  { code: "FR", cur: "EUR", rate: 0.92, name: { en: "France", ur: "فرانس", ar: "فرنسا" } },
  { code: "SG", cur: "SGD", rate: 1.35, name: { en: "Singapore", ur: "سنگاپور", ar: "سنغافورة" } },
  { code: "NL", cur: "EUR", rate: 0.92, name: { en: "Netherlands", ur: "نیدرلینڈز", ar: "هولندا" } }
];

// ===== BRANCHES =====
const branches = [
  { city: { en: "Karachi", ur: "کراچی", ar: "كراتشي" }, phone: "+92 300 000001", image: `./Branches/karachi.png` },
  { city: { en: "Lahore", ur: "لاہور", ar: "لاهور" }, phone: "+92 300 0000002", image: `./Branches/karachi.png` },
  { city: { en: "Islamabad", ur: "اسلام آباد", ar: "إسلام آباد" }, phone: "+92 300 0000003", image: "" },
  { city: { en: "Dubai", ur: "دبئی", ar: "دبي" }, phone: "+971 50 000 0004", image: "" },
  { city: { en: "Riyadh", ur: "ریاض", ar: "الرياض" }, phone: "+966 50 000 0005", image: "" }
];

// ===== PRODUCT NAMES =====
const abayaStyles = [
  { en: "Classic", ur: "کلاسک", ar: "كلاسيكية" },
  { en: "Open Front", ur: "اوپن فرنٹ", ar: "مفتوحة" },
  { en: "Embroidered", ur: "کڑھائی والا", ar: "مطرزة" },
  { en: "Pleated", ur: "پلیٹ دار", ar: "مكشكشة" },
  { en: "Batwing", ur: "بیٹ ونگ", ar: "جناح الخفاش" },
  { en: "Kimono", ur: "کیمونو", ar: "كيمونو" },
  { en: "Nida", ur: "نیدا", ar: "نيدا" },
  { en: "Crepe", ur: "کریپ", ar: "كريب" },
  { en: "Butterfly", ur: "بٹر فلائی", ar: "فراشة" },
  { en: "Printed", ur: "پرنٹڈ", ar: "مطبوعة" }
];
const abayaColors = [
  { en: "Black", ur: "سیاہ", ar: "أسود" },
  { en: "Olive", ur: "زیتونی", ar: "زيتوني" },
  { en: "Beige", ur: "بیج", ar: "بيج" },
  { en: "Grey", ur: "گرے", ar: "رمادي" }
];
const hijabFabrics = [
  { en: "Chiffon", ur: "شیفون", ar: "شيفون" },
  { en: "Jersey", ur: "جرسی", ar: "جيرسي" },
  { en: "Lawn", ur: "لان", ar: "لان" },
  { en: "Modal", ur: "مودل", ar: "مودال" },
  { en: "Satin", ur: "ساٹن", ar: "ساتان" },
  { en: "Cotton", ur: "کاٹن", ar: "قطن" }
];
const hijabColors = [
  { en: "Black", ur: "سیاہ", ar: "أسود" },
  { en: "White", ur: "سفید", ar: "أبيض" },
  { en: "Beige", ur: "بیج", ar: "بيج" },
  { en: "Maroon", ur: "مارون", ar: "خمري" },
  { en: "Olive", ur: "زیتونی", ar: "زيتوني" }
];
const categoryDesc = {
  abaya: { en: "Elegant and comfortable modest abaya made with quality fabric.", ur: "معیاری کپڑے سے بنا خوبصورت اور آرام دہ عبایہ۔", ar: "عباءة أنيقة ومريحة مصنوعة من خامات عالية الجودة." },
  hijab: { en: "Soft and comfortable hijab, easy to wear every day.", ur: "نرم اور آرام دہ حجاب، روزانہ پہننے کے لیے بہترین۔", ar: "حجاب ناعم ومريح، مناسب للارتداء اليومي." }
};

// ===== PLACEHOLDER PICTURE (used if a photo fails to load) =====
function placeholderImg(name) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="700">
    <rect width="100%" height="100%" fill="#283618"/>
    <rect x="30" y="30" width="540" height="640" fill="none" stroke="#DDA15E" stroke-width="3"/>
    <text x="50%" y="50%" font-size="34" text-anchor="middle" fill="#FEFAE0" font-family="Arial">${name}</text>
  </svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

// If an image fails to load, show the placeholder
const IMG_FALLBACK = "this.onerror=null;this.src=placeholderImg(this.alt);";

// ===== PRODUCTS (70 products: 40 abayas + 30 hijabs) =====
// ===== PRODUCTS (Supabase se aate hain) =====
const PKR_PER_USD = 280; // 1 USD = 280 PKR (country prices isi se banti hain)
const PHOTO_BUCKET = "purchase-images";
const products = [];

// Supabase se in-stock products laata hai
async function loadProducts() {
  const { data, error } = await db
    .from("products")
    .select("*")
    .gt("stock", 0)
    .order("name");

  if (error) {
    console.error("Products load nahi huye:", error.message);
    return;
  }

  products.length = 0;
  data.forEach((p) => {
    products.push({
      id: p.id,
      // Naam mein "hijab" ho to hijab, warna abaya (filter buttons ke liye)
      cat: /hijab/i.test(p.name) ? "hijab" : "abaya",
      name: { en: p.name, ur: p.name, ar: p.name }, // purchase mein jo likha wahi
      usd: Number(p.sell_price) / PKR_PER_USD,
      image: p.image_path
        ? db.storage.from(PHOTO_BUCKET).getPublicUrl(p.image_path).data.publicUrl
        : placeholderImg(p.name),
      desc: categoryDesc[/hijab/i.test(p.name) ? "hijab" : "abaya"]
    });
  });

  refreshPage();
}

// ===== PICTURES (Picsum, no API key needed) =====
// Each product gets its own picture because the seed is different.
function picsumUrl(seed, w, h) {
  return `https://picsum.photos/seed/${seed}/${w}/${h}`;
}
// Local images folder se tasveer lagata hai
// Product 1 -> images/abaya1.png, Product 2 -> images/abaya2.png, Product 41 -> images/hijab41.png
// Agar file na mile to placeholder dikhega (IMG_FALLBACK isi ka kaam karta hai)
function loadProductImages() {
  products.forEach((p) => {
    p.image = `Abayas/${p.cat}${p.id}.png`;
  });
  branches.forEach((b, i) => {
    b.image = `Abayas/branch${i + 1}.png`;
  });
  refreshPage();
}

// ===== APP STATE (saved in browser) =====
let currentLang = localStorage.getItem("lang") || "en";
let currentCountry = localStorage.getItem("country") || "PK";
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let toastTimer;

// ===== HELPER FUNCTIONS =====

// Get text in the current language. Example: t("add_to_cart")
function t(key) {
  return translations[currentLang][key] || translations.en[key] || key;
}

// Get the country object for the selected country
function getCountry() {
  return COUNTRIES.find((c) => c.code === currentCountry) || COUNTRIES[0];
}

// Convert a USD price into the selected country's money. Example: "PKR 18,200"
function formatPrice(usd) {
  const c = getCountry();
  const digits = c.rate < 1 ? 2 : 0;
  const amount = usd * c.rate;
  return c.cur + " " + amount.toLocaleString("en-US", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits
  });
}

// Save cart to the browser
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Total number of items in cart
function cartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

// Show a small message at the bottom
function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
}

// Add a product to cart (used by buttons on every page)
function addToCart(id, qty = 1) {
  const item = cart.find((i) => i.id === id);
  if (item) {
    item.qty += qty;
  } else {
    cart.push({ id: id, qty: qty });
  }
  saveCart();
  showToast(t("added"));
  refreshPage();
}

// Tell every page part to draw itself again
function refreshPage() {
  document.dispatchEvent(new Event("refresh"));
}

// Product card HTML (used on home, shop and related items)
function productCard(p) {
  return `
    <div class="card reveal">
      <a href="productdetail.html?id=${p.id}">
        <img class="product-img" src="${p.image}" alt="${p.name[currentLang]}" loading="lazy" onerror="${IMG_FALLBACK}">
      </a>
      <h3>${p.name[currentLang]}</h3>
      <p class="price">${formatPrice(p.usd)}</p>
      <div class="card-actions">
        <a class="btn btn-small" href="productdetail.html?id=${p.id}">${t("view_details")}</a>
        <button class="btn btn-gold btn-small" onclick="addToCart(${p.id})">${t("add_to_cart")}</button>
      </div>
    </div>`;
}

// Animation: show elements when they scroll into view
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

function observeReveal() {
  document.querySelectorAll(".reveal:not(.show)").forEach((el) => observer.observe(el));
}

// Show cart count in the header
function updateCartCount() {
  const badge = document.getElementById("cartCount");
  if (!badge) return;
  badge.textContent = cartCount();
  badge.classList.remove("pulse");
  void badge.offsetWidth; // restarts the animation
  badge.classList.add("pulse");
}
document.addEventListener("refresh", updateCartCount);

// Fill a country dropdown with all countries
function populateCountrySelect(select) {
  select.innerHTML = COUNTRIES.map((c) =>
    `<option value="${c.code}" ${c.code === currentCountry ? "selected" : ""}>${c.name[currentLang]} (${c.cur})</option>`
  ).join("");
}

// Change the country (prices update everywhere)
function setCountry(code) {
  currentCountry = code;
  localStorage.setItem("country", code);
  document.querySelectorAll(".country-select").forEach(populateCountrySelect);
  refreshPage();
}

// Change the language (text, direction and layout update)
function applyLanguage() {
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "en" ? "ltr" : "rtl";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });

  document.querySelectorAll(".country-select").forEach(populateCountrySelect);
  refreshPage();
}

// Run this once on every page
// Run this once on every page
function initCommon() {
  const langSelect = document.getElementById("langSelect");
  langSelect.value = currentLang;
  langSelect.addEventListener("change", (e) => {
    currentLang = e.target.value;
    localStorage.setItem("lang", currentLang);
    applyLanguage();
  });

  document.querySelectorAll(".country-select").forEach((sel) => {
    sel.addEventListener("change", (e) => setCountry(e.target.value));
  });

  loadProducts(); // Supabase se products lao
  applyLanguage(); // phir page draw karo
}


// Contact form: message WhatsApp par bhejta hai
document.addEventListener("submit", (e) => {
  if (e.target.id !== "contactForm") return;
  e.preventDefault();

  const name = document.getElementById("cName").value.trim();
  const email = document.getElementById("cEmail").value.trim();
  const msg = document.getElementById("cMsg").value.trim();

  const text = `Name: ${name}\nEmail: ${email}\n\n${msg}`;
  window.open(`https://wa.me/${SHOP_WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank");
});