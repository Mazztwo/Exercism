export const gigasecond = (currDate) => {
  let currDateInMs = currDate.getTime();
  currDateInMs = currDateInMs + (1000 * 1000000000);
  return new Date(currDateInMs);
}



