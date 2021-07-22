export class Triangle {
  constructor(x, y ,z) {
    this._x = x;
    this._y = y;
    this._z = z;

    if (((x*x)+(y*y)) > (z*z) && (((x*x)+(z*z)) > (y*y)) && (((y*y)+(z*z)) > (x*x) )) {
      this._isTriangle = true;
    }
    else {
      this._isTriangle = false;
    }
  }

  get isEquilateral() {
    if (this._isTriangle && (this._x === this._y) && (this._x === this._z )) { return true; }
    return false;
  }

  get isIsosceles() {
    if (this._isTriangle) {
      if (this._x === this._y) { return true; }
      if (this._x === this._z) { return true; }
      if (this._y === this._z) { return true; }
    }
    return false;
  }

  get isScalene() {
    if (this._isTriangle) {
      if ((this._x !== this._y) && (this._x !== this._z) && (this._y !== this._z) ) {
        return true;
      }
    }
    return false;
  }
}
