export const isArmstrongNumber = (num) => {
  
  let number = num+"";
  let exp = number.length;
  let sum = 0;

  for (let digit of number)
  {
    sum += Math.pow(parseInt(digit), exp);
  }

  return sum === num;

};