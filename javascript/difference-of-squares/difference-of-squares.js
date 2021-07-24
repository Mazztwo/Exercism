export class Squares 
{
  constructor(number) 
  {
    this._number = number;
    let sumOfSquares = 0;
    let squareOfSum = 0;

    for (let i = 1; i <= number; i++) 
    {
      sumOfSquares += (i*i);
      squareOfSum += i;
    }

    this._sumOfSquares = sumOfSquares;
    this._squareOfSum = (squareOfSum * squareOfSum);
    this._difference = this._squareOfSum - this._sumOfSquares;
  }

  get sumOfSquares() 
  {
    return this._sumOfSquares;
  }

  get squareOfSum() 
  {
    return this._squareOfSum;
  }

  get difference() 
  {
    return this._difference;
  }
}
