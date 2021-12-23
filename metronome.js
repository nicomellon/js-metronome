console.log("metronome.js loaded");

class Metronome {
  constructor(bpm, steps, startBtn) {
    this.sound = {
      high: new Audio("./assets/High Seiko SQ50.wav"),
      low: new Audio("./assets/Low Seiko SQ50.wav"),
    };
    this.bpm = bpm;
    this.steps = steps;
    this.intervalID = null;
    this.beatcount = 1;
    this.startBtn = startBtn;
  }

  start() {
    // first beat
    this.sound.high.play();
    this.startBtn.innerText = "STOP";

    // interval
    this.intervalID = setInterval(() => {
      const currentStep = this.beatcount % this.steps.length;
      const stepCheckbox = this.steps[currentStep].querySelector("input");
      stepCheckbox.checked ? this.sound.high.play() : this.sound.low.play();
      this.beatcount++;
    }, (1000 * 60) / this.bpm);
  }

  stop() {
    clearInterval(this.intervalID);
    delete window.metronome;
    this.startBtn.innerText = "START";
  }
}
