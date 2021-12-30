/* ARROW LINK ANIMATION 
============================== */

/* ARROW LINK HOME FIRST */
const arrowLinkHome_first = document.querySelector('.arr-1');
const circleLink_first = document.querySelector('.arr-1 img:nth-child(1)');
const arrowLink_first = document.querySelector('.arr-1 img:nth-child(2)');

/* ARROW LINK HOME SECOND */
const arrowLinkHome_second = document.querySelector('.arr-2');
const circleLink_second = document.querySelector('.arr-2 img:nth-child(1)');
const arrowLink_second = document.querySelector('.arr-2 img:nth-child(2)');


/* LISTENER FOR OVER AND LEAVE MOUSE */
arrowLinkHome_first.addEventListener('mouseover', () => {
  if (window.matchMedia("(min-width: 991px)").matches) {
    gsap.to(circleLink_first, {
      duration: 0.4,
      scale: 1.2,
      ease: "expo.easeOut",
    });

    gsap.to(arrowLink_first, {
      duration: 0.4,
      rotation: 360,
      ease: "expo.easeOut",
    });
  }
});

arrowLinkHome_first.addEventListener('mouseleave', () => {
  if (window.matchMedia("(min-width: 991px)").matches) {
    gsap.to(circleLink_first, {
      duration: 0.4,
      scale: 1,
      ease: "expo.easeOut",
    });

    gsap.to(arrowLink_first, {
      duration: 0.4,
      rotation: 0,
      ease: "expo.easeOut",
    });
  }
});
   

/* LISTENER FOR OVER AND LEAVE MOUSE */
arrowLinkHome_second.addEventListener('mouseover', () => {
  if (window.matchMedia("(min-width: 991px)").matches) {
    gsap.to(circleLink_second, {
      duration: 0.4,
      scale: 1.2,
      ease: "expo.easeOut",
    });

    gsap.to(arrowLink_second, {
      duration: 0.4,
      rotation: 360,
      ease: "expo.easeOut",
    });
  }
});

arrowLinkHome_second.addEventListener('mouseleave', () => {
  if (window.matchMedia("(min-width: 991px)").matches) {
    gsap.to(circleLink_second, {
      duration: 0.4,
      scale: 1,
      ease: "expo.easeOut",
    });

    gsap.to(arrowLink_second, {
      duration: 0.4,
      rotation: 0,
      ease: "expo.easeOut",
    });
  }
});





