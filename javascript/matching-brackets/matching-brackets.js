export const isPaired = (phrase) => {
  let pairStack = [];
  for (let c of phrase)
  {
    if (c === "{" || c === "[" || c === "(") {pairStack.push(c);}
    else if (c === "}" || c === "]" || c === ")") 
    {
      if (c === "}" && pairStack[pairStack.length-1] === "{") {pairStack.pop()}
      else if (c === "]" && pairStack[pairStack.length-1] === "[") {pairStack.pop()}
      else if (c === ")" && pairStack[pairStack.length-1] === "(") {pairStack.pop()}
      else {return false;}
    }
  }

  if (pairStack.length === 0) {return true;}
  return false;
};
