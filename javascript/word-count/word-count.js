export const countWords = (str) => {
  str = str.toLowerCase();
  let counts = {};
  let i = 0;
  let tempWord = "";
  for (let c of str) {
    if ((/[a-z]/).test(c)) {
      tempWord+=c;
    }
    else if ((/,|!|&|@|%|\n|\s|\$/).test(c)) {
      if (tempWord.length === 0) {
        i++;
        continue;
      }
      else {
        if (tempWord in counts) {
          counts[tempWord] = counts[tempWord]+1;
          tempWord = "";
        }
        else {
          counts[tempWord] = 1;
          tempWord = "";
        }
      }
    }
    else if ((/'/).test(c)) {
      if (tempWord.length !== 0 && (str[i+1] && (/[a-z]/).test(str[i+1]))) {
        tempWord+=c;
      }
      else {
        i++;
        continue;
      }
    }
    else if ((/[0-9]/).test(c)) {
      tempWord+=c;
    }
    i++;
  }

  if (tempWord.length !== 0) {
    if (tempWord in counts) {
      counts[tempWord] = counts[tempWord]+1;
    }
    else {
      counts[tempWord] = 1;
    }
  }
  return counts;
}