class Metronome {
  constructor(bpm) {
    this.sound = {
      high: new Audio("./assets/High Seiko SQ50.wav"),
      low: new Audio("./assets/Low Seiko SQ50.wav"),
    };
    this.bpm = bpm;
    this.isOn = false;
    this.intervalID = null;
  }

  start() {
    this.intervalID = setInterval(() => {
      this.sound.low.play();
    }, (1000 * 60) / this.bpm);
    this.isOn = true;
  }

  stop() {
    clearInterval(this.intervalID);
  }
}
