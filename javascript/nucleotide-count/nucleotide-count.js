const nucleotides = [..."ACGT"];

export const NucleotideCounts = {
  parse: strand => {
    const letters = [...strand];
    if (!letters.every(l => nucleotides.includes(l))) {
      throw new Error("Invalid nucleotide in strand");
    }
    const totals = nucleotides.reduce((obj, n) => ({ ...obj, [n]: 0 }), {});
    letters.forEach(l => totals[l]++);
    return nucleotides.map(n => totals[n]).join(" ");
  }
};
