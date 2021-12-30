/* FOOTER ARROW ANIMATION 
============================== */
const arrowLink = document.querySelector('.footer__arrow');
const circleImg = document.querySelector('.footer__arrow img:nth-child(1)');
const arrowImg = document.querySelector('.footer__arrow img:nth-child(2)');



arrowLink.addEventListener('mouseover', () => {
  const tween = gsap.timeline();
  if (window.matchMedia("(min-width: 991px)").matches) {
    tween.to(circleImg, {
      duration: 1.2,
      scale: 1.2,
      ease: "power4.out",
    })

    .to(arrowImg, {
        duration: 0.5,
        rotation: 360,
        ease: "expo.out"
      }, "-=1.2" 
    );
  }
});

  
arrowLink.addEventListener('mouseleave', () => {
  const tween = gsap.timeline();
  if (window.matchMedia("(min-width: 991px)").matches) {
    tween.to(circleImg, {
      duration: 1.2,
      scale: 1,
      ease: "power4.out",
    })

    .to(arrowImg, {
        duration: 0.7,
        rotation: 0,
        ease: "expo.out"
      }, "-=1.2" 
    );
  }
});
  

  