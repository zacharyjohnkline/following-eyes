const pupilLeft = document.querySelector(".Pupil-Left");
const pupilRight = document.querySelector(".Pupil-Right");
const mouth = document.querySelector(".Mouth-Container");
const leftBrow = document.querySelector(".Left-Brow");
const rightBrow = document.querySelector(".Right-Brow");
const scoreWords = document.querySelector("#Score-Words");
const leftEye = document.querySelector(".Eye-Left");
const rightEye = document.querySelector(".Eye-Right");
const eyes = [leftEye, rightEye];
const overlay = document.querySelector(".Directions-Overlay");
const overlayWords = document.getElementById("Overlay-Words");
const begFly = document.getElementById("Beginning-Fly");
const cursorImage = document.querySelector(".Cursor-Image");

let score = 0;
let cursorState = false;
let cursorSize = Number(cursorImage.style.width);

document.onmousemove = (event) => {
  const x = (event.clientX / window.innerWidth) * 100;
  const y = (event.clientY / window.innerHeight) * 100;
  pupilLeft.style.left = `${x / 1.5}%`;
  pupilRight.style.left = `${x / 1.5}%`;
  pupilLeft.style.top = `${y / 2}%`;
  pupilRight.style.top = `${y / 2}%`;
};
function animateCursor() {
  if (document.body.style.cursor !== "pointer") {
    setTimeout(() => {
      if (
        document.body.style.cursor === `url("./FLY_CURSOR_LARGE.gif"), default`
      ) {
        document.body.style.cursor = `url('./FLY_CURSOR_LARGE2.gif'), default`;
        animateCursor();
      } else if (
        document.body.style.cursor === `url("./FLY_CURSOR_LARGE2.gif"), default`
      ) {
        document.body.style.cursor = `url('./FLY_CURSOR_LARGE.gif'),default`;
        animateCursor();
      } else {
        clearTimeout();
      }
    }, 20);
  }
}
function closedMouth(mouth) {
  if (cursorState === true) {
    document.body.style.cursor = "pointer";
    score++;
    scoreWords.innerText = `${score}`;
    for (let i = 0; i < eyes.length; i++) {
      eyes[i].style.transition = ".1s";
      eyes[i].style.height = "10px";
    }
    mouth.style.transition = ".1s";
    mouth.style.height = "5px";
    leftBrow.style.transition = ".1s";
    leftBrow.style.marginTop = "-3%";
    rightBrow.style.transition = ".1s";
    rightBrow.style.marginTop = "-3%";
    leftBrow.style.borderRadius = "0";
    rightBrow.style.borderRadius = "0";
    leftBrow.style.transform = "rotate(10deg)";
    rightBrow.style.transform = "rotate(-10deg)";
    cursorState = false;
    cursorImage.style.visibility = "hidden";
    if (score % 10 === 0) {
      overlayWords.innerText = `CONGRATS!  You fed him ${score} flies!`;
      begFly.style.display = "none";
      overlay.style.display = "flex";
      scoreWords.innerText = `${score}`;
    }
  }
  setTimeout(() => {
    for (let i = 0; i < eyes.length; i++) {
      eyes[i].style.transition = ".1s";
      eyes[i].style.height = "120px";
    }
    leftBrow.style.transition = ".5s";
    leftBrow.style.marginTop = "-10%";
    rightBrow.style.transition = ".5s";
    rightBrow.style.marginTop = "-10%";
    leftBrow.style.transform = "rotate(-5deg)";
    rightBrow.style.transform = "rotate(5deg)";
  }, 250);
}
function cursorChange() {
  document.body.style.cursor = `url("./FLY_CURSOR_LARGE.gif"), default`;
  animateCursor();
  cursorState = true;
  mouth.style.transition = "2s";
  mouth.style.height = "150px";
}
function begin() {
  overlay.style.display = "none";
}
