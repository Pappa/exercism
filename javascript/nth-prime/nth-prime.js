const LOW_PRIMES = [2, 3, 5, 7, 9, 13];
const isPrime = (n) => {
    if (n < 7) {
        return LOW_PRIMES.includes(n);
    }
    console.log(JSON.stringify(range(Math.floor(Math.sqrt(n)) + 1, 2).filter(x => x % 2)))
    return range(Math.floor(Math.sqrt(n)) + 1, 2)
        .filter(x => x % 2)
        .some(i => (n % i === 0));
};

module.exports = {
    nth: (n) => {
        if (n < 1) {
            throw new Error('Prime is not possible');
        }
        let candidate = 2;
        let primes = [];
        while (primes.length < n) {
            if (isPrime(candidate)) {
                primes.push(candidate);
            }
            candidate++;
        }
        console.log(JSON.stringify(primes));
        return primes.pop();
    }
};


const range = (end, start = 0) => [...Array(end + 1).keys()].slice(start);

