export class HighScores {
  constructor(scores) {
    this._scores = scores;
  }

  get scores() {
    return this._scores;
  }

  get latest() {
    return this._scores[this._scores.length - 1];
  }

  get personalBest() {
    let best = 0;
    for (let score of this._scores) 
    {
      if (score > best) {best = score;}
    }
    return best;
  }

  get personalTopThree() {
    let topThree = [];
    let high = -1;
    let highI = 0;
    let mid = -1;
    let midI = 0;
    let low = -1;

    this._scores.forEach( (v, i) => {
      if (v > high) { 
        high = v; 
        highI = i;
      }
    });

    if (this._scores.length > 1)
    {
      this._scores.forEach( (v, i) => {
        if (v >= mid && v <= high && i !== highI) { 
          mid = v; 
          midI = i;
        }
      });
    }

    if (this._scores.length > 2)
    {
      this._scores.forEach( (v, i) => {
        if (v >= low && v <= mid && i !== midI && i !== highI) { low = v; }
      });
    }

    if (high > -1) {topThree.push(high);}
    if (mid > -1) {topThree.push(mid);}
    if (low > -1) {topThree.push(low);}

    return topThree;
  }
}