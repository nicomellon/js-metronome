/** HTML elements **/
const startBtn = document.querySelector("#start-btn");
const bpmInput = document.querySelector("#bpm-input");
const stepsForm = document.querySelector("#steps-form");

function clearSteps() {
  while (stepsForm.lastChild) {
    stepsForm.removeChild(stepsForm.lastChild);
  }
}

function createStep(checked) {
  const stepInput = document.createElement("input");
  stepInput.type = "checkbox";
  stepInput.checked = checked;

  stepsForm.appendChild(stepInput);
}

/**  metronome control functions **/
function startMetronome() {
  /* get metronome params */
  const bpm = bpmInput.value;
  /* create metronome & start */
  window.metronome = new Metronome(bpm);
  metronome.start();
}

function stopMetronome() {
  metronome.stop();
  delete window.metronome;
}

const handlers = {
  start: () => {
    startMetronome();
    startBtn.innerText = "STOP";
  },
  stop: () => {
    stopMetronome();
    startBtn.innerText = "START";
  },
};

function clickHandler() {
  window.metronome ? handlers.stop() : handlers.start();
}

function inputHandler() {
  if (window.metronome) {
    stopMetronome();
    startMetronome();
  }
}

/** event listeners **/
startBtn.onclick = clickHandler;
bpmInput.onchange = inputHandler;

/** on script load **/
console.log("script.js loaded");
createStep(true);
createStep(false);
createStep(false);
createStep(false);
