export const transform = (oldScoring) => {
  let newScoring = {};

  for (let key in oldScoring) {
    let letters = oldScoring[key];
    letters.forEach(letter => {
      newScoring[letter.toLowerCase()] = parseInt(key);
    });
  }

  return newScoring;
}
