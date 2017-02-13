function Pangram(word) {
    this.letters = word
        .replace(/[ßäöü0-9". _-]+/g, '')
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