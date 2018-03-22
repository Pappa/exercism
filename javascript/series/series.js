class Series {

    constructor(digits) {
        this.digits = [...digits].map(Number);
    }

    slices(size) {
        if (size > this.digits.length) {
            throw new Error('Slice size is too big.');
        }
        return [...Array(this.digits.length - size + 1).keys()]
            .map(idx => this.digits.slice(idx, idx + size));
    }

}

module.exports = Series;