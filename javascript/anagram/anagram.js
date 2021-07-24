export const findAnagrams = (word, candidates) => {
  let matches = [];

  for (let candidate of candidates)
  {
    let tempCandidate = candidate.toLowerCase();
    let tempWord = word.toLowerCase();

    if (tempCandidate === tempWord) {continue;}

    for (let letter of candidate.toLowerCase())
    {
      if (tempWord.includes(letter))
      {
        tempCandidate = tempCandidate.replace(letter, "");
        tempWord = tempWord.replace(letter, "");
      }
    }
    if (tempCandidate === "" && tempWord === "") {matches.push(candidate);}
  }

  return matches;
};