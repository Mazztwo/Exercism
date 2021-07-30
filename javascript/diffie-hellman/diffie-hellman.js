export class DiffieHellman {
  constructor(p, g) {
    if (!this.checkPrime(p) || !this.checkPrime(g)) {throw new Error("Inputs not prime.");}
    if (p < 1 || p > 9998 || g < 1 || g > 9998) {throw new Error("Inputs out of bounds.");}
    this._p = p;
    this._g = g;

  }

  getPublicKey(privateKey) {
    if (privateKey < 2) {throw new Error("Private key cannot be less than 2.");}
    if (privateKey >= this._p) {throw new Error("Private key cannot be greater than or equal parameter.");}

    return Math.pow(this._g, privateKey) % this._p;
  }

  getSecret(theirPublicKey, myPrivateKey) {
    return Math.pow(theirPublicKey, myPrivateKey) % this._p;
  }

  checkPrime(num) {
    for (let i = 2; i < num; i++)
    {
      if (num % i === 0)
      {
        return false;
      }
    }
    return true;
  }
}