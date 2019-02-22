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
    this.empty();
    if (bucket.value > bucket.size) {
      this.value = bucket.value - bucket.size;
      bucket.fill();
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

    this.primary = new Bucket(startWith === "one" ? s1 : s2);
    this.secondary = new Bucket(startWith === "one" ? s2 : s1);

    while (this.primary.value !== goal) {
      if (this.primary.isEmpty()) {
        this.primary.fill();
        this.count++;
      }

      if (this.secondary.isFull()) {
        this.secondary.empty();
        this.count++;
      }

      this.primary.pour(this.secondary);
      this.count++;
    }
  }

  moves() {
    return this.count;
  }
}

module.exports = TwoBucket;
