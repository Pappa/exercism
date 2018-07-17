const other = {
    one: 'two',
    two: 'one'
};

class TwoBucket {
    constructor(s1, s2, goal, first) {
        this.initBuckets(s1, s2);
        this.goal = goal;
        this.primary = first;
        this.secondary = other[first];
        this.count = 0;
        this.fillPrimary();
        this.calculate();
    }

    initBuckets(s1, s2) {
        this.buckets = {
            one: { size: s1, value: 0 },
            two: { size: s2, value: 0 }
        };
    }

    fillPrimary() {
        this.buckets[this.primary].value = this.buckets[this.primary].size;
        this.count++;
    }

    calculate() {
        if (this.buckets.one.value === this.goal
            || this.buckets.two.value === this.goal) {
            console.log('done tidy up');
        } else {
            if (this.isFull(this.buckets[this.primary])
                && !this.isFull(this.buckets[this.secondary])
            )
            console.log('calculate here');
                // should be able to 'pour' with % 
            //this.calculate();
        }

    }

    isFull(bucket) {
        return bucket.value === bucket.size;
    }

    moves() {
        return this.count;
    }

    get goalBucket() {
        this.primary;
    }

    get otherBucket() {
        this.buckets[this.secondary].value;
    }

    switchPrimary() {
        this.primary = other[this.primary];
        this.secondary = other[this.secondary];
    }
}

module.exports = TwoBucket;