class Metronome {
  constructor(bpm) {
    this.click = {
      high: new Audio("./assets/High Seiko SQ50.wav"),
      low: new Audio("./assets/Low Seiko SQ50.wav"),
    };
    this.bpm = bpm;
  }

  start() {
    setInterval(() => {
      this.click.high.play();
    }, (1000 * 60) / this.bpm);
  }
}
