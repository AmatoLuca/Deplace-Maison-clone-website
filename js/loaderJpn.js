/* LOADER JAPAN ANIMATION 
============================== */

const loaderFrame = document.querySelector('.loader-jpn');
const logoMask = document.querySelector('.japan-logo-mask');

const tween = gsap.timeline();

tween.to(logoMask, {
  duration: 1,
  height: 0,
  ease: "power4.in",
})

.to(loaderFrame, {
    duration: 1.2,
    yPercent: -100,
    //ease: "expo.in",
    ease: "power4.in",
  });
