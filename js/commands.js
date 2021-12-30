/* COMMANDS ACTIONS
============================== */

// When user click to next button the slider move forward and backward.
// This is an hack to override the flickity slider button.
$('.commands__next').on('click', function(event) {
  event.preventDefault();
  $(".next").click();
});

$('.commands__previous').on('click', function(event) {
  event.preventDefault();
  $(".previous").click();
});

const frame = document.querySelector('.frame__inner');

const slideElements = document.querySelectorAll('.collection-cell');
const counterContainer = document.querySelector('.commands__counter-inner');
const wrapperNumberCounter = document.querySelector('.commands__count-number');
const progressBar = document.querySelector('.progress-bar');

// Get the height value (px) of a number in the counter.
let targetNumberHeight = wrapperNumberCounter.getBoundingClientRect().height;
let isSliderMovedByUser = false;
// The progress bar values
let progress = 11.111;

// Initialize Progress bar in default value
const initProgressBar = (value) => {
  progressBar.style.width = `${value}%`;
}

// Observer options oboject.
const sliderCollectionsOptions = {
  root: null,
  threshold: 1,
  rootMargin: "0px 0px 0px 0px"
};

const collectionsOnScroll = new IntersectionObserver(function(entries, collectionsOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {

      initProgressBar(11.1111);

      let valueTarget = entry.target.getAttribute('data-slide');

      console.log(valueTarget);
      console.log(targetNumberHeight);
      console.log(entry.target);
      

      // Track the first movement of the slider
      // to prevent the counter to move immediately.
      if (valueTarget !== "1") {
        isSliderMovedByUser = true;
      }

      // Counter need to not be translate over the top limit.
      if (!isSliderMovedByUser || valueTarget === "1") {
        counterContainer.style.transform = 'translateY(0)';
        return;

      } else if (valueTarget === '9') {
        // Not allow to translating the number 9 beyond the limit of the counter wrapper.
        counterContainer.style.transform = `translateY(-${(targetNumberHeight * valueTarget) - targetNumberHeight}px)`;
      } else {
        counterContainer.style.transform = `translateY(-${targetNumberHeight * valueTarget - targetNumberHeight}px)`;
        isSliderMovedByUser = true;
      }

      // Move progress bar
      progress = valueTarget * 11.1111;
      progressBar.style.width = `${progress}%`;

    }
  })
}, sliderCollectionsOptions);


slideElements.forEach(slideElement => {
  collectionsOnScroll.observe(slideElement);
});





