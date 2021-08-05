export const score = (x, y) => {
  let dartRadius = Math.sqrt((x*x)+(y*y));
  if (dartRadius > 10) {return 0;}
  else if (dartRadius <= 10 && dartRadius > 5) {return 1;}
  else if (dartRadius <= 5 && dartRadius > 1) {return 5;}
  else if (dartRadius <= 1 && dartRadius > 0 || dartRadius === 0) {return 10;}
  else { return 0;}
};