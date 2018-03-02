
function encode(str) {
    return group(str)
        .map(chars => {
            if (chars.length > 1) {
                return String(chars.length) + chars[0];
            }
            return chars[0];
        })
        .join('');
}

function decode(str) {
    let multiplier = 1;
    return str
        .split(/(\d+)(\D)/)
        .reduce((acc, val) => {
            if (!val) {
                multiplier = 1;
                return acc;
            }
            if (isNaN(val)) {
                acc = acc + Array(multiplier).fill(val).join('');
                multiplier = 1;
                return acc;
            }
            multiplier = Number.parseInt(val, 10);
            return acc;
        }, '');

}

function group(str) {
    let last = '';
    return str
        .split('')
        .reduce((acc, val) => {
            if (last === val) {
                acc[acc.length - 1] += val;
            } else {
                acc.push(val);
            }
            last = val;
            return acc;
        }, []);
}

module.exports = {
    encode: encode,
    decode, decode
};