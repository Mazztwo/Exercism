export const encode = (message) => {
  let compressed = "";
  
  let count = 0;
  let prev = "";
  for (let c of message)
  {
    if (!count) 
    { 
      count++; 
      prev = c;
    }
    else
    {
      if (c === prev) { count++; }
      else
      {
        if (count > 1) { compressed += count; }
        compressed += prev;
        prev = c;
        count = 1;
      }
    }
  }

  if (count > 1) { compressed += count; }
  compressed += prev;

  return compressed;
};

export const decode = (compressed) => {
  let message = "";
  let multiplier = "";
  for (let c of compressed)
  {
    if (c.match(/[0-9]/))
    {
      multiplier += c;
    }
    else
    {
      if (multiplier.length)
      {
        message += c.repeat(parseInt(multiplier));
      }
      else { message += c; }
      multiplier = "";
    }
  }

  return message;
};