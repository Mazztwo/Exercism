export const transpose = (input) => {
  let output = new Map();
  let longest = 0;
  for (let r of input) // get longest
  {
    if (r.length > longest) {longest = r.length;}
  }

  for (let row of input)
  {
    for (let i = 0; i < longest; i++)
    {
      let curr = output.get(i);
      if (row[i])
      {
        if (curr) {output.set(i, curr+=row[i] )}
        else {output.set(i, row[i])}
      }
      else 
      {
        if (curr) {output.set(i, curr+=" ");}
        else {output.set(i, " ");}
      }
    }
  }

  let result = [];
  output.forEach(v => result.push(v));
  return result;

};