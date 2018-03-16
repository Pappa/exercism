const alphanum = 'abcdefghijklmnopqrstuvwxyz1234567890';

const normalise = (str) => {
    return [...str.toLowerCase()]
        .filter(c => alphanum.includes(c))
        .join('');
}

const getCols = (str) => Math.ceil(Math.sqrt(str.length));

const segment = (str, cols) => {
    return [...Array(cols - 1).keys()]
        .map(col => {
            let start = col * cols;
            let end = Math.min(str.length, start + cols);
            return str.slice(start, end);
        });
};

const cipher = (segments) => {
    let tmp = segments
        .reduce((acc, segment) => {
            [...segment].forEach((c, idx) => {
                acc[idx] = acc[idx] || '';
                acc[idx] += c;
            });
            return acc;
        }, [])
        .join('');
        console.log(tmp);
    return tmp;
};

class Crypto {

    constructor(input) {
        this.normalised = normalise(input);
        this.cols = getCols(this.normalised);
        this.segments = segment(this.normalised, this.cols);
        this.cipher = cipher(this.segments);
    }

    normalizePlaintext() {
        return this.normalised;
    }

    size() {
        return this.cols;
    }

    plaintextSegments() {
        return this.segments;
    }

    ciphertext() {
        return this.cipher;
    }
}

module.exports = Crypto;