let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let tebahpla = [...alphabet].reverse().join('');
let numbers = '1234567890';
alphabet = alphabet + numbers;
tebahpla = tebahpla + numbers;

console.log(alphabet, tebahpla);

const encode = str => {
    return [...str.toLowerCase()]
        .filter(c => alphabet.includes(c))
        .map((c, idx, arr) => {
            let next = idx + 1;
            let space = (next % 5 === 0 && arr[next]) ? ' ' : '';
            return tebahpla[alphabet.indexOf(c)] + space;
        })
        .join('');
};

module.exports = {
    encode: encode
};