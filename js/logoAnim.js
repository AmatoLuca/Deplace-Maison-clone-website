/* LOGO ANIMATION 
============================== */

const linkAnim = document.querySelector('.name-app-link-xl');
const picsWrapper = document.querySelector('.logo-name-p2');

linkAnim.addEventListener('mouseover', startMovement);
linkAnim.addEventListener('mouseleave', resetMovement);


function startMovement() {
  let viewport = window.innerWidth;

  if (viewport >= 991) {
    gsap.to(picsWrapper, {
      duration: 1.4,
      yPercent: -45,
      rotate: "-5deg",
      ease: Power4.easeOut,
    });
    return;
  }
}

function resetMovement() {
  gsap.to(picsWrapper, {
    duration: 1.4,
    yPercent: 0,
    rotate: "0deg",
    ease: Power4.easeOut,
  });
}



