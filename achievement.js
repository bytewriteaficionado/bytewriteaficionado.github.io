// JavaScript for Sliding Functionality
let nmz = 0;
const fd = document.querySelectorAll(".achievement_slide");
const tyu = fd.length;
const iuys = document.querySelector(".achievement__slider");

function updatenmzpostion() {
  const iwsld = fd[0].offsetWidth; // Get the width of one slide
  const nhgval = -nmz * iwsld + "px";
  iuys.style.transform = "translateX(" + nhgval + ")";
}

function moveToNextImageAchievement() {
  nmz = (nmz + 1) % tyu;
  updatenmzpostion();
}

function moveToPrevImageAchievement() {
  nmz = (nmz - 1 + tyu) % tyu;
  updatenmzpostion();
}

// Auto slide every 5 seconds
//setInterval(moveToNextImageAchievement, 5000);
