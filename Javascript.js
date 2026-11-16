var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var menuicon_2 = document.getElementById("menuicon-2")
var cross = document.getElementById("sidenav_cross")

menuicon.addEventListener("click",function()
{
    sidenav.style.right=0
})
menuicon_2.addEventListener("click",function()
{
    sidenav.style.right=0
})
cross.addEventListener("click",function()
{
    sidenav.style.right="-270px"
})

// 6. Collections page: product list, search and filter
const productData = [
  { name: "Floral Summer Shirt", price: 220, image: "img/products/f1.jpg", tags: ["new", "blue", "summer"] },
  { name: "Summer Green", price: 260, image: "img/products/f2.jpg", tags: ["new", "green", "beach"] },
  { name: "Party Floral Shirt", price: 399, image: "img/products/f3.jpg", tags: ["old", "red", "party"] },
  { name: "Floral Summer Shirt", price: 399, image: "img/products/f4.jpg", tags: ["old", "white", "beach"] },
  { name: "Beach Shirt", price: 579, image: "img/products/f5.jpg", tags: ["old", "white", "beach"] },
  { name: "Shirt Party Red", price: 579, image: "img/products/f6.jpg", tags: ["old", "red", "party"] },
  { name: "Party Floral Shirt", price: 399, image: "img/products/f7.jpg", tags: ["old", "red", "party"] },
  { name: "Shirt Party Red", price: 579, image: "img/products/f8.jpg", tags: ["old", "red", "party"] },
  { name: "Floral Summer Shirt", price: 220, image: "img/products/f1.jpg", tags: ["new", "blue", "summer"] }
];

const productsBox = document.getElementById("products");
const noProducts = document.getElementById("noProducts");
const resultCount = document.getElementById("resultCount");
const clearFiltersBtn = document.getElementById("clearFilters");

function getCheckedValues(groupName) {
  return [...document.getElementsByName(groupName)]
    .filter((box) => box.checked)
    .map((box) => box.value);
}

function hasAnyTag(item, selected) {
  if (selected.length === 0) return true;
  return selected.some((tag) => item.tags.includes(tag));
}

function matchesPrice(item, selected) {
  if (selected.length === 0) return true;

  return selected.some((range) => {
    if (range === "under300") return item.price < 300;
    if (range === "300to500") return item.price >= 300 && item.price <= 500;
    if (range === "above500") return item.price > 500;
    return false;
  });
}

function showProducts(list) {
  productsBox.innerHTML = "";

  list.forEach((item) => {
    const card = document.createElement("div");
    card.className = "product";
    card.innerHTML =
      `<img src="${item.image}" alt="${item.name}">` +
      `<h3>${item.name}</h3>` +
      `<p>₹${item.price}</p>` +
      `<button type="button" class="add-cart" data-name="${item.name}" data-price="${item.price}">Add to cart</button>`;
    productsBox.appendChild(card);
  });

  if (resultCount) {
    resultCount.textContent = `${list.length} product${list.length === 1 ? "" : "s"}`;
  }

  if (noProducts) {
    noProducts.classList.toggle("show", list.length === 0);
  }
}

function updateProducts() {
  const searchText = document.getElementById("searchInput").value.toLowerCase();
  const occasion = getCheckedValues("occasion");
  const color = getCheckedValues("color");
  const arrival = getCheckedValues("arrival");
  const price = getCheckedValues("price");

  const result = productData.filter((item) => {
    const nameMatch =
      item.name.toLowerCase().includes(searchText) ||
      item.tags.join(" ").includes(searchText);

    return (
      nameMatch &&
      matchesPrice(item, price) &&
      hasAnyTag(item, occasion) &&
      hasAnyTag(item, color) &&
      hasAnyTag(item, arrival)
    );
  });

  showProducts(result);
}

if (productsBox) {
  showProducts(productData);

  const searchInput = document.getElementById("searchInput");
  const allFilterBoxes = document.querySelectorAll(".filter-section input[type='checkbox']");

  searchInput.addEventListener("input", updateProducts);
  allFilterBoxes.forEach((box) => box.addEventListener("change", updateProducts));

  clearFiltersBtn?.addEventListener("click", () => {
    searchInput.value = "";
    allFilterBoxes.forEach((box) => {
      box.checked = false;
    });
    updateProducts();
  });
}






