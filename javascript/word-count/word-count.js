function Words() {};

Words.prototype.count = (str) => {
	var words = str.toLowerCase()
		.replace(/[¡!&@$%^&:.?¿]+/g, '')
		.split(/[\s,]+/)
		.map(stripQuotes)
		.filter(w => w !== '');
	return words.reduce((acc, word) => {
		acc[word] = acc[word] + 1 || 1;
		return acc;
	}, Object.create(null));
};

var stripQuotes = function(word) {
	if (word.startsWith("'") && word.endsWith("'")) {
		return word.substring(1, word.length - 1);
	}
	return word;
};

module.exports = Words;