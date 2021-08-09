export const hey = (message) => {
  let isYelling = (msg) => {
    if (msg === msg.toUpperCase() && msg.search(/[a-z]/ig) !== -1) {return true;}
    return false;
  };

  message = message.trim();
  if (message === "") {return "Fine. Be that way!";}

  let lastChar = message[message.length-1];

  if (lastChar === "?") {
    if (isYelling(message)) {return "Calm down, I know what I'm doing!";}
    else {return "Sure.";}
  }
  if (isYelling(message)) {return "Whoa, chill out!";}

  return "Whatever.";
};