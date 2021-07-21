export const reverseString = (str) => {
  let strArr = []
  for(let c of str) { strArr.push(c);}
  let f = 0;
  let b = str.length-1;

  while (f <= b) {
    let t = strArr[b];
    strArr[b] = strArr[f]
    strArr[f] = t;
    f++;
    b--;
  }

  let rStr = "";
  strArr.forEach(c => rStr+=c)
  return rStr;
};
