export const rows = (r) => {
  if (r===0) {return [];}
  if (r===1) {return [[1]];}
  if (r===2) {return [[1],[1,1]];}

  let result = [[1],[1,1]];
  for (let i = 2; i < r; i++) {
    let prev = result[i-1];
    let temp = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        temp.push(1);
      }
      else {
        temp.push(prev[j-1] + prev[j]);
      }
    }
    result.push(temp);
  }

  return result;
};