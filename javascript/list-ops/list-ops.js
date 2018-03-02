class List {
    constructor(list = []) {
        this.values = list;
    }

    length() {
        return this.values.length;
    }

    append(list) {
        list.values.forEach(item => {
            this.values.push(item);
        });
        return this;
    }

    concat(list) {
        this.append(list);
        return this;
    }

    filter(predicate) {
        let results = [];
        while (this.values.length) {
            let item = this.values.shift();
            if (predicate(item)) {
                results.push(item);
            }
        }
        while (results.length) {
            this.values.push(results.shift());
        }
        return this;
    }

    map(map) {
        let results = [];
        while (this.values.length) {
            results.push(map(this.values.shift()));
        }
        while (results.length) {
            this.values.push(results.shift());
        }
        return this;
    }

    foldl(reducer, accumulator) {
        while (this.values.length) {
            accumulator = reducer(this.values.shift(), accumulator);
        }
        return accumulator;
    }

    foldr(reducer, accumulator) {
        while (this.values.length) {
            accumulator = reducer(this.values.pop(), accumulator);
        }
        return accumulator;
    }

    reverse() {
        let results = this.foldr((val, acc) => {
            acc.push(val);
            return acc;
        }, []);
        while (results.length) {
            this.values.push(results.shift());
        }
        return this;
    }
}

module.exports = List;