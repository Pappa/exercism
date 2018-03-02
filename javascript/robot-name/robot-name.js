let names = new Set();
let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let numbers = '0123456789';

function makeName() {
    let name = randomChars(letters, 2) + randomChars(numbers, 3);
    if (names.has(name)) {
        return makeName();
    }
    names.add(name);
    return name;
}

function randomChars(str, len) {
    return Array(len)
        .fill(null)
        .map(_ => str.charAt(Math.floor(Math.random() * str.length)))
        .join('');
}

class RobotName {

    constructor() {
        this.reset();
    }

    reset() {
        this.name = makeName();
    }

}

module.exports = RobotName;