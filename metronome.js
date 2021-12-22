console.log("metronome.js loaded");

class Metronome {
  constructor(bpm, steps) {
    this.sound = {
      high: new Audio("./assets/High Seiko SQ50.wav"),
      low: new Audio("./assets/Low Seiko SQ50.wav"),
    };
    this.bpm = bpm;
    this.steps = steps;
    this.intervalID = null;
    this.beatcount = 0;
  }

  start() {
    this.intervalID = setInterval(() => {
      this.beatcount % this.steps === 0
        ? this.sound.high.play()
        : this.sound.low.play();
      this.beatcount++;
    }, (1000 * 60) / this.bpm);
  }

  stop() {
    clearInterval(this.intervalID);
  }
}
