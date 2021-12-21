/** HTML elements **/
const startBtn = document.querySelector("#start-btn");
const bpmInput = document.querySelector("#bpm-input");

/**  control functions **/
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

// event listeners
startBtn.onclick = clickHandler;

console.log("script.js loaded");
