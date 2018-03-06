const sort = word => [...word].sort().join('');

class Anagram {

    constructor(word) {
        this.word = word.toLowerCase();
        this.sorted = sort(this.word);
    }

    matches(...input) {
        input = (Array.isArray(input[0])) ? input[0] : input;
        return input.filter(word => {
            let lower = word.toLowerCase();
            return (lower !== this.word && sort(lower) === this.sorted);
        });
    }
}

module.exports = Anagram;