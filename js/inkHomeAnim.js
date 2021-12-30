/* INK HOME ANIMATION 
============================== */

const inkText = document.querySelector(".ink-go");

let oldScrollValue = 0;
let newScrollValue = 0;

window.addEventListener("scroll", (e) => {
  newScrollValue = window.scrollY;

  if (newScrollValue > oldScrollValue) {
    gsap.to(inkText, {
      duration: 1,
      y: -200,
      delay: 0.3,
      ease: "expo.easeIn",
    });
    oldScrollValue = newScrollValue;
  } 
  
    else if (newScrollValue < oldScrollValue) {
    gsap.to(inkText, {
      duration: 0.8,
      y: 0,
      ease: "expo.easeIn",
    });
    oldScrollValue = newScrollValue;
  }
});
