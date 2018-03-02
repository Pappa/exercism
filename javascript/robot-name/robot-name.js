let names = new Set();
let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let numbers = '0123456789';

function makeName() {
    let robotName = getRandomString(letters, 2) + getRandomString(numbers, 3);
    if (names.has(robotName)) {
        return makeName();
    }
    names.add(robotName);
    return robotName;
}

function getRandomString(str, len) {
    return Array(len)
        .fill(1)
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