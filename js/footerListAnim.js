/* FOOTER LIST ANIMATION 
============================== */

const footerList = document.querySelectorAll('.wrap-up-links');

footerList.forEach(anchorParent => {

  const shelveLinks = anchorParent.querySelector('.f-inner');
  const copyLinkToShow = anchorParent.querySelector('.f-inner__link-down'); 

  const tweenList = gsap.timeline({
    reversed: true,
    paused: true,
    defaults: { duration: 0.7, },
  });
  
  tweenList
    .to(shelveLinks, { yPercent: -100, ease: "power4.out", })
    .to(copyLinkToShow, { duration: 0.4, rotation: 0, ease: "power4.out", }, "-=0.6")

  anchorParent.addEventListener('mouseenter', () => {
    if (window.matchMedia("(min-width: 991px)").matches) {
      tweenList.play();
    }
  });
  anchorParent.addEventListener('mouseleave', () => {
    if (window.matchMedia("(min-width: 991px)").matches) {
      tweenList.reverse();
    }
  });
  
});

