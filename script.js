//opens mobile menu when hamburger icon is clicked
function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}
//gets navbar container 
let navbar = document.getElementById("top-nav-container");

var sticky = 150;
//pushes the navbar beyond the top of the screen when the user scrolls enoughs
function stickNav(){
  if(window.scrollY >= sticky){
    navbar.classList.add("stickNav");
  } else {
    navbar.classList.remove("stickNav");
  }
}
//brings down the navbar when the users mouse is at the top of the screen
document.addEventListener("mousemove", function(event) {
    if (event.clientY < 50) {
      document.getElementById("top-nav-container").style.top = "0";
    } else {
      document.getElementById("top-nav-container").style.top = "-50%";
    }
});
window.onscroll = function() {
  stickNav();
};

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  const screenWidth = window.innerWidth;
  let groupSize;
  let slideNumber;
  let dotsNumber;
  if(screenWidth <= 600){
    groupSize = 1;
    slideNumber = 6;
    dotsNumber = 6;
  } else if(screenWidth > 600 && screenWidth <= 1024){
    groupSize = 2;
    slideNumber = 5;
    dotsNumber = 5;
  } else if(screenWidth > 1024 && screenWidth <= 1400){
    groupSize = 3;
    slideNumber = 4;
    dotsNumber = 4;
  } else {
    groupSize = 4;
    slideNumber = 3;
    dotsNumber = 3;
  }
  
  if (n > slideNumber) {slideIndex = 1}
  if (n < 1) {slideIndex = slideNumber}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = slideIndex - 1; i < slideIndex - 1 + groupSize; i++) {
    if (slides[i]) {
      slides[i].style.display = "block";
    }
  }
  for (i = 0; i < dotsNumber; i++) {
    dots[i].className = dots[i].className.replace(" active-menu", "");
  }
  dots[slideIndex-1].className += " active-menu";
}
const overlay = document.querySelector('.overlay');
const buttons = document.getElementsByClassName('viewbutton');
for(const button of buttons){
  button.addEventListener('click', (event) => {
    const clickedBtnId = event.target.id
    overlay.style.display = 'block'; 
    const overlayContent = document.getElementById(`overlay-content-${clickedBtnId}`);
    overlayContent.style.display = 'flex';
  });
}
const closeButton = document.getElementById('close'); 

closeButton.addEventListener('click', () => {
  overlay.style.display = 'none';// Hide the overlay
  
  let overlayContent = document.getElementById('overlay-content-1');
  overlayContent.style.display = 'none';
  overlayContent = document.getElementById('overlay-content-2');
  overlayContent.style.display = 'none';
  overlayContent = document.getElementById('overlay-content-3');
  overlayContent.style.display = 'none';
  overlayContent = document.getElementById('overlay-content-4');
  overlayContent.style.display = 'none';
  overlayContent = document.getElementById('overlay-content-5');
  overlayContent.style.display = 'none';
  overlayContent = document.getElementById('overlay-content-6');
  overlayContent.style.display = 'none';
});

const overlayCart = document.querySelector('.overlay-cart');
const addButtons = document.getElementsByClassName('add-cart-button');
for(const button of addButtons){
  button.addEventListener('click', (event) => {
    const clickedBtnId = event.target.id
    overlayCart.style.display = 'flex'; 
    const overlayContent = document.getElementById(`cart-overlay-content-${clickedBtnId}`);
    overlayContent.style.display = 'flex';
  });
}
const closeButtonCart = document.querySelector('.cart-close'); 

closeButtonCart.addEventListener('click', () => {
  overlayCart.style.display = 'none';// Hide the overlay
  let overlayContent = document.getElementById('cart-overlay-content-1');
  overlayContent.style.display = 'none';
  overlayContent = document.getElementById('cart-overlay-content-2');
  overlayContent.style.display = 'none';
  overlayContent = document.getElementById('cart-overlay-content-3');
  overlayContent.style.display = 'none';
  overlayContent = document.getElementById('cart-overlay-content-4');
  overlayContent.style.display = 'none';
  overlayContent = document.getElementById('cart-overlay-content-5');
  overlayContent.style.display = 'none';
  overlayContent = document.getElementById('cart-overlay-content-6');
  overlayContent.style.display = 'none';
  overlayContent = document.getElementById('cart-overlay-content-7');
  overlayContent.style.display = 'none';
  overlayContent = document.getElementById('cart-overlay-content-8');
  overlayContent.style.display = 'none';
  overlayContent = document.getElementById('cart-overlay-content-9');
  overlayContent.style.display = 'none';
  overlayContent = document.getElementById('cart-overlay-content-10');
  overlayContent.style.display = 'none';
  overlayContent = document.getElementById('cart-overlay-content-11');
  overlayContent.style.display = 'none';
  overlayContent = document.getElementById('cart-overlay-content-12');
  overlayContent.style.display = 'none';
  overlayContent = document.getElementById('cart-overlay-content-13');
  overlayContent.style.display = 'none';
  overlayContent = document.getElementById('cart-overlay-content-14');
  overlayContent.style.display = 'none';
});

document.querySelector('a[href="#pizza-section"]').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default link behavior
    document.querySelector('#pizza-section').scrollIntoView({
        behavior: 'smooth' // Smooth scrolling
    });
});



let cartButton = document.querySelector('.add-to-cart-button-container');
let mobileCartButton = document.querySelector('.add-to-cart-button-mobile');
let section = document.querySelector('section');
let cartCloseButton = document.querySelector('.close-button');
let cartCheckoutButton = document.querySelector('.checkout-button');
let cartHTML = document.querySelector('#cart');
let cartItemsHTML = document.querySelector('.cart-items');
let orderItemsHTML = document.querySelector('.order-items');
let itemCount = document.querySelectorAll('.item-count');
let itemCountMobile = document.querySelector('.item-count-mobile');
let totalPrice = document.querySelectorAll('.total-price');
let totalPriceMobile = document.querySelector('.total-price-mobile');
let orderPrice = document.querySelector('.subtotal-price');
let priceTotal = 0;
let cartSubtotal = document.querySelector('.cart-price-subtotal-value');
let cartTotal = document.querySelector('.cart-price-total-value');


let cartItems = [];
let carts = [];

cartButton.addEventListener('click' , () => {
  section.classList.toggle('showCart');
});

mobileCartButton.addEventListener('click' , () => {
  section.classList.toggle('showCart-mobile');
});

cartCloseButton.addEventListener('click', () => {
  section.classList.remove('showCart')
  section.classList.remove('showCart-mobile');
});
cartCheckoutButton.addEventListener('click', () => {
  window.location.href = document.getElementById('Check-out-link');
});

let addToCartButtons = document.getElementsByClassName('cart-button');

for(const button of addToCartButtons){
  button.addEventListener('click', (event) =>{
    let addButtonId = event.target;
    const originalColor = addButtonId.style.backgroundColor;
    const originalText = addButtonId.innerText;
    addButtonId.style.backgroundColor = 'rgb(3, 173, 9)';
    addButtonId.innerText = 'Added';
    addButtonId.setAttribute('disabled', true);
    
    setTimeout(() => {
      addButtonId.style.backgroundColor = originalColor;
      addButtonId.innerText = originalText;
      addButtonId.removeAttribute('disabled');
    }, 1500);
    // Hide the overlay
    
    
    let productId = addButtonId.dataset.title;
    addToCart(productId);
  })
}
const addToCart = (product_id) => {
  let positionThisProductInCart = carts.findIndex((value) => value.product_id == product_id);
  if(carts.length <= 0){
      carts = [{
        product_id: product_id,
        quantity: 1
      }]
  } else if(positionThisProductInCart < 0) {
      carts.push({
        product_id: product_id,
        quantity: 1 
    })
  } else {
      carts[positionThisProductInCart].quantity =     carts[positionThisProductInCart].quantity + 1; 
  }
  addCartToHtml();
  addCartToMemory();
}
const addCartToMemory = () => {
   localStorage.setItem('cart', JSON.stringify(carts));
}
const addCartToHtml = () => {
  cartItemsHTML.innerHTML = '';
  let itemCountQuantity = 0;
  if(carts.length > 0){
    carts.forEach(cart => {
      itemCountQuantity += cart.quantity
      let newCart = document.createElement('div');
      newCart.classList.add('item');
      newCart.dataset.id = cart.product_id;
      let productPosition = cartItems.findIndex((value) => value.id == cart.product_id);
      let info = cartItems[productPosition];
      newCart.innerHTML = `
        <div class="cart-image">
          <img src="${info.image}">
        </div>
        <div class="name">
          ${info.name}
        </div>
        <div class="price">
          $${info.price * cart.quantity}
        </div>
        <div class="Quantity">
          <span class="minus">-</span>
          <span>${cart.quantity}</span>
          <span class="plus">+</span>
        </div>
        `;
      cartItemsHTML.appendChild(newCart);
    })
  }
  itemCount.forEach((itemCount) => {
    itemCount.innerText = itemCountQuantity;
  })
  itemCountMobile.innerText = itemCountQuantity;
  priceTotal = 0;
  for(i = 0; i < carts.length; i++){
    let cartItem = carts[i];
    let productPosition = cartItems.findIndex((value) => value.id == cartItem.product_id);
    let info = cartItems[productPosition];
    let cartItemPrice = info.price * cartItem.quantity;
    priceTotal += cartItemPrice;
  }
  let roundedPrice = Math.round(priceTotal * 100) / 100;
  let fixed = roundedPrice.toFixed(2);
  totalPrice.forEach(totalPrice2 =>{
    totalPrice2.innerText = `$${fixed}`;
  });
  totalPriceMobile.innerText = `$${fixed}`;
  cartSubtotal.innerText = `$${fixed}`;
  let cartGst = priceTotal * 1.1;
  roundedPrice = Math.round(cartGst * 100) / 100;
  fixed = roundedPrice.toFixed(2);
  cartTotal.innerText = `$${fixed}`;
}

cartItemsHTML.addEventListener('click', (event) => {
  let positionClick = event.target;
  if(positionClick.classList.contains('minus') || positionClick.classList.contains('plus')){
    let product_id = positionClick.parentElement.parentElement.dataset.id;
    let type = 'minus';
    if(positionClick.classList.contains('plus')){
      type = 'plus';
    }
    changeQuantity(product_id, type);
  }
});
const changeQuantity = (product_id, type) =>{
  let positionItemInCart = carts.findIndex((value) => value.product_id == product_id);
  if(positionItemInCart >= 0){
    switch (type) {
      case 'plus':
        carts[positionItemInCart].quantity = carts[positionItemInCart].quantity + 1;
        break;
      default:
        let valueChange = carts[positionItemInCart].quantity - 1;
        if(valueChange > 0){
          carts[positionItemInCart].quantity = valueChange;
        } else {
          carts.splice(positionItemInCart, 1);
        }
    }
  }
  addCartToMemory();
  addCartToHtml();
}


const initApp = () => {
  fetch('products.json')
    .then(response => response.json())
    .then(data => {
      cartItems = data;
      console.log(cartItems);
      if(localStorage.getItem('cart')){
        carts = JSON.parse(localStorage.getItem('cart'));
        addCartToHtml();
      }
    })
}

initApp();








