var Hamming = function() {};

Hamming.prototype.compute = function(strand1, strand2) {
    if (strand1.length !== strand2.length) {
    	throw new Error('DNA strands must be of equal length.');
    	return;
    }
	var n1 = strand1.split('');
	var n2 = strand2.split('');
	return n1.reduce((acc, n, index) => {
		return (n === n2[index]) ? acc : acc + 1;
	}, 0);
};

module.exports = Hamming;