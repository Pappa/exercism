class BinarySearch {
    constructor(input) {
        this.array = this.isSorted(input) ? input.slice() : undefined;
    }

    isSorted(input) {
        return input
            .slice()
            .sort((a, b) => a - b)
            .every((item, idx) => item === input[idx]);
    }

    indexOf(value) {
        var min = 0;
        var max = this.array.length - 1;
        var idx;
        var item;

        while (min <= max) {
            idx = (min + max) / 2 | 0;
            item = this.array[idx];

            if (item < value) {
                min = idx + 1;
            } else if (item > value) {
                max = idx - 1;
            } else {
                return idx;
            }
        }
        return -1;
    }
}

module.exports = BinarySearch;