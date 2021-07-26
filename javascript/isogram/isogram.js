export const isIsogram = (word) => {
    let letterMap = new Map();
    for (let letter of word.toLowerCase())
    {
      if (letter === " " || letter === "-") { continue; }
      if (letterMap.has(letter))
      {
        return false;
      }
      else
      {
        letterMap.set(letter, 1);
      }
    }

    return true;
};
