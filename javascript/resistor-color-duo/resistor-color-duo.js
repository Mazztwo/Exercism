export const decodedValue = (rColors) => {
  return parseInt(colorCodes[rColors[0]] + "" + colorCodes[rColors[1]]);
};

const colorCodes = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9
}

