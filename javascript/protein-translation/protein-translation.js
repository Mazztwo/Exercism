export const translate = (rna) => {
  if (!rna) { return []; }
  let translation = [];

  for (let i = 0; i < rna.length; i+=3)
  {
    let codon = rna.slice(i, i+3);
    if (codon.length === 3)
    {
      let found = false;
      for (let map of mapping)
      {
        if (map[1].includes(codon))
        {
          translation.push(map[0]);
          found = true;
          break;
        }
        else if (stopCodons.includes(codon))
        {
          return translation;
        }
      }
      if (!found) { throw new Error('Invalid codon'); }
    }
    else {  throw new Error('Invalid codon'); }
  }

  return translation;
};

const mapping = [
  ['Methionine', ['AUG']],
  ['Phenylalanine', ['UUU', 'UUC']],
  ['Leucine', ['UUA', 'UUG']],
  ['Serine', ['UCU', 'UCC', 'UCA', 'UCG']],
  ['Tyrosine', ['UAU', 'UAC']],
  ['Cysteine', ['UGU', 'UGC']],
  ['Tryptophan', ['UGG']],
];

const stopCodons = ['UAA', 'UAG', 'UGA'];