export class Series {
  constructor(series) {
    series = series.split("");
    let temp = []
    series.forEach(c => {temp.push(parseInt(c))})
    this._series = temp;
  }

  slices(sliceLength) {
    if (this._series.length === 0) {throw new Error('series cannot be empty');}
    if (sliceLength === 0) {throw new Error('slice length cannot be zero');}
    if (sliceLength < 0) {throw new Error('slice length cannot be negative');}
    if (sliceLength > this._series.length) {throw new Error('slice length cannot be greater than series length');}
    
    let slices = [];
    for(let i = 0; i < this._series.length; i++)
    {
      if (i+sliceLength > this._series.length) {break;}
      slices.push(this._series.slice(i, i+sliceLength));
    }

    return slices;
  }
}


