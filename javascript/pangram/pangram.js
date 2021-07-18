export const isPangram = (input) => {
  let i = input.toLowerCase().split("");

  i.forEach(c => {
    let curr = counts.get(c);
    if(curr !== undefined) { counts.set(c, curr+1) };

  });

  let values = counts.values()
  let curr = values.next();
  while (!curr.done) {
    if (curr.value === 0) {return false;}
    curr = values.next();
  }
  return true;
};


let counts = new Map ();
counts.set('a',0);
counts.set('b',0);
counts.set('c',0);
counts.set('d',0);
counts.set('e',0);
counts.set('f',0);
counts.set('g',0);
counts.set('h',0);
counts.set('i',0);
counts.set('j',0);
counts.set('k',0);
counts.set('l',0);
counts.set('m',0);
counts.set('n',0);
counts.set('o',0);
counts.set('p',0);
counts.set('q',0);
counts.set('r',0);
counts.set('s',0);
counts.set('t',0);
counts.set('u',0);
counts.set('v',0);
counts.set('w',0);
counts.set('x',0);
counts.set('y',0);
counts.set('z',0);