/* CART LINK ANIMATION 
============================== */

const cartIcon = document.querySelector('.cart-link-xl');
const linkToLift = document.querySelector('.cart-item-xl');

const tweenCart = gsap.timeline({
  reversed: true,
  paused: true,
  defaults: { duration: 0.7, },
});

tweenCart.to(linkToLift, { yPercent: -90, ease: "expo.out", });

cartIcon.addEventListener('mouseenter', () => {
  if (window.matchMedia("(min-width: 991px)").matches) {
    tweenCart.play();
  }
});

cartIcon.addEventListener('mouseleave', () => {
  if (window.matchMedia("(min-width: 991px)").matches) {
    tweenCart.timeScale(1.5).reverse();
  }
});