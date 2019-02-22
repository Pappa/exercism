const range = (length, start = 0) =>
  [...Array(length + start).keys()].slice(start);

export class Triplet {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  sum() {
    return this.a + this.b + this.c;
  }

  product() {
    return this.a * this.b * this.c;
  }

  isPythagorean() {
    const a2 = Math.pow(this.a, 2);
    const b2 = Math.pow(this.b, 2);
    const c2 = Math.pow(this.c, 2);
    return a2 + b2 == c2 || b2 + c2 == a2 || a2 + c2 == b2;
  }

  where() {}
}
