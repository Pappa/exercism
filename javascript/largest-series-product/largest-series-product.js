const product = (a, b) => a * b;

class Series {

    constructor(digits) {
        this.digits = [...digits].map(Number);
    }

    largestProduct(size) {
        if (!this.isValid(size)) {
            throw new Error('Invalid input.');
        }
        if (size > this.digits.length) {
            throw new Error('Slice size is too big.');
        }
        return this.slices(size).reduce((acc, slice) => {
            return Math.max(acc, slice.reduce(product, 1));
        }, 0);
    }

    slices(size) {
        return [...Array(this.digits.length - size + 1).keys()]
            .map(idx => this.digits.slice(idx, idx + size));
    }

    isValid(size) {
        return size >= 0 && this.digits.every(d => !Number.isNaN(d));
    }
}

module.exports = Series;