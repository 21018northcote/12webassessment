let paymentOverlay = document.querySelector('.payment-overlay');
let paymentButton = document.querySelector('.pay-button');
paymentButton.addEventListener('click', () => {
  paymentOverlay.style.display = 'flex';
});

let payClose = document.querySelector('.pay-close-btn');
payClose.addEventListener('click', () => {
  paymentOverlay.style.display = 'none';
});