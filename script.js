/** HTML elements **/
const startBtn = document.querySelector("#start-btn");
const bpmInput = document.querySelector(".bpm-input");

/**  metronome control functions **/
function createMetronomeAndStart() {
  // get metronome params
  const bpm = bpmInput.value || 60;
  const steps = stepsSection.childNodes;
  console.log(steps);
  // create metronome & start
  window.metronome = new Metronome(bpm, steps, startBtn);
  metronome.start();
}

function clickHandler() {
  window.metronome ? metronome.stop() : createMetronomeAndStart();
}

function bpmInputHandler() {
  if (window.metronome) {
    metronome.stop();
    createMetronomeAndStart();
  }
}

/** event listeners **/
startBtn.onclick = clickHandler;
bpmInput.onchange = bpmInputHandler;

/** on script load **/
console.log("script.js loaded");
