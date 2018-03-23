const product = (a, b) => a * b;

const isValid = (digits, size) => size >= 0 && digits.every(d => !Number.isNaN(d));

const slices = (digits, size) => {
    return [...Array(digits.length - size + 1).keys()]
        .map(idx => digits.slice(idx, idx + size));
}

class Series {

    constructor(digits) {
        this.digits = [...digits].map(Number);
    }

    largestProduct(size) {
        if (!isValid(this.digits, size)) {
            throw new Error('Invalid input.');
        }
        if (size > this.digits.length) {
            throw new Error('Slice size is too big.');
        }
        return slices(this.digits, size)
            .reduce((acc, slice) => {
                return Math.max(acc, slice.reduce(product, 1));
            }, 0);
    }
}

module.exports = Series;