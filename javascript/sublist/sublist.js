class Sublist {

    constructor(list = []) {
        this.list = list;
    }

    compare(list2) {
        if (equal(this.list, list2.list)) {
            return 'EQUAL';
        }
        if (contains(this.list, list2.list)) {
            return 'SUBLIST';
        }
        if (contains(list2.list, this.list)) {
            return 'SUPERLIST';
        }
        return 'UNEQUAL';
    }
}

const contains = (needle, haystack) => {
    return haystack.some((_, idx) => {
        const sub = haystack.slice(idx, idx + needle.length);
        return equal(needle, sub);
    });
}

const equal = (l1, l2) => {
    return l1.length === l2.length
        && l1.every((val, idx) => val === l2[idx]);
}

module.exports = Sublist;