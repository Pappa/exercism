const allergens = ['eggs', 'peanuts', 'shellfish', 'strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats'];

const makeBinString = (n, len) => {
    let str = (n >>> 0).toString(2);
    return (str.length < len) ? Array(len - str.length).fill('0').join('') + str : str;
};

class Allergies {

    constructor(score) {
        let binary = makeBinString(score % 256, 8);
        this.allergies = [...binary].reverse().reduce((acc, bin, idx) => {
            return Number(bin) ? acc.concat(allergens[idx]) : acc;
        }, []);
    }

    list() {
        return this.allergies;
    }

    allergicTo(thing) {
        return this.allergies.includes(thing);
    }
}

module.exports = Allergies;