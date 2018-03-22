const range = (max, min) => Array.from(new Array(max - min + 1), (_, idx) => idx + min);

const contains = (needle, haystack) => {
    return haystack.some(arr => {
        return arr.every((item, idx) => item === needle[idx]);
    });
};

class Triplet {

    constructor(...numbers) {
        this.numbers = numbers;
    }

    sum() {
        return this.numbers.reduce((total, x) => total + x);
    }

    product() {
        return this.numbers.reduce((total, x) => total * x);
    }

    isPythagorean() {
        const [x, y, z] = this.numbers;
        return (
            x*x + y*y == z*z ||
            y*y + z*z == x*x ||
            x*x + z*z == y*y
        )
    }

    static where(options) {
        const max = options.maxFactor;
        const min = options.minFactor || 1;
        const sum = options.sum;
        const over = range(max, min);
        let results = [];
        let attempts = [];
        let tmp = [];
        over.forEach(x => {
            over.forEach(y => {
                over.forEach(z => {
                    const nums = [x, y, z].sort();
                    if (attempts.includes(JSON.stringify(nums))) {
                        return;
                    }
                    attempts.push(JSON.stringify(nums));
                    const triplet = new Triplet(...nums);
                    if (triplet.isPythagorean()) {
                        if (!sum || triplet.sum() === sum) {
                            results.push(triplet);
                            tmp.push(triplet.numbers);
                        }
                    }
                });
            });
        });
        return results;
    }

}

module.exports = Triplet;