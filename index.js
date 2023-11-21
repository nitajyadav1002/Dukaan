let shops = document.getElementById("shops");
let reviews = document.getElementById("reviews");
let blogs = document.getElementById("blogs");
let contacts = document.getElementById("contacts");
shops.addEventListener("click", ()=>{
    shops.style.color="rgb(0, 196, 196)";
    reviews.style.color="white";
    blogs.style.color="white";
    contacts.style.color="white";

})
reviews.addEventListener("click", ()=>{
    reviews.style.color="rgb(0, 196, 196)";
    shops.style.color="white";
    blogs.style.color="white";
    contacts.style.color="white";
})  
blogs.addEventListener("click", ()=>{
    blogs.style.color="rgb(0, 196, 196)";
    reviews.style.color="white";
    shops.style.color="white";
    contacts.style.color="white";
})
contacts.addEventListener("click", ()=>{
    contacts.style.color="rgb(0, 196, 196)";
    reviews.style.color="white";
    blogs.style.color="white";
    shops.style.color="white";
})
let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");
icon.addEventListener("click", () => {
  ul.classList.toggle("showData");

  if (ul.className == "showData") {
    document.getElementById("bar").className = "fa-solid fa-xmark";
  } else {
    document.getElementById("bar").className = "fa-solid fa-bars";
  }
});
let card = document.querySelectorAll(".crd");
let pageImg = document.querySelector("#itemImg");
let container = document.querySelector(".container");
let nav = document.querySelector("nav");
let itemPage = document.querySelector(".itemPage");
console.log(pageImg);
console.log(card);
function connect(){
    var name = document.getElementById("name").value.trim();
    var number = document.getElementById("number").value.trim();
    if (name === "" || number === "") {
        alert("Please fill in all fields.");
        return false;
    }
    if (!/^[a-zA-Z ]{1,15}$/.test(name)) {
        alert("Invalid name. Only letters and spaces allowed, max 15 characters.");
        return false;
    }
    if (!/^\d{10}$/.test(number)) {
        alert("Invalid mobile number. It should be 10 digits only.");
        return false;
    }
    if(name.value == "" && num.value == ""){
        alert("Fill Detail")
    }else{
        alert("Thanks For Connecting")
    }
    window.location.href="index.html";
}


let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
function addToCart(productName, price,imageSrc) {
  const existingProduct = cart.find(item => item.name === productName);
  if (existingProduct) {
      existingProduct.quantity++;
  } else {
      cart.push({ name: productName, price: price, quantity: 1,imageSrc: imageSrc});
  }
  alert(`Product "${productName}" added to cart!`);
  updateCartDisplay();
}
function openCart() {
  sessionStorage.setItem('cart', JSON.stringify(cart));
  window.location.href = 'cart.html';
}

function updateCartDisplay() {
  const cartCount = document.getElementById('cartCount');
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  cartCount.textContent = totalItems > 0 ? totalItems : '';
}

let isExpanded = false;
const reviewText = document.getElementById('reviewText');
const reviewText1 = document.getElementById('reviewText1');
const reviewText2 = document.getElementById('reviewText2');
function expandReview() {
    if (!isExpanded) {
        reviewText.classList.remove('collapsed-text');
    }
}
function expandReview1() {
  if (!isExpanded) {
      reviewText1.classList.remove('collapsed-text');
  }
}
function expandReview2() {
  if (!isExpanded) {
      reviewText2.classList.remove('collapsed-text');
  }
}
function collapseReview() {
    if (!isExpanded) {
        reviewText.classList.add('collapsed-text');
    }
}
function collapseReview1() {
  if (!isExpanded) {
      reviewText1.classList.add('collapsed-text');
  }
}
function collapseReview2() {
  if (!isExpanded) {
      reviewText2.classList.add('collapsed-text');
  }
}