function Words() {};

Words.prototype.count = (str) => {
	return str.toLowerCase()
		.replace(/[¡!&@$%^&:.?¿]+/g, '')
		.split(/[\s,]+/)
		.map(stripQuotes)
		.filter(w => w !== '')
		.reduce((acc, word) => {
			acc[word] = (acc.hasOwnProperty(word)) ? acc[word] + 1 : 1;
			return acc;
		}, {});
};

var stripQuotes = function(word) {
	if (word.startsWith("'") && word.endsWith("'")) {
		return word.substring(1, word.length - 1);
	}
	return word;
};

module.exports = Words;