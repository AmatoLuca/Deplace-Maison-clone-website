/* PRODUCT PAGE ANIMATION 
============================== */

const coordinates = document.querySelector('.coordinates');
const mainHeading = document.querySelector('.product__name-wrap');
const productTitle = document.querySelector('.product__name-inner');
const productTitle2 = document.querySelector('.product__lider-wrap');
const price = document.querySelector('.product__price-pop');
const shoesCover = document.querySelector('.product__image-wrap');
const shoesImage = document.querySelector('.product__image');
const productForm = document.querySelector('.product-aside');

// How many pixel the user scroll the window
let scrollAmount;


// Shows coordinates in large screen
window.addEventListener('resize', () => {
  if (window.innerWidth >= 991) {
    coordinates.style.display = 'block';
  } else {
    coordinates.style.display = 'none';
  }
});


// On Load animations 
const tl = gsap.timeline();

tl.from(productTitle, {
  duration: 0.4,
  yPercent: 100,
  delay: 2.1,
  ease: 'circ.out',
})

tl.from(price, {
  duration: 0.4,
  yPercent: 100,
  ease: 'expo.out',
})

tl.from(shoesCover, {
  duration: 0.7,
  yPercent: 15,
  ease: 'power2.out',
}, "-=0.4")

tl.from(productForm, {
  duration: 0.8,
  yPercent: 100,
  autoAlpha: 0,
  ease: 'power2.out',
}, "-=0.4");


// Observer On scroll animations 
const moveOptions = {
  threshold: 0,
  rootMargin: "0px 0px 0px 0px"
};

const moveOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {

      window.addEventListener('scroll', () => {

        scrollAmount = window.scrollY / 50;
        productTitle2.style.bottom = "-38vw";
        productTitle2.style.transform = `translateY(-${scrollAmount}vw)`;

        if (window.matchMedia("(min-width: 479px)").matches) {
          scrollAmount = window.scrollY / 50;
          productTitle2.style.bottom = "-16vw";
          productTitle2.style.transform = `translateY(-${scrollAmount}vw)`;
        }

        if (window.matchMedia("(min-width: 768px)").matches) {
          scrollAmount = window.scrollY / 90;
          productTitle2.style.bottom = "-18vw";
          productTitle2.style.transform = `translateY(-${scrollAmount}vw)`;
        }

        if (window.matchMedia("(min-width: 991px)").matches) {
          scrollAmount = window.scrollY / 110;
          let scrollMainHeadingAmount = window.scrollY / 50;


          productTitle2.style.bottom = "-15vw";
          mainHeading.style.transform = `translateY(-${scrollMainHeadingAmount}vw)`;
          productTitle2.style.transform = `translateY(-${scrollAmount}vw)`;

          // Shoes cover scale animation
          gsap.to(shoesImage, {
            duration: 1.8,
            scale: 1.2,
            ease: 'none',
          });
        }

      })      
    }
  })
}, moveOptions);

moveOnScroll.observe(productTitle2);
moveOnScroll.observe(mainHeading);







