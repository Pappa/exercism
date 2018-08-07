const STOP_CODONS = ['UAA', 'UAG', 'UGA'];
const CODONS_BY_PROTEIN = {
    'Methionine': ['AUG'],
    'Phenylalanine': ['UUU', 'UUC'],
    'Leucine': ['UUA', 'UUG'],
    'Serine': ['UCU', 'UCC', 'UCA', 'UCG'],
    'Tyrosine': ['UAU', 'UAC'],
    'Cysteine': ['UGU', 'UGC'],
	'Tryptophan': ['UGG']
};
const PROTEINS = Object.keys(CODONS_BY_PROTEIN);

const splitSequence = (sequence) => {
    const codon = sequence.substring(0, 3);
    const tail = sequence.substring(3);
    return [codon, tail];
}

const getProteins = (codon) => {
    return PROTEINS.find((protein) => CODONS_BY_PROTEIN[protein].includes(codon))
};

const translate = (sequence) => {
    sequence = sequence || '';
    let output = [];
    let protein;
    while (sequence.length) {
        [codon, sequence] = splitSequence(sequence);
        if (STOP_CODONS.includes(codon)) {
            break;
        }
        protein = getProteins(codon);
        if (protein) {
            output.push(protein);
        } else {
            throw new Error('Invalid codon');
        }
    }
    return output;
};

module.exports = translate; 