/** HTML elements **/
const startBtn = document.querySelector("#start-btn");
const bpmInput = document.querySelector(".bpm-input");

/**  metronome control functions **/
function createMetronomeAndStart() {
  // get metronome params
  const bpm = bpmInput.value || 60;
  const steps = stepsSection.childNodes;
  console.log(steps);
  // initialize metronome
  window.metronome = new Metronome(bpm, steps, startBtn);
  metronome.start();
}

function bpmInputHandler() {
  if (window.metronome) {
    metronome.stop();
    createMetronomeAndStart();
  }
}

function startBtnHandler() {
  window.metronome ? metronome.stop() : createMetronomeAndStart();
}

/** event listeners **/
startBtn.onclick = startBtnHandler;
bpmInput.onchange = bpmInputHandler;

/** on script load **/
console.log("script.js loaded");
