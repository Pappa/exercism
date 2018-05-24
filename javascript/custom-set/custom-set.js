class CustomSet {

    constructor(input) {
        this.values = input || [];
        this.values.sort();
    }

    empty() {
        return !(this.values.length);
    }

    contains(v) {
        return this.values.includes(v);
    }

    subset(set) {
        return set.values.every(v => this.values.includes(v));
    }

    disjoint(set) {
        return !set.values.some(v => this.values.includes(v));
    }

    eql(set) {
        return this.values.length === set.values.length
            && set.values.every((v, idx) => v === this.values[idx]);
    }

    add(v) {
        if (!this.values.includes(v)) {
            this.values.push(v);
            this.values.sort();
        }
        return this;
    }

    intersection(set) {
        const values = this.values.reduce((acc, v) => {
            return set.values.includes(v) ? acc.concat(v) : acc;
        }, []); 
        return new CustomSet(values);
    }

    difference(set) {
        const values = this.values.filter(v => !set.values.includes(v)); 
        return new CustomSet(values);
    }

    union(set) {
        console.log(set.values
            .concat(this.values))
        const values = set.values
            .concat(this.values)
            .reduce((acc, v) => {
                return acc.includes(v) ? acc : acc.concat(v);
            }, []);
        return new CustomSet;
    }
}

module.exports = CustomSet;