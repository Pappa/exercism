function Pangram(word) {
    this.letters = word
        .replace(/[^a-z]/gi, '')
        .toLowerCase()
        .split('')
        .sort()
        .reduce((acc, letter) => {
            if (!acc.includes(letter)) {
                acc.push(letter);
            }
            return acc;
        }, []);
};

Pangram.prototype.isPangram = function() {
    return this.letters.length === 26;
};

module.exports = Pangram;