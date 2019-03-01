export class HighScores {
  constructor(input) {
    this.scores = input;
    this.latest = input[input.length - 1];
    this.personalBest = Math.max(...input);
    this.personalTopThree = input
      .slice()
      .sort((a, b) => b - a)
      .slice(0, 3);
  }
}
