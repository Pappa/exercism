const alpha = 'abcdefghijklmnopqrstuvwxyz';

function transform(key, char) {
    let idx = alpha.indexOf(char.toLowerCase());
    if (idx < 0) {
        return char;
    }
    let sub = cycle(idx + key);
    return (alpha.includes(char)) ? sub : sub.toUpperCase();
}

function cycle(distance) {
    return alpha[distance % alpha.length];
}

class RotationalCipher {

    rotate(input, key) {
        return [...input]
            .map(transform.bind(null, key))
            .join('');
    }

}

module.exports = RotationalCipher;