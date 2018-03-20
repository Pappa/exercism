const numbers = '0123456789';
const valid = numbers + ' ';

const isValid = input => {
    return input.length > 1 && [...input].every(c => valid.includes(c));
};

const checksum = (input) => {
    let sum = [...input.replace(/\D/g, '')]
        .reverse()
        .map((c, idx) => {
            return (Number(c) * (idx % 2 + 1)) % 9;
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