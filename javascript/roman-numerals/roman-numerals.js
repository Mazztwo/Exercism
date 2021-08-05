export const toRoman = (number) => {
  let place = 10000;
  let previous = 0;
  let roman = "";
  while (place >= 10) {
    let digits = (number % place) - (number % (place/10));
    if (digits !== previous)
    {
      if (digits < 4){
        roman += I(digits);
      }
      else if (digits < 9) {
        roman += V(digits);
      }
      else if (digits < 39) {
        roman += X(digits);
      }
      else if (digits < 89) {
        roman += L(digits);
      }
      else if (digits < 399) {
        roman += C(digits);
      }
      else if (digits < 899) {
        roman += D(digits);
      }
      else {
        roman += M(digits);
      }
    }
    previous = digits;
    place /= 10;
  }

  return roman;
};

const I = (n) => {
  return"I".repeat(n);
}

const V = (n) => {
  if (n===4) {return "IV";}
  return "V" + "I".repeat(n-5);
}

const X = (n) => {
  if (n===9) {return "IX";}
  return "X".repeat(n/10);
}

const L = (n) => {
  if (n===40) {return "XL";}
  if (n===50) {return "L";}
  return "L" + "X".repeat(n/10 - 5);
}

const C = (n) => {
  if (n===90) {return "XC";}
  if (n===100) {return "C";}
  return "C".repeat(n/100);
}

const D = (n) => {
  if (n===400) {return "CD";}
  if (n===500) {return "D";}
  return "D" + "C".repeat(n/100 - 5);
}

const M = (n) => {
  if (n===900) {return "CM";}
  if (n===1000) {return "M";}
  return "M".repeat(n/1000);
}