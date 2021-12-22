/** HTML elements **/
const startBtn = document.querySelector("#start-btn");
const bpmInput = document.querySelector("#bpm-input");
const stepsForm = document.querySelector("#steps-form");
const addStepBtn = document.querySelector("#add-step-btn");
const removeStepBtn = document.querySelector("#remove-step-btn");
const stepsCount = document.querySelector("#steps-count");

function removeStep() {
  if (stepsForm.childElementCount > 1)
    stepsForm.removeChild(stepsForm.lastChild);
  updateStepSpan();
}

function addStep(checked) {
  const stepInput = document.createElement("input");
  stepInput.type = "checkbox";
  stepInput.checked = checked;
  stepsForm.appendChild(stepInput);
  updateStepSpan();
}

function updateStepSpan() {
  stepsCount.innerText = stepsForm.childElementCount;
}

/**  metronome control functions **/
function startMetronome() {
  /* get metronome params */
  const bpm = bpmInput.value;
  // const steps = stepsForm.childElementCount;
  const steps = stepsForm.childNodes;
  console.log(steps);
  /* create metronome & start */
  window.metronome = new Metronome(bpm, steps);
  metronome.start();
}

function stopMetronome() {
  metronome.stop();
  delete window.metronome;
}

const startBtnHandler = {
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
  window.metronome ? startBtnHandler.stop() : startBtnHandler.start();
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
addStepBtn.onclick = () => addStep(false);
removeStepBtn.onclick = removeStep;

/** on script load **/
console.log("script.js loaded");
addStep(true);
addStep(false);
addStep(false);
addStep(false);
