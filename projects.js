// JavaScript for Sliding Functionality
let yris = 0;
const klri = document.querySelectorAll(".project_slide");
const utsl = klri.length;
const lkrzq = document.querySelector(".project__slider");

function updateyrispostion() {
  const zvei = klri[0].offsetWidth; // Get the width of one slide
  const neqer = -yris * zvei + "px";
  lkrzq.style.transform = "translateX(" + neqer + ")";
}

function moveToNextImageProject() {
  yris = (yris + 1) % utsl;
  updateyrispostion();
}

function moveToPrevImageProject() {
  yris = (yris - 1 + utsl) % utsl;
  updateyrispostion();
}

// Auto slide every 5 seconds
//setInterval(moveToNextImageAchievement, 5000);
