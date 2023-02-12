// Targeting Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const flipBook = document.querySelector("#flip-book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");

// Event Listeners
prevBtn.addEventListener("click", goPrevious);
nextBtn.addEventListener("click", goNext);

// Functions
let currentState = 1;
let numofPages = 4;
let maxPage = numofPages + 1;

function openBook() {
  flipBook.style.transform = "translateX(50%)";
  prevBtn.style.transform = "translateX(-180px)";
  nextBtn.style.transform = "translateX(180px)";
}

function closeBook(firstPage) {
  if (firstPage) {
    flipBook.style.transform = "translateX(0%)";
  } else {
    flipBook.style.transform = "translateX(100%)";
  }
  prevBtn.style.transform = "translateX(0px)";
  nextBtn.style.transform = "translateX(0px)";
}

function goNext() {
  if (currentState < maxPage) {
    switch (currentState) {
      case 1:
        openBook();
        paper1.classList.add("flipped");
        paper1.style.zIndex = 1;
        break;
      case 2:
        paper2.classList.add("flipped");
        paper2.style.zIndex = 2;
        break;
      case 3:
        paper3.classList.add("flipped");
        paper3.style.zIndex = 3;
        break;
      case 4:
        closeBook(false);
        paper4.classList.add("flipped");
        paper4.style.zIndex = 4;
        break;

      default:
        throw new Error("Something went wrong");
    }
    currentState++;
  }
}

function goPrevious() {
  if (currentState > 1) {
    switch (currentState) {
      case 2:
        closeBook(true);
        paper1.classList.remove("flipped");
        paper1.style.zIndex = 4;
        break;
      case 3:
        paper2.classList.remove("flipped");
        paper2.style.zIndex = 3;
        break;
      case 4:
        paper3.classList.remove("flipped");
        paper3.style.zIndex = 2;
        break;
      case 5:
        openBook();
        paper4.classList.remove("flipped");
        paper4.style.zIndex = 1;
        break;
    }
    currentState--;
  }
}

// Wavesurfer JS
var playBtn = document.getElementById("playBtn");

var wavesurfer = WaveSurfer.create({
  container: "#waveform",
  waveColor: "#ddd",
  progressColor: "#ff006c",
  barWidth: 4,
  responsive: true,
  height: 90,
  barRadius: 4,
});

wavesurfer.load("./media/Memories.mp3");

playBtn.onclick = function () {
  wavesurfer.playPause();
  if (playBtn.src.includes("play.png")) {
    playBtn.src = "./media/pause.png";
  } else {
    playBtn.src = "./media/play.png";
  }
};

wavesurfer.on("finish", function () {
  playBtn.src = "./media/play.png";
  wavesurfer.stop();
});

// Envelope Function
const envelope = document.querySelector(".envelope-wrapper");
envelope.addEventListener("click", () => {
  envelope.classList.toggle("flap");
});
