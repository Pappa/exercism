const TRANSCRIPTION_MAP = {
	G: 'C',
	C: 'G',
	T: 'A',
	A: 'U'
};

const NUCLEOTIDES = Object.keys(TRANSCRIPTION_MAP);

class DnaTranscriber {

	toRna(str) {
		const letters = [...str];
		if (!this.isValid(letters)) {
			throw new Error('Invalid input');
		}
		return letters
			.map(n => TRANSCRIPTION_MAP[n])
			.join('');
	}

	isValid(letters) {
		return letters.every(n => NUCLEOTIDES.includes(n));
	}
}

module.exports = DnaTranscriber;