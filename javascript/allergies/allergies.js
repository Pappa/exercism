const allergens = ['eggs', 'peanuts', 'shellfish', 'strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats'];

class Allergies {

    constructor(score) {
        this.allergies = [...(score % 256).toString(2)]
            .reverse()
            .reduce((acc, bin, idx) => {
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