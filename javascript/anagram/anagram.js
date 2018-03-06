function sort(word) {
    return word.split('').sort().join('');
}

class Anagram {

    constructor(word) {
        this.word = word.toLowerCase();
        this.sorted = sort(this.word);
    }

    matches(...input) {
        input = (Array.isArray(input[0])) ? input[0] : input;
        return input.filter(word => {
            let lower = word.toLowerCase();
            let sorted = sort(lower);
            return (lower !== this.word && sorted === this.sorted);
        });
    }
}

module.exports = Anagram;