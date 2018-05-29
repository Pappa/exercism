class SumOfMultiples {

    constructor(nums = []) {
        this.nums = nums;
    }

    to(limit) {
        return this.nums
            .map(n => multiples(n, limit))
            .reduce(flatten, [])
            .reduce(unique, [])
            .reduce(sum, 0);
    }
}

const multiples = (n, limit) => {
    return [...Array(limit).keys()]
        .filter(x => x > 0 && x % n === 0);
}
const flatten = (acc, arr) => acc.concat(arr);
const unique = (acc, v) => acc.includes(v) ? acc : acc.concat(v);
const sum = (acc, v) => acc + v;

module.exports = SumOfMultiples;