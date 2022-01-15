// Video placement and resizing. Making the video vertically centered and smaller than the entire viewport.

const heroVideoWrapper = document.getElementsByClassName('home-hero-video')[0];
const video = document.getElementsByTagName('video')[0];

function detectVideoSize()
{
  let height = window.innerHeight - nav.offsetHeight - (16 * 8);
  heroVideoWrapper.style.maxHeight = height + "px";
  let amountMoved = (heroVideoWrapper.offsetHeight - video.offsetHeight) / 2;
  if(amountMoved < 0)
  {
    video.style.top = amountMoved + "px";
  }
}

window.addEventListener('load', detectVideoSize);
window.addEventListener('resized', detectVideoSize);

// Slider initialization and settings

const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets'
  },
  breakpoints: {
    900: {
      slidesPerView: 2,
      spaceBetween: 32
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 32
    }
  }
})
