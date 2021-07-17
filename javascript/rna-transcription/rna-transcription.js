export const toRna = (dna) => {
  let rna = "";
  dna.split("").forEach(nucleotide => {
    rna = rna + dnaToRnaMap[nucleotide];
  })

  return rna
};

const dnaToRnaMap = {
  A: "U",
  C: "G",
  G: "C",
  T: "A"
};