let cursld = 0;
const sliding = document.querySelectorAll('.career_slide');
const totsliding = sliding.length;

const shousli = (indddi) => {
  const slidwte = document.querySelector('.career__slider');
  const slidrty = sliding[0].offsetWidth;
  slidwte.style.transform = `translateX(-${indddi * slidrty}px)`;
};

const nexsetui = () => {
  if (cursld < totsliding - 1) {
    cursld++;
  } else {
    cursld = 0; // Loop back to the first slide
  }
  shousli(cursld);
};

const prisueye = () => {
  if (cursld > 0) {
    cursld--;
  } else {
    cursld = totsliding - 1; // Loop back to the last slide
  }
  shousli(cursld);
};

// Add event listeners for the navigation arrows
document.querySelector('.left1').addEventListener('click', prisueye);
document.querySelector('.right1').addEventListener('click', nexsetui);
