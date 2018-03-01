class Handshake {

    constructor(n) {
        if (!Number.isInteger(n)) {
            throw new Error('Handshake must be a number');
        }
        this.output = makeCommands(n);
    }

    commands() {
        return this.output;
    }

}

function makeCommands(n) {
    let commands = handshake
        .filter(item => n & item.num)
        .map(item => {
            return item.text;
        });
    if (n & 0b10000) {
        commands.reverse();
    }
    return commands;
}

const handshake = [
    {
        num: 0b1,
        text: 'wink'
    },
    {
        num: 0b10,
        text: 'double blink'
    },
    {
        num: 0b100,
        text: 'close your eyes'
    },
    {
        num: 0b1000,
        text: 'jump'
    }
];

module.exports = Handshake;