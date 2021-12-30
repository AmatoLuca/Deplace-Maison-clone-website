/* PRELOADER ANIMATION 
============================== */

const tl = gsap.timeline();

tl.to(".percentage-inner", {
  duration: 0.25,
  yPercent: -25,
  delay: 0.2,
  ease: "sine.out"
})
tl.to(".percentage-inner", {
  duration: 0.22,
  yPercent: -50,
  delay: 0.2,
  ease: "sine.out"
})
tl.to(".percentage-inner", {
  duration: 0.20,
  yPercent: -75,
  delay: 0.2,
  ease: "sine.out"
})
.to(".preloader", {
  duration: 1,
  yPercent: -100,
  delay: 0.5,
  ease: "expo.inOut",
});
