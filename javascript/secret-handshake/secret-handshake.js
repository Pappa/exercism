const handshake = [
    'wink',
    'double blink',
    'close your eyes',
    'jump'
];

function getDigits(n) {
    if (!Number.isInteger(n)) {
        throw new Error('Handshake must be a number');
    }
    return n
        .toString(2)
        .split('')
        .map(c => Number.parseInt(c, 10))
        .reverse();
}

function getCommands(digits) {
    let commands = [];
    handshake.forEach((code, index) => {
        if (digits[index]) {
            commands.push(code);
        }
    });
    if (digits.length > handshake.length) {
        commands.reverse();
    }
    return commands;
}

class Handshake {

    constructor(n) {
        let digits = getDigits(n);
        this.output = getCommands(digits);
    }

    commands() {
        return this.output;
    }

}

module.exports = Handshake;