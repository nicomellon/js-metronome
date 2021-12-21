// HTML elements
const startBtn = document.querySelector("#start-btn");
const stopBtn = document.querySelector("#stop-btn");
const bpmInput = document.querySelector("#bpm-input");

// control functions
function startMetronome() {
  if (metronomeIsOn()) stopMetronome();
  const bpm = bpmInput.value;
  window.metronome = new Metronome(bpm);
  metronome.start();
}

function stopMetronome() {
  metronome.stop();
  delete window.metronome;
}

function metronomeIsOn() {
  return window.metronome;
}

// event listeners
startBtn.onclick = startMetronome;
stopBtn.onclick = stopMetronome;

console.log("script.js loaded");
