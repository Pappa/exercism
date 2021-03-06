const range = (length, start = 0) => [...Array(length + 1).keys()].slice(start);

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

  static where({ sum, minFactor = 1, maxFactor }) {
    const as = range(maxFactor, minFactor);
    const results = [];
    const cache = new Set();
    as.forEach(a => {
      const bs = range(maxFactor, minFactor);
      bs.forEach(b => {
        const cs = range(maxFactor, minFactor);
        cs.forEach(c => {
          if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) {
            const str = [a, b, c].sort().join(",");
            const t = new Triplet(a, b, c);
            if (!cache.has(str) && (!sum || (sum && t.sum() === sum))) {
              cache.add(str);
              results.push(new Triplet(a, b, c));
            }
          }
        });
      });
    });
    return results;
  }
}
