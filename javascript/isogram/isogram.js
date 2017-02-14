function Isogram(word) {
    this.letters = word
        .replace(/[ -]+/g, '')
        .toLowerCase()
        .split('')
        .sort();
    this.filtered = this.letters
        .reduce(removeRepeats, []);
};

Isogram.prototype.isIsogram = function() {
    return this.letters.length === this.filtered.length;

};

function removeRepeats(acc, letter) {
    if (!acc.includes(letter)) {
        acc.push(letter);
    }
    return acc;
}

module.exports = Isogram;