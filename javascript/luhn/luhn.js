const numbers = '0123456789';
const valid = numbers + ' ';

const isValid = input => {
    return input.length > 1 && [...input].every(c => valid.includes(c));
};

const double = n => {
    let doubled = n * 2;
    return doubled > 9 ? doubled - 9 : doubled;
}

const checksum = (input) => {
    let sum = [...input]
        .filter(c => numbers.includes(c))
        .reverse()
        .map((c, idx) => {
            let n = Number(c);
            return idx % 2 === 0 ? n : double(n);
        })
        .reduce((total, n) => {
            return total + n;
        }, 0);
    return sum % 10;

};

class Luhn {
    constructor(input) {
        this.valid = isValid(input) && checksum(input) === 0;
    }
}

module.exports = Luhn;