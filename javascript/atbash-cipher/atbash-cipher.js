const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const tebahpla = [...alphabet].reverse().join('');

console.log(alphabet, tebahpla);

const encode = str => {
    return [...str.toLowerCase()]
        .filter(c => alphabet.includes(c))
        .map((c, idx) => {
            let space = ((idx + 1) % 5 === 0) ? ' ' : '';
            return tebahpla[alphabet.indexOf(c)] + space;
        })
        .join('');
};

module.exports = {
    encode: encode
};