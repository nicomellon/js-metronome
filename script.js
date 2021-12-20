const startBtn = document.querySelector(".start-btn");
startBtn.addEventListener("click", () => {
  const metronome = new Metronome(200);
  metronome.start();
});

console.log("script.js loaded");
