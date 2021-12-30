/* CART ANIMATION 
============================== */

const cartLink = document.querySelector('.cart-link');
const cart = document.querySelector('.cart');
const cartWrapper = document.querySelector('.cart-wrapper');
const closeIcon = document.querySelector('.cart-close-icon');
const cartLinkLargeDevices = document.querySelector('.cart-item-xl');

const cartTimeLine = gsap.timeline({ paused: true, reversed: true });

cartTimeLine.to(cartWrapper, {
  duration: 0.3,
  autoAlpha: 1,
  x: "0vw",
  ease: "expo.in",
});

cartLink.addEventListener('click', (e) => {
  if(cartTimeLine.isActive()) {
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
  }

  toggleTween(cartTimeLine);
});

// Click for large devices
cartLinkLargeDevices.addEventListener('click', (e) => {
  if(cartTimeLine.isActive()) {
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
  }

  toggleTween(cartTimeLine);
});

closeIcon.addEventListener('click', (e) => {
  if(cartTimeLine.isActive()) {
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
  }
  
  toggleTween(cartTimeLine);
});


function toggleTween(tween) {
  tween.reversed() ? tween.play() : tween.reverse();
} 