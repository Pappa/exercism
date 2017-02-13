function Isogram(word) {
    this.letters = word
        .replace(/[ -]+/g, '')
        .toLowerCase()
        .split('');
};

Isogram.prototype.isIsogram = function() {
    var filtered = this.letters
        .sort()
        .reduce((acc, letter) => {
            if (!acc.includes(letter)) {
                acc.push(letter);
            }
            return acc;
        }, []);
    return this.letters.length === filtered.length;

};

module.exports = Isogram;