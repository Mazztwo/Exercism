export const parse = (phrase) => {
  phrase = phrase.replace(/_|'|,/ig, "");
  phrase = phrase.replace(/-/ig, " ");
  let acronym = "";
  for (let word of phrase.split(" "))
  {
    if (word.length) {acronym += word[0].toUpperCase();}
  }

  return acronym;
};