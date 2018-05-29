class CustomSet {

    constructor(input = []) {
        this.values = input
            .reduce((acc, v) => {
                return acc.includes(v) ? acc : acc.concat(v);
            }, []);
        this.values.sort();
    }



    empty() {
        return !(this.values.length);
    }

    contains(v) {
        return this.values.includes(v);
    }

    subset(set) {
        return set.values.every(v => this.contains(v));
    }

    disjoint(set) {
        return !set.values.some(v => this.contains(v));
    }

    eql(set) {
        return this.values.length === set.values.length
            && set.values.every((v, idx) => v === this.values[idx]);
    }

    add(v) {
        if (!this.contains(v)) {
            this.values.push(v);
            this.values.sort();
        }
        return this;
    }

    intersection(set) {
        const values = this.values.reduce((acc, v) => {
            return set.contains(v) ? acc.concat(v) : acc;
        }, []); 
        return new CustomSet(values);
    }

    difference(set) {
        const values = this.values.filter(v => !set.contains(v)); 
        return new CustomSet(values);
    }

    union(set) {
        const values = set.values.concat(this.values);
        return new CustomSet(values);
    }

    clear() {
        this.values = [];
        return this;
    }

    size() {
        return this.values.length;
    }

    toList() {
        return [...this.values];
    }
}

module.exports = CustomSet;