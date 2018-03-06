var nucleotides = 'GCTA'.split('');

var nucleotideMap = {
	G: 'C',
	C: 'G',
	T: 'A',
	A: 'U'
};

function isValid(nucleotideArray) {
	return nucleotideArray.every(n => nucleotides.includes(n));
}

function DnaTranscriber() {};

DnaTranscriber.prototype.toRna = (str) => {
	var nucleotideArray = str.split('');
	if (isValid(nucleotideArray)) {
		return nucleotideArray
			.map(n => nucleotideMap[n])
			.join('');
	}
	throw new Error('Invalid input');
};

module.exports = DnaTranscriber;