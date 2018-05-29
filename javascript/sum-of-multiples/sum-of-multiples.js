class SumOfMultiples {

    constructor(nums = []) {
        this.nums = nums;
    }

    to(limit) {
        return [...Array(limit).keys()]
            .filter(x => this.nums.some(n => x % n === 0))
            .reduce((acc, v) => acc + v, 0);
    }
}

module.exports = SumOfMultiples;