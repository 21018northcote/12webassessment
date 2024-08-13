let viewMoreBtn = document.querySelector('.more-side-btn');
let sideContainer = document.querySelector('.sides-container');
let viewLessBtn = document.querySelector('#less-btn');
let groupSize = 0;
let screenWidth = window.innerWidth;
let sidesItems = document.querySelectorAll('.sides-item');

if (screenWidth <= 600){
  groupSize = 4;
} else if(screenWidth > 600 && screenWidth <= 750){
  groupSize = 4;
} else if(screenWidth > 750 && screenWidth <= 1080){
  groupSize = 3;
} else if(screenWidth > 1080 && screenWidth <= 1500){
  groupSize = 4;
} else if(screenWidth > 1500){
  groupSize = 5;
}


viewMoreBtn.addEventListener('click', () => {
  for(let i = 0; i < groupSize; i++){
    let extraSides = `<div class= "sides-item extra">
        <img src="pizza-bread.jpg" alt="pizza bread" loading="lazy">
        <h2>Pizza Bread</h2>
        <a class="sides-price">$10.00</a>
        <a class="ingrediants">Garlic, oregano, cheese, seasoning and a touch of red sauce</a>
        <button class="add-cart-button" id="7" data-title="7">
          Add To Cart
        </button>
      </div>`
    sideContainer.innerHTML += extraSides;
    console.log('new element')
  }
  viewMoreBtn.style.display = 'none';
  viewLessBtn.style.display = 'flex';
});

viewLessBtn.addEventListener('click', () => {
  let extra = document.querySelectorAll('.extra');
  extra.forEach((extra) => {
    extra.remove();
  });
  viewMoreBtn.style.display = 'flex';
  viewLessBtn.style.display = 'none';
});