function Pangram(word) {
    this.letters = word
        .replace(/[^a-z]/gi, '')
        .toLowerCase()
        .split('')
        .sort()
        .reduce(removeRepeats, []);
};

Pangram.prototype.isPangram = function() {
    return this.letters.length === 26;
};

function removeRepeats(acc, letter) {
    if (!acc.includes(letter)) {
        acc.push(letter);
    }
    return acc;
}

module.exports = Pangram;