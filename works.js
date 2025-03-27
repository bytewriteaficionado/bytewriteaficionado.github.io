// JavaScript for Sliding Functionality
let ciuses = 0;
const ssklis = document.querySelectorAll(".work_slide");
const tslksers = ssklis.length;
const slirlkesr = document.querySelector(".work__slider");

function updateslirpostion() {
  const sliwidenetye = ssklis[0].offsetWidth; // Get the width of one slide
  const newtranvaluedesiop = -ciuses * sliwidenetye + "px";
  slirlkesr.style.transform = "translateX(" + newtranvaluedesiop + ")";
}

function moveToNextImageWork() {
  ciuses = (ciuses + 1) % tslksers;
  updateslirpostion();
}

function moveToPrevImageWork() {
  ciuses = (ciuses - 1 + tslksers) % tslksers;
  updateslirpostion();
}

// Auto slide every 5 seconds
//setInterval(moveToNextImageAchievement, 5000);
