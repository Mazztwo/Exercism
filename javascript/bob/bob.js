export const hey = (message) => {
  message = message.trim();
  let ending = message[message.length-1];
  message = message.replace(/[0-9]|-|,|%|\^|\*|@|#|\$|:|\)|\(|!|\.|\?|\n|\r|\t/g, "");

  let yelling = true;
  for (let c of message) {
    if (c === " ") {continue;}
    if (!c.match(/[A-Z]/)) {
      yelling = false;
      break;
    };
  }

  if (yelling && ending === "?" && message.match(/[a-z]/gi)) {return "Calm down, I know what I'm doing!";}
  if (ending === "?") {return "Sure.";}
  if (!message.match(/[a-z]|[0-9]/gi)){return "Fine. Be that way!"}
  if (yelling) {return "Whoa, chill out!";}

  return "Whatever.";
};