class Bucket {
  constructor(size) {
    this.size = size;
    this.value = 0;
  }

  fill() {
    this.value = this.size;
  }

  empty() {
    this.value = 0;
  }

  pour(bucket) {
    bucket.value += this.value;
    this.value = 0;
    if (bucket.value > bucket.size) {
      this.value = bucket.value - bucket.size;
      bucket.value = bucket.size;
    }
  }

  isEmpty() {
    return this.value === 0;
  }

  isFull() {
    return this.value === this.size;
  }
}

class TwoBucket {
  constructor(s1, s2, goal, startWith) {
    this.goalBucket = startWith;
    this.otherBucket = startWith === "one" ? s2 : s1;
    this.count = 0;

    this.buckets = {
      primary: new Bucket(startWith === "one" ? s1 : s2),
      secondary: new Bucket(startWith === "one" ? s2 : s1)
    };

    while (this.buckets.primary.value !== goal) {
      if (this.buckets.primary.isEmpty()) {
        this.buckets.primary.fill();
        this.count++;
      }

      if (this.buckets.secondary.isFull()) {
        this.buckets.secondary.empty();
        this.count++;
      }

      this.buckets.primary.pour(this.buckets.secondary);
      this.count++;
    }
  }

  moves() {
    return this.count;
  }
}

module.exports = TwoBucket;
